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


# Passes build args
ARG PORT=$PORT 
ARG NODE_ENV=$NODE_ENV

ARG USER_DB=$USER_DB
ARG MUSIC_DB=$MUSIC_DB 

ARG REDIS_HOST=$REDIS_HOST 
ARG REDIS_PORT=$REDIS_PORT

ARG GTAG_ID=$GTAG_ID
ARG POSTMARK_TOKEN=$POSTMARK_TOKEN 


# Uses build args as env variables
EXPOSE $PORT

ENV PORT=$PORT 
ENV NODE_ENV=$NODE_ENV

ENV USER_DB=$USER_DB
ENV MUSIC_DB=$MUSIC_DB 

ENV REDIS_HOST=$REDIS_HOST 
ENV REDIS_PORT=$REDIS_PORT

ENV GTAG_ID=$GTAG_ID
ENV POSTMARK_TOKEN=$POSTMARK_TOKEN 

# Does server stuff
RUN yarn build
CMD [ "yarn", "start" ]