import { motion } from 'framer-motion';

export default function DijkstraViz({ step, graph, variables }) {
  const { current, visited, distances } = variables;
  
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
          graph[node]?.map(([neighbor, weight]) => (
            <g key={`${node}-${neighbor}`}>
              <line
                x1={positions[node]?.x || 0}
                y1={positions[node]?.y || 0}
                x2={positions[neighbor]?.x || 0}
                y2={positions[neighbor]?.y || 0}
                stroke="#334155"
                strokeWidth="2"
              />
              <text
                x={(positions[node]?.x + positions[neighbor]?.x) / 2}
                y={(positions[node]?.y + positions[neighbor]?.y) / 2}
                fill="#94a3b8"
                fontSize="12"
                textAnchor="middle"
              >
                {weight}
              </text>
            </g>
          ))
        )}
      </svg>
      
      {nodes.map(node => (
        <motion.div
          key={node}
          className={`absolute rounded-full flex flex-col items-center justify-center font-bold border-2
            ${current === parseInt(node) ? 'w-16 h-16 bg-yellow-500 border-yellow-600 text-black' : 'w-12 h-12'}
            ${visited?.includes(parseInt(node)) && current !== parseInt(node) ? 'bg-green-500 border-green-600 text-black' : ''}
            ${!visited?.includes(parseInt(node)) && current !== parseInt(node) ? 'bg-dark-card border-dark-border' : ''}
          `}
          style={{
            left: `${positions[node]?.x - (current === parseInt(node) ? 32 : 24)}px`,
            top: `${positions[node]?.y - (current === parseInt(node) ? 32 : 24)}px`
          }}
          animate={{ scale: current === parseInt(node) ? 1.2 : 1 }}
        >
          <span>{node}</span>
          {distances && distances[node] !== undefined && (
            <span className="text-xs mt-1">
              {distances[node] === Infinity ? '∞' : distances[node]}
            </span>
          )}
        </motion.div>
      ))}
      
      <div className="absolute bottom-4 left-4 bg-dark-card p-4 rounded-lg border border-dark-border">
        <div className="text-sm mb-2 font-semibold">Distances from Source:</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {distances && Object.entries(distances).map(([node, dist]) => (
            <div key={node}>
              Node {node}: <span className="text-primary font-bold">
                {dist === Infinity ? '∞' : dist}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 text-xs mt-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
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
