FROM node:16-alpine
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient Docker caching)
COPY package.json /app/

# Install dependencies
RUN npm install

# Copy all source files
COPY . /app/

EXPOSE 5000
CMD ["node", "app.js"]
