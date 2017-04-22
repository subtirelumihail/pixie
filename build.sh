#!/bin/bash
# This is the build and run script

# Install dependencys
yarn install

# Build the project
yarn run build:prod

# Build the image
docker build -t pixie .

# Clean
yarn run clean

echo "Please enter the tag name"
read input_variable

# Push the container
docker tag pixie subtirelumihail/pixie:$input_variable
docker push subtirelumihail/pixie
