const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Download image function with retry and fallback
const downloadImage = (url, filename, retries = 3) => {
  return new Promise((resolve, reject) => {
    const attempt = (retryCount) => {
      const filePath = path.join('public/images/verification', filename);
      const file = fs.createWriteStream(filePath);
      
      const client = url.startsWith('https:') ? https : http;
      
      const req = client.get(url, (response) => {
        // Check if response is successful
        if (response.statusCode !== 200) {
          file.close();
          fs.unlink(filePath, () => {});
          if (retryCount > 0) {
            console.log(`Retrying ${filename} (${3 - retryCount + 1}/3)...`);
            setTimeout(() => attempt(retryCount - 1), 1000);
            return;
          }
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }
        
        response.pipe(file);
        
        file.on('finish', () => {
          file.close();
          
          // Check if file has content
          fs.stat(filePath, (err, stats) => {
            if (err) {
              reject(err);
              return;
            }
            
            if (stats.size < 1000) { // Less than 1KB is likely an error
              fs.unlink(filePath, () => {});
              if (retryCount > 0) {
                console.log(`File too small, retrying ${filename} (${3 - retryCount + 1}/3)...`);
                setTimeout(() => attempt(retryCount - 1), 1000);
                return;
              }
              reject(new Error('File too small'));
              return;
            }
            
            console.log(`Successfully downloaded: ${filename} (${stats.size} bytes)`);
            resolve();
          });
        });
      }).on('error', (err) => {
        file.close();
        fs.unlink(filePath, () => {});
        if (retryCount > 0) {
          console.log(`Error downloading ${filename}, retrying... (${3 - retryCount + 1}/3)`);
          setTimeout(() => attempt(retryCount - 1), 1000);
          return;
        }
        reject(err);
      });
    };
    
    attempt(retries);
  });
};

// Alternative image sources for failed downloads
const alternativeImages = {
  'computer1.jpg': 'https://picsum.photos/200/200?random=computer1',
  'computer3.jpg': 'https://picsum.photos/200/200?random=computer3', 
  'computer4.jpg': 'https://picsum.photos/200/200?random=computer4',
  'car1.jpg': 'https://picsum.photos/200/200?random=car1',
  'coffee.jpg': 'https://picsum.photos/200/200?random=coffee',
  'default.jpg': 'https://picsum.photos/200/200?random=default',
  'street.jpg': 'https://picsum.photos/200/200?random=street'
};

// Main retry function
const retryFailedDownloads = async () => {
  console.log('Retrying failed downloads...');
  
  const failedFiles = [
    'computer1.jpg',
    'computer3.jpg', 
    'computer4.jpg',
    'car1.jpg',
    'coffee.jpg',
    'default.jpg',
    'street.jpg'
  ];
  
  for (const filename of failedFiles) {
    try {
      const alternativeUrl = alternativeImages[filename];
      if (alternativeUrl) {
        console.log(`Downloading alternative for ${filename}...`);
        await downloadImage(alternativeUrl, filename);
      }
    } catch (error) {
      console.error(`Failed to download ${filename}:`, error.message);
    }
  }
  
  console.log('Retry process completed!');
};

// Run the retry
retryFailedDownloads();
