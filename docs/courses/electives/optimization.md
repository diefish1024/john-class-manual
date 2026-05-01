# 最优化方法
> By Crykkkk (Class of 2025)

## 课程概况

| 项目 | 内容 |
|------|------|
| 开课学期 | 大二上 |
| 学分 | 3 |
| 任课老师 | 杨宽，江波 |
| 分数构成 | 50% 作业，50% 闭卷期末考 |
| 难度评级 | ⭐⭐⭐⭐ |

## 课程内容

本课程系统地介绍了带约束优化理论，主要是凸优化理论的主干内容。

Lecture 1 ~ Lecture 4 介绍了一些基本内容，其中，Lecture 1 是（由于突然开始讲一些数学推导让笔者感到劝退的）导论课，Lecture 2 是梯度，线性代数等数学基础，Lecture 3, 4 分别是有关凸集和凸函数的基本结论，比较重要的内容包括凸性的几种定义，包凸性操作与支撑超平面 / 分离超平面定理。
> 这四个章节的内容初看可能会有些迷茫，但学到后面再返回来看可能就会重新有收获。

Lecture 5 是比较独立的章节，介绍了优化问题中相对基础却又高度重要的一个主题：线性规划（Linear Programming），其中关于 **Duality** 的介绍将与 Lec 10 后的对偶理论相呼应。

Lecture 6 ~ 8 主要介绍了通过迭代解决优化问题的基本方法：**梯度下降与牛顿迭代法**，其中：

Lecture 6 介绍了梯度下降（Gradient Descent）的基本内容，以及光滑（L-smooth）与强凸（Strongly Convex）两个概念，他们是从这节开始的，对优化算法的 **收敛性分析** 的重要工具。
> 收敛性分析是相对独立的一条支线，其计算细节可能即使到期末考了还是很难完全掌握，但考试中考的不太多，可以略看。只要记住每种方法的结论，不同收敛速度的性质还有基本的分析方法（如 Descent Lemma 及其变种）即可了

Lecture 7 介绍了牛顿迭代法（Newton Method）及其变种，这一方面是独立的方法，一方面也可以看作是梯度下降的特殊情况，此外，还基于仿射不变性 (Affine Invariant) 这条支线介绍了 Self-Concordant 的性质。

Lecture 8 介绍了处理不光滑目标函数的近似梯度下降（Proximal Gradient Descent）方法，这与 Lecture 11 的投影梯度下降方法是可以互相转换的。

Lecture 9 与 Lecture 10 提供了解决可直接求解的**带约束优化问题**最重要的工具，也是为后面的高阶迭代方法和对偶奠定理论基础的方法：**拉格朗日条件（Lagrange Condition）与 KKT 条件 (Karush-Kuhn-Tucker Condition)**。对于这两节的学习，笔者认为重点在于充分理解这些条件为什么要设定，分别起到了什么作用，基于对此的理解就能更好的明白为什么在不同的问题背景下，这些条件起到的效果会不一样。

Lecture 11 介绍了梯度下降方法在带约束问题中的推广：投影梯度方法(Projected Gradient Descent)，主要基于一些具体例子进行讲解，且在期末考中为非考点。

Lecture 12 介绍了牛顿法在带约束问题中的推广：**内点法（Newton Interior）**，具体来说，首先借助二次规划的例子，对有约束优化问题解的情况进行了分析，随后分析了牛顿法如何应用在有约束问题。最后深入讨论了内点法，包括障碍方法（Barrier Method）与 Primal-Dual Method。内点法在期末考中为非考点，但实际上是很重要的方法。

Lecture 13 延续 Lecture 5,10,12 的话题，完整介绍了 **对偶(Lagrange Dual)** 理论，以及判断强对偶性的 Slater Condition，这章与 Lecture 9, 10 同为本课在应试上最重要的章节。

Lecture 14 为拓展内容，介绍了镜面梯度方法（Mirror Descent）与 Bregman 散度。

## 推荐教材

两位老师的自编讲义。此外，也可以阅读 Boyd 的经典教材 [Convex Optimization](https://web.stanford.edu/~boyd/cvxbook/)。

## 参考资料

2024 年的讲义请见 [MATH3806: Optimization Methods](https://jhc.sjtu.edu.cn/~kuanyang/teaching/MATH3806/)，25 年的讲义请见 [Optimization](https://pan.sjtu.edu.cn/web/share/7e66ccc0d5f6e3f72192f1587dde8eb4)。

25 年的作业题目（可能失效）可见 [hw1](https://notes.sjtu.edu.cn/s/5AO4XhaNo) ,[hw2](https://notes.sjtu.edu.cn/s/SdWne4DUr),
[hw3](https://notes.sjtu.edu.cn/s/l6derPOdg),
[hw4](https://notes.sjtu.edu.cn/s/e8ECPAD0t),
[hw5](https://notes.sjtu.edu.cn/s/4uo1v0aZ9)，暂无答案，笔者是使用纸笔完成的故未以妥善形式保存。

回忆版试卷暂未公开（TBD）

## 学习建议

关于课程的基本学习建议已在课程内容中附带介绍。这门课的每次课大多是用三节课的时间讲了一个高度完整，层层递进的主题，而讲义是可多达二十页的英文 Latex，故笔者自己在前半学期几乎没有一次完整 follow 下来整节课。下半学期笔者尝试了课前 AI 预习，看完大概讲什么之后再上课，效果还不错，不过总的来说，大部分课程的学习都是依靠阅读课后讲义完成的。


让笔者印象深刻的是这门课质量极高的作业。作业常常会借助课内的知识，对课外的一些扩展知识点进行介绍，并且本身为帮助把理论落到实际提供了最小限度的训练量，且与期末考的题目风格高度相近。因此相当建议用纸笔认真写完每次布置的作业~