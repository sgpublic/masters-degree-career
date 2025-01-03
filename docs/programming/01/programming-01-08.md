# 1.8 操作

## 1.8.1 数据转换

数据转换分为两种方式：

+ **隐式转换**：通常发生在较小的类型转换为较大的类型，是在表达式中自动发生的。
+ **显式转换**：用于将一个数据类型强制转换为另一种数据类型。

两种转换方式都可能造成数据精度丢失。

<details>
<summary>相关代码</summary>

```c
#include <stdio.h>

int main() {
    int i = 10;
    float f = 3.1f;
    double d = i + f; // 将 int 类型隐式转换为 float 类型后相加，并在赋值时将结果隐式转换为 double 类型
    printf("隐式转换：d = %lf\n", d);

    int d_i = (int) d;
    printf("显式转换：d_i = %d\n", d_i);

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
隐式转换：d = 13.100000
显式转换：d_i = 13

Process finished with exit code 0
```
</details>