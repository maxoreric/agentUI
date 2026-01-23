---
name: render-skill
description: Create rich, interactive Web UIs to display data or collect complex user input using a persistent dashboard. Use when you need to show charts, dashboards, tables, or get structured forms from the user.
---

# JSON Render Skill

This skill allows you to control a local Web Dashboard to visualize data and interact with the user via rich components (Forms, Charts, Metrics).

## Philosophy: Predictable & Guardrailed

You act as the **Backend/Controller**. You generate a JSON description of the UI, and the Dumb Viewer renders it. 
You are strictly constrained to the components defined in `references/catalog.md`. 
**Do not invent HTML or CSS.** strictly use the JSON schema.

## Workflow

### 1. Visualization (Fire-and-Forget)
When you want to show progress, status, or data without blocking:
1. Construct a valid `UITree` JSON.
2. Pipe it to the `render` script.

```bash
echo '{ "root": "card", "elements": { ... } }' | node scripts/render.js
```

### 2. User Input (Blocking)
When you need user input (e.g. a form):
1. Construct the UI with input components (`Input`, `Select`, `Button`).
2. **Crucial**: Include a `Button` with `action: "submit"` or `action: "complete_task"`.
3. Render the UI first.
4. Run the `wait_for_input` script to block until the user submits.

```bash
# 1. Update UI to show form
echo '{ ... }' | node scripts/render.js

# 2. Wait for user to fill it
USER_DATA=$(node scripts/wait_for_input.js)
echo "User submitted: $USER_DATA"
```

## Catalog & Components

See [references/catalog.md](references/catalog.md) for the complete list of available components and their props.

**Common Patterns:**

- **Dashboard**: `Grid` with `Card`s containing `Metric` and `Chart`.
- **Form**: `Card` containing a `Stack` of `Input`s and a `Button` (action="submit").
- **Progress**: `Card` with `StatusBadge` and `Text` log.

## Example: Simple Form

```json
{
  "root": "main",
  "elements": {
    "main": {
      "key": "main",
      "type": "Card",
      "props": { "title": "Welcome" },
      "children": ["msg", "name", "btn"]
    },
    "msg": {
      "key": "msg",
      "type": "Text",
      "props": { "content": "Please enter your name" }
    },
    "name": {
      "key": "name",
      "type": "Input",
      "props": { "label": "Full Name", "bindPath": "/user/name" }
    },
    "btn": {
      "key": "btn",
      "type": "Button",
      "props": { "label": "Continue", "action": "submit" }
    }
  }
}
```
