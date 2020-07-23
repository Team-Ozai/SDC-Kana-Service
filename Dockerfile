# specify the node base image with your desired version node:<version>
FROM node:10.15.3

# Set the working directory
WORKDIR /sdc

# Copy root directory into docker root directory
COPY . .

# Command to run upon mounting image
RUN ls -la /*
RUN npm install
# RUN npm run build
# RUN npm start

#application's default port
EXPOSE 3002

#specifies what command to run within the container
CMD ["npm", "start", "npm", "run", "build"]
