# 4.2.2 数据查询（Query）

SELECT 语句基本结构：

```sql
SELECT [DISTINCT] column_list
FROM table_name
[WHERE condition]
[GROUP BY column_list]
[HAVING condition]
[ORDER BY column_list [ASC|DESC]];
```

其中：

+ `DISTINCT` 表示去重。
+ `ASC`/`DESC` 表示升序/降序。

## 4.2.2.1 简单查询

1. 选择列

    ```sql
    -- 选择指定列
    SELECT column1, column2 FROM table_name;
    
    -- 选择所有列
    SELECT * FROM table_name;
    
    -- 使用表达式和别名
    SELECT column1, function(column2) AS alias_name FROM table_name;
    ```
2. 条件查询（WHERE）

    ```sql
    -- 比较运算符
    WHERE column = value                    -- 等于
    WHERE column > value                    -- 大于
    WHERE column < value                    -- 小于
    WHERE column >= value                   -- 大于等于
    WHERE column <= value                   -- 小于等于
    WHERE column != value                   -- 不等于
    
    -- 逻辑运算符
    WHERE condition1 AND condition2         -- 与
    WHERE condition1 OR condition2          -- 或
    WHERE NOT condition                     -- 非
    
    -- 范围查询
    WHERE column BETWEEN value1 AND value2  -- 在范围内
    WHERE column IN (value1, value2, ...)   -- 在列表中
    WHERE column NOT IN (value1, value2, ...) -- 不在列表中
    
    -- 模糊匹配
    WHERE column LIKE 'pattern'             -- 匹配模式
    WHERE column NOT LIKE 'pattern'         -- 不匹配模式
    /*
    通配符：
    % ：匹配0个或多个字符
    _ ：匹配单个字符
    */
    
    -- 空值判断
    WHERE column IS NULL                    -- 是空值
    WHERE column IS NOT NULL                -- 不是空值
    ```

## 4.2.2.2 聚集函数

```sql
COUNT([DISTINCT] column)     -- 计数
SUM([DISTINCT] column)       -- 求和（数值型）
AVG([DISTINCT] column)       -- 平均值（数值型）
MAX(column)                  -- 最大值
MIN(column)                  -- 最小值
```

## 4.2.2.3 分组查询

```sql
-- 基本分组
SELECT column, 聚集函数(column)
FROM table_name
GROUP BY column;

-- 分组后筛选
SELECT column, 聚集函数(column)
FROM table_name
GROUP BY column
HAVING condition;

/*
WHERE 与 HAVING 的区别：
WHERE：在分组前筛选行，不能使用聚集函数
HAVING：在分组后筛选组，可以使用聚集函数
*/
```

+ 虽然语法上不强制，但是 `GROUP BY` 需与聚集函数一起使用才有意义。（即可以认为 `GROUP BY` 必须和聚集函数一起使用）
+ `HAVING` 语句用于对 `GROUP BY` 的计算结果进行筛选。

## 4.2.2.4 排序查询

```sql
-- 单列排序
SELECT column1, column2
FROM table_name
ORDER BY column1 [ASC|DESC];

-- 多列排序
SELECT column1, column2
FROM table_name
ORDER BY column1 ASC, column2 DESC;

-- 使用别名排序
SELECT column1 AS alias1, column2
FROM table_name
ORDER BY alias1;
```

## 4.2.2.5 连接查询

1. 等值连接

    ```sql
    SELECT column_list
    FROM table1, table2
    WHERE table1.column = table2.column;
    ```
2. 自然连接

    ```sql
    SELECT column_list
    FROM table1
    NATURAL JOIN table2;
    ```

## 4.2.2.6 EXISTS 查询

EXISTS 检查子查询是否有结果，有则TRUE，无则FALSE，常用于相关子查询中检查存在性。

```sql
SELECT column_list
FROM table_name
WHERE EXISTS (SELECT * FROM other_table WHERE condition);
WHERE NOT EXISTS (SELECT * FROM other_table WHERE condition);
```

## 4.2.2.7 常用函数

1. 字符串函数

    ```sql
    CONCAT(str1, str2)        -- 连接字符串
    SUBSTRING(str, start, len) -- 截取子串
    LENGTH(str)               -- 字符串长度
    UPPER(str)                -- 转大写
    LOWER(str)                -- 转小写
    TRIM(str)                 -- 去除空格
    ```
2. 数值函数

    ```sql
    ABS(num)                  -- 绝对值
    ROUND(num, decimals)      -- 四舍五入
    CEIL(num)                 -- 向上取整
    FLOOR(num)                -- 向下取整
    MOD(num1, num2)           -- 取模
    ```
3. 日期函数

    ```sql
    CURRENT_DATE              -- 当前日期
    CURRENT_TIME              -- 当前时间
    CURRENT_TIMESTAMP         -- 当前时间戳
    YEAR(date)                -- 提取年份
    MONTH(date)               -- 提取月份
    DAY(date)                 -- 提取日
    DATEDIFF(date1, date2)    -- 日期差
    ```
