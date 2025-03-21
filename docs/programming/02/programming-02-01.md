---
sidebar_position: 1
---

# 2.1 顺序

从上往下一句一句依次执行就是顺序结构。

使用 `exit(int code);` 可退出程序（此函数头文件为 `stdlib.h`）。例如：

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    scanf("%d", &n);
    if (n < 0) {
        exit(-1); // 提前退出程序
    }
    return 0;
}
```