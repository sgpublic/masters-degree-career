# 6.8 求两个数的最大公因数和最小公倍数

求最大公约数方法为辗转相除法。

```cpp title='递归法'
unsigned int gcd(unsigned int a, unsigned int b) {
    return b == 0 ? a : gcd(b, a % b);
}
```

```cpp title='循环法'
unsigned int gcd(unsigned int a, unsigned int b) {
    unsigned int tmp;
    while (b != 0) {
        tmp = a;
        a = b;
        b = tmp % b;
    }
    return a;
}
```

最小公倍数满足公式：

$$
lcm(a, b)=\frac{|a \times b|}{gcd(a, b)}
$$

```cpp
unsigned long long lcm(unsigned int a, unsigned int b) {
    unsigned long long times = (long long) a * b;
    return times / gcd(a, b);
}
```