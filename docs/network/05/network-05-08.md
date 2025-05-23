# 5.8 TCP 传送连接的管理

TCP 协议通过**半连接队列**和**全连接队列**管理连接：

+ **半连接队列**

  服务端在收到连接建立请求（即第一次握手）后，会进入 SYN-RCVD 状态，此时连接还未完全建立，服务端会把这种连接状态下的请求放入半连接队列中。

+ **全连接队列**

  服务端在收到客户端对连接建立响应的确认（即第三次握手）后，会进入 ESTABLISHED 状态，此时连接已完全建立，服务端会把这种状态下的连接放入全连接队列中。

两个队列满了都会导致服务端无法处理新的连接请求。