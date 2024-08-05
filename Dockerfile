# This Dockerfile uses `serve` npm package to serve the static files with node process.
# Base image
FROM node:20 as build

# Install pnpm
RUN npm install -g pnpm@9.1.1

# Set PNPM_HOME and add it to PATH
ENV PNPM_HOME=/root/.pnpm
ENV PATH=$PNPM_HOME:$PATH

# Set working directory
WORKDIR /app/e9checker

# Install dependencies
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install

# Copy source code
COPY . .

# Expose the port the app runs on
EXPOSE 3002

# Start the application
CMD ["pnpm", "dev"]
