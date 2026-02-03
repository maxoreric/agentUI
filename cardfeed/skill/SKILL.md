---
name: cardfeed
description: "Use when you need to send interactive cards to the user for review, decisions, approvals, or choices. Also use when you need to create new card types for specialized interactions."
---

# CardFeed Skill

Push interactive cards to the CardFeed app for user review and decisions.

## When to Use

- Need **user approval** for code, designs, or plans → `push_card.sh code_review`
- Need **user choice** between options → `push_card.sh choice`
- Need **user acknowledgment** of information → `push_card.sh briefing`
- Current card types don't fit your need → `create_card.sh NewCard`

## Quick Reference

| Action | Command |
|--------|---------|
| Push briefing | `./scripts/push_card.sh briefing "Title" "Body"` |
| Push choice | `./scripts/push_card.sh choice "Title" "Body" "A,B,C"` |
| Push code review | `./scripts/push_card.sh code_review "Title" "code" "description"` |
| Read response | `./scripts/read_response.sh` |
| **Create new card** | `./scripts/create_card.sh CardName "description"` |

## Creating New Card Types

When existing cards (briefing, choice, code_review) don't fit your needs:

```bash
# Create a new card component
./scripts/create_card.sh ProgressCard "Shows progress with percentage bar"

# This creates:
# - app/src/components/cards/ProgressCard.tsx
# - Updates CardRegistry in index.ts
# - Vite HMR auto-reloads the app

# Then push a card using the new type:
./scripts/push_card.sh progress "Task Progress" "<p>50% complete</p>"
```

### Card Type Naming

| CardName | type value |
|----------|------------|
| ProgressCard | `progress` |
| DashboardCard | `dashboard` |
| FormInputCard | `form_input` |

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Card type not found | Run `create_card.sh` first, or check type name |
| JSON parse error | Escape special characters in body |
| Card not showing | Check `data/cards.json` for valid JSON |
