import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export default function NavbarV2() {
  return (
    <nav className="bg-gradient-to-r from-dark-bg to-dark-card border-b border-dark-border/50 backdrop-blur-sm">
      <div className="max-w-[1920px] mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <Code2 className="w-8 h-8 text-neon-cyan" />
              <div className="absolute inset-0 blur-lg bg-neon-cyan/30"></div>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-white">Algo</span>
              <span className="text-neon-cyan">Vision</span>
              <span className="text-neon-purple ml-2">Pro</span>
            </span>
          </Link>
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-neon-cyan transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/algorithms" 
              className="text-gray-300 hover:text-neon-cyan transition-colors duration-200 font-medium"
            >
              Algorithms
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
