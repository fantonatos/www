FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80

# To build and run:
# docker build -t www .
# docker run -p 80:80 www
