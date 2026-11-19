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
    return '/resources/' + cleanPath.replace(/^resources\//, '');
  }
  if (cleanPath.startsWith('placement_masterclass/batch_26/') || cleanPath.startsWith('placement_masterclass/company_logo/') || cleanPath.startsWith('resources/placement_masterclass/')) {
    return '/resources/' + cleanPath.replace(/^resources\//, '');
  }

  if (NORMALIZED_LOOKUP[cleanPath.toLowerCase()]) {
    return NORMALIZED_LOOKUP[cleanPath.toLowerCase()];
  }

  const match = cleanPath.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }

  return assetPath.startsWith('/') ? assetPath : `https://lh3.googleusercontent.com/d/${cleanPath}`;
};

export default driveAsset;
