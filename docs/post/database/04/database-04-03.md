---
sidebar_position: 2
---

# 4.3 游标

当一条 SQL 语句会返回多条记录，但应用程序一次只能处理一条语句时，可以使用游标逐条读取记录。相当于查询结果的缓冲区。

结构如下：

```sql
-- 定义一个游标
EXEC SQL DECLARE <name> CURSOR FOR 
    <sql command>;

-- 打开游标
EXEC SQL OPEN <name>;

-- 无限循环读数据
WHILE (1) 
BEGIN
    -- 将一条记录读入变量 var1、var2...
    EXEC SQL FETCH <name> INTO :var1, :var2, ...;

    -- 若没更多记录了就退出循环
    IF SQLCODE != 0 THEN
        BREAK;
    END IF;

    -- 处理数据
    <sql command>;
END;

-- 关闭游标
EXEC SQL CLOSE <name>;
```
