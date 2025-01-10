# 1.5 链表

利用结构体，可实现链表。

链表的精髓在于每个节点会存放下一个元素的指针，使其无需分配连续的内存空间，也能实现数组形式的数据结构。

节点代码示例如下：

```c
struct _LinkedListNode {
    int value;
    struct _LinkedListNode* next;
};
```

<details>
<summary>完整代码</summary>

利用函数指针，可实现较为完整的 LinkedList。

```c
#include <stdlib.h>
#include "stdio.h"

#define _LinkedListNode_Size sizeof(struct _LinkedListNode)
struct _LinkedListNode {
    int value;
    struct _LinkedListNode* next;
    void (*_free)(struct _LinkedListNode* this);
};

void _LinkedListNode_free(struct _LinkedListNode* this) {
    if (this->next != NULL) {
        this->next->_free(this->next);
    }
    free(this);
}

struct _LinkedListNode* _new_LinkedListNode(int value) {
    struct _LinkedListNode* node = (struct _LinkedListNode*)malloc(_LinkedListNode_Size);
    node->value = value;
    node->next = NULL;
    node->_free = _LinkedListNode_free;
    return node;
}

struct LinkedList {
    int _size;
    struct _LinkedListNode *_head;
    struct _LinkedListNode *_last;
    int (*size)(struct LinkedList *this);
    void (*add)(struct LinkedList *this, int value);
    int (*get)(struct LinkedList *this, int index);
    void (*_free)(struct LinkedList *this);
};

int LinkedList_size(struct LinkedList *this) {
    return this->_size;
}

void LinkedList_add(struct LinkedList *this, int value) {
    struct _LinkedListNode* node = _new_LinkedListNode(value);
    if (this->_size == 0) {
        this->_head = node;
        this->_last = node;
    } else {
        struct _LinkedListNode *last = this->_last;
        last->next = node;
        this->_last = node;
    }
    this->_size += 1;
}

int LinkedList_get(struct LinkedList *this, int index) {
    struct _LinkedListNode *current = this->_head;
    for (int i = 0; i < index; ++i) {
        current = current->next;
    }
    return current->value;
}

void _LinkedList_free(struct LinkedList *this) {
    struct _LinkedListNode *head = this->_head;
    if (head != NULL) {
        head->_free(head);
    }
}

struct LinkedList new_LinkedList() {
    struct LinkedList list = {
            ._size = 0,
            ._head = NULL,
            ._last = NULL,
            .size = LinkedList_size,
            .add = LinkedList_add,
            .get = LinkedList_get,
            ._free = _LinkedList_free,
    };
    return list;
}

int main() {
    struct LinkedList linkedList = new_LinkedList();

    linkedList.add(&linkedList, 1);
    linkedList.add(&linkedList, 1);
    linkedList.add(&linkedList, 4);
    linkedList.add(&linkedList, 5);
    linkedList.add(&linkedList, 1);
    linkedList.add(&linkedList, 4);

    int size = linkedList.size(&linkedList);
    printf("链表的长度为：%d\n", size);
    for (int i = 0; i < size; ++i) {
        printf("链表的第 %d 个元素为：%d\n", i + 1, linkedList.get(&linkedList, i));
    }

    linkedList._free(&linkedList);

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
链表的长度为：6
链表的第 1 个元素为：1
链表的第 2 个元素为：1
链表的第 3 个元素为：4
链表的第 4 个元素为：5
链表的第 5 个元素为：1
链表的第 6 个元素为：4

Process finished with exit code 0
```

</details>