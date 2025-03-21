# 6.6 判别闰年

满足以下任意条件即为闰年：

+ 能被 4 整除，但不能被 100 整除
+ 能被 400 整除

```cpp
bool check_run_year(int year) {
    if (year % 4 != 0) {
        return false;
    }
    if (year % 100 != 0) {
        return true;
    }
    if (year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
```