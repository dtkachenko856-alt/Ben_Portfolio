const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const createDirectories = () => {
  const dirs = [
    'public/images/verification',
    'public/images/portfolio', 
    'public/images/avatar'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
};

// Download image function
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join('public/images/verification', filename);
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
const downloadAllImages = async () => {
  console.log('Starting image downloads...');
  
  createDirectories();
  
  // Computer images
  const computerImages = [
    { url: 'https://images.unsplash.com/photo-1497366214047-51231e5b8327?w=200&h=200&fit=crop', filename: 'computer1.jpg' },
    { url: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=200&h=200&fit=crop', filename: 'computer2.jpg' },
    { url: 'https://images.unsplash.com/photo-1577896851231-70ef188817c1?w=200&h=200&fit=crop', filename: 'computer3.jpg' },
    { url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?w=200&h=200&fit=crop', filename: 'computer4.jpg' }
  ];
  
  // Car images
  const carImages = [
    { url: 'https://images.unsplash.com/photo-1554224712-7caa0d4b04b0?w=200&h=200&fit=crop', filename: 'car1.jpg' },
    { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&h=200&fit=crop', filename: 'car2.jpg' },
    { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=200&h=200&fit=crop', filename: 'car3.jpg' },
    { url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=200&h=200&fit=crop', filename: 'car4.jpg' }
  ];
  
  // Tree images
  const treeImages = [
    { url: 'https://images.unsplash.com/photo-1540206395-68808572332f?w=200&h=200&fit=crop', filename: 'tree1.jpg' },
    { url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=200&h=200&fit=crop', filename: 'tree2.jpg' },
    { url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=200&h=200&fit=crop', filename: 'tree3.jpg' },
    { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop', filename: 'tree4.jpg' }
  ];
  
  // Beach images
  const beachImages = [
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=200&fit=crop', filename: 'beach1.jpg' },
    { url: 'https://images.unsplash.com/photo-1519904951063-b0cf448d479e?w=200&h=200&fit=crop', filename: 'beach2.jpg' },
    { url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=200&fit=crop', filename: 'beach3.jpg' },
    { url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=200&h=200&fit=crop', filename: 'beach4.jpg' }
  ];
  
  // Building images
  const buildingImages = [
    { url: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=200&h=200&fit=crop', filename: 'building1.jpg' },
    { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop', filename: 'building2.jpg' },
    { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop', filename: 'building3.jpg' },
    { url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=200&fit=crop', filename: 'building4.jpg' }
  ];
  
  // Distractor images
  const distractorImages = [
    { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop', filename: 'store.jpg' },
    { url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop', filename: 'shoes.jpg' },
    { url: 'https://images.unsplash.com/photo-1519904951063-b0cf448d479e?w=200&h=200&fit=crop', filename: 'street.jpg' },
    { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop', filename: 'coffee.jpg' },
    { url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=200&fit=crop', filename: 'office.jpg' }
  ];
  
  // Default fallback image
  const defaultImage = [
    { url: 'https://picsum.photos/200/200?random=default', filename: 'default.jpg' }
  ];
  
  try {
    // Download all images
    const allImages = [
      ...computerImages,
      ...carImages, 
      ...treeImages,
      ...beachImages,
      ...buildingImages,
      ...distractorImages,
      ...defaultImage
    ];
    
    for (const image of allImages) {
      try {
        await downloadImage(image.url, image.filename);
        // Add small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`Failed to download ${image.filename}:`, error.message);
      }
    }
    
    console.log('All downloads completed!');
  } catch (error) {
    console.error('Download process failed:', error);
  }
};

// Run the download
downloadAllImages();
