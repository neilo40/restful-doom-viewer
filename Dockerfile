FROM nginx:stable-alpine
ADD dist /usr/share/nginx/html
ADD default.conf /etc/nginx/conf.d/
