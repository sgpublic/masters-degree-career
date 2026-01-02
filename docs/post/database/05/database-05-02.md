# 5.2 1NF、 2NF、 3NF

## 5.2.1 基本概念

+ 关系：现实世界的实体以及实体之间的各种联系，均用关系来表示
+ 域：一个列的取值范围
+ 元组：一条记录
+ 分量：每条记录在一列上的值
+ 笛卡尔积：每个列的所有取值范围排列组合所得到的一张新的大表
+ 关系：从笛卡尔积中选出的一个子集
+ 度（degree）：列的数量
+ 候选码：能够唯一标识一个元组的最小属性集称为候选码
+ 主码：从所有候选码中选取的一个作为关系的主码

## 5.2.2 第一范式（1NF）

定义：

+ 原子性（Atomicity）：每个属性必须是单一的、不可再分的数据项。
+ 列名唯一性：每个属性必须有唯一的名称，不能重复。
+ 值的类型唯一性：同一列中的所有值必须是相同的数据类型。

不满足 1NF 的案例：

+ 分量包含多个值

    ```sql
    CREATE TABLE students_bad (
        student_id INT,
        name VARCHAR(50),
        phones VARCHAR(100)  -- 可能存储"13800138000,13800138001"
    );
    ```
+ 重复的列

    ```sql
    CREATE TABLE courses_bad (
    course_id INT,
    teacher VARCHAR(50),
    teacher VARCHAR(50)  -- 重复列名
    );
    ```

## 5.2.3 第二范式（2NF）

定义：

+ 满足第一范式。
+ 消除了非主属性对候选码的部分函数依赖：所有非主属性都完全函数依赖于任一候选码。


不满足 2NF 的案例：

```sql
-- 学生选课表（复合主键）
CREATE TABLE student_courses_bad (
    student_id INT,
    course_id INT,
    student_name VARCHAR(50),  -- ❌ 只依赖于student_id
    course_name VARCHAR(50),   -- ❌ 只依赖于course_id  
    department VARCHAR(50),    -- ❌ 只依赖于student_id
    credit INT,                -- ❌ 只依赖于course_id
    grade INT,                 -- ✅ 依赖于(student_id + course_id)
    PRIMARY KEY (student_id, course_id)
);
```

## 5.2.4 第三范式（3NF）

定义：

+ 满足第二范式。
+ 消除了非主属性对候选码的传递函数依赖：所有非主属性不依赖于其他非主属性。

不满足 3NF 的案例：

```sql
CREATE TABLE employees_dept_bad (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    dept_name VARCHAR(50),       -- 依赖于dept_id
    manager_id INT,              -- 依赖于dept_id
    office_location VARCHAR(100) -- 依赖于dept_id
);
```
