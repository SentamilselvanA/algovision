@echo off
echo ========================================
echo   AlgoVision - Starting Development
echo ========================================
echo.

echo [1/2] Starting Backend Server...
start "AlgoVision Backend" cmd /k "cd backend && npm run dev"
timeout /t 2 /nobreak > nul

echo [2/2] Starting Frontend Server...
start "AlgoVision Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo   Servers Starting!
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit this window...
pause > nul
