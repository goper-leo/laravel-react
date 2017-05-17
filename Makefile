CHDIR_SHELL := $(SHELL)
define chdir
	 $(eval _D=$(firstword $(1) $(@D)))
	 $(info $(MAKE): cd $(_D)) $(eval SHELL = cd $(_D); $(CHDIR_SHELL))
endef

setup:
	rm -rf ./storage/logs/laravel.log
	touch ./storage/logs/laravel.log
	sudo chmod -R 777 ./storage/
	sudo chmod -R 777 ./bootstrap/cache/
	composer install
	npm install
	php artisan migrate:refresh --seed
	npm run dev
	npm run watch
