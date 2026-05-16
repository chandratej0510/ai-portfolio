'use client';

import { motion } from 'framer-motion';
import { Activity, GitBranch, CheckCircle2, Clock } from 'lucide-react';

const roadmapItems = [
  {
    id: 'resume-screener',
    title: 'AI Resume Screener',
    status: 'In Production',
    progress: 100,
    description: 'Fully deployed semantic matching platform utilizing FastAPI and Sentence Transformers.',
    icon: <CheckCircle2 className="w-5 h-5 text-green-400" />
  },
  {
    id: 'career-os',
    title: 'AI Career Intelligence Platform',
    status: 'Beta Testing',
    progress: 85,
    description: 'Finalizing the Angular 19 frontend integration with Firebase and NLP microservices.',
    icon: <Activity className="w-5 h-5 text-primary" />
  },
  {
    id: 'enterprise-rag',
    title: 'Enterprise RAG Assistant',
    status: 'Architecture Design',
    progress: 30,
    description: 'Evaluating vector database sharding strategies (Pinecone) and multi-agent frameworks.',
    icon: <Clock className="w-5 h-5 text-accent" />
  }
];

export default function CurrentlyBuilding() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-black/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3">
              <GitBranch className="text-primary" />
              Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Pipelines</span>
            </h2>
            <p className="text-foreground/70 mt-2 text-lg">
              What I'm currently engineering and deploying.
            </p>
          </div>
          
          <div className="glass px-4 py-2 rounded-full border border-primary/30 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-mono text-primary-foreground tracking-wider">Live Development</span>
          </div>
        </div>

        <div className="space-y-8">
          {roadmapItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group"
            >
              {/* Progress Background Fill */}
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/5 to-transparent -z-10 transition-all duration-1000 ease-out"
                style={{ width: `${item.progress}%` }}
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded border border-white/10 text-foreground/70 hidden sm:block">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm">{item.description}</p>
                </div>

                <div className="w-full md:w-64 flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-mono text-foreground/60">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${
                        item.progress === 100 ? 'from-green-500 to-emerald-400' : 'from-primary to-accent'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
