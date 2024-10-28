# 6.8 URL 的格式（RFC-3986）

**统一资源定位符 URL（Uniform Resource Locator）** 属于**统一资源标识符 URI（Uniform Resource Identifier）**的一种，下文以 URI 为目标描述，URL 格式完全符合 URI。

（[RFC-3986 3](https://datatracker.ietf.org/doc/html/rfc3986#section-3)）URI 格式示例如下：

```
         foo://example.com:8042/over/there?name=ferret#nose
         \_/   \______________/\_________/ \_________/ \__/
          |           |            |            |        |
       scheme     authority       path        query   fragment
          |   _____________________|__
         / \ /                        \
         urn:example:animal:ferret:nose
```

其中：

+ **协议（scheme）**：每个 URI 都应以协议开头。
+ **权威（authority）**：用于标明该 URI 所指资源的服务器地址（或注册名称）和端口，端口是可选的，当端口缺省时则使用协议（即 scheme）所规定默认端口。
+ **路径（path）**：资源数据应以分层形式组织，路径字段即标明该 URI 所指资源的位置。
+ **查询（query）**：可选。用于传递额外的参数给服务器，参数应为键值对形式，多个参数之间使用 `&` 分隔。
+ **片段（fragment）**：可选。通常用于指向文档中的特定部分。