import { Link, useNavigate } from 'react-router-dom';
import { Code2, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function NavbarV2() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-dark-bg to-dark-card border-b border-dark-border/50 backdrop-blur-sm sticky top-0 z-50">
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

          <div className="flex items-center space-x-8">
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

            {user?.role === 'admin' && (
              <Link 
                to="/admin" 
                className="text-gray-300 hover:text-neon-purple transition-colors duration-200 font-medium px-4 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20"
              >
                Admin
              </Link>
            )}

            {user ? (
              <div className="flex items-center space-x-6 border-l border-dark-border/50 pl-8 ml-4">
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-neon-purple transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple/30 group-hover:border-neon-purple/60">
                    <User className="w-4 h-4 text-neon-purple" />
                  </div>
                  <span className="font-medium">{user.name}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all duration-200 border border-red-500/20"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="font-medium text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4 border-l border-dark-border/50 pl-8 ml-4">
                <Link 
                  to="/login" 
                  className="text-gray-300 hover:text-neon-cyan transition-colors duration-200 font-medium"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-5 py-2 rounded-lg bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-all duration-200 font-bold shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
