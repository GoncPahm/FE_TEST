# Stage 1: Build
FROM node:18.16.0 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Cấu hình cổng mà Nginx sẽ lắng nghe
EXPOSE 80

# Sao chép tệp cấu hình Nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Sao chép các tệp tĩnh từ builder vào thư mục phục vụ của Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Khởi chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
