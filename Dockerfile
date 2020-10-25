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
RUN echo $PORT

ENV PORT=$PORT 
ENV GTAG_ID=$GTAG_ID
ENV USER_DB=$USER_DB
ENV POSTMARK_TOKEN=$POSTMARK_TOKEN 
ENV MUSIC_DB=$MUSIC_DB 
ENV REDIS_HOST=$REDIS_HOST 
ENV REDIS_PORT=$REDIS_PORT

RUN yarn build

CMD [ "yarn", "start" ]