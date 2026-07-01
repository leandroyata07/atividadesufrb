import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center justify-center gap-1.5">
          &copy; {new Date().getFullYear()} Leandro Yata. Trabalho acadêmico (UFRB).
        </p>
        <p className="text-slate-400 dark:text-slate-500 text-xs mt-2 flex items-center justify-center gap-1">
          Feito com <Heart className="h-3 w-3 text-red-500 fill-red-500" /> usando React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
