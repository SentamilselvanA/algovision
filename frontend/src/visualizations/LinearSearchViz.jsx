import { motion } from 'framer-motion';

export default function LinearSearchViz({ step, array, variables }) {
  const { current, target, found } = variables;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-4 text-lg">Target: <span className="text-primary font-bold">{target}</span></div>
      
      <div className="flex gap-2 mb-8">
        {array.map((val, idx) => (
          <motion.div
            key={idx}
            className={`w-16 h-16 flex items-center justify-center border-2 rounded-lg font-semibold
              ${idx === current ? 'bg-yellow-500 border-yellow-600 text-black' : ''}
              ${idx === found ? 'bg-green-500 border-green-600 text-black' : ''}
              ${idx < current && idx !== found ? 'bg-red-500/30 border-red-500' : ''}
              ${idx > current && idx !== found ? 'bg-dark-card border-dark-border' : ''}
            `}
            animate={{ scale: idx === current ? 1.1 : 1 }}
          >
            {val}
          </motion.div>
        ))}
      </div>
      
      <div className="flex gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span>Checking</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500/30 border-2 border-red-500 rounded"></div>
          <span>Already Checked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>Found</span>
        </div>
      </div>
    </div>
  );
}
