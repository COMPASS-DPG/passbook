# Use Node.js 18.6 image as the base image
FROM node:18.6

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which your Next.js app will run (for example, 3000)
EXPOSE 3000

# Add npx prisma generate command before starting the app
CMD ["sh", "-c", "npx prisma generate && npm start"]
