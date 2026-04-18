# 组合数学
> By Crykkkk (Class of 2025)

!!! quote 
    *A mathematician is a person who can find analogies between theorems; a better mathematician is one who can see analogies between proofs and the best mathematician can notice analogies between theories. One can imagine that the ultimate mathematician is one who can see analogies between analogies.*
    
    —— Stefan Banach (摘自讲义)

## 课程概况

| 项目 | 内容 |
|------|------|
| 开课学期 | 大二上 |
| 学分 | 3 |
| 任课老师 | 杨宽 |
| 分数构成 | 总评分为考试 50分，平时分50分。考试分的评分标准为期中考50分，期末考100分，二者分数之和100分为满分，考试形式为全开卷 |
| 难度评级 | ⭐⭐⭐⭐⭐ |

## 课程内容

Lecture 1 ~ 7 为参加过 OI 的同学可能学过的内容，包括排列组合 (Twelvefold Way)，生成函数，容斥定理，莫比乌斯反演 (Möbius inversion)，偏序集，图论基础，匹配，鸽笼定理等专题，他们每个都是具有比较强延展性的主题。

Lecture 8 与 Lecture 9 分别为两个相对独立的专题: 极值图论（Extremal Graph Theory），研究的问题如 [Turán's theorem](https://en.wikipedia.org/wiki/Tur%C3%A1n%27s_theorem)；与极值集合论 (Extremal Set Theory)，研究的问题如点与直线系统上的极值问题（如[Sylvester–Gallai theorem](https://en.wikipedia.org/wiki/Sylvester%E2%80%93Gallai_theorem)）与和相交集有关的问题。

Lecture 10 开始讲介绍两个现代组合数学的重要方法：线性代数方法与概率方法。

其中 Lecture 10 ~ 11 介绍了线性代数方法：用矩阵的秩，特征值等性质解决组合数学问题（如 [Odd-Even Town Problem](https://zhuanlan.zhihu.com/p/103234322)）

而 Lecture 12 ~ 15 集中介绍了组合数学在现代最重要的理论发展：概率方法，即通过事件的期望与概率来解决各种问题。首先介绍了一些简单的工具，包括 Union Bound 与 Linearity of Expectation，然后介绍了一些进阶方法，包括矩方法（Moment Method），调整法（Alternation Method）与局部定理（Lovász Local Lemma）


## 推荐教材

使用的是 Kuan 的自编笔记，请见 [CS0901: Combinatorics](https://jhc.sjtu.edu.cn/~kuanyang/teaching/CS0901/)，上课时也推荐了两本教材 A Course In Combinatorics 与 Extremal Combinatorics，另外，据其他同学的反馈，《Concrete Mathematics: A Foundation for Computer Science》 或者其他组合数学的参考书可能也有一定帮助，但笔者本人基本只使用了讲义进行学习。

## 参考资料

目前可在 John 论坛找到往年卷，笔者本人也有回忆版试卷（暂未上传，TBD）

关于作业，可见 [diefish 的博客](https://diefish1024.github.io/posts/class-notes/cs0901-combinatorics/) 或 [笔者的博客](https://crykkkk.com/Campus-Course/Combinatorics/)。

## 学习建议

从别具一格的评分标准可以预想这门课程对初学者的困难之处，事实上也确实如此。这门课的难度曲线很陡峭，因为前几次课有大量的新概念，但提供的工具又比较基础（指在学科知识树上的位置），题目往往需要很构造性的思路或者有比较隐蔽的动机（换句话说，需要比较聪明..），作业的难度也很高，可能求助 AI 也未必能做出。笔者也没有很好的学习建议，不过可能可以多学习一下作业题正解的破题思路。

不过，后半学期由于课堂内容本身的体量增大，知识也相对前沿（可以看到不少 2010 年后甚至 2020 年代的公式），课程呈现出以下特点

1. 作业题目倾向于对课堂定理 / 例题的熟练程度考察，思维难度下降
2. 讲义中并非所有内容都必须掌握，只需要熟记主干知识点和一些比较经典的证明（以防考试出现类似题而找不到内容）

因此，不必过于纠结前半学期学习的磕绊，期末考**大致上**是不包含期中前内容的，故有充分准备的情况下期中考若没有考好也有挽回的机会 :)

对于应试来说，笔者有以下建议：

首先，全开卷考试的材料准备是非常重要的（笔者曾在某门通识课由于材料准备不足，没料到老师会考 PPT 极细的名词题而败北），对于本课，建议考试时打印好全套讲义+全套作业与解答，笔者自己还准备了 AI 对讲义的总结与一个公式的 Look Up Table，部分同学还拿了一些参考书作为材料。最后期末考包含了许多作业题目/讲义例题的改编（与一道接近原题的题目）。

其次，由于这种专业课，各个老师，各个学校的教学风格和方向会有较大的不同，笔者个人不建议考前寻找其他学校的组合数学题目来复习（事实上，国内大部分高校的组合数学题目估计也对本门课的备考来说难度过低），相对来说更建议考前把准备的资料多多翻阅，确保碰到类似题能够联想到对应位置。

总的来说，这门课的讲义十分精美，Kuan 的讲课引人入胜，是一门不可多得的好课。