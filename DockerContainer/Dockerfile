FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y apache2 && \
    apt-get clean

COPY ./ /var/www/html/

EXPOSE 80
CMD ["apache2ctl", "-D", "FOREGROUND"]

