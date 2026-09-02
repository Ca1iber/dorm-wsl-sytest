# 93K 测试开发接口初步盘点

日期：2026-08-24  
文档版本：SmarTest 7.10.3 TDC 代理 Markdown

## 结论摘要

TDC 中确实暴露了测试开发相关接口，但不是单一的“93K API”。至少要分成三层：

1. **Firmware command / setup command**：配置文件或命令参考中的命令，适合自动生成、修改和校验 Pin、Level、Timing、Vector 等 setup 文件。
2. **Test Method API**：C++ 测试方法中的 Setup、Execution、Result、Computation、Judgment 等 API。文档明确存在，但当前没有手写 Test Method 的需求，因此暂不作为本周主线。
3. **外部控制接口**：SmartShell 和 Test suite control API，可以从外部脚本连接运行中的 SmarTest，控制测试执行、读取结果以及操作测试套件。

TDC 文档事实不等于任意实际 93K 环境已经开放或允许调用的能力；后续应优先与当前使用的 93K/SmarTest 版本、安装环境和权限逐项对照。

## 按测试开发对象盘点

| 对象 | 文档中是否有接口 | 目前确认的接口/命令 | 主要证据 |
|---|---|---|---|
| Pin / Pin configuration | 有 | `DFPN`, `CONF`, `UDEF`, `CTXT`, `DFPS`, `UDPS`, `DFGP`, `DFPT`, `DFPR`, `PALS` 等 | `02.06_Command_Reference/02.06.03_Pin_configuration_setup_commands.md` |
| Level | 有 | `DRLV`, `RCLV`, `CLMP`, `PSLV`, `TERM`, `LSUS`, `SPRM`, `SVLR`, `FTCG` 等 | `02.06_Command_Reference/02.06.05_Level_Setup_Commands.md`、`02.06.05.02_List_of_level_setup_commands.md` |
| Timing / Waveform | 有 | `BWDF`, `EDSP`, `ETIM`, `PCLK`, `SPEC`, `WAVE`, `WFDF`, `TSUS`, `SVLR`, `VTIM`, `VWFG`, `VWFS` 等 | `02.06_Command_Reference/02.06.06_Timing_Setup_Commands.md`、`02.06.06.02_List_of_timing_setup_commands.md` |
| Pattern / Vector | 有 | Vector setup commands include `APDV`, `CPYV`, `DELV`, `INGV`, `INSI`, `SQPG`, `TSTL`, `VECD`, `VDCN`, `VDCP` 等；另有 Pattern Explorer/Editor 工具 | `02.06_Command_Reference/02.06.07.02_List_of_vector_setup_commands.md`、`02.08_Setup_and_Result_Tools/02.08.04.16_Pattern_Tools.md` |
| Testflow | 有，但不是一个单独的 setup-command 列表 | Testflow Tool 支持编辑、运行、调试、合并；测试套件控制 API 支持连接 SmarTest session、获取/修改 testsuite、创建/执行 floating testsuite、查询执行状态 | `02.08_Setup_and_Result_Tools/02.08.04.32.02_Using_the_Testflow_Tool.md`、`02.09_Test_Program_Management/02.09.01.14.02_Test_suite_control_API_reference.md` |

## 对自动化最有价值的接口层

### 1. Setup 文件/firmware command 层

这是目前最值得继续深挖的方向。文档明确说明：Pin configuration 是 Level、Timing、Vector 参数的前置条件；Level 和 Timing 既可以用固定值/firmware commands，也可以用 equation-based setup 文件定义。

这意味着可以进一步研究：

- setup 文件的目录结构和语法；
- 如何生成或修改 pin configuration、level、timing、vector 文件；
- 如何调用校验、download、verify 和 up-to-date 查询命令；
- 文件修改后如何触发 SmarTest 重新加载或更新状态。

### 2. SmartShell 层

TDC 将 SmartShell 定义为 SmarTest 的外部脚本接口：外部工具或 Python 脚本可以控制运行中的 SmarTest，并接收测试结果；同时提供网络服务器、简单 API 和命令行终端。该层可能比模拟鼠标点击更适合做 93K 流程自动化。

证据：`02.15_SmartShell/02.15_SmartShell.md`，具体命令需要继续阅读随 TDC 提取的 `SmartShell_7_Command_Reference.pdf`。

### 3. Test suite control API

文档显示该 API 可：

- attach 到 SmarTest session 和 active testflow；
- 获取和修改 testsuite 设置及 flags；
- attach universal test method；
- 创建、设置、执行和删除 floating testsuite；
- 获取 focus site/active sites 上的 testsuite；
- 执行 testsuite 并查询执行状态。

这更偏向“执行和测试套件控制”，不一定覆盖 Pin/Level/Timing/Pattern 的完整创建流程，但可能是自动化闭环中的执行端接口。

## 当前证据边界

- 已确认“文档中存在接口”，未确认“当前 93K 机上的具体版本和权限一定开放”。
- 已确认 TDC 中有 firmware command、Test Method API、SmartShell 和 testsuite control API，不能把它们混称为同一种 API。
- 已确认 Pattern、Level、Timing 等对象有大量命令，但还没有完成参数、输入文件、返回值和调用时序的结构化抽取。
- 还需要查清 SmartShell PDF 的命令清单，以及是否能通过外部 Python/HTTP 直接驱动 SmarTest。

## 工程创建接口

“创建工程”需要拆成 Workspace、Device Project 和 Test Method Project：

- **Workspace**：文档把它描述为 Eclipse 的目录和元数据容器，但目前检索到的是概念和工作区管理说明，没有发现一个明确的 `createWorkspace()` 或 SmartShell 创建 Workspace API。
- **Device Project / Device Directory**：标准流程是通过 `93000 > Device > New Device` 或 `File > New > Project > 93000 > New Device` 打开 New Device Wizard。该向导要求设备路径、设备名称、technology、vector memory 初始化值和资源大小等参数，完成后创建设备目录并激活设备。当前 TDC Markdown 中没有发现一个与 New Device Wizard 等价的通用 `createProject` API。
- **STPM 特定自动生成**：存在 `generate_device_dir()` 命令，但它属于 SmarTest Program Manager MCM 控制文件，用于为 MTP 生成设备目录，不能直接当成普通 93K 工程创建接口。它需要先有 MTPT/mapping table，并且只创建 MTP 所需的 config 和 testflow 初始内容。
- **STPM/TPT 自动生成**：普通 STPM 还提供 `tpt_generate_device_dir()`，可以根据 Test Program Template（TPT）创建新的 device directory，并生成目录结构、testflow 及模板中指定的相关文件；命令行入口是 `stpm -setup <control_file>`。但它的前提是已经有 TPT，通常需要先用 `tpt_import_from_device()` 从一个已有 device 生成模板，因此它是“模板化批量创建”的接口，不是从零配置任意 technology/资源参数的通用 New Device API。
- **指定/切换 Device 路径**：HVM API 提供 `ChangeDevice`，参数为 `DEVICE_PATH`（父目录）和 `DEVICE_NAME`（Device 目录名）。它用于把 SmarTest 切换到已有 Device，不负责创建目录或初始化新 Device。文档示例：`cmdParams["DEVICE_PATH"] = "/home/demo/devices"; cmdParams["DEVICE_NAME"] = "74act299"; command("ChangeDevice", cmdParams, session);`。
- **Test Method Project**：存在 New Test Method Project Wizard 和 `.project`/`.cproject` 文件生成流程，但这属于 Test Method 开发，目前不属于你的当前任务。

因此目前最准确的判断是：**指定/切换 Device 路径的 API 已经找到：HVM `ChangeDevice`；从零创建普通 Device 的公开等价 API，TDC 没有确认，但可以用 STPM 的 `tpt_generate_device_dir()` 做模板化、无 GUI 创建。** 如果要求完全从零且包含 Eclipse 激活/元数据，文档仍只给出 New Device Wizard；设备目录被激活后才会补充 `.project` 等 Eclipse 文件。自动化第一版应优先采用“STPM 生成目录 → HVM `ChangeDevice` 激活/切换 → 文件生成/校验”的方案。

## Eclipse/MCP 初步调研

截至 2026-08-24，已经找到几种不同性质的方案：

- **Eclipse MCP Server（vogellacompany）**：Eclipse 插件，把正在运行的 Eclipse IDE 暴露为 MCP server；可安装 update site，默认 HTTP 端口 8642，使用 bearer token。公开说明包含项目/Java model/编辑器上下文、构建、搜索等工具，但当前版本明确不包含通用文件写入、重构、调试器控制、stdio transport。
- **Eclipse MCP Server（maxmart）**：社区 Eclipse dropins 插件，公开说明支持列出项目和 launch configuration、启动/终止、构建、读取 console，以及 run 一体化操作；通过本地 HTTP MCP endpoint 连接。
- **Eclipse GLSP MCP**：Eclipse 官方 GLSP 项目提供的 MCP 能力，面向图形化 DSL/diagram 编辑器，不是通用 Eclipse Workbench 控制器；目前仍标为 experimental，且主要针对 Node GLSP server。
- **Eclipse Theia MCP UI**：Eclipse Foundation 旗下 Theia 的 MCP UI 集成，可启动/停止配置好的 MCP server；Theia 和传统 Eclipse IDE 不是同一个运行时。
- **Azure MCP Server for Eclipse**：微软文档描述的 Eclipse 集成，目标是让 Eclipse 内的 Copilot 使用 Azure MCP Server；它是 Azure 资源操作接口，不是控制 Eclipse 测试开发流程的通用 MCP。

初步判断：确实存在 Eclipse 相关 MCP，但目前最贴近“让 Agent 操作 Eclipse 工作区/构建/启动/读取控制台”的是社区 Eclipse MCP Server；它是否能直接自动化 93K/SmarTest，还要看 93K 的 Eclipse 环境是否允许安装插件，以及所需操作是否覆盖在其工具集合中。
