# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Change working directory to src
WORKDIR src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install only production dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the app for production
RUN npm run build

# Expose the port your app runs on
EXPOSE 5173

# Set the default command to run your app
CMD ["npm", "run", "dev"]
