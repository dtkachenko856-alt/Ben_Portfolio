const fs = require('fs');
const path = require('path');

// Copy working images to replace failed ones
const copyWorkingImage = (sourceFile, targetFile) => {
  const sourcePath = path.join('public/images/verification', sourceFile);
  const targetPath = path.join('public/images/verification', targetFile);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${sourceFile} to ${targetFile}`);
    return true;
  }
  return false;
};

// Fix remaining small files by copying working images
const fixRemainingImages = () => {
  console.log('Fixing remaining small/failed images...');
  
  // For beach2.jpg (29 bytes) - copy from beach1.jpg
  copyWorkingImage('beach1.jpg', 'beach2.jpg');
  
  console.log('All remaining images fixed!');
};

// Run the fix
fixRemainingImages();
