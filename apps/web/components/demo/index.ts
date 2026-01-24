"use client";

export type { ComponentRenderProps, ComponentRegistry } from "./types";
export { useInteractiveState } from "./utils";

// Original components (Tailwind-based)
export { Alert } from "./alert";
export { Avatar } from "./avatar";
export { Badge } from "./badge";
export { BarGraph } from "./bar-graph";
export { Button } from "./button";
export { Card } from "./card";
export { Checkbox } from "./checkbox";
export { Divider } from "./divider";
export { Fallback } from "./fallback";
export { Form } from "./form";
export { Grid } from "./grid";
export { Heading } from "./heading";
export { Image } from "./image";
export { Input } from "./input";
export { LineGraph } from "./line-graph";
export { Link } from "./link";
export { Progress } from "./progress";
export { Radio } from "./radio";
export { Rating } from "./rating";
export { Select } from "./select";
export { Stack } from "./stack";
export { Switch } from "./switch";
export { Text } from "./text";
export { Textarea } from "./textarea";

// HeroUI components (Profile A - Vibrant)
export { HeroButton } from "./hero-button";
export { HeroCard } from "./hero-card";
export { HeroInput } from "./hero-input";
export { HeroTextarea } from "./hero-textarea";
export { HeroSelect } from "./hero-select";
export { HeroCheckbox } from "./hero-checkbox";
export { HeroModal } from "./hero-modal";
export { HeroTabs } from "./hero-tabs";
export { HeroNavbar } from "./hero-navbar";
export { HeroDropdown } from "./hero-dropdown";
export { HeroLink } from "./hero-link";
export { HeroBreadcrumbs } from "./hero-breadcrumbs";
export { HeroPagination } from "./hero-pagination";
export { HeroTable } from "./hero-table";
export { HeroCode } from "./hero-code";
export { HeroKbd } from "./hero-kbd";
export { HeroSnippet } from "./hero-snippet";
export { HeroListbox } from "./hero-listbox";

// Nivo charts (Profile A - Vibrant)
export { NivoLine } from "./nivo-line";
export { NivoBar } from "./nivo-bar";
export { NivoPie } from "./nivo-pie";

// shadcn/ui components (Profile B - Clean)
export { ShadcnButton } from "./shadcn-button";
export { ShadcnCard } from "./shadcn-card";
export { ShadcnBadge } from "./shadcn-badge";
export { ShadcnTabs } from "./shadcn-tabs";

// Recharts (Profile B - Clean)
export { RechartsLine } from "./recharts-line";
export { RechartsBar } from "./recharts-bar";

import type { ComponentRegistry } from "./types";
import { Alert } from "./alert";
import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { BarGraph } from "./bar-graph";
import { Button } from "./button";
import { Card } from "./card";
import { Checkbox } from "./checkbox";
import { Divider } from "./divider";
import { Fallback } from "./fallback";
import { Form } from "./form";
import { Grid } from "./grid";
import { Heading } from "./heading";
import { Image } from "./image";
import { Input } from "./input";
import { LineGraph } from "./line-graph";
import { Link } from "./link";
import { Progress } from "./progress";
import { Radio } from "./radio";
import { Rating } from "./rating";
import { Select } from "./select";
import { Stack } from "./stack";
import { Switch } from "./switch";
import { Text } from "./text";
import { Textarea } from "./textarea";

// HeroUI imports
import { HeroButton } from "./hero-button";
import { HeroCard } from "./hero-card";
import { HeroInput } from "./hero-input";
import { HeroTextarea } from "./hero-textarea";
import { HeroSelect } from "./hero-select";
import { HeroCheckbox } from "./hero-checkbox";
import { HeroModal } from "./hero-modal";
import { HeroTabs } from "./hero-tabs";

// HeroUI Layout imports (Phase 7)
import { HeroPopover } from "./hero-popover";
import { HeroTooltip } from "./hero-tooltip";
import { HeroAccordion } from "./hero-accordion";
import { HeroDivider } from "./hero-divider";

// HeroUI Form imports (Phase 8)
import { HeroRadioGroup } from "./hero-radio-group";
import { HeroSwitch } from "./hero-switch";
import { HeroSlider } from "./hero-slider";

// HeroUI Data Display imports (Phase 9)
import { HeroChip } from "./hero-chip";
import { HeroBadge } from "./hero-badge";
import { HeroAvatar } from "./hero-avatar";
import { HeroUser } from "./hero-user";
import { HeroImage } from "./hero-image";

// HeroUI Feedback imports (Phase 10)
import { HeroSpinner } from "./hero-spinner";
import { HeroProgress } from "./hero-progress";
import { HeroSkeleton } from "./hero-skeleton";
import { HeroCircularProgress } from "./hero-circular-progress";

// HeroUI Navigation imports (Phase 11)
import { HeroNavbar } from "./hero-navbar";
import { HeroDropdown } from "./hero-dropdown";
import { HeroLink } from "./hero-link";
import { HeroBreadcrumbs } from "./hero-breadcrumbs";
import { HeroPagination } from "./hero-pagination";

// HeroUI Table imports (Phase 12)
import { HeroTable } from "./hero-table";

// HeroUI Data Display imports (Phase 14)
import { HeroCode } from "./hero-code";
import { HeroKbd } from "./hero-kbd";
import { HeroSnippet } from "./hero-snippet";
import { HeroListbox } from "./hero-listbox";

// HeroUI Date & Complex imports (Phase 13)
import { HeroDateInput } from "./hero-date-input";
import { HeroDatePicker } from "./hero-date-picker";
import { HeroDateRangePicker } from "./hero-date-range-picker";
import { HeroAutocomplete } from "./hero-autocomplete";
import { HeroCalendar } from "./hero-calendar";
import { HeroRangeCalendar } from "./hero-range-calendar";

// Nivo chart imports (Profile A - Vibrant)
import { NivoLine } from "./nivo-line";
import { NivoBar } from "./nivo-bar";
import { NivoPie } from "./nivo-pie";

// shadcn/ui imports (Profile B - Clean)
import { ShadcnButton } from "./shadcn-button";
import { ShadcnCard } from "./shadcn-card";
import { ShadcnBadge } from "./shadcn-badge";
import { ShadcnTabs } from "./shadcn-tabs";
import { ShadcnDialog } from "./shadcn-dialog";

// Recharts imports (Profile B - Clean)
import { RechartsLine } from "./recharts-line";
import { RechartsBar } from "./recharts-bar";

import { HeroSpacer } from "./hero-spacer";
import { HeroScrollShadow } from "./hero-scroll-shadow";
import { NeonCard, NeonButton } from "./neon-card";
import { NeonMetricCard } from "./neon-metric-card";
import { NeonStatCard } from "./neon-stat-card";
import { NeonListCard } from "./neon-list-card";
import { BentoCard } from "./bento-card";
import { BentoPulseCard } from "./bento-pulse-card";
import { BentoMetricCard } from "./bento-metric-card";
import { BentoListCard } from "./bento-list-card";

export const demoRegistry: ComponentRegistry = {
  // Original components
  Alert,
  Avatar,
  Badge,
  BarGraph,
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Grid,
  Heading,
  Image,
  Input,
  LineGraph,
  Link,
  Progress,
  Radio,
  Rating,
  Select,
  Stack,
  Switch,
  Text,
  Textarea,
  // HeroUI components (Profile A - Vibrant)
  HeroButton,
  HeroCard,
  HeroInput,
  HeroTextarea,
  HeroSelect,
  HeroCheckbox,
  HeroModal,
  HeroTabs,
  HeroPopover,
  HeroTooltip,
  HeroAccordion,
  HeroDivider,
  HeroSpacer,
  HeroScrollShadow,
  HeroRadioGroup,
  HeroSwitch,
  HeroSlider,
  HeroChip,
  HeroBadge,
  HeroAvatar,
  HeroUser,
  HeroImage,
  HeroSpinner,
  HeroProgress,
  HeroSkeleton,
  HeroCircularProgress,
  HeroNavbar: HeroNavbar as any,
  HeroDropdown: HeroDropdown as any,
  HeroLink: HeroLink as any,
  HeroBreadcrumbs: HeroBreadcrumbs as any,
  HeroPagination: HeroPagination as any,
  // HeroUI Table components (Phase 12)
  HeroTable: HeroTable as any,
  // HeroUI Data Display components (Phase 14)
  HeroCode: HeroCode as any,
  HeroKbd: HeroKbd as any,
  HeroSnippet: HeroSnippet as any,
  HeroListbox: HeroListbox as any,

  // HeroUI Date & Complex components (Phase 13)
  HeroDateInput: HeroDateInput as any,
  HeroDatePicker: HeroDatePicker as any,
  HeroDateRangePicker: HeroDateRangePicker as any,
  HeroAutocomplete: HeroAutocomplete as any,
  HeroCalendar: HeroCalendar as any,
  HeroRangeCalendar: HeroRangeCalendar as any,
  // Nivo charts (Profile A - Vibrant)
  NivoLine,
  NivoBar,
  NivoPie,
  // shadcn/ui components (Profile B - Clean)
  ShadcnButton,
  ShadcnCard,
  ShadcnBadge,
  ShadcnTabs,
  ShadcnDialog,
  // Recharts (Profile B - Clean)

  RechartsLine,
  RechartsBar,
  NeonCard,
  NeonButton,
  NeonMetricCard,
  NeonStatCard,
  NeonListCard,
  BentoCard,
  BentoPulseCard,
  BentoMetricCard,
  BentoListCard,
};

export const fallbackComponent = Fallback;
