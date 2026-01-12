---
sidebar_position: 1
---

# 关系代数作业

## 练习一

已知学生-课程数据库：

+ Student(Sno, Sname, Ssex, Sage, Sdept)
+ Course(Cno, Cname, Cpno, Ccredit)
+ SC(Sno, Cno, Grade)

用关系代数描述以下查询：

1. 查询学分大于等于3及以上的课程名

   答：$\pi_{Cname}(\sigma_{Ccredit>=3}(Course))$
2. 查询“数据库”课程的成绩清单

   答：$\pi_{Sno,Sname,Grade}(\sigma_{Cname='数据库'}(Student \bowtie SC \bowtie Corse))$
3. 查询选修了“数据库”课程的“数学”系学生姓名

   答：令临时关系 SdCn

   | Sdept | Cname |
   |-------|-------|
   | 数学    | 数据库   |

   $\pi_{Sname}((Student \bowtie SC \bowtie Course) \div SdCn)$
4. 查询“数据库”课程成绩不及格的学生学号和姓名

   答：$\pi_{Sno,Sname}(\sigma_{Grade<60}(\sigma_{Cname='数据库'}(Student \bowtie SC \bowtie Corse)))$
5. 查询“王敏”选修的所有课程名称及其成绩

   答：$\pi_{Cname,Grade}(\sigma_{Sname='王敏'}(Student \bowtie SC \bowtie Corse))$
6. 查询没有选修过任何课程的学生学号和姓名

   答：$\pi_{Sno,Sname}(\sigma_{Grade=NULL}(Student \bowtie SC \bowtie Corse))$
7. 查询所有的学生及其选修课程的信息

   答：$Student \times Corse \div \pi_{Sno,Cno}(SC)$

## 练习二

已知 University 数据库

+ Instructor(ID, name, dept_name, salary)
+ Deptment(dept_name, building, budget)
+ Student(ID, name, dept_name, tot_cred)
+ Course(course_ID, title, dept_name, credts)
+ Takes(ID, Course_ID, semester, year, grade)

用关系代数描述以下查询要求：

1. 查询所有老师和学生的姓名

   答：$\pi_{name}(Instructor) \cup \pi_{name}(Student)$
2. 查询Kim老师的办公地点

   答：$\pi_{building}(\sigma_{name='Kim'}(Instructor \bowtie Deptment))$
3. 查询CS系学生的学分情况

   答：$\pi_{name,credts}(\sigma_{grade>=60}(Student \bowtie Course \bowtie Takes))$
4. 查询database课程成绩在90分以上的学生信息

   答：$Student \div \pi_{ID}(\sigma_{grade>90}(Takes \div \pi_{Course\_ID}(\sigma_{title='database'})))$
5. 查询没有选修任何课程的学生信息

   答：$Student \div \pi_{ID}(\sigma_{grade=NULL}(Student \bowtie Takes)))$