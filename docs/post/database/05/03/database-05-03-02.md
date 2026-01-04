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

