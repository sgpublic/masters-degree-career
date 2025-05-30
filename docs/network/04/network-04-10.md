# 4.10 ICMP 差错报告报文段种类（P146 4.4.1）

ICMP 差错报告报文分为 4 种：

1. **终点不可达**：当路由器或主机不能交付数据报时就向源点发送终点不可达报文。
2. **时间超过**：当路由器发送 IP 数据报前检查 TTL 为 0，则丢弃该数据报，并向源点发送时间超过报文。若终点（端系统）没有在预定的时间内收到一个数据报的全部分片时，则丢弃已收到的分片，并向源点发送时间超过报文。
3. **参数问题**：当路由器或目的主机收到的数据报首部中有的字段值不正确时，则丢弃该数据报，并向源点发送参数问题报文。
4. **改变路由**：又称**重定向**，当路由器发现了转发更合适的路由时，则向主机发送改变路由报文，使其得知下次应将数据报发送给另外一个路由器。