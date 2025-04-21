# Use official Node image (Alpine = smaller size)
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build


# ------------------------------
# Production stage
# ------------------------------
FROM node:18-alpine AS production

WORKDIR /app

# Copy only the build output and dependencies
COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

# Expose the port (default for NestJS is 3000)
EXPOSE 3000

# Run the app
CMD ["node", "dist/main"]
