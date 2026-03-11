import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AlgorithmList from './pages/AlgorithmList';
import AlgorithmVisualizer from './pages/AlgorithmVisualizerV2';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/algorithms" element={<AlgorithmList />} />
          <Route path="/visualize/:algorithmId" element={<AlgorithmVisualizer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
