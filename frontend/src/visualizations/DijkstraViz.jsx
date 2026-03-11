import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function DijkstraViz({ step, graph, variables }) {
  const { current, visited, distances } = variables;
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  
  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  const nodes = Object.keys(graph);
  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  
  // Dynamic positioning based on container size
  const positions = {
    0: { x: centerX, y: centerY - 150 },
    1: { x: centerX - 150, y: centerY - 50 },
    2: { x: centerX + 150, y: centerY - 50 },
    3: { x: centerX - 250, y: centerY + 100 },
    4: { x: centerX - 100, y: centerY + 100 },
    5: { x: centerX + 100, y: centerY + 100 },
    6: { x: centerX + 250, y: centerY + 100 }
  };

  return (
    <div ref={containerRef} className="relative h-full flex flex-col">
      {/* Context info at top */}
      <div className="flex justify-center mb-4">
        <div className="bg-dark-card p-4 rounded-lg border border-dark-border">
          <div className="flex gap-6 text-xs">
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

      {/* Graph visualization at bottom */}
      <div className="relative flex-1">
        <svg className="absolute inset-0 w-full h-full">
          {/* Draw edges with weights */}
          {nodes.map(node => 
            graph[node]?.map(([neighbor, weight]) => {
              const x1 = positions[node]?.x || 0;
              const y1 = positions[node]?.y || 0;
              const x2 = positions[neighbor]?.x || 0;
              const y2 = positions[neighbor]?.y || 0;
              const midX = (x1 + x2) / 2;
              const midY = (y1 + y2) / 2;
              
              return (
                <g key={`${node}-${neighbor}`}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#22d3ee"
                    strokeWidth="3"
                    opacity="0.5"
                  />
                  <text
                    x={midX}
                    y={midY - 5}
                    fill="#94a3b8"
                    fontSize="14"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {weight}
                  </text>
                </g>
              );
            })
          )}
        </svg>
        
        {/* Draw nodes */}
        {nodes.map(node => {
          const pos = positions[node];
          if (!pos) return null;
          
          return (
            <motion.div
              key={node}
              className={`absolute rounded-full flex flex-col items-center justify-center font-bold border-2
                ${current === parseInt(node) ? 'w-20 h-20 bg-yellow-500 border-yellow-400 text-black shadow-lg shadow-yellow-500/50' : 'w-16 h-16'}
                ${visited?.includes(parseInt(node)) && current !== parseInt(node) ? 'bg-green-500 border-green-400 text-black shadow-lg shadow-green-500/50' : ''}
                ${!visited?.includes(parseInt(node)) && current !== parseInt(node) ? 'bg-dark-card border-neon-cyan text-white' : ''}
              `}
              style={{
                left: `${pos.x - (current === parseInt(node) ? 40 : 32)}px`,
                top: `${pos.y - (current === parseInt(node) ? 40 : 32)}px`
              }}
              animate={{ scale: current === parseInt(node) ? 1.1 : 1 }}
            >
              <span className="text-lg">{node}</span>
              {distances && distances[node] !== undefined && (
                <span className="text-xs mt-1 font-semibold">
                  {distances[node] === Infinity ? '∞' : distances[node]}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
