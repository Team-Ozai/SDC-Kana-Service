# specify the node base image with your desired version node:<version>
FROM node:10.15.3

# Set the working directory
WORKDIR /app

# Copy root directory into docker root directory
COPY . .

# Command to run upon mounting image
RUN npm install

#application's default port
EXPOSE 3002

#specifies what command to run within the container
CMD ["npm", "start"]