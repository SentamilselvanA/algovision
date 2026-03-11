import { motion } from 'framer-motion';

export default function LinearSearchViz({ step, array, variables }) {
  const { current, target, found } = variables;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="mb-4 text-lg">Target: <span className="text-neon-cyan font-bold text-2xl">{target}</span></div>
      
      <div className="flex flex-wrap gap-2 mb-8 justify-center max-w-full px-4">
        {array.map((val, idx) => (
          <motion.div
            key={idx}
            className={`w-14 h-14 flex items-center justify-center border-2 rounded-lg font-semibold text-sm
              ${idx === current ? 'bg-yellow-500 border-yellow-600 text-black scale-110' : ''}
              ${idx === found ? 'bg-green-500 border-green-600 text-black scale-110' : ''}
              ${idx < current && idx !== found ? 'bg-red-500/30 border-red-500' : ''}
              ${idx > current && idx !== found ? 'bg-dark-card border-dark-border' : ''}
            `}
            animate={{ 
              scale: idx === current || idx === found ? 1.1 : 1,
              y: idx === current ? -5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {val}
          </motion.div>
        ))}
      </div>
      
      <div className="flex gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span className="text-gray-300">Checking</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500/30 border-2 border-red-500 rounded"></div>
          <span className="text-gray-300">Already Checked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-gray-300">Found</span>
        </div>
      </div>
    </div>
  );
}
