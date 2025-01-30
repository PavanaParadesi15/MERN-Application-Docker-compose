# Use the official image as a parent image
# Description: Dockerfile for the client side of the MERN stack application
# Use the official image as a parent image
# npn install : It will install all the dependencies mentioned in package.json file.
# COPY . . : It will copy all the files (Complete source code of front-end) from the current directory to the working directory of the container.
# node official image : It will pull the node image from the docker hub.
# WORKDIR /app : It will set the working directory of the container to /app. 


FROM node:18.9.1

# Set the working directory
WORKDIR /app

# Copy the file from your host to your current location
COPY package.json .

# Run the command inside your image filesystem
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime
EXPOSE 5173

# Copy the rest of your app's source code from your host to your image filesystem
COPY . .

# Run the specified command within the container. 
# npm run dev -- It goes to package.json file, there is scripts under which there are different commands to run dev, build, lint. 
CMD ["npm", "run", "dev"]
