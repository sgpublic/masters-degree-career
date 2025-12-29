# 9.2 P2P 技术的特点（P322 6.9.2）

**对等网络 P2P（Peer-to-Peer）** 是一种网络技术和网络拓扑结构，通常用于文件共享等。

P2P 网络中，文件的分发不需要集中式服务器，而是依靠网络中普通用户来进行传输，换句话说，P2P 网络中每个用户既是服务器又是普通用户。

## 9.2.1 BitTorrent

BitTorrent 是一种常见的基于 P2P 网络的协议，常见 BitTorrent 软件有 qBittorrent、BitComet 等。

BitTorrent 主要特点如下：

+ **Peer**

   Peer 指网络中的一个节点或用户，参与文件的上传和下载。

   Peer 中包含 **Seeder（做种者）**，即已经下载完整文件的用户，将继续为其他用户提供下载。
+ **Chunk**

   BitTorrent 会将文件分为若干个 Chunk，方便 Peer 下载、分享和管理。

+ **Torrent**

   BitTorrent 通过种子文件（即后缀名为 `.torrent` 的文件）分发被分享文件的信息，包括：

   + **文件信息**：包括文件名、文件大小和每个 Chunk 的信息。
   + **Chunk 的哈希值**：用于校验文件完整性。
   + **Tracker 地址**：指向一个或多个 Tracker 服务器的地址。用于帮助 Peer 找到其他下载此文件的 Peer。
   + **其他元数据**：例如创建者信息等。

   种子文件不包括实际数据。

+ **Tracker**

   Tracker 是一个独立的基础服务器，用于协调 Peer 之间的连接。

   当一个 Peer 加入 Torrent 的时候，必须向 Tracker 服务器登记，这样每个 Peer 就能通过 Tracker 服务器知晓有其他哪些 Peer 也在下载此 Torrent。

   Tracker 不参与实际数据传输。

不难想到，当两个 Peer 通过 NAT 连接网络时，它们实际上并不能互相连接，这也是 IPv4 网络中 BitTorrent 性能不佳的可能原因之一。实践中并没有使用 NAT 穿越技术解决通过 NAT 连接网络的 Peer 之间的连接问题，因此实际情况 BitTorrent 还是需要依赖公网 IP。