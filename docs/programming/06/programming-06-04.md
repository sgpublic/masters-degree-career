# 6.4 大小写字母转换

```cpp title='转小写：'
void lower(string& s) {
    int index = 0;
    while (s[index] != '\0') {
        if (s[index] >= 'a' && s[index] <= 'z') {
            s[index] += 'A' - 'a';
        }
        index += 1;
    }
}
```

```cpp title='转大写：'
void upper(string& s) {
    int index = 0;
    while (s[index] != '\0') {
        if (s[index] >= 'A' && s[index] <= 'Z') {
            s[index] -= 'A' - 'a';
        }
        index += 1;
    }
}
```