
import React from 'react';
import { useLanguageStore } from './languageStore';
import { useStore } from './store';
import { Sun, Moon, Globe } from 'lucide-react';

export const LanguageSelector = () => {
  const { currentLang, setLanguage } = useLanguageStore();
  const { setCurrentLanguage, toggleSiteTheme, globalSettings } = useStore();
  const isDark = globalSettings?.['GL10']?.params?.[6]?.value === 'Dark';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setLanguage(val);
    setCurrentLanguage(val);
    localStorage.setItem('dna-lang-pref', val);
  };

  return (
    <div className="fixed top-[26px] right-8 z-[9999] flex items-center gap-3">
      <div className="relative group">
        <div className="absolute inset-0 bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-full border border-white/10 dark:border-white/5 shadow-2xl" />
        <div className="relative flex items-center px-3 py-1.5 gap-2">
          <Globe size={14} className="text-blue-400 dark:text-blue-300 opacity-80" />
          <select 
            value={currentLang} 
            onChange={handleChange} 
            className="bg-transparent text-[10px] font-black text-slate-800 dark:text-white outline-none appearance-none cursor-pointer uppercase tracking-widest w-6 text-center"
          >
            {['en', 'ru', 'uk', 'de', 'fr', 'es', 'it', 'zh', 'pl'].map(l => (
              <option key={l} value={l} className="text-black">{l.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>
      <button 
        onClick={toggleSiteTheme} 
        className="p-2 bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-full border border-white/10 dark:border-white/5 text-slate-700 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition-all shadow-2xl group"
      >
        <div className="group-hover:rotate-45 transition-transform duration-500">
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </div>
      </button>
    </div>
  );
};
