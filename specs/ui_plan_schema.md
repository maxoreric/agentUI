# UI Plan Schema (Draft v0.1)

> **Context**: The "Intermediate Layer" that AI generates.
> **Philosophy**: Separation of **Data Fetching**, **Layout Structure**, and **Component Configuration**.

## 1. Root Structure
The UI Plan is a JSON object describing a full page or a widget area.

```json
{
  "version": "1.0",
  "meta": {
    "title": "Project Dashboard",
    "description": "Main view for Team Alpha"
  },
  "dataSources": {
    // Defines WHERE data comes from (declarative)
  },
  "layout": {
    // Defines HOW components are arranged (recursive)
  }
}
```

---

## 2. Data Sources (`dataSources`)
Defines the "Runtime" data requirements. The UI Runtime is responsible for fetching these.

```json
"dataSources": {
  "projectInfo": {
    "type": "fetch",
    "url": "/api/projects/123",
    "method": "GET"
  },
  "tasks": {
    "type": "fetch",
    "url": "/api/projects/123/tasks",
    "refreshInterval": 30000 // Pull: Every 30s
  },
  "realtimeUpdates": {
    "type": "subscription",
    "channel": "project:123:events" // Push: SSE/Socket
  }
}
```

---

## 3. Layout Node (`layout`)
A recursive structure organizing components into rows/columns or specific containers.

**Schema:**
```json
{
  "type": "container | component",
  "direction": "row | column" (only for container),
  "gap": "small | medium | large",
  "children": [ ...nodes ],
  
  // IF type == component
  "componentName": "String (matches Registry)",
  "id": "String (unique)",
  "props": { ... },
  "data": { ... }
}
```

---

## 4. Component Instantiation
How to use a component from the Registry and bind data to it.

**Example: Binding `MetricCard`**

```json
{
  "type": "component",
  "componentName": "MetricCard",
  "id": "card_completed_tasks",
  "props": {
    "variant": "outlined",
    "trendColor": "auto"
  },
  "data": {
    // $ref syntax binds to dataSources
    "label": "Completed Tasks",
    "value": { "$ref": "projectInfo.stats.completedCount" },
    "trend": {
      "direction": "up",
      "percentage": { "$ref": "projectInfo.stats.completedTrend" },
      "description": "vs last week"
    }
  }
}
```

**Example: Binding `TaskTable` (List Data)**

```json
{
  "type": "component",
  "componentName": "TaskTable",
  "id": "main_task_list",
  "props": {
    "pageSize": 50
  },
  "data": {
    // Binding the whole array
    "rows": { "$ref": "tasks.items" },
    "columns": [
       { "field": "title", "header": "Task Name" },
       { "field": "status", "header": "Status" }
    ]
  }
}
```

---

## 5. Full Example (Minimal)

```json
{
  "version": "1.0",
  "dataSources": {
    "kpi": { "url": "/api/kpi" }
  },
  "layout": {
    "type": "container",
    "direction": "column",
    "gap": "medium",
    "children": [
      {
        "type": "component",
        "componentName": "ProjectHeader",
        "props": { "title": "Dashboard" }
      },
      {
        "type": "container",
        "direction": "row",
        "children": [
          {
            "type": "component",
            "componentName": "MetricCard",
            "data": { "value": { "$ref": "kpi.revenue" } }
          },
          {
            "type": "component",
            "componentName": "MetricCard",
            "data": { "value": { "$ref": "kpi.users" } }
          }
        ]
      }
    ]
  }
}
```
