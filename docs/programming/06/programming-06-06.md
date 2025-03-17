# 6.6 判别闰年

此处参考规则来自：[用于确定年份是否为闰年的方法 - Microsoft 365 App | Microsoft Learn](https://learn.microsoft.com/zh-cn/office/troubleshoot/excel/determine-a-leap-year#how-to-determine-whether-a-year-is-a-leap-year)

规则如下：

1. 不能被 4 整除的不是闰年
2. 能被 4 整除但不能被 100 整除的是闰年
3. 能被 100 整除但不能被 400 整除的不是闰年
4. 能被 400 整除的是闰年

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