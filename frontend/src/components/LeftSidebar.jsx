import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Code, ChevronRight } from 'lucide-react';
import { highlightCode } from '../utils/syntaxHighlighter';

export default function LeftSidebar({ algorithm, code, language, activeLine, onLanguageChange, problem }) {
  const [activeTab, setActiveTab] = useState('code');

  const tabs = [
    { id: 'question', label: 'Question', icon: FileText },
    { id: 'algorithm', label: 'Algorithm', icon: BookOpen },
    { id: 'code', label: 'Code', icon: Code }
  ];

  const highlightedCode = code ? highlightCode(code, language) : [];

  return (
    <div className="h-full flex flex-col glass-effect rounded-xl overflow-hidden">
      {/* Tab Headers */}
      <div className="flex border-b border-dark-border/30">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-neon-cyan/10 text-neon-cyan border-b-2 border-neon-cyan'
                  : 'text-gray-400 hover:text-white hover:bg-dark-lighter/30'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {activeTab === 'question' && problem && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 space-y-4"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Problem Statement</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{problem.statement}</p>
            </div>

            <div className="bg-dark-lighter/50 rounded-lg p-4 border border-dark-border/30">
              <h4 className="text-sm font-semibold text-neon-cyan mb-3">Example</h4>
              <div className="space-y-2 text-sm font-mono">
                <div>
                  <span className="text-gray-500">Input:</span>
                  <div className="text-green-400 mt-1 ml-4">{problem.input}</div>
                </div>
                <div>
                  <span className="text-gray-500">Output:</span>
                  <div className="text-blue-400 mt-1 ml-4">{problem.output}</div>
                </div>
              </div>
            </div>

            <div className="bg-neon-cyan/5 border border-neon-cyan/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-neon-cyan mb-1">Connection</h4>
                  <p className="text-sm text-gray-300">{problem.connection}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'algorithm' && algorithm && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 space-y-4"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{algorithm.name}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{algorithm.description}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">When to Use</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{algorithm.whenToUse}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-lighter/50 rounded-lg p-3 border border-dark-border/30">
                <h4 className="text-xs font-semibold text-gray-400 mb-1">Time Complexity</h4>
                <p className="text-lg font-mono text-green-400">{algorithm.timeComplexity}</p>
              </div>
              <div className="bg-dark-lighter/50 rounded-lg p-3 border border-dark-border/30">
                <h4 className="text-xs font-semibold text-gray-400 mb-1">Space Complexity</h4>
                <p className="text-lg font-mono text-blue-400">{algorithm.spaceComplexity}</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'code' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col h-full"
          >
            {/* Language Selector */}
            <div className="flex gap-2 px-4 py-3 border-b border-dark-border/30">
              {['javascript', 'python', 'cpp'].map(lang => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    language === lang
                      ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50'
                      : 'text-gray-400 hover:text-white hover:bg-dark-lighter/50'
                  }`}
                >
                  {lang === 'javascript' ? 'JavaScript' : lang === 'python' ? 'Python' : 'C++'}
                </button>
              ))}
            </div>

            {/* Code Display with Syntax Highlighting */}
            <div className="flex-1 overflow-auto scrollbar-hide p-4 font-mono text-xs">
              {highlightedCode.map((lineTokens, lineIndex) => (
                <motion.div
                  key={lineIndex}
                  className={`flex gap-4 px-3 py-1.5 rounded transition-all ${
                    activeLine === lineIndex + 1
                      ? 'bg-neon-cyan/10 border-l-2 border-neon-cyan shadow-neon-cyan'
                      : 'hover:bg-dark-lighter/30'
                  }`}
                  animate={{
                    backgroundColor: activeLine === lineIndex + 1 
                      ? 'rgba(34, 211, 238, 0.1)' 
                      : 'transparent'
                  }}
                >
                  <span className={`select-none w-10 text-right flex-shrink-0 ${
                    activeLine === lineIndex + 1 ? 'text-neon-cyan font-bold' : 'text-gray-600'
                  }`}>
                    {lineIndex + 1}
                  </span>
                  <pre className="flex-1 whitespace-pre-wrap break-words">
                    {lineTokens.map((token, tokenIndex) => (
                      <span key={tokenIndex} className={token.color}>
                        {token.text}
                      </span>
                    ))}
                  </pre>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
