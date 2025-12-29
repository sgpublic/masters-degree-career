# 6.19 最长公共子序列

本考点本质是**动态规划**。

例题：[1143. 最长公共子序列 - 力扣（LeetCode）](https://leetcode.cn/problems/longest-common-subsequence/)

此题不太好直接考虑暴力解法，考虑使用动态规划解决。具体的：

1. 考虑 `dp[i][j]` 为 `text1` 的前 `i` 个字符与 `text2` 的前 `j` 个字符的最长公共子序列。
2. 那么就有状态转移方程：

   + 若 `text1[i - 1] == text2[j - 1]`：`dp[i][j] = dp[i - 1][j - 1] + 1`
   + 若 `text1[i - 1] != text2[j - 1]`：`dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])`
3. 最后 `dp[text1.size()][text2.size()]` 即为结果。

```cpp
class Solution {
public:
   int longestCommonSubsequence(string text1, string text2) {
       int dp[text1.size() + 1][text2.size() + 1];
       memset(dp, 0, sizeof(dp));
   
       for (int i = 1; i <= text1.size(); ++i) {
           for (int j = 1; j <= text2.size(); ++j) {
               if (text1[i - 1] == text2[j - 1]) {
                   dp[i][j] = dp[i - 1][j - 1] + 1;
               } else {
                   dp[i][j] = max(dp[i][j - 1], dp[i - 1][j]);
               }
           }
       }
   
       return dp[text1.size()][text2.size()];
   }
};
```