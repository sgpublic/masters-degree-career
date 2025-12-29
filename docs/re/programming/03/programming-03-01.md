# 3.1 赋值

## 3.1.1 自增、自减

自增为 `++`，自减为 `--`，放在变量前面为先自增/自减再使用值，放在变量后面为先使用值再自增/自减。

例如：

```c
#include <stdio.h>

int main() {
    int a;

    a = 10;
    printf("%d\n", a++);

    a = 10;
    printf("%d\n", ++a);

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
10
11

Process finished with exit code 0
```

再举一个例子：

```c
#include <stdio.h>

int main() {
    int a = 10;
    int b = a++ + ++a;
    printf("%d\n", b);
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
22

Process finished with exit code 0
```

其中 `int b = a++ + ++a;` 这一行，计算 `b` 的值的时候，要分别获得 `a++` 和 `++a` 的值，然后相加得到答案。

1. 获得 `a++` 的值，根据规则，这个表达式返回值为 `10`，然后将 `a` 自增，自增后 `a` 的值为 `11`。
2. 获得 `++a` 的值，根据规则，这个表达式会先将 `a` 自增，此时 `a` 的值为 `11`，自增后为 `12`，于是这个表达式返回值为 `12`。
3. 综上，`b` 的值为 10 + 12 得到答案 22。
4. 最后，`a` 的值为 12。

<details>
<summary>DLC</summary>

自增自减运算规则跟平台也是有关系的，上述规则适用于类 Unix 平台，即 Linux、macOS，而 Windows 下的规则有所不同，即：前缀表达式先统一计算后再使用值，后缀表达式在使用完值后再统一计算。

那么表达式 `int b = a++ + ++a;` 在 Windows 下的计算过程就如下所示：

1. 首先前缀表达式统一计算，即先计算 `++a`，返回值为 11，此时 `a` 的值为 11。
2. 计算 b 的值，`a++` 先使用值，此时 `a` 的值为 11，那么 `b` 的值为 11 + 11 得到 22
3. 表达式已计算完成，此时统一计算后缀表达式，即计算 `a++`，计算完后 `a` 的值为 12。
4. 最后，`a` 的值为 12。

可以看到，虽然最终答案是一致的，变量 `a` 最后的值也是一致的，但计算过程完全不一样。

</details>

## 3.1.2 数据转换

数据转换分为两种方式：

+ **隐式转换**：通常发生在较小的类型转换为较大的类型，是在表达式中自动发生的。
+ **显式转换**：用于将一个数据类型强制转换为另一种数据类型。

两种转换方式都可能造成数据精度丢失。例如：

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
