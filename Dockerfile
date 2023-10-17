FROM node
WORKDIR /developer/node/docker-server

COPY . . 

# ci - clean install (recommended)
RUN npm ci

CMD ["npm", "start"]