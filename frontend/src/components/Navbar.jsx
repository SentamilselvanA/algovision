import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-dark-card border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AlgoVision
            </span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/algorithms" className="hover:text-primary transition">Algorithms</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
