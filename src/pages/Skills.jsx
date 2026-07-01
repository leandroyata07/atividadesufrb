import React, { useState, useEffect } from 'react';
import { Terminal, Plus, Sparkles, Check, Languages } from 'lucide-react';

const Skills = () => {
  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('user_skills');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse user skills", e);
      }
    }
    return [
      { name: 'HTML5 (Marcação Semântica e Acessibilidade)', highlighted: false },
      { name: 'Lógica de Programação Básica', highlighted: false },
      { name: 'Vontade de aprender e resolver problemas', highlighted: false },
      { name: 'React.js & Hooks', highlighted: true },
      { name: 'Tailwind CSS', highlighted: true },
    ];
  });

  const [newSkill, setNewSkill] = useState('');
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  useEffect(() => {
    localStorage.setItem('user_skills', JSON.stringify(skills));
  }, [skills]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    const skillName = newSkill.trim();

    if (skillName === '') {
      setFeedback({ message: '⚠️ Por favor, digite alguma habilidade.', type: 'error' });
      return;
    }

    if (skills.some((s) => s.name.toLowerCase() === skillName.toLowerCase())) {
      setFeedback({ message: '💡 Esta habilidade já está na lista!', type: 'warning' });
      return;
    }

    setSkills([...skills, { name: skillName, highlighted: false }]);
    setNewSkill('');
    setFeedback({ message: '✅ Habilidade adicionada com sucesso!', type: 'success' });

    setTimeout(() => {
      setFeedback({ message: '', type: '' });
    }, 2500);
  };

  const toggleHighlight = (index) => {
    setSkills(
      skills.map((skill, i) =>
        i === index ? { ...skill, highlighted: !skill.highlighted } : skill
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
          <Terminal className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Minhas Habilidades</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl glassmorphism shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <span>Habilidades em Destaque</span>
                <Sparkles className="h-4 w-4 text-purple-500" />
              </h3>
              <p className="text-xs text-slate-400">Clique em uma habilidade para destacá-la</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => toggleHighlight(index)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 flex items-center gap-2 shadow-sm ${
                    skill.highlighted
                      ? 'bg-purple-600 text-white border-purple-500 hover:bg-purple-700 scale-105 shadow-purple-500/10'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:border-slate-700'
                  }`}
                >
                  {skill.highlighted && <Check className="h-4 w-4 shrink-0" />}
                  <span>{skill.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl glassmorphism shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">
              Adicionar Nova Habilidade
            </h3>

            <form onSubmit={handleAddSkill} className="space-y-4">
              <div>
                <label htmlFor="new-skill-input" className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                  Nome da Habilidade
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="new-skill-input"
                    value={newSkill}
                    onChange={(e) => {
                      setNewSkill(e.target.value);
                      if (e.target.value.length > 0) {
                        setFeedback({
                          message: `Digitando... (${e.target.value.length}/50 caracteres)`,
                          type: 'typing'
                        });
                      } else {
                        setFeedback({ message: '', type: '' });
                      }
                    }}
                    placeholder="Ex: CSS Grid, Git, JavaScript, etc."
                    maxLength={50}
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 placeholder-slate-400 text-sm transition-all"
                  />
                  <button
                    type="submit"
                    className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg transition-colors flex items-center justify-center shrink-0"
                    aria-label="Adicionar habilidade"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {feedback.message && (
                <div
                  className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${
                    feedback.type === 'error'
                      ? 'text-red-500'
                      : feedback.type === 'success'
                      ? 'text-emerald-500'
                      : feedback.type === 'warning'
                      ? 'text-amber-500'
                      : 'text-slate-400'
                  }`}
                >
                  {feedback.message}
                </div>
              )}
            </form>
          </div>
        </div>

        <div>
          <div className="p-6 rounded-2xl glassmorphism shadow-sm space-y-4">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Languages className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span>Idiomas</span>
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span className="text-slate-700 dark:text-slate-300">Português</span>
                  <span className="text-xs text-slate-400">Nativo</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full w-full rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span className="text-slate-700 dark:text-slate-300">Inglês</span>
                  <span className="text-xs text-slate-400">Básico/Intermediário</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-400 h-full w-[45%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
