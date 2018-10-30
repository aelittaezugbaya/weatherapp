FROM node:10.6 

# Setup and build the client

WORKDIR frontend/
COPY frontend/package*.json ./
RUN npm install 
COPY frontend/ ./
RUN npm build


# Setup the server

WORKDIR backend/
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

ENV PORT 9000

EXPOSE 9000

