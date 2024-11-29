# 使用 Node.js 作为基础镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY . .

# 安装依赖
RUN npm install

# 暴露端口
EXPOSE 3000

# 启动后端服务
CMD ["node", "app.js"]