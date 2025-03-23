# Use Node.js Alpine image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app/
RUN npm install

# Copy the entire src folder to the container
COPY . /app

# Expose the port
EXPOSE 5000

# Start the application with the correct path to app.js
CMD ["node", "/app/src/app.js"]
