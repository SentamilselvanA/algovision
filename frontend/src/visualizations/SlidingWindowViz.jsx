import { motion } from 'framer-motion';

export default function SlidingWindowViz({ step, array, variables }) {
  const { windowStart, windowEnd, k, currentSum, maxSum } = variables;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-6 text-center">
        <div className="text-lg mb-2">Window Size: <span className="text-primary font-bold">{k}</span></div>
        <div className="text-sm">Current Sum: <span className="text-yellow-400">{currentSum}</span> | Max Sum: <span className="text-green-400">{maxSum}</span></div>
      </div>
      
      <div className="relative mb-8">
        <div className="flex gap-2">
          {array.map((val, idx) => (
            <motion.div
              key={idx}
              className={`w-16 h-16 flex items-center justify-center border-2 rounded-lg font-semibold
                ${idx >= windowStart && idx <= windowEnd ? 'bg-primary border-primary text-black' : 'bg-dark-card border-dark-border'}
              `}
              animate={{ scale: idx >= windowStart && idx <= windowEnd ? 1.05 : 1 }}
            >
              {val}
            </motion.div>
          ))}
        </div>
        
        {windowStart !== undefined && windowEnd !== undefined && (
          <motion.div
            className="absolute top-0 border-4 border-yellow-400 rounded-lg pointer-events-none"
            initial={false}
            animate={{
              left: `${windowStart * 72}px`,
              width: `${(windowEnd - windowStart + 1) * 72 - 8}px`,
              height: '64px'
            }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
      
      <div className="flex gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary rounded"></div>
          <span>Window</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-4 border-yellow-400 rounded"></div>
          <span>Window Border</span>
        </div>
      </div>
    </div>
  );
}
