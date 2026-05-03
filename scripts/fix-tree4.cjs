const fs = require('fs');
const path = require('path');
const https = require('https');

// Alternative tree image URLs
const treeImages = [
  {
    filename: 'tree4.jpg',
    url: 'https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?w=400&h=400&fit=crop',
    description: 'Pine forest'
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
  console.log('Fixing tree4 image...\n');
  
  // Ensure directory exists
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  for (const image of treeImages) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Failed to download ${image.filename}: ${error.message}`);
    }
  }
}

main().catch(console.error);
