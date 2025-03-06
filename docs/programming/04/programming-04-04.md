# 4.4 函数返回

同参数传递，若函数返回的是值而不是指针，实际上也是复制一个新的变量返回。例如：

```c
#include "stdio.h"

int test();

int main() {
    int a = test();
    printf("(main) a = %d, point: %p\n", a, &a);

    return 0;
}

int test() {
    int a = 20;
    printf("(test) a = %d, point: %p\n", a, &a);
    return a;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
(test) a = 20, point: 0x7ff7b52f066c
(main) a = 20, point: 0x7ff7b52f0688

Process finished with exit code 0
```

可以看到，两个 `a` 指向了不同的内存。