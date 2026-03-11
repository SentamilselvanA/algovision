export function generateBinarySearchSteps(arr, target) {
  const steps = [];
  let left = 0, right = arr.length - 1;
  
  steps.push({
    array: [...arr],
    variables: { left, right, mid: null, target, found: null },
    explanation: `Starting binary search for target ${target}. Initialize left=0, right=${arr.length - 1}`
  });

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    steps.push({
      array: [...arr],
      variables: { left, right, mid, target, found: null },
      explanation: `Calculate mid = ${mid}. Compare arr[${mid}] = ${arr[mid]} with target ${target}`
    });

    if (arr[mid] === target) {
      steps.push({
        array: [...arr],
        variables: { left, right, mid, target, found: mid },
        explanation: `Found! arr[${mid}] = ${arr[mid]} equals target ${target}`
      });
      return steps;
    } else if (arr[mid] < target) {
      steps.push({
        array: [...arr],
        variables: { left: mid + 1, right, mid, target, found: null },
        explanation: `arr[${mid}] = ${arr[mid]} < ${target}. Search right half. Set left = ${mid + 1}`
      });
      left = mid + 1;
    } else {
      steps.push({
        array: [...arr],
        variables: { left, right: mid - 1, mid, target, found: null },
        explanation: `arr[${mid}] = ${arr[mid]} > ${target}. Search left half. Set right = ${mid - 1}`
      });
      right = mid - 1;
    }
  }

  steps.push({
    array: [...arr],
    variables: { left, right, mid: null, target, found: -1 },
    explanation: `Target ${target} not found in array`
  });

  return steps;
}

export function generateBubbleSortSteps(arr) {
  const steps = [];
  const array = [...arr];
  const n = array.length;

  steps.push({
    array: [...array],
    variables: { i: 0, j: 0, comparing: false, swapped: false },
    explanation: 'Starting Bubble Sort. Will compare adjacent elements and swap if needed.'
  });

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      steps.push({
        array: [...array],
        variables: { i, j, comparing: true, swapped: false },
        explanation: `Comparing arr[${j}] = ${array[j]} with arr[${j + 1}] = ${array[j + 1]}`
      });

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        steps.push({
          array: [...array],
          variables: { i, j, comparing: false, swapped: true },
          explanation: `Swapped! ${array[j + 1]} > ${array[j]}, so swap them`
        });
      }
    }
  }

  steps.push({
    array: [...array],
    variables: { i: n - 1, j: 0, comparing: false, swapped: false },
    explanation: 'Sorting complete! Array is now sorted.'
  });

  return steps;
}

export function generateTwoPointersSteps(arr, target) {
  const steps = [];
  let left = 0, right = arr.length - 1;

  steps.push({
    array: [...arr],
    variables: { left, right, target, found: false },
    explanation: `Finding two numbers that sum to ${target}. Start with left=0, right=${arr.length - 1}`
  });

  while (left < right) {
    const sum = arr[left] + arr[right];
    
    steps.push({
      array: [...arr],
      variables: { left, right, target, found: false },
      explanation: `arr[${left}] + arr[${right}] = ${arr[left]} + ${arr[right]} = ${sum}`
    });

    if (sum === target) {
      steps.push({
        array: [...arr],
        variables: { left, right, target, found: true },
        explanation: `Found! arr[${left}] + arr[${right}] = ${target}`
      });
      return steps;
    } else if (sum < target) {
      steps.push({
        array: [...arr],
        variables: { left: left + 1, right, target, found: false },
        explanation: `${sum} < ${target}. Need larger sum. Move left pointer right.`
      });
      left++;
    } else {
      steps.push({
        array: [...arr],
        variables: { left, right: right - 1, target, found: false },
        explanation: `${sum} > ${target}. Need smaller sum. Move right pointer left.`
      });
      right--;
    }
  }

  steps.push({
    array: [...arr],
    variables: { left, right, target, found: false },
    explanation: `No pair found that sums to ${target}`
  });

  return steps;
}

export function generateSlidingWindowSteps(arr, k) {
  const steps = [];
  let windowSum = 0, maxSum = 0;

  steps.push({
    array: [...arr],
    variables: { windowStart: 0, windowEnd: k - 1, k, currentSum: 0, maxSum: 0 },
    explanation: `Finding max sum of subarray with size ${k}. Initialize window.`
  });

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  steps.push({
    array: [...arr],
    variables: { windowStart: 0, windowEnd: k - 1, k, currentSum: windowSum, maxSum },
    explanation: `Initial window sum = ${windowSum}`
  });

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    
    steps.push({
      array: [...arr],
      variables: { windowStart: i - k + 1, windowEnd: i, k, currentSum: windowSum, maxSum },
      explanation: `Slide window: remove ${arr[i - k]}, add ${arr[i]}. New sum = ${windowSum}`
    });

    if (windowSum > maxSum) {
      maxSum = windowSum;
      steps.push({
        array: [...arr],
        variables: { windowStart: i - k + 1, windowEnd: i, k, currentSum: windowSum, maxSum },
        explanation: `New maximum found! Max sum = ${maxSum}`
      });
    }
  }

  steps.push({
    array: [...arr],
    variables: { windowStart: arr.length - k, windowEnd: arr.length - 1, k, currentSum: windowSum, maxSum },
    explanation: `Complete! Maximum sum of subarray with size ${k} is ${maxSum}`
  });

  return steps;
}

export function generateBFSSteps(graph, start) {
  const steps = [];
  const visited = [];
  const queue = [start];

  steps.push({
    graph,
    variables: { current: null, visited: [], queue: [start] },
    explanation: `Starting BFS from node ${start}. Add to queue.`
  });

  while (queue.length > 0) {
    const node = queue.shift();
    
    steps.push({
      graph,
      variables: { current: node, visited: [...visited], queue: [...queue] },
      explanation: `Dequeue node ${node}. Process it.`
    });

    visited.push(node);

    steps.push({
      graph,
      variables: { current: node, visited: [...visited], queue: [...queue] },
      explanation: `Mark node ${node} as visited.`
    });

    for (const neighbor of graph[node]) {
      if (!visited.includes(neighbor) && !queue.includes(neighbor)) {
        queue.push(neighbor);
        steps.push({
          graph,
          variables: { current: node, visited: [...visited], queue: [...queue] },
          explanation: `Add unvisited neighbor ${neighbor} to queue.`
        });
      }
    }
  }

  steps.push({
    graph,
    variables: { current: null, visited: [...visited], queue: [] },
    explanation: `BFS complete! Visited order: ${visited.join(' → ')}`
  });

  return steps;
}

export function generateDFSSteps(graph, start) {
  const steps = [];
  const visited = [];
  const stack = [start];

  steps.push({
    graph,
    variables: { current: null, visited: [], stack: [start] },
    explanation: `Starting DFS from node ${start}. Add to stack.`
  });

  while (stack.length > 0) {
    const node = stack.pop();
    
    if (visited.includes(node)) continue;

    steps.push({
      graph,
      variables: { current: node, visited: [...visited], stack: [...stack] },
      explanation: `Pop node ${node} from stack. Process it.`
    });

    visited.push(node);

    steps.push({
      graph,
      variables: { current: node, visited: [...visited], stack: [...stack] },
      explanation: `Mark node ${node} as visited.`
    });

    const neighbors = [...graph[node]].reverse();
    for (const neighbor of neighbors) {
      if (!visited.includes(neighbor)) {
        stack.push(neighbor);
        steps.push({
          graph,
          variables: { current: node, visited: [...visited], stack: [...stack] },
          explanation: `Add unvisited neighbor ${neighbor} to stack.`
        });
      }
    }
  }

  steps.push({
    graph,
    variables: { current: null, visited: [...visited], stack: [] },
    explanation: `DFS complete! Visited order: ${visited.join(' → ')}`
  });

  return steps;
}

export function generateMergeSortSteps(arr) {
  const steps = [];
  const array = [...arr];

  function mergeSortHelper(arr, start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    
    steps.push({
      array: [...array],
      variables: { comparing: Array.from({ length: end - start + 1 }, (_, i) => start + i), merging: [], sorted: [] },
      explanation: `Divide: Split array from index ${start} to ${end} at mid ${mid}`
    });

    mergeSortHelper(arr, start, mid);
    mergeSortHelper(arr, mid + 1, end);

    const left = arr.slice(start, mid + 1);
    const right = arr.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;

    steps.push({
      array: [...array],
      variables: { comparing: [], merging: Array.from({ length: end - start + 1 }, (_, i) => start + i), sorted: [] },
      explanation: `Merge: Merging subarrays [${left}] and [${right}]`
    });

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        array[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        array[k] = right[j];
        j++;
      }
      k++;
    }

    while (i < left.length) {
      arr[k] = left[i];
      array[k] = left[i];
      i++;
      k++;
    }

    while (j < right.length) {
      arr[k] = right[j];
      array[k] = right[j];
      j++;
      k++;
    }

    steps.push({
      array: [...array],
      variables: { comparing: [], merging: [], sorted: Array.from({ length: end - start + 1 }, (_, i) => start + i) },
      explanation: `Merged and sorted subarray from ${start} to ${end}`
    });
  }

  steps.push({
    array: [...array],
    variables: { comparing: [], merging: [], sorted: [] },
    explanation: 'Starting Merge Sort. Will divide array and merge sorted parts.'
  });

  mergeSortHelper(array, 0, array.length - 1);

  steps.push({
    array: [...array],
    variables: { comparing: [], merging: [], sorted: Array.from({ length: array.length }, (_, i) => i) },
    explanation: 'Merge Sort complete! Array is fully sorted.'
  });

  return steps;
}

export function generateLinearSearchSteps(arr, target) {
  const steps = [];

  steps.push({
    array: [...arr],
    variables: { current: null, target, found: null },
    explanation: `Starting linear search for target ${target}. Will check each element sequentially.`
  });

  for (let i = 0; i < arr.length; i++) {
    steps.push({
      array: [...arr],
      variables: { current: i, target, found: null },
      explanation: `Checking arr[${i}] = ${arr[i]}. Is it equal to ${target}?`
    });

    if (arr[i] === target) {
      steps.push({
        array: [...arr],
        variables: { current: i, target, found: i },
        explanation: `Found! arr[${i}] = ${arr[i]} equals target ${target}`
      });
      return steps;
    }
  }

  steps.push({
    array: [...arr],
    variables: { current: arr.length - 1, target, found: -1 },
    explanation: `Target ${target} not found in array`
  });

  return steps;
}

export function generateQuickSortSteps(arr) {
  const steps = [];
  const array = [...arr];
  const sorted = [];

  function partition(low, high) {
    const pivot = array[high];
    let i = low - 1;

    steps.push({
      array: [...array],
      variables: { pivot: high, left: low, right: high, i: -1, j: low, sorted: [...sorted] },
      explanation: `Partition: Choose pivot = arr[${high}] = ${pivot}`
    });

    for (let j = low; j < high; j++) {
      steps.push({
        array: [...array],
        variables: { pivot: high, left: low, right: high, i, j, sorted: [...sorted] },
        explanation: `Compare arr[${j}] = ${array[j]} with pivot ${pivot}`
      });

      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        steps.push({
          array: [...array],
          variables: { pivot: high, left: low, right: high, i, j, sorted: [...sorted] },
          explanation: `arr[${j}] < pivot. Swap arr[${i}] and arr[${j}]`
        });
      }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    steps.push({
      array: [...array],
      variables: { pivot: i + 1, left: low, right: high, i, j: high, sorted: [...sorted, i + 1] },
      explanation: `Place pivot at correct position ${i + 1}`
    });

    sorted.push(i + 1);
    return i + 1;
  }

  function quickSortHelper(low, high) {
    if (low < high) {
      const pi = partition(low, high);
      quickSortHelper(low, pi - 1);
      quickSortHelper(pi + 1, high);
    } else if (low === high) {
      sorted.push(low);
    }
  }

  steps.push({
    array: [...array],
    variables: { pivot: null, left: 0, right: array.length - 1, i: null, j: null, sorted: [] },
    explanation: 'Starting Quick Sort. Will partition array around pivot elements.'
  });

  quickSortHelper(0, array.length - 1);

  steps.push({
    array: [...array],
    variables: { pivot: null, left: 0, right: array.length - 1, i: null, j: null, sorted: Array.from({ length: array.length }, (_, i) => i) },
    explanation: 'Quick Sort complete! Array is fully sorted.'
  });

  return steps;
}

export function generateSelectionSortSteps(arr) {
  const steps = [];
  const array = [...arr];
  const n = array.length;

  steps.push({
    array: [...array],
    variables: { i: 0, j: 0, minIdx: 0, sorted: false },
    explanation: 'Starting Selection Sort. Will find minimum element and place it at the beginning.'
  });

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    steps.push({
      array: [...array],
      variables: { i, j: i, minIdx, sorted: false },
      explanation: `Finding minimum in unsorted portion starting at index ${i}`
    });

    for (let j = i + 1; j < n; j++) {
      steps.push({
        array: [...array],
        variables: { i, j, minIdx, sorted: false },
        explanation: `Comparing arr[${j}] = ${array[j]} with current min arr[${minIdx}] = ${array[minIdx]}`
      });

      if (array[j] < array[minIdx]) {
        minIdx = j;
        steps.push({
          array: [...array],
          variables: { i, j, minIdx, sorted: false },
          explanation: `New minimum found at index ${minIdx}: ${array[minIdx]}`
        });
      }
    }

    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
      steps.push({
        array: [...array],
        variables: { i, j: n, minIdx, sorted: false },
        explanation: `Swap minimum element arr[${minIdx}] with arr[${i}]`
      });
    }
  }

  steps.push({
    array: [...array],
    variables: { i: n - 1, j: n, minIdx: n - 1, sorted: true },
    explanation: 'Selection Sort complete! Array is now sorted.'
  });

  return steps;
}

export function generateInsertionSortSteps(arr) {
  const steps = [];
  const array = [...arr];
  const n = array.length;

  steps.push({
    array: [...array],
    variables: { i: 1, j: 0, key: null, sorted: false },
    explanation: 'Starting Insertion Sort. Will insert each element into its correct position.'
  });

  for (let i = 1; i < n; i++) {
    const key = array[i];
    let j = i - 1;

    steps.push({
      array: [...array],
      variables: { i, j, key, sorted: false },
      explanation: `Pick element arr[${i}] = ${key} to insert into sorted portion`
    });

    while (j >= 0 && array[j] > key) {
      steps.push({
        array: [...array],
        variables: { i, j, key, sorted: false },
        explanation: `arr[${j}] = ${array[j]} > ${key}. Shift arr[${j}] to the right`
      });

      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
    steps.push({
      array: [...array],
      variables: { i, j, key, sorted: false },
      explanation: `Insert ${key} at position ${j + 1}`
    });
  }

  steps.push({
    array: [...array],
    variables: { i: n, j: n - 1, key: null, sorted: true },
    explanation: 'Insertion Sort complete! Array is now sorted.'
  });

  return steps;
}

export function generateDijkstraSteps(graph, start) {
  const steps = [];
  const distances = {};
  const visited = [];
  const nodes = Object.keys(graph).map(Number);

  for (const node of nodes) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  steps.push({
    graph,
    variables: { current: null, visited: [], distances: { ...distances } },
    explanation: `Starting Dijkstra's algorithm from node ${start}. Initialize all distances to infinity except source.`
  });

  while (visited.length < nodes.length) {
    let minDist = Infinity;
    let current = null;

    for (const node of nodes) {
      if (!visited.includes(node) && distances[node] < minDist) {
        minDist = distances[node];
        current = node;
      }
    }

    if (current === null || distances[current] === Infinity) break;

    steps.push({
      graph,
      variables: { current, visited: [...visited], distances: { ...distances } },
      explanation: `Select node ${current} with minimum distance ${distances[current]}`
    });

    visited.push(current);

    steps.push({
      graph,
      variables: { current, visited: [...visited], distances: { ...distances } },
      explanation: `Mark node ${current} as visited`
    });

    if (graph[current]) {
      for (const [neighbor, weight] of graph[current]) {
        if (!visited.includes(neighbor)) {
          const newDist = distances[current] + weight;
          
          if (newDist < distances[neighbor]) {
            distances[neighbor] = newDist;
            steps.push({
              graph,
              variables: { current, visited: [...visited], distances: { ...distances } },
              explanation: `Update distance to node ${neighbor}: ${distances[neighbor]} (via node ${current})`
            });
          }
        }
      }
    }
  }

  steps.push({
    graph,
    variables: { current: null, visited: [...visited], distances: { ...distances } },
    explanation: `Dijkstra's algorithm complete! Shortest paths from node ${start} calculated.`
  });

  return steps;
}
