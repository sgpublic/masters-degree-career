# 6.5 判别键盘输入字符的类别

```cpp
enum CharType {
    TYPE_NUMBER,
    TYPE_LOWER_LETTER,
    TYPE_UPPER_LETTER,
    TYPE_CONTROL,
    TYPE_OTHER,
};

CharType check_type(char c) {
    if (c < 32) {
        return TYPE_CONTROL;
    } else if (c >= '0' && c <= '9') {
        return TYPE_NUMBER;
    } else if (c >= 'a' && c <= 'z') {
        return TYPE_LOWER_LETTER;
    } else if (c >= 'A' && c <= 'Z') {
        return TYPE_UPPER_LETTER;
    } else {
        return TYPE_OTHER;
    }
}
```