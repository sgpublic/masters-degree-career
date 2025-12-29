# 6.15 统计输入字符中的单词个数

例题：[434. 字符串中的单词数 - 力扣（LeetCode）](https://leetcode.cn/problems/number-of-segments-in-a-string/description/)

```cpp
#include <iostream>
using namespace std;

int countSegments(string s);

int main() {
    string s;
    getline(cin, s);
    cout << countSegments(s);
}

int countSegments(string s) {
    int index = 0, result = 0;
    while (index < s.size() && s[index] != '\0') {
        while (s[index] == ' ') {
            index += 1;
        }
        if (s[index] != ' ') {
            result += 1;
            while (s[index] != ' ') {
                index += 1;
            }
        }
    }
    return result;
}
```