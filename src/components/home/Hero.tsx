'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Database, Network } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-mono text-foreground/80">Available for new opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Building Deployable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                  AI Systems
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-foreground/70 max-w-xl leading-relaxed">
                Applied AI Engineer focused on RAG, LLMs, semantic search, AI agents, FastAPI, Angular, Firebase, and scalable AI workflows.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                href="#projects" 
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-white bg-primary rounded-lg overflow-hidden transition-all hover:scale-[1.02]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                href="https://github.com/chandratej0510" 
                target="_blank"
                className="inline-flex items-center justify-center p-3 text-foreground/70 hover:text-foreground bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all hover:scale-[1.02]"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </Link>
              
              <Link 
                href="https://linkedin.com/in/chandratej007" 
                target="_blank"
                className="inline-flex items-center justify-center p-3 text-foreground/70 hover:text-foreground bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all hover:scale-[1.02]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
              
              <Link 
                href="https://drive.google.com/file/d/1GDRwWbDns6pJqAIgChlD2qnsGCvLTm5l/view?usp=sharing" 
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-foreground/80 hover:text-foreground bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all hover:scale-[1.02]"
              >
                <Download size={18} />
                <span>Resume</span>
              </Link>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-foreground/50 mb-4 font-mono">Tech Stack / Expertise</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Terminal size={18} className="text-primary" />
                  <span className="text-sm font-medium">FastAPI & Python</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Database size={18} className="text-accent" />
                  <span className="text-sm font-medium">Vector DBs & RAG</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Network size={18} className="text-blue-400" />
                  <span className="text-sm font-medium">AI Agents</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Image / Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto"
          >
            {/* Holographic glowing borders & container */}
            <div className="relative aspect-[4/5] rounded-2xl glow-border p-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass z-10 border border-white/10">
                <Image
                  src="/profile-v5.png"
                  alt="Applied AI Engineer"
                  fill
                  className="object-cover opacity-90 mix-blend-lighten"
                  priority
                />
                
                {/* Tech overlay elements */}
                <div className="absolute top-4 right-4 glass-card px-3 py-1.5 rounded-lg border border-primary/30 flex items-center gap-2 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs font-mono text-primary-foreground">System Online</span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-lg border border-accent/30 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-accent font-mono uppercase">Current Task</span>
                      <span className="text-sm font-medium">Optimizing RAG Pipeline</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-accent/50 flex items-center justify-center">
                      <span className="text-xs">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
