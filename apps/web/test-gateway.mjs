import { streamText } from 'ai';
import fs from 'fs';
import path from 'path';

// Load .env manually
const envPath = path.resolve(process.cwd(), '.env');
console.log("Loading .env from:", envPath);

if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
        // Basic dotenv parsing
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim().replace(/^['"]|['"]$/g, ''); // Remove quotes if any
            process.env[key] = value;
        }
    });
}

const apiKey = process.env.AI_GATEWAY_API_KEY;
console.log("AI_GATEWAY_API_KEY present:", !!apiKey);
if (apiKey) console.log("AI_GATEWAY_API_KEY length:", apiKey.length);

const model = process.env.AI_GATEWAY_MODEL || "anthropic/claude-haiku-4.5";
console.log("Using model:", model);

async function test() {
    try {
        console.log("Starting streamText request...");
        const result = streamText({
            model: model,
            prompt: "Reply with 'Connection Successful' if you can read this.",
        });

        console.log("Stream initiated. Waiting for chunks...");
        for await (const textPart of result.textStream) {
            process.stdout.write(textPart);
        }
        console.log("\n\nTest Passed.");
    } catch (error) {
        console.error("\nTest Failed:", error);
        if (error.cause) console.error("Cause:", error.cause);
        if (error.message) console.error("Message:", error.message);
    }
}

test();
