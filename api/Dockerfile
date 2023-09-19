#cache build dependencies
FROM node:16-slim as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
#final build image
FROM node:16-slim
COPY --from=build /app .
ENV NODE_ENV production
ENV PORT 4000
EXPOSE 4000
CMD [ "node", "dist/index.js" ]
