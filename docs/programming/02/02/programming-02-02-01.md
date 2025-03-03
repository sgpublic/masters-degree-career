# 2.2.1 选择

当需要根据不同条件来选择是否执行语句的时候，可以使用选择结构。

## 2.2.1.1 if 语句

使用 `if`-`else if`-`else` 语句可以实现选择结构。例如：

```c
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);

    if (a < 60) {
        printf("不及格");
    } else if (a < 70) {
        printf("合格");
    } else if (a < 80) {
        printf("中等");
    } else if (a < 90) {
        printf("良好");
    } else {
        printf("优秀");
    }

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
78
中等
Process finished with exit code 0
```

## 2.2.1.2 switch 语句

对于输入值可枚举的情况，可以使用 switch 语句。例如：

```c
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);

    switch (a) {
        case 1:
            printf("星期一\n");
            break;
        case 2:
            printf("星期二\n");
            break;
        case 3:
            printf("星期三\n");
            break;
        case 4:
            printf("星期四\n");
            break;
        case 5:
            printf("星期五\n");
            break;
        case 6:
            printf("星期六\n");
            break;
        case 7:
            printf("星期日\n");
            break;
        default:
            printf("未知\n");
    }

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
2
星期二

Process finished with exit code 0
```

需要注意的是，每一个 `case` 表达式后面的语句里，都有一句 `break;`，这表示执行完这些语句后结束 `switch` 表达式的执行，如果没有 `break;`，那么 `switch` 语句会将后续所有 `case` 表达式后面的语句依次执行，直到遇到 `break;`。例如：

```c
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);

    switch (a) {
        case 1: printf("星期一\n");
        case 2: printf("星期二\n");
        case 3: printf("星期三\n");
        case 4: printf("星期四\n");
        case 5: printf("星期五\n");
        case 6:
            printf("星期六\n");
            break;
        case 7: printf("星期日\n");
        default: printf("未知\n");
    }

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
2
星期二
星期三
星期四
星期五
星期六

Process finished with exit code 0
```