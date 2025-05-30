---
sidebar_position: 1
---

# 6.1 C/S 结构的优点

C/S 结构即**客户端/服务端结构**。

**服务端常驻**以监听来自**客户端的请求**。

服务端需提供一个可直接访问的 IP 地址（又称**公网 IP 地址**）供客户端访问。由于现代互联网中大量使用 NAT，导致客户端没有公网 IP 地址，因此客户端之间无法直接通信，且仅允许客户端主动与服务端建立连接，服务端无法与客户端主动建立连接。

服务端启动监听时需**同时指定监听的地址和端口**，且**监听后无法改变**。服务端使用的端口号参考 [5.1 传输层寻址与端口](/network/05/network-05-01.md)。

客户端无需监听端口，当向服务端发起请求时，客户端会从动态端口（具体参考 [5.1 传输层寻址与端口](/network/05/network-05-01.md)）中**随机选择**一个当前未使用的端口与服务端建立连接。

服务端监听时可使用以下地址：

+ 0.0.0.0（用于监听所有地址）
+ 一个具体的地址（例如 192.168.6.1）
+ 本地环回地址（例如 127.0.0.1）