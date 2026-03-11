import { motion } from 'framer-motion';

export default function BinarySearchViz({ step, array, variables }) {
  const { left, right, mid, target, found } = variables;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex flex-wrap gap-2 mb-8 justify-center max-w-full px-4">
        {array.map((val, idx) => (
          <motion.div
            key={idx}
            className={`w-14 h-14 flex items-center justify-center border-2 rounded-lg font-semibold text-sm
              ${idx === mid ? 'bg-yellow-500 border-yellow-600 text-black scale-110' : ''}
              ${idx === found ? 'bg-green-500 border-green-600 text-black scale-110' : ''}
              ${idx >= left && idx <= right && idx !== mid && idx !== found ? 'bg-neon-cyan/20 border-neon-cyan' : 'bg-dark-card border-dark-border'}
              ${idx < left || idx > right ? 'opacity-30' : ''}
            `}
            animate={{ 
              scale: idx === mid || idx === found ? 1.1 : 1,
              y: idx === mid ? -5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {val}
          </motion.div>
        ))}
      </div>
      
      <div className="flex gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-neon-cyan/20 border-2 border-neon-cyan rounded"></div>
          <span className="text-gray-300">Search Range</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span className="text-gray-300">Mid Point</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-gray-300">Found</span>
        </div>
      </div>
    </div>
  );
}
