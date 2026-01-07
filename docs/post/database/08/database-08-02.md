# 8.2 ACID特性

事务的 ACID 特性指**原子性（Atomicity）**、**一致性（Consistency）**、**隔离性（Isolation）**、**持久性（Durability）**。

+ **原子性（Atomicity）**：事务中的操作要么都做，要么都不做。
+ **一致性（Consistency）**：事务的执行结果必须使数据库从一个一致状态变为了一个一致状态。
+ **隔离性（Isolation）**：并发执行的各事务不能互相干扰。
+ **持久性（Durability）**：事务一旦提交，他对数据库的更新不再受后续操作或故障影响。
