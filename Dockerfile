FROM node:16-slim
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn build
ENV NODE_ENV production
ENV PORT 3210
EXPOSE 3210
CMD [ "node", "./dist/index.js" ]
