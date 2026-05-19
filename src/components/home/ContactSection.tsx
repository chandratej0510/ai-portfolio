'use client';

import { motion } from 'framer-motion';
import { Mail, Download, ArrowUpRight, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 -z-10" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden"
        >
          {/* Top Edge Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

          <Code2 className="w-12 h-12 text-primary/50 mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to scale your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI Infrastructure?</span>
          </h2>
          
          <p className="text-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
            Currently open to new opportunities. Whether you need a robust RAG pipeline, scalable microservices, or an intelligent agentic workflow—let's build it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="mailto:contact@example.com"
              className="w-full sm:w-auto relative group px-8 py-4 font-medium text-white bg-primary rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                <Mail size={18} />
                Initialize Connection
              </span>
            </Link>

            <Link 
              href="https://drive.google.com/file/d/11FnNsliPV5lxcHM1-U2UZBjXEZxJMPCJ/view?usp=sharing"
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 font-medium text-foreground hover:text-white bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6">
            <Link href="https://github.com/chandratej0510" target="_blank" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
              <FaGithub size={20} />
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link href="https://linkedin.com/in/chandratej007" target="_blank" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-accent transition-colors">
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
