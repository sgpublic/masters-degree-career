# 6.18 多机调度问题

本考点本质是**贪心**。

多机调度问题描述如下：

设有 $n$ 个独立的作业，由 $m$ 台相同的机器进行加工处理。作业 $i$ 所需的处理时间为 $t_i$。任何作业可以在任何一台机器上面加工处理，但未完工之前不允许中断处理。任何作业不能拆分成更小的作业。要求给出一种作业调度方案，使所给的 $n$ 个作业在尽可能短的时间内由 $m$ 台机器加工处理完成。

此题核心思路是，任务分配按时间从长到短的顺序分配，分配给最早结束手上任务的机器。

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    int t[n], w[m];
    memset(w, 0, sizeof(w));
    for (int i = 0; i < n; ++i) {
        cin >> t[i];
    }

    // 将数组排序
    sort(&t[0], &t[n]);

    int min_index;
    // 按任务时长从长到短分配
    for (int i = n - 1; i >= 0; --i) {
        min_index = 0;
        for (int j = 0; j < m; ++j) {
            // 每次分配给最早空闲的机器
            if (w[j] < min_index) {
                min_index = j;
            }
        }
        w[min_index] += t[i];
    }

    int result = 0;
    for (int i = 0; i < n; ++i) {
        // 最晚完成任务的机器工作时长即为结果
        result = max(result, w[i]);
    }
    cout << result << endl;
}
```