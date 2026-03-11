import { motion } from 'framer-motion';

export default function DFSViz({ step, graph, variables }) {
  const { current, visited, stack } = variables;
  
  const nodes = Object.keys(graph);
  const positions = {
    0: { x: 200, y: 50 },
    1: { x: 100, y: 150 },
    2: { x: 300, y: 150 },
    3: { x: 50, y: 250 },
    4: { x: 150, y: 250 },
    5: { x: 250, y: 250 },
    6: { x: 350, y: 250 }
  };

  return (
    <div className="relative h-full flex items-center justify-center">
      <svg className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
        {nodes.map(node => 
          graph[node].map(neighbor => (
            <line
              key={`${node}-${neighbor}`}
              x1={positions[node]?.x || 0}
              y1={positions[node]?.y || 0}
              x2={positions[neighbor]?.x || 0}
              y2={positions[neighbor]?.y || 0}
              stroke="#334155"
              strokeWidth="2"
            />
          ))
        )}
      </svg>
      
      {nodes.map(node => (
        <motion.div
          key={node}
          className={`absolute w-12 h-12 rounded-full flex items-center justify-center font-bold border-2
            ${current === parseInt(node) ? 'bg-purple-500 border-purple-600 text-black' : ''}
            ${visited?.includes(parseInt(node)) && current !== parseInt(node) ? 'bg-green-500 border-green-600 text-black' : ''}
            ${!visited?.includes(parseInt(node)) && current !== parseInt(node) ? 'bg-dark-card border-dark-border' : ''}
          `}
          style={{
            left: `${positions[node]?.x - 24}px`,
            top: `${positions[node]?.y - 24}px`
          }}
          animate={{ scale: current === parseInt(node) ? 1.2 : 1 }}
        >
          {node}
        </motion.div>
      ))}
      
      <div className="absolute bottom-4 left-4 bg-dark-card p-4 rounded-lg border border-dark-border">
        <div className="text-sm mb-2">Stack: [{stack?.join(', ')}]</div>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>Current</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Visited</span>
          </div>
        </div>
      </div>
    </div>
  );
}
