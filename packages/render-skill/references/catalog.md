# Component Catalog

This catalog defines the components available for the Agent to use when generating UI.
All components must serve a specific purpose and follow the defined schema.

## Layout Components

### Card
A container with optional title and padding.
- `title` (string | null): Title of the card.
- `description` (string | null): Description text.
- `padding` ("sm" | "md" | "lg" | null): Padding size.
- `children` (array): Child component keys.

### Grid
Grid layout with configurable columns.
- `columns` (number | null): Number of columns (1-4).
- `gap` ("sm" | "md" | "lg" | null): Gap size.
- `children` (array): Child component keys.

### Stack
Flex stack for horizontal or vertical layouts.
- `direction` ("horizontal" | "vertical" | null): Stack direction.
- `gap` ("sm" | "md" | "lg" | null): Gap size.
- `align` ("start" | "center" | "end" | "stretch" | null): Alignment.
- `children` (array): Child component keys.

## Data Display Components

### Metric
Display a single metric with optional trend indicator.
- `label` (string): Label of the metric.
- `valuePath` (string): JSON pointer to data value (e.g., "/metrics/revenue").
- `format` ("number" | "currency" | "percent" | null): Value format.
- `trend` ("up" | "down" | "neutral" | null): Trend direction.
- `trendValue` (string | null): Trend value to display.

### Chart
Display a chart from array data.
- `type` ("bar" | "line" | "pie" | "area"): Chart type.
- `dataPath` (string): JSON pointer to data array.
- `title` (string | null): Chart title.
- `height` (number | null): Chart height in pixels.

### Table
Display tabular data.
- `dataPath` (string): JSON pointer to data array.
- `columns` (array): Array of column definitions.
  - `key` (string): Data key.
  - `label` (string): Header label.
  - `format` ("text" | "currency" | "date" | "badge" | null): Column format.

### List
Render a list from array data.
- `dataPath` (string): JSON pointer to data array.
- `emptyMessage` (string | null): Message when empty.
- `children` (array): Child component keys (template for list items).

## Interactive Components

### Button
Clickable button with action.
- `label` (string): Button text.
- `variant` ("primary" | "secondary" | "danger" | "ghost" | null): Visual style.
- `size` ("sm" | "md" | "lg" | null): Button size.
- `action` (string): Action name to trigger.
- `disabled` (boolean | null): Whether disabled.

### Select
Dropdown select input.
- `label` (string | null): Field label.
- `bindPath` (string): JSON pointer for data binding (e.g., "/form/country").
- `options` (array): List of options.
  - `value` (string): Option value.
  - `label` (string): Option display label.
- `placeholder` (string | null): Placeholder text.

### DatePicker
Date picker input.
- `label` (string | null): Field label.
- `bindPath` (string): JSON pointer for data binding.
- `placeholder` (string | null): Placeholder text.

## Typography

### Heading
Section heading.
- `text` (string): Heading text.
- `level` ("h1" | "h2" | "h3" | "h4" | null): Heading level.

### Text
Text paragraph.
- `content` (string): Text content.
- `variant` ("body" | "caption" | "label" | null): Text style.
- `color` ("default" | "muted" | "success" | "warning" | "danger" | null): Text color.

## Status Components

### Badge
Small status badge.
- `text` (string): Badge text.
- `variant` ("default" | "success" | "warning" | "danger" | "info" | null): Badge color.

### Alert
Alert/notification banner.
- `type` ("info" | "success" | "warning" | "error"): Alert type.
- `title` (string): Alert title.
- `message` (string | null): Alert message body.
- `dismissible` (boolean | null): Whether dismissible.

## Special Components

### Divider
Visual divider.
- `label` (string | null): Optional label in the middle.

### Empty
Empty state placeholder.
- `title` (string): Title.
- `description` (string | null): Description.
- `action` (string | null): Action to trigger.
- `actionLabel` (string | null): Action button text.

## Valid Actions
- `export_report`: Export the current dashboard to PDF.
- `refresh_data`: Refresh all metrics and charts.
- `view_details`: View detailed information.
- `apply_filter`: Apply the current filter settings.
