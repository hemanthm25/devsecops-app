FROM node:16-alpine
WORKDIR /app
COPY public/package.json /app/
RUN npm install
COPY public /app
EXPOSE 3000
CMD ["npm", "start"]
