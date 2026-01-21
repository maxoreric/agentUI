# 项目名 (待定)

---

# Part A：交互原则
(通用，定义协作方式)

## A.1 结伴开发模式（Human-in-the-loop）

**流程**

1. 人给出模糊想法 — 设计思路、目标、方向
2. AI 提问澄清 — 不断追问，理解意图
3. AI 记录笔记 — 把确定的内容记录到 Part B
4. 小步实现 — 每次只实现一小部分
5. 人验证 — 确认是否符合预期
6. 迭代循环 — 始终保持这种方式

**核心原则**

*   先讨论设计，再实施 — 顶层设计优先，不急于写代码
*   记录原话 — 保留用户的原始表述（用引用格式）
*   小步验证 — 每一步都确保符合人类预期
*   不假设 — 有疑问就问，不要猜

## A.2 AI 的职责

**维护文档**
AI 负责维护 Part B 的内容：

*   用户原话 — 用 > 引用格式记录
*   已确定的决策 — 明确标注
*   待定问题 — 列出未决事项
*   TODO list — 待办事项

**工作方式**

*   每次对话后更新文档
*   重要决策要和用户确认后再记录
*   保持文档结构清晰
*   定期生成自包含的文档供用户保存

---

# Part B：设计笔记
(具体内容，AI 维护)

## 1. 用户原话
> “我觉得可以出一套规范这个规范可以告诉AI，如果是第一次生成一个组件库里没有的东西，那他就是按照这个规范去生成一个这个组件……生成一个这个组件之后呢，也定义好他的那个数据的那个结构之后，然后就可以售后的话就可以直接使用了。”
> “1。 agentUI”
> “2. 可以” (针对选定场景)
> “3. 可以” (针对生成草案)

## 2. 已确定的决策
### 2.0 项目基础 (New)
- **项目名称**: `agentUI`
- **首个领域场景**: `Team Task / Project Management` (基于“可以”的推断，作为默认起点)

### 2.0.1 阶段性成果 (Phase 1 Completed)
已完成 **“中间层协议”** 的定义：
1.  **词汇表**: `Component Registry` (13 个领域组件)
2.  **语法**: `UI Plan Schema` (JSON 结构，分离数据与布局)
3.  **实例**: `Sprint Dashboard` (JSON 样例)

### 2.1 系统总体方向
- **目标不是直接生成 UI 代码**，而是构建一个 **AI → 中间层（结构化规范）→ 前端渲染** 的体系。
- **前端技术栈无关**：前端只是渲染器，中间层是核心资产。


### 2.2 中间层的本质
- **中间层 ≠ 模板**
- **中间层 = 结构化 UI 计划 (Plan) + 运行时解释机制 (Runtime)**
    1.  **UI Plan（结构描述）**: 页面布局、组件选择、参数配置、数据绑定 (dataRef)
    2.  **UI Runtime（运行时）**: Schema 校验、数据绑定、动态更新、降级容错、交互处理
- **核心模型**：静态结构 + 动态数据

### 2.3 动态 UI 的共识
- **“动态”不等于“必须数据库”**。来源可以是：脚本生成文件、内存、DB、API、SSE/WebSocket。
- **实现机制**：Pull (定时)、Push (SSE)、Hybrid。
- **解耦**：数据源与 UI 解耦，通过 `dataRef` 绑定。

### 2.4 组件分层共识 (关键)
明确区分三层：
1.  **图表/可视化引擎层** (底层): ECharts, Superset, D3.
2.  **通用 UI 组件库** (无业务语义): Material UI, Chakra UI, NextUI.
3.  **领域组件层** (你要定义的): **AI 只能看到这一层**。
    - 例如: KPI Card, Kanban Board, Trend Section, Alert Panel.

### 2.5 可增长组件体系
系统支持两种 AI 行为：
- **A. 使用已有组件** (默认): 选择 -> 填参 -> 绑定。
- **B. 发现缺组件 → 提出“组件提案”**: 说明意图 -> 定义 Schema -> 定义参数 -> 说明价值。
- **规则**: 新组件不能自动上线，必须走 **提案 → 审核 → 注册** 流程。

## 3. 详细设计
### 3.1 中间层核心规范
- `Component Registry` (组件注册表)
- `UI Plan Schema` (页面结构)
- `Component Proposal Schema` (新组件提案)

### 3.2 组件描述规范
每个组件必须包含：
- `name` (稳定 ID)
- `intent / use-case` (用途)
- `data schema` (数据结构)
- `props schema` (配置项)
- `examples` (示例)
- `constraints` (约束)
- `fallback` (兜底)

## 4. 待定问题
1.  **项目正式名称**?
2.  **高级特性**: 多页面? 权限? 审计回放?
3.  **第一阶段领域场景**: 团队任务? 经营管理? 产品运营?

## 5. TODO / Work log
### TODO
- [ ] 确认项目名
- [ ] 选定第一个领域场景
- [ ] 列出第一批 10–15 个领域组件
- [ ] 定义 UI Plan 的最小 JSON 结构

### Work log
- [x] 中间层架构共识整理
- [x] 组件分层与治理原则确认

---

# Part C: 前端渲染器设计 (Phase 2)
(待确认提案)

## 1. 核心架构原理
采用 **"JSON Driven Rendering" (JSON 驱动渲染)** 模式。前端不写死页面，而是写死“解释器”。

`Architecture Diagram`:
```text
[UI Plan JSON] 
      ↓
[Data Runtime] (负责解析 dataSources, 建立 fetch/socket 连接)
      ↓
   [Context] (将实时数据注入组件树)
      ↓
  [Renderer] (递归组件: 遍历 layout 节点)
      ↓ 匹配 componentName
 [Component Map] (注册表实现: String -> React Component)
      ↓
[Real DOM / UI]
```

## 2. 三大核心模块
我们需要依次实现：

### 2.1 `Data Runtime` (大脑)
- **职责**: 解析顶部 `dataSources` 字段。
- **机制**: 使用 `SWR` 或 `TanStack Query` 管理 Fetch，支持 `refreshInterval`。
- **核心能力**: 提供 `useDataPath("sprintStats.velocity")` 钩子给组件解耦数据。

### 2.2 `The Renderer` (骨架)
- **职责**: 递归渲染 `layout` 树。
- **逻辑**: 
    - 如果是 `container`: 渲染 Flex/Grid 布局，递归渲染 `children`。
    - 如果是 `component`: 从 Map 查找组件，传入 `props` 和 解析后的 `data`。

### 2.3 `Component Library` (血肉)
- **职责**: 1:1 实现 `Component Registry` 里的 13 个组件。
- **技术栈**: 
    - **Core**: `React` + `TailwindCSS`
    - **UI Sets**: 
        1. `Shadcn/UI` (Clean/Minimal 风格)
        2. `HeroUI` (https://www.heroui.com/ - Premium/Glassmorphism 风格)
    - **机制**: 组件应支持通过 `theme` 或配置切换底层实现，或针对不同组件选择最合适的库。
- **特点**: 这些组件要是“愚蠢”的，通过 props 接收数据，不自己请求 API。

## 3. 开发路径 (Step-by-Step)
1.  **脚手架初始化**: Vite + React + TS.
2.  **Hello World**: 写一个硬编码的 `MetricCard` 组件。
3.  **Engine v0.1**: 写一个能渲染 `MetricCard` 的 `Renderer`。
4.  **Connecting Data**: 实现简单的 `Data Runtime` 把 JSON 里的引用换成真数。
5.  **Expansion**: 把剩下 12 个组件填完。
