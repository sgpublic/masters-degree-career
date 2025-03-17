# 6.11 验证哥德巴赫猜想

即：任一大于2的偶数都可写成两个质数之和。

```cpp
#include <iostream>
using namespace std;

unordered_map<int, bool> cache;

bool check_sushu(int num);
bool is_sushu(int num);

int main() {
    int check;
    while (true) {
        cin >> check;
        if (check < 0) {
            break;
        }
        if (check % 2 != 0) {
            cout << "请输入偶数！" << endl;
            continue;
        }

        int max = check / 2;
        for (int i = 2; i < max; ++i) {
            if (is_sushu(i) && is_sushu(check - i)) {
                cout << check << " = " << i << " + " << (check - i) << endl;
                goto input;
            }
        }
        cout << "猜想错误" << endl;
        input:;
    }
}

bool check_sushu(int num) {
    if (num == 2 || num == 3) {
        return true;
    }

    int mod = num % 6;
    if (mod != 1 && mod != 5) {
        return false;
    }

    for (int i = 2; i < sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

bool is_sushu(int num) {
    auto tmp = cache.find(num);
    if (tmp != cache.end()) {
        return tmp->second;
    }
    bool result = check_sushu(num);
    cache[num] = result;
    return result;
}
```