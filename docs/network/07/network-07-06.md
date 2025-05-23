# 7.6 数字签名

数字签名可用于对报文进行鉴别，以应对中间人攻击。

数字签名拥有三个特点：

+ **可证实性**：由于签名只能由私钥生成，由对应的公钥验证，而私钥仅由发送方持有，因此接收方可以确信报文是由发送方签名发出的。
+ （P341 7.3.1）**不可抵赖性**：又称**不可否认**，即发送者事后不能抵赖对报文段签名。接收方只需要将签名和证书出示给任何进行公证的第三方，第三方很容易就能证实，此签名的报文确实是由发送方发出给接收方的。
+ **不可伪造性**：签名是对整个报文进行的，对报文的任何修改都会导致签名改变，因此接收方收到报文后可对签名进行校验，若签名校验不通过则代表报文一定被篡改过。

（P341 7.3.1）教材中对于签名流程是如下描述的：

+ 生成数字签名的方法，是对报文进行解密运算，即将报文的明文当做密文直接进行解密运算，得到一串“不可读的密文”。
+ 校验数字签名的方法，是对数字签名进行加密运算，即将数字签名当做明文直接进行加密运算，若还原出明文则校验通过。