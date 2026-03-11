# Commands Reference

## 📦 Installation Commands

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

## 🚀 Development Commands

### Start Backend Server
```bash
cd backend
npm run dev
```
Runs on: http://localhost:5000

### Start Frontend Server
```bash
cd frontend
npm run dev
```
Runs on: http://localhost:3000

### Seed Database (Optional)
```bash
cd backend
node src/seed.js
```

## 🏗️ Build Commands

### Build Frontend for Production
```bash
cd frontend
npm run build
```

### Preview Production Build
```bash
cd frontend
npm run preview
```

### Start Backend in Production
```bash
cd backend
npm start
```

## 🧹 Cleanup Commands

### Remove node_modules
```bash
# Windows
rmdir /s /q node_modules

# Unix/Linux/Mac
rm -rf node_modules
```

### Clean Install
```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

## 🗄️ MongoDB Commands

### Start MongoDB (Local)
```bash
# Windows
net start MongoDB

# Mac (Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Stop MongoDB (Local)
```bash
# Windows
net stop MongoDB

# Mac (Homebrew)
brew services stop mongodb-community

# Linux
sudo systemctl stop mongod
```

### MongoDB Shell
```bash
mongosh
```

### View AlgoVision Database
```bash
mongosh
use algovision
db.algorithms.find()
db.users.find()
```

## 🔧 Git Commands

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit: AlgoVision MVP"
```

### Create .gitignore
Already created in project root

### Push to GitHub
```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## 🧪 Testing Commands (Future)

### Run Tests
```bash
npm test
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Run E2E Tests
```bash
npm run test:e2e
```

## 📊 Useful NPM Commands

### Check for Outdated Packages
```bash
npm outdated
```

### Update Packages
```bash
npm update
```

### Audit Security
```bash
npm audit
npm audit fix
```

### List Installed Packages
```bash
npm list --depth=0
```

## 🐛 Debugging Commands

### Check Node Version
```bash
node --version
```

### Check NPM Version
```bash
npm --version
```

### Clear NPM Cache
```bash
npm cache clean --force
```

### Check Port Usage (Windows)
```bash
netstat -ano | findstr :3000
netstat -ano | findstr :5000
```

### Kill Process on Port (Windows)
```bash
# Find PID first, then:
taskkill /PID <PID> /F
```

## 🔍 Useful Development Commands

### Watch for File Changes
```bash
# Already included in npm run dev
```

### Check Bundle Size
```bash
cd frontend
npm run build
# Check dist folder size
```

### Format Code (if Prettier installed)
```bash
npm run format
```

### Lint Code (if ESLint installed)
```bash
npm run lint
```

## 📝 Environment Setup

### Create .env file
```bash
cd backend
# Create .env file with:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/algovision
# JWT_SECRET=your_secret_key
# NODE_ENV=development
```

## 🌐 Deployment Commands (Future)

### Deploy Frontend to Vercel
```bash
cd frontend
vercel
```

### Deploy Backend to Heroku
```bash
cd backend
heroku create algovision-api
git push heroku main
```

### Deploy to Netlify
```bash
cd frontend
netlify deploy --prod
```

## 💡 Quick Tips

### Run Both Servers Simultaneously (Windows)
Create a `start.bat` file in root:
```batch
start cmd /k "cd backend && npm run dev"
start cmd /k "cd frontend && npm run dev"
```

### Run Both Servers Simultaneously (Unix/Mac)
Create a `start.sh` file in root:
```bash
#!/bin/bash
cd backend && npm run dev &
cd frontend && npm run dev &
```

### Stop All Node Processes (Emergency)
```bash
# Windows
taskkill /F /IM node.exe

# Unix/Mac
killall node
```

## 📚 Documentation Commands

### Generate JSDoc (if configured)
```bash
npm run docs
```

### Serve Documentation
```bash
npm run docs:serve
```

## 🎯 Common Workflows

### Starting Fresh Development Session
```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm run dev

# Open browser to http://localhost:3000
```

### After Pulling New Changes
```bash
# Update dependencies if package.json changed
cd backend && npm install
cd frontend && npm install

# Restart servers
```

### Before Committing
```bash
# Test the application
# Check for console errors
# Verify all features work
git add .
git commit -m "Your commit message"
git push
```

---

**Pro Tip:** Bookmark this file for quick reference! 🔖
