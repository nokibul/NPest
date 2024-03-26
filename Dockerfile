FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --save-dev @nestjs/cli

RUN npm install -g pnpm

RUN pnpm install

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
