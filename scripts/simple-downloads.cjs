const fs = require('fs');
const path = require('path');

// Create simple placeholder images using base64 encoded 1x1 pixel images
const createPlaceholderImage = (filename, color = '4A90E2') => {
  // Create a simple 200x200 PNG with the specified color
  const base64PNG = `iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==`;
  
  // For a 200x200 image, we'll use a simple pattern
  const canvas = `
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#${color}"/>
  <text x="100" y="100" font-family="Arial" font-size="12" fill="white" text-anchor="middle">
    ${filename.replace('.jpg', '').toUpperCase()}
  </text>
</svg>`;
  
  const filePath = path.join('public/images/verification', filename);
  fs.writeFileSync(filePath, canvas);
  console.log(`Created placeholder: ${filename}`);
};

// Create placeholders for failed images
const createPlaceholders = () => {
  console.log('Creating placeholder images for failed downloads...');
  
  const placeholders = [
    { filename: 'computer1.jpg', color: '0066CC' },
    { filename: 'computer3.jpg', color: '0066CC' },
    { filename: 'computer4.jpg', color: '0066CC' },
    { filename: 'car1.jpg', color: 'CC0000' },
    { filename: 'coffee.jpg', color: '8B4513' },
    { filename: 'default.jpg', color: '808080' },
    { filename: 'street.jpg', color: '666666' }
  ];
  
  placeholders.forEach(placeholder => {
    createPlaceholderImage(placeholder.filename, placeholder.color);
  });
  
  console.log('All placeholders created!');
};

// Run the placeholder creation
createPlaceholders();
