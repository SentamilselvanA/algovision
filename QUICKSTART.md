# 🚀 Quick Start Guide

## Step 1: Install Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## Step 2: Setup MongoDB

### Option A: Local MongoDB
1. Install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. The default connection string in `.env` will work

### Option B: MongoDB Atlas (Cloud)
1. Create free account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `backend/.env`

## Step 3: Start the Application

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```
Backend will run on http://localhost:5000

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:3000

## Step 4: Explore!

1. Open http://localhost:3000 in your browser
2. Click "Start Learning" or navigate to "Algorithms"
3. Select any algorithm to visualize
4. Use the controls to play, pause, and step through the visualization

## 🎮 Controls

- **Play/Pause**: Start or stop the automatic animation
- **Step Forward**: Move to the next step manually
- **Step Backward**: Go back to the previous step
- **Reset**: Return to the first step
- **Speed Slider**: Adjust animation speed (1x to 10x)

## 📊 Available Algorithms

### Searching
- Binary Search

### Sorting
- Bubble Sort
- Merge Sort

### Techniques
- Two Pointers
- Sliding Window

### Graph Algorithms
- BFS (Breadth-First Search)
- DFS (Depth-First Search)

## 🎨 Features to Try

1. **Watch the visualization** - See how the algorithm processes data
2. **Read step explanations** - Understand what's happening at each step
3. **Track variables** - Monitor how values change in real-time
4. **Control the pace** - Learn at your own speed
5. **Experiment with speed** - Slow down for complex steps, speed up for familiar ones

## 🐛 Troubleshooting

### Port already in use
If port 3000 or 5000 is already in use:
- Frontend: Vite will automatically suggest another port
- Backend: Change `PORT` in `backend/.env`

### MongoDB connection error
- Ensure MongoDB is running (local installation)
- Check connection string in `backend/.env`
- For Atlas, ensure IP whitelist is configured

### Module not found errors
- Run `npm install` in both backend and frontend directories
- Delete `node_modules` and `package-lock.json`, then reinstall

## 💡 Tips

- Start with **Binary Search** - it's simple and great for understanding the interface
- Try **Bubble Sort** to see sorting animations
- Explore **BFS/DFS** for graph traversal visualizations
- Use **Step Forward/Backward** to examine specific steps closely
- Adjust speed to match your learning pace

## 🎯 Next Steps

After exploring the visualizations:
1. Read the algorithm explanations in the left panel
2. Note the time and space complexity
3. Understand when to use each algorithm
4. Try to predict the next step before clicking forward

---

**Happy Learning! 🎓**
