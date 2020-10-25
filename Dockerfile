# Uses latest node 12 LTS on alpine
FROM node:erbium-alpine


# Adds Tini
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]


# Security and housekeeping
USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY --chown=node:node . .


# Does server stuff
ENV PORT=$PORT GTAG_ID=$GTAG_ID USER_DB=$USER_DB POSTMARK_TOKEN=$POSTMARK_TOKEN MUSIC_DB=$MUSIC_DB REDIS_HOST=$REDIS_HOST REDIS_PORT=$REDIS_PORT
RUN yarn build

CMD [ "yarn", "start" ]