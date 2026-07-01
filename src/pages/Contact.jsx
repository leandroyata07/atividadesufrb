import React, { useState } from 'react';
import { Mail, Github, MessageSquare, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 3500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
          <MessageSquare className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Contato</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact info details */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Informações</h3>
          
          {/* Email card */}
          <a
            href="mailto:leandroyata07@hotmail.com"
            className="flex items-center gap-4 p-4 rounded-2xl glassmorphism hover:border-emerald-500/50 hover:scale-[1.01] transition-all duration-300 shadow-sm"
          >
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">E-mail</p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">leandroyata07@hotmail.com</p>
            </div>
          </a>

          {/* Github card */}
          <a
            href="https://github.com/leandroyata07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl glassmorphism hover:border-emerald-500/50 hover:scale-[1.01] transition-all duration-300 shadow-sm"
          >
            <div className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">GitHub</p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">github.com/leandroyata07</p>
            </div>
          </a>
        </div>

        {/* Message form */}
        <div className="md:col-span-2">
          <div className="p-6 rounded-2xl glassmorphism shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">
              Envie uma Mensagem
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">Mensagem Enviada!</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Obrigado pelo seu contato. Responderei o mais rápido possível!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 placeholder-slate-400 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 placeholder-slate-400 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 placeholder-slate-400 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
