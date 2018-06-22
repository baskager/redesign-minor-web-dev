FROM node:carbon
ADD ./app /app
WORKDIR /app
RUN npm -v
RUN node -v
RUN npm install -g gulp
RUN npm install gulp
RUN npm install
RUN gulp