FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY .htpasswd /etc/nginx/.htpasswd
COPY .htpasswd-toyota /etc/nginx/.htpasswd-toyota
COPY . /usr/share/nginx/html
RUN rm -f /usr/share/nginx/html/nginx.conf /usr/share/nginx/html/Dockerfile /usr/share/nginx/html/.htpasswd /usr/share/nginx/html/.htpasswd-toyota
EXPOSE 8080
