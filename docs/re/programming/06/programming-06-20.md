# 6.20 连续子数组最大乘积

例题：[152. 乘积最大子数组 - 力扣（LeetCode）](https://leetcode.cn/problems/maximum-product-subarray/)

老规矩，先考虑暴力。

根据题目要求，数组元素的范围为 $[-10, 10]$，当某个子数组存在数字 0 时，此子数组的乘积就只能为 0 了，于是考虑用元素 0 分割整个数组，记录每个子数组成绩中的最大值即可。

```cpp
#include <iostream>
#include <cstring>
#include <cmath>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxProduct(vector<int>& nums) {
        if (nums.size() == 1) {
            return nums[0];
        }

        vector<int> tmp;
        int result = INT_MIN;
        bool no_0 = false;
        for (int& num : nums) {
            if (num != 0) {
                tmp.push_back(num);
                no_0 = true;
                continue;
            }
            if (tmp.empty()) {
                continue;
            }
            result = max(result, subMaxProduct(tmp));
            tmp.clear();
        }
        if (no_0) {
            result = subMaxProduct(nums);
        }
        return result;
    }

private:
    int subMaxProduct(vector<int>& nums) {
        int result = INT_MIN, tmp;
        for (int i = 0; i < nums.size(); ++i) {
            tmp = 1;
            for (int j = i; j < nums.size(); ++j) {
                tmp *= nums[j];
                result = max(result, tmp);
            }
        }
        return result;
    }
};
```

对于稍大一点的数据规模，上述方法就会超时，考虑使用动态规划。

```cpp
// TODO
```