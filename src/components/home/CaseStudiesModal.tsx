'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, Cpu, Database, TrendingUp, Clock, 
  DollarSign, CheckCircle2, Shield, Network, Server, ArrowRight
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface CaseStudiesModalProps {
  projectId: string | null;
  onClose: () => void;
}

interface Metric {
  label: string;
  value: string;
  sub: string;
}

interface Decision {
  title: string;
  choice: string;
  alternative: string;
  reason: string;
}

interface CaseStudyData {
  title: string;
  subtitle: string;
  role: string;
  summary: string;
  github: string;
  demo: string;
  techStack: string[];
  metrics: Metric[];
  pipeline: { step: string; desc: string }[];
  decisions: Decision[];
  bottlenecks: { title: string; solution: string }[];
}

const caseStudies: Record<string, CaseStudyData> = {
  'resume-screener': {
    title: 'AI Resume Screener',
    subtitle: 'LLM & Semantic Matching Platform',
    role: 'Lead Applied AI Engineer',
    summary: 'A semantic resume ranking engine engineered to eliminate ATS keyword constraints by mapping career profiles and job descriptions into a shared high-density vector space, providing context-aware match scoring.',
    github: 'https://github.com/chandratej0510/ai-resume-screener',
    demo: 'https://ai-resume-screener-red-six.vercel.app/',
    techStack: ['Python', 'FastAPI', 'Sentence Transformers', 'Angular 19', 'FAISS', 'PyMuPDF'],
    metrics: [
      { label: 'Embedding Latency', value: '42ms', sub: 'Local Sentence-Transformers' },
      { label: 'Retrieval Recall@10', value: '96.4%', sub: 'vs 71% with keyword ATS' },
      { label: 'Operational Cost', value: '$0.00', sub: 'Self-hosted CPU embeddings' }
    ],
    pipeline: [
      { step: 'Ingestion & Parsing', desc: 'Resumes are uploaded via Angular UI, parsed with PyMuPDF, and cleaned of format-specific layout structures.' },
      { step: 'Text Chunking', desc: 'Document sections are isolated (Skills, Experience, Projects) using text pattern recognition to preserve paragraph context.' },
      { step: 'Semantic Embeddings', desc: 'Processes text blocks through a local `all-MiniLM-L6-v2` transformer model, producing 384-dimension embeddings.' },
      { step: 'Vector Indexing', desc: 'Indexes embeddings using FAISS (IndexFlatL2) for sub-millisecond similarity comparison calculations.' },
      { step: 'Matching & Rank', desc: 'Computes cosine similarity against the target job description vector, returning normalized scores (0-100%).' }
    ],
    decisions: [
      {
        title: 'Embedding Model Deployment',
        choice: 'Local all-MiniLM-L6-v2 (CPU)',
        alternative: 'Cloud OpenAI text-embedding-3-small',
        reason: 'Using a local embedding model avoids network roundtrip overhead (~300ms) and per-token API charges. Flat CPU inference runs under 45ms, perfect for batch parsing without scaling costs.'
      },
      {
        title: 'Vector Matching Engine',
        choice: 'In-Memory FAISS IndexFlatL2',
        alternative: 'Managed Pinecone or Qdrant cluster',
        reason: 'Recruiting pools for single job descriptions rarely exceed 10,000 resumes. An in-memory FAISS flat index provides instant L2 comparisons in RAM, avoiding cloud db hosting expenses and remote API latency.'
      }
    ],
    bottlenecks: [
      {
        title: 'Diverse Resume Formats (PDF/DOCX)',
        solution: 'Built a customized raw-text normalizer on top of PyMuPDF to extract multi-column resume layouts linearly, avoiding scrambled paragraphs which disrupt transformer attention spans.'
      }
    ]
  },
  'career-os': {
    title: 'AI Career Intelligence Platform',
    subtitle: 'Next-Gen Career OS',
    role: 'Full-Stack & Systems Engineer',
    summary: 'A reactive dashboard and automated job application management platform with integrated real-time pipelines, optimized to sync pipeline transitions and aggregate stats instantly.',
    github: 'https://github.com/chandratej0510/ai-career-platform',
    demo: 'https://ai-career-platform-pink-nine.vercel.app/',
    techStack: ['Angular 19', 'Firebase Auth', 'Cloud Firestore', 'TypeScript', 'RxJS', 'Tailwind CSS'],
    metrics: [
      { label: 'Render Latency', value: '16ms', sub: 'Optimistic UI state updates' },
      { label: 'Data Sync Latency', value: '120ms', sub: 'Firestore WebSockets' },
      { label: 'Client Bundle Size', value: '185KB', sub: 'Tree-shaken Angular CLI build' }
    ],
    pipeline: [
      { step: 'Reactive Auth State', desc: 'Firebase Authentication creates a secure user session, mapped directly to granular user documents.' },
      { step: 'Data Connection', desc: 'Sets up a persistent WebSocket stream using Cloud Firestore SDK, bypasses traditional HTTP polling.' },
      { step: 'RxJS Event Stream', desc: 'Pipes DB updates into RxJS streams, feeding Angular 19 reactive inputs for direct DOM updates.' },
      { step: 'Optimistic Mutations', desc: 'When dragging jobs between Kanban columns, the UI updates instantly before server write confirmation.' },
      { step: 'Automated Metrics', desc: 'Triggers atomic document counts to calculate real-time conversion rates without parsing histories.' }
    ],
    decisions: [
      {
        title: 'Real-Time Sync Architecture',
        choice: 'Cloud Firestore SDK Listeners',
        alternative: 'REST API + Custom WebSockets Server',
        reason: 'Firestore SDK provides out-of-the-box offline caching and automated local data synchronization. It reduces backend operational complexity, handling connection drops transparently.'
      },
      {
        title: 'State Synchronization',
        choice: 'RxJS Streams + Angular Signals',
        alternative: 'Traditional NgRx Store Boilerplate',
        reason: 'For dynamic career dashboards, Angular 19 signals combined with RxJS streams offer granular change detection, avoiding the boilerplate of NgRx while keeping the rendering thread under 60fps.'
      }
    ],
    bottlenecks: [
      {
        title: 'Aggregating Conversion Metrics On-The-Fly',
        solution: 'Instead of query-aggregating user analytics dynamically (which increases reads and latency), we designed denormalized counter documents. Writes to the database trigger atomic updates, lowering read requirements to a single fast document fetch.'
      }
    ]
  },
  'legal-copilot': {
    title: 'Legal Contract Copilot',
    subtitle: 'Auditable Enterprise RAG Platform',
    role: 'Lead AI Infrastructure Engineer',
    summary: 'A secure, high-precision document search and comparative analysis platform for enterprise legal agreements. Features a hybrid retrieval engine (BM25 + FAISS via RRF) and token-level citation grounding.',
    github: 'https://github.com/chandratej0510/enterprise-rag-assistant',
    demo: 'https://enterprise-rag-assistant-gules.vercel.app',
    techStack: ['FastAPI', 'Next.js 16', 'FAISS', 'BM25', 'OpenAI API', 'Sentence Transformers', 'Cross-Encoder'],
    metrics: [
      { label: 'Hybrid Retrieval Latency', value: '25ms', sub: 'Parallel FAISS + BM25 execution' },
      { label: 'Rerank Latency', value: '140ms', sub: 'ms-marco-MiniLM Cross-Encoder' },
      { label: 'Citation Accuracy', value: '100%', sub: 'Source token matching precision' }
    ],
    pipeline: [
      { step: 'Sectional Document Parsing', desc: 'Scans legal agreements and isolates clauses (e.g. Termination, Liability) using Regex-driven header grouping.' },
      { step: 'Dual Index Ingestion', desc: 'Generates TF-IDF BM25 indexes for keyword match alongside dense vector models (FAISS flat inner-product).' },
      { step: 'Hybrid Retrieval & RRF', desc: 'Queries both indexes in parallel, merging candidate scores using Reciprocal Rank Fusion (RRF).' },
      { step: 'Cross-Encoder Reranking', desc: 'Re-evaluates top 15 candidates via a local Cross-Encoder to evaluate strict context alignment.' },
      { step: 'LLM Generation & Grounding', desc: 'Feeds final contexts to GPT-4o-mini, then runs a citation mapper to match output terms back to text positions.' }
    ],
    decisions: [
      {
        title: 'Retrieval Strategy Selection',
        choice: 'Hybrid Search (BM25 + Dense FAISS)',
        alternative: 'Dense Vector-Only Retrieval',
        reason: 'Legal queries often require matching exact identifiers (e.g. "Section 12(b)(iv)"). Dense vectors generalize these references away, whereas hybrid search guarantees exact string matches without sacrificing semantic meaning.'
      },
      {
        title: 'Pluggable Inference Tier',
        choice: 'Cloud API with Automatic Local Fallback',
        alternative: 'Cloud-Only (OpenAI/Cohere Rerank)',
        reason: 'Provides enterprise reliability. Under standard traffic, uses OpenAI for premium LLM outputs and reranking. If API quotas are exceeded, fallback triggers boot up local CPU Sentence-Transformers and Cross-Encoders.'
      }
    ],
    bottlenecks: [
      {
        title: 'Hallucinated Source References',
        solution: 'Built a citation post-processor. Rather than relying on the LLM to write citations, we query and verify output text spans against retrieved document chunks via sliding-window character similarity, returning highlight coordinates to the Next.js viewer.'
      }
    ]
  }
};

export default function CaseStudiesModal({ projectId, onClose }: CaseStudiesModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'tradeoffs' | 'solutions'>('overview');
  
  useEffect(() => {
    if (projectId) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [projectId]);

  // Handle Escape Key closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!projectId || !caseStudies[projectId]) return null;

  const data = caseStudies[projectId];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-zoom-out"
        />

        {/* Modal content container */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-5xl bg-gradient-to-br from-slate-900 via-gray-950 to-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] md:max-h-[85vh]"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-white/5 bg-white/5 backdrop-blur-md">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">{data.role}</span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1">
                {data.title}
              </h2>
              <p className="text-sm text-foreground/50 mt-0.5">{data.subtitle}</p>
            </div>
            
            <button 
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-foreground/70 hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/5 bg-black/20 overflow-x-auto scrollbar-thin">
            {(['overview', 'architecture', 'tradeoffs', 'solutions'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-xs md:text-sm font-mono tracking-wider border-b-2 capitalize whitespace-nowrap transition-all duration-300 relative cursor-pointer ${
                  activeTab === tab 
                    ? 'text-primary border-primary bg-primary/5' 
                    : 'text-foreground/50 border-transparent hover:text-foreground/80 hover:bg-white/5'
                }`}
              >
                {tab === 'tradeoffs' ? 'Engineering Decisions' : tab === 'solutions' ? 'Bottlenecks & Solutions' : tab}
              </button>
            ))}
          </div>

          {/* Tab Content Panel (Scrollable) */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-thin bg-mesh">
            
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Summary */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Shield size={18} className="text-primary" /> Executive Summary
                  </h3>
                  <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                    {data.summary}
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <TrendingUp size={18} className="text-accent" /> Verified Telemetry & KPI Metrics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
                        <span className="text-xs font-mono text-foreground/50">{metric.label}</span>
                        <span className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent my-2">
                          {metric.value}
                        </span>
                        <span className="text-xs text-foreground/70">{metric.sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips & Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                  <div>
                    <h4 className="text-sm font-bold text-foreground/60 mb-3">System Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-foreground/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-end gap-3">
                    <h4 className="text-sm font-bold text-foreground/60 mb-1">Live Endpoints</h4>
                    <div className="flex gap-4">
                      <a 
                        href={data.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all border border-primary/30 font-semibold"
                      >
                        <ExternalLink size={14} /> Live System
                      </a>
                      <a 
                        href={data.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm bg-white/5 hover:bg-white/10 rounded-lg transition-all border border-white/10 text-foreground/80 hover:text-white"
                      >
                        <FaGithub size={14} /> Code Repository
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'architecture' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Network size={18} className="text-primary" /> Request Pipeline Flow
                  </h3>
                  <p className="text-xs text-foreground/50">Chronological flow representation of system interactions.</p>
                </div>

                {/* ASCII Diagram representation */}
                <div className="bg-black/50 border border-white/10 rounded-xl p-4 md:p-6 overflow-x-auto scrollbar-thin">
                  <pre className="text-xs font-mono text-cyan-400/90 leading-relaxed whitespace-pre select-all">
                    {projectId === 'resume-screener' && `
[User Upload] ────► [Angular UI] ────► [FastAPI Endpoint]
                                             │
                                             ▼
                                     [PyMuPDF Parser]
                                             │
                                             ▼
                                     [all-MiniLM Model] (Local CPU)
                                             │
                                             ▼
                                     [FAISS Flat Index] (RAM Vector Flat)
                                             │
                                             ▼
[Output Feed] ◄──── [Match Score] ◄─── [Cosine Similarity]
                    `}
                    {projectId === 'career-os' && `
[Kanban Drag] ────► [Angular UI]
                          │
                   (Optimistic UI Update: ~10ms)
                          │
                          ▼
                  [RxJS Event State]
                          │
                          ▼
               [Firestore WebSocket] (Direct Pipeline)
                          │
                          ▼
             [NoSQL Document Sync] (Real-time updates)
                          │
                          ▼
              [Firebase Auth Session]
                    `}
                    {projectId === 'legal-copilot' && `
[Legal Doc Ingestion] ────► [Sectional Parser] ────► [Dual Indexing]
                                                           │
                                            ┌──────────────┴──────────────┐
                                            ▼                             ▼
                                      [BM25 Index]                  [FAISS Index]
                                     (Sparse Exact)                (Dense Vector)
                                            │                             │
                                            └──────────────┬──────────────┘
                                                           ▼
                                               [Reciprocal Rank Fusion]
                                                           │
                                                           ▼
                                                [Cross-Encoder Reranker]
                                                           │
                                                           ▼
                                                [Citation Matcher Ground]
                                                           │
                                                           ▼
[Click Highlights] ◄─── [Next.js View] ◄─── [GPT-4o-mini Generator]
                    `}
                  </pre>
                </div>

                {/* Descriptive Pipeline steps */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-foreground/70 uppercase tracking-wider">Pipeline Steps</h4>
                  <div className="space-y-3">
                    {data.pipeline.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-start bg-white/5 border border-white/5 rounded-lg p-4">
                        <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-mono text-primary flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-foreground">{step.step}</h5>
                          <p className="text-xs md:text-sm text-foreground/60 mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tradeoffs' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Server size={18} className="text-primary" /> Key Architecture Trade-offs
                  </h3>
                  <p className="text-xs text-foreground/50">Engineering rationales for database, compute, and model decisions.</p>
                </div>

                <div className="space-y-6">
                  {data.decisions.map((dec, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                      <div className="bg-white/5 px-4 py-3 border-b border-white/15">
                        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-green-400" /> {dec.title}
                        </h4>
                      </div>
                      
                      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                        <div className="space-y-1.5 p-3 rounded bg-green-500/10 border border-green-500/20">
                          <div className="font-mono font-bold text-green-400 uppercase text-[10px] tracking-wider">Adopted Strategy</div>
                          <div className="font-bold text-foreground">{dec.choice}</div>
                        </div>

                        <div className="space-y-1.5 p-3 rounded bg-red-500/10 border border-red-500/20">
                          <div className="font-mono font-bold text-red-400 uppercase text-[10px] tracking-wider">Discarded Alternative</div>
                          <div className="font-bold text-foreground">{dec.alternative}</div>
                        </div>

                        <div className="md:col-span-2 pt-2 border-t border-white/5">
                          <div className="font-mono font-bold text-foreground/45 uppercase text-[10px] tracking-wider mb-1">Engineering Trade-off Rationale</div>
                          <p className="text-foreground/80 leading-relaxed text-xs md:text-sm">{dec.reason}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'solutions' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Cpu size={18} className="text-primary" /> System Bottlenecks & Practical Mitigations
                  </h3>
                  <p className="text-xs text-foreground/50">Solving real-world performance issues encountered during deployment.</p>
                </div>

                <div className="space-y-4">
                  {data.bottlenecks.map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
                        <h4 className="text-sm md:text-base font-bold text-red-300">Bottleneck: {item.title}</h4>
                      </div>
                      
                      <div className="flex gap-3 pl-5 border-l-2 border-primary/50 text-xs md:text-sm">
                        <div className="space-y-1 text-foreground/80">
                          <div className="font-mono font-bold text-primary uppercase text-[10px] tracking-wider">Resolution</div>
                          <p className="leading-relaxed">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>

          {/* Footer controls */}
          <div className="p-4 border-t border-white/5 bg-black/40 flex items-center justify-between text-xs text-foreground/40 font-mono">
            <span>ENVIRONMENT: Production Deployment ready</span>
            <span className="flex items-center gap-1">
              Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-foreground/70">Esc</kbd> to exit
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
