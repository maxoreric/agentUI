#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// Configuration
const AGENT_DIR = path.join(os.homedir(), '.agent-ui');
const INPUT_FILE = path.join(AGENT_DIR, 'user-input.json');

// Ensure directory exists
if (!fs.existsSync(AGENT_DIR)) {
    fs.mkdirSync(AGENT_DIR, { recursive: true });
}

// Clear existing input file to avoid reading stale data
if (fs.existsSync(INPUT_FILE)) {
    fs.unlinkSync(INPUT_FILE);
}

console.error('Waiting for user input on the dashboard...');

// Polling loop
const checkInput = () => {
    if (fs.existsSync(INPUT_FILE)) {
        try {
            const content = fs.readFileSync(INPUT_FILE, 'utf8');
            // Verify it's valid JSON and not empty
            if (content.trim()) {
                const json = JSON.parse(content);

                // Output result to stdout for the Agent to read
                console.log(JSON.stringify(json, null, 2));

                // Clean up
                fs.unlinkSync(INPUT_FILE);
                process.exit(0);
            }
        } catch (e) {
            // Ignore partial read errors, wait for next tick
        }
    }

    // Continue polling
    setTimeout(checkInput, 500);
};

checkInput();
