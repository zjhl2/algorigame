FROM node:15.13.0-alpine3.10
COPY . .
RUN yarn install && yarn build

FROM nginx
COPY --from=0 dist /usr/share/nginx/html
