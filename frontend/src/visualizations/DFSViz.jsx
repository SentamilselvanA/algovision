import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function DFSViz({ step, graph, variables }) {
  const { current, visited, stack } = variables;
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
          <div className="text-sm mb-2">Stack: [{stack?.join(', ') || ''}]</div>
          <div className="flex gap-6 text-xs">
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

      {/* Graph visualization at bottom */}
      <div className="relative flex-1">
        <svg className="absolute inset-0 w-full h-full">
          {/* Draw edges */}
          {nodes.map(node => 
            graph[node]?.map(neighbor => {
              const x1 = positions[node]?.x || 0;
              const y1 = positions[node]?.y || 0;
              const x2 = positions[neighbor]?.x || 0;
              const y2 = positions[neighbor]?.y || 0;
              
              return (
                <line
                  key={`${node}-${neighbor}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#22d3ee"
                  strokeWidth="3"
                  opacity="0.5"
                />
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
              className={`absolute w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg border-2
                ${current === parseInt(node) ? 'bg-purple-500 border-purple-400 text-black shadow-lg shadow-purple-500/50' : ''}
                ${visited?.includes(parseInt(node)) && current !== parseInt(node) ? 'bg-green-500 border-green-400 text-black shadow-lg shadow-green-500/50' : ''}
                ${!visited?.includes(parseInt(node)) && current !== parseInt(node) ? 'bg-dark-card border-neon-cyan text-white' : ''}
              `}
              style={{
                left: `${pos.x - 32}px`,
                top: `${pos.y - 32}px`
              }}
              animate={{ scale: current === parseInt(node) ? 1.1 : 1 }}
            >
              {node}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
