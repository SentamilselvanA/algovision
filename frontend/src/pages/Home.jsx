import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, BookOpen, Code } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Learn Algorithms Visually
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Master data structures and algorithms through interactive step-by-step visualizations
        </p>
        <Link
          to="/algorithms"
          className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Start Learning
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Play, title: 'Interactive Visualizations', desc: 'Watch algorithms come to life with step-by-step animations' },
          { icon: BookOpen, title: 'Learn Concepts', desc: 'Understand time complexity, space complexity, and when to use each algorithm' },
          { icon: Code, title: 'See the Code', desc: 'View implementations in JavaScript, Python, and C++' }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-dark-card p-6 rounded-lg border border-dark-border"
          >
            <feature.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
