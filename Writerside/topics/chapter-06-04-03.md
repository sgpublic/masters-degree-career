# 6.4.3 HTTP（P276 6.4.3）

HTTP 协议是现代互联网中广泛使用的协议。

HTTP 协议通常监听 80 端口；HTTPS 是在 HTTP 上增加了 TLS/SSL 加密层，通常监听 443 端口。

HTTP 协议截止本文编写时（2024 年）拥有 HTTP/1.0（[RFC-1945](https://datatracker.ietf.org/doc/html/rfc1945)）、HTTP/1.1（[RFC-7231](https://datatracker.ietf.org/doc/html/rfc7231)）、HTTP/2（[RFC-7540](https://datatracker.ietf.org/doc/html/rfc7540)）、HTTP/3（[RFC-9000](https://datatracker.ietf.org/doc/html/rfc9000)）共 4 个版本。

（P276 6.4.3 图 6-8）HTTP 会话分为 **4 个阶段**：

1. **建立 TCP 连接**
2. **客户端发送 HTTP 请求报文**
3. **服务端发送 HTTP 响应报文**
4. **释放 TCP 连接**

## 6.4.3.1 HTTP/1.1

HTTP/1.1 基于 TCP 协议。一个完整的 HTTP 报文通常包含以下几种元素：

1. HTTP 方法（[RFC-1945 8](https://datatracker.ietf.org/doc/html/rfc1945#section-8)）

   方法出现在 HTTP 请求报文中。常见请求方法如下：

    + GET：用于**获取**指定资源。
    + HEAD：作用与 GET 方法相同，但响应中**仅包含 HTTP 响应头**，不包含任何响应体。
    + POST：用于**提交数据**，通常用于创建新资源。
    + PUT：用于更新指定资源，若指定资源不存在则创建新的资源。

    + DELETE：用于删除指定资源。
    + CONNECT：用于与服务器建立一个隧道连接，通常用于 HTTPS 或 WebSocket。

   当对方请求使用的方法不被支持时，应返回状态码 405。

2. HTTP URL

   出现在 HTTP 请求报文中，表明所请求资源的唯一标识符。

3. HTTP 状态码（[RFC-1945 9](https://datatracker.ietf.org/doc/html/rfc1945#section-9)）

   状态码出现在 HTTP 响应报文中，通常表示为“状态码 状态描述”，例如“200 OK”，常见见状态码包含下列几组：

    + 2xx（成功）：

        + 200 OK：表明请求成功。
        + 204 No Content：表明请求已处理，但没有新的内容可响应。

    + 3xx（重定向）：

        + 301 Moved Permanently：表明请求的资源已被永久分配了一个新的 URL，浏览器通常会永久缓存此请求结果。
        + 302 Found：表明请求的资源被临时分配了一个新的 URL，由于历史原因，用户可能会对新的 URL 使用 GET 请求。
        + 304 Not Modified：通常用于响应附带了 If-Modified-Since 字段 GET 请求，详见后文。
        + 307 Temporary Redirect：表明请求的资源被临时分配了一个新的 URL，用户请求新的 URL 时不得更改请求方法。

    + 4xx（客户端错误）：

      通常用于表明客户端发送了错误的请求，应检查请求是否正确。

        + 400 Bad Request：表明 HTTP 请求报文语法错误，服务端无法处理。
        + 401 Unauthorized：表明该请求需要用户身份验证。
        + 403 Forbidden：表明服务器理解该请求，但拒绝响应，且此错误并非由身份验证导致。
        + 404 Not Found：表明服务器并未找到任何与请求的 URI 匹配的内容。
        + 405 Method Not Allowed：表明服务器已知客户端所使用的请求方法，但目标资源不支持此方法。
        + 408 Request Timeout：表明服务器等待客户端发送完整请求时超时。
        + 413 Payload Too Large：表明请求体过大，服务器拒绝处理请求。

    + 5xx（服务端错误）：

      通常用于表明服务器意识到自身已出现错误或无法执行请求。

        + 500 Internal Server Error：表明服务器遇到了内部错误，无法完成请求。
        + 501 Not Implemented：表明服务器并未实现所请求的功能。
        + 502 Bad Gateway：表明服务器在充当网管或代理，但无法从上游服务中收到有效的响应。
        + 503 Service Unavailable：表明服务器暂不可用。
        + 504 Gateway Timeout：表明服务器在充当网管或代理，但从上游服务中获取响应时超时。
        + 505 HTTP Version Not Supported：表明服务器拒绝处理请求所使用的 HTTP 版本。

4. HTTP 标头（[RFC-1945 10](https://datatracker.ietf.org/doc/html/rfc1945#section-10)）
   标头同时出现在请求报文和响应报文中，通常分别称为**请求头**和**响应头**。常见的标头如下：

    + Allow：通常出现在响应头中，用于表明请求的 URI 允许的请求方法，若响应状态码为 405 则必须包含此字段。例如：

      ```http
      Allow: GET, HEAD
      ```

    + Accept-Charset/Accept-Encoding/Accept-Language：通常出现在请求头中，用于表明所期望响应的字符编码、内容编码、自然语言。例如：

      ```http
      Accept-Charset: UTF-8
      Accept-Encoding: gzip
      Accept-Language: zh-Hans
      ```

    + Connection：HTTP/1.1 支持将多个 HTTP 请求放入同一个 TCP 连接中，此字段用于向服务器表明 HTTP 请求完成后的处理方式。例如请求后不要关闭连接：

      ```http
      Connection: Keep-Alive
      ```

    + Content-Language：用于表明 HTTP 报文主体所使用的自然语言。例如：

      ```http
      Content-Language: zh-Hans
      ```

    + Authorization：通常出现在请求头中，用于向服务器验证身份。例如使用 Basic 方式认证：

      ```http
      Authorization: Basic zsWxgaSGsSgaxG...
      ```

    + Content-Encoding：用于表明 HTTP 报文主体的编码类型。例如：

      ```http
      Content-Encoding: x-gzip
      ```

    + Content-Length：用于表明 HTTP 报文主体的长度，以字节为单位，表示为十进制数。例如：

      ```http
      Content-Length: 114514
      ```

    + Content-Type：用于表明 HTTP 报文主体的数据类型，与 MIME 所定义的相同。例如：

      ```http
      Content-Type: text/html
      ```

    + Host：通常出现在请求头中，HTTP/1.1 要求请求头中必须包含此字段，用于表明发起请求时所使用的主机名称。例如：

      ```http
      Host: www.w3.org
      ```

    + If-Modified-Since：通常出现在 GET 请求的请求头中，用于向服务器告知若指定的资源在指定的时间后有修改才返回内容，否则将返回 304。其中时间的格式遵循 RFC-822。例如：

      ```http
      If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT
      ```

    + Last-Modified：通常出现在响应头中，用于向客户端展示请求的资源上一次修改的时间。其中时间的格式遵循 RFC-822。例如：

      ```http
      Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT
      ```

    + Location：通常出现在状态码为 301 或 302 的响应头中，用于表明该资源新的 URL。例如：

      ```http
      Location: http://www.w3.org/hypertext/WWW/NewLocation.html
      ```

    + Referer：通常出现在请求头中，当一个用户在浏览器中点击链接时，浏览器会在发出的请求中添加 Referer 头，包含原始页面的地址。例如：

      ```http
      Referer: http://www.w3.org/hypertext/DataSources/Overview.html
      ```

    + Server：通常出现在响应头中，用于标识服务器的软件信息。例如：

      ```http
      Server: nginx/1.20.1
      ```

    + User-Agent：通常出现在请求头中，用于标识发起请求的用户代理的信息。例如当用户使用 Edge 浏览器发起请求，则 User-Agent 通常为：

      ```http
      Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0
      ```

    + WWW-Authenticate：通常出现在状态码为 401 的响应头中，用于向客户端表明身份验证所需要的方法。例如：

      ```http
       WWW-Authenticate: Basic realm="WallyWorld"
      ```

5. HTTP 主体

   可出现在 HTTP 请求报文和 HTTP 响应报文中，通常分别称为**请求体**和**响应体**。

   RFC 文档中没有限定 GET 请求是否可以包含请求体，但实践中通常不携带请求体。

一个 HTTP 请求报文示例如下：

```http
GET /hello.html HTTP/1.1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0
Host: www.w3.org
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
```

此报文表示使用 URL：http://www.w3.org/hello.html，发起 GET 请求。

响应报文示例如下：

```http
HTTP/1.1 200 OK
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
Content-Length: 88
Content-Type: text/html
Connection: Keep-Alive

<html>
<body>
<h1>Hello, World!</h1>
</body>
</html>
```

## 6.4.3.2 HTTP/1.1 与其他版本的主要区别

HTTP/1.0 vs HTTP/1.1：

+ **持久连接**：HTTP/1.1 默认支持持久连接，即**允许将多个请求在同一个 TCP 连接中进行**。**HTTP/1.0 每个请求都需要建立新的连接**。
+ **Host 请求头**：HTTP/1.1 要求请求头中必须包含 Host 字段，以支持虚拟主机。

HTTP/1.1 vs HTTP/2：

+ **二进制格式**：HTTP/2 定义了一个新的二进制帧，要求所有请求和响应都分解为二进制帧，提高了传输效率。
+ **多路复用**：HTTP/2 允许在同一连接上并发的执行多个请求，而不会相互阻塞。
+ **头部压缩**：HTTP/2 使用 HPACK 算法压缩头部。即创建头部字段的引用，以在后续请求中直接使用而非重复传输整个字段，HPACK 拥有一个静态表，预定义了常见头部字段，此外还拥有一个动态表，可以在传输过程中新增定义头部字段。
+ **服务器推送**：HTTP/2 支持服务器向客户端主动推送二进制帧，例如当客户端请求一个 HTML 页面时，服务器可以同时向客户端推送 CSS 和 JavaScript 文件，而非等待客户端解析 HTML 后自行请求，这样减少了请求数量。

HTTP/2 vs HTTP/3：

+ **使用 QUIC**：HTTP/3 换用了基于 UDP 协议的 QUIC 协议，减少了连接建立延迟、提高了多方面的性能。
+ **强制加密**：HTTP/2 支持使用加密，但并非强制，HTTP/3 强制使用 TLS 1.3 加密。
