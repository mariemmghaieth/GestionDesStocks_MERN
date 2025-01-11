# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the remaining project files
COPY . .

# Expose the backend port (change it if your app runs on a different port)
EXPOSE 5000

# Run the app
CMD ["npm", "start"]
