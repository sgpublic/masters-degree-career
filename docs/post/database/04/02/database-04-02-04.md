# 4.2.4 数据控制（Control）

## 4.2.4.1 GRANT & REVOKE

用于授予和撤销权限。

```sql
-- 1. 授予所有权限
GRANT ALL PRIVILEGES ON Course TO U1, U2 WITH GRANT OPTION;

-- 2. 授予特定权限
GRANT INSERT ON Student TO U3;
GRANT SELECT ON Instructor TO PUBLIC;
GRANT UPDATE ON Department TO U4;

-- 3. 带传递权的授权
GRANT SELECT ON department TO Amit WITH GRANT OPTION;

-- 4. 撤销权限
REVOKE SELECT ON department FROM Amit, Satoshi CASCADE;
REVOKE SELECT ON department FROM Amit, Satoshi RESTRICT;
```

## 4.2.4.2 ROLE

```sql
-- 创建角色
CREATE ROLE role1;
CREATE ROLE role2;

-- 给角色授权
GRANT SELECT ON takes TO role1;

-- 分配角色给用户
GRANT role1 TO user1;
GRANT role1 TO role2;
```
