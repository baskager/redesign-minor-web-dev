FROM node:carbon
ADD credentials.env credentials.env
ADD app /app
WORKDIR /app
RUN npm install -g gulp
RUN npm install gulp
RUN npm install
RUN gulp