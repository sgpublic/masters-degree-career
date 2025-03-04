# 2.2.2 关系和逻辑的运算符和表达式

各种运算符优先级从高到底依次为：

1. `!`（非）
2. 算数运算符
3. 关系运算符
4. `&&`（与）
5. `||`（或）
6. 赋值运算符

## 2.2.2.1 逻辑运算符和表达式

C 语言是没有 bool 类型的，在判断逻辑运算结果的时候，0 为 false，非 0 为 true。

要注意的是 `&&` 先于 `||` 计算，若先计算 `||` 可能会出现不同的结果，例如：

```c
#include <stdio.h>

int main() {
    int a = 1, b = 0, c = 0;
    int r1 = a || b && c;
    int r2 = (a || b) && c;
    printf("r1: %d, r2: %d\n", r1, r2);
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
r1: 1, r2: 0

Process finished with exit code 0
```

此外，逻辑运算表达式还存在**短路效应**，即当一个逻辑表达式的左边就能确定整个表达式的值得时候，就会停止表达式右边值的计算。

例如：

```c
#include <stdio.h>

int main() {
    int a = 0, b = 1, c = 1;
    int result = b && c || ++a;
    printf("result: %d, a: %d\n", result, a);
    return 0;
}
```

由于 `&&` 优先级高于 `||`，并且 `b && c` 的结果为 true，因此无论 `a++` 取值为多少，`result` 的结果都为 true，因此就会停止 `a++` 的计算直接返回 true。于是运算结束时 `a` 的值不会改变：

```
/Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
result: 1, a: 0

Process finished with exit code 0
```

## 2.2.2.2 关系运算符和表达式

关系运算符计算优先级如下所示：

<table>

<tr>
<th>优先级</th>
<th>运算符</th>
</tr>

<tr>
<td rowSpan="4">相同优先级（高）</td>
<td>`<`</td>
</tr>

<tr>
<td>`<=`</td>
</tr>

<tr>
<td>`>`</td>
</tr>

<tr>
<td>`>=`</td>
</tr>

<tr>
<td rowSpan="2">相同优先级（低）</td>
<td>`==`</td>
</tr>

<tr>
<td>`!=`</td>
</tr>

</table>

例如 `a <= b == c`，就是先计算 `a <= b`，得到 0 或 1 的值，再与 `c` 对比。
