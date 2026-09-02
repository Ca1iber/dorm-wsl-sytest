# SmarTest 7.10.3 TDC Agent Guide

本目录是 `/home/czw_ubuntu_wsl/sytest` 下的 SmarTest 7.10.3 Technical Documentation Center（TDC）使用入口，当前服务于 Advantest V93000/93K 测试工程开发自动化。

## 资料位置

- Markdown 语料库：`../tdc-html/agent-markdown/`
- Markdown 总索引：`../tdc-html/agent-markdown/index.md`
- 原始图片、附件和资源：`../tdc-html/raw/`
- PDF 手册：`../tdc-html/`
- 核心领域导航：`core-index.md`

Markdown 页面中的 `raw/` 相对链接以 `tdc-html/` 为根解析；不要把 `agent-markdown` 当成完整安装版 TDC，也不要把文档中的 V93000 能力直接推断为某个实际 93K 环境已经实现或开放的能力。

## 推荐检索流程

1. 先查看 `core-index.md`，判断问题属于 Pin、Level、Timing、Pattern、Testflow、Test Method、SmartShell 还是 API。
2. 再打开对应的学习入口页，了解术语和工作流。
3. 使用 `rg -n "关键词" ../tdc-html/agent-markdown --glob '*.md'` 搜索具体 API、对象、命令或错误信息。
4. 优先阅读分类目录下的主题页；`99_Unlisted_or_Unreferenced` 是补充资料，不代表内容无效。
5. 需要图片、界面布局或原始附件时，沿 Markdown 中的相对链接检查 `../tdc-html/raw/`。
6. 回答时给出具体 Markdown 路径，并区分：文档直接说明的事实、由多个页面归纳出的结论，以及针对 93K 自动化的设计建议。

## 推荐阅读顺序

对于第一次了解 SmarTest 的问题，建议按以下顺序建立整体模型：

1. `00_Overview`：版本和文档范围。
2. `01_Getting_started`：工作中心、项目、基础数字器件测试和日常操作。
3. `Test Method`：测试程序、测试方法类、编译和执行边界。
4. `Pin → Level → Timing → Pattern`：数字测试资源和向量执行链。
5. `Testflow`：测试流程、节点、变量、bin 和 datalog。
6. `02_System_reference`：具体硬件、API、文件格式、枚举、限制和高级工具。

## 证据边界

- TDC 是 SmarTest/V93000 的参考文档，不是任意实际 93K 环境后端能力的证明。
- 文档中的 C++ Test Method API、硬件卡规格和 SmartShell 命令应先标记为“V93000/SmarTest 文档事实”。
- 当前任务只需要判断 93K/SmarTest 文档和自动化接口事实；不要主动展开 SYChipTest、ICTestUI 或 S100 对照。
- 如果多个页面存在版本差异，优先记录页面的版本标题、`Functional changes` 和具体来源路径。

## 避免的做法

- 不要一次性读取 9393 个主题页面；先分类、再关键词检索、最后沿相关链接扩展。
- 不要把页面标题相同的硬件规格、用户操作页和 API 参考页混为同一层含义。
- 不要因为某个 API 在 TDC 中存在，就断言它能在当前 93K 安装环境中直接运行。
