import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function CallStack({ stack = [] }) {
  return (
    <div className="h-full flex flex-col glass-effect rounded-xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-5 h-5 text-neon-cyan" />
        <h3 className="text-lg font-semibold text-white">Call Stack</h3>
      </div>
      
      <div className="flex-1 space-y-2 overflow-y-auto scrollbar-hide">
        {stack.length === 0 ? (
          <div className="text-gray-500 text-sm text-center py-8">
            No active function calls
          </div>
        ) : (
          stack.map((call, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-lighter/50 rounded-lg p-3 border border-dark-border/30 hover:border-neon-cyan/50 transition-colors"
            >
              <div className="font-mono text-sm text-neon-cyan">{call.function}</div>
              {call.params && (
                <div className="text-xs text-gray-400 mt-1">{call.params}</div>
              )}
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
