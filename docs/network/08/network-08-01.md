---
sidebar_position: 1
---

# 8.1 RTP、RTCP、QoS 等的概念

RTP、RTCP 都是**应用层**协议。

## 8.1.1 实时传输协议 RTP

（P384 8.3.3）**实时传输协议 RTP（Real-time Transport Protocol）** 为实时应用提供端到端的运输，但不提供任何服务质量的保证。

RTP 协议基于 UDP 协议运行，即 RTP 分组会封装到 UDP 数据报中发送。

## 8.1.2 实时传输控制协议 RTCP

**实时传输控制协议 RTCP（Real-time Transport Control Protocol）** 通常和 RTP 协议协同工作，（P386 8.3.4）主要功能有：

+ 服务质量的监控与反馈
+ 媒体间的同步
+ 多播组中的成员标志

RTCP 同样基于 UDP 协议运行，且由于 RTCP 分组很短，可将多个 RTCP 分组封装在同一个 UDP 数据报中发送。

## 8.1.3 服务质量 QoS

**服务质量 QoS（Quality of Service）** 是服务性能的总效果，此效果决定了一个用户对服务的满意程度。