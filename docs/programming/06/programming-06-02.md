# 6.2 求最大数与最小数

```cpp title='求最大值：'
int max(int *arr, int size) {
    int result = arr[0];
    for (int i = 1; i < size; ++i) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}
```

```cpp title='求最小值：'
int max(int *arr, int size) {
    int result = arr[0];
    for (int i = 1; i < size; ++i) {
        if (arr[i] < result) {
            result = arr[i];
        }
    }
    return result;
}
```
