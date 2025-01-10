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
    int *value_1_pointer = &value_1;

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

## 1.3.1 指针的引用

对一个指针执行 `*` 操作即可取得其实际值，即引用。

<details>
<summary>相关代码</summary>

```c
#include <stdio.h>

int main() {
    int value_1 = 1;
    int *value_1_pointer = &value_1;
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

## 1.3.2 指针和数组

当一个函数将数组作为参数列表之一时，其实际得到的是此数组的指针，而并不是完整的数组。例如：

```c
#include <stdio.h>

void printArrayLength(int arr[]) {
    printf("作为函数参数，数组单个元素长度：%lu，数组长度：%lu，数组容量：%lu\n", sizeof(arr[0]), sizeof(arr), sizeof(arr) / sizeof(arr[0]));
}

int main() {
    int arr[5];
    printf("直接计算，数组单个元素长度：%lu，数组长度：%lu，数组容量：%lu\n", sizeof(arr[0]), sizeof(arr), sizeof(arr) / sizeof(arr[0]));
    printArrayLength(arr);
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
直接计算，数组单个元素长度：4，数组长度：20，数组容量：5
作为函数参数，数组单个元素长度：4，数组长度：8，数组容量：2

Process finished with exit code 0
```

可以看到，通过函数传递的数组，实际长度为 8 字节，与一个指针的长度一致。

因此当一个数组作为函数的参数时，虽然仍能直接使用下标引用元素值，但无法直接得到数组的具体容量，通常需要额外增加参数描述其容量，或使用 `struct`。

## 1.3.3 指针和函数

一个指针可以指向一个函数。例如：

```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int (*add_func)(int, int) = add;
    printf("1 + 1 = %d", add_func(1, 1));
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
1 + 1 = 2
Process finished with exit code 0
```