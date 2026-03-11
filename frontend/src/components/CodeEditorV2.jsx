import { motion } from 'framer-motion';
import { Code, MoreVertical } from 'lucide-react';

export default function CodeEditor({ code, language, activeLine, onLanguageChange }) {
  const languages = ['javascript', 'python', 'cpp'];
  const codeLines = code ? code.split('\n') : [];

  return (
    <div className="h-full flex flex-col glass-effect rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-dark-border/30">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-neon-cyan" />
          <h3 className="text-sm font-semibold text-white">Code Editor</h3>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Language Tabs */}
      <div className="flex gap-1 px-4 py-2 bg-dark-lighter/30">
        {languages.map(lang => (
          <button
            key={lang}
            onClick={() => onLanguageChange(lang)}
            className={`px-3 py-1 rounded text-xs font-medium transition-all ${
              language === lang
                ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50'
                : 'text-gray-400 hover:text-white hover:bg-dark-lighter/50'
            }`}
          >
            {lang === 'javascript' ? 'JavaScript' : lang === 'python' ? 'Python' : 'C++'}
          </button>
        ))}
      </div>

      {/* Code Display */}
      <div className="flex-1 overflow-auto scrollbar-hide">
        <div className="p-4 font-mono text-xs">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              className={`flex gap-4 px-3 py-1 rounded transition-all ${
                activeLine === index + 1
                  ? 'bg-neon-cyan/10 border-l-2 border-neon-cyan shadow-neon-cyan'
                  : 'hover:bg-dark-lighter/30'
              }`}
              animate={{
                backgroundColor: activeLine === index + 1 
                  ? 'rgba(34, 211, 238, 0.1)' 
                  : 'transparent'
              }}
            >
              <span className={`select-none w-8 text-right ${
                activeLine === index + 1 ? 'text-neon-cyan font-bold' : 'text-gray-600'
              }`}>
                {index + 1}
              </span>
              <pre className="flex-1">
                <code className={`${
                  activeLine === index + 1 ? 'text-white font-medium' : 'text-gray-400'
                }`}>
                  {line || ' '}
                </code>
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
