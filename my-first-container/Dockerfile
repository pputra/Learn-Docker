#base image
FROM node

#specify workdir
WORKDIR /usr/app

#copied first so that npm i only run if there is
#a change in dependency
COPY package.json .

RUN npm i

#copy the whole file
COPY . .

#start up command
CMD ["npm", "start"]