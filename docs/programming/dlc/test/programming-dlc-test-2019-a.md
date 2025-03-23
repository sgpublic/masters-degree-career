# 2019 年 - A 卷

## 一、根据函数或程序功能，填写相应代码。（每小题 4 分，共 20 分）

1. 下列函数的功能是：用递归法求 $f(n)=1^2+2^2+...+n^2$。请填空：

   ```c
   double Fun(int n) {
    if (n == 1)
        return ____①____;
    else
        return ____②____;
   }
   ```
   
   <details>
   <summary>参考答案</summary>
   
   ① `1`
   
   ② `n * n + Fun(n - 1)`
   
   </details>
2. 下面程序的功能是计算并打印两个复数差。请填空。

   ```c
   include <stdio.h>
   
   struct comp {
     float re;
     float im;
   };
   
   struct comp *m(struct comp *x, struct comp *y);
   
   void main() {
     struct comp *t;
     struct comp a, b;
     a.re = 1;
     a.im = 2;
     b.re = 3;
     b.im = 4;
     t = m(____①____);
     printf("t->re = %f, t->im = %f\n", t->re, t->im);
   }
   
   struct comp *m(struct comp *x, struct comp *y) {
     struct comp *z;
     z = ____②____
     z->re = x->re - y->re;
     z->im = x->im - y->im;
     return z;
   }
   ```
   
   <details>
   <summary>参考答案</summary>
   
   ① `&a, &b`
   
   ② `(struct camp*) callco(1, sizeof(comp));`
   
   </details>

3. 下面程序的功能是输入一个华氏温度（$F$），要求输出摄氏温度。公式为 $c = \frac{5}{9}(F-32)$，结果取 2 位小数。请填空。

   ```c
   #include<stdio.h>
   
   void main() {
     float hs, ss;
     printf("Please input a float number: ");
     scanf("%f", &hs);
     ss = ____①____
     printf(____②____);
   }
   ```
   
   <details>
   <summary>参考答案</summary>
   
   ① `5.0f / 9 * (hs - 32);`
   
   ② `"%f\n", ss`
   
   </details>

4. 下面程序的功能是计算乘方和取余运算。请填空。

   ```c
   #include<stdio.h>
   #include <math.h>
   
   void main() {
     int x, y;
     char ch;
     scanf("%d %c %d", &x, &ch, &y);
     switch(ch) {
         case '^':
             ____①____;
             break;
         ____②____:
             printf("%d %% %d = %d\n", x, y, x % y);
             break;
     }
   }
   ```
   
   <details>
   <summary>参考答案</summary>
   
   ① `printf("%d^%d = %lld\n", x, y, (long long) x^y)`
   
   ② `case '%'`
   
   </details>
5. 下面程序的功能是用迭代法计算 $x=\sqrt{a}$ 。已知求平方根的迭代公式为 $x_{n+1}=\frac{1}{2}(x_n+\frac{a}{x_n})$，要求前后两次计算出的 $x$ 的差的绝对值小于 $10^{-5}$。请填空。

   ```c
   #include <stdio.h>
   #include <math.h>
   
   void main() {
     float a, xn, xn1;
     printf("Input a = ");
     scanf("%f", &a);
     xn = a / 2;
     xn1 = (xn + a / xn) / 2;
     do {
         xn = xn1;
         ____①____;
     } while (____②____);
     printf("xn1 = %f\n", xn1);
   }
   ```
   
   <details>
   <summary>参考答案</summary>
   
   ① `printf("%d^%d = %lld\n", x, y, (long long) x^y)`
   
   ② `xn1 = (xn + a / xn) / 2`
   
   </details>

## 二、程序改错。（共 10 分）

下面程序的功能是从键盘输入一个大写英文字母，要求按字母的顺序打印出 3 个相邻的字母，指定的字母在中间。若指定的字母为 Z，则打印 YZA；若为 A，则打印 ZAB。请改错。

```c showLineNumbers
#include <stdio.h>

void main() {
    char a[3], c;
    int i;
    c = get();
    a[1] = c;
    if (c == 'Z') {
        a[0] = c - 1;
        a[2] = 'A';
    } else if (c == 'A') {
        a[0] = 'Z';
        a[2] = c - 1;
    } else {
        a[0] = c + 1;
        a[2] = c - 1;
    }
    for (i = 0; i < 3; i++)
        put(a[i]);
}
```

<details>
<summary>参考答案</summary>

第 6 行：`c = getc();`

第 13 行：`a[2] = c + 1;`

第 15 行：`a[0] = c - 1;`

第 16 行：`a[2] = c + 1;`

第 19 行：`putc(a[i]);`

</details>

## 三、读程序写结果。（共 30 分）

1. 请写出下面程序的输出结果。

   ```c
   #include <stdio.h>
   
   int func(int a, int b) {
     static int m, i = 2;
     i += m + 1;
     m = i + a + b;
     return m;
   }
   
   void main() {
     int k = 4, m = 1, p;
     p = func(k, m);
     printf("%d\n", p);
     p = func(k, m);
     printf("%d\n", p);
   }
   ```
   
   <details>
   <summary>参考答案</summary>
   
   输出：
   
   ```
   8
   17
   ```
   </details>
2. 请写出下面程序的输出结果。

   ```c
   #include <stdio.h>
   
   float *search(float (*p)[4], int n);
   
   void main() {
       float s[][4] = {{60, 70, 80, 90},
                       {89, 83, 67, 50},
                       {43, 78, 97, 66},
                       {65, 74, 92, 87}};
       float *p;
       int i, j;
       for (i = 0; i < 4; i++) {
           p = search(s + i, 4);
           if (p == *(s + i)) {
               printf("No. %d scores:\n", i);
               for (j = 0; j < 4; j++)
                   printf("%5.2f ", *(p + j));
               printf("\n");
           }
       }
   }
   
   float *search(float (*p)[4], int n) {
       float *pt = *(p + 1);
       int i;
       for (i = 0; i < n; i++)
           if (*(*p + i) < 60)
               pt = *p;
       return pt;
   }
   ```

   <details>
   <summary>参考答案</summary>
   
   输出：
   
   ```
   No. 1 scores:
   89.00 83.00 67.00 50.00
   No. 2 scores:
   43.00 78.00 97.00 66.00
   ```
   
   分析：

   1. search 函数输入一个元素数量为 4 的数组的指针，首先：
      + 将 pt 指向当前数组的下一个元素，即 main 函数中二维数组的下一行。
      + 若当前行中存在小于 60 的元素，则将 pt 指向当前行。
   2. main 函数中循环中，判断 search 返回的是不是当前行，即当前行是否存在小于 60 的数值，如果是则打印这一行的数值。

   结论：这段代码判断二维数组中每一行是否存在小于 60 的数值，如果有则打印这一行数值。
   </details>
3. 请写出下面程序的输出结果。

   ```c
   #include <stdio.h>
   #include <string.h>
   
   #define N 60
   
   void main() {
       int i, len, m = 0;
       char a[N];
       float p;
       printf("Input a string: ");
       scanf("%s", a); /* 输入 abcdstring */
       len = strlen(a);
       for (i = 0; a[i] != '\0' && i < N - 1; i++)
           if (a[i] == a[i + 1] + 1 || a[i] + 1 == a[i + 1])
               m++;
       p = (float) m / len * 100;
       printf("len=%d, m=%d, p=%6.2f%%\n", len, m, p);
   }
   ```

   <details>
   <summary>参考答案</summary>

   输出：

   ```
   Input a string: abcdstring
   len=10,m=4,p= 40.00%
   ```
   </details>
4. 请写出下面程序的输出结果。

   ```c
   #include <stdio.h>
   #include <string.h>
   
   void fun(char *w, int n);
   
   int main() {
       char p[] = "1234567";
       fun(p, strlen(p));
       puts(p);
   }
   
   void fun(char *w, int n) {
       char t, *s1, *s2;
       s1 = w;
       s2 = w + n - 1;
       while (s1 < s2) {
           t = *s1++;
           *s1 = *s2--;
           *s2 = t;
       }
   }
   ```

   <details>
   <summary>参考答案</summary>

   > 此题原题中指针 `*p` 的声明为 `char *p = "1234567";`，指向字符串的是常量，因此不能修改，但既然这题都这么出了，就当他能修改吧。

   输出：

   ```
   1711717
   ```
   </details>
5. 请写出下面程序的输出结果。

   ```c
   #include <stdio.h>
   #include <math.h>
   
   void fun(int n);
   
   void main() {
       int n;
       scanf("%d", &n); /* 输入一个至少 3 位的负数*/
       printf("%d=", n);
       if (n < 0)
           printf("-");
       n = fabs(n);
       fun(n);
   }
   
   void fun(int n) {
       int k, r;
       for (k = 2; k <= sqrt(n); k++) {
           r = n % k;
           while (!r) {
               printf("%d", k);
               n = n / k;
               if (n > 1)
                   printf("*");
               r = n % k;
           }
       }
       if (n != 1)
           printf("%d\n", n);
   }
   ```

   <details>
   <summary>参考答案</summary>

   输出：

   ```
   100
   100=2*2*5*5
   ```
   </details>
6. 请写出下面程序的输出结果。

   ```c
   #include <stdio.h>
   
   int judge(int m) {
       int i, num = 1;
       if (m == 1)
           return 0;
       else {
           for (i = 2; i <= m / 2; i++) {
               if (m % i == 0)
                   num = num + i;
           }
           if (num == m) {
               printf("%d\n", m);
               return 1;
           } else
               return 0;
       }
   }
   
   int main() {
       int k, count = 0;
       for (k = 1; k <= 20; k++) {
           if (judge(k))
               count++;
       }
       printf("From 1 to 20, there are %d numbers.", count);
       return 0;
   }
   ```

   <details>
   <summary>参考答案</summary>

   judge 函数的作用是判断一个数 `n` 是否满足：`n` 的所有非 `n` 的因数的和是否等于 `n`。

   于是在 1 ~ 20 中仅有 6 满足以上条件。

   输出：

   ```
   6
   From 1 to 20, there are 1 numbers.
   ```
   </details>

## 四、算法设计及编程题（共 40 分）

1. 猴子吃桃问题。（10 分）
   
   **【问题描述】** 猴子第一天摘下若干个桃子，当即吃了一半，还不过瘾，又多吃了一个；第二天早上又将剩下的桃子吃掉一半，又多吃了一个。以后每天早上都吃了前一天剩下的一半零一个。到第 10 天早上想再吃时，见只剩下一个桃子了。求第一天共摘了多少个？画流程图，编程求解。

   <details>
   <summary>参考答案</summary>

   
   </details>
