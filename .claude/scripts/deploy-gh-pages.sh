#!/bin/bash
# Deploy to gh-pages after a successful git commit on main.
# Called as a Claude Code PostToolUse hook.

set -e

cd "$CLAUDE_PROJECT_DIR"

# Only deploy from main branch
BRANCH=$(git branch --show-current)
if [ "$BRANCH" != "main" ]; then
  exit 0
fi

# Build
npm run build 2>&1

# Deploy to gh-pages
git checkout gh-pages 2>&1
git rm -rf assets index.html 2>/dev/null || true
cp -r dist/* .
git add index.html assets/
MAIN_MSG=$(git log main -1 --format='%h %s')
git commit -m "deploy: $MAIN_MSG" 2>&1
git checkout main 2>&1

echo "Deployed to gh-pages: $MAIN_MSG" >&2
