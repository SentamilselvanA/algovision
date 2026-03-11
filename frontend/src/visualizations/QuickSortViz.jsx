import { motion } from 'framer-motion';

export default function QuickSortViz({ step, array, variables }) {
  const { pivot, left, right, i, j, sorted } = variables;

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
                ${idx === pivot ? 'bg-purple-500' : ''}
                ${idx === i || idx === j ? 'bg-yellow-500' : ''}
                ${sorted?.includes(idx) ? 'bg-green-500' : ''}
                ${idx >= left && idx <= right && idx !== pivot && idx !== i && idx !== j && !sorted?.includes(idx) ? 'bg-primary' : ''}
                ${(idx < left || idx > right) && !sorted?.includes(idx) && idx !== pivot ? 'bg-gray-600' : ''}
              `}
              style={{ height: `${val * 3}px` }}
              animate={{ 
                scale: idx === pivot ? 1.15 : (idx === i || idx === j ? 1.1 : 1) 
              }}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="flex gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-500 rounded"></div>
          <span>Pivot</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span>Comparing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>Sorted</span>
        </div>
      </div>
    </div>
  );
}
