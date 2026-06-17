FROM php:8.4.1-fpm

# System dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# PHP extensions
RUN docker-php-ext-install \
    pdo_mysql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd \
    zip \
    opcache

# Xdebug (for code coverage)
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

# Composer — binary only, niente overhead dall'immagine ufficiale
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Non-root user — deve stare prima di USER
RUN groupadd -g 1000 www \
    && useradd -u 1000 -ms /bin/bash -g www www

WORKDIR /var/www

USER www

EXPOSE 9000
