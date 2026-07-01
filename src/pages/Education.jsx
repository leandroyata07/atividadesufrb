import React from 'react';
import { BookOpen, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      institution: 'Universidade Federal do Recôncavo da Bahia (UFRB)',
      course: 'Licenciatura em Computação',
      campus: 'Centro de Ciência e Tecnologia em Energia e Sustentabilidade - FSA',
      period: 'Cursando',
      description: 'Curso focado na intersecção entre tecnologias computacionais, metodologia de ensino em informática, desenvolvimento de sistemas e computação científica.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
          <GraduationCap className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Educação e Formação</h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 space-y-8">
        {educationList.map((edu, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Marker */}
            <span className="absolute -left-[11px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white ring-4 ring-white dark:ring-slate-950 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="h-2.5 w-2.5" />
            </span>

            {/* Content card */}
            <div className="p-6 rounded-2xl glassmorphism shadow-sm group-hover:shadow-md transition-all duration-300">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40 mb-3">
                <Calendar className="h-3 w-3" />
                {edu.period}
              </span>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {edu.course}
              </h3>
              
              <p className="text-slate-700 dark:text-slate-300 font-semibold mt-1 flex items-center gap-1.5 text-sm">
                {edu.institution}
              </p>

              <p className="text-slate-400 dark:text-slate-500 text-xs flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3" />
                {edu.campus}
              </p>

              <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
