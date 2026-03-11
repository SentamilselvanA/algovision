# AlgoVision - Visual Algorithm Learning Platform

A modern full-stack MERN application that helps students learn algorithms through interactive step-by-step visualizations.

## 🎯 Features

### Phase 1 (MVP) - Visual Learning Platform ✅

- **12 Algorithm Visualizations**:
  - **Searching**: Binary Search, Linear Search
  - **Sorting**: Bubble Sort, Merge Sort, Quick Sort, Selection Sort, Insertion Sort
  - **Techniques**: Two Pointers, Sliding Window
  - **Graph**: BFS (Breadth-First Search), DFS (Depth-First Search), Dijkstra's Algorithm

- **Interactive Controls**:
  - Play/Pause animations
  - Step forward/backward
  - Speed control
  - Reset functionality
  - **User-configurable target values** (for search algorithms) ⭐ NEW

- **Learning Panels**:
  - Algorithm explanation with complexity analysis
  - Real-time visualization with smooth animations
  - Step-by-step explanation
  - Variable tracker showing current state

## 🛠️ Tech Stack

### Frontend
- **React** (Vite) - Fast, modern React setup
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router** - Navigation
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication (Phase 4)

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/algovision
JWT_SECRET=your_jwt_secret_key_change_in_production
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🎨 UI Design

- **Dark Theme** - Easy on the eyes for long learning sessions
- **Modern Cards** - Clean, organized layout
- **Smooth Animations** - Framer Motion powered transitions
- **Responsive Design** - Works on all screen sizes
- **Color-Coded Elements**:
  - Primary (Indigo) - Main actions and highlights
  - Yellow - Current element being processed
  - Green - Completed/Found elements
  - Blue/Purple - Pointers and special markers
  - Red - Swapping/Comparing elements

## 📚 Project Structure

```
algovision/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Algorithm.js
│   │   ├── routes/
│   │   │   ├── algorithms.js
│   │   │   └── users.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── Navbar.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── AlgorithmList.jsx
    │   │   └── AlgorithmVisualizer.jsx
    │   ├── visualizations/
    │   │   ├── BinarySearchViz.jsx
    │   │   ├── BubbleSortViz.jsx
    │   │   ├── MergeSortViz.jsx
    │   │   ├── TwoPointersViz.jsx
    │   │   ├── SlidingWindowViz.jsx
    │   │   ├── BFSViz.jsx
    │   │   └── DFSViz.jsx
    │   ├── data/
    │   │   └── algorithms.js
    │   ├── utils/
    │   │   └── algorithmSimulator.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

## 🚀 Usage

1. **Home Page**: Overview of the platform and its features
2. **Algorithms Page**: Browse all available algorithm visualizations organized by category
3. **Visualizer Page**: 
   - Select an algorithm to visualize
   - Use controls to play, pause, or step through the algorithm
   - Watch the visualization in the center panel
   - Read step explanations in the right panel
   - Track variable values in real-time
   - Adjust playback speed

## 🔮 Future Phases

### Phase 2 - Code + Visualization
- Monaco Editor integration
- Code highlighting synchronized with visualization
- Multi-language support (JavaScript, Python, C++)

### Phase 3 - Practice Problems
- Problem sets for each algorithm
- Hints and solutions
- Complexity analysis

### Phase 4 - User System
- User authentication
- Progress tracking
- Learning dashboard
- Completed topics tracking

## 🎓 Learning Approach

AlgoVision focuses on **visual-first learning**:

1. **See It** - Watch the algorithm in action with animations
2. **Understand It** - Read step-by-step explanations
3. **Track It** - Monitor variable changes in real-time
4. **Master It** - Control the pace with interactive controls

## 🤝 Contributing

This is a modular platform designed for easy expansion:

- Add new algorithms by creating visualization components
- Add new algorithm data in `algorithms.js`
- Create step generators in `algorithmSimulator.js`
- Follow the existing pattern for consistency

## 📝 License

MIT License - Feel free to use this project for learning and teaching!

## 🌟 Key Highlights

- **Beginner-Friendly**: Designed specifically for students learning algorithms
- **Interactive**: Full control over visualization playback
- **Visual**: See exactly how algorithms work step-by-step
- **Modern**: Built with latest web technologies
- **Extensible**: Easy to add new algorithms and features

---

**Built with ❤️ to make algorithm learning easier and more enjoyable!**
