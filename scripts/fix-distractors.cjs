const fs = require('fs');
const path = require('path');
const https = require('https');

// Download proper distractor images (non-computer, non-clothes, non-phone)
const distractors = [
  {
    filename: 'shoes.jpg',
    url: 'https://images.unsplash.com/photo-1560809451-9e77c2e8217a?w=400&h=400&fit=crop',
    description: 'Dog animal'
  },
  {
    filename: 'coffee.jpg',
    url: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400&h=400&fit=crop',
    description: 'Fox animal'
  }
];

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'verification');

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    console.log(`Downloading ${filename}...`);
    
    const file = fs.createWriteStream(filepath);
    
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      timeout: 30000
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
          timeout: 30000
        }, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            const stats = fs.statSync(filepath);
            console.log(`✓ ${filename} (${stats.size} bytes)`);
            resolve(true);
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(filepath);
          if (stats.size < 1000) {
            fs.unlinkSync(filepath);
            resolve(false);
          } else {
            console.log(`✓ ${filename} (${stats.size} bytes)`);
            resolve(true);
          }
        });
      }
    }).on('error', reject);
  });
}

async function main() {
  console.log('Fixing distractor images...\n');
  
  for (const item of distractors) {
    try {
      await downloadImage(item.url, item.filename);
    } catch (error) {
      console.error(`Failed ${item.filename}: ${error.message}`);
    }
  }
  
  console.log('\n✓ Done!');
}

main().catch(console.error);
