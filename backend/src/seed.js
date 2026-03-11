import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Algorithm from './models/Algorithm.js';

dotenv.config();

const algorithms = [
  {
    id: 'binary-search',
    name: 'Binary Search',
    category: 'Searching',
    description: 'Binary search is an efficient algorithm for finding an item from a sorted list by repeatedly dividing the search interval in half.',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    whenToUse: 'Use when searching in a sorted array or list. Perfect for large datasets where linear search would be too slow.',
    code: {
      javascript: `function binarySearch(arr, target) {\n  let left = 0;\n  let right = arr.length - 1;\n  \n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    \n    if (arr[mid] === target) {\n      return mid;\n    } else if (arr[mid] < target) {\n      left = mid + 1;\n    } else {\n      right = mid - 1;\n    }\n  }\n  \n  return -1;\n}`,
      python: `def binary_search(arr, target):\n    left = 0\n    right = len(arr) - 1\n    \n    while left <= right:\n        mid = (left + right) // 2\n        \n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    \n    return -1`,
      cpp: `int binarySearch(vector<int>& arr, int target) {\n    int left = 0;\n    int right = arr.size() - 1;\n    \n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        \n        if (arr[mid] == target) {\n            return mid;\n        } else if (arr[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    \n    return -1;\n}`
    }
  }
  // Add more algorithms as needed
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Algorithm.deleteMany({});
    console.log('Cleared existing algorithms');

    // Insert new data
    await Algorithm.insertMany(algorithms);
    console.log('Seeded algorithms successfully');

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
