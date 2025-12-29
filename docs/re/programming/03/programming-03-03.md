# 3.3 输入

C 语言实现标准输入主要使用 scanf 函数。例如：

```c
#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("a = %d, b = %d\n", a, b);
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
10 20
a = 10, b = 20

Process finished with exit code 0
```

<details>

<summary>DLC</summary>

Visual Studio 会建议将 scanf 替换为 scanf_s，理由是 scanf 不安全。原因是在于 scanf 函数并不会检查越界访问，可能会造成崩溃、数组溢出或缓存区溢出等安全问题。例如：

```c
#include <stdio.h>

int main() {
    char s[5];
    scanf("%s", s);
    puts(s);
    return 0;
}
```

这段代码要求输入一个字符串，长度为 4 个字符（字符串末尾的 `\0` 需要占用一个字符），但 scanf 并不会检查输入的字符串的长度，并直接将输入值复制给变量，那么假如输入的字符串长度超过 4，就会造成数组越界访问。

例如，输出：

```
/Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
1145141919810
1145141919810

Process finished with exit code 0
```

这样，原本数组 s 只申请了 5 个字节的内存，但 scanf 却将这之后的若干字节的内存也覆盖了，这会让黑客有可乘之机。

</details>

## 3.3.1 格式字符

scanf 函数的第一个参数为输入内容的模板，模板中使用**格式字符**来表示参数。常见格式字符如下表：

| 格式字符 | 输入类型              | 示例        |
|------|-------------------|-----------|
| d, i | 有符号的十进制整数         | `%d`      |
| f    | 小数形式的浮点数          | `%f`      |
| lf   | 小数形式的双精度浮点数       | `%lf`     |
| c    | 字符                | `%c`      |
| o    | 无符号的八进制整数         | `%o`      |
| x/X  | 十六进制整数（不含前导 `0x`） | `%x`/`%X` |
