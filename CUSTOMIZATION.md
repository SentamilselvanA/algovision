# 🎨 Customization Guide

This guide shows you how to customize AlgoVision to fit your needs.

## 🎨 Changing Colors

### Update Theme Colors
Edit `frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#6366f1',      // Change to your primary color
      secondary: '#8b5cf6',    // Change to your secondary color
      dark: {
        bg: '#0f172a',         // Main background
        card: '#1e293b',       // Card background
        border: '#334155'      // Border color
      }
    }
  }
}
```

### Popular Color Schemes

**Blue Theme:**
```javascript
primary: '#3b82f6',
secondary: '#60a5fa'
```

**Green Theme:**
```javascript
primary: '#10b981',
secondary: '#34d399'
```

**Purple Theme:**
```javascript
primary: '#8b5cf6',
secondary: '#a78bfa'
```

**Orange Theme:**
```javascript
primary: '#f97316',
secondary: '#fb923c'
```

## 📝 Changing Text Content

### Update Site Name
1. **Navbar** - Edit `frontend/src/components/Navbar.jsx`:
```javascript
<span className="text-2xl font-bold">
  YourAppName  // Change here
</span>
```

2. **Home Page** - Edit `frontend/src/pages/Home.jsx`:
```javascript
<h1 className="text-6xl font-bold">
  Your Custom Title  // Change here
</h1>
```

3. **HTML Title** - Edit `frontend/index.html`:
```html
<title>Your App Name - Learn Algorithms</title>
```

### Update Descriptions
Edit `frontend/src/pages/Home.jsx` to change feature descriptions:
```javascript
const features = [
  { 
    icon: Play, 
    title: 'Your Feature Title', 
    desc: 'Your feature description' 
  },
  // ... more features
];
```

## 🔢 Changing Default Data

### Modify Algorithm Input Data
Edit `frontend/src/pages/AlgorithmVisualizer.jsx`:

```javascript
const defaultData = {
  'binary-search': { 
    array: [1, 3, 5, 7, 9, 11, 13],  // Change array
    target: 7                         // Change target
  },
  'bubble-sort': { 
    array: [5, 2, 8, 1, 9]           // Change array
  },
  // ... modify other algorithms
};
```

### Add Custom Test Cases
Create multiple test cases for each algorithm:

```javascript
const testCases = {
  'binary-search': [
    { array: [1, 2, 3, 4, 5], target: 3, name: 'Small Array' },
    { array: [10, 20, 30, 40, 50, 60], target: 40, name: 'Medium Array' },
    { array: [...], target: ..., name: 'Large Array' }
  ]
};
```

## ⚡ Changing Animation Speed

### Default Speed Range
Edit `frontend/src/pages/AlgorithmVisualizer.jsx`:

```javascript
// Current: 200ms to 2000ms
<input
  type="range"
  min="200"      // Minimum speed (fastest)
  max="2000"     // Maximum speed (slowest)
  step="200"     // Speed increment
  value={speed}
  onChange={(e) => setSpeed(Number(e.target.value))}
/>
```

### Make Animations Faster
```javascript
min="100"      // Faster minimum
max="1000"     // Faster maximum
```

### Make Animations Slower
```javascript
min="500"      // Slower minimum
max="3000"     // Slower maximum
```

## 🎯 Adding New Algorithms

### Step 1: Add Algorithm Metadata
Edit `frontend/src/data/algorithms.js`:

```javascript
{
  id: 'quick-sort',
  name: 'Quick Sort',
  category: 'Sorting',
  description: 'Your description here',
  timeComplexity: 'O(n log n)',
  spaceComplexity: 'O(log n)',
  whenToUse: 'When to use this algorithm',
  code: {
    javascript: `// Your JS code`,
    python: `# Your Python code`,
    cpp: `// Your C++ code`
  }
}
```

### Step 2: Create Visualization Component
Create `frontend/src/visualizations/QuickSortViz.jsx`:

```javascript
import { motion } from 'framer-motion';

export default function QuickSortViz({ step, array, variables }) {
  const { pivot, left, right } = variables;

  return (
    <div className="flex items-center justify-center h-full">
      {/* Your visualization JSX */}
    </div>
  );
}
```

### Step 3: Create Step Generator
Add to `frontend/src/utils/algorithmSimulator.js`:

```javascript
export function generateQuickSortSteps(arr) {
  const steps = [];
  
  // Your algorithm logic here
  // Push steps with: array, variables, explanation
  
  steps.push({
    array: [...arr],
    variables: { pivot, left, right },
    explanation: 'Step description'
  });
  
  return steps;
}
```

### Step 4: Register in Visualizer
Edit `frontend/src/pages/AlgorithmVisualizer.jsx`:

```javascript
// 1. Import
import QuickSortViz from '../visualizations/QuickSortViz';
import { generateQuickSortSteps } from '../utils/algorithmSimulator';

// 2. Add to components map
const visualizationComponents = {
  // ... existing
  'quick-sort': QuickSortViz
};

// 3. Add default data
const defaultData = {
  // ... existing
  'quick-sort': { array: [5, 2, 8, 1, 9] }
};

// 4. Add to switch statement
switch (algorithmId) {
  // ... existing cases
  case 'quick-sort':
    generatedSteps = generateQuickSortSteps(data.array);
    break;
}
```

## 🎨 Customizing Visualization Colors

### Change Element Colors
Edit individual visualization components:

```javascript
// Example: BinarySearchViz.jsx
className={`
  ${idx === mid ? 'bg-yellow-500' : ''}      // Current element
  ${idx === found ? 'bg-green-500' : ''}     // Found element
  ${inRange ? 'bg-blue-500' : ''}            // In range
  ${outOfRange ? 'opacity-30' : ''}          // Out of range
`}
```

### Create Custom Color Scheme
```javascript
// Define colors
const colors = {
  current: 'bg-pink-500',
  found: 'bg-emerald-500',
  comparing: 'bg-amber-500',
  sorted: 'bg-cyan-500'
};

// Use in className
className={`${idx === current ? colors.current : ''}`}
```

## 📐 Changing Layout

### Adjust Panel Widths
Edit `frontend/src/pages/AlgorithmVisualizer.jsx`:

```javascript
// Left Panel (default: w-80 = 320px)
<div className="w-96 bg-dark-card ...">  // Wider: 384px

// Right Panel (default: w-80 = 320px)
<div className="w-72 bg-dark-card ...">  // Narrower: 288px
```

### Change Panel Order
Reorder the divs in the JSX:

```javascript
<div className="flex">
  {/* Right Panel First */}
  <div className="w-80 ...">Right Content</div>
  
  {/* Center Panel */}
  <div className="flex-1 ...">Visualization</div>
  
  {/* Left Panel Last */}
  <div className="w-80 ...">Left Content</div>
</div>
```

### Single Panel Layout
```javascript
<div className="max-w-6xl mx-auto">
  {/* Info Above */}
  <div className="mb-4">Algorithm Info</div>
  
  {/* Visualization */}
  <div className="h-96">Visualization</div>
  
  {/* Controls Below */}
  <div className="mt-4">Controls</div>
</div>
```

## 🎮 Customizing Controls

### Add New Control Buttons
Edit `frontend/src/pages/AlgorithmVisualizer.jsx`:

```javascript
<button
  onClick={() => setCurrentStep(Math.floor(steps.length / 2))}
  className="p-2 hover:bg-dark-bg rounded transition"
>
  <SkipToMiddle className="w-5 h-5" />
</button>
```

### Change Control Icons
Import different icons from `lucide-react`:

```javascript
import { 
  Play, Pause, 
  FastForward, Rewind,  // Different icons
  ChevronsLeft, ChevronsRight 
} from 'lucide-react';
```

### Add Keyboard Shortcuts
```javascript
useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.key === ' ') setIsPlaying(!isPlaying);
    if (e.key === 'ArrowRight') setCurrentStep(prev => prev + 1);
    if (e.key === 'ArrowLeft') setCurrentStep(prev => prev - 1);
  };
  
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [isPlaying, currentStep]);
```

## 📱 Mobile Responsiveness

### Adjust Breakpoints
Edit Tailwind classes:

```javascript
// Stack panels on mobile, side-by-side on desktop
<div className="flex flex-col lg:flex-row">
  <div className="w-full lg:w-80">Left Panel</div>
  <div className="flex-1">Center</div>
  <div className="w-full lg:w-80">Right Panel</div>
</div>
```

### Hide Panels on Mobile
```javascript
<div className="hidden lg:block w-80">
  {/* Only visible on large screens */}
</div>
```

## 🔤 Changing Fonts

### Update Font Family
Edit `frontend/src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

### Update Tailwind Config
Edit `frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    }
  }
}
```

## 🌐 Adding More Languages

### Add Language to Algorithm Data
Edit `frontend/src/data/algorithms.js`:

```javascript
code: {
  javascript: `...`,
  python: `...`,
  cpp: `...`,
  java: `...`,      // Add Java
  rust: `...`       // Add Rust
}
```

### Create Language Selector (Future)
```javascript
const [language, setLanguage] = useState('javascript');

<select onChange={(e) => setLanguage(e.target.value)}>
  <option value="javascript">JavaScript</option>
  <option value="python">Python</option>
  <option value="cpp">C++</option>
  <option value="java">Java</option>
</select>
```

## 🎵 Adding Sound Effects (Optional)

### Install Howler.js
```bash
npm install howler
```

### Add Sounds
```javascript
import { Howl } from 'howler';

const sounds = {
  step: new Howl({ src: ['/sounds/step.mp3'] }),
  found: new Howl({ src: ['/sounds/found.mp3'] }),
  complete: new Howl({ src: ['/sounds/complete.mp3'] })
};

// Play on events
useEffect(() => {
  sounds.step.play();
}, [currentStep]);
```

## 📊 Adding Analytics (Optional)

### Google Analytics
```javascript
// Add to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Track Events
```javascript
// Track algorithm views
useEffect(() => {
  if (window.gtag) {
    window.gtag('event', 'view_algorithm', {
      algorithm_id: algorithmId
    });
  }
}, [algorithmId]);
```

## 🎯 Quick Customization Checklist

- [ ] Change primary/secondary colors
- [ ] Update site name and title
- [ ] Modify default algorithm data
- [ ] Adjust animation speeds
- [ ] Customize panel widths
- [ ] Add keyboard shortcuts
- [ ] Update font family
- [ ] Add your logo
- [ ] Customize feature descriptions
- [ ] Add more algorithms

## 💡 Pro Tips

1. **Test After Each Change** - Make one change at a time
2. **Use Browser DevTools** - Inspect elements to see classes
3. **Keep Backups** - Save original files before major changes
4. **Follow Patterns** - Copy existing code structure
5. **Check Console** - Watch for errors after changes

---

**Happy Customizing! 🎨**
