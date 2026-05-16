'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Search, Database, Bot, Zap, ArrowRight } from 'lucide-react';

const concepts = [
  {
    id: 'embeddings',
    title: 'Embeddings & Vectors',
    icon: <Brain className="text-primary" />,
    description: 'Transforming unstructured data (text, images) into dense numerical arrays, allowing ML models to understand semantic meaning.',
    visualization: (
      <div className="flex items-center justify-between gap-4 w-full px-4">
        <div className="flex-1 bg-white/5 p-3 rounded text-xs font-mono text-center border border-white/10">"AI Engineering"</div>
        <ArrowRight size={16} className="text-primary/50" />
        <div className="flex-1 bg-primary/10 p-3 rounded text-xs font-mono text-center border border-primary/30 text-primary-foreground flex flex-col gap-1">
          <span>[0.12, -0.45, ...]</span>
          <span className="text-[10px] text-primary/70">1536 dimensions</span>
        </div>
      </div>
    )
  },
  {
    id: 'cosine',
    title: 'Cosine Similarity',
    icon: <Search className="text-accent" />,
    description: 'Measuring the distance between two vectors in multi-dimensional space to determine how semantically similar they are.',
    visualization: (
      <div className="relative h-24 w-full flex items-center justify-center">
        <div className="absolute w-full h-px bg-white/10" />
        <div className="absolute h-full w-px bg-white/10" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <motion.line x1="50" y1="50" x2="80" y2="20" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }} />
          <motion.line x1="50" y1="50" x2="90" y2="40" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }} />
          <path d="M 70 30 A 15 15 0 0 1 80 43" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>
    )
  },
  {
    id: 'rag',
    title: 'Retrieval-Augmented Gen',
    icon: <Database className="text-purple-400" />,
    description: 'Grounding Large Language Models with external knowledge bases to reduce hallucinations and provide domain-specific answers.',
    visualization: (
      <div className="flex items-center justify-between gap-2 w-full text-xs font-mono">
        <div className="p-2 border border-white/10 rounded bg-white/5">Query</div>
        <ArrowRight size={12} className="text-foreground/30" />
        <div className="p-2 border border-purple-400/30 rounded bg-purple-400/10 text-purple-200">VectorDB</div>
        <ArrowRight size={12} className="text-foreground/30" />
        <div className="p-2 border border-white/10 rounded bg-white/5">Context</div>
        <ArrowRight size={12} className="text-foreground/30" />
        <div className="p-2 border border-primary/30 rounded bg-primary/20 text-primary-foreground">LLM</div>
      </div>
    )
  },
  {
    id: 'agents',
    title: 'AI Agents',
    icon: <Bot className="text-green-400" />,
    description: 'Autonomous systems powered by LLMs that can reason, plan, use external tools, and execute complex multi-step workflows.',
    visualization: (
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="p-2 border border-green-400/30 rounded-full bg-green-400/10 text-green-400 animate-pulse">Orchestrator</div>
        <div className="flex gap-4">
          <div className="p-1 px-2 border border-white/10 rounded text-[10px] bg-white/5">Search Tool</div>
          <div className="p-1 px-2 border border-white/10 rounded text-[10px] bg-white/5">Code Env</div>
          <div className="p-1 px-2 border border-white/10 rounded text-[10px] bg-white/5">API Client</div>
        </div>
      </div>
    )
  }
];

export default function AIConceptsPlayground() {
  const [activeConcept, setActiveConcept] = useState(concepts[0].id);

  return (
    <section id="ai-concepts" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            AI Concepts <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Playground</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Interactive visual explanations of the core machine learning and generative AI architectures powering my projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Concept Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setActiveConcept(concept.id)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                  activeConcept === concept.id 
                    ? 'bg-primary/5 border-primary/50 shadow-[0_0_30px_rgba(37,99,235,0.15)]' 
                    : 'glass-card border-white/5 hover:border-white/20'
                }`}
              >
                {activeConcept === concept.id && (
                  <motion.div 
                    layoutId="activeConceptBorder"
                    className="absolute inset-0 border-2 border-primary/50 rounded-2xl pointer-events-none"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${activeConcept === concept.id ? 'bg-primary/20' : 'bg-white/5'}`}>
                    {concept.icon}
                  </div>
                  <h3 className="font-semibold">{concept.title}</h3>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {concept.description}
                </p>
              </button>
            ))}
          </div>

          {/* Interactive Visualization Arena */}
          <div className="glass-card h-[400px] rounded-3xl border border-white/10 p-8 flex flex-col justify-center relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            
            <AnimatePresence mode="wait">
              {concepts.map((concept) => concept.id === activeConcept && (
                <motion.div
                  key={concept.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center gap-8 relative z-10"
                >
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-black/40 border border-white/10 mb-4 shadow-xl">
                      {concept.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-mono tracking-tight">{concept.title}</h3>
                  </div>

                  <div className="w-full max-w-md p-6 bg-black/40 rounded-xl border border-white/5 shadow-inner">
                    {concept.visualization}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
