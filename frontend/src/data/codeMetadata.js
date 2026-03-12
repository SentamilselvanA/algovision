export const codeMetadata = {
  'binary-search': {
    lineMapping: {
      init: 2,
      whileLoop: 5,
      calculateMid: 6,
      checkEqual: 8,
      checkLess: 10,
      checkGreater: 12,
      returnNotFound: 16
    },
    whyExplanations: {
      2: "We initialize two pointers: 'left' at the start (0) and 'right' at the end of the array. These pointers define our search space.",
      5: "The while loop continues as long as left <= right, meaning there's still a valid search space to explore.",
      6: "We calculate the middle index to divide the search space in half. This is the key to binary search's O(log n) efficiency.",
      8: "We check if the middle element equals our target. If yes, we've found it and can return immediately!",
      10: "If the middle element is less than target, the target must be in the right half. We move 'left' pointer to mid + 1.",
      12: "If the middle element is greater than target, the target must be in the left half. We move 'right' pointer to mid - 1.",
      16: "If we exit the loop without finding the target, it means the element doesn't exist in the array."
    },
    problem: {
      statement: "Given a sorted array of integers and a target value, return the index of the target if found, otherwise return -1.",
      input: "arr = [2, 5, 8, 12, 16, 23, 38], target = 12",
      output: "3",
      connection: "The visualization shows exactly how binary search eliminates half the search space in each step, making it much faster than checking every element."
    }
  },
  'linear-search': {
    lineMapping: {
      init: 1,
      forLoop: 2,
      checkEqual: 3,
      returnFound: 4,
      returnNotFound: 7
    },
    whyExplanations: {
      1: "Linear search is the simplest search algorithm - we just check each element one by one from start to finish.",
      2: "We iterate through every element in the array using a for loop, checking each position sequentially.",
      3: "At each position, we compare the current element with our target value to see if we found a match.",
      4: "If we find a match, we immediately return the current index - no need to check further!",
      7: "If we've checked all elements and haven't found the target, we return -1 to indicate it's not in the array."
    },
    problem: {
      statement: "Search for a target value in an unsorted array and return its index, or -1 if not found.",
      input: "arr = [15, 8, 23, 42, 7], target = 23",
      output: "2",
      connection: "Unlike binary search which requires sorted data, linear search works on any array by checking each element sequentially until the target is found."
    }
  },
  'bubble-sort': {
    lineMapping: {
      init: 2,
      outerLoop: 4,
      innerLoop: 5,
      compare: 6,
      swap: 7,
      complete: 12
    },
    whyExplanations: {
      2: "We get the length of the array to know how many passes we need to make through the data.",
      4: "The outer loop controls how many passes we make. After each pass, the largest unsorted element 'bubbles up' to its correct position.",
      5: "The inner loop compares adjacent elements. We reduce the range each time because the end is already sorted.",
      6: "We compare two adjacent elements to see if they're in the wrong order (larger element before smaller).",
      7: "If elements are out of order, we swap them. This is why it's called 'bubble' sort - larger values bubble to the top!",
      12: "After all passes, every element has bubbled to its correct position and the array is fully sorted."
    },
    problem: {
      statement: "Sort an array of integers in ascending order using the bubble sort algorithm.",
      input: "arr = [64, 34, 25, 12, 22]",
      output: "[12, 22, 25, 34, 64]",
      connection: "Watch how larger elements 'bubble' to the right with each pass. The visualization shows why it's called bubble sort!"
    }
  },
  'quick-sort': {
    lineMapping: {
      init: 1,
      checkBase: 2,
      choosePivot: 8,
      partition: 11,
      compare: 12,
      swap: 14,
      placePivot: 18,
      recurse: 3
    },
    whyExplanations: {
      1: "Quick sort is a divide-and-conquer algorithm that picks a 'pivot' element and partitions the array around it.",
      2: "Base case: if the subarray has 1 or fewer elements, it's already sorted. This stops the recursion.",
      8: "We choose the last element as the pivot. All elements will be arranged relative to this pivot value.",
      11: "The partition step rearranges elements so smaller values are on the left of pivot, larger on the right.",
      12: "We compare each element with the pivot to decide which side it belongs on.",
      14: "When we find an element smaller than pivot, we swap it to the left side of the partition.",
      18: "Finally, we place the pivot in its correct sorted position - between smaller and larger elements.",
      3: "We recursively sort the left and right partitions. Each partition gets smaller until base case is reached."
    },
    problem: {
      statement: "Sort an array using quick sort by partitioning around pivot elements.",
      input: "arr = [33, 10, 59, 27, 41]",
      output: "[10, 27, 33, 41, 59]",
      connection: "The visualization shows how the pivot element divides the array and how recursive partitioning leads to a sorted result."
    }
  },
  'selection-sort': {
    lineMapping: {
      init: 2,
      outerLoop: 4,
      setMin: 5,
      innerLoop: 7,
      findMin: 8,
      updateMin: 9,
      swap: 13
    },
    whyExplanations: {
      2: "Selection sort divides the array into sorted and unsorted portions, growing the sorted portion one element at a time.",
      4: "The outer loop represents each position we're filling in the sorted portion (from left to right).",
      5: "We assume the current position has the minimum value, then search the unsorted portion to verify.",
      7: "The inner loop searches through all remaining unsorted elements to find the actual minimum.",
      8: "We compare each unsorted element with our current minimum candidate.",
      9: "When we find a smaller element, we update our minimum index to point to it.",
      13: "After finding the true minimum, we swap it with the current position, growing the sorted portion by one."
    },
    problem: {
      statement: "Sort an array by repeatedly selecting the minimum element from the unsorted portion.",
      input: "arr = [29, 10, 14, 37, 13]",
      output: "[10, 13, 14, 29, 37]",
      connection: "Watch how the algorithm finds the minimum element in each pass and places it in the sorted portion on the left."
    }
  },
  'insertion-sort': {
    lineMapping: {
      init: 2,
      outerLoop: 4,
      pickKey: 5,
      setJ: 6,
      whileLoop: 8,
      shift: 9,
      insert: 12
    },
    whyExplanations: {
      2: "Insertion sort builds the sorted array one element at a time, like sorting playing cards in your hand.",
      4: "We start from the second element (index 1) because a single element is already 'sorted'.",
      5: "We pick the current element (the 'key') that we want to insert into the sorted portion.",
      6: "We start comparing from the element just before the key, moving backwards through the sorted portion.",
      8: "While we find elements larger than the key, we need to shift them right to make space.",
      9: "We shift the larger element one position to the right, creating space for our key.",
      12: "Once we find the correct position (or reach the start), we insert the key into its sorted position."
    },
    problem: {
      statement: "Sort an array by inserting each element into its correct position in the sorted portion.",
      input: "arr = [12, 11, 13, 5, 6]",
      output: "[5, 6, 11, 12, 13]",
      connection: "The visualization shows how each element is picked and inserted into its correct position, just like sorting cards in your hand."
    }
  },
  'merge-sort': {
    lineMapping: {
      checkBase: 2,
      divide: 4,
      recurseLeft: 5,
      recurseRight: 6,
      merge: 8,
      mergeCompare: 12,
      mergeLeft: 13,
      mergeRight: 15
    },
    whyExplanations: {
      2: "Base case: arrays with 1 or 0 elements are already sorted. This stops the recursion.",
      4: "We find the middle point to divide the array into two halves - this is the 'divide' in divide-and-conquer.",
      5: "Recursively sort the left half. This breaks down the problem into smaller subproblems.",
      6: "Recursively sort the right half. Each half gets sorted independently.",
      8: "The merge step combines two sorted halves into one sorted array - this is where the magic happens!",
      12: "We compare the front elements of both sorted halves to pick the smaller one.",
      13: "Take the smaller element from the left half and add it to the result.",
      15: "Take the smaller element from the right half and add it to the result."
    },
    problem: {
      statement: "Sort an array using the divide-and-conquer approach by recursively dividing and merging.",
      input: "arr = [38, 27, 43, 3, 9]",
      output: "[3, 9, 27, 38, 43]",
      connection: "Watch how the array is recursively divided into smaller pieces, then merged back together in sorted order."
    }
  },
  'two-pointers': {
    lineMapping: {
      init: 2,
      whileLoop: 5,
      calculateSum: 6,
      checkEqual: 8,
      checkLess: 10,
      checkGreater: 12
    },
    whyExplanations: {
      2: "We initialize two pointers: one at the start (left) and one at the end (right) of the sorted array.",
      5: "We continue until the pointers meet. If they cross, we've checked all possible pairs.",
      6: "We calculate the sum of elements at both pointers. This is the current pair we're evaluating.",
      8: "If the sum equals our target, we found the pair! Return the indices.",
      10: "If sum is too small, we need a larger sum. Move the left pointer right to get a bigger number.",
      12: "If sum is too large, we need a smaller sum. Move the right pointer left to get a smaller number."
    },
    problem: {
      statement: "Find two numbers in a sorted array that add up to a target sum.",
      input: "arr = [1, 2, 3, 4, 6], target = 6",
      output: "[1, 3] (indices of 2 and 4)",
      connection: "The two pointers move towards each other, efficiently finding the pair without checking all combinations."
    }
  },
  'sliding-window': {
    lineMapping: {
      init: 2,
      initialWindow: 5,
      slideLoop: 9,
      slideWindow: 10,
      updateMax: 11
    },
    whyExplanations: {
      2: "We initialize variables to track the current window sum and the maximum sum found so far.",
      5: "First, we calculate the sum of the initial window (first k elements). This is our starting point.",
      9: "Now we 'slide' the window one position at a time through the rest of the array.",
      10: "To slide: remove the leftmost element of the old window and add the new rightmost element. This is O(1)!",
      11: "After each slide, we check if the new window sum is larger than our current maximum and update if needed."
    },
    problem: {
      statement: "Find the maximum sum of any contiguous subarray of size k.",
      input: "arr = [2, 1, 5, 1, 3, 2], k = 3",
      output: "9 (subarray [5, 1, 3])",
      connection: "Watch how the window slides across the array, efficiently calculating sums without recalculating from scratch each time."
    }
  },
  'bfs': {
    lineMapping: {
      init: 2,
      addStart: 6,
      whileLoop: 8,
      dequeue: 9,
      visit: 10,
      checkNeighbors: 12,
      addNeighbor: 14
    },
    whyExplanations: {
      1: "BFS uses a queue (FIFO) to explore nodes level by level, like ripples spreading in water.",
      2: "We initialize a visited set to track which nodes we've seen, and a queue to manage exploration order.",
      6: "We start by adding the starting node to visited set. This prevents revisiting it later.",
      8: "We continue processing nodes until the queue is empty - meaning we've explored everything reachable.",
      9: "Dequeue the front node - this is the next node we'll process (FIFO order ensures level-by-level).",
      10: "Add the node to result. We process nodes in the order they're discovered (breadth-first).",
      12: "Check all neighbors of the current node to see which ones we haven't visited yet.",
      14: "Add unvisited neighbors to both visited set and queue. They'll be processed after we finish the current level."
    },
    problem: {
      statement: "Find the shortest path from a start node to all other nodes in an unweighted graph.",
      input: "graph with nodes 0-6, start = 0",
      output: "Visit order: 0 → 1 → 2 → 3 → 4 → 5 → 6",
      connection: "BFS explores nodes level by level, guaranteeing the shortest path in unweighted graphs. Watch the queue grow and shrink!"
    }
  },
  'dfs': {
    lineMapping: {
      init: 1,
      addStart: 2,
      whileLoop: 5,
      pop: 6,
      checkVisited: 7,
      visit: 8,
      checkNeighbors: 10,
      addNeighbor: 11
    },
    whyExplanations: {
      1: "DFS explores as deep as possible before backtracking. We use recursion here for simplicity.",
      2: "Mark the current node as visited to prevent revisiting it in cycles.",
      5: "Iterate through all neighbors of the current node to explore deeper paths.",
      6: "For each neighbor, check if we've already visited it to avoid infinite loops.",
      7: "Recursively call DFS on unvisited neighbors, going as deep as possible before backtracking.",
      8: "Add the neighbor's results to our result array, building the complete traversal order."
    },
    problem: {
      statement: "Explore all nodes in a graph by going as deep as possible before backtracking.",
      input: "graph with nodes 0-6, start = 0",
      output: "Visit order: 0 → 2 → 6 → 5 → 1 → 4 → 3",
      connection: "DFS explores one path completely before trying others. Watch how it goes deep, then backtracks when it hits a dead end!"
    }
  },
  'dijkstra': {
    lineMapping: {
      init: 2,
      initDistances: 5,
      setStart: 7,
      whileLoop: 9,
      findMin: 11,
      visit: 15,
      checkNeighbors: 18,
      relax: 20,
      updateDistance: 21
    },
    whyExplanations: {
      2: "Dijkstra's algorithm finds the shortest path from a source to all other nodes in a weighted graph.",
      5: "Initialize all distances to infinity except the source. We don't know the paths yet!",
      7: "Set the source node distance to 0 since we start there.",
      9: "Continue until we've visited all reachable nodes and found their shortest paths.",
      11: "Select the unvisited node with the smallest known distance. This greedy choice guarantees optimality!",
      15: "Mark the node as visited. We've now found the shortest path to this node - it won't change!",
      18: "Check all neighbors of the current node to see if we can improve their distances.",
      20: "Relaxation: if going through the current node gives a shorter path to a neighbor, update it.",
      21: "Update the neighbor's distance and add it to the priority queue for future processing."
    },
    problem: {
      statement: "Find the shortest path from a source node to all other nodes in a weighted graph.",
      input: "weighted graph, source = 0",
      output: "Shortest distances: {0:0, 1:4, 2:1, 3:2, 4:5}",
      connection: "Watch how Dijkstra greedily picks the closest unvisited node and updates distances to its neighbors, building shortest paths step by step."
    }
  },
  'heap-sort': {
    lineMapping: {
      init: 2,
      buildHeap: 3,
      heapify: 12,
      extract: 6,
      swap: 7,
      complete: 10
    },
    whyExplanations: {
      2: "Heap sort first builds a max heap from the array, then repeatedly extracts the maximum element.",
      3: "Build the max heap by calling heapify on all non-leaf nodes, starting from the last parent node.",
      6: "Extract phase: repeatedly swap the root (maximum) with the last element and reduce heap size.",
      7: "Swap the maximum element (at root) with the last element, placing it in its final sorted position.",
      12: "Heapify maintains the max heap property by comparing parent with children and swapping if needed.",
      10: "Heap sort complete! Array is now sorted with O(n log n) time and O(1) space."
    },
    problem: {
      statement: "Sort an array using heap sort by building a max heap and extracting elements.",
      input: "arr = [12, 11, 13, 5, 6, 7]",
      output: "[5, 6, 7, 11, 12, 13]",
      connection: "Watch how the max heap is built, then elements are extracted one by one to create the sorted array."
    }
  }
};
