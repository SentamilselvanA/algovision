# AlgoVision - Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           ALGOVISION PLATFORM                            │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND (React)                            │
│                         http://localhost:3000                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │                         PAGES                                   │   │
│  │  ┌──────────┐  ┌──────────────┐  ┌────────────────────────┐  │   │
│  │  │   Home   │  │ Algorithm    │  │  Algorithm             │  │   │
│  │  │   Page   │  │    List      │  │  Visualizer            │  │   │
│  │  └──────────┘  └──────────────┘  └────────────────────────┘  │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │                      COMPONENTS                                 │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │   │
│  │  │  Navbar  │  │  Cards   │  │ Controls │  │  Panels  │     │   │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘     │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │                    VISUALIZATIONS                               │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │   │
│  │  │ Binary       │  │ Bubble       │  │ Merge        │        │   │
│  │  │ Search       │  │ Sort         │  │ Sort         │        │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘        │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │   │
│  │  │ Two          │  │ Sliding      │  │ BFS          │        │   │
│  │  │ Pointers     │  │ Window       │  │              │        │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘        │   │
│  │  ┌──────────────┐                                              │   │
│  │  │ DFS          │                                              │   │
│  │  └──────────────┘                                              │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │                    UTILITIES & DATA                             │   │
│  │  ┌──────────────────────┐  ┌──────────────────────┐           │   │
│  │  │ Algorithm Simulator  │  │ Algorithm Data       │           │   │
│  │  │ (Step Generator)     │  │ (Metadata & Code)    │           │   │
│  │  └──────────────────────┘  └──────────────────────┘           │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │                    STYLING & ANIMATION                          │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │   │
│  │  │ Tailwind CSS │  │ Framer       │  │ Custom CSS   │        │   │
│  │  │              │  │ Motion       │  │              │        │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘        │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ HTTP Requests
                                    │ (REST API)
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          BACKEND (Node.js + Express)                     │
│                         http://localhost:5000                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │                         API ROUTES                              │   │
│  │  ┌──────────────────────┐  ┌──────────────────────┐           │   │
│  │  │ /api/algorithms      │  │ /api/users           │           │   │
│  │  │ - GET /              │  │ - POST /register     │           │   │
│  │  │ - GET /:id           │  │ - POST /login        │           │   │
│  │  └──────────────────────┘  └──────────────────────┘           │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │                      MIDDLEWARE                                 │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │   │
│  │  │   CORS   │  │   JSON   │  │   Auth   │  │  Error   │     │   │
│  │  │          │  │  Parser  │  │  (JWT)   │  │ Handler  │     │   │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘     │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │                      MODELS (Mongoose)                          │   │
│  │  ┌──────────────────────┐  ┌──────────────────────┐           │   │
│  │  │ Algorithm Model      │  │ User Model           │           │   │
│  │  │ - id                 │  │ - email              │           │   │
│  │  │ - name               │  │ - password           │           │   │
│  │  │ - category           │  │ - completedTopics    │           │   │
│  │  │ - description        │  │ - solvedProblems     │           │   │
│  │  │ - complexity         │  │                      │           │   │
│  │  │ - code               │  │                      │           │   │
│  │  └──────────────────────┘  └──────────────────────┘           │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ Mongoose ODM
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          DATABASE (MongoDB)                              │
│                   mongodb://localhost:27017/algovision                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │                       COLLECTIONS                               │   │
│  │  ┌──────────────────────┐  ┌──────────────────────┐           │   │
│  │  │ algorithms           │  │ users                │           │   │
│  │  │ - Algorithm docs     │  │ - User docs          │           │   │
│  │  └──────────────────────┘  └──────────────────────┘           │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════
                            DATA FLOW DIAGRAM
═══════════════════════════════════════════════════════════════════════════

USER INTERACTION FLOW:
─────────────────────

1. User visits homepage
   └─> Sees landing page with features
       └─> Clicks "Start Learning"

2. User navigates to Algorithm List
   └─> Sees algorithms grouped by category
       └─> Clicks on an algorithm

3. User enters Visualizer Page
   └─> Algorithm data loads
       └─> Simulation generates all steps
           └─> First step displays

4. User controls playback
   ├─> Play: Auto-advance through steps
   ├─> Pause: Stop auto-advance
   ├─> Next: Move to next step
   ├─> Previous: Move to previous step
   ├─> Reset: Return to first step
   └─> Speed: Adjust animation speed

5. User observes visualization
   ├─> Left Panel: Algorithm info
   ├─> Center Panel: Animated visualization
   └─> Right Panel: Step explanation & variables


VISUALIZATION RENDERING FLOW:
─────────────────────────────

Algorithm Selected
      │
      ▼
Load Algorithm Data (from algorithms.js)
      │
      ▼
Generate Steps (algorithmSimulator.js)
      │
      ├─> Binary Search → generateBinarySearchSteps()
      ├─> Bubble Sort → generateBubbleSortSteps()
      ├─> Merge Sort → generateMergeSortSteps()
      ├─> Two Pointers → generateTwoPointersSteps()
      ├─> Sliding Window → generateSlidingWindowSteps()
      ├─> BFS → generateBFSSteps()
      └─> DFS → generateDFSSteps()
      │
      ▼
Steps Array Created
[
  { array, variables, explanation },
  { array, variables, explanation },
  ...
]
      │
      ▼
Current Step Index (0)
      │
      ▼
Render Visualization Component
      │
      ├─> BinarySearchViz
      ├─> BubbleSortViz
      ├─> MergeSortViz
      ├─> TwoPointersViz
      ├─> SlidingWindowViz
      ├─> BFSViz
      └─> DFSViz
      │
      ▼
Display Current Step
      │
      ├─> Animate elements
      ├─> Update variables
      └─> Show explanation
      │
      ▼
User Controls → Update Step Index → Re-render


COMPONENT HIERARCHY:
───────────────────

App
 ├─ Navbar
 └─ Routes
     ├─ Home
     │   └─ Feature Cards
     ├─ AlgorithmList
     │   └─ Algorithm Cards (by category)
     └─ AlgorithmVisualizer
         ├─ Left Panel (Algorithm Info)
         ├─ Center Panel (Visualization)
         │   └─ Dynamic Viz Component
         │       ├─ BinarySearchViz
         │       ├─ BubbleSortViz
         │       ├─ MergeSortViz
         │       ├─ TwoPointersViz
         │       ├─ SlidingWindowViz
         │       ├─ BFSViz
         │       └─ DFSViz
         └─ Right Panel (Step Info & Variables)


STATE MANAGEMENT:
────────────────

AlgorithmVisualizer Component State:
├─ steps: Array<Step>          // All generated steps
├─ currentStep: number          // Current step index
├─ isPlaying: boolean           // Auto-play state
└─ speed: number                // Animation speed (ms)

Step Object Structure:
{
  array: number[],              // Current array state
  graph: Object,                // Current graph state
  variables: {                  // Current variable values
    left: number,
    right: number,
    mid: number,
    ...
  },
  explanation: string           // Step description
}


TECHNOLOGY INTEGRATION:
──────────────────────

React Router
    │
    └─> Handles navigation between pages
        ├─ / → Home
        ├─ /algorithms → AlgorithmList
        └─ /visualize/:id → AlgorithmVisualizer

Framer Motion
    │
    └─> Provides smooth animations
        ├─ Page transitions
        ├─ Element animations
        ├─ Layout animations
        └─ Scale effects

Tailwind CSS
    │
    └─> Utility-first styling
        ├─ Dark theme colors
        ├─ Responsive design
        ├─ Flexbox/Grid layouts
        └─ Custom utilities

Lucide React
    │
    └─> Icon library
        ├─ Play/Pause icons
        ├─ Navigation icons
        └─ Feature icons


═══════════════════════════════════════════════════════════════════════════
                         DEPLOYMENT ARCHITECTURE
═══════════════════════════════════════════════════════════════════════════

DEVELOPMENT:
───────────
Frontend (Vite Dev Server)  ←→  Backend (Express + Nodemon)  ←→  MongoDB
   localhost:3000                    localhost:5000              localhost:27017


PRODUCTION (Future):
───────────────────
                    ┌─────────────────┐
                    │   Users/Clients │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │   CDN (Static)  │
                    │   Vercel/Netlify│
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  Frontend Build │
                    │  (React SPA)    │
                    └────────┬────────┘
                             │
                             │ API Calls
                             │
                    ┌────────▼────────┐
                    │  Backend Server │
                    │  Heroku/AWS/DO  │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  MongoDB Atlas  │
                    │  (Cloud DB)     │
                    └─────────────────┘


═══════════════════════════════════════════════════════════════════════════
```

## Key Architectural Decisions

### 1. **Client-Side Step Generation**
- All algorithm steps generated upfront on frontend
- No real-time computation during playback
- Smooth, predictable animations
- No backend dependency for visualization

### 2. **Component-Based Visualizations**
- Each algorithm has dedicated visualization component
- Consistent props interface
- Easy to add new visualizations
- Reusable patterns

### 3. **Modular Data Structure**
- Algorithm metadata separate from visualization logic
- Easy to update algorithm information
- Supports multiple programming languages
- Extensible for future features

### 4. **State Management**
- Local component state (useState)
- No global state management needed (Phase 1)
- Simple and performant
- Can add Redux/Context later if needed

### 5. **Styling Approach**
- Tailwind CSS for rapid development
- Custom CSS for specific animations
- Framer Motion for smooth transitions
- Consistent design system

### 6. **Backend Architecture**
- RESTful API design
- MongoDB for flexible schema
- JWT for future authentication
- Scalable and maintainable

This architecture supports the current MVP and is designed to scale for future phases!
