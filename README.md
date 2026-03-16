# AlgoVision 🚀

AlgoVision is a powerful, interactive algorithm visualization platform designed to help developers and students understand complex data structures and algorithms through intuitive, real-time visualizations.

![AlgoVision Preview](https://via.placeholder.com/800x400?text=AlgoVision+Visualizer+Demo)

## ✨ Key Features

- **Interactive Visualizations**: Watch algorithms step-by-step with real-time feedback.
- **Wide Range of Algorithms**:
  - **Sorting**: Bubble Sort, Quick Sort, Merge Sort, Heap Sort, Selection Sort, Insertion Sort.
  - **Searching**: Linear Search, Binary Search.
  - **Graph Algorithms**: BFS, DFS, Dijkstra's Algorithm.
  - **Advanced Patterns**: Sliding Window, Two Pointers.
- **Code Insight**: Integrated Monaco Editor (VS Code engine) to see code alongside visualizations.
- **User Accounts**: Save your progress and customized settings (coming soon).
- **Responsive Design**: Modern, premium UI built with Tailwind CSS and Framer Motion for smooth animations.

## 🛠️ Tech Stack

### Frontend
- **React** (Vite-powered)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Monaco Editor** for code display
- **Lucide React** for iconography
- **React Router** for navigation

### Backend
- **Node.js** & **Express**
- **MongoDB** with **Mongoose**
- **JWT (JSON Web Tokens)** for authentication
- **BcryptJS** for password hashing

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd algovision
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory and add:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Frontend Setup**:
   ```bash
   cd ../frontend
   npm install
   ```

## 💻 Usage

### Start the Backend
```bash
cd backend
npm run dev
```

### Start the Frontend
```bash
cd frontend
npm run dev
```
The app will typically be available at `http://localhost:5173`.

## 📂 Project Structure

```text
algovision/
├── backend/            # Express server & API routes
│   └── src/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       └── server.js
└── frontend/           # React application
    └── src/
        ├── components/
        ├── pages/
        ├── visualizations/ # Individual algorithm logic
        └── App.jsx
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---
Built with ❤️ for better learning.
