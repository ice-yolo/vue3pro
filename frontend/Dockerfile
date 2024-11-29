# 使用 Node.js 作为基础镜像
FROM node:20-alpine as build

# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY . .

# 安装依赖并打包
RUN npm install && npm run build

# 使用 Nginx 提供静态文件服务
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]