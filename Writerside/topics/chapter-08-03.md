# 8.3 WLan、WPan、WMan、WLL 的概念

## 8.3.1 无线局域网 WLAN

**无线局域网 WLAN（Wireless Local Area Network）** 可分为两大类，即有基础设施和无基础设施。

由 IEEE 802.11 所定义的、有基础设施的无线局域网，通常又称为 Wi-Fi。

无线局域网的中心称为**接入点 AP（Access Point）**。

每个 AP 都应分配一个不超过 32 字节的**服务集标识符 SSID（Service Set IDentifer）**。（就是 Wi-Fi 名字）

同有线网卡一样，每个 AP 在出厂时就分配了一个唯一的 MAC 地址，又称为**基本服务集标识符 BSSID（Basic Service Set IDentifer）**。

Wi-Fi 的 MAC 层使用 CSMA/CA 协议。