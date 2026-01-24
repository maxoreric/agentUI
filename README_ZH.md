# JSON Render Skill & Claude Code 集成指南

本项目为 Claude Code 提供了一个 **可视化交互界面 (GUI)** 能力。
通过这个 Skill，Claude 不再局限于终端文字输出，而是可以为你实时渲染网页、图表、表单等丰富组件。

## 🚀 快速开始

### 1. 启动前端 (Display)
这是你的 "显示器"。Claude 生成的界面会在这里显示。

```bash
cd apps/web
npm run dev
# 访问 http://localhost:3000
```

### 2. 启动 Agent (Controller)
这是 "遥控器"。Claude 会通过脚本控制前端的显示。

> **注意**: 在实际使用中，Claude Code 会自动调用 `render-skill` 中的脚本。
> 下面的 `demo_agent.js` 只是一个演示脚本，用来测试环境是否通畅。

```bash
# 根目录下
node demo_agent.js
```

如果一切正常，你的浏览器 (http://localhost:3000) 应该会实时显示 Agent 推送的欢迎卡片、进度条和表单。

---

## 🤖 如何在 Claude Code 中使用？

只要你安装了 `render-skill.skill` (解压到当前目录)，你就可以直接用自然语言指挥 Claude 操作界面。

### 场景示例

#### 1. 数据可视化
> **User**: "分析一下当前目录下的代码行数分布，画个饼图给我看。"
> **Claude**: (自动扫描 -> 生成 JSON -> 调用 `render.js`) -> **浏览器显示饼图**

#### 2. 生成交互工具
> **User**: "我要给数据库造点假数据，你生成一个表单，让我填一下 User 表的字段配置。"
> **Claude**: (生成包含 Input/Select 的表单) -> **浏览器显示表单**
> **User**: (在网页填写并提交)
> **Claude**: (终端即时收到你填写的 JSON 配置) -> "收到，正在生成数据的 SQL..."

#### 3. 实时任务监控
> **User**: "跑一下这个耗时的 build 脚本，并在网页上给我显示进度条。"
> **Claude**: (启动脚本 -> 循环调用 `render.js` 更新进度) -> **浏览器实时更新进度条**

---

## 🛠 原理架构

这是一个 **"前后端分离"** 的架构，但"后端"是 Claude Agent。

```
[Claude Code / Agent]  <-- (通过脚本) -->  [Next.js Frontend]
       |                                       ^
   1. 生成 JSON UI 描述                        | 
   2. 执行 scripts/render.js ------------------+
       |
   3. 挂起等待 (wait_for_input.js)
       ^                                       |
       +---------------------------------------+
                4. 用户在网页填写并提交
```

*   **Frontend**: 傻瓜式渲染器。只负责把接收到的 JSON 渲染成 React 组件。
*   **Protocol**: 纯 JSON 数据。
*   **Security**: Agent 只能使用 `catalog.md` 中定义的组件，无法随意注入恶意 JS 代码。

## 📂 目录结构

*   `render-skill/`
    *   `SKILL.md`: Claude 的操作说明书
    *   `scripts/render.js`: 发送 UI 到前端的脚本
    *   `scripts/wait_for_input.js`: 等待用户输入的脚本
    *   `references/catalog.md`: 可用组件列表 (Button, Input, Chart...)
*   `apps/web/`: Next.js 前端项目

## 🔌 如何扩展 UI 组件？

如果你想让 Claude 支持更多组件 (比如一个 `Video` 播放器)，你需要做 **三件事**：

### 1. 创建 React 组件
在 `apps/web/components/demo/` 下新建 `video.tsx`:
```tsx
export function Video({ element }: { element: any }) {
  return <video src={element.props.src} controls className="w-full rounded" />;
}
```

### 2. 注册组件
修改 `apps/web/components/demo/index.ts`:
```typescript
import { Video } from "./video";

export const demoRegistry = {
  // ... existing components
  Video, // <--- 添加这行
};
```

### 3. (关键) 更新 System Prompt
目前 System Prompt 是手动维护的。你需要告诉 AI 这个新组件的存在。
修改 `apps/web/app/api/generate/route.ts`:

```typescript
const SYSTEM_PROMPT = `...
AVAILABLE COMPONENTS:
...
- Video: { src: string } - Video player widget
...
`;
```

完成这三步后，你就可以对 Claude 说："给我在网页上放一个视频"，它就会生成包含 `Video` 组件的 JSON 了。
