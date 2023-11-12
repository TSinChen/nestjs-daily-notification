# 使用 Node.js 官方映像作為基本映像
FROM node:18

EXPOSE 8080

# 設定工作目錄
WORKDIR /usr/src/app

# 複製 package.json 與 package-lock.json 到工作目錄
COPY package*.json ./

# 安裝應用程式的相依套件
RUN npm install

# 複製整個應用程式代碼到工作目錄
COPY . .

# 執行應用程式建構（假設使用 tsc 編譯 TypeScript）
RUN npm run build

# 複製編譯後的應用程式到容器中
COPY dist /usr/src/app/dist

# 定義執行應用程式的命令
CMD ["node", "dist/main"]