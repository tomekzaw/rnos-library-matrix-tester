#!/usr/bin/env bash
set -u

# overwrite files
cp -a app/. $E2E_APP_PATH

# remove unnecessary files
cd $E2E_APP_PATH && rm -f .flowconfig App.js __tests__/App-test.js __tests__/App-test.tsx
