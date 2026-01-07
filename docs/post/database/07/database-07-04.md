---
sidebar_position: 3
---

# 7.4 索引的创建原则、创建命令和使用效果

索引的创建原则：

+ 对更新频繁的属性应慎重建立索引。
+ 索引数量不宜过多，否则会增加储存空间和维护成本。
+ 对规模较小的表一般不必建立索引。
+ 对主键和唯一属性通常需要建立索引。
+ 对于经常出现在 `WHERE` 查询条件中，或经常用于 `ORDER BY` 和 `GROUP BY` 的属性，通常需要建立索引。

索引的创建命令：

+ 聚集索引（Clustering Index）

   + 记录文件的物理顺序与索引项顺序一致，一个表只能创建一个聚集索引。
   + 创建命令：`CREATE CLUSTER INDEX <name> ON <table>(<colnum>)`
+ 非聚集索引（Clustering Index）：

   + 创建命令：`CREATE INDEX <name> ON <table>(<colnum>)`

索引的使用效果：

+ 正面效果：显著提高查询性能，提高 `ORDER BY` 和 `GROUP BY` 等操作的执行效率。
+ 负面影响：增加存储空间的开销，降低数据更新操作（`INSERT`/`UPDATE`/`DELETE`）的性能，增加索引维护成本。
