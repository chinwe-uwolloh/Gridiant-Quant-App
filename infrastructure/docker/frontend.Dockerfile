FROM node:20-alpine
WORKDIR /workspace/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend ./
RUN npm run build
CMD ["npm", "run", "start"]
