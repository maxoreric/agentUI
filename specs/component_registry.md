# Component Registry (Draft v0.1)

> **Context**: Domain Scenario - **Team Task / Project Management**
> **Principle**: AI uses these components to build the "Intermediate Layer" (UI Plan).

## 1. Domain Components (Initial Batch)

### 1.1 `KanbanBoard`
*   **Intent**: Visualize and manage work items across different workflow states.
*   **Use Case**: Task management, Bug tracking, Sales pipeline.
*   **Data Schema**:
    ```json
    {
      "columns": [
        { "id": "string", "title": "string", "color": "string (optional)" }
      ],
      "items": [
        { 
          "id": "string", 
          "columnId": "string", 
          "title": "string", 
          "assignee": { "name": "string", "avatar": "url" },
          "tags": ["string"]
        }
      ]
    }
    ```
*   **Props Schema**:
    *   `groupBy`: "status" | "assignee" | "priority" (default: "status")
    *   `allowDragDrop`: boolean (default: true)
*   **Constraints**: Not suitable for lists with > 100 items per column (use List/Table instead).
*   **Fallback**: Grouped List View.

### 1.2 `MetricCard`
*   **Intent**: Display a single key performance indicator with optional trend.
*   **Use Case**: Dashboard highlights, Project status summary.
*   **Data Schema**:
    ```json
    {
      "label": "string",
      "value": "string | number",
      "trend": {
        "direction": "up" | "down" | "flat",
        "percentage": "string",
        "description": "string"
      }
    }
    ```
*   **Props Schema**:
    *   `variant`: "default" | "outlined" | "ghost"
    *   `trendColor`: "auto" (green=up) | "reverse" (red=up) | "neutral"
*   **Constraints**: Designed for 1-3 data points max. Don't use for complex tables.
*   **Fallback**: Simple Text Label "Label: Value".

### 1.3 `ActivityTimeline`
*   **Intent**: Verify chronological history of events.
*   **Use Case**: Audit logs, Comment history, Project updates.
*   **Data Schema**:
    ```json
    [
      {
        "id": "string",
        "timestamp": "ISO8601 string",
        "user": { "name": "string", "avatar": "url" },
        "action": "string",
        "details": "string (markdown supported)"
      }
    ]
    ```
*   **Props Schema**:
    *   `reverseOrder`: boolean (default: true, newest first)
    *   `compact`: boolean
*   **Constraints**: Max 50 items recommended for initial load.

### 1.4 `TaskTable`
*   **Intent**: High-density view of items with sorting and filtering.
*   **Use Case**: Backlog grooming, Spreadsheet-like editing.
*   **Data Schema**:
    ```json
    {
      "columns": [
        { "field": "string", "header": "string", "width": 100, "type": "text|number|user|tag|date" }
      ],
      "rows": [
        { "id": "string", "field_name": "value", "...": "..." }
      ]
    }
    ```
*   **Props Schema**:
    *   `pageSize`: number (default: 20)
    *   `allowSelection`: boolean (default: true)
*   **Fallback**: Simple HTML Table.

### 1.5 `ProjectHeader`
*   **Intent**: Establish context at the top of a page.
*   **Use Case**: Project landing page, Issue detail view.
*   **Data Schema**:
    ```json
    {
      "title": "string",
      "description": "string",
      "meta": [
        { "label": "string", "value": "string", "icon": "string" }
      ],
      "actions": [
        { "label": "string", "actionId": "string", "primary": boolean }
      ]
    }
    ```
*   **Fallback**: Title and Description text.

### 1.6 `TeamList`
*   **Intent**: Show who is involved in the context.
*   **Use Case**: Project members, Assignee selector (read-only view).
*   **Data Schema**:
    ```json
    [
      { "id": "string", "name": "string", "role": "string", "avatar": "url", "status": "online|offline" }
    ]
    ```
*   **Props Schema**:
    *   `displayMode`: "avatars" | "list" | "grid"
*   **Fallback**: Comma-separated list of names.

### 1.7 `BurndownChart`
*   **Intent**: Track remaining work over time against a target.
*   **Use Case**: Sprint tracking, Project deadline management.
*   **Data Schema**:
    ```json
    {
      "ideal": [{ "date": "ISO8601", "value": number }],
      "actual": [{ "date": "ISO8601", "value": number }]
    }
    ```
*   **Constraints**: Needs at least 2 data points.
*   **Fallback**: Progress Bar (% complete).

### 1.8 `StatusDistribution`
*   **Intent**: Breakdown of items by category (Pie/Donut equivalent).
*   **Use Case**: Tickets by priority, Tasks by status.
*   **Data Schema**:
    ```json
    [
      { "label": "string", "value": number, "color": "string (hex/token)" }
    ]
    ```
*   **Props Schema**:
    *   `variant`: "pie" | "donut" | "bar"
*   **Fallback**: Text list "Label: Value (Percentage)".

### 1.9 `CommentStream`
*   **Intent**: Linear conversation thread.
*   **Use Case**: Issue discussion, Project feedback.
*   **Data Schema**:
    ```json
    [
      {
        "id": "string",
        "author": { "name": "string", "avatar": "url" },
        "content": "markdown string",
        "timestamp": "ISO8601"
      }
    ]
    ```
*   **Props Schema**:
    *   `allowReply`: boolean
*   **Fallback**: Simple list of messages.

### 1.10 `FilterBar`
*   **Intent**: User controls to filter a connected data view (DataGrid/Kanban).
*   **Use Case**: "Show only my tasks", "Filter by Due Date".
*   **Data Schema**:
    ```json
    [
      {
        "field": "string",
        "type": "select|text|date|boolean",
        "options": [{ "label": "string", "value": "any" }]
      }
    ]
    ```
*   **Props Schema**:
    *   `targetComponentId`: "string" (ID of the component to filter)
*   **Fallback**: Native HTML Search input (if applicable).

### 1.11 `AlertBanner`
*   **Intent**: Highlight critical status or blocking issues.
*   **Use Case**: "Sprint ends today", "Budget exceeded".
*   **Data Schema**:
    ```json
    {
      "type": "info|warning|error|success",
      "message": "string",
      "action": { "label": "string", "link": "url" }
    }
    ```
*   **Fallback**: Bold text paragraph.

### 1.12 `ProgressTracker`
*   **Intent**: Linear visualization of lifecycle or percentage.
*   **Use Case**: Epic completion, Roadmap phase.
*   **Data Schema**:
    ```json
    {
      "current": number,
      "total": number,
      "unit": "string",
      "milestones": [{ "value": number, "label": "string" }]
    }
    ```
*   **Fallback**: Text "X / Y (Z%)".

### 1.13 `FileAttachmentList`
*   **Intent**: List of resources/files attached to the context.
*   **Use Case**: Spec docs, Design assets.
*   **Data Schema**:
    ```json
    [
      { "name": "string", "url": "url", "size": "string", "type": "pdf|img|..." }
    ]
    ```
*   **Fallback**: List of HTML links.

---

## 2. Infrastructure
*   **Layout System**: Grid, Stack (implied, handled by container plans).
*   **Data Binding**: All schemas support `{ "$ref": "path.to.context" }` for dynamic data.
