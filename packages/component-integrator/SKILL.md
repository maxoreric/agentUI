---
name: component-integrator
description: Use this skill when you need to ADD new UI components to the json-render system. It specializes in integrating HeroUI, shadcn/ui, Recharts, and Nivo.
---

# Component Integrator

This skill guides you through adding new React components to the `json-render` runtime.

## Supported Libraries

We adhere to a strict **"Two-Profile"** strategy:

| Category | Primary (Vibrant/Visual) | Secondary (Clean/Data) |
|----------|--------------------------|------------------------|
| **UI**   | [HeroUI](https://www.heroui.com/) | [shadcn/ui](https://ui.shadcn.com/) |
| **Charts**| [Nivo](https://nivo.rocks/) | [Recharts](https://recharts.org/) |

## Workflow

To add a component, you must perform 3 actions.
See [references/integration-workflow.md](references/integration-workflow.md) for the exact code locations.

1.  **Create Wrapper**: Write the React adapter in `apps/web/components/demo/`.
2.  **Register**: Add to `demoRegistry` in `apps/web/components/demo/index.ts`.
3.  **Prompt**: Add definition to `SYSTEM_PROMPT` in `apps/web/app/api/generate/route.ts`.

## Implementation Patterns

When implementing specific libraries, refer to [references/library-patterns.md](references/library-patterns.md).

### Guiding Principles
1.  **Strict Isolation**: Do not mix styles. HeroUI components should look like HeroUI; shadcn should look like shadcn.
2.  **Pass-through Props**: The `element.props` object is your bridge. Map JSON props to Library props.
3.  **Safety**: Always handle missing data or props gracefully with defaults or fallback UI.
