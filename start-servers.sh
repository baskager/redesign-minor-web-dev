if [[ $NODE_ENV == "development" ]]; then 
    echo "Composing containers for development"
    docker-compose -f docker-compose.dev.yml up --build -d
else
    echo "Composing containers for production".
    docker-compose -f docker-compose.prod.yml up --build -d
fi
