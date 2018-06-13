# Docker

We use docker to provision and run the services within the project.

## Installation

You'll need Docker and docker-compose

**MacOS:**
https://docs.docker.com/docker-for-mac/install/

**Linux (ubuntu):**
https://docs.docker.com/install/linux/docker-ce/ubuntu/

**Windows:**
https://docs.docker.com/docker-for-windows/install/

## Development setup

For development this project uses two containers, there are:

- minorwebdev_postgres (PostgreSQL database)
- minorwebdev_adminer (Database administration web tool)

**To build and run these containers on your device, run the following command:**

`docker-compose up -d`

After this you can run the ExpressJS server (app/server.js) as follows:

`DEBUG=minor-server node server.js`

**Shutting down the container can be done with the following command:**

`docker-compose down`

## SQL imports and exports

It is not recommended to use Adminer for importing or exporting data. Importing and exporting can be done with the following commands:

**importing:**

`cat minorwebdev.sql | docker exec -i minorwebdev_postgres psql -U minorwebdev -d minorwebdev`

**exporting:**

`docker exec -i minorwebdev_postgres pg_dump -U minorwebdev minorwebdev > minorwebdev.sql`
