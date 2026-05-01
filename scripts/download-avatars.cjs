const fs = require('fs');
const path = require('path');
const https = require('https');

// Create avatar directory if it doesn't exist
const createAvatarDirectory = () => {
  const dir = 'public/images/avatar';
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
};

// Download image function
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join('public/images/avatar', filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the partial file
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
};

// Main download function
const downloadAvatarImages = async () => {
  console.log('Starting avatar image downloads...');
  
  createAvatarDirectory();
  
  // Avatar images from the current portfolio
  const avatarImages = [
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format', filename: 'hero-avatar.jpg' },
    { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=700&fit=crop&auto=format', filename: 'about-avatar.jpg' }
  ];
  
  try {
    for (const image of avatarImages) {
      try {
        await downloadImage(image.url, image.filename);
        // Add small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`Failed to download ${image.filename}:`, error.message);
      }
    }
    
    console.log('Avatar downloads completed!');
  } catch (error) {
    console.error('Avatar download process failed:', error);
  }
};

// Run the download
downloadAvatarImages();
