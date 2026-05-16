'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'AI Systems', href: '#ai-systems' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Concepts', href: '#ai-concepts' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:border-primary/50 transition-colors">
            <Cpu size={22} className="relative z-10" />
            <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-foreground leading-tight">
              AI Systems
            </span>
            <span className="text-[10px] uppercase tracking-widest text-primary font-mono">
              Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-white/10"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="relative px-5 py-2 text-sm font-medium rounded-lg group overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="absolute -inset-1 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-30 blur-md transition-opacity" />
            <span className="relative text-white">Deploy System</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground/80 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full glass border-b border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
