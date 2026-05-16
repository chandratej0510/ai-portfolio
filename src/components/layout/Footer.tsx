import Link from 'next/link';
import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md py-12 mt-12">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <Cpu size={20} className="text-primary" />
          <span className="font-bold text-foreground tracking-tight">AI Systems Engineering</span>
        </div>

        <div className="text-sm text-foreground/50 text-center md:text-left">
          &copy; {new Date().getFullYear()} AI Systems Engineering. All rights reserved.
        </div>

        <div className="flex items-center gap-6 text-sm font-mono text-foreground/50">
          <Link href="#home" className="hover:text-primary transition-colors">System.init()</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects()</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact()</Link>
        </div>

      </div>
    </footer>
  );
}
