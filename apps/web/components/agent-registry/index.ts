"use client";

import type { ComponentRegistry } from "@json-render/react";

// Import enhanced components for Agent mode
import { Button } from "./button";
import { Input } from "./input";

// Reuse demo components for layout and display
import { Alert } from "../demo/alert";
import { Badge } from "../demo/badge";
import { Card } from "../demo/card";
import { Divider } from "../demo/divider";
import { Grid } from "../demo/grid";
import { Heading } from "../demo/heading";
import { Progress } from "../demo/progress";
import { Stack } from "../demo/stack";
import { Text } from "../demo/text";
import { Select } from "../demo/select";

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

  // Form inputs (reused from demo for now)
  Select,
};

export { Button, Input };
