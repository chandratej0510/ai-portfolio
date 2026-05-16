'use client';

import { motion } from 'framer-motion';
import { Cpu, Database, Layout, Network, Server, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'GenAI & LLMs',
    icon: <Cpu className="w-5 h-5 text-primary" />,
    skills: ['OpenAI APIs', 'LangChain', 'LangGraph', 'CrewAI', 'Hugging Face', 'RAG Architectures', 'MCP'],
    border: 'border-primary/30',
    glow: 'group-hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]'
  },
  {
    title: 'ML & Data Science',
    icon: <Network className="w-5 h-5 text-purple-400" />,
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Statistical Modeling', 'A/B Testing', 'EDA'],
    border: 'border-purple-400/30',
    glow: 'group-hover:shadow-[0_0_20px_rgba(192,132,252,0.1)]'
  },
  {
    title: 'Data Engineering & DBs',
    icon: <Database className="w-5 h-5 text-green-400" />,
    skills: ['Python', 'SQL', 'PySpark', 'Snowflake', 'FAISS', 'Pinecone', 'Milvus', 'Chroma'],
    border: 'border-green-400/30',
    glow: 'group-hover:shadow-[0_0_20px_rgba(74,222,128,0.1)]'
  },
  {
    title: 'MLOps & Automation',
    icon: <Server className="w-5 h-5 text-accent" />,
    skills: ['MLflow', 'Airflow', 'Kubernetes', 'Docker', 'Terraform', 'FastAPI', 'GitHub Actions', 'n8n'],
    border: 'border-accent/30',
    glow: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]'
  },
  {
    title: 'Cloud Platforms',
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    skills: ['AWS (S3, Lambda, EKS, SageMaker)', 'Azure (Azure ML, AKS)', 'GCP (Vertex AI)'],
    border: 'border-blue-400/30',
    glow: 'group-hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]'
  },
  {
    title: 'Frontend & Analytics',
    icon: <Layout className="w-5 h-5 text-pink-400" />,
    skills: ['Angular', 'Tableau', 'Power BI', 'Plotly', 'React', 'TypeScript'],
    border: 'border-pink-400/30',
    glow: 'group-hover:shadow-[0_0_20px_rgba(244,114,182,0.1)]'
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skillset</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Comprehensive stack for building end-to-end AI applications and ML infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-card p-6 rounded-2xl border border-white/5 hover:${category.border} transition-all duration-300 group ${category.glow}`}
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="p-2 rounded-lg bg-white/5">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white/5 border border-white/5 text-foreground/80 hover:bg-white/10 hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
