#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// Configuration
const AGENT_DIR = path.join(os.homedir(), '.agent-ui');
const UI_FILE = path.join(AGENT_DIR, 'ui.json');

// Ensure directory exists
if (!fs.existsSync(AGENT_DIR)) {
    fs.mkdirSync(AGENT_DIR, { recursive: true });
}

// Read input from stdin
let data = '';
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    data += chunk;
});

process.stdin.on('end', function () {
    try {
        if (!data.trim()) {
            console.error('Error: No JSON input provided');
            process.exit(1);
        }

        // Validate JSON
        const json = JSON.parse(data);

        // Atomic write (write to temp file then rename)
        const tempFile = path.join(AGENT_DIR, `ui.json.tmp-${Date.now()}`);
        fs.writeFileSync(tempFile, JSON.stringify(json, null, 2));
        fs.renameSync(tempFile, UI_FILE);

        console.log('UI updated successfully');
    } catch (error) {
        console.error('Error parsing or writing JSON:', error.message);
        process.exit(1);
    }
});
