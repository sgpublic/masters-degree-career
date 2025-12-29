# 6.16 最近点对问题

本考点的本质是**分治**。

例题：[P1257 平面上的最接近点对 - 浴谷](https://www.luogu.com.cn/problem/P1257)

~~考场上哪有那么多时间思考，直接暴力得了。~~

首先考虑暴力解法，每输入下一个点的时候，都计算与已输入的每一个点的距离，保存最小距离最后输出即可。

```cpp
#include <iostream>
#include <cmath>
using namespace std;

unsigned long pow2(int num) {
    return (long) num * num;
}

int main() {
    int n;
    cin >> n;
    int points[n][2];
    unsigned long current_distance, min_distance = 0;
    for (int point_index = 0; point_index < n; ++point_index) {
        cin >> points[point_index][0] >> points[point_index][1];
        if (point_index > 0) {
            for (int calculate_index = 0; calculate_index < point_index; ++calculate_index) {
                current_distance = pow2(points[point_index][0] - points[calculate_index][0]) +
                        pow2(points[point_index][1] - points[calculate_index][1]);
                if (current_distance < min_distance || min_distance <= 0) {
                    min_distance = current_distance;
                }
            }
        }
    }
    printf("%.4f\n", sqrt(min_distance));
}
```

面对较小数据量时，暴力确实可解，但数据量稍大一点的时候就不行了。于是考虑分治。

例题：[P1429 平面最近点对（加强版） - 浴谷](https://www.luogu.com.cn/problem/P1429)

```cpp
// TODO
```