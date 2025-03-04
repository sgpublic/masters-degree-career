# 3.4 文件

C 语言使用 `fopen` 函数打开文件，打开成功时返回 `FILE*`，否则返回 `NULL`。

```c
FILE *f = fopen("/Users/madray/Documents/JetBrains/CLion/CPP_Test/test.txt", "r+");
```

第一个参数为文件路径，支持绝对路径和相对路径；第二个参数为打开模式，常见模式如下表：

| 模式  | 描述          | 文件存在时    | 文件不存在时 |
|-----|-------------|----------|--------|
| r   | 只读模式        |          | 出错     |
| w   | 只写模式        | 清空已有文件   | 创建新文件  |
| r+  | 读写模式        |          | 出错     |
| w+  | 读写模式        | 清空已有文件   | 创建新文件  |

<details>
<summary>DLC</summary>

其他打开模式如下表：

| 模式  | 描述          | 文件存在时    | 文件不存在时 |
|-----|-------------|----------|--------|
| a   | 追加写出模式      | 不清空文件，续写 | 出错     |
| rb  | 只读模式（二进制）   |          | 出错     |
| wb  | 写模式（二进制）    | 清空已有文件   | 创建新文件  |
| ab  | 追加写出模式（二进制） | 不清空文件，续写 | 出错     |
| a+  | 读写模式        | 不清空文件，续写 | 出错     |
| rb+ | 读写模式（二进制）   |          | 出错     |
| wb+ | 读写模式（二进制）   | 清空已有文件   | 创建新文件  |
| ab+ | 读写模式（二进制）   | 不清空文件，续写 | 出错     |

</details>

打开文件后：

+ `fgetc`：读取单个字符，读不到时返回 `-1`

  ```c
  char c = fgetc(f);
  ```
+ `fgets`：读取一行字符串，并存入数组，返回值为字符数组，读不到时返回 `NULL`

  ```c
  char c[1024];
  fgets(c, 1024, f);
  ```
  
  由于这种方式，一次读取的长度取决于参数，若实际文件一行的长度大于设置的参数，就会出现一行的字符被截断的情况，此时无法判断这一行是否有被截断。
+ `fread`：读取指定个数的字符，并存入数组，返回值为读取到的字符个数，读不到时返回 0

  ```c
  char c[100];
  fread(c, sizeof(char), 100, f);
  ```
  
  <details>
  <summary>完整代码</summary>
  
  ```c
  #include <stdio.h>

  int main() {
      FILE *f = fopen("/Users/madray/Documents/JetBrains/CLion/CPP_Test/test.txt", "r+");
      char c[100];
      unsigned long size;
      while ((size = fread(c, sizeof(char), 100, f)) > 0) {
          for (unsigned long i = 0; i < size; ++i) {
              printf("%c", c[i]);
          }
      }
      printf("\n");
      fclose(f);

      return 0;
  }
  ```
  </details>
+ `fputc`：写入一个字符，返回值为写入的字符

  ```c
  char c = fputc('A', f);
  ```
+ `fputs`：写入字符串，写入成功返回非负数，否则返回 `EOF`

  ```c
  char *c = "114514";
  fputs(c, f);
  ```
+ `fwrite`：写入指定个数的字符，并存入数组，返回值为写入的字符个数，写入失败返回 `EOF`

  ```c
  char *c = "114514";
  fwrite(c, sizeof(char), 6, f);
  ```

文件读写完成后，要使用 `fclose` 关闭文件，成功返回非负数，否则返回 `EOF`。

```c
fclose(f);
```