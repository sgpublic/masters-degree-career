# 4.2.3 数据操纵（Manipulation）

## 4.2.3.1 INSERT

1. 隐式全列插入：

   ```sql
   INSERT INFO table_name
   VALUES (value1, value2, ...)
   ```
2. 显式列名插入：

   ```sql
   INSERT INFO table_name (column1, column2, ...)
   VALUES (value1, value2, ...)
   ```

## 4.2.3.2 DELETE

```sql
DELETE FROM table_name
[WHERE condition]
```

_**一定不要忘记写条件语句，否则会删除所有行！！！**_

## 4.2.3.2 UPDATE

```sql
UPDATE table_name
SET column1 = value1,
    column2 = value2,
    ...
[WHERE condition]
```

_**一定不要忘记写条件语句，否则会更新所有行！！！**_
