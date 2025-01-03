# 1.2 数组

定义一个数组需要事先确定好类型和容量，数组一旦定义完成后，其容量不可改变。示例：

```c
int array_a[10]; // 定义类型为 int、容量为 10 的数组
```

<details>
<summary>相关代码</summary>

```c
#include <stdio.h>

int main() {
    int array_a[10]; // 定义类型为 int、容量为 10 的数组
    printf("array_a 的容量为：%lu\n", sizeof(array_a) / sizeof(array_a[0]));

    int size = 114;
    int array_b[size]; // 定义类型为 int、容量大小等于变量 size 的数组
    printf("array_b 的容量为：%lu\n", sizeof(array_b) / sizeof(array_b[0]));
    size = 514;
    printf("更改了变量 size 的值后，array_b 的容量为：%lu\n", sizeof(array_b) / sizeof(array_b[0])); // 数组一旦定义完成，其容量不可改变

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
array_a 的容量为：10
array_b 的容量为：114
更改了变量 size 的值后，array_b 的容量为：114

Process finished with exit code 0
```
</details>