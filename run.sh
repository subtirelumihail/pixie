# Docker pull new container
docker pull subtirelumihail/pixie

# Stop all container and remove them
docker stop pixie-app
docker rm pixie-app

# Start the service
docker run --name pixie-app -d -p 8080:3030 pixie