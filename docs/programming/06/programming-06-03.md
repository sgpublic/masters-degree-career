# 6.3 排序

排序题可在 [912. 排序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/sort-an-array/description/) 练习。

以下代码均认为将数组按升序排列。

## 6.3.1 冒泡排序

每次遍历的时候，比较相邻位置的元素，若后面的元素大于前面的元素，则交换两个元素，直到此次遍历没有交换元素。具体的：

1. 每次都从第 `2` 个元素开始遍历数组；
2. 遍历到第 `i` 个元素时，比较其与第 `i-1` 个元素的大小，若后者大于前者，则交换两个元素；
3. 当此次遍历没有交换元素时，停止遍历。

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

## 6.3.2 选择排序

每次遍历的时候，提取第 `k` 小的元素与第 `k` 个元素交换。具体的：

1. 每次遍历从第 `i` 个元素开始遍历（`i` 为索引，从 0 开始）；
2. 找到第 `i` 个元素开始最小的元素，记录其索引；
3. 将第 `i` 个元素开始最小的元素与第 `i` 个元素交换。

时间复杂度：$O(n^2)$

```cpp
void selectSort(vector<int>& nums) {
    int current_min, current_min_index;
    for (int left = 0; left < nums.size(); ++left) {
        current_min = nums[left];
        current_min_index = left;
        for (int index = left + 1; index < nums.size(); ++index) {
            if (nums[index] < current_min) {
                current_min = nums[index];
                current_min_index = index;
            }
        }
        nums[current_min_index] = nums[left];
        nums[left] = current_min;
    }
}
```

## 6.3.3 插入排序

将元素划分为“已排序”和“未排序”两部分，每次从未排序部分取出一个元素，插入已排序部分。具体的：

1. 每次遍历时从第 `selected_index` 个元素开始（`selected_index` 为索引，从 1 开始）；
2. 将数组索引 `0` ~ `selected_index - 1` 个元素视为已排序部分，其余视为未排序部分；
3. 从索引为 `selected_index - 1` 的元素开始向前遍历，依次与第 `selected_index` 个元素比较，若大于则向后移动一个位置，否则直接将当前索引设置为第 `selected_index` 个元素。

时间复杂度：$O(n^2)$

```cpp
void insertSort(vector<int>& nums) {
    int selected_val, insert_index;
    for (int selected_index = 1; selected_index < nums.size(); ++selected_index) {
        selected_val = nums[selected_index];
        insert_index = selected_index;
        while (insert_index > 0 && nums[insert_index - 1] >= selected_val) {
            nums[insert_index] = nums[insert_index - 1];
            insert_index -= 1;
        }
        nums[insert_index] = selected_val;
    }
}
```

## 6.3.4 希尔排序

