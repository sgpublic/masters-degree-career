# 6.4.2 MIME（P300 6.5.6）

当 SMTP 需要传送非 ASCII 码内容时，MIME 用于定义其编码规则。

MIME 扩展了 SMTP，而非取代了 SMTP。

HTTP 协议中包含“**类 MIME**”。

MIME 的首部包括：

+ MIME-Version：版本。

+ Contetn-Description：用人类可读的字符串标识内容主题的类型。

+ Content-Id：内容唯一标识。

+ Content-Transfer-Encoding：传输内容时所使用的编码。常见编码方式有：

    + **8bit**：当内容为字符串，且包含非 ASCII 字符时使用。

    + **Base64**：用于将任意二进制数据编码为 ASCII 码，方式如下：

        1. 将内容的二进制划分为**每 24 位一个单元**，最后一个单元不足 24 位时填充 0。

        2. 将每个单元划分为**每 6 位一组**，一共 4 组。

        3. 将上述分组每一组按照如下表格进行编码：

           | 码值 | 字符 | 码值 | 字符 | 码值 | 字符 | 码值 | 字符 |
                      |:---|:---|:---|:---|:---|:---|:---|:---|
           | 0  | A  | 16 | Q  | 32 | g  | 48 | w  |
           | 1  | B  | 17 | R  | 33 | h  | 49 | x  |
           | 2  | C  | 18 | S  | 34 | i  | 50 | y  |
           | 3  | D  | 19 | T  | 35 | j  | 51 | z  |
           | 4  | E  | 20 | U  | 36 | k  | 52 | 0  |
           | 5  | F  | 21 | V  | 37 | l  | 53 | 1  |
           | 6  | G  | 22 | W  | 38 | m  | 54 | 2  |
           | 7  | H  | 23 | X  | 39 | n  | 55 | 3  |
           | 8  | I  | 24 | Y  | 40 | o  | 56 | 4  |
           | 9  | J  | 25 | Z  | 41 | p  | 57 | 5  |
           | 10 | K  | 26 | a  | 42 | q  | 58 | 6  |
           | 11 | L  | 27 | b  | 43 | r  | 59 | 7  |
           | 12 | M  | 28 | c  | 44 | s  | 60 | 8  |
           | 13 | N  | 29 | d  | 45 | t  | 61 | 9  |
           | 14 | O  | 30 | e  | 46 | u  | 62 | +  |
           | 15 | P  | 31 | f  | 47 | v  | 63 | /  |
        4. 由于数据长度的单位是字节，因此最后一个单元的原始数据若不满 24 位，则只能是 8 位或 16 位。

      当最后一个单元原始数据为 16 位时，则需要**填充 8 位 0**，此时 Base64 编码结果**用 1 个等号（即“=”）代替**。

      当最后一个单元原始数据为 8 位时，则需要**填充 16 位 0**，此时 Base64 编码结果**用 2 个等号（即“==”）代替**。

    + 7bit：当内容中仅包含 ASCII 码字符时使用，随着 UTF-8 编码的普及，现代邮件中更常用 8bit。

    + quoted-printable：当内容中仅包含少量非 ASCII 字符（例如汉字）时使用，现代邮件中已很少使用。

+ Content-Type：一个固定格式的字符串，标明内容的数据类型和子类型。格式为“内容类型/子类型”，具体描述如下表：

  | 内容类型        | 子类型举例                                             | 说明        |
      |-------------|---------------------------------------------------|-----------|
  | text        | plain（普通文本）、html、xml、css                          | 文本        |
  | image       | gif、jpeg                                          | 图像        |
  | audio       | mp3                                               | 音频        |
  | video       | mp4、quicktime（mov 格式）、x-matrosk（mkv 格式）           | 视频        |
  | application | octet-stream（未指定类型的二进制数据）、pdf、javascript、zip      | 应用程序产生的数据 |
  | multipart   | form-data（多用于 HTTP 表单提交）、mixed（多用于邮件中包含多重不同类型的数据） | 多种类型的组合   |

  若数据类型使用 text，通常需要额外制定一个参数 charset，用于表面文本编码，若不指定，对方接收时会按照对方的默认编码解析，可能会造成无法正确解码。

  若数据类型使用 multipart，则需要额外指定一个参数 boundary，用于分割不同的数据，boundary 可随意指定，但需保证不与数据内容重复。

例如：

```
MIME-Version: 1.0
From: sender@example.com
To: recipient@example.com
Subject: Example Multipart Mixed Email
Content-Type: multipart/mixed; boundary="boundary123"

--boundary123
Content-Type: text/plain; charset="ASCII"
Content-Transfer-Encoding: 7bit

This is a plain text part of the email.

--boundary123
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: 8bit

<html>
<body>
    <h1>这是邮件中的一个 HTML 部分。</h1>
    <p>哈喽！这是一个小小的邮件！</p>
</body>
</html>

--boundary123
Content-Type: text/plain; charset="UTF-8"
Content-Transfer-Encoding: 8bit

这是邮件的纯文本部分。

--boundary123
Content-Type: application/pdf
Content-Disposition: attachment; filename="example.pdf"
Content-Transfer-Encoding: base64

JVBERi0xLjQKJeLjz9MKNCAwIG9i... (base64 编码的 PDF 内容)

--boundary123--
```
