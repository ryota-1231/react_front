FROM node:16.13.2-alpine3.15

# 使用するnodeのバージョンの指定
ENV NODE_VERSION 16.13.2
# docker内に入った時の初期パスの指定
WORKDIR /front
COPY ./front /front
EXPOSE 8080
ENV CI=true