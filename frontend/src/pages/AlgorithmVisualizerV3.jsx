import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, RotateCcw, FastForward, Rewind } from 'lucide-react';
import { algorithms } from '../data/algorithms';
import { codeMetadata } from '../data/codeMetadata';
import { addCodeLineToSteps } from '../utils/codeLineMapper';

// Import new components
import LeftSidebar from '../components/LeftSidebar';
import LiveStateMonitor from '../components/LiveStateMonitor';
import VisualizationPanelV2 from '../components/VisualizationPanelV2';

// Import visualizations
import BinarySearchViz from '../visualizations/BinarySearchViz';
import LinearSearchViz from '../visualizations/LinearSearchViz';
import BubbleSortViz from '../visualizations/BubbleSortViz';
import QuickSortViz from '../visualizations/QuickSortViz';
import SelectionSortViz from '../visualizations/SelectionSortViz';
import InsertionSortViz from '../visualizations/InsertionSortViz';
import MergeSortViz from '../visualizations/MergeSortViz';
import TwoPointersViz from '../visualizations/TwoPointersViz';
import SlidingWindowViz from '../visualizations/SlidingWindowViz';
import BFSViz from '../visualizations/BFSViz';
import DFSViz from '../visualizations/DFSViz';
import DijkstraViz from '../visualizations/DijkstraViz';
import HeapSortViz from '../visualizations/HeapSortViz';

// Import step generators
import {
  generateBinarySearchSteps,
  generateLinearSearchSteps,
  generateBubbleSortSteps,
  generateQuickSortSteps,
  generateSelectionSortSteps,
  generateInsertionSortSteps,
  generateMergeSortSteps,
  generateTwoPointersSteps,
  generateSlidingWindowSteps,
  generateBFSSteps,
  generateDFSSteps,
  generateDijkstraSteps,
  generateHeapSortSteps
} from '../utils/algorithmSimulator';

const visualizationComponents = {
  'binary-search': BinarySearchViz,
  'linear-search': LinearSearchViz,
  'bubble-sort': BubbleSortViz,
  'quick-sort': QuickSortViz,
  'selection-sort': SelectionSortViz,
  'insertion-sort': InsertionSortViz,
  'merge-sort': MergeSortViz,
  'two-pointers': TwoPointersViz,
  'sliding-window': SlidingWindowViz,
  'bfs': BFSViz,
  'dfs': DFSViz,
  'dijkstra': DijkstraViz,
  'heap-sort': HeapSortViz
};

const defaultData = {
  'binary-search': { array: [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78], target: 23 },
  'linear-search': { array: [15, 8, 23, 42, 7, 19, 31, 56, 12], target: 19 },
  'bubble-sort': { array: [64, 34, 25, 12, 22, 11, 90] },
  'quick-sort': { array: [33, 10, 59, 27, 41, 16, 8] },
  'selection-sort': { array: [29, 10, 14, 37, 13, 45, 8] },
  'insertion-sort': { array: [12, 11, 13, 5, 6, 7] },
  'merge-sort': { array: [38, 27, 43, 3, 9, 82, 10] },
  'two-pointers': { array: [1, 2, 3, 4, 6, 8, 9, 14, 15], target: 13 },
  'sliding-window': { array: [2, 1, 5, 1, 3, 2], k: 3 },
  'bfs': { graph: { 0: [1, 2], 1: [0, 3, 4], 2: [0, 5, 6], 3: [1], 4: [1], 5: [2], 6: [2] }, start: 0 },
  'dfs': { graph: { 0: [1, 2], 1: [0, 3, 4], 2: [0, 5, 6], 3: [1], 4: [1], 5: [2], 6: [2] }, start: 0 },
  'dijkstra': { graph: { 0: [[1, 4], [2, 1]], 1: [[0, 4], [3, 1]], 2: [[0, 1], [3, 5]], 3: [[1, 1], [2, 5], [4, 3]], 4: [[3, 3]] }, start: 0 },
  'heap-sort': { array: [12, 11, 13, 5, 6, 7] }
};

export default function AlgorithmVisualizerV3() {
  const { algorithmId } = useParams();
  const algorithm = algorithms.find(a => a.id === algorithmId);
  const metadata = codeMetadata[algorithmId];
  
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [language, setLanguage] = useState('javascript');
  const [customTarget, setCustomTarget] = useState(null);

  const generateSteps = (targetOverride = null) => {
    if (!algorithm) return;
    
    const data = defaultData[algorithmId];
    const target = targetOverride !== null ? targetOverride : (customTarget !== null ? customTarget : data.target);
    let generatedSteps = [];

    switch (algorithmId) {
      case 'binary-search':
        generatedSteps = generateBinarySearchSteps(data.array, target);
        break;
      case 'linear-search':
        generatedSteps = generateLinearSearchSteps(data.array, target);
        break;
      case 'bubble-sort':
        generatedSteps = generateBubbleSortSteps(data.array);
        break;
      case 'quick-sort':
        generatedSteps = generateQuickSortSteps(data.array);
        break;
      case 'selection-sort':
        generatedSteps = generateSelectionSortSteps(data.array);
        break;
      case 'insertion-sort':
        generatedSteps = generateInsertionSortSteps(data.array);
        break;
      case 'merge-sort':
        generatedSteps = generateMergeSortSteps(data.array);
        break;
      case 'two-pointers':
        generatedSteps = generateTwoPointersSteps(data.array, target);
        break;
      case 'sliding-window':
        generatedSteps = generateSlidingWindowSteps(data.array, data.k);
        break;
      case 'bfs':
        generatedSteps = generateBFSSteps(data.graph, data.start);
        break;
      case 'dfs':
        generatedSteps = generateDFSSteps(data.graph, data.start);
        break;
      case 'dijkstra':
        generatedSteps = generateDijkstraSteps(data.graph, data.start);
        break;
      case 'heap-sort':
        generatedSteps = generateHeapSortSteps(data.array);
        break;
    }

    const stepsWithCode = addCodeLineToSteps(algorithmId, generatedSteps);
    setSteps(stepsWithCode);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  useEffect(() => {
    setCustomTarget(null);
    generateSteps();
  }, [algorithmId, algorithm]);

  const handleTargetChange = (newTarget) => {
    setCustomTarget(newTarget);
    generateSteps(newTarget);
  };

  useEffect(() => {
    if (!isPlaying || currentStep >= steps.length - 1) {
      setIsPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, steps.length, speed]);

  if (!algorithm) return <div className="p-8">Algorithm not found</div>;

  const VizComponent = visualizationComponents[algorithmId];
  const currentStepData = steps[currentStep] || {};
  const currentCode = algorithm.code?.[language] || '';
  
  // Get target value for search algorithms
  const hasTargetInput = ['binary-search', 'linear-search', 'two-pointers'].includes(algorithmId);
  const targetValue = customTarget !== null ? customTarget : defaultData[algorithmId]?.target;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Control Bar */}
      <div className="bg-dark-card/80 backdrop-blur-sm border-b border-dark-border/50 px-8 py-4">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          {/* Playback Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentStep(0)}
              className="p-2.5 rounded-lg bg-dark-lighter/50 hover:bg-neon-cyan/20 border border-dark-border/30 hover:border-neon-cyan/50 transition-all disabled:opacity-30"
              disabled={currentStep === 0}
            >
              <Rewind className="w-5 h-5 text-neon-cyan" />
            </button>
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className="p-2.5 rounded-lg bg-dark-lighter/50 hover:bg-neon-cyan/20 border border-dark-border/30 hover:border-neon-cyan/50 transition-all disabled:opacity-30"
              disabled={currentStep === 0}
            >
              <SkipBack className="w-5 h-5 text-neon-cyan" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-lg bg-neon-cyan/20 hover:bg-neon-cyan/30 border-2 border-neon-cyan/50 transition-all shadow-neon-cyan"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-neon-cyan" />
              ) : (
                <Play className="w-6 h-6 text-neon-cyan" />
              )}
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              className="p-2.5 rounded-lg bg-dark-lighter/50 hover:bg-neon-cyan/20 border border-dark-border/30 hover:border-neon-cyan/50 transition-all disabled:opacity-30"
              disabled={currentStep === steps.length - 1}
            >
              <SkipForward className="w-5 h-5 text-neon-cyan" />
            </button>
            <button
              onClick={() => setCurrentStep(steps.length - 1)}
              className="p-2.5 rounded-lg bg-dark-lighter/50 hover:bg-neon-cyan/20 border border-dark-border/30 hover:border-neon-cyan/50 transition-all disabled:opacity-30"
              disabled={currentStep === steps.length - 1}
            >
              <FastForward className="w-5 h-5 text-neon-cyan" />
            </button>
          </div>

          {/* Speed Control */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 font-medium">Speed</span>
            <input
              type="range"
              min="200"
              max="2000"
              step="200"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-48 h-2 bg-dark-lighter rounded-lg appearance-none cursor-pointer accent-neon-cyan"
            />
            <span className="text-sm text-neon-cyan font-mono w-12">{(2000 - speed) / 200}x</span>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => { setCurrentStep(0); setIsPlaying(false); }}
            className="p-2.5 rounded-lg bg-dark-lighter/50 hover:bg-red-500/20 border border-dark-border/30 hover:border-red-500/50 transition-all"
          >
            <RotateCcw className="w-5 h-5 text-red-400" />
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 p-6 max-w-[1920px] mx-auto w-full">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-180px)]">
          {/* Left Column - Sidebar with tabs */}
          <div className="col-span-3">
            <LeftSidebar
              algorithm={algorithm}
              code={currentCode}
              language={language}
              activeLine={currentStepData.codeLine}
              onLanguageChange={setLanguage}
              problem={metadata?.problem}
            />
          </div>

          {/* Center Column - Visualization */}
          <div className="col-span-6">
            <VisualizationPanelV2
              title={algorithm.name}
              targetValue={targetValue}
              hasTargetInput={hasTargetInput}
              onTargetChange={handleTargetChange}
            >
              {VizComponent && steps.length > 0 && (
                <VizComponent
                  step={currentStep}
                  array={currentStepData.array}
                  graph={currentStepData.graph}
                  variables={currentStepData.variables || {}}
                />
              )}
            </VisualizationPanelV2>
          </div>

          {/* Right Column - Live State Monitor */}
          <div className="col-span-3">
            <LiveStateMonitor
              variables={currentStepData.variables || {}}
              traceLog={currentStepData.whyExplanation || currentStepData.explanation || ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
