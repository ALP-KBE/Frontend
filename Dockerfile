FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install @react-keycloak/web keycloak-js
COPY . .
CMD ["npm", "start"]