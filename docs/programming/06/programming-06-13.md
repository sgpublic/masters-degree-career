# 6.13 求近似数

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

