# 4.3 参数传递

参数传递时若传递的是变量值，那么实际上是复制了一个新的变量/对象传入的。例如：

```c
#include "stdio.h"

void test(int a);

int main() {
    int a = 10;

    printf("%p\n", &a);
    test(a);

    return 0;
}

void test(int a) {
    printf("%p\n", &a);
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
0x7ff7b296c688
0x7ff7b296c66c

Process finished with exit code 0
```

可以看到，`test` 函数里面的 `a` 和外面的 `a` 指向了不同内存。

如果想实现对外部变量的修改，需要使用指针。例如：

```
#include "stdio.h"

void test(int* a);

int main() {
    int a = 10;

    printf("(main) a = %d, point: %p\n", a, &a);
    test(&a);
    printf("(main) a = %d, point: %p\n", a, &a);

    return 0;
}

void test(int* a) {
    *a = 20;
    printf("(test) a = %d, point: %p\n", *a, a);
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
(main) a = 10, point: 0x7ff7bbff4688
(test) a = 20, point: 0x7ff7bbff4688
(main) a = 20, point: 0x7ff7bbff4688

Process finished with exit code 0
```

可以看到所有的 `a` 都指向同一块内存。