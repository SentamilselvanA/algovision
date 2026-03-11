import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Maximize2, Edit2, Check } from 'lucide-react';

export default function VisualizationPanelV2({ 
  title, 
  children, 
  targetValue, 
  onTargetChange,
  hasTargetInput,
  onClose 
}) {
  const [isEditingTarget, setIsEditingTarget] = useState(false);
  const [tempTarget, setTempTarget] = useState(targetValue || '');

  const handleTargetSubmit = () => {
    const value = parseInt(tempTarget);
    if (!isNaN(value) && onTargetChange) {
      onTargetChange(value);
    }
    setIsEditingTarget(false);
  };

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

      {/* Target Value Input - Editable */}
      {hasTargetInput && (
        <div className="px-6 py-3 border-b border-dark-border/30">
          <div className="relative flex items-center gap-2">
            {isEditingTarget ? (
              <>
                <input
                  type="number"
                  value={tempTarget}
                  onChange={(e) => setTempTarget(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTargetSubmit()}
                  className="flex-1 bg-dark-lighter/50 border-2 border-neon-cyan/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-cyan shadow-neon-cyan"
                  placeholder="Enter target value"
                  autoFocus
                />
                <button
                  onClick={handleTargetSubmit}
                  className="p-2 bg-neon-cyan/20 hover:bg-neon-cyan/30 border border-neon-cyan/50 rounded-lg transition-all"
                >
                  <Check className="w-5 h-5 text-neon-cyan" />
                </button>
              </>
            ) : (
              <>
                <div className="flex-1 bg-dark-lighter/30 border-2 border-neon-cyan/50 rounded-lg px-4 py-2 text-white shadow-neon-cyan">
                  Track Target Value ({targetValue})
                </div>
                <button
                  onClick={() => {
                    setTempTarget(targetValue);
                    setIsEditingTarget(true);
                  }}
                  className="p-2 bg-dark-lighter/50 hover:bg-neon-cyan/20 border border-dark-border/30 hover:border-neon-cyan/50 rounded-lg transition-all"
                >
                  <Edit2 className="w-5 h-5 text-neon-cyan" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Visualization Content - Larger area */}
      <div className="flex-1 relative overflow-hidden min-h-0">
        {/* Ambient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 pointer-events-none"></div>
        
        {/* Content - with proper overflow handling */}
        <div className="relative h-full flex items-center justify-center p-6 overflow-auto scrollbar-hide">
          <div className="w-full max-w-full">
            {children}
          </div>
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
