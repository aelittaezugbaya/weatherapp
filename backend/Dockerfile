FROM node:10.6 

RUN mkdir -p /weatherapp_backend
WORKDIR /weatherapp_backend
COPY . ./

RUN npm install

CMD ["npm", "start"]