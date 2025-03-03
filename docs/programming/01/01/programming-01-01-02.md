# 1.1.2 常量

常量区别于变量，声明之后不可改变的量。

## 1.1.2.1 字面常量

例如：

```
int a = 100;
```

其中，“100”就是一个常量，是编译后不可修改的量，换句话说，当程序运行到这一行时，赋值给变量 a 的值只能是 100，不会是其他值。

这种常量分为三种类型：

+ **整形常量**：即整数，例如 `100`、`20`、`1.2E3`。
+ **实型常量**：即小数，例如 `1.234`、`1.234E2`。
+ **字符常量**：即字符，例如 `'A'`、`'\0'`。

## 1.1.2.2 常变量

还可以用 `const` 关键字来修饰一个变量，使之具有常属性，即常变量：

```c
const int a = 100;
```

## 1.1.2.3 枚举常量

枚举也属于常量，C 语言中枚举使用 int 存储，默认从 0 开始，可以手动定义，若手动定义了某一个枚举的值，那么下一个枚举会从定义的数字继续定义。例如：

```c
#include <stdio.h>

enum Color {
    RED, YELLOW, BLUE
};

enum Sex {
    MALE,
    FEMALE = 3, // 手动定义为 3
    SECRET // 由于上一个枚举有手动定义值，此枚举将继续上一个枚举的值定义，即定义为 4
};

int main() {
    printf("RED: %d\n", RED);
    printf("MALE: %d\n", MALE);
    printf("FEMALE: %d\n", FEMALE);
    printf("SECRET: %d\n", SECRET);

    // 由于枚举使用 int 存储，因此不同枚举的值可以相等
    if (RED == MALE) {
        printf("RED == MALE\n");
    } else {
        printf("RED != MALE\n");
    }

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
RED: 0
MALE: 0
FEMALE: 3
SECRET: 4
RED == MALE

Process finished with exit code 0
```

## 1.1.2.4 标识符常量

书中提到，也可以使用 `#define` 定义常量。例如：

```c
#define PI 3.14

#include <stdio.h>

int main() {
    printf("%f", PI);
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
1.1.140000
Process finished with exit code 0
```

<details>

<summary>DLC</summary>

`#define` 做的实际上就是定义了一个宏而已，而编译器会在预处理期（也就是正式编译前）将代码中所有宏定义进行文本替换，例如：

```c
#define PI 3.14

#include <stdio.h>

int main() {
    printf("%f", PI);
    return 0;
}
```

这段代码在编译前，编译器会将代码处理为以下内容（仅供原理解释，不严谨代表实际情况）：

```c
#include <stdio.h>

int main() {
    printf("%f", 3.14);
    return 0;
}
```
</details>