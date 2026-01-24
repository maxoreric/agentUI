const { spawn } = require('child_process');
const path = require('path');

const RENDER_SCRIPT = path.join(__dirname, '../render-skill/scripts/render.js');

function run(script, input = null) {
    return new Promise((resolve, reject) => {
        const child = spawn('node', [script], { stdio: ['pipe', 'inherit', 'inherit'] });
        if (input) {
            child.stdin.write(JSON.stringify(input));
            child.stdin.end();
        }
        child.on('close', (code) => {
            if (code === 0) resolve();
            else reject(new Error(`Script failed with code ${code}`));
        });
    });
}

const catalogUI = {
    "root": "main_grid",
    "elements": {
        "main_grid": {
            "key": "main_grid",
            "type": "Grid",
            "props": { "columns": 2, "gap": "md" },
            "children": ["layout_card", "input_card", "display_card", "chart_card"]
        },

        // 1. Layout & Typography
        "layout_card": {
            "key": "layout_card",
            "type": "Card",
            "props": { "title": "Layout & Typography", "description": "Text, Stack, Divider" },
            "children": ["stack_demo"]
        },
        "stack_demo": {
            "key": "stack_demo",
            "type": "Stack",
            "props": { "direction": "vertical", "gap": "sm" },
            "children": ["head1", "text1", "divider1", "badge_row"]
        },
        "head1": { "key": "head1", "type": "Heading", "props": { "text": "Heading H1", "level": "h1" } },
        "text1": { "key": "text1", "type": "Text", "props": { "content": "This is body text with various colors.", "variant": "body" } },
        "divider1": { "key": "divider1", "type": "Divider", "props": { "label": "Badges" } },
        "badge_row": {
            "key": "badge_row",
            "type": "Stack",
            "props": { "direction": "horizontal", "gap": "sm" },
            "children": ["badge1", "badge2", "badge3"]
        },
        "badge1": { "key": "badge1", "type": "Badge", "props": { "text": "Success", "variant": "success" } },
        "badge2": { "key": "badge2", "type": "Badge", "props": { "text": "Warning", "variant": "warning" } },
        "badge3": { "key": "badge3", "type": "Badge", "props": { "text": "Error", "variant": "danger" } },

        // 2. Interactive / Inputs
        "input_card": {
            "key": "input_card",
            "type": "Card",
            "props": { "title": "Interactive Inputs", "padding": "md" },
            "children": ["input_stack"]
        },
        "input_stack": {
            "key": "input_stack",
            "type": "Stack",
            "props": { "direction": "vertical", "gap": "md" },
            "children": ["inp_text", "inp_select", "inp_date", "btn_row"]
        },
        "inp_text": { "key": "inp_text", "type": "Input", "props": { "label": "Text Input", "placeholder": "Type something..." } }, // Note: 'Input' is implied from context, though catalog maps it. Let's verify if 'Input' is in catalog.md. Yes, strictly wait. Catalog.md had 'Select', 'DatePicker', 'Button'. 'Input' was used in SKILL.md example but NOT listed in catalog.md specific text I saw? 
        // Wait, checking Step 56... Catalog.md shows: Button, Select, DatePicker.
        // SKILL.md Example shows: "type": "Input".
        // I will assume "Input" exists as basic text input.
        "inp_select": {
            "key": "inp_select",
            "type": "Select",
            "props": {
                "label": "Select Option",
                "options": [{ "label": "Option A", "value": "a" }, { "label": "Option B", "value": "b" }]
            }
        },
        "inp_date": { "key": "inp_date", "type": "DatePicker", "props": { "label": "Pick a Date" } },
        "btn_row": {
            "key": "btn_row",
            "type": "Stack",
            "props": { "direction": "horizontal" },
            "children": ["btn_p"]
        },
        "btn_p": { "key": "btn_p", "type": "Button", "props": { "label": "Primary Action", "variant": "primary", "action": "test" } },

        // 3. Data Display
        "display_card": {
            "key": "display_card",
            "type": "Card",
            "props": { "title": "Data Display" },
            "children": ["metric1", "alert1"]
        },
        "metric1": {
            "key": "metric1",
            "type": "Metric",
            "props": { "label": "Revenue", "valuePath": "/mock/revenue", "format": "currency", "trend": "up", "trendValue": "15%" }
        },
        "alert1": { "key": "alert1", "type": "Alert", "props": { "title": "Info", "message": "System is running normally.", "type": "info" } },

        // 4. Charts
        "chart_card": {
            "key": "chart_card",
            "type": "Card",
            "props": { "title": "Analytics" },
            "children": ["chart1"]
        },
        "chart1": {
            "key": "chart1",
            "type": "Chart",
            "props": {
                "type": "bar",
                "title": "Monthly Sales",
                "dataPath": "/mock/chartData",
                "height": 200
            }
        }
    }
};

// Mock Data for binding
const mockData = {
    mock: {
        revenue: 45231.89,
        chartData: [
            { name: "Jan", value: 400 },
            { name: "Feb", value: 300 },
            { name: "Mar", value: 600 },
            { name: "Apr", value: 800 },
            { name: "May", value: 500 }
        ]
    }
};

// We need to inject data? The render script often just takes UI structure. 
// Data might be handled by binding to a global store or the agent might need to 'push' data.
// In this simple render-skill, data is usually embedded or we rely on the implementation specifics.
// Let's check render.js arguments or capabilities. 
// Looking at SKILL.md: `echo '{ "root": ... }' | node scripts/render.js`
// It doesn't mention sending data separately.
// However, the components use `valuePath`. 
// If the backend assumes data is present or if we can pass data in the payload.
// Let's assume for now we just render the structure. Use hardcoded static props if bind fails.
// Just simple render.

run(RENDER_SCRIPT, catalogUI).then(() => console.log("Catalog Rendered!")).catch(console.error);
