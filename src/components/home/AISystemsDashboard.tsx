'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Database, Workflow, Bot, Cpu, Network } from 'lucide-react';

const systems = [
  {
    id: 'rag',
    title: 'RAG Pipeline',
    icon: <Database className="text-primary" />,
    description: 'Real-time document ingestion, embedding generation, and semantic retrieval for LLMs.',
    metrics: [
      { label: 'Avg Latency', value: '45ms' },
      { label: 'Vector Dim', value: '1536' },
      { label: 'Recall@10', value: '94.2%' },
    ],
    status: 'Operational',
  },
  {
    id: 'agents',
    title: 'Agent Orchestration',
    icon: <Bot className="text-accent" />,
    description: 'Multi-agent coordination using LangGraph, handling complex reasoning and task delegation.',
    metrics: [
      { label: 'Active Agents', value: '12' },
      { label: 'Success Rate', value: '98.5%' },
      { label: 'Steps/Task', value: '4.2' },
    ],
    status: 'Operational',
  },
  {
    id: 'inference',
    title: 'Inference APIs',
    icon: <Cpu className="text-blue-400" />,
    description: 'Scalable FastAPI microservices deployed on AWS with GPU acceleration for ML models.',
    metrics: [
      { label: 'Requests/sec', value: '1.2k' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'P99 Latency', value: '120ms' },
    ],
    status: 'Operational',
  },
  {
    id: 'vector',
    title: 'Vector Search',
    icon: <Network className="text-purple-400" />,
    description: 'Distributed vector databases (Pinecone/FAISS) with HNSW indexing for billion-scale search.',
    metrics: [
      { label: 'Index Size', value: '4.2GB' },
      { label: 'Queries/sec', value: '850' },
      { label: 'Similarity', value: 'Cosine' },
    ],
    status: 'Scaling',
  }
];

export default function AISystemsDashboard() {
  const [activeSystem, setActiveSystem] = useState(systems[0].id);

  return (
    <section id="ai-systems" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
              <Activity className="text-accent animate-pulse" />
              AI Infrastructure Control Center
            </h2>
            <p className="text-foreground/70 text-lg">
              Live telemetry and architectural overview of deployed AI systems, from semantic retrieval to agentic workflows.
            </p>
          </div>
          
          <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-3 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono text-primary-foreground">All Systems Nominal</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Navigation Panel */}
          <div className="lg:col-span-1 space-y-4">
            {systems.map((sys) => (
              <button
                key={sys.id}
                onClick={() => setActiveSystem(sys.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 group relative overflow-hidden ${
                  activeSystem === sys.id 
                    ? 'bg-white/10 border-primary/50 shadow-[0_0_20px_rgba(37,99,235,0.1)]' 
                    : 'glass-card border-white/5 hover:border-white/20'
                }`}
              >
                {activeSystem === sys.id && (
                  <motion.div 
                    layoutId="activeSystemBg"
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className={`p-2 rounded-lg transition-colors relative z-10 ${
                  activeSystem === sys.id ? 'bg-primary/20' : 'bg-white/5 group-hover:bg-white/10'
                }`}>
                  {sys.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-foreground">{sys.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${sys.status === 'Operational' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                    <span className="text-xs font-mono text-foreground/50">{sys.status}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Detailed Dashboard */}
          <div className="lg:col-span-2 glass-card rounded-2xl border border-white/10 p-6 md:p-8 relative overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
            />
            
            <AnimatePresence mode="wait">
              {systems.map((sys) => sys.id === activeSystem && (
                <motion.div
                  key={sys.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col relative z-10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      {sys.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{sys.title}</h3>
                      <p className="text-foreground/70">{sys.description}</p>
                    </div>
                  </div>

                  {/* Telemetry Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {sys.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-black/20 rounded-lg p-4 border border-white/5">
                        <div className="text-xs font-mono text-foreground/50 mb-1">{metric.label}</div>
                        <div className="text-xl font-bold text-accent">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Simulated Visual Workflow */}
                  <div className="flex-1 bg-black/40 rounded-xl border border-white/10 p-4 font-mono text-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50" />
                    <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                      <span className="text-foreground/50">live_terminal_feed</span>
                      <Workflow size={16} className="text-primary/50" />
                    </div>
                    
                    <div className="space-y-2 text-primary-foreground/80">
                      <div className="flex gap-2">
                        <span className="text-green-400">➜</span>
                        <span>Initializing {sys.title.toLowerCase()} service...</span>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        className="flex gap-2"
                      >
                        <span className="text-blue-400">[INFO]</span>
                        <span>Connecting to clustered environment...</span>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
                        className="flex gap-2"
                      >
                        <span className="text-accent">[WORKFLOW]</span>
                        <span>Optimizing tensor operations... <span className="text-green-400">Done.</span></span>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                        className="flex gap-2"
                      >
                        <span className="text-purple-400 animate-pulse">_</span>
                        <span>Monitoring live streams...</span>
                      </motion.div>
                    </div>
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
