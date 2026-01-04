# 5.3.2 最小函数依赖集

## 5.3.2.1 闭包

若 $A$ 能在依赖关系 $F$ 下推导出 $B$，则 $B$ 是 $A$ 关于 $F$ 的闭包，记作：$(A)_{F}^{+}=B$，

计算方法如下，若求 $(U)_{F}^{+}$，其中 $U=AB$：

1. 令 $X_0=AB$。
2. 在依赖关系 $F$ 中寻找左边是 $A$、$B$ 或 $AB$ 的关系，把右边并起来，令为 $X_1$。
3. 若 $X_1=U$，或 $X_1=X_0$，则 $(U)_{F}^{+}=X_1$；否则令 $X_0=X_1$，重复步骤 2。

例题：

1. 已知关系 $R(A,B,C,D,E,G)$ 满足函数依赖关系：
   $$
   F=\{AB \rightarrow C,\ D \rightarrow EG,\ C \rightarrow A,\ BE \rightarrow C,\ BC \rightarrow D,\ CG \rightarrow BD,\ ACD \rightarrow B,\ CE \rightarrow AG\}
   $$
   求 $(BD)^{+}_{F}$。

   <details>
   <summary>参考答案</summary>

   解：令 $(BD)^0=BD$，则

   $(BD)^1=BD \cup EG=BDEG$,

   $(BD)^1=BDEG \cup C=BDEGC$,

   $(BD)^2=BDEGC \cup AG=BDEGCA=R$,

   于是：$(BD)^{+}_{F}=BDEGCA$
   </details>

2. 已知关系 $R(A,B,C,G,H,I)$ 满足函数依赖关系：
   $$
   F=\{A \rightarrow B,\ A \rightarrow C,\ CG \rightarrow H,\ CG \rightarrow I,\ B \rightarrow H\}
   $$
   求 $(AG)^{+}_{F}$。

   <details>
   <summary>参考答案</summary>

   解：令 $(AG)^0=AG$，则
   
   $(AG)^1=AG \cup BC=AGBC$,
   
   $(AG)^1=AGBC \cup HI=AGBCHI=R$,

   于是：$(AG)^{+}_{F}=AGBCHI$
   </details>

## 5.3.2.2 最小函数依赖集

定义：

+ 任一函数的右边只有一个属性；
+ 不存在冗余（多余）的函数；
+ 函数的左边不能有冗余属性。

计算步骤如下，若求函数依赖 $F$ 的最小依赖集 $F'$：

1. 用分解规则将所有依赖右边均分解为单属性依赖。
2. 去掉 $F$ 中多余的依赖。依次尝试去掉一个依赖关系：
   1. 若删除会导致依赖关系少一个甚至多个元素，则不能去掉，否则继续尝试去掉。
   2. 假设去掉的是 $X \rightarrow Y$，在剩下的依赖关系中求 $X^{+}_{F}$ 是否含 $Y$，若包含则去掉，且下一次计算时使用去掉之后的函数依赖，否则不能去掉。
3. 去掉各依赖左边多余的属性。依次检查左边不是单属性的依赖，假设是 $XY \rightarrow Z$，求 $X \rightarrow Z$ 是否包含 $Z$，若包含则去掉 $Y$，即保留 $X \rightarrow Z$。

例题：

1. 求函数依赖关系 $F$ 的最小函数依赖集：

   $$
   F=\{AB \rightarrow C,\ A \rightarrow BC,\ B \rightarrow A,\ C \rightarrow AB,\ A \rightarrow D\}
   $$

   <details>
   <summary>参考答案</summary>

   解：展开所有右部不为单属性的依赖：

   $$
   F'_{1}=\{AB \rightarrow C,\ A \rightarrow B,\ A \rightarrow C,\ B \rightarrow A,\ C \rightarrow A,\ C \rightarrow B,\ A \rightarrow D\}
   $$

   依次尝试去掉依赖关系：

   1. 尝试去掉 $AB \rightarrow C$，令 $(AB)^0=AB$，则：

      $(AB)^1=AB \cup CD=ABCD=R$

      得 $(AB)^{+}_{F}=ABCD$，包含 $C$，可以去掉。
   2. 尝试去掉 $A \rightarrow B$，令 $(A)^0=A$，则：

      $(A)^1=A \cup CD=ACD$，

      $(A)^2=ACD \cup B=ACDB=R$，

      得 $(A)^{+}_{F}=ACDB$，包含 $B$，可以去掉。
   3. 尝试去掉 $A \rightarrow C$，令 $(A)^0=A$，则：

      $(A)^1=A \cup D=AD$，

      $(A)^2=AD=(A)^1$，

      得 $(A)^{+}_{F}=AD$，不包含 $B$，不能去掉。
   4. 尝试去掉 $B \rightarrow A$，令 $(B)^0=B$，则：

      $(B)^1=B=(B)^0$，

      得 $(B)^{+}_{F}=B$，不包含 $A$，不能去掉。
   5. 尝试去掉 $C \rightarrow A$，令 $(C)^0=C$，则：

      $(C)^1=C \cup BD=CBD$，

      $(C)^2=CBD \cup A=CBDA=R$，

      得 $(C)^{+}_{F}=CBDA$，包含 $A$，可以去掉。
   6. 尝试去掉 $C \rightarrow B$，令 $(C)^0=C$，则：

      $(C)^1=C=(C)^0$，

      得 $(C)^{+}_{F}=C$，不包含 $A$，不能去掉。
   7. $A \rightarrow D$ 是唯一一个包含元素 $D$ 的依赖，不能去掉。
   
   此时得到：

   $$
   F'_{2}=\{A \rightarrow C,\ B \rightarrow A,\ C \rightarrow B,\ A \rightarrow D\}
   $$

   整理可得：

   $$
   F'=\{A \rightarrow CD,\ B \rightarrow A,\ C \rightarrow B\}
   $$

   </details>
