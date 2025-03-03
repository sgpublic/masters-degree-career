# 1.1.3 字符串类型

C 语言使用 char 数组存放字符串。例如：

```c
char *s1 = "abcdef";
char s2[] = "abcdef";
```

两种定义方式都是可以的，需要注意的是，`"abcdef"` 本身是个常量，第一种方法是一个指针直接指向这个常量，因此是不能修改 `s1` 某个位置上的字符：

```c
#include <stdio.h>

int main() {
    char *s1 = "abcdef";
    s1[1] = 'r';
    printf("%s\n", s1);
    return 0;
}
```

输出（崩溃）：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest

Process finished with exit code 138 (interrupted by signal 10: SIGBUS)
```

而第二种方法则是将常量拷贝到这个数组里面，因此可以修改 `s2` 某个位置上的字符：

```c
#include <stdio.h>

int main() {
    char s1[] = "abcdef";
    s1[1] = 'r';
    printf("%s\n", s1);
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
arcdef

Process finished with exit code 0
```

C 语言中，字符串的末尾使用字符 `\0` 标记，也就是说，C 程序用 `\0` 来辨别字符串的末尾。

由于 C 程序中字符串的本质是 char 数组，因此还能用这种方式定义字符串：

```c
char s1[] = {'1', '1', '4'};
```