#!/bin/sh
exec nginx -c /data/nginx/nginx.conf -g "daemon off;"
