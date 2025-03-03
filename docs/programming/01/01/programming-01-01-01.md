# 1.1.1 全局变量和局部变量

全局变量定义在顶层，局部变量定义在大括号限定的作用域内。例如：

```c
#include <stdio.h>

int a = 100;

int main() {
    int a = 10;
    {
        int a = 30;
        printf("%d\n", a);
    }
    printf("%d\n", a);
    return 0;
}
```

输出：

```c
/Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
30
10

Process finished with exit code 0
```

也就是说，当存在名称相同的全局变量和局部变量时，优先使用最近作用域内的局部变量，因此**全局变量名称不建议与局部变量名称相同**。

全局变量的作用域是整个工程，工程编译时会合并所有源文件，当一个源文件需要使用另一个源文件中定义的全局变量时，使用 extern 关键字声明。例如：

+ g_val.c

  ```c
  int g_val = 100;
  ```
+ main.c

  ```c
  #include <stdio.h>

  extern int g_val; // 使用 g_val.c 中定义的全局变量
  
  int main() {
      printf("%d\n", g_val);
      return 0;
  }
  ```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
100

Process finished with exit code 0
```
