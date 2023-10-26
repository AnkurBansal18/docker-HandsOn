FROM node
WORKDIR /developer/node/docker-server

COPY . . 

# ci - clean install (recommended)
RUN npm ci

ENV PORT 3000
CMD ["npm", "start"]