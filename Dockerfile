FROM node:lts

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y sshpass

ENV SSH_PASSWORD=BXHmdOe72aMYOthq