# CardFeed 设计笔记

> **状态**: 技术选型已确定 ✅
> **日期**: 2026-02-03

## Mission Statement

> **"AI 和人类之间的异步通信协议，用卡片代替文本。"**
> **"TikTok for AI Collaboration — 刷卡片，做决策。"**


## 1. 用户原话

> "AI 总是回复文本内容 markdown 或者 mermaid 等这种有格式的语言内容...但是这样效率太低了。AI 输出的大段文本的速度太快了。人类的反馈和审核已经验证的影响了 AI 工作的速度。"

> "是一个 skill。我们还是在 Claude Code CLI 和 Codex 中进行大部分简单的交互。但是如果有必要，Claude Code CLI 和 Codex 将会使用这个 skill 进行和用户按照这种方式交流。"

> "有点类似于如今的 TikTok 的那种信息流。每页都是一个 video。但我们也许是瀑布流，可以滑动看之前的。做交互。可以是文本内容、图片、也许是视频、或者是可交互的图表 dashboard、网页、表单，任何东西都可以放到一个 card 中。"

> "选择比 open question 更容易。"

---

## 2. 核心问题

**AI 输出速度 >> 人类审核速度** 成为协作瓶颈。

三个子问题：
1. **信息密度**: AI 输出冗长，重点难找
2. **格式/呈现**: 文本格式需要"脑内渲染"
3. **交互模式**: Batch 式审核低效

---

## 3. 解决方案方向

### 3.1 核心概念
**TikTok-like 卡片信息流** — 用户像刷 TikTok 一样审核 AI 输出。

### 3.2 架构 (三组件)

```
┌────────────────┐     ┌─────────────┐     ┌───────────────┐     ┌──────────────────┐
│  Claude Code   │────▶│   Skill     │────▶│  中间服务层    │────▶│  CardFeed App    │
│  CLI / Codex   │     │  (cardfeed) │     │ (WebSocket)   │     │  (浏览器/手机)    │
│                │◀────│             │◀────│               │◀────│                  │
└────────────────┘     └─────────────┘     └───────────────┘     └──────────────────┘
     AI 端               Skill 端            中间层 (双向)          人类端
```

**组件职责**:
| 组件 | 技术 | 职责 |
|------|------|------|
| **CardFeed App** | React + Vite | 渲染卡片、捕获用户交互 |
| **中间层 (MVP)** | 本地文件轮询 | 双向通信：AI ↔ 浏览器 (同一台电脑) |
| **中间层 (Future)** | WebSocket / Firebase | 云端同步，支持手机访问 |
| **Skill** | Shell/Python | AI 调用接口，读写本地文件 |

### 3.3 触发方式 (全部支持)
- AI 自动判断
- 用户显式命令 (`/cardfeed`, `/review`)
- 规则触发 (代码/Mermaid/多选)

### 3.4 卡片内容类型
| 类型 | 示例 |
|------|------|
| 文本 | Markdown 富文本 |
| 代码 | 语法高亮 + Diff |
| 图表 | Mermaid 自动渲染 |
| 图片 | 截图、生成的图片 |
| 视频 | 录屏、演示动画 |
| 表单 | 多选题、输入框、滑块 |
| Dashboard | 可交互图表 |
| 任意 | iframe / 嵌入式组件 |

### 3.5 用户交互选项
| 场景 | UI 元素 |
|------|---------|
| 审批 | ✅ Approve / ❌ Reject |
| 选择 | A / B / C / D 按钮 |
| 评论 | 文本输入框 |
| 已读 | 滑动即确认 / 无需操作 |

---

## 4. 已确认架构：混合模式

**Card = 内容区 (自由) + 交互区 (标准化)**

```json
{
  "id": "card_001",
  "content": {
    "type": "markdown | html | iframe | image | video",
    "body": "<任意内容>"
  },
  "interactions": [
    { "type": "choice", "options": ["A", "B", "C"] },
    { "type": "approve_reject" },
    { "type": "comment" },
    { "type": "acknowledge" }
  ]
}
```

**优点**：
- 内容自由：AI 可输出任何格式
- 交互标准化：按钮、选择题等保证体验一致
- 可扩展：内容层和交互层解耦

---

## 5. Card Registry 模式

> "每次 AI 都直接写代码进去，也写上这个 card 的用途。如果以后还用到这个 card 就直接复用。只生产 JSON 去改变这个 card 里面的文本数字等内容。"

**流程**：
1. AI 判断 Registry 里有合适的卡片？
2. ✅ 有 → 复用模板，只输出 JSON 数据
3. ❌ 没有 → 生成新 React 组件代码 → 保存到本地 → 重启后可用

**确认**：全部使用 **React 组件**，不使用 iframe/HTML 字符串。

---

## 6. 已确认的约束

- **单用户**: 暂不考虑多用户场景
- **独立项目**: agentUI 子目录 (`/Users/haizhang/agentUI/cardfeed/`)
- **前端技术**: React + Vite
- **Card 模板**: 全部 React 组件 (不用 iframe/HTML 字符串)
- **通信 (MVP)**: 本地文件轮询 (无服务器)
- **通信 (Future)**: WebSocket / 云服务

---

## 7. 开发路线图

| Phase | 目标 | 通信方式 | 卡片能力 |
|-------|------|----------|----------|
| **Phase 1 (MVP)** | 本地可用 | 文件轮询 | 预设 3-5 种核心卡片 |
| **Phase 2** | 动态卡片 | 文件轮询 | AI 生成新 Card 模板 |
| **Phase 3** | 手机/多设备 | WebSocket / 云服务 | 同上 |

---

## 8. MVP 核心卡片类型 (待定)

| 卡片类型 | 用途 | 交互 |
|----------|------|------|
| **BriefingCard** | 每日简报 | Acknowledge |
| **ChoiceCard** | 决策题 | A/B/C/D 选择 |
| **CodeReviewCard** | 代码审核 | Approve / Reject |
| **DashboardCard** | 指标展示 | Acknowledge / 下钻 |
| **FormCard** | 多字段输入 | Submit |

---

## 9. 下一步

- [x] 确定技术方案 ✅
- [ ] 创建项目目录
- [ ] 创建 implementation_plan.md
