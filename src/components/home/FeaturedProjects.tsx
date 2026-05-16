'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowRight, Server, Search } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const projects = [
  {
    title: 'AI Resume Screener',
    subtitle: 'LLM & Semantic Matching Platform',
    description: 'An intelligent candidate evaluation system that leverages semantic embeddings and vector similarity to rank candidates against job descriptions with high precision.',
    tags: ['Python', 'FastAPI', 'Sentence Transformers', 'Angular', 'Vector Embeddings'],
    icon: <Search className="w-6 h-6 text-primary" />,
    color: 'from-primary/20 to-blue-500/20',
    borderGlow: 'hover:border-primary/50',
    links: {
      demo: 'https://ai-resume-screener-red-six.vercel.app/',
      github: 'https://github.com/chandratej0510/ai-resume-screener',
      architecture: '#architecture',
      caseStudy: '#architecture'
    }
  },
  {
    title: 'AI Career Intelligence Platform',
    subtitle: 'Next-Gen Career OS',
    description: 'A scalable job application tracking platform with workflow automation, analytics dashboards, and AI-assisted tracking features. Designed Firestore-backed data pipelines for real-time updates.',
    tags: ['Angular 19', 'Firebase', 'TypeScript', 'Firestore', 'Semantic Matching'],
    icon: <Layers className="w-6 h-6 text-accent" />,
    color: 'from-accent/20 to-cyan-500/20',
    borderGlow: 'hover:border-accent/50',
    links: {
      demo: 'https://ai-career-platform-pink-nine.vercel.app/',
      github: 'https://github.com/chandratej0510/ai-career-platform',
      architecture: '#architecture',
      caseStudy: '#architecture'
    }
  },
  {
    title: 'Enterprise RAG Assistant',
    subtitle: 'Coming Soon',
    description: 'A highly scalable Retrieval-Augmented Generation pipeline designed for enterprise knowledge bases, featuring multi-document reasoning and grounded factual responses.',
    tags: ['LangChain', 'FAISS', 'Pinecone', 'RAG', 'Semantic Retrieval'],
    icon: <Server className="w-6 h-6 text-purple-400" />,
    color: 'from-purple-500/20 to-pink-500/20',
    borderGlow: 'hover:border-purple-500/50',
    links: {
      demo: '#',
      github: 'https://github.com/chandratej0510/enterprise-rag-assistant',
      architecture: '#architecture',
      caseStudy: '#architecture'
    }
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Production-Ready <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Systems</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl">
            A showcase of fully deployed, scalable AI architectures and full-stack platforms engineered for real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl border border-white/5 overflow-hidden flex flex-col group transition-colors duration-500 ${project.borderGlow}`}
            >
              {/* Project Header / Visual */}
              <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                <div className="relative z-10 w-16 h-16 rounded-2xl glass flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-2">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">{project.subtitle}</span>
                  <h3 className="text-2xl font-bold mt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                  <Link href={project.links.demo} target="_blank" className="flex items-center justify-center gap-2 py-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors border border-primary/20">
                    <ExternalLink size={14} /> Live Demo
                  </Link>
                  <Link href={project.links.github} target="_blank" className="flex items-center justify-center gap-2 py-2 text-sm bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                    <FaGithub size={14} /> Code
                  </Link>
                  <Link href={project.links.architecture} className="col-span-2 flex items-center justify-between px-4 py-2 text-sm bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 group/link">
                    <span>View Architecture & Case Study</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
