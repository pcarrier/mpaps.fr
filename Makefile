.PHONY: deploy
deploy:
	yarn build
	rsync -avP --delete dist/ horse:mpaps/
