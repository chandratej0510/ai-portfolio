'use client';

import { motion } from 'framer-motion';
import { Database, Server, Cpu, FileText, LayoutTemplate, Layers } from 'lucide-react';

export default function ArchitectureGallery() {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <Layers className="text-primary" />
            System Architecture
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl">
            High-level data flow and infrastructure blueprints for production pipelines.
          </p>
        </div>

        {/* Pipeline Diagram: Resume Screener */}
        <div className="glass-card rounded-2xl border border-white/10 p-8 lg:p-12 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-4">
            <div className="text-xs font-mono px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full">
              AI Resume Screener Pipeline
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-8">
            
            {/* Input Node */}
            <div className="flex flex-col items-center gap-3 relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center shadow-lg relative group">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <FileText className="w-8 h-8 text-foreground/80 relative z-10" />
              </div>
              <span className="text-sm font-mono text-foreground/70">PDF Parsing</span>
            </div>

            {/* Data Flow Indicator */}
            <div className="flex-1 w-full h-12 relative hidden lg:block">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2" />
              <motion.div 
                className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-primary -translate-y-1/2 shadow-[0_0_10px_#2563eb]"
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Processing Node */}
            <div className="flex flex-col items-center gap-3 relative z-10">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.15)] relative group">
                <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Cpu className="w-10 h-10 text-white relative z-10" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-foreground">FastAPI + NLP</span>
                <span className="text-xs font-mono text-foreground/50">Sentence Transformers</span>
              </div>
            </div>

            {/* Data Flow Indicator */}
            <div className="flex-1 w-full h-12 relative hidden lg:block">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2" />
              <motion.div 
                className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-accent -translate-y-1/2 shadow-[0_0_10px_#06b6d4]"
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
              />
            </div>

            {/* Storage Node */}
            <div className="flex flex-col items-center gap-3 relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center shadow-lg relative group">
                <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Database className="w-8 h-8 text-purple-400 relative z-10" />
              </div>
              <span className="text-sm font-mono text-foreground/70">Vector Embeddings</span>
            </div>

            {/* Data Flow Indicator */}
            <div className="flex-1 w-full h-12 relative hidden lg:block">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2" />
              <motion.div 
                className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-purple-400 -translate-y-1/2 shadow-[0_0_10px_#c084fc]"
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
              />
            </div>

            {/* Frontend Node */}
            <div className="flex flex-col items-center gap-3 relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center shadow-lg relative group">
                <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <LayoutTemplate className="w-8 h-8 text-red-400 relative z-10" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-mono text-foreground/70">Angular UI</span>
                <span className="text-xs text-foreground/40">Dashboard</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
