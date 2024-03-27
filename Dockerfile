FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install --save-dev @nestjs/cli

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "start"]
