FROM node:alpine
WORKDIR C:\Users\NISHA\Desktop\dockerpro

COPY package*json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD node server.js