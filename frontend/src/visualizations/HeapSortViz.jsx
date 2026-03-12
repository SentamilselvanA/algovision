import { motion } from 'framer-motion';

export default function HeapSortViz({ step, array, variables }) {
  const { i, j, comparing, swapped, sorted } = variables;

  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="flex flex-wrap gap-2 items-end justify-center max-w-4xl">
        {array?.map((value, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col items-center`}
            animate={{ scale: comparing && (index === i || index === j) ? 1.1 : 1 }}
          >
            <motion.div
              className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-lg border-2 transition-all
                ${sorted?.includes(index) ? 'bg-green-500 border-green-400 text-black shadow-lg shadow-green-500/50' : ''}
                ${comparing && index === i ? 'bg-yellow-500 border-yellow-400 text-black shadow-lg shadow-yellow-500/50' : ''}
                ${comparing && index === j ? 'bg-purple-500 border-purple-400 text-black shadow-lg shadow-purple-500/50' : ''}
                ${swapped && (index === i || index === j) ? 'bg-red-500 border-red-400 text-black shadow-lg shadow-red-500/50' : ''}
                ${!sorted?.includes(index) && !comparing && !swapped ? 'bg-dark-card border-neon-cyan text-white' : ''}
              `}
              animate={{
                y: comparing && (index === i || index === j) ? -10 : 0
              }}
            >
              {value}
            </motion.div>
            <span className="text-xs text-gray-500 mt-1">{index}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
