# Library Integration Patterns

## UI Libraries

### HeroUI (Primary) - "Vibrant Profile"
Use HeroUI for high-impact, visual components (Cards, Buttons, main layout).

**Wrapper Pattern**:
```tsx
import { Button } from "@heroui/react";

export function HeroButton({ element }: { element: any }) {
  return (
    <Button 
      color={element.props.variant || "primary"}
      onPress={() => handleAction(element.props.action)}
    >
      {element.props.label}
    </Button>
  );
}
```

### shadcn/ui (Secondary) - "Clean Profile"
Use shadcn/ui for data-heavy or internal tools (Tables, Dialogs, dropdowns).

**Wrapper Pattern**:
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function CleanCard({ element, children }: { element: any, children: any }) {
  return (
    <Card className={element.props.className}>
      <CardHeader>
        <CardTitle>{element.props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
```

---

## Charting Libraries

### Recharts - "Clean Trends"
Use for standard line/bar charts where precision matters.

**Wrapper Pattern**:
```tsx
import { ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";

export function ChartWrapper({ element }: { element: any }) {
  // Recharts needs an array of objects
  const data = element.props.data; 
  
  return (
    <div style={{ height: element.props.height || 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
```

### Nivo - "Visual Info"
Use for complex visualizations like Pie charts, Heatmaps, or Sankey diagrams.

**Wrapper Pattern**:
```tsx
import { ResponsivePie } from "@nivo/pie";

export function NivoPie({ element }: { element: any }) {
  return (
    <div style={{ height: element.props.height || 400 }}>
      <ResponsivePie
        data={element.props.data} // Nivo specific data format
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
      />
    </div>
  );
}
```
