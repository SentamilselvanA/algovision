import { motion } from 'framer-motion';

export default function BinarySearchViz({ step, array, variables }) {
  const { left, right, mid, target, found } = variables;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex gap-2 mb-8">
        {array.map((val, idx) => (
          <motion.div
            key={idx}
            className={`w-16 h-16 flex items-center justify-center border-2 rounded-lg font-semibold
              ${idx === mid ? 'bg-yellow-500 border-yellow-600 text-black' : ''}
              ${idx === found ? 'bg-green-500 border-green-600 text-black' : ''}
              ${idx >= left && idx <= right && idx !== mid && idx !== found ? 'bg-primary/20 border-primary' : 'bg-dark-card border-dark-border'}
              ${idx < left || idx > right ? 'opacity-30' : ''}
            `}
            animate={{ scale: idx === mid ? 1.1 : 1 }}
          >
            {val}
          </motion.div>
        ))}
      </div>
      
      <div className="flex gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary/20 border-2 border-primary rounded"></div>
          <span>Search Range</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span>Mid Point</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>Found</span>
        </div>
      </div>
    </div>
  );
}
