# Stage 1: Build the React Vite app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Set the default command to run your app
CMD ["npm", "run", "dev"]
