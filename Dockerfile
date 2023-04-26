FROM node:16.18.0
WORKDIR /app
COPY ./dist .
COPY ./package.json .
RUN npm config set registry https://registry.npm.taobao.org
RUN npm i npm -g
RUN npm i supervisor -g
# RUN npm i pm2 -g
RUN npm i
EXPOSE 3000
CMD supervisor ./main.js
# CMD pm2 start ./main.js --name nestjs-demo --watch
