FROM node:10.6 

RUN mkdir -p /frontend
WORKDIR /frontend
COPY . /frontend

RUN npm install

RUN npm build

CMD ["npm","start"]