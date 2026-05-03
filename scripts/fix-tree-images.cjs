const fs = require('fs');
const path = require('path');
const https = require('https');

// Proper tree image URLs from Unsplash
const treeImages = [
  {
    filename: 'tree1.jpg',
    url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=400&fit=crop',
    description: 'Forest trees'
  },
  {
    filename: 'tree2.jpg',
    url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=400&fit=crop',
    description: 'Palm tree'
  },
  {
    filename: 'tree3.jpg',
    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=400&fit=crop',
    description: 'Oak tree'
  },
  {
    filename: 'tree4.jpg',
    url: 'https://images.unsplash.com/photo-1518495973542-7b0b3c7a9f1a?w=400&h=400&fit=crop',
    description: 'Pine trees'
  }
];

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'verification');

// Download image function
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    
    console.log(`Downloading ${filename}...`);
    
    const file = fs.createWriteStream(filepath);
    
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 30000
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        https.get(response.headers.location, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          },
          timeout: 30000
        }, (redirectResponse) => {
          redirectResponse.pipe(file);
          
          file.on('finish', () => {
            file.close();
            const stats = fs.statSync(filepath);
            console.log(`✓ Downloaded ${filename} (${stats.size} bytes)`);
            resolve(true);
          });
          
          redirectResponse.on('error', (err) => {
            fs.unlinkSync(filepath);
            console.error(`✗ Failed to download ${filename}: ${err.message}`);
            reject(err);
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(filepath);
          if (stats.size < 1000) {
            console.error(`✗ ${filename} too small (${stats.size} bytes), likely invalid`);
            fs.unlinkSync(filepath);
            resolve(false);
          } else {
            console.log(`✓ Downloaded ${filename} (${stats.size} bytes)`);
            resolve(true);
          }
        });
        
        response.on('error', (err) => {
          fs.unlinkSync(filepath);
          console.error(`✗ Failed to download ${filename}: ${err.message}`);
          reject(err);
        });
      }
    }).on('error', (err) => {
      console.error(`✗ Failed to download ${filename}: ${err.message}`);
      reject(err);
    }).on('timeout', () => {
      console.error(`✗ Timeout downloading ${filename}`);
      reject(new Error('Timeout'));
    });
  });
}

// Main function
async function main() {
  console.log('Fixing tree images...\n');
  
  // Ensure directory exists
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  let successCount = 0;
  
  for (const image of treeImages) {
    try {
      const success = await downloadImage(image.url, image.filename);
      if (success) successCount++;
    } catch (error) {
      console.error(`Failed to download ${image.filename}: ${error.message}`);
    }
  }
  
  console.log(`\n✓ Successfully downloaded ${successCount}/${treeImages.length} tree images`);
  
  if (successCount === treeImages.length) {
    console.log('✓ All tree images fixed! The verification puzzle should now work correctly.');
  } else {
    console.log('⚠ Some images failed to download. Please try again.');
  }
}

main().catch(console.error);
