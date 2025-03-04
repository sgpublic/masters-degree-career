# 4.1 函数定义

函数定义格式如下：

```c
返回值类型 函数名称(参类类型 参数名称, ...) {
    函数体
}
```

例如，如下函数返回值为 `int` 类型，名称为 `test`，接受两个参数，第一个参数为 `char` 类型，名称为 `arg1`，第二个参数为 `int` 类型，名称为 `arg2`，函数体为直接返回 `0`：

```c
int test(char arg1, int arg2) {
    return 0;
}
```

在实际编写 C 源文件的时候，通常将函数定义写在前面（或直接定义到 `.h` 文件里），实际实现写在后面：

```c
#include <stdio.h>

// 先定义函数供调用
int add(int arg1, int arg2);

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    int result = add(a, b);
    printf("%d", result);
    return 0;
}

// 后实现函数，以便将 main 函数放在源文件前面
int add(int arg1, int arg2) {
    return arg1 + arg2;
}
```

