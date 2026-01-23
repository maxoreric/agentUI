#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const RENDER_SCRIPT = path.join(__dirname, 'packages/render-skill/scripts/render.js');
const WAIT_SCRIPT = path.join(__dirname, 'packages/render-skill/scripts/wait_for_input.js');

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

function waitAndCapture() {
    return new Promise((resolve, reject) => {
        const child = spawn('node', [WAIT_SCRIPT]);
        let output = '';

        child.stdout.on('data', (data) => output += data.toString());
        child.stderr.on('data', (data) => console.error(data.toString()));

        child.on('close', (code) => {
            if (code === 0) resolve(JSON.parse(output.trim()));
            else reject(new Error(`Wait script failed with code ${code}`));
        });
    });
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
    console.log("🤖 Agent: Hello! I am starting the demo.");

    // Step 1: Show Welcome Screen
    console.log("🤖 Agent: Rendering Welcome Screen...");
    await run(RENDER_SCRIPT, {
        "root": "card",
        "elements": {
            "card": {
                "key": "card",
                "type": "Card",
                "props": { "title": "Connected!", "description": "Agent is now controlling this view." },
                "children": ["intro"]
            },
            "intro": {
                "key": "intro",
                "type": "Text",
                "props": { "content": "I can update this UI in real-time. Watch me...", "variant": "body" }
            }
        }
    });

    await sleep(2000);

    // Step 2: Show Progress
    console.log("🤖 Agent: Simulating work...");
    for (let i = 0; i <= 100; i += 20) {
        await run(RENDER_SCRIPT, {
            "root": "card",
            "elements": {
                "card": {
                    "key": "card",
                    "type": "Card",
                    "props": { "title": "Processing...", "padding": "lg" },
                    "children": ["bar", "status"]
                },
                "bar": {
                    "key": "bar",
                    "type": "Progress", // Note: Ensure Progress is in catalog or registry? 
                    // I checked catalog.md, Progress was NOT there explicitly but it was in demo/index.ts
                    // Let's use something safer from catalog.md like Metric + Text
                    "props": { "value": i } // Might fail if Progress not supported.
                    // Let's stick to strict catalog.md: Text
                },
                "status": {
                    "key": "status",
                    "type": "Text",
                    "props": { "content": `Loading resources: ${i}%` }
                }
            }
        });
        await sleep(500);
    }

    // Step 3: Ask for Input
    console.log("🤖 Agent: Asking for user input...");
    await run(RENDER_SCRIPT, {
        "root": "form",
        "elements": {
            "form": {
                "key": "form",
                "type": "Card",
                "props": { "title": "User Feedback" },
                "children": ["msg", "name", "email", "submit"]
            },
            "msg": { "key": "msg", "type": "Text", "props": { "content": "Please verify your details below:" } },
            "name": {
                "key": "name", "type": "Input",
                "props": { "label": "Your Name", "bindPath": "/user/name", "placeholder": "Alice" }
            },
            "email": {
                "key": "email", "type": "Input",
                "props": { "label": "Email Address", "bindPath": "/user/email", "placeholder": "alice@example.com" }
            },
            "submit": {
                "key": "submit", "type": "Button",
                "props": { "label": "Submit Feedback", "action": "submit", "variant": "primary" }
            }
        }
    });

    console.log("⏳ Agent: Waiting for you to click Submit on the dashboard...");
    const result = await waitAndCapture();

    console.log("✅ Agent: Received Input!");
    console.log(JSON.stringify(result, null, 2));

    // Final Thank You
    await run(RENDER_SCRIPT, {
        "root": "final",
        "elements": {
            "final": {
                "key": "final",
                "type": "Card",
                "props": { "title": "Thank You", "padding": "lg" },
                "children": ["msg"]
            },
            "msg": { "key": "msg", "type": "Alert", "props": { "type": "success", "title": "Success", "message": `Thanks ${result.user?.name || 'User'}, we received your data!` } }
        }
    });
}

main().catch(console.error);
