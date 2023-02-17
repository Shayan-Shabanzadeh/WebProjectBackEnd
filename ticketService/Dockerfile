FROM node:alpine
WORKDIR /usr/src/app
RUN pwd
RUN mkdir ticketService
WORKDIR /usr/src/app/ticketService
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]