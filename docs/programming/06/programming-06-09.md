# 6.9 求菲比拉契数列有限项

```cpp
void fib(vector<int>& save, int count) {
    for (int index = 0; index < count; ++index) {
        if (index < 2) {
            save.push_back(1);
            continue;
        }
        save.push_back(save[index - 2] + save[index - 1]);
    }
}
```