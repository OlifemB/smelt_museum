FROM node:alpine
WORKDIR /
# RUN mkdir -p /www
# RUN mkdir -p /archive
# RUN mkdir -p /temp

COPY ./ ./
RUN npm install --only=prod --force
EXPOSE 3000
CMD [ "npm", "run", "start" ]