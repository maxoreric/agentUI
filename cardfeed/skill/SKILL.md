---
name: cardfeed
description: "Push interactive cards to the CardFeed app for user review and decisions. Use this when you need structured user input like approvals, choices, or acknowledgments."
---

# CardFeed Skill

Push cards to the user's CardFeed app for review and decisions.

## When to Use

Use this skill when you need:
- **User approval** for code changes, designs, or plans
- **User choice** between multiple options
- **User acknowledgment** of important information

## Usage

### Push a Briefing Card
```bash
./scripts/push_card.sh briefing "Daily Summary" "<p>Found 3 tasks...</p>"
```

### Push a Choice Card
```bash
./scripts/push_card.sh choice "Database Selection" "Which database?" "PostgreSQL,MongoDB,SQLite"
```

### Push a Code Review Card
```bash
./scripts/push_card.sh code_review "Fix: Auth Bug" "const fix = () => {...}" "Added retry logic"
```

### Read User Response
```bash
./scripts/read_response.sh
```

## Card Types

| Type | Purpose | User Actions |
|------|---------|--------------|
| `briefing` | Information summary | Acknowledge |
| `choice` | Decision required | Select option |
| `code_review` | Code approval | Approve / Reject |
