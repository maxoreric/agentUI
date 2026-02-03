# CardFeed Implementation Plan

> **Phase**: MVP (Phase 1)
> **Goal**: 本地可用的 TikTok-like 卡片信息流

---

## 1. 项目结构

```
cardfeed/
├── app/                          # React + Vite 前端
│   ├── src/
│   │   ├── components/
│   │   │   ├── cards/            # 核心卡片组件
│   │   │   │   ├── BriefingCard.tsx
│   │   │   │   ├── ChoiceCard.tsx
│   │   │   │   ├── CodeReviewCard.tsx
│   │   │   │   └── index.ts      # CardRegistry
│   │   │   ├── Feed.tsx          # 卡片流容器
│   │   │   └── CardWrapper.tsx   # 通用卡片壳
│   │   ├── hooks/
│   │   │   └── useCardFeed.ts    # 轮询 + 状态管理
│   │   ├── types/
│   │   │   └── card.ts           # 类型定义
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── data/                         # 本地数据目录
│   ├── cards.json                # AI 推送的卡片队列
│   └── responses.json            # 用户响应
├── skill/                        # AI Skill
│   ├── SKILL.md
│   └── scripts/
│       ├── push_card.sh          # 推送卡片
│       └── read_response.sh      # 读取响应
└── docs/
    └── plans/
```

---

## 2. 数据协议

### 2.1 cards.json (AI → 前端)

```json
{
  "cards": [
    {
      "id": "card_001",
      "type": "choice",
      "timestamp": "2026-02-04T08:00:00Z",
      "status": "pending",
      "content": {
        "title": "架构决策",
        "body": "选择数据库方案..."
      },
      "interactions": [
        { "type": "choice", "options": ["PostgreSQL", "MongoDB", "SQLite"] }
      ]
    }
  ]
}
```

### 2.2 responses.json (前端 → AI)

```json
{
  "responses": [
    {
      "cardId": "card_001",
      "timestamp": "2026-02-04T08:05:00Z",
      "action": "choice",
      "value": "PostgreSQL"
    }
  ]
}
```

---

## 3. MVP 核心卡片

| 组件 | Props | 交互 |
|------|-------|------|
| `BriefingCard` | title, body (markdown) | Acknowledge |
| `ChoiceCard` | title, body, options[] | Select option |
| `CodeReviewCard` | title, code, diff? | Approve / Reject |

---

## 4. 开发步骤

### Step 1: 初始化前端项目
```bash
cd cardfeed && npm create vite@latest app -- --template react-ts
cd app && npm install
```

### Step 2: 创建类型定义
- `types/card.ts`: Card, Response, Interaction 类型

### Step 3: 实现核心卡片组件
- `BriefingCard.tsx`
- `ChoiceCard.tsx`
- `CodeReviewCard.tsx`

### Step 4: 实现 Feed 和轮询
- `useCardFeed.ts`: 轮询 `cards.json`，写入 `responses.json`
- `Feed.tsx`: Scroll snap 容器

### Step 5: 创建 Skill
- `SKILL.md`: 使用说明
- `push_card.sh`: 追加卡片到 `cards.json`
- `read_response.sh`: 读取并清空 `responses.json`

### Step 6: 端到端测试
- 手动运行 Skill 推送卡片
- 在浏览器中操作
- 验证响应写入

---

## 5. 验证计划

| 测试 | 方法 |
|------|------|
| 卡片渲染 | 手动打开浏览器，查看卡片显示 |
| 交互响应 | 点击按钮，检查 `responses.json` |
| 轮询更新 | 修改 `cards.json`，观察前端自动更新 |
| Skill 集成 | 在 Claude Code CLI 中调用 Skill |

---

## 6. 预估工作量

| 任务 | 时间 |
|------|------|
| 项目初始化 | 10 min |
| 类型定义 | 15 min |
| 3 个核心卡片组件 | 45 min |
| Feed + 轮询 | 30 min |
| Skill 脚本 | 20 min |
| 端到端测试 | 20 min |
| **总计** | **~2.5 小时** |
