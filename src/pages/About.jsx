import React from 'react';
import { Download, User, Compass, Calendar, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400">
          <User className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Sobre Mim</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Olá! Sou estudante na <strong className="font-semibold text-slate-800 dark:text-slate-200">Universidade Federal do Recôncavo da Bahia (UFRB)</strong>, trilhando meu caminho na área da Computação.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Minha jornada no desenvolvimento web começou com o aprendizado de HTML5 semântico, CSS3 responsivo e lógica básica de programação. Este portfólio, agora migrado para <strong className="font-semibold text-primary-600 dark:text-primary-400">React e Tailwind CSS</strong>, representa um avanço no meu aprendizado técnico e design de interfaces.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Busco sempre aplicar boas práticas de acessibilidade, código limpo e padrões modernos de UX. Estou focado em absorver o máximo de conhecimento prático em bibliotecas front-end modernos.
          </p>

          <div className="pt-6">
            <a
              href="/Curriculum Vitae.pdf"
              download="Leandro Yata - Curriculum Vitae.pdf"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              <span>Baixar Currículo Completo (PDF)</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl glassmorphism space-y-4 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Destaques Rápidos
            </h4>
            
            <div className="flex items-start gap-3">
              <Compass className="h-5 w-5 text-primary-500 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400">Foco Atual</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">React & Tailwind CSS</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-indigo-500 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400">Formação</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Licenciatura em Computação</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-purple-500 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400">Instituição</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">UFRB (FSA)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
