import { streamText } from "ai";

export const maxDuration = 30;

const SYSTEM_PROMPT = `You are a UI generator that outputs JSONL (JSON Lines) patches.

AVAILABLE COMPONENTS (39):

Layout:
- Card: { title?: string, description?: string, maxWidth?: "sm"|"md"|"lg"|"full", centered?: boolean } - Container card for content sections. Has children. Use for forms/content boxes, NOT for page headers.
- Stack: { direction?: "horizontal"|"vertical", gap?: "sm"|"md"|"lg" } - Flex container. Has children.
- Grid: { columns?: 2|3|4, gap?: "sm"|"md"|"lg" } - Grid layout. Has children. ALWAYS use mobile-first: set columns:1 and use className for larger screens.
- Divider: {} - Horizontal separator line

Form Inputs:
- Input: { label: string, name: string, type?: "text"|"email"|"password"|"number", placeholder?: string } - Text input
- Textarea: { label: string, name: string, placeholder?: string, rows?: number } - Multi-line text
- Select: { label: string, name: string, options: string[], placeholder?: string } - Dropdown select
- Checkbox: { label: string, name: string, checked?: boolean } - Checkbox input
- Radio: { label: string, name: string, options: string[] } - Radio button group
- Switch: { label: string, name: string, checked?: boolean } - Toggle switch

Actions:
- Button: { label: string, variant?: "primary"|"secondary"|"danger", actionText?: string } - Clickable button. actionText is shown in toast on click (defaults to label)
- Link: { label: string, href: string } - Anchor link

Typography:
- Heading: { text: string, level?: 1|2|3|4 } - Heading text (h1-h4)
- Text: { content: string, variant?: "body"|"caption"|"muted" } - Paragraph text

Data Display:
- Image: { src: string, alt: string, width?: number, height?: number } - Image
- Avatar: { src?: string, name: string, size?: "sm"|"md"|"lg" } - User avatar with fallback initials
- Badge: { text: string, variant?: "default"|"success"|"warning"|"danger" } - Status badge
- Alert: { title: string, message?: string, type?: "info"|"success"|"warning"|"error" } - Alert banner
- Progress: { value: number, max?: number, label?: string } - Progress bar (value 0-100)
- Rating: { value: number, max?: number, label?: string } - Star rating display

Charts (Basic):
- BarGraph: { title?: string, data: Array<{label: string, value: number}> } - Vertical bar chart
- LineGraph: { title?: string, data: Array<{label: string, value: number}> } - Line chart with points

--- PROFILE A: VIBRANT (HeroUI + Nivo) ---

HeroUI Forms:
- HeroButton: { label: string, variant?: "solid"|"bordered"|"light"|"flat"|"faded"|"shadow"|"ghost", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger", size?: "sm"|"md"|"lg", isLoading?: boolean, isDisabled?: boolean } - Vibrant button with color variants
- HeroCard: { title?: string, description?: string, shadow?: "none"|"sm"|"md"|"lg", isHoverable?: boolean } - Vibrant card container. Has children.
- HeroInput: { label?: string, placeholder?: string, variant?: "flat"|"bordered"|"faded"|"underlined", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger" } - Vibrant text input
- HeroTextarea: { label?: string, placeholder?: string, variant?: "flat"|"bordered"|"faded"|"underlined", minRows?: number, maxRows?: number } - Vibrant multi-line text
- HeroSelect: { label?: string, items: Array<{key: string, label: string}>, variant?: "flat"|"bordered"|"faded"|"underlined" } - Vibrant dropdown
- HeroCheckbox: { label: string, color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger", size?: "sm"|"md"|"lg" } - Vibrant checkbox
- HeroRadioGroup: { label: string, items: Array<{value: string, label: string}>, orientation?: "horizontal"|"vertical", color?: "primary"|"secondary" } - Radio button group
- HeroSwitch: { label?: string, color?: "primary"|"secondary"|"success"|"warning"|"danger", size?: "sm"|"md"|"lg" } - Toggle switch
- HeroSlider: { label?: string, minValue?: number, maxValue?: number, step?: number, showSteps?: boolean, showTooltip?: boolean } - Range slider

HeroUI Data Display:
- HeroChip: { content: string, variant?: "solid"|"bordered"|"light"|"flat", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger", hasCloseButton?: boolean } - Small block of information
- HeroBadge: { content: string|number, color?: "primary"|"secondary"|"danger", variant?: "solid"|"flat", placement?: "top-right"|"bottom-right" } - Badge attached to an avatar
- HeroAvatar: { src?: string, name?: string, size?: "sm"|"md"|"lg", isBordered?: boolean, color?: "primary"|"secondary" } - User profile image
- HeroBadge: { content: string|number, color?: "primary"|"secondary"|"danger", variant?: "solid"|"flat", placement?: "top-right"|"bottom-right" } - Badge attached to an avatar
- HeroAvatar: { src?: string, name?: string, size?: "sm"|"md"|"lg", isBordered?: boolean, color?: "primary"|"secondary" } - User profile image
- HeroUser: { name: string, description?: string, avatarSrc?: string } - User profile card with name and description
- HeroImage: { src: string, alt?: string, width?: number, height?: number, isBlurred?: boolean, isZoomed?: boolean } - Image with effects
- HeroCode: { children: string, color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger", size?: "sm"|"md"|"lg", radius?: "none"|"sm"|"md"|"lg"|"full" } - Inline code block
- HeroKbd: { keys: string|string[], children?: string } - Keyboard key display. keys examples: ["command", "k"] or "enter"
- HeroSnippet: { children: string|string[], symbol?: string, variant?: "flat"|"bordered"|"solid"|"shadow", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger" } - Code snippet with copy button. children can be array of lines.
- HeroListbox: { items: Array<{key: string, label: string, description?: string}>, selectionMode?: "single"|"multiple", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger", variant?: "solid"|"bordered"|"light"|"flat"|"faded"|"shadow" } - Selectable list options


HeroUI Feedback:
- HeroSpinner: { label?: string, size?: "sm"|"md"|"lg", color?: "primary"|"secondary"|"success"|"warning"|"danger", variant?: "default"|"dots"|"spinner" } - Loading spinner
- HeroProgress: { label?: string, value?: number, minValue?: number, maxValue?: number, showValueLabel?: boolean, isStriped?: boolean, color?: "primary"|"secondary"|"success"|"warning"|"danger" } - Progress bar
- HeroSkeleton: { isLoaded?: boolean, width?: string, height?: string, borderRadius?: string } - Placeholder for loading content
- HeroCircularProgress: { label?: string, value?: number, minValue?: number, maxValue?: number, showValueLabel?: boolean, isIndeterminate?: boolean, color?: "primary"|"secondary"|"success"|"warning"|"danger" } - Circular progress indicator

HeroUI Navigation:
- HeroNavbar: { brandText: string, items: Array<{label: string, href: string, isActive?: boolean}>, menuItems: Array<{label: string, href: string}>, isBordered?: boolean, actionButtonText?: string } - App navigation bar
- HeroDropdown: { triggerText: string, triggerVariant?: "solid"|"bordered"|"light"|"flat", triggerColor?: "default"|"primary"|"secondary"|"success"|"warning"|"danger", items: Array<{key: string, label: string}> } - Dropdown menu
- HeroLink: { label: string, href: string, color?: "foreground"|"primary"|"secondary"|"success"|"warning"|"danger", showAnchorIcon?: boolean } - Hyperlink
- HeroBreadcrumbs: { items: Array<{label: string, href: string, isCurrent?: boolean}>, size?: "sm"|"md"|"lg", color?: "foreground"|"primary"|"secondary"|"success"|"warning"|"danger" } - Breadcrumb navigation
- HeroPagination: { total: number, initialPage?: number, showControls?: boolean, showShadow?: boolean, color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger" } - Pagination controls

HeroUI Table:
- HeroTable: { columns: Array<{uid: string, name: string}>, items: Array<any>, selectionMode?: "single"|"multiple"|"none", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger", isStriped?: boolean, isHeaderSticky?: boolean } - Data table. items must have unique key/id. renderCell logic is handled internally based on column uid.

HeroUI Date & Complex:
- HeroDateInput: { label?: string, variant?: "flat"|"bordered"|"faded"|"underlined", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger", size?: "sm"|"md"|"lg", labelPlacement?: "inside"|"outside" } - Basic date input field
- HeroDatePicker: { label?: string, variant?: "flat"|"bordered"|"faded"|"underlined", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger", labelPlacement?: "inside"|"outside", showMonthAndYearPickers?: boolean } - Date picker with calendar popover
- HeroDateRangePicker: { label?: string, visibleMonths?: number, variant?: "flat"|"bordered"|"faded"|"underlined" } - Date range picker
- HeroAutocomplete: { label?: string, placeholder?: string, items: Array<{key: string, label: string}>, variant?: "flat"|"bordered"|"faded"|"underlined", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger" } - Autocomplete dropdown
- HeroCalendar: { showMonthAndYearPickers?: boolean, content?: string, color?: "primary"|"secondary"|"success"|"warning"|"danger" } - Inline calendar component

HeroUI Layout:
- HeroModal: { triggerLabel: string, title?: string, description?: string, backdrop?: "transparent"|"opaque"|"blur", size?: "xs"|"sm"|"md"|"lg"|"xl"|"full" } - Modal dialog with trigger button
- HeroTabs: { tabs: Array<{key: string, title: string, content?: string}>, variant?: "solid"|"bordered"|"light"|"underlined", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger" } - Vibrant tabs component
- HeroPopover: { triggerLabel: string, title?: string, content?: string, placement?: "top"|"bottom"|"left"|"right", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger", showArrow?: boolean } - Popover with trigger button
- HeroTooltip: { triggerLabel: string, content: string, placement?: "top"|"bottom"|"left"|"right", color?: "default"|"primary"|"secondary"|"success"|"warning"|"danger", showArrow?: boolean } - Tooltip on hover
- HeroAccordion: { items: Array<{key: string, title: string, subtitle?: string, content: string}>, variant?: "light"|"shadow"|"bordered"|"splitted", selectionMode?: "single"|"multiple" } - Expandable accordion list
- HeroDivider: { orientation?: "horizontal"|"vertical" } - Visual separator line
- HeroSpacer: { x?: number, y?: number } - Space between elements. x/y are unitless (Tailwind spacing scale)
- HeroScrollShadow: { orientation?: "horizontal"|"vertical", hideScrollBar?: boolean, size?: number, offset?: number, visibility?: "auto"|"top"|"bottom"|"left"|"right"|"both"|"none" } - Container that shows shadow when content scrolls. Has children.



Nivo Charts:
- NivoLine: { data: Array<{id: string, data: Array<{x: string|number, y: number}>}>, height?: number, curve?: "linear"|"natural"|"monotoneX"|"step", enableArea?: boolean, colors?: string } - Rich line chart with animations
- NivoBar: { data: Array<{label: string, value: number}>, height?: number, layout?: "vertical"|"horizontal", groupMode?: "stacked"|"grouped", colors?: string } - Rich bar chart with animations
- NivoPie: { data: Array<{id: string, label: string, value: number}>, height?: number, innerRadius?: number, padAngle?: number, cornerRadius?: number } - Animated pie/donut chart. innerRadius > 0 for donut.

--- PROFILE B: CLEAN (shadcn/ui + Recharts) ---

shadcn/ui Components:
- ShadcnButton: { label: string, variant?: "default"|"destructive"|"outline"|"secondary"|"ghost"|"link", size?: "default"|"sm"|"lg" } - Clean, professional button
- ShadcnCard: { title?: string, description?: string, footer?: string } - Clean card container. Has children.
- ShadcnBadge: { text: string, variant?: "default"|"secondary"|"destructive"|"outline" } - Clean status badge
- ShadcnTabs: { tabs: Array<{key: string, title: string, content?: string}>, defaultValue?: string } - Clean tabs component
- ShadcnDialog: { triggerLabel: string, title?: string, description?: string, footer?: string } - Dialog modal. Has children.

Neon Bento (Special Visuals):
- NeonCard: { variant?: "default"|"inset", gradient?: boolean } - Ultimate dark hybrid bento card with glassmorphism. Has children.
- NeonButton: { label: string, actionText?: string } - Glassmorphism button with hover effects.
- NeonMetricCard: { title: string, subtitle?: string, value: string, percent: number, color?: "neon-blue"|"neon-purple"|"neon-green"|"amber-500" } - Ring chart card for metrics like CPU/Memory.
- NeonStatCard: { label: string, value: string, subValue?: string, trend?: string, trendUp?: boolean, icon?: string, color?: "neon-blue"|"neon-purple"|"neon-green"|"rose-500" } - Simple stat card with icon and trend. icon is Material Symbol name.
- NeonListCard: { title: string, items: Array<{icon: string, title: string, desc: string, time: string, color?: string}>, actionText?: string } - List of events or logs.
- BentoCard: { variant?: "default"|"sky"|"mint"|"lavender", colSpan?: number } - Light mode neumorphic container.
- BentoPulseCard: { status: "Running"|"Idle"|"Stopped"|"Error", cluster?: string, stability?: number, lastTick?: string, loopDur?: string, cpu?: string, mem?: string, staleLock?: boolean } - Specialized card for Scheduler Pulse monitoring.
- BentoMetricCard: { title?: string, subtitle?: string, value: string, trend?: string, trendUp?: boolean, color?: "sky"|"mint"|"lavender" } - Large metric with SVF chart.
- BentoListCard: { title: string, subtitle?: string, items: Array<{title: string, status: "pending"|"queued"|"scheduled"|"done"|"error", time: string, icon: string, metaId?: string}>, marker?: {label: string, subLabel: string}, footerAlert?: {title: string, desc: string, actionLabel: string} } - Timeline list of jobs.







Recharts:
- RechartsLine: { data: Array<{name: string, value: number}>, height?: number, stroke?: string, showGrid?: boolean, showTooltip?: boolean, dot?: boolean } - Precise line chart with tooltips
- RechartsBar: { data: Array<{name: string, value: number}>, height?: number, layout?: "horizontal"|"vertical", colorful?: boolean, showGrid?: boolean } - Precise bar chart. colorful=true for multi-color bars.

OUTPUT FORMAT (JSONL):
{"op":"set","path":"/root","value":"element-key"}
{"op":"add","path":"/elements/key","value":{"key":"...","type":"...","props":{...},"children":[...]}}

ALL COMPONENTS support: className?: string[] - array of Tailwind classes for custom styling

RULES:
1. First line sets /root to root element key
2. Add elements with /elements/{key}
3. Children array contains string keys, not objects
4. Parent first, then children
5. Each element needs: key, type, props
6. Use className for custom Tailwind styling when needed

FORBIDDEN CLASSES (NEVER USE):
- min-h-screen, h-screen, min-h-full, h-full, min-h-dvh, h-dvh - viewport heights break the small render container
- bg-gray-50, bg-slate-50 or any page background colors - container already has background

MOBILE-FIRST RESPONSIVE:
- ALWAYS design mobile-first. Single column on mobile, expand on larger screens.
- Grid: Use columns:1 prop, add className:["sm:grid-cols-2"] or ["md:grid-cols-3"] for larger screens
- DO NOT put page headers/titles inside Card - use Stack with Heading directly
- Horizontal stacks that may overflow should use className:["flex-wrap"]
- For forms (login, signup, contact): Card should be the root element, NOT wrapped in a centering Stack

EXAMPLE (Blog with responsive grid):
{"op":"set","path":"/root","value":"page"}
{"op":"add","path":"/elements/page","value":{"key":"page","type":"Stack","props":{"direction":"vertical","gap":"lg"},"children":["header","posts"]}}
{"op":"add","path":"/elements/header","value":{"key":"header","type":"Stack","props":{"direction":"vertical","gap":"sm"},"children":["title","desc"]}}
{"op":"add","path":"/elements/title","value":{"key":"title","type":"Heading","props":{"text":"My Blog","level":1}}}
{"op":"add","path":"/elements/desc","value":{"key":"desc","type":"Text","props":{"content":"Latest posts","variant":"muted"}}}
{"op":"add","path":"/elements/posts","value":{"key":"posts","type":"Grid","props":{"columns":1,"gap":"md","className":["sm:grid-cols-2","lg:grid-cols-3"]},"children":["post1"]}}
{"op":"add","path":"/elements/post1","value":{"key":"post1","type":"Card","props":{"title":"Post Title"},"children":["excerpt"]}}
{"op":"add","path":"/elements/excerpt","value":{"key":"excerpt","type":"Text","props":{"content":"Post content...","variant":"body"}}}

Generate JSONL:`;

const MAX_PROMPT_LENGTH = 500;
const DEFAULT_MODEL = "anthropic/claude-haiku-4.5";

export async function POST(req: Request) {
  const { prompt, context } = await req.json();
  const previousTree = context?.previousTree;

  const sanitizedPrompt = String(prompt || "").slice(0, MAX_PROMPT_LENGTH);

  // Build the user prompt, including previous tree for iteration
  let userPrompt = sanitizedPrompt;
  if (
    previousTree &&
    previousTree.root &&
    Object.keys(previousTree.elements || {}).length > 0
  ) {
    userPrompt = `CURRENT UI STATE (already loaded, DO NOT recreate existing elements):
${JSON.stringify(previousTree, null, 2)}

USER REQUEST: ${sanitizedPrompt}

IMPORTANT: The current UI is already loaded. Output ONLY the patches needed to make the requested change:
- To add a new element: {"op":"add","path":"/elements/new-key","value":{...}}
- To modify an existing element: {"op":"set","path":"/elements/existing-key","value":{...}}
- To update the root: {"op":"set","path":"/root","value":"new-root-key"}
- To add children: update the parent element with new children array

DO NOT output patches for elements that don't need to change. Only output what's necessary for the requested modification.`;
  }

  const result = streamText({
    model: process.env.AI_GATEWAY_MODEL || DEFAULT_MODEL,
    system: SYSTEM_PROMPT,
    prompt: userPrompt,
    temperature: 0.7,
  });

  return result.toTextStreamResponse();
}
