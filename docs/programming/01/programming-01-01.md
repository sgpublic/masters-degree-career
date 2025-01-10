# 1.1 基本数据类型

基础数据类型占用空间的大小通常取决于不同的系统平台，本文所使用的环境如下：

+ 系统：macOS 14.7.2
+ 架构：Intel x86_64
+ cmake：3.26.4

## 1.1.1 整形

这类数据本质是整数，不带 `unsigned` 的类型第一位作为符号位。

| 类型名称      | 占用空间（单位：字节） | 数据范围                                       | 示例                       |
|-----------|-------------|--------------------------------------------|--------------------------|
| int       | 4           | -2147483648 ~ 2147483647                   | `int value = 1;`         |
| short     | 2           | -32768 ~ 32767                             | `short value = 1;`       |
| long      | 8           | -9223372036854775808 ~ 9223372036854775807 | `long value = 1l;`       |
| long long | 8           | -9223372036854775808 ~ 9223372036854775807 | `long long value = 1ll;` |
| char      | 1           | -128 ~ 127                                 | `char value = 'c';`      |
| bool      | 1           | true \| false                              | `bool value = true;`     |

<details>
<summary>相关代码</summary>

```c
#include <limits.h>
#include <stdbool.h>
#include <stdio.h>

int main() {
    printf("int 存储大小：%lu，范围：%d ~ %d\n", sizeof(int), INT_MIN, INT_MAX);
    printf("short 存储大小：%lu，范围：%d ~ %d\n", sizeof(short), SHRT_MIN, SHRT_MAX);
    printf("long 存储大小：%lu，范围：%ld ~ %ld\n", sizeof(long), LONG_MIN, LONG_MAX);
    printf("long long 存储大小：%lu，范围：%lld ~ %lld\n", sizeof(long long), LONG_LONG_MIN, LONG_LONG_MAX);
    printf("char 存储大小：%lu，范围：%d ~ %d\n", sizeof(char), CHAR_MIN, CHAR_MAX);
    printf("bool 存储大小：%lu\n", sizeof(bool));

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
int 存储大小：4，范围：-2147483648 ~ 2147483647
short 存储大小：2，范围：-32768 ~ 32767
long 存储大小：8，范围：-9223372036854775808 ~ 9223372036854775807
long long 存储大小：8，范围：-9223372036854775808 ~ 9223372036854775807
char 存储大小：1，范围：-128 ~ 127
bool 存储大小：1

Process finished with exit code 0
```
</details>

## 1.1.2 浮点型

这类类型用于存放小数，采用类似科学计数法的原理存储，因此小数点的位置不固定，于是称为浮点型。

浮点型存储时：

1. 将小数点整数部分循环除以 2，按位记录余数（1 或 0），直到整数部分为 0，记录除以 2 的次数为 n，即整数部分为 n 位二进制
2. 将小数部分循环乘以 2，按位记录整数部分（1 或 0），直到小数部分为 0，记录乘以 2 的次数为 k，即小数部分为 k 为二进制
3. 指数由 $n-1$ 代入相关公式计算出

综上，一定会出现部分小数的小数部分二进制为无限循环，这部分小数存储为浮点型时会丢失精度。

因此实践中如果一定要对比浮点数的大小，通常会在一定的精度范围内判断它们是否相等。

| 类型名称        | 占用空间（单位：字节） | 精度（单位：位十进制） | 数据范围                            | 示例                         |
|-------------|-------------|-------------|---------------------------------|----------------------------|
| float       | 4           | 6           | 1.175494E-38 ~ 3.402823E+38     | `float value = 1.0f;`      |
| double      | 8           | 15          | 2.225074E-308 ~ 1.797693E+308   | `double value = 1.0;`      |
| long double | 16          | 18          | 3.362103E-4932 ~ 1.189731E+4932 | `long double value = 1.0;` |

上表中：

+ 精度

  表示该类型最多能精确表示多少位有效十进制数字。

  例如：一个小数为 `123456.789`，若用 `float` 类型表示，则只能精确表示 `123456`，小数部分会出现误差。

<details>
<summary>相关代码</summary>

```c
#include <float.h>
#include <stdio.h>

int main() {
    printf("float 存储大小：%lu，精度：%d，范围：%E ~ %E\n", sizeof(float), FLT_DIG, FLT_MIN, FLT_MAX);
    printf("double 存储大小：%lu，精度：%d，范围：%E ~ %E\n", sizeof(double), DBL_DIG, DBL_MIN, DBL_MAX);
    printf("long double 存储大小：%lu，精度：%d，范围：%LE ~ %LE\n", sizeof(long double), LDBL_DIG, LDBL_MIN, LDBL_MAX);

    float value = 123456.599f;
    printf("123456.599 存储为 float 类型后的实际值：%f\n", value);

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
float 存储大小：4，精度：6，范围：1.175494E-38 ~ 3.402823E+38
double 存储大小：8，精度：15，范围：2.225074E-308 ~ 1.797693E+308
long double 存储大小：16，精度：18，范围：3.362103E-4932 ~ 1.189731E+4932
123456.789 存储为 float 类型后的实际值：123456.601562

Process finished with exit code 0
```
</details>

## 1.1.3 void 型

`void` 含义为空白。

+ 当一个函数没有返回值时，可使用 `void` 作为返回类型。例如：`void test_func(int param);`。
+ 当一个函数不接受任何参数时，参数列表可留空，也可写 `void`。例如：`int test_func();` 或 `int test_func(void);`。

<details>
<summary>相关代码</summary>

```c
#include "stdio.h"

void test_func_1(int param) {
    printf("这是一个没有返回值的函数");
}

int test_func_2() {
    printf("这是一个返回值类型为 int、不接受任何参数的的函数");
    return 114514;
}


int test_func_3(void) {
    printf("这是一个返回值类型为 int 的函数、不接受任何参数的");
    return 114514;
}
```
</details>

## 1.1.4 数据转换

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