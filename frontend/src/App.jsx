import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarV2 from './components/NavbarV2';
import Home from './pages/Home';
import AlgorithmList from './pages/AlgorithmList';
import AlgorithmVisualizer from './pages/AlgorithmVisualizerV3';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <NavbarV2 />
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
