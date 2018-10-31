FROM node:10.6 

WORKDIR /weatherapp_frontend
COPY . /weatherapp_frontend

RUN npm install

RUN npm build

CMD ["npm","start"]