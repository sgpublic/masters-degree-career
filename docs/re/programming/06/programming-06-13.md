# 6.13 求近似数（如定积分、用牛顿迭代法或二分法或弦截法求多元方程的根）

## 6.13.1 定积分

使用定积分定义。

```cpp
#include <iostream>
using namespace std;

double f(double x) {
    return x * x;
}

double sum(double left, double right);

int main() {
    int left, right;
    cin >> left >> right;
    cout << sum(left, right);
}

double sum(double left, double right) {
    int h = (int)((right - left) * 100);
    double tmp = left, w = (right - left) / h, result = 0;
    while (tmp < right) {
        result += f(tmp) * w;
        tmp += w;
    }
    return result;
}
```

## 6.13.2 求多元方程的根

题目一般会将方程直接给出来，也就是说可以把方程硬编码在代码里。

由于计算的是近似值，而不是真实值，并且不能永远计算下去，因此通常人为设定一个精度（通常设定为 $10^6$），当根变化幅度小于预设精度时，则停止计算，返回结果。

### 6.13.2.1 牛顿迭代法

牛顿迭代公式如下：

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}
$$

（《教材》第5章 习题14.）例题：用牛顿迭代法求下面方程在 $1.5$ 附近的根。

$$
2x^3-4x^2+3x-6=0
$$

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

double f_(double x) {
    return pow(x, 2) * 6 - x * 8 + 3;
}

double f(double x) {
    return pow(x, 3) * 2 - pow(x, 2) * 4 + x * 3 - 6;
}

#define ACCURACY 0.000001

double newton(double x) {
    double sub;
    while (true) {
        sub = f(x) / f_(x);
        if (abs(sub) < ACCURACY) {
            return x;
        }
        x = x - sub;
    }
}

int main() {
    cout << newton(1.5) << endl;
}
```

### 6.13.2.2 二分法

使用二分法需注意，二分法的目标是在预设区间内寻找方程的根，需保证区间内方程仅有一个根。

（《教材》第5章 习题15.）例题：用二分法求下面方程在区间 $[-10,\ 10]$ 的根。

$$
2x^3-4x^2+3x-6=0
$$

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

double f(double x) {
    return pow(x, 3) * 2 - pow(x, 2) * 4 + x * 3 - 6;
}

#define ACCURACY 0.000001

double binary_search(double left, double right) {
    if (right - left < ACCURACY) {
        return (left + right) / 2;
    }
    // 假定函数在区间内只有一个根
    const int flag = f(left) < 0 ? 1 : -1;
    double center;
    while (right - left > ACCURACY) {
        center = (left + right) / 2;
        if (f(center) * flag > 0) {
            right = center;
        } else {
            left = center;
        }
    }
    return center;
}

int main() {
    cout << binary_search(-10, 10) << endl;
}
```

### 6.13.2.3 弦截法

将牛顿迭代法中的 $f'(x_n)$ 替换为 $\frac{f(x_n) - f(x_{n-1})}{x_n - x_{n-1}}$ 即可。即：

$$
x_{n+1}=x_n-f(x_n)\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}
$$

例题：用弦截法求下面方程在区间 $[-10,\ 10]$ 的根。

$$
2x^3-4x^2+3x-6=0
$$

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

double f(double x) {
    return pow(x, 3) * 2 - pow(x, 2) * 4 + x * 3 - 6;
}

#define ACCURACY 0.000001

double secant(double x_1, double x_0) {
    double sub;
    while (true) {
        sub = f(x_1) / ((f(x_1) - f(x_0)) / (x_1 - x_0));
        if (abs(sub) < ACCURACY) {
            return x_1;
        }
        x_0 = x_1;
        x_1 = x_1 - sub;
    }
}

int main() {
    cout << secant(-10, 10) << endl;
}
```