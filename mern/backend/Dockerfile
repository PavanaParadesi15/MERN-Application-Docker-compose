# npn install : It will install all the dependencies mentioned in package.json file.
# COPY . . : It will copy all the files (Complete source code of front-end) from the current directory to the working directory of the container.
# node official image : It will pull the node image from the docker hub.
# WORKDIR /app : It will set the working directory of the container to /app. 

FROM node:18.9.1

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5050

CMD ["npm", "start"]

