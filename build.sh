#!/bin/bash
# This is the build and run script

# Install dependencys
yarn install

# Build the project
yarn run build:prod

# Build the image
docker build -t pixie .

# Stop all container and remove them
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

# Clean
yarn run clean

# Run the container
docker run --name pixie-app -d -p 80:80 pixie
