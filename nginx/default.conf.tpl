proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:30m inactive=7d use_temp_path=off;
upstream blog_app_upstream {
  server blog_app:3000;

#   We could add additional servers here for load-balancing
}
server {
    listen 80;
    server_name blog.muteshi.com;
    server_tokens off;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://blog.muteshi.com$request_uri;
    }
}




server {
    listen 443 ssl;
    server_name blog.muteshi.com;
    server_tokens off;

    gzip on;
    gzip_proxied any;
    gzip_comp_level 4;
    gzip_types text/css application/javascript image/svg+xml;

    # proxy_http_version 1.1;
    # proxy_set_header Upgrade \$http_upgrade;
    # # proxy_set_header Connection \'upgrade';
    # proxy_set_header Host \$host;
    # proxy_cache_bypass \$http_upgrade;

    location /_next/static {
        proxy_cache STATIC;
        proxy_pass http://blog_app_upstream;

    }

    location /static {
    proxy_cache STATIC;
    proxy_ignore_headers Cache-Control;
    proxy_cache_valid 60m;
    proxy_pass http://blog_app_upstream;

}
    ssl_certificate /etc/nginx/ssl/live/blog.muteshi.com/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/live/blog.muteshi.com/privkey.pem;
    
    # include /etc/letsencrypt/options-ssl-nginx.conf;
    # ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    client_max_body_size 20M;

    location / {
        proxy_pass http://blog_app_upstream;
    }

    location /sitemap.xml {
        alias /etc/nginx/sitemap.xml;
    }

   
}