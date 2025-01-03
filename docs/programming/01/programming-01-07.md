# 1.7 引用

对一个指针执行 `*` 操作即可取得其实际值，即引用。

<details>
<summary>相关代码</summary>

```c
#include <stdio.h>

int main() {
    int value_1 = 1;
    int* value_1_pointer = &value_1;
    int value_1_value = *value_1_pointer;

    printf("变量 value_1 的值为 %d\n", value_1);
    printf("指针 value_1_pointer 指向的值为 %d\n", value_1_value);

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
变量 value_1 的值为 1
指针 value_1_pointer 指向的值为 1

Process finished with exit code 0
```
</details>
