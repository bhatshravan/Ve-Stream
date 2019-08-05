FROM node:11

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

#for building
#docker build -t fabrik/fbrk-cloth . 

#for running
#docker run -p 8080:8080 -d fabrik/fbrk-cloth

#for stopping
#docker ps -- Get the container id of image
#docker stop <container-id>