# 1.4 结构体

结构体可以理解一些变量的封装，将一些变量封装为一个整体。

例如：

```c
#include <stdio.h>
#include <stdbool.h>

struct test_struct {
    int test_int;
    bool test_bool;
};

int main() {
    struct test_struct stru = {
            114514,
            .test_bool = false,
    };
    printf("test_int：%d\n", stru.test_int);
    printf("test_bool：%d\n", stru.test_bool);
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
test_int：114514
test_bool：0

Process finished with exit code 0
```

## 1.4.1 管理内存

当需要创建一个结构体对象供外部使用时，需要使用 `mallco` 或 `calloc` 函数申请内存，否则当函数执行完成后，C 程序会自动释放内存。例如：

```c
// 申请 10 个 int 长度的内存用于创建容量为 10 的数组
int *arr = (int*) calloc(10, sizeof(int));
// 申请合适大小的内存用于创建结构体
struct my_struct *obj = (struct my_struct*) calloc(1, sizeof(struct my_struct));
```

`mallco` 和 `calloc` 的区别在于，`mallco` 仅申请内存，不会对其进行初始化，里面可能存在脏数据，而 `calloc` 会对内存根据数据类型进行初始化。

当内存不再使用时，需要使用函数 `free` 释放内存，仅需要传入申请内存时返回的内存指针即可，也就是说，无论申请了多少内存，释放时只需要传入所申请的内存的第一个字节的指针。例如：

```c
free(arr);
free(obj);
```

## 1.4.2 面向对象

利用函数指针和结构体结合，可实现面向对象。例如：

```c
#include <stdio.h>
#include <stdlib.h>

struct my_struct {
    int value;
    void (*add)(struct my_struct *this, int value);
};

void test_struct_add(struct my_struct *this, int add_value) {
    this->value += add_value;
}

struct my_struct* new_test_struct(int init_value) {
    struct my_struct *obj = (struct my_struct*) calloc(1, sizeof(struct my_struct));
    obj->value = init_value;
    obj->add = test_struct_add;
    return obj;
}

int main() {
    struct my_struct *struct_a = new_test_struct(114514);
    printf("struct_a.value：%d\n", struct_a->value);
    struct_a->add(struct_a, 1805296);
    printf("struct_a.value：%d\n", struct_a->value);
    free(struct_a);
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
struct_a.value：114514
struct_a.value：1919810

Process finished with exit code 0
```

> 要是不是主修 C/C++ 的还是别记这个了，能看懂就行，面向对象还是老老实实 C++ 吧。