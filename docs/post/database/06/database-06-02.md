# 6.2 E-R图设计及其到关系模式的转换

关系模式表示方式：

关系名称（<u>关键字</u>，属性1，属性2，...）

## 6.2.1 E-R 图

要求：

+ 实体（数据表）用矩形表示。
+ 实体间关系用菱形表示。
+ 实体和实体间关系使用无向边连接，多对多（n/m）、一对多（1/n）、多对一（n/1）写无向边上。
+ 属性用椭圆表示，与实体之间使用无向边连接，关键字（主码/主键）使用下划线标注。

示例：

```mermaid
graph TB;

client[客户];
client_id((<u>身份证号</u>));
client --- client_id;

client_car{客户-车};
client ---|1| client_car;
client_car ---|n| car;

car[车];
car_id((<u>车架号</u>));
client_car --- car_id;

car_insurance{车-保单};
car ---|n| car_insurance;
car_insurance ---|1| insurance;

insurance[保单];
insurance_id((<u>保单号</u>));
insurance --- insurance_id;

car_accident{车-事故记录};
car ---|n| car_accident;
car_accident ---|1| accident;

accident[事故记录];
accident_id((<u>编号</u>));
accident_time((时间));
accident --- accident_id;
accident --- accident_time;

insurance_pay{保单-保单支付};
insurance ---|1| insurance_pay;
insurance_pay ---|n| pay;

pay[保单支付];
pay_id((<u>支付订单号</u>));
pay_deadline((到期日));
pay_time((缴费日));
pay --- pay_id;
pay --- pay_deadline;
pay --- pay_time;
```

## 6.2.2 E-R 图到关系模式的转换

原则：

+ 一个实体对应一个关系模式（也就是一张表）
+ 实体间关系的转换，若：

   + 一对一：随便附加到一边。
   + 一对多、多对一：附加到多的一边。
   + 多对多：使用独立的关系模式。

例如 [6.2.1 E-R 图](#621-e-r-图) 中的 E-R 图转换为关系模式如下：

+ 客户（<u>身份证号</u>）
+ 车（<u>车架号</u>，身份证号，保单号）
+ 事故记录（<u>编号</u>，时间，车架号）
+ 保单（<u>保单号</u>）
+ 保单支付（<u>支付订单号</u>，到期日，缴费日，保单号）
