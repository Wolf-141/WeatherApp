FROM node:22.22.0 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /tmp/dist
RUN set -eux; \
	# if dist contains a single subdirectory (e.g. /tmp/dist/WeatherApp), move its contents to nginx root
	if [ "$(ls -A /tmp/dist | wc -l)" -eq 1 ] && [ -d /tmp/dist/* ]; then \
		mv /tmp/dist/*/* /usr/share/nginx/html/; \
	else \
		mv /tmp/dist/* /usr/share/nginx/html/; \
	fi; \
	rm -rf /tmp/dist; \
	# if Angular produced a `browser` subfolder (prerendered/SSR output), move its contents to nginx root
	if [ -d /usr/share/nginx/html/browser ]; then \
		mv /usr/share/nginx/html/browser/* /usr/share/nginx/html/ || true; \
		rmdir /usr/share/nginx/html/browser || true; \
	fi
EXPOSE 80