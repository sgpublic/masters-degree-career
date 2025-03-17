# 6.14 求两个矩阵之和、之积

```cpp
class Matrix {
private:
    int width, height, total, *val;
public:
    Matrix(int width, int height, int *val) {
        this->width = width;
        this->height = height;
        this->total = width * height;
        this->val = new int[this->total];
        for (int i = 0; i < this->total; ++i) {
            this->val[i] = val[i];
        }
    }

    ~Matrix() {
        delete[] val;
    }

    int get(int row, int col) {
        return val[width * row + col];
    }

    Matrix operator +(Matrix& other) {
        Matrix result = Matrix(width, height, (int*) calloc(width * height, sizeof(int)));
        for (int index = 0; index < total; index++) {
            result.val[index] = this->val[index] + other.val[index];
        }
        return result;
    }

    long operator *(Matrix& other) {
        int result = 0;
        for (int row = 0; row < this->height; row++) {
            for (int col = 0; col < this->width; col++) {
                result += this->get(row, col) * other.get(col, height);
            }
        }
        return result;
    }
};
```