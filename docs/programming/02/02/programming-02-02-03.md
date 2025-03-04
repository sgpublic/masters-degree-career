# 2.2.3 三元运算符

三元表达式（或三元运算符）格式如下：

```c
逻辑值 ? 表达式1 : 表达式2
```

当 `逻辑值` 为 true 时返回 `表达式1` 的值，否则返回 `表达式2` 的值。例如：

```c
#define true 1
#define false 0

#include <stdio.h>

int main() {
    int a = 10, b = 20;
    int result = true ? a : b;
    printf("result: %d\n", result);
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
result: 10

Process finished with exit code 0
```

需要注意的是，若逻辑值为 true 的时候，`表达式2` 不参与计算，因此不执行，类似逻辑表达式的短路效应。例如：

```c
#define true 1
#define false 0

#include <stdio.h>

int main() {
    int a = 0, b = 0;
    int result = true ? ++a : ++b;
    printf("result: %d, a: %d, b: %d\n", result, a, b);
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
result: 1, a: 1, b: 0

Process finished with exit code 0
```

可以看到执行完成后，`++b` 并没有计算，`b` 的值没有发生变化。