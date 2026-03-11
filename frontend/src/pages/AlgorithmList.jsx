import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { algorithms } from '../data/algorithms';
import { Search, TrendingUp, Shuffle, GitBranch } from 'lucide-react';

const categoryIcons = {
  Searching: Search,
  Sorting: Shuffle,
  Technique: TrendingUp,
  Graph: GitBranch
};

export default function AlgorithmList() {
  const categories = [...new Set(algorithms.map(a => a.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Algorithm Visualizations</h1>
      
      {categories.map(category => {
        const Icon = categoryIcons[category];
        const categoryAlgos = algorithms.filter(a => a.category === category);
        
        return (
          <div key={category} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">{category}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryAlgos.map((algo, i) => (
                <motion.div
                  key={algo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/visualize/${algo.id}`}
                    className="block bg-dark-card p-6 rounded-lg border border-dark-border hover:border-primary transition group"
                  >
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                      {algo.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{algo.description}</p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-green-400">Time: {algo.timeComplexity}</span>
                      <span className="text-blue-400">Space: {algo.spaceComplexity}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
