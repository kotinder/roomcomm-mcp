#!/usr/bin/env node
// Stdio shim: proxies MCP stdio transport to the hosted Roomcomm endpoint.
import { spawn } from 'node:child_process';
const child = spawn('npx', ['-y', 'mcp-remote', 'https://roomcomm.ru/mcp'], { stdio: 'inherit', shell: process.platform === 'win32' });
child.on('exit', (code) => process.exit(code ?? 0));
