FROM node:4.2.1-slim

RUN apt-get update && apt-get install git --yes

# Allow npm to run postinstall script even though root
# See: https://stackoverflow.com/a/47748545
RUN groupadd -r app && useradd -r --create-home -g app app
USER app

WORKDIR /app

COPY package.json npm-shrinkwrap.json bower.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD node app.js
