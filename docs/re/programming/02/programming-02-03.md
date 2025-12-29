---
sidebar_position: 3
---

# 2.3 循环

C 语言中循环语句有三种：

+ `for` 循环

  <details>
  <summary>实例代码</summary>

  ```c
  #include <stdio.h>
  
  int main() {
      int arr[] = { 1, 1, 4, 5, 1, 4 };
  
      for (int i = 0; i < 6; ++i) {
          printf("第 %d 个数为 %d\n", i, arr[i]);
      }
  
      return 0;
  }
  ```
  
  输出：

  ```
  /Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
  第 0 个数为 1
  第 1 个数为 1
  第 2 个数为 4
  第 3 个数为 5
  第 4 个数为 1
  第 5 个数为 4
  
  Process finished with exit code 0
  ```
  </details>
+ `while` 循环

  <details>
  <summary>实例代码</summary>

  ```c
  #include <stdio.h>
  
  int main() {
      int arr[] = { 1, 1, 4, 5, 1, 4 };
      int i = 0;
  
      while (i < 6) {
          printf("第 %d 个数为 %d\n", i, arr[i]);
          i += 1;
      }
  
      return 0;
  }
  ```

  输出：

  ```
  /Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
  第 0 个数为 1
  第 1 个数为 1
  第 2 个数为 4
  第 3 个数为 5
  第 4 个数为 1
  第 5 个数为 4
  
  Process finished with exit code 0
  ```
  </details>
+ `do-while` 循环

  <details>
  <summary>实例代码</summary>

  ```c
  #include <stdio.h>
  
  int main() {
      int arr[] = { 1, 1, 4, 5, 1, 4 };
      int i = 0;
  
      do {
          printf("第 %d 个数为 %d\n", i, arr[i]);
          i += 1;
      } while (i < 6);
  
      return 0;
  }
  ```

  输出：

  ```
  /Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
  第 0 个数为 1
  第 1 个数为 1
  第 2 个数为 4
  第 3 个数为 5
  第 4 个数为 1
  第 5 个数为 4
  
  Process finished with exit code 0
  ```
  </details>

三种循环都能使用 `break` 直接结束循环、使用 `continue` 跳到下一次循环。