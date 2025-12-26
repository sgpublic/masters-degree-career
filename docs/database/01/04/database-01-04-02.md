# 1.4.2 Oracle二进制安装

安装关键步骤如下：

1. 为系统安装关键依赖，例如 glibc、hostname 等。
2. 下载安装包并解压，设置 `ORACLE_BASE` 等环境变量用于配置设置。
3. 创建 `oracle` 用户用于编译和启动数据库。
4. 使用 `runInstaller` 脚本完成初步安装。
5. 运行 `orainstRoot.sh`、`root.sh` 脚本完成安装。
6. 使用 `runInstaller` 脚本添加参数 `-executeConfigTools` 完成数据库初始化，例如创建全局数据库等。
