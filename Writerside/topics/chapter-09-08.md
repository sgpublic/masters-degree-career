# 9.8 DiffServ 的体系结构

区分服务 DiffServ 结构域 MPLS 有许多相似之处，例如：

+ **DS 域**：由支持 DiffServ 功能的路由器组成的网络称为 DS 域。
+ **边界节点（Boundary Node）**：通常等同于**边界路由器（Boundary Router）**，即 DS 域边缘的路由器，IP 数据报通过标签边缘路由器进入和离开 DS 域。
+ **内部路由器（Interior Router）**：DS 域中不在边缘的路由器。