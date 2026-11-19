/**
 * Google Drive Asset Configuration & Direct URL Resolution
 * Automatically mapped from Google Drive resources.
 */

export const getDriveImageUrl = (idOrUrl) => {
  if (!idOrUrl) return '';
  if (idOrUrl.startsWith('/') || idOrUrl.startsWith('http')) return idOrUrl;
  const match = idOrUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const id = match ? match[1] : idOrUrl;
  return `https://lh3.googleusercontent.com/d/${id}`;
};

export const getDriveVideoUrl = (idOrUrl) => {
  if (!idOrUrl) return '';
  const match = idOrUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const id = match ? match[1] : idOrUrl;
  return `https://drive.google.com/uc?export=download&id=${id}`;
};

export const DRIVE_IMAGES = {
  "nexus-pirate-map.png": {
    id: "vertical-map",
    directUrl: "/mapvertical.png",
    filename: "nexus-pirate-map.png",
  },
  "mapvertical.png": {
    id: "mapvertical",
    directUrl: "/mapvertical.png",
    filename: "mapvertical.png",
  },
  // Batch 26 Placement Masterclass images
  "placement_masterclass/batch_26/1794819174752.jpg": {
    id: "13tfKT4xPNVFeBiBmxjuel45GpquiobyD",
    directUrl: "https://lh3.googleusercontent.com/d/13tfKT4xPNVFeBiBmxjuel45GpquiobyD",
    filename: "1794819174752.jpg",
  },
  "placement_masterclass/batch_26/1794215442354.jpg": {
    id: "18X2X5Qhx_cq4BoSkXH5BjH725i06r4jg",
    directUrl: "https://lh3.googleusercontent.com/d/18X2X5Qhx_cq4BoSkXH5BjH725i06r4jg",
    filename: "1794215442354.jpg",
  },
  "placement_masterclass/batch_26/1789367619332.jpg": {
    id: "1tz563D1OKPM7gsvxTZKXtT7TG_zQ-K52",
    directUrl: "https://lh3.googleusercontent.com/d/1tz563D1OKPM7gsvxTZKXtT7TG_zQ-K52",
    filename: "1789367619332.jpg",
  },
  "placement_masterclass/batch_26/1789964351609.jpg": {
    id: "1I9I2aJuhA0iikKTzWVWeiZ-ZiEYZF9OV",
    directUrl: "https://lh3.googleusercontent.com/d/1I9I2aJuhA0iikKTzWVWeiZ-ZiEYZF9OV",
    filename: "1789964351609.jpg",
  },
  "placement_masterclass/batch_26/1790583463713.jpg": {
    id: "1M7FdGZF7eoc5UM8n3kbKCQshHC-d4iH9",
    directUrl: "https://lh3.googleusercontent.com/d/1M7FdGZF7eoc5UM8n3kbKCQshHC-d4iH9",
    filename: "1790583463713.jpg",
  },
  "placement_masterclass/batch_26/1792390495435.jpg": {
    id: "1QMBrd8GAoOzKQpY1xSc7IrgXcOIynRnn",
    directUrl: "https://lh3.googleusercontent.com/d/1QMBrd8GAoOzKQpY1xSc7IrgXcOIynRnn",
    filename: "1792390495435.jpg",
  },
  "placement_masterclass/batch_26/1792993222416.jpg": {
    id: "11W1gsVAaCHXAngue-0DG8_oyj1n-ql6v",
    directUrl: "https://lh3.googleusercontent.com/d/11W1gsVAaCHXAngue-0DG8_oyj1n-ql6v",
    filename: "1792993222416.jpg",
  },
  "placement_masterclass/batch_26/1793603918239.jpg": {
    id: "1PYigKTJJuxbml_d5Z0j6uL8hPuZYebel",
    directUrl: "https://lh3.googleusercontent.com/d/1PYigKTJJuxbml_d5Z0j6uL8hPuZYebel",
    filename: "1793603918239.jpg",
  },
  // Company logos
  "placement_masterclass/company_logo/visa.png": {
    id: "1eH_ljvKuuflWIi8AUkDYGpHRCkMsdQ_V",
    directUrl: "https://lh3.googleusercontent.com/d/1eH_ljvKuuflWIi8AUkDYGpHRCkMsdQ_V",
    filename: "visa.png",
  },
  "placement_masterclass/company_logo/tekion.png": {
    id: "1zkAhnt72BBOyxaqgQW-xFzc7-K1dhjD_",
    directUrl: "https://lh3.googleusercontent.com/d/1zkAhnt72BBOyxaqgQW-xFzc7-K1dhjD_",
    filename: "tekion.png",
  },
  "placement_masterclass/company_logo/bny_mellon.jpg": {
    id: "1KNn98kfJbnNnQqMLXYGFk70KXmwh2TGY",
    directUrl: "https://lh3.googleusercontent.com/d/1KNn98kfJbnNnQqMLXYGFk70KXmwh2TGY",
    filename: "bny_mellon.jpg",
  },
  "placement_masterclass/company_logo/optum.jpg": {
    id: "1pzfzerO1kTSlsn5pFXVxt-Mlbju6xVZq",
    directUrl: "https://lh3.googleusercontent.com/d/1pzfzerO1kTSlsn5pFXVxt-Mlbju6xVZq",
    filename: "optum.jpg",
  },
};

// Normalized fast lookup map
const NORMALIZED_LOOKUP = {};
Object.keys(DRIVE_IMAGES).forEach((key) => {
  const item = DRIVE_IMAGES[key];
  const normKey = key.replace(/\\/g, '/').toLowerCase();
  NORMALIZED_LOOKUP[normKey] = item.directUrl;
  const bareName = item.filename.toLowerCase();
  if (!NORMALIZED_LOOKUP[bareName]) {
    NORMALIZED_LOOKUP[bareName] = item.directUrl;
  }
});

export const driveAsset = (assetPath) => {
  if (!assetPath) return '';
  const cleanPath = assetPath
    .replace(/\\/g, '/')
    .replace(/^(\.\.\/)+assets\//, '')
    .replace(/^assets\//, '')
    .replace(/^\/+/, '');

  if (cleanPath === 'nexus-pirate-map.png' || cleanPath === 'mapvertical.png' || cleanPath.toLowerCase().includes('map')) {
    return '/mapvertical.png';
  }
  if (cleanPath.startsWith('pirate_theme/') || cleanPath.startsWith('resources/pirate_theme/')) {
    const pirateSubPath = cleanPath.replace(/^resources\//, '');
    return '/resources/' + pirateSubPath;
  }
  if (NORMALIZED_LOOKUP[cleanPath.toLowerCase()]) {
    return NORMALIZED_LOOKUP[cleanPath.toLowerCase()];
  }
  return assetPath.startsWith('/') ? assetPath : `https://lh3.googleusercontent.com/d/${assetPath}`;
};

export default driveAsset;
