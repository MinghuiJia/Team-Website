# 请确保文件换行符转换为LF
FROM nginx:latest
# 创建挂载目录
RUN mkdir -p /data /app

# 设置需要挂载的卷
VOLUME ["/data"]

COPY ./run.sh /app/run.sh
RUN chmod +x /app/run.sh

# 暴露端口
EXPOSE 80

# 设置容器启动时执行的命令
ENTRYPOINT ["/app/run.sh"]
