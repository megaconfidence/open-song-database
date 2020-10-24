# Uses latest node 12 LTS on alpine
FROM node:erbium-buster
# FROM node:erbium-alpine


# Adds Tini
# RUN apk add --no-cache tini
# ENTRYPOINT ["/sbin/tini", "--"]


# Security and housekeeping
USER root

RUN mkdir /home/root/code

WORKDIR /home/root/code

COPY --chown=root:root package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY --chown=root:root . .

EXPOSE 4000


# Does server stuff
RUN yarn build

CMD [ "yarn", "start" ]