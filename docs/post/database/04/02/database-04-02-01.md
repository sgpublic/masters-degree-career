# 4.2.1 数据定义（Define）

## 4.2.1.1 数据类型

字符串类型：

+ `char(n)`：存储固定长度的字符串，剩余部分使用**空格**填充。
+ `varchar(n)`：存储动态长度的字符串，仅存储实际使用的字符长度。

数字类型：

+ `int`：整数类型，通常为 4 字节。
+ `smallint`：小整数类型，通常为 2 字节。
+ `numeric(p, d)`：精确的小数类型，`p` 为总位数，`d` 为小数位数。
+ `real`：单精度浮点数，通常为 4 字节。
+ `double precision`：双精度浮点数，通常为 8 字节。
+ `float(n)`：浮点数，`n` 为精度位数。

时间类型：

+ `date`：日期，通常以 `小时-分钟-秒` 格式存储。在未知时区的情况下，此类型无法严格确定一个日期。
+ `time`：时间，通常以 `小时-分钟-秒` 格式存储。在未知时区的情况下，此类型无法严格确定一个时间。
+ `timestamp`：时间戳，默认以秒为单位。
+ `interval`：时间间隔。

对象类型：

+ `blob`（Binary Large Object）：用于存储二进制文件数据，例如图片、音视频等。
+ `clob`（Character Large Object）：用于存储超长文本数据。


## 4.2.1.2 CREATE TABLE

SQL 语法：

```sql
CREATE TABLE table_name (
    column1 datatype [constraint],
    column2 datatype [constraint],
    ...
    [PRIMARY KEY (column_name)],  -- 主键约束
    [FOREIGN KEY (column_name) REFERENCES other_table (column_name)], -- 外键约束
    [CHECK (condition)],          -- 检查约束
    ...
);
```

其中：

+ `[constraint]` 为列定义的约束，例如：

    + `PRIMARY KEY`
    + `NOT NULL`
    + `DEFAULT <value>`
    + ...
+ `condition` 为检查约束，例如：

    + `column_name in (<value1>, <value2>, ...)`
    + ...