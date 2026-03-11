# 🎉 AlgoVision Update - New Algorithms & Features

## ✨ What's New

### 🔍 New Algorithms Added (5 Total)

#### Searching Algorithms
1. **Linear Search** ⭐ NEW
   - Sequential search through unsorted arrays
   - Time: O(n), Space: O(1)
   - Perfect for small or unsorted datasets

#### Sorting Algorithms
2. **Quick Sort** ⭐ NEW
   - Efficient divide-and-conquer sorting
   - Time: O(n log n) average, Space: O(log n)
   - Industry-standard sorting algorithm

3. **Selection Sort** ⭐ NEW
   - Finds minimum and places at beginning
   - Time: O(n²), Space: O(1)
   - Minimum number of swaps

4. **Insertion Sort** ⭐ NEW
   - Builds sorted array one element at a time
   - Time: O(n²) worst, O(n) best, Space: O(1)
   - Excellent for nearly sorted data

#### Graph Algorithms
5. **Dijkstra's Algorithm** ⭐ NEW
   - Shortest path in weighted graphs
   - Time: O((V + E) log V), Space: O(V)
   - GPS navigation, network routing

### 🎯 New Feature: User-Configurable Target Values

**Search algorithms now support custom target input!**

- **Binary Search** - Set your own target value
- **Linear Search** - Choose what to search for
- **Two Pointers** - Define custom sum target

#### How to Use:
1. Navigate to any search algorithm
2. Look for "Set Target Value" in the left panel
3. Enter your desired target number
4. Click the refresh button
5. Watch the visualization with your custom target!

## 📊 Updated Statistics

### Total Algorithms: **12** (was 7)
- **Searching**: 2 algorithms
- **Sorting**: 5 algorithms
- **Techniques**: 2 algorithms
- **Graph**: 3 algorithms

### New Visualizations: **5**
- LinearSearchViz.jsx
- QuickSortViz.jsx
- SelectionSortViz.jsx
- InsertionSortViz.jsx
- DijkstraViz.jsx

### New Step Generators: **5**
- generateLinearSearchSteps()
- generateQuickSortSteps()
- generateSelectionSortSteps()
- generateInsertionSortSteps()
- generateDijkstraSteps()

## 🎨 Visual Features

### Linear Search
- **Yellow**: Currently checking element
- **Red**: Already checked elements
- **Green**: Found target

### Quick Sort
- **Purple**: Pivot element
- **Yellow**: Elements being compared
- **Green**: Sorted elements
- **Gray**: Out of current partition

### Selection Sort
- **Red**: Current minimum element
- **Yellow**: Element being checked
- **Green**: Sorted portion

### Insertion Sort
- **Yellow**: Current key being inserted
- **Red**: Elements being shifted
- **Green**: Sorted portion

### Dijkstra's Algorithm
- **Yellow**: Current node being processed
- **Green**: Visited nodes
- **Distance labels**: Shortest distance from source
- **Edge weights**: Displayed on connections

## 🚀 How to Try the New Features

### 1. Test New Algorithms
```bash
# Make sure servers are running
cd backend && npm run dev
cd frontend && npm run dev

# Open http://localhost:3000
# Navigate to "Algorithms"
# Try the new algorithms!
```

### 2. Try Custom Target Values
1. Go to **Binary Search** or **Linear Search**
2. Find "Set Target Value" in left panel
3. Enter a number (e.g., 45 for Binary Search)
4. Click refresh button
5. Watch the algorithm search for your value!

### 3. Explore Dijkstra's Algorithm
- See shortest paths calculated in real-time
- Watch distance values update
- Understand weighted graph traversal

## 📝 Algorithm Comparison

### Sorting Algorithms Comparison
| Algorithm | Time (Best) | Time (Avg) | Time (Worst) | Space | Stable |
|-----------|-------------|------------|--------------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |

### Searching Algorithms Comparison
| Algorithm | Time | Space | Requirement |
|-----------|------|-------|-------------|
| Linear Search | O(n) | O(1) | None |
| Binary Search | O(log n) | O(1) | Sorted array |

## 💡 Use Cases

### When to Use Each Sorting Algorithm

**Bubble Sort**
- Educational purposes
- Very small datasets
- Nearly sorted data

**Selection Sort**
- When memory writes are expensive
- Small datasets
- When you need minimum swaps

**Insertion Sort**
- Small datasets (< 50 elements)
- Nearly sorted data
- Online sorting (data arrives over time)

**Merge Sort**
- Need guaranteed O(n log n)
- Stable sorting required
- Linked lists
- External sorting

**Quick Sort**
- General-purpose sorting
- Large datasets
- In-place sorting needed
- Average case performance matters

### When to Use Each Search Algorithm

**Linear Search**
- Unsorted data
- Small datasets
- Simple implementation needed

**Binary Search**
- Sorted data
- Large datasets
- Frequent searches

## 🎯 Interactive Features

### All Algorithms Support:
✅ Play/Pause animation
✅ Step forward/backward
✅ Speed control (1x-10x)
✅ Reset functionality
✅ Real-time variable tracking
✅ Step-by-step explanations

### Search Algorithms Also Support:
✅ **Custom target input** ⭐ NEW
✅ Dynamic visualization regeneration
✅ Instant feedback

## 🔧 Technical Updates

### Files Modified:
- `frontend/src/data/algorithms.js` - Added 5 new algorithms
- `frontend/src/utils/algorithmSimulator.js` - Added 5 step generators
- `frontend/src/pages/AlgorithmVisualizer.jsx` - Added target input UI

### Files Created:
- `frontend/src/visualizations/LinearSearchViz.jsx`
- `frontend/src/visualizations/QuickSortViz.jsx`
- `frontend/src/visualizations/SelectionSortViz.jsx`
- `frontend/src/visualizations/InsertionSortViz.jsx`
- `frontend/src/visualizations/DijkstraViz.jsx`

## 🎓 Learning Path Suggestions

### Beginner Path:
1. **Linear Search** - Simplest algorithm
2. **Binary Search** - Efficient searching
3. **Bubble Sort** - Basic sorting
4. **Selection Sort** - Minimum swaps
5. **Insertion Sort** - Online sorting

### Intermediate Path:
1. **Merge Sort** - Divide and conquer
2. **Quick Sort** - Efficient sorting
3. **Two Pointers** - Array techniques
4. **Sliding Window** - Subarray problems
5. **BFS/DFS** - Graph traversal

### Advanced Path:
1. **Dijkstra's Algorithm** - Shortest paths
2. **Quick Sort** - Partition logic
3. **Merge Sort** - Recursive thinking
4. All graph algorithms

## 🎉 Summary

### Before Update:
- 7 algorithms
- Fixed target values
- Basic visualizations

### After Update:
- **12 algorithms** (+5)
- **User-configurable targets** ⭐
- **Enhanced visualizations**
- **More learning options**

## 🚀 Next Steps

Try the new features:
1. Explore all 5 new algorithms
2. Test custom target values in search algorithms
3. Compare different sorting algorithms
4. Learn Dijkstra's shortest path algorithm

---

**Enjoy the enhanced AlgoVision experience!** 🎓✨

*Making algorithm learning more interactive and customizable!*
