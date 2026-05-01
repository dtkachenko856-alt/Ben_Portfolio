#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const nextPath = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');
spawn('node', [nextPath, 'build'], { 
  stdio: 'inherit',
  shell: true
});
