# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN npm install

# Expose port 3000 for frontend
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
