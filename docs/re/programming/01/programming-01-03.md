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

## 1.3.4 指针的指针

根据前文一个数组如果直接使用，实际上是得到该数组首元素的指针。若取数组的指针，那么得到的是一个指向整个数组的指针，这个指针将整个数组视为一个元素，也就是说对这个指针 +1 之后，得到的指针将指向这个数组的下一个元素。例如：

```c
#include <stdio.h>

int main() {
    int a[5] = { 1, 2, 3, 4, 5 };
    int* prt1 = (int*)(&a + 1);
    int* prt2 = (int*)(a + 1);
    printf("%x, %x\n", prt1[-1], *prt2);
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
5, 2

Process finished with exit code 0
```

可以看到，`prt1[-1]` 指向的是数组 `a` 的最后一个元素，而 `prt2` 指向的数组 `a` 的第二个元素。