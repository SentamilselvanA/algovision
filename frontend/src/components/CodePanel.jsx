import { motion } from 'framer-motion';

export default function CodePanel({ code, language, activeLine, onLanguageChange }) {
  const languages = ['javascript', 'python', 'cpp'];
  
  const codeLines = code ? code.split('\n') : [];

  return (
    <div className="h-full flex flex-col bg-dark-card">
      {/* Language Selector */}
      <div className="flex gap-2 p-3 border-b border-dark-border">
        {languages.map(lang => (
          <button
            key={lang}
            onClick={() => onLanguageChange(lang)}
            className={`px-3 py-1 rounded text-sm font-medium transition ${
              language === lang
                ? 'bg-primary text-white'
                : 'bg-dark-bg text-gray-400 hover:text-white'
            }`}
          >
            {lang === 'javascript' ? 'JavaScript' : lang === 'python' ? 'Python' : 'C++'}
          </button>
        ))}
      </div>

      {/* Code Display */}
      <div className="flex-1 overflow-auto scrollbar-hide p-4 font-mono text-sm">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            className={`flex gap-3 px-2 py-1 rounded transition-colors ${
              activeLine === index + 1
                ? 'bg-yellow-500/20 border-l-2 border-yellow-500'
                : 'hover:bg-dark-bg/50'
            }`}
            animate={{
              backgroundColor: activeLine === index + 1 ? 'rgba(234, 179, 8, 0.2)' : 'transparent'
            }}
          >
            <span className="text-gray-500 select-none w-8 text-right">{index + 1}</span>
            <pre className="flex-1">
              <code className={activeLine === index + 1 ? 'text-white' : 'text-gray-300'}>
                {line || ' '}
              </code>
            </pre>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
