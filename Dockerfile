FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

# Command to migrate the database and start the server
CMD ["npm", "run", "start:migrate"]