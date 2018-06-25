if [[ $NODE_ENV == "development" ]]; then 
    echo "Stopping containers for development"
    docker-compose -f docker-compose.dev.yml down
else
    echo "Stopping containers for production"
    docker-compose -f docker-compose.prod.yml down
fi
