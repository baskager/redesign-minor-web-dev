if [[ $NODE_ENV == "development" ]]; then 
    echo "Composing containers for development"
    docker build .
    docker-compose -f docker-compose.dev.yml up -d
else
    echo "Composing containers for production"
    docker build .
    docker-compose -f docker-compose.prod.yml up -d
fi
