FROM node:22.22.0 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable AS run
COPY nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx --from=build /app/dist/*/browser /usr/share/nginx/html
USER nginx
EXPOSE 80
ENTRYPOINT [ "nginx", "-c", "/etc/nginx/nginx.conf" ]
CMD [ "-g", "daemon off;" ]