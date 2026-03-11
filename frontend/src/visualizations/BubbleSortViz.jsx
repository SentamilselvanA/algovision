import { motion } from 'framer-motion';

export default function BubbleSortViz({ step, array, variables }) {
  const { i, j, comparing, swapped } = variables;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex gap-2 items-end mb-8">
        {array.map((val, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            layout
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs mb-1">{val}</span>
            <motion.div
              className={`w-12 rounded-t-lg
                ${idx === j || idx === j + 1 ? 'bg-yellow-500' : ''}
                ${swapped && (idx === j || idx === j + 1) ? 'bg-red-500' : ''}
                ${idx >= array.length - i ? 'bg-green-500' : idx !== j && idx !== j + 1 ? 'bg-primary' : ''}
              `}
              style={{ height: `${val * 3}px` }}
              animate={{ scale: comparing && (idx === j || idx === j + 1) ? 1.1 : 1 }}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="flex gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span>Comparing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span>Swapping</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>Sorted</span>
        </div>
      </div>
    </div>
  );
}
