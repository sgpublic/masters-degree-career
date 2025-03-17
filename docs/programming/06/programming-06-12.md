# 6.12 用穷举法求某数段的素数、水仙花数、完全平方数等

## 6.12.1 素数

见 [6.11 验证哥德巴赫猜想](programming-06-11.md)。

## 6.12.2 水仙花数

一个 $n$ 位整数 $d$ 各位上的数字为 $d_i$，若满足一下公式：

$$
d=d_1^n+d_2^n+...+d_n^n
$$

则称为水仙花数。

例如：

$$
153=1^3+5^3+3^3
$$

```cpp
bool is_shuixianhua(int num) {
    vector<int> bits;
    int tmp = num;
    while (tmp > 0) {
        bits.push_back(tmp % 10);
        tmp /= 10;
    }
    tmp = 0;
    for (int bit : bits) {
        tmp += pow(bit, bits.size());
    }
    return tmp == num;
}
```

## 6.12.3 完全平方数

```cpp
bool is_pow(int num) {
    double pow = sqrt(num);
    return pow == (int) pow;
}
```