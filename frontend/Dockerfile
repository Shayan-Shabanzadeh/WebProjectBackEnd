FROM node:alpine
WORKDIR /usr/src/app
RUN pwd
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g live-server
CMD ["npm", "start"]