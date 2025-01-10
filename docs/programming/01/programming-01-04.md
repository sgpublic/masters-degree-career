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

## 1.4.1 面向对象

利用函数指针和结构体结合，可实现面向对象。例如：

```c
#include "stdio.h"

struct my_struct {
    int value;
    void (*add)(struct my_struct *this, int value);
};

void test_struct_add(struct my_struct *this, int add_value) {
    this->value += add_value;
}

struct my_struct new_test_struct(int init_value) {
    struct my_struct obj = {
            .value = init_value,
            .add = test_struct_add,
    };
    return obj;
}

int main() {
    struct my_struct struct_a = new_test_struct(114514);
    printf("struct_a.value：%d\n", struct_a.value);
    struct_a.add(&struct_a, 1805296);
    printf("struct_a.value：%d\n", struct_a.value);
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