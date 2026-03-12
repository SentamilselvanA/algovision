export const algorithms = [
  {
    id: 'binary-search',
    name: 'Binary Search',
    category: 'Searching',
    description: 'Binary search is an efficient algorithm for finding an item from a sorted list by repeatedly dividing the search interval in half.',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    whenToUse: 'Use when searching in a sorted array or list. Perfect for large datasets where linear search would be too slow.',
    code: {
      javascript: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}`,
      python: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
      cpp: `int binarySearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}`
    }
  },
  {
    id: 'bubble-sort',
    name: 'Bubble Sort',
    category: 'Sorting',
    description: 'Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    whenToUse: 'Use for small datasets or when simplicity is more important than efficiency. Good for educational purposes.',
    code: {
      javascript: `function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}`,
      python: `def bubble_sort(arr):
    n = len(arr)
    
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    
    return arr`,
      cpp: `void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}`
    }
  },
  {
    id: 'merge-sort',
    name: 'Merge Sort',
    category: 'Sorting',
    description: 'Merge sort divides the array into halves, recursively sorts them, and then merges the sorted halves.',
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    whenToUse: 'Use when you need guaranteed O(n log n) performance and stability. Great for linked lists and external sorting.',
    code: {
      javascript: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
      python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result`,
      cpp: `void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> left(arr.begin() + l, arr.begin() + m + 1);
    vector<int> right(arr.begin() + m + 1, arr.begin() + r + 1);
    
    int i = 0, j = 0, k = l;
    
    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }
    
    while (i < left.size()) arr[k++] = left[i++];
    while (j < right.size()) arr[k++] = right[j++];
}

void mergeSort(vector<int>& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`
    }
  },
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    category: 'Technique',
    description: 'Two pointers technique uses two pointers to iterate through data structure in tandem until one or both pointers hit a condition.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    whenToUse: 'Use for problems involving sorted arrays, finding pairs, or partitioning. Common in array and string problems.',
    code: {
      javascript: `function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return [-1, -1];
}`,
      python: `def two_sum(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left < right:
        sum = arr[left] + arr[right]
        
        if sum == target:
            return [left, right]
        elif sum < target:
            left += 1
        else:
            right -= 1
    
    return [-1, -1]`,
      cpp: `vector<int> twoSum(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left < right) {
        int sum = arr[left] + arr[right];
        
        if (sum == target) {
            return {left, right};
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return {-1, -1};
}`
    }
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    category: 'Technique',
    description: 'Sliding window technique maintains a subset of items as a window and slides it through the array to find optimal solutions.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    whenToUse: 'Use for problems involving subarrays or substrings with contiguous elements. Perfect for max/min subarray problems.',
    code: {
      javascript: `function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}`,
      python: `def max_sum_subarray(arr, k):
    max_sum = 0
    window_sum = 0
    
    for i in range(k):
        window_sum += arr[i]
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i - k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum`,
      cpp: `int maxSumSubarray(vector<int>& arr, int k) {
    int maxSum = 0;
    int windowSum = 0;
    
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    for (int i = k; i < arr.size(); i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = max(maxSum, windowSum);
    }
    
    return maxSum;
}`
    }
  },
  {
    id: 'bfs',
    name: 'Breadth-First Search',
    category: 'Graph',
    description: 'BFS explores all vertices at the present depth before moving to vertices at the next depth level.',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    whenToUse: 'Use for shortest path in unweighted graphs, level-order traversal, or finding connected components.',
    code: {
      javascript: `function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];
  
  visited.add(start);
  
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  
  return result;
}`,
      python: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    result = []
    
    visited.add(start)
    
    while queue:
        node = queue.popleft()
        result.append(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    
    return result`,
      cpp: `vector<int> bfs(vector<vector<int>>& graph, int start) {
    set<int> visited;
    queue<int> q;
    vector<int> result;
    
    visited.insert(start);
    q.push(start);
    
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        result.push_back(node);
        
        for (int neighbor : graph[node]) {
            if (visited.find(neighbor) == visited.end()) {
                visited.insert(neighbor);
                q.push(neighbor);
            }
        }
    }
    
    return result;
}`
    }
  },
  {
    id: 'dfs',
    name: 'Depth-First Search',
    category: 'Graph',
    description: 'DFS explores as far as possible along each branch before backtracking.',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    whenToUse: 'Use for topological sorting, detecting cycles, pathfinding, or exploring all possible paths.',
    code: {
      javascript: `function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  const result = [start];
  
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      result.push(...dfs(graph, neighbor, visited));
    }
  }
  
  return result;
}`,
      python: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    result = [start]
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            result.extend(dfs(graph, neighbor, visited))
    
    return result`,
      cpp: `void dfsUtil(vector<vector<int>>& graph, int node, set<int>& visited, vector<int>& result) {
    visited.insert(node);
    result.push_back(node);
    
    for (int neighbor : graph[node]) {
        if (visited.find(neighbor) == visited.end()) {
            dfsUtil(graph, neighbor, visited, result);
        }
    }
}

vector<int> dfs(vector<vector<int>>& graph, int start) {
    set<int> visited;
    vector<int> result;
    dfsUtil(graph, start, visited, result);
    return result;
}`
    }
  },
  {
    id: 'linear-search',
    name: 'Linear Search',
    category: 'Searching',
    description: 'Linear search sequentially checks each element of the list until a match is found or the whole list has been searched.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    whenToUse: 'Use for unsorted arrays or small datasets. Simple to implement but inefficient for large datasets.',
    code: {
      javascript: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}`,
      python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
      cpp: `int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`
    }
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    category: 'Sorting',
    description: 'Quick sort picks a pivot element and partitions the array around it, then recursively sorts the sub-arrays.',
    timeComplexity: 'O(n log n) avg, O(n²) worst',
    spaceComplexity: 'O(log n)',
    whenToUse: 'Use for general-purpose sorting. Very efficient in practice with good pivot selection. In-place sorting.',
    code: {
      javascript: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`,
      python: `def quick_sort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    
    return arr

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
      cpp: `int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`
    }
  },
  {
    id: 'selection-sort',
    name: 'Selection Sort',
    category: 'Sorting',
    description: 'Selection sort divides the array into sorted and unsorted regions, repeatedly selecting the minimum element from unsorted region.',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    whenToUse: 'Use when memory writes are costly. Makes minimum number of swaps. Good for small datasets.',
    code: {
      javascript: `function selectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  
  return arr;
}`,
      python: `def selection_sort(arr):
    n = len(arr)
    
    for i in range(n - 1):
        min_idx = i
        
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr`,
      cpp: `void selectionSort(vector<int>& arr) {
    int n = arr.size();
    
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        if (minIdx != i) {
            swap(arr[i], arr[minIdx]);
        }
    }
}`
    }
  },
  {
    id: 'insertion-sort',
    name: 'Insertion Sort',
    category: 'Sorting',
    description: 'Insertion sort builds the final sorted array one item at a time by inserting each element into its correct position.',
    timeComplexity: 'O(n²) worst, O(n) best',
    spaceComplexity: 'O(1)',
    whenToUse: 'Use for small datasets or nearly sorted data. Efficient for online sorting (sorting as data arrives).',
    code: {
      javascript: `function insertionSort(arr) {
  const n = arr.length;
  
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
  
  return arr;
}`,
      python: `def insertion_sort(arr):
    n = len(arr)
    
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        
        arr[j + 1] = key
    
    return arr`,
      cpp: `void insertionSort(vector<int>& arr) {
    int n = arr.size();
    
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
}`
    }
  },
  {
    id: 'dijkstra',
    name: "Dijkstra's Algorithm",
    category: 'Graph',
    description: "Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a weighted graph with non-negative weights.",
    timeComplexity: 'O((V + E) log V)',
    spaceComplexity: 'O(V)',
    whenToUse: 'Use for finding shortest paths in weighted graphs with non-negative weights. GPS navigation, network routing.',
    code: {
      javascript: `function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const pq = [[0, start]];
  
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  
  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [dist, node] = pq.shift();
    
    if (visited.has(node)) continue;
    visited.add(node);
    
    for (let [neighbor, weight] of graph[node]) {
      const newDist = dist + weight;
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.push([newDist, neighbor]);
      }
    }
  }
  
  return distances;
}`,
      python: `import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    visited = set()
    pq = [(0, start)]
    
    while pq:
        dist, node = heapq.heappop(pq)
        
        if node in visited:
            continue
        visited.add(node)
        
        for neighbor, weight in graph[node]:
            new_dist = dist + weight
            if new_dist < distances[neighbor]:
                distances[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))
    
    return distances`,
      cpp: `map<int, int> dijkstra(map<int, vector<pair<int, int>>>& graph, int start) {
    map<int, int> distances;
    set<int> visited;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
    
    for (auto& [node, _] : graph) {
        distances[node] = INT_MAX;
    }
    distances[start] = 0;
    pq.push({0, start});
    
    while (!pq.empty()) {
        auto [dist, node] = pq.top();
        pq.pop();
        
        if (visited.count(node)) continue;
        visited.insert(node);
        
        for (auto [neighbor, weight] : graph[node]) {
            int newDist = dist + weight;
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                pq.push({newDist, neighbor});
            }
        }
    }
    
    return distances;
}`
    }
  },
  {
    id: 'heap-sort',
    name: 'Heap Sort',
    category: 'Sorting',
    description: 'Heap sort builds a max heap, then repeatedly extracts the maximum to build sorted array.',
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(1)',
    whenToUse: 'Use when you need guaranteed O(n log n) with O(1) space. Good for memory-constrained systems.',
    code: {
      javascript: `function heapSort(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}
function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}`,
      python: `def heap_sort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
    return arr
def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left < n and arr[left] > arr[largest]: largest = left
    if right < n and arr[right] > arr[largest]: largest = right
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)`,
      cpp: `void heapify(vector<int>& arr, int n, int i) {
    int largest = i, left = 2*i+1, right = 2*i+2;
    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}
void heapSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = n/2-1; i >= 0; i--) heapify(arr, n, i);
    for (int i = n-1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}`
    }
  }
];

// Note: Removed closing bracket and added new algorithms before it
