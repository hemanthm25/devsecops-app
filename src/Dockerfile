FROM node:16-alpine
WORKDIR /app
COPY src/package.json /app/
RUN npm install
COPY src /app
EXPOSE 5000
CMD ["node", "app.js"]
