import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, RotateCcw, RefreshCw, Code2, Eye } from 'lucide-react';
import { algorithms } from '../data/algorithms';
import { codeMetadata } from '../data/codeMetadata';
import CodePanel from '../components/CodePanel';
import WhyThisStep from '../components/WhyThisStep';
import ProblemSection from '../components/ProblemSection';
import { addCodeLineToSteps } from '../utils/codeLineMapper';

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
  generateDijkstraSteps
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
  'dijkstra': DijkstraViz
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
  'dijkstra': { graph: { 0: [[1, 4], [2, 1]], 1: [[0, 4], [3, 1]], 2: [[0, 1], [3, 5]], 3: [[1, 1], [2, 5], [4, 3]], 4: [[3, 3]] }, start: 0 }
};

export default function AlgorithmVisualizer() {
  const { algorithmId } = useParams();
  const algorithm = algorithms.find(a => a.id === algorithmId);
  const metadata = codeMetadata[algorithmId];
  
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [targetValue, setTargetValue] = useState('');
  const [customTarget, setCustomTarget] = useState(null);
  const [language, setLanguage] = useState('javascript');
  const [showCode, setShowCode] = useState(true);
  const [showProblem, setShowProblem] = useState(false);

  const generateSteps = () => {
    if (!algorithm) return;
    
    const data = defaultData[algorithmId];
    const target = customTarget !== null ? customTarget : data.target;
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
    }

    // Add code line numbers to steps
    const stepsWithCode = addCodeLineToSteps(algorithmId, generatedSteps);
    setSteps(stepsWithCode);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  useEffect(() => {
    setCustomTarget(null);
    setTargetValue('');
    generateSteps();
  }, [algorithmId, algorithm]);

  useEffect(() => {
    if (customTarget !== null) {
      generateSteps();
    }
  }, [customTarget]);

  const handleTargetSubmit = (e) => {
    e.preventDefault();
    const value = parseInt(targetValue);
    if (!isNaN(value)) {
      setCustomTarget(value);
    }
  };

  const hasTargetInput = ['binary-search', 'linear-search', 'two-pointers'].includes(algorithmId);

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

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col">
      {/* Top Bar - View Toggle */}
      <div className="bg-dark-card border-b border-dark-border px-6 py-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">{algorithm.name}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowProblem(!showProblem)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
              showProblem ? 'bg-primary text-white' : 'bg-dark-bg text-gray-400 hover:text-white'
            }`}
          >
            <Eye className="w-4 h-4" />
            Problem
          </button>
          <button
            onClick={() => setShowCode(!showCode)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
              showCode ? 'bg-primary text-white' : 'bg-dark-bg text-gray-400 hover:text-white'
            }`}
          >
            <Code2 className="w-4 h-4" />
            Code
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Info & Problem */}
        <div className="w-80 bg-dark-card border-r border-dark-border overflow-y-auto scrollbar-hide">
          <div className="p-6 space-y-4">
            {hasTargetInput && (
              <div className="bg-dark-bg p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Set Target Value</h3>
                <form onSubmit={handleTargetSubmit} className="flex gap-2">
                  <input
                    type="number"
                    value={targetValue}
                    onChange={(e) => setTargetValue(e.target.value)}
                    placeholder="Enter target"
                    className="flex-1 bg-dark-card border border-dark-border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary hover:bg-primary/90 rounded text-sm font-semibold transition"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-2">
                  Current: {customTarget !== null ? customTarget : defaultData[algorithmId]?.target}
                </p>
              </div>
            )}

            {showProblem && metadata?.problem && (
              <ProblemSection problem={metadata.problem} />
            )}

            {!showProblem && (
              <>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-1">Description</h3>
                  <p className="text-sm">{algorithm.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-1">When to Use</h3>
                  <p className="text-sm">{algorithm.whenToUse}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-1">Time Complexity</h3>
                    <p className="text-green-400 font-mono text-sm">{algorithm.timeComplexity}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-1">Space Complexity</h3>
                    <p className="text-blue-400 font-mono text-sm">{algorithm.spaceComplexity}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Center - Visualization & Code */}
        <div className="flex-1 flex flex-col">
          {/* Visualization */}
          <div className="flex-1 bg-dark-bg p-8 overflow-hidden">
            {VizComponent && steps.length > 0 && (
              <VizComponent
                step={currentStep}
                array={currentStepData.array}
                graph={currentStepData.graph}
                variables={currentStepData.variables || {}}
              />
            )}
          </div>

          {/* Code Panel */}
          {showCode && (
            <div className="h-80 border-t border-dark-border">
              <CodePanel
                code={currentCode}
                language={language}
                activeLine={currentStepData.codeLine}
                onLanguageChange={setLanguage}
              />
            </div>
          )}

          {/* Controls */}
          <div className="bg-dark-card border-t border-dark-border p-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentStep(0)}
                    className="p-2 hover:bg-dark-bg rounded transition disabled:opacity-50"
                    disabled={currentStep === 0}
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    className="p-2 hover:bg-dark-bg rounded transition disabled:opacity-50"
                    disabled={currentStep === 0}
                  >
                    <SkipBack className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-3 bg-primary hover:bg-primary/90 rounded-lg transition"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                    className="p-2 hover:bg-dark-bg rounded transition disabled:opacity-50"
                    disabled={currentStep === steps.length - 1}
                  >
                    <SkipForward className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">Speed:</span>
                  <input
                    type="range"
                    min="200"
                    max="2000"
                    step="200"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-32"
                  />
                  <span className="text-sm">{(2000 - speed) / 200}x</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Step {currentStep + 1} / {steps.length}</span>
                <div className="flex-1 bg-dark-bg rounded-full h-2">
                  <motion.div
                    className="bg-primary h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Step Info & Why */}
        <div className="w-96 bg-dark-card border-l border-dark-border overflow-y-auto scrollbar-hide">
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Current Step</h3>
              <div className="bg-dark-bg p-4 rounded-lg">
                <p className="text-sm leading-relaxed">{currentStepData.explanation}</p>
              </div>
            </div>

            {currentStepData.whyExplanation && (
              <WhyThisStep explanation={currentStepData.whyExplanation} />
            )}

            <div>
              <h3 className="text-lg font-semibold mb-3">Variables</h3>
              <div className="space-y-2">
                {currentStepData.variables && Object.entries(currentStepData.variables).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center bg-dark-bg p-3 rounded">
                    <span className="text-sm text-gray-400">{key}</span>
                    <span className="text-sm font-mono text-primary">
                      {Array.isArray(value) ? `[${value.join(', ')}]` : 
                       typeof value === 'object' ? JSON.stringify(value) : String(value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
