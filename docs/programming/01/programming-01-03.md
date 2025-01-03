# 1.3 指针

在数据类型后加上星号，即 `*`，则表示对应类型的指针，指针代表其指向一个数据的实际位置。

对一个变量执行 `&` 操作即可取得其指针。

| 类型名称 | 占用空间（单位：字节） | 示例      |
|------|-------------|---------|
| 指针   | 8           | `void*` |

其中 `void*` 表示一个任意类型的指针，即该指针指向一个任意类型的数据。

<details>
<summary>相关代码</summary>

```c
#include <stdio.h>

int main() {
    int value_1 = 1;
    int* value_1_pointer = &value_1;

    printf("变量 value_1 的值为 %d\n", value_1);
    printf("指针 value_1_pointer 的值为 %ld\n", value_1_pointer);

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
变量 value_1 的值为 1
指针 value_1_pointer 的值为 140701977053016

Process finished with exit code 0
```
</details>
