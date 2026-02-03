---
name: cardfeed
description: "Use when you need to send interactive cards to the user for review, decisions, approvals, or choices. Also use when you need to create new card types for specialized interactions."
---

# CardFeed Skill

Push interactive cards to the CardFeed app for user review and decisions.

## Setup

**First time only** - User runs:
```bash
./scripts/start.sh
```
This clones the repo to `~/.cardfeed/` and starts the services.

## When to Use

- Need **user approval** for code, designs, or plans → `push_card.sh code_review`
- Need **user choice** between options → `push_card.sh choice`
- Need **user acknowledgment** of information → `push_card.sh briefing`
- Current card types don't fit your need → `create_card.sh NewCard`

## Quick Reference

| Action | Command |
|--------|---------|
| **Start services** | `./scripts/start.sh` |
| Push briefing | `./scripts/push_card.sh briefing "Title" "Body"` |
| Push choice | `./scripts/push_card.sh choice "Title" "Body" "A,B,C"` |
| Push code review | `./scripts/push_card.sh code_review "Title" "code" "description"` |
| Read response | `./scripts/read_response.sh` |
| Wait for response | `./scripts/read_response.sh --wait` |
| **Create new card** | `./scripts/create_card.sh CardName "description"` |

## Data Flow

```
1. You call push_card.sh → writes to ~/.cardfeed/cardfeed/data/cards.json
2. WebSocket server detects change → pushes to user's browser/phone
3. User clicks button → response saved to responses.json
4. You call read_response.sh → get user's decision
```

## Creating New Card Types

When existing cards don't fit your needs:

```bash
# 1. Create a new card component
./scripts/create_card.sh DashboardCard "Shows metrics and KPIs"

# This automatically:
# - Creates DashboardCard.tsx
# - Updates CardRegistry
# - Verifies build passes
# - Commits and pushes to GitHub
# - Vite HMR reloads the app
```

### Card Type Naming

| CardName | type value |
|----------|------------|
| ProgressCard | `progress` |
| DashboardCard | `dashboard` |
| FormInputCard | `form_input` |

## File Locations

All CardFeed files are at `~/.cardfeed/cardfeed/`:
- `app/` - React frontend (Vite)
- `server/` - WebSocket server (Node.js + ws)
- `data/` - cards.json, responses.json
- `app/src/components/cards/` - Card components (AI can modify)

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Services not running | Run `./scripts/start.sh` first |
| Card type not found | Run `create_card.sh` first |
| JSON parse error | Escape special characters in body |
| Old card showing | Services auto-update, wait a moment |
