# MERN-Application-Docker-compose
This is a MERN Stack application, I am containerizing it  and deploying it in docker environment using Docker compose
# This is a simple MERN Stack application. 

* There is front-end and back-end code. I have written docker files for front-end and back-end.
* There is a database which is MongoDB and running it as container. I am creating common networking for all of these components, so they can communicate with each other. 
* Database is deployed directly, through the backend we establish connection with the deployed DB. Inside the backend folder there is code for backend logic and there is a folder for DB, inside this there is "connection.js" file. This file is responsible to establish connection with DB.
* Written a docker-compose.yaml file.

# MERN Stack application

A three-tier architecture application has 
1. Presentation (UI-Frontend)
2. Business logic (server - Backend)
3. Database 

Frontend user can see UI, sends a request and logic layer (backend) receives the user request and fetches the data from DB and sends it back to user. 

MERN - MongoDB, Express JS, ReactJS, NodeJS 

* In this application, MongoDB is the database layer , Logic layer (backend)  is written in express js, server to deploy the backend is done through Nodejs. 
* So backend code is written in express js and deployed it in Nodejs. 
* On top this backend there is Frontend (presentation layer) written in MongoDB. 


# Containerizing the application

* Create a Linux VM, SSH into it.

## Install Docker 
```
sudo apt update
sudo apt install docker.io -y
sudo usermod -aG docker jenkins
sudo usermod -aG docker ubuntu
sudo systemctl restart docker
sudo chmod 777 /var/run/docker.sock
docker --version
```
``` 
docker ps                // check if the Docker is running
```

## Build front-end  - Client

* Docker compose needs docker files
```
docker build -t mern-frontend .
```

### Create a network. 
* Network is required when we have different containers like frontend, backend, database. 
* If we have a common network for all docker containers they can all communicate easily. Common network is useful for multiple containers in an application.

```
docker network create mern
```

### Run the frontend 
```
docker run --name=frontend --network=mern -d -p 5173:5173 mern-frontend
```
Create a container for frontend, port running - 5173, -p : port binding container port 5173 to host port 5173 , name of image : mern-frontend

```
docker images                   // command to check the docker images
docker ps                       // command to check the running containers
docker logs <containerID>       // to check container logs
```

## Build Database 

* Its the best practice to build database before building the backend (server) 

```
docker run --network=mern --name mongodb -d -p 27017:27017 -v ~/opt/data:/data/db mongo:latest
```

* Mounting /opt/data to data/db : mounting  local folder to mongodb data to store the data 
* port binding : binding container port 27017 to host port 27017 

## All the  steps performed

* A common bridge Network should be created for the containers to communicate with each other, and when starting/creating a container, bind that network to the containers so that all the containers can communicate with each other. 
* Create a docker file for frontend and build frontend image. 
* Start the DB , mention the port and mount the volume for the DB for the data to get stored.
* Create docker file for Backend and build backend docker image. 

## How Docker compose can execute all the staps. 
* So for the above steps we run different commands each for creating docker image and run different individual containers. Instead of running all the commands, we can do all of these in a single file, Docker compose
* Instead of executing multiple commands, to create network, run frontend container, DB container, backend container, to avoild all these manual steps, we can write a single yaml file which is docker compose.yaml
* Docker compose is used to run multiple containers and create a common network for all of them at a time. 


Command to list the networks created
```
docker network ls
```

## Command to run docker compose to start containers
```
docker compose up -d                       // -d detach mode
docker-compose down                     /// to shutdown container
```

Once the container starts, access the web page through browser - ec2instanceip:port















