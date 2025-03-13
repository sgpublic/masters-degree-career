# 6.3 排序

排序题可在 [912. 排序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/sort-an-array/description/) 练习。

## 6.3.1 冒泡排序

每次遍历的时候，根据排序要求（比如升序和降序）交换邻的位置的元素，直到此次遍历没有交换元素。

时间复杂度：$O(n^2)$

```cpp
void bubbleSort(vector<int> *nums) {
    bool has_modify;
    int size = nums->size(), tmp;
    do {
        has_modify = false;
        for (int i = 1; i < size; ++i) {
            if (nums[i - 1] > nums[i]) {
                tmp = nums->at(i - 1);
                nums->at(i - 1) = nums->at(i);
                nums->at(i) = tmp;
                has_modify = true;
            }
        }
    } while (has_modify);
}
```