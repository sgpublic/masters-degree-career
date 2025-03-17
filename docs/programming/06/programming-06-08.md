# 6.8 求两个数的最大公因数和最小公倍数

求最大公约数方法为辗转相除法。

最小公倍数满足公式：

$$
lcm(a, b)=\frac{|a \times b|}{gcd(a, b)}
$$

```cpp
// 最大公约数
unsigned int gcd(unsigned int a, unsigned int b) {
    return b == 0 ? a : gcd(b, a % b);
}

// 最小公倍数
unsigned long long lcm(unsigned int a, unsigned int b) {
    unsigned long long times = (long long) a * b;
    return times / gcd(a, b);
}
```
