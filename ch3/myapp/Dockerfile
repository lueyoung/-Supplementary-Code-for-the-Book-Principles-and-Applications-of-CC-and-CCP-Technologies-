# 使用具体版本的官方Node.js基础镜像
FROM node:14.15.1-alpine3.10

# 创建工作目录
WORKDIR /app

# 先复制依赖文件并安装依赖
COPY package*.json ./
RUN npm install --production

# 复制应用文件
COPY . .

# 指定容器启动时执行的命令
CMD [ "npm", "start" ]
