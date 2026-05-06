const fs = require('fs');
const path = require('path');
const https = require('https');

// Proper computer/tech image URLs from Unsplash
const computerImages = [
  {
    filename: 'computer1.jpg',
    url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    description: 'Laptop computer'
  },
  {
    filename: 'computer2.jpg',
    url: 'https://images.unsplash.com/photo-1587831990711-8459728a3e3c?w=400&h=400&fit=crop',
    description: 'Desktop computer'
  },
  {
    filename: 'computer3.jpg',
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop',
    description: 'Computer setup'
  },
  {
    filename: 'computer4.jpg',
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop',
    description: 'Coding on computer'
  },
  {
    filename: 'coffee.jpg',
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
    description: 'Coffee cup'
  },
  {
    filename: 'street.jpg',
    url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop',
    description: 'City street'
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
            reject(err);
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(filepath);
          if (stats.size < 1000) {
            console.error(`✗ ${filename} too small (${stats.size} bytes)`);
            fs.unlinkSync(filepath);
            resolve(false);
          } else {
            console.log(`✓ Downloaded ${filename} (${stats.size} bytes)`);
            resolve(true);
          }
        });
        
        response.on('error', (err) => {
          fs.unlinkSync(filepath);
          reject(err);
        });
      }
    }).on('error', (err) => {
      console.error(`✗ Failed to download ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Main function
async function main() {
  console.log('Fixing computer verification images...\n');
  
  let successCount = 0;
  
  for (const image of computerImages) {
    try {
      const success = await downloadImage(image.url, image.filename);
      if (success) successCount++;
    } catch (error) {
      console.error(`Failed: ${error.message}`);
    }
  }
  
  console.log(`\n✓ Fixed ${successCount}/${computerImages.length} images`);
}

main().catch(console.error);
