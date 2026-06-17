DC  = docker compose
APP = $(DC) exec app

# ─── Lifecycle ────────────────────────────────────────────────────────────────
.PHONY: up down build restart logs shell

up:
	$(DC) up -d

down:
	$(DC) down

build:
	$(DC) up -d --build

restart:
	$(DC) restart

logs:
	$(DC) logs -f

shell:
	$(APP) bash

# ─── Composer ─────────────────────────────────────────────────────────────────
.PHONY: install composer

install:
	$(APP) composer install

composer:
	$(APP) composer $(cmd)

# ─── Laravel ──────────────────────────────────────────────────────────────────
.PHONY: artisan migrate migrate-fresh seed tinker

artisan:
	$(APP) php artisan $(cmd)

migrate:
	$(APP) php artisan migrate

migrate-fresh:
	$(APP) php artisan migrate:fresh --seed

seed:
	$(APP) php artisan db:seed

tinker:
	$(APP) php artisan tinker

# ─── Test ─────────────────────────────────────────────────────────────────────
.PHONY: test test-coverage

test:
	$(APP) php artisan test

test-coverage:
	$(APP) php artisan test --coverage