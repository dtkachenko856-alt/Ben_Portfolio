const fs = require('fs');
const path = require('path');

// SVG content for the robot favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="faceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#e0f2fe;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#bae6fd;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="100" height="100" rx="20" fill="url(#robotGradient)"/>
  <rect x="25" y="20" width="50" height="45" rx="10" fill="url(#faceGradient)"/>
  <line x1="50" y1="20" x2="50" y2="10" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
  <circle cx="50" cy="8" r="4" fill="#06b6d4"/>
  <circle cx="38" cy="38" r="6" fill="#1e293b"/>
  <circle cx="62" cy="38" r="6" fill="#1e293b"/>
  <circle cx="40" cy="36" r="2" fill="white"/>
  <circle cx="64" cy="36" r="2" fill="white"/>
  <rect x="38" y="52" width="24" height="8" rx="2" fill="#06b6d4"/>
  <rect x="40" y="65" width="20" height="8" fill="#64748b"/>
  <rect x="30" y="73" width="40" height="15" rx="5" fill="url(#faceGradient)"/>
  <circle cx="50" cy="80" r="4" fill="#06b6d4"/>
</svg>`;

const publicDir = path.join(__dirname, '..', 'public');

// For now, let's create a simple approach - copy the SVG and create references
// In a production app, you'd use sharp or puppeteer to convert SVG to PNG

console.log('Setting up favicon files for mobile compatibility...\n');

// Ensure the SVG is in place (already done)
const svgPath = path.join(publicDir, 'favicon.svg');
if (fs.existsSync(svgPath)) {
  console.log('✓ favicon.svg exists');
} else {
  fs.writeFileSync(svgPath, svgContent);
  console.log('✓ Created favicon.svg');
}

// Create a manifest.json for PWA support
const manifest = {
  "name": "David Jones - Software Developer Portfolio",
  "short_name": "David Portfolio",
  "description": "Professional Software Developer specializing in React, Node.js, and modern web solutions",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#06b6d4",
  "icons": [
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    }
  ]
};

const manifestPath = path.join(publicDir, 'manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('✓ Created manifest.json for PWA support');

console.log('\n✓ Favicon setup complete!');
console.log('✓ Robot favicon created');
console.log('✓ Mobile-compatible (SVG format scales perfectly on all devices)');
console.log('✓ PWA manifest created');
