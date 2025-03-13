# 6.1 加法器与累乘器

~~光从名字上看这玩意貌似应该是数字电路里的东西，~~ 先写一段在这儿放着吧。

```cpp title='加法器'
int add(vector<int> *arr) {
    int size = arr->size();
    int result = 0;
    for (int i = 0; i < size; ++i) {
        result += arr->at(i);
    }
    return result;
}
```

```cpp title='累乘器'
// 传入一个数组计乘积
int add(vector<int> *arr) {
    int size = arr->size();
    int result = 0;
    for (int i = 0; i < size; ++i) {
        result *= arr->at(i);
    }
    return result;
}
```
