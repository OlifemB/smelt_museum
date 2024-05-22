FROM nginx:1.17.8-alpine
COPY service.conf /etc/nginx/service.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /etc/nginx/ssl
RUN mkdir -p /etc/nginx/static/file

ADD script/entrypoint.sh /entrypoint.sh
ADD script/le.sh /le.sh

RUN \
 rm /etc/nginx/conf.d/default.conf && \
 chmod +x /entrypoint.sh && \
 chmod +x /le.sh && \
 apk add  --update certbot tzdata openssl && \
 rm -rf /var/cache/apk/*

CMD ["/entrypoint.sh"]

# WORKDIR /etc/nginx
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]