FROM node:10


# Create App directory

WORKDIR /usr/src/App

# Install app dependancies

# A wildcard is used to ensure both package.json AND package--lock.json are copied

#where available (npm@5+)

COPY package*json ./

RUN npm install --production

COPY . .

ENV NODE_ENV=production

ENV PORT=3001

EXPOSE 3001

CMD ["npm", "run", "start"]