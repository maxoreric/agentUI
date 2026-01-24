# Component Integration Workflow

To add a new component to `json-render`, you must follow these 3 steps exactly.

## 1. Create Component Wrapper
**Path**: `apps/web/components/demo/<component-name>.tsx`

Create a wrapper that accepts `{ element }` prop and maps `element.props` to the target library component.

```tsx
// apps/web/components/demo/my-component.tsx
import { TargetComponent } from "target-library";

export function MyComponent({ element }: { element: any }) {
  const { someProp, className } = element.props;
  
  return (
    <TargetComponent 
      param={someProp} 
      className={className}
    >
      {/* Handle children if needed */}
    </TargetComponent>
  );
}
```

## 2. Register Component
**Path**: `apps/web/components/demo/index.ts`

Export the component and add it to the `demoRegistry` object.

```typescript
import { MyComponent } from "./my-component";

export const demoRegistry = {
  // ...
  MyComponent, // <--- Add here
};
```

## 3. Update System Prompt
**Path**: `apps/web/app/api/generate/route.ts`

Locate `SYSTEM_PROMPT` and add the component definition to the `AVAILABLE COMPONENTS` list.

```typescript
const SYSTEM_PROMPT = `...
AVAILABLE COMPONENTS:
...
- MyComponent: { someProp: string } - Description of what it does
...
`;
```
