FROM node:16.17

ADD node_modules /personalSite/node_modules
ADD /src /personalSite/src
ADD /package-lock.json /personalSite
ADD /package.json /personalSite
ADD /tsconfig.json /personalSite
ADD /angular.json /personalSite
ADD /tsconfig.app.json /personalSite

WORKDIR /personalSite

RUN npm ci

EXPOSE 4200

CMD ["npm", "start"]