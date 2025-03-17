# 6.3 排序

排序题可在 [912. 排序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/sort-an-array/description/) 练习。

十种经典排序算法复杂度如下表：

<table>

<tr>
<th rowspan="2"></th>
<th colspan="3">时间复杂度</th>
<th rowspan="2">空间复杂度</th>
</tr>

<tr>
<th>平均</th>
<th>最好情况</th>
<th>最坏情况</th>
</tr>

<tr>
<td>冒泡排序</td>
<td>$O(n^2)$</td>
<td>$O(n)$</td>
<td>$O(n^2)$</td>
<td>$O(1)$</td>
</tr>

<tr>
<td>选择排序</td>
<td>$O(n^2)$</td>
<td>$O(n^2)$</td>
<td>$O(n^2)$</td>
<td>$O(1)$</td>
</tr>

<tr>
<td>插入排序</td>
<td>$O(n^2)$</td>
<td>$O(n)$</td>
<td>$O(n^2)$</td>
<td>$O(1)$</td>
</tr>

<tr>
<td>希尔排序</td>
<td>$O(n\log{(n)})$</td>
<td>$O(n\log^2{(n)})$</td>
<td>$O(n\log^2{(n)})$</td>
<td>$O(1)$</td>
</tr>

<tr>
<td>归并排序</td>
<td>$O(n\log{(n)})$</td>
<td>$O(n\log{(n)})$</td>
<td>$O(n\log{(n)})$</td>
<td>$O(n)$</td>
</tr>

<tr>
<td>快速排序</td>
<td>$O(n\log{(n)})$</td>
<td>$O(n\log{(n)})$</td>
<td>$O(n^2)$</td>
<td>$O(\log{(n)})$</td>
</tr>

<tr>
<td>堆排序</td>
<td>$O(n\log{(n)})$</td>
<td>$O(n\log{(n)})$</td>
<td>$O(n\log{(n)})$</td>
<td>$O(1)$</td>
</tr>

<tr>
<td>计数排序</td>
<td>$O(n + k)$</td>
<td>$O(n + k)$</td>
<td>$O(n + k)$</td>
<td>$O(k)$</td>
</tr>

<tr>
<td>桶排序</td>
<td>$O(n + k)$</td>
<td>$O(n + k)$</td>
<td>$O(n^2)$</td>
<td>$O(n + k)$</td>
</tr>

<tr>
<td>基数排序</td>
<td>$O(n \times k)$</td>
<td>$O(n \times k)$</td>
<td>$O(n \times k)$</td>
<td>$O(n + k)$</td>
</tr>

</table>

以下代码均认为将数组按升序排列。

## 6.3.1 冒泡排序

每次遍历的时候，比较相邻位置的元素，若后面的元素大于前面的元素，则交换两个元素，直到此次遍历没有交换元素。具体的：

1. 每次都从第 `2` 个元素开始遍历数组；
2. 遍历到第 `i` 个元素时，比较其与第 `i-1` 个元素的大小，若后者大于前者，则交换两个元素；
3. 当此次遍历没有交换元素时，停止遍历。

```cpp
void bubbleSort(vector<int> *nums) {
    bool has_modify;
    int size = nums->size();
    do {
        has_modify = false;
        for (int i = 1; i < size; ++i) {
            if (nums[i - 1] > nums[i]) {
                swap(nums[i], nums[i - 1]);
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

### 6.3.3.1 希尔排序

推荐视频：[三分钟认识希尔排序 - bilibili](https://www.bilibili.com/video/BV1fh4y1S7oD)

希尔排序的本质是插入排序，但希尔排序通过分组多次排序的方式，逐渐排序整个序列，以实现低于 $O(n^2)$ 的复杂度排序。具体的：

1. 每次排序使用的元素间隔 `i` 个元素（初始为 `length / 2`，每次排序间隔再除以 2，直到为 1）
2. 此次排序使用插入排序。

```cpp
void shellSort(vector<int>& nums) {
    int selected_val, insert_index;
    for (int gap = nums.size() / 2; gap > 0; gap /= 2) {
        // 外面选定步长之后里面就是和插入排序一模一样了，原版插入排序就是步长为 1 的希尔排序
        for (int selected_index = gap; selected_index < nums.size(); ++selected_index) {
            selected_val = nums[selected_index];
            insert_index = selected_index;
            while (insert_index > gap - 1 && nums[insert_index - gap] >= selected_val) {
                nums[insert_index] = nums[insert_index - gap];
                insert_index -= gap;
            }
            nums[insert_index] = selected_val;
        }
    }
}
```

## 6.3.4 归并排序



## 6.3.5 快速排序

选取一个基准元素，将比基准元素大的元素排在基准元素右边，比基准元素小的元素排在左边，然后用基准元素所在位置将序列分为两个子序列，并对两个子序列进行递归排序。具体的：

1. 选取一个基准元素，此处直接使用序列第 1 个元素；
2. 使用两个指针 `pl` 和 `pr`，分别指向序列第 1 个元素和最后一个元素；
3. 循环维护这两个指针，直到 `pl` 和 `pr` 重合为 `pc`：

    + 从 `pr` 开始，向左移动 `pr` 将找到第一个比基准元素小的数，直到和 `pl` 重合。
    + 从 `pl` 开始，向右移动 `pl` 将找到第一个比基准元素大的数，直到和 `pr` 重合。

   若此时 `pl` 和 `pr` 仍不重合，则交换 `pl` 和 `pr`。
4. 经过步骤 3 后，`pc` 左边的是比基准元素小的元素，右边的是比基准元素大的元素，于是最后交换基准元素和 `pc`。
5. 将序列中 `pc` 左边和右边的元素视为两个子序列，对两个子序列再次使用快速排序。

```cpp
void quickSort(vector<int>& nums) {
    quickSort(nums, 0, nums.size() - 1);
}

void quickSort(vector<int>& nums, int left, int right) {
    if (left >= right) {
        return;
    }
    int pl = left, pr = right;
    while (pl < pr) {
        while (pr > pl && nums[pr] >= nums[left]) {
            pr -= 1;
        }
        while (pr > pl && nums[pl] <= nums[left]) {
            pl += 1;
        }
        if (pr > pl) {
            swap(nums[pr], nums[pl]);
        }
    }
    swap(nums[left], nums[pl]);
    quickSort(nums, left, pl - 1);
    quickSort(nums, pr + 1, right);
}
```

## 6.3.6 堆排序


## 6.3.7 计数排序


## 6.3.8 桶排序


## 6.3.9 基数排序