import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, MessageSquare, Terminal } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-12 px-4 sm:px-6 lg:px-8">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-100 text-primary-800 dark:bg-primary-950/60 dark:text-primary-300 border border-primary-200 dark:border-primary-800/40 mb-6 animate-pulse">
        <Sparkles className="h-3.5 w-3.5" />
        <span>Disponível para Projetos Acadêmicos</span>
      </div>

      {/* Main Hero Header */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans leading-none">
          Olá, eu sou{' '}
          <span className="bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400 bg-clip-text text-transparent block sm:inline">
            Leandro Yata
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
          Estudante de Licenciatura em Computação na UFRB e um entusiasta fascinado pelo desenvolvimento web moderno. Seja bem-vindo ao meu currículo digital interativo!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <Link to="/sobre" className="btn-primary flex items-center gap-2">
          <span>Ver Sobre Mim</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
        <Link to="/contato" className="btn-secondary flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          <span>Falar Comigo</span>
        </Link>
      </div>

      {/* Quick Cards Grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Card 1 */}
        <div className="p-6 rounded-2xl glassmorphism hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
          <div className="h-10 w-10 rounded-lg bg-primary-100 dark:bg-primary-950/60 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
            <Terminal className="h-5 w-5" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Habilidades</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Confira minhas tecnologias e gerencie minha lista de competências em tempo real.
          </p>
          <Link to="/habilidades" className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline">
            Explorar habilidades &rarr;
          </Link>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-2xl glassmorphism hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
          <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
            <BookOpen className="h-5 w-5" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Educação</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Veja detalhes da minha jornada acadêmica como graduando na UFRB.
          </p>
          <Link to="/educacao" className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
            Ver formação &rarr;
          </Link>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-2xl glassmorphism hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
          <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
            <MessageSquare className="h-5 w-5" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Contato</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Entre em contato, acesse minhas redes sociais ou envie uma mensagem direta.
          </p>
          <Link to="/contato" className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline">
            Entrar em contato &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
