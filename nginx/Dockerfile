
FROM nginxinc/nginx-unprivileged:1-alpine

LABEL maintainer="muteshi.com"

COPY ./default.conf.tpl /etc/nginx/default.conf.tpl
COPY ./sitemap.xml /etc/nginx/sitemap.xml
COPY ./run.sh /run.sh

ENV LISTEN_PORT_HTTP=80
ENV LISTEN_PORT_HTTPS=443

USER root

RUN touch /etc/nginx/conf.d/default.conf && \
    chown nginx:nginx /etc/nginx/conf.d/default.conf && \
    chmod +x /run.sh


# USER nginx

CMD ["/run.sh"]