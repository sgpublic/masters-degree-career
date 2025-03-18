# 6.17 背包问题

本考点本质是**记忆化搜索**。

例题：[2. 01背包问题 - AcWing题库](https://www.acwing.com/problem/content/2/)

老规矩，先写暴力解法，即对每件物品选与不选进行递归，返回价值大的情况。

时间复杂度：$O(2^n)$

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

int search(int *v, int *w, int i, int current_v, int& V, int& N);

int main() {
    int N, V;
    cin >> N >> V;
    int v[N]; //体积
    int w[N]; //价值
    for (int i = 0; i < N; ++i) {
        cin >> v[i] >> w[i];
    }
    int max_w = search(v, w, 0, 0, V, N);
    cout << max_w << endl;
}

/**
 * 使用递归的方式进行暴力搜索
 *
 * @param v 所有物品的体积
 * @param w 所有物品的价值
 * @param i 当前选到第 i 件物品
 * @param current_v 当前已选物品的总体积
 * @param V 背包容积
 * @param N 物品数量
 * @return 选到第 i 件物品时，在满足总体积不超过背包容积的情况下，能取得的最大价值
 */
int search(int *v, int *w, int i, int current_v, int& V, int& N) {
    if (i + 1 > N) {
        return 0;
    }

    int on = 0, next_v = current_v + v[i];
    if (next_v <= V) {
        // 当第 i 件物品放入后总体积仍不超过背包容量时，此物品可以放入
        on = w[i] + search(v, w, i + 1, next_v, V, N);
    }
    int off = search(v, w, i + 1, current_v, V, N);
    return max(on, off);
}
```

显然，上述解法并不适用于例题中所给的数据规模，可使用动态规划解决。具体的：

1. 考虑 `dp[i][j]` 为，前 `i` 个物品已选物品体积为 `j` 时，最大价值为多少。
2. 那么就有状态转移方程：

   + 不选第 `i` 件物品：`dp[i][j] = dp[i - 1][j];`
   + 选第 `i` 件物品：`dp[i][j] = w[i] + dp[i - 1][j - v[i]];`

   取上述两种情况的最大值。
3. 最后从 `dp[N][0 ~ V]` 中取最大值。

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

int main() {
    int N /*物品数量*/, V/*背包容量*/;
    cin >> N >> V;
    int v[N] /*体积*/, w[N] /*价值*/;
    for (int i = 0; i < N; ++i) {
        cin >> v[i] >> w[i];
    }
    int dp[N + 1][V];
    memset(dp, 0, sizeof(dp));
    for (int i = 1; i <= N; ++i) {
        for (int j = 0; j <= V; ++j) {
            if (j >= v[i]) {
                dp[i][j] = max(
                    dp[i - 1][j], // 不选第 i 个物品
                    dp[i - 1][j - v[i]] + w[i] // 选第 i 个物品
                );
            }
        }
    }
    int result = 0;
    for (int i = 0; i < V; ++i) {
        result = max(dp[N][i], result);
    }
    cout << result << endl;
}
```

<details>
<summary>DLC（记忆化搜索）</summary>

考虑到递归搜索的时候，出现重复搜索的情况。

例如，当背包剩余容积为 10 的时候，还剩 3 件物品可选，体积依次为：1、4、5，选择和不选择 1 的时候，两个分支下面都有选择和不选择 4。

于是考虑加上记忆化搜索，提交后也能 AC。完整代码如下：

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

int search(int *v, int *w, int i, int current_v, int& V, int& N);

int main() {
    int N, V;
    cin >> N >> V;
    int v[N]; //体积
    int w[N]; //价值
    for (int i = 0; i < N; ++i) {
        cin >> v[i] >> w[i];
    }
    int max_w = search(v, w, 0, 0, V, N);
    cout << max_w << endl;
}

int mem[1010][1010];

/**
 * 使用递归的方式进行暴力搜索
 *
 * @param v 所有物品的体积
 * @param w 所有物品的价值
 * @param i 当前选到第 i 件物品
 * @param current_v 当前已选物品的总体积
 * @param V 背包容积
 * @param N 物品数量
 * @return 选到第 i 件物品时，在满足总体积不超过背包容积的情况下，能取得的最大价值
 */
int search(int *v, int *w, int i, int current_v, int& V, int& N) {
    if (i + 1 > N) {
        return 0;
    }

    if (mem[i][current_v] > 0) {
        return mem[i][current_v];
    }
    int on = 0, next_v = current_v + v[i];
    if (next_v <= V) {
        // 当第 i 件物品放入后总体积仍不超过背包容量时，此物品可以放入
        on = w[i] + search(v, w, i + 1, next_v, V, N);
    }
    int off = search(v, w, i + 1, current_v, V, N);
    int result = max(on, off);
    mem[i][current_v] = result;
    return result;
}
```

</details>