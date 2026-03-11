import { motion } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

export default function VisualizationPanel({ title, children, targetValue, onClose }) {
  return (
    <div className="h-full flex flex-col glass-effect rounded-xl overflow-hidden neon-border">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-neon-cyan/30 bg-gradient-to-r from-dark-card/50 to-transparent">
        <h2 className="text-lg font-semibold text-white">Visualize & Trace</h2>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-neon-cyan transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
          {onClose && (
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Target Value Input */}
      {targetValue !== undefined && (
        <div className="px-6 py-3 border-b border-dark-border/30">
          <div className="relative">
            <input
              type="text"
              value={`Track Target Value (${targetValue})`}
              readOnly
              className="w-full bg-dark-lighter/30 border-2 border-neon-cyan/50 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan shadow-neon-cyan"
            />
          </div>
        </div>
      )}

      {/* Visualization Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Ambient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center p-8">
          {children}
        </div>

        {/* Grid overlay for depth */}
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
    </div>
  );
}
