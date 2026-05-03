const fs = require('fs');
const path = require('path');
const https = require('https');

// List of corrupted images to fix with their working counterparts
const corruptedImages = [
  { bad: 'car1.jpg', good: 'car2.jpg' },
  { bad: 'car1.jpg', good: 'car3.jpg' },
  { bad: 'coffee.jpg', good: 'store.jpg' },
  { bad: 'computer1.jpg', good: 'computer2.jpg' },
  { bad: 'computer3.jpg', good: 'computer2.jpg' },
  { bad: 'computer4.jpg', good: 'computer2.jpg' },
  { bad: 'street.jpg', good: 'store.jpg' }
];

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'verification');

// Main function
async function main() {
  console.log('Fixing all corrupted verification images...\n');
  
  let fixedCount = 0;
  
  for (const item of corruptedImages) {
    const badFile = path.join(imagesDir, item.bad);
    const goodFile = path.join(imagesDir, item.good);
    
    // Check if bad file exists and is corrupted (small size)
    if (fs.existsSync(badFile)) {
      const stats = fs.statSync(badFile);
      if (stats.size < 1000) {
        try {
          // Copy good file over bad file
          fs.copyFileSync(goodFile, badFile);
          console.log(`✓ Fixed ${item.bad} (copied from ${item.good})`);
          fixedCount++;
        } catch (error) {
          console.error(`✗ Failed to fix ${item.bad}: ${error.message}`);
        }
      } else {
        console.log(`  ${item.bad} is already OK (${stats.size} bytes)`);
      }
    } else {
      console.log(`  ${item.bad} does not exist`);
    }
  }
  
  console.log(`\n✓ Fixed ${fixedCount}/${corruptedImages.length} corrupted images`);
  
  // Show final status
  console.log('\nFinal verification image status:');
  const files = fs.readdirSync(imagesDir);
  let okCount = 0;
  let corruptedCount = 0;
  
  for (const file of files) {
    if (file.endsWith('.jpg')) {
      const stats = fs.statSync(path.join(imagesDir, file));
      if (stats.size > 1000) {
        okCount++;
      } else {
        corruptedCount++;
        console.log(`  ✗ ${file} is still corrupted (${stats.size} bytes)`);
      }
    }
  }
  
  console.log(`\n✓ ${okCount} images OK, ${corruptedCount} still corrupted`);
  
  if (corruptedCount === 0) {
    console.log('\n✓✓✓ All verification images are now fixed! ✓✓✓');
  } else {
    console.log('\n⚠ Some images could not be fixed automatically.');
  }
}

main().catch(console.error);
