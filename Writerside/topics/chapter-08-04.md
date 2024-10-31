# 8.4 无线局域网的 DCF 和 PCF

## 8.4.1 分布协调功能 DCF（P414 9.1.3）

**分布协调功能 DCF（Distributed Coordination Function）** 不采用任何中心控制，而是在每个节点使用 CSMA 机制的分布式接入算法，即每个节点争用信道来获取发送权。

802.11 标准规定，所有实现**必须实现 DFC**。

## 8.4.2 点协调功能 PCF（P414 9.1.3）

**点协调功能 PCF（Point Coordination Function）** 是由接入点 AP 统一管理发送权，使用类似探询的方法把发送权轮流交给各个站，从而避免了碰撞发生。