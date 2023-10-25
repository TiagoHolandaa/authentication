FROM node:16-alpine

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

RUN npm run build

EXPOSE 3000

USER node

CMD ["yarn", "dev"]