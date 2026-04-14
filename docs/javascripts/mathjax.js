// MathJax 配置脚本
// 在 MkDocs Material 主题中启用 LaTeX 公式渲染
// 行内公式：$...$  或  \(...\)
// 块级公式：$$...$$  或  \[...\]

window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
};

document$.subscribe(() => {
  MathJax.typesetPromise();
});
