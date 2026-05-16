'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Generative AI Engineer (Data Scientist)',
    company: 'JPMorgan Chase & Co.',
    date: 'Aug 2025 - Present',
    description: 'Engineered a RAG system using LangChain and LangGraph to process natural language queries across 500K+ banking transactions, reducing manual data retrieval time by 60%. Designed multi-agent LLM workflows for automated credit risk assessment, improving accuracy from 73% to 92%. Deployed OpenAI embeddings with Pinecone semantic search, cutting hallucination rate by 40%.',
    tech: ['LangChain', 'LangGraph', 'Pinecone', 'AWS Lambda', 'FastAPI', 'OpenAI APIs', 'n8n'],
    status: 'current'
  },
  {
    role: 'Associate Data Scientist (ML Engineer)',
    company: 'Johnson & Johnson',
    date: 'June 2022 - July 2024',
    description: 'Developed ensemble ML models (XGBoost, Random Forest) achieving 87% accuracy in readmission prediction. Built end-to-end ML pipelines using Apache Airflow and scikit-learn, cutting model development time from 6 weeks to 2 weeks. Containerized inference services with Docker and deployed on AWS EKS, serving 5K+ daily predictions at <200ms latency.',
    tech: ['XGBoost', 'Apache Airflow', 'Docker', 'AWS EKS', 'Terraform', 'MLflow', 'Scikit-learn'],
    status: 'past'
  },
  {
    role: 'Data Science Intern',
    company: 'Johnson & Johnson',
    date: 'Jan 2022 - June 2022',
    description: 'Performed extensive EDA, feature engineering, and assisted in building baseline models for predictive healthcare analytics and supply chain optimization.',
    tech: ['EDA', 'Feature Engineering', 'Python', 'SQL', 'Data Science'],
    status: 'past'
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experience</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Building and scaling ML infrastructure at industry-leading enterprises.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-white/10 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline Node */}
                <div className={`absolute left-[-4px] md:left-[28px] top-1 w-3 h-3 rounded-full border-2 ${
                  exp.status === 'current' 
                    ? 'border-primary bg-primary shadow-[0_0_10px_rgba(37,99,235,0.8)]' 
                    : 'border-white/20 bg-background'
                }`} />

                <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/5 hover:border-white/10 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-foreground/80 font-medium">
                        <Briefcase size={16} className="text-primary/70" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/50 font-mono bg-white/5 px-3 py-1 rounded-full w-fit">
                      <Calendar size={14} />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-foreground/80 hover:border-primary/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
