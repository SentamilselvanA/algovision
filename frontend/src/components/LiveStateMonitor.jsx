import { motion } from 'framer-motion';
import { Activity, MessageSquare } from 'lucide-react';

export default function LiveStateMonitor({ variables = {}, traceLog = '' }) {
  return (
    <div className="h-full flex flex-col glass-effect rounded-xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-neon-purple" />
        <h3 className="text-lg font-semibold text-white">Live State Monitor</h3>
      </div>
      
      {/* Variables */}
      <div className="space-y-3 mb-6">
        {Object.entries(variables).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3 flex-1">
              <span className="text-gray-400 text-sm font-mono">{key}:</span>
              <span className="text-2xl font-bold text-neon-cyan">
                {Array.isArray(value) ? `[${value.join(', ')}]` : (typeof value === 'object' && value !== null ? JSON.stringify(value) : value)}
              </span>
            </div>
            <input
              type="text"
              value={Array.isArray(value) ? value.join(', ') : (typeof value === 'object' && value !== null ? JSON.stringify(value) : (value ?? ''))}
              readOnly
              className="bg-dark-lighter/50 border border-dark-border/30 rounded px-3 py-1 text-sm text-gray-400 w-32"
            />
          </motion.div>
        ))}
      </div>

      {/* Trace Log */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <MessageSquare className="w-4 h-4 text-neon-green" />
          <h4 className="text-sm font-semibold text-white">Trace Log</h4>
        </div>
        <div className="flex-1 bg-dark-lighter/30 rounded-lg p-4 border border-dark-border/30 overflow-y-auto scrollbar-hide">
          <p className="text-sm text-gray-300 leading-relaxed">{traceLog}</p>
        </div>
      </div>
    </div>
  );
}
