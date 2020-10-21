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

EXPOSE 4000


# Does server stuff
RUN yarn build

CMD [ "yarn", "start" ]