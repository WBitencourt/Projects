#!/bin/bash

# Path to the apps directory
APPS_DIR=./apps

# Itera sobre os diretórios de aplicativos
for app in "$APPS_DIR"/*; do
  if [ -f "$app/package.json" ]; then
    echo "Building app at $app"
    (cd "$app" && npm install && npm run build) || exit 1
    echo "Starting app at $app"
    (cd "$app" && npm run start) &
  fi
done

# Wait for all apps to start
wait