import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarV2 from './components/NavbarV2';
import Home from './pages/Home';
import AlgorithmList from './pages/AlgorithmList';
import AlgorithmVisualizer from './pages/AlgorithmVisualizerV3';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" />;
  return children;
};

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user || user.role !== 'admin') return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-dark-bg text-white">
          <NavbarV2 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/algorithms" element={<AlgorithmList />} />
            <Route path="/visualize/:algorithmId" element={<AlgorithmVisualizer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
