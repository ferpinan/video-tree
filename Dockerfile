FROM nginx:1.21.3-alpine

RUN mkdir /home/videos && touch /home/videos/testfile.html
COPY ./src-docker/nginx.conf /etc/nginx/nginx.conf
COPY ./src-docker/default.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html