#!/usr/bin/env bash
# Runs after every Edit/Write. On failure, exit code 2 tells Claude Code
# to show the error output (stderr) to Claude so it can react.
cd "$CLAUDE_PROJECT_DIR" || exit 0
if ! npm test --silent > /tmp/hook-test-output.txt 2>&1; then
  echo "Tests failed after your edit:" >&2
  cat /tmp/hook-test-output.txt >&2
  exit 2
fi
exit 0
