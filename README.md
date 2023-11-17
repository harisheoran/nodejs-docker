# Full Fledged DevOps Project
- Node JS Application
- Version Control System
- Containerization
- Testing
- Continuous Integration
- Continuous Delivery
- Cloud
---
## Node JS Application
Start building simple Node JS application
- Initialize Application
```
npm init
```
- Install Express JS
```
npm install express
```
- Simple Express JS app
```
const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("<h1> Full end to end DevOps Project</h1>")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listining on ${port}`))
```
- Start server
```
node index.js
```

- Go to url 127.0.0.1:3000
Application is running

## Containerization
Make a Docker file of our express JS appliction
```
touch Dockerfile
```

```
# Need a base image of Node JS

FROM node:20-alpine

# Creating the work directory of application

WORKDIR /app

# First, copy package.json into our current directory " . "
COPY package.json .

# Install all packages
RUN npm install

# Copy rest of the files
COPY . .

Start the server
CMD [ "node", "index.js" ]
```

- ***Build the Docker Image***
```
docker build -t my-node-app .
```
- *-t* : tag flag for giving our image a name
- *.*  : it means build image from Dockerfile which is in our current directory.

- ***Check the list of images***
```
docker images
```
check your built image name and info.

- ***Start the container from image***
```
docker container run -d -p 3000:3000 my-node-app
```

- *-d* : Detach mode (terminal will be free for other commands)
- *-p* : defining port tunnel to transfer traffic from 3000 port on our pc to 3000 port of node application.

- ***Check the container***
```
docker ps
```
you'll see running container info with thier ID

- ***Stop the container***
```
docker stop <ID>
```

### Problem
During writing Dockerfile, we wrote a command *COPY . .* which copy all files including *node_modules* that is unnecessary as *RUN npm install* will install all node_modules.

### Solution
.dockerignore

### Problem

### Solution
Bind Mount

