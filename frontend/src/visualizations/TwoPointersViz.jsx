import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function TwoPointersViz({ step, array, variables }) {
  const { left, right, target, found } = variables;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-4 text-lg">Target: <span className="text-primary font-bold">{target}</span></div>
      
      <div className="flex gap-2 mb-4">
        {array.map((val, idx) => (
          <motion.div
            key={idx}
            className={`w-16 h-16 flex items-center justify-center border-2 rounded-lg font-semibold
              ${idx === left ? 'bg-blue-500 border-blue-600 text-black' : ''}
              ${idx === right ? 'bg-purple-500 border-purple-600 text-black' : ''}
              ${found && (idx === left || idx === right) ? 'bg-green-500 border-green-600' : ''}
              ${idx !== left && idx !== right ? 'bg-dark-card border-dark-border' : ''}
            `}
            animate={{ scale: idx === left || idx === right ? 1.1 : 1 }}
          >
            {val}
          </motion.div>
        ))}
      </div>
      
      <div className="flex gap-2 mb-8">
        {array.map((_, idx) => (
          <div key={idx} className="w-16 flex justify-center">
            {idx === left && (
              <motion.div initial={{ y: 10 }} animate={{ y: 0 }} className="text-blue-500">
                <ArrowUp className="w-6 h-6" />
              </motion.div>
            )}
            {idx === right && (
              <motion.div initial={{ y: 10 }} animate={{ y: 0 }} className="text-purple-500">
                <ArrowUp className="w-6 h-6" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          <span>Left Pointer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-500 rounded"></div>
          <span>Right Pointer</span>
        </div>
      </div>
    </div>
  );
}
