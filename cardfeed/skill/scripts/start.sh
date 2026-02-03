#!/bin/bash
# start.sh - Start CardFeed services
# Usage: ./start.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CARDFEED_DIR="$SCRIPT_DIR/.."

# Configuration
REPO_URL="https://github.com/maxoreric/agentUI.git"
LOCAL_DIR="$HOME/.cardfeed"
CARDFEED_PATH="$LOCAL_DIR/cardfeed"

echo "╔════════════════════════════════════════════════════════╗"
echo "║           CardFeed Startup                             ║"
echo "╚════════════════════════════════════════════════════════╝"

# Check if gh is installed
if ! command -v gh &> /dev/null; then
  echo "❌ GitHub CLI (gh) not installed. Install: brew install gh"
  exit 1
fi

# Clone or pull repo
if [ ! -d "$LOCAL_DIR" ]; then
  echo "📥 First time setup: cloning repository..."
  git clone "$REPO_URL" "$LOCAL_DIR"
else
  echo "📥 Pulling latest changes..."
  cd "$LOCAL_DIR"
  git pull origin master
fi

# Install dependencies
echo "📦 Installing dependencies..."
cd "$CARDFEED_PATH/app"
npm install --silent

cd "$CARDFEED_PATH/server"
npm install --silent

# Start services
echo ""
echo "🚀 Starting services..."

# Start WebSocket server in background
cd "$CARDFEED_PATH/server"
node index.js &
SERVER_PID=$!

# Start Vite dev server
cd "$CARDFEED_PATH/app"
npm run dev -- --host &
APP_PID=$!

echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║  CardFeed is running!                                  ║"
echo "╠════════════════════════════════════════════════════════╣"
echo "║  Web App:    http://localhost:5173                     ║"
echo "║  WebSocket:  ws://localhost:8080                       ║"
echo "╠════════════════════════════════════════════════════════╣"
echo "║  Press Ctrl+C to stop                                  ║"
echo "╚════════════════════════════════════════════════════════╝"

# Cleanup on exit
cleanup() {
  echo ""
  echo "Stopping services..."
  kill $SERVER_PID 2>/dev/null
  kill $APP_PID 2>/dev/null
  exit 0
}
trap cleanup SIGINT SIGTERM

# Wait
wait
