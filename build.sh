#!/bin/bash
# This is the build and run script

# Build the image
docker build -t pixie .

# Stop all container and remove them
docker stop pixie-app
docker rm pixie-app

# Run the container
docker run --name pixie-app -d -p 8080:3030 pixie
