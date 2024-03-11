#!/bin/bash

# Set the project directory to the current working directory
project_dir="$(pwd)"

preactApp="preactApp"

cd "$project_dir/$preactApp" && npm run build

# Find the generated React bundle in the dist/assets directory
react_bundle=$(find "$project_dir/$preactApp/dist/assets" -name 'index-*.js' -type f)

# Ensure a file is found
if [ -z "$react_bundle" ]; then
  echo "Error: React bundle not found."
  exit 1
fi

# Extract the filename from the path
filename=$(basename "$react_bundle")

# Move the React bundle to the static directory
cp "$react_bundle" "$project_dir/static/js/$filename"

# Run go
cd "$project_dir" && go run .
