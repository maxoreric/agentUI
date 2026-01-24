"use client";

import type { ComponentRegistry } from "@json-render/react";

// Import enhanced components for Agent mode
import { Button } from "./button";
import { Input } from "./input";
import { Select } from "./select";
import { Checkbox } from "./checkbox";
import { Radio } from "./radio";
import { Switch } from "./switch";

// Reuse demo components for layout and display
import { Alert } from "@/components/demo/alert";
import { Badge } from "@/components/demo/badge";
import { Card } from "@/components/demo/card";
import { Divider } from "@/components/demo/divider";
import { Grid } from "@/components/demo/grid";
import { Heading } from "@/components/demo/heading";
import { Progress } from "@/components/demo/progress";
import { Stack } from "@/components/demo/stack";
import { Text } from "@/components/demo/text";

// Agent-specific registry with data binding support
export const agentRegistry: ComponentRegistry = {
  // Enhanced components with Action/Data binding
  Button,
  Input,

  // Layout components (reused from demo)
  Card,
  Stack,
  Grid,
  Divider,

  // Typography (reused from demo)
  Heading,
  Text,

  // Data display (reused from demo)
  Alert,
  Badge,
  Progress,

  // Form inputs with data binding
  Select,
  Checkbox,
  Radio,
  Switch,
};

export { Button, Input };
