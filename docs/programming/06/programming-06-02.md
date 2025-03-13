# 6.2 求最大数与最小数

```cpp title='求最大值'
int max(vector<int> *arr) {
    int size = arr->size();
    int result = arr->at(0);
    for (int i = 1; i < size; ++i) {
        if (arr->at(i) > result) {
            result = arr->at(i);
        }
    }
    return result;
}
```

```cpp title='求最小值'
int max(vector<int> *arr) {
    int size = arr->size();
    int result = arr->at(0);
    for (int i = 1; i < size; ++i) {
        if (arr->at(i) < result) {
            result = arr->at(i);
        }
    }
    return result;
}
```
