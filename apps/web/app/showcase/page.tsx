"use client";

/**
 * Component Showcase Test Page
 * Tests all 17 newly integrated components directly (no Renderer)
 */

import {
  HeroButton,
  HeroCard,
  HeroInput,
  HeroTextarea,
  HeroSelect,
  HeroCheckbox,
  HeroModal,
  HeroTabs,
  NivoLine,
  NivoBar,
  NivoPie,
  ShadcnButton,
  ShadcnCard,
  ShadcnBadge,
  ShadcnTabs,
  RechartsLine,
  RechartsBar,
} from "@/components/demo/index";

// Helper to create mock element props (includes required 'key' for UIElement type)
const mockElement = (props: Record<string, unknown>) => ({
  type: "test",
  props,
  key: "mock",
});

export default function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">
          Component Showcase - All 17 New Components
        </h1>

        {/* =========================================
            Profile A: Vibrant (HeroUI + Nivo)
            ========================================= */}
        <h2 className="text-2xl font-semibold mt-8">
          Profile A: Vibrant (HeroUI + Nivo)
        </h2>

        {/* HeroUI Cards with Form Components */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">HeroUI Form Components</h3>
          <HeroCard
            element={mockElement({
              title: "HeroUI Forms Demo",
              description: "Button, Input, Textarea, Select, Checkbox",
            })}
          >
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <HeroButton
                  element={mockElement({
                    label: "Primary",
                    color: "primary",
                    variant: "solid",
                  })}
                />
                <HeroButton
                  element={mockElement({
                    label: "Secondary",
                    color: "secondary",
                    variant: "bordered",
                  })}
                />
                <HeroButton
                  element={mockElement({
                    label: "Danger",
                    color: "danger",
                    variant: "flat",
                  })}
                />
                <HeroButton
                  element={mockElement({
                    label: "Loading...",
                    isLoading: true,
                    color: "primary",
                  })}
                />
              </div>

              <HeroInput
                element={mockElement({
                  label: "Email Address",
                  placeholder: "Enter your email",
                  variant: "bordered",
                })}
              />

              <HeroTextarea
                element={mockElement({
                  label: "Message",
                  placeholder: "Type your message...",
                  minRows: 3,
                })}
              />

              <HeroSelect
                element={mockElement({
                  label: "Select Option",
                  items: [
                    { key: "opt1", label: "Option 1" },
                    { key: "opt2", label: "Option 2" },
                    { key: "opt3", label: "Option 3" },
                  ],
                })}
              />

              <HeroCheckbox
                element={mockElement({
                  label: "I agree to terms",
                  color: "primary",
                })}
              />
            </div>
          </HeroCard>
        </div>

        {/* HeroUI Layout Components */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">HeroUI Layout Components</h3>
          <HeroCard
            element={mockElement({
              title: "Modal & Tabs",
              description: "Layout components",
            })}
          >
            <div className="space-y-4">
              <HeroModal
                element={mockElement({
                  triggerLabel: "Open Modal",
                  title: "Modal Title",
                  description: "This is a HeroUI Modal with backdrop blur.",
                  backdrop: "blur",
                })}
              />

              <HeroTabs
                element={mockElement({
                  variant: "underlined",
                  color: "primary",
                  tabs: [
                    {
                      key: "tab1",
                      title: "Tab 1",
                      content: "Content for Tab 1",
                    },
                    {
                      key: "tab2",
                      title: "Tab 2",
                      content: "Content for Tab 2",
                    },
                    {
                      key: "tab3",
                      title: "Tab 3",
                      content: "Content for Tab 3",
                    },
                  ],
                })}
              />
            </div>
          </HeroCard>
        </div>

        {/* Nivo Charts */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Nivo Charts</h3>
          <HeroCard element={mockElement({ title: "Nivo Line Chart" })}>
            <NivoLine
              element={mockElement({
                height: 250,
                enableArea: true,
                data: [
                  {
                    id: "Sales",
                    data: [
                      { x: "Jan", y: 45 },
                      { x: "Feb", y: 52 },
                      { x: "Mar", y: 48 },
                      { x: "Apr", y: 61 },
                      { x: "May", y: 55 },
                    ],
                  },
                ],
              })}
            />
          </HeroCard>

          <HeroCard element={mockElement({ title: "Nivo Bar Chart" })}>
            <NivoBar
              element={mockElement({
                height: 250,
                data: [
                  { label: "Q1", value: 120 },
                  { label: "Q2", value: 150 },
                  { label: "Q3", value: 180 },
                  { label: "Q4", value: 200 },
                ],
              })}
            />
          </HeroCard>

          <HeroCard element={mockElement({ title: "Nivo Pie Chart (Donut)" })}>
            <NivoPie
              element={mockElement({
                height: 300,
                innerRadius: 0.5,
                data: [
                  { id: "Desktop", label: "Desktop", value: 45 },
                  { id: "Mobile", label: "Mobile", value: 35 },
                  { id: "Tablet", label: "Tablet", value: 20 },
                ],
              })}
            />
          </HeroCard>
        </div>

        {/* =========================================
            Profile B: Clean (shadcn/ui + Recharts)
            ========================================= */}
        <h2 className="text-2xl font-semibold mt-12">
          Profile B: Clean (shadcn/ui + Recharts)
        </h2>

        {/* shadcn/ui Components */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">shadcn/ui Components</h3>
          <ShadcnCard
            element={mockElement({
              title: "shadcn/ui Demo",
              description: "Button, Badge, Tabs",
            })}
          >
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <ShadcnButton
                  element={mockElement({
                    label: "Default",
                    variant: "default",
                  })}
                />
                <ShadcnButton
                  element={mockElement({
                    label: "Outline",
                    variant: "outline",
                  })}
                />
                <ShadcnButton
                  element={mockElement({ label: "Ghost", variant: "ghost" })}
                />
                <ShadcnButton
                  element={mockElement({
                    label: "Destructive",
                    variant: "destructive",
                  })}
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                <ShadcnBadge
                  element={mockElement({ text: "Default", variant: "default" })}
                />
                <ShadcnBadge
                  element={mockElement({
                    text: "Secondary",
                    variant: "secondary",
                  })}
                />
                <ShadcnBadge
                  element={mockElement({
                    text: "Destructive",
                    variant: "destructive",
                  })}
                />
                <ShadcnBadge
                  element={mockElement({ text: "Outline", variant: "outline" })}
                />
              </div>

              <ShadcnTabs
                element={mockElement({
                  tabs: [
                    {
                      key: "overview",
                      title: "Overview",
                      content: "Overview content here",
                    },
                    {
                      key: "analytics",
                      title: "Analytics",
                      content: "Analytics content here",
                    },
                    {
                      key: "settings",
                      title: "Settings",
                      content: "Settings content here",
                    },
                  ],
                })}
              />
            </div>
          </ShadcnCard>
        </div>

        {/* Recharts */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Recharts</h3>
          <ShadcnCard element={mockElement({ title: "Recharts Line Chart" })}>
            <RechartsLine
              element={mockElement({
                height: 250,
                stroke: "#8884d8",
                data: [
                  { name: "Jan", value: 400 },
                  { name: "Feb", value: 300 },
                  { name: "Mar", value: 500 },
                  { name: "Apr", value: 450 },
                  { name: "May", value: 600 },
                ],
              })}
            />
          </ShadcnCard>

          <ShadcnCard
            element={mockElement({ title: "Recharts Bar Chart (Colorful)" })}
          >
            <RechartsBar
              element={mockElement({
                height: 250,
                colorful: true,
                data: [
                  { name: "A", value: 400 },
                  { name: "B", value: 300 },
                  { name: "C", value: 500 },
                  { name: "D", value: 350 },
                ],
              })}
            />
          </ShadcnCard>
        </div>

        {/* Summary */}
        <div className="mt-12 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold">✅ Components Tested</h3>
          <ul className="mt-2 text-sm text-muted-foreground grid grid-cols-2 gap-1">
            <li>• HeroButton</li>
            <li>• HeroCard</li>
            <li>• HeroInput</li>
            <li>• HeroTextarea</li>
            <li>• HeroSelect</li>
            <li>• HeroCheckbox</li>
            <li>• HeroModal</li>
            <li>• HeroTabs</li>
            <li>• NivoLine</li>
            <li>• NivoBar</li>
            <li>• NivoPie</li>
            <li>• ShadcnButton</li>
            <li>• ShadcnCard</li>
            <li>• ShadcnBadge</li>
            <li>• ShadcnTabs</li>
            <li>• RechartsLine</li>
            <li>• RechartsBar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
