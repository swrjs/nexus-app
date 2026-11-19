import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { DRIVE_IMAGES } from './src/constants/driveImages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
  }
}

async function run() {
  const srcResources = path.join(__dirname, 'src', 'resources');
  const pubResources = path.join(__dirname, 'public', 'resources');

  console.log('Copying local resources from src/resources to public/resources...');
  copyRecursiveSync(srcResources, pubResources);
  console.log('Copy complete!');

  // Now update driveImages.js to use /resources/...
  const newDriveImagesCode = `/**
 * Local Localized Asset Configuration & Direct URL Resolution
 * Burned-in assets stored locally in public/resources
 */

export const getDriveImageUrl = (idOrUrl) => {
  if (!idOrUrl) return '';
  if (idOrUrl.startsWith('/') || idOrUrl.startsWith('http')) return idOrUrl;
  return \`/resources/\${idOrUrl.replace(/\\\\/g, '/')}\`;
};

export const getDriveVideoUrl = (idOrUrl) => {
  return getDriveImageUrl(idOrUrl);
};

export const DRIVE_IMAGES = ${JSON.stringify(DRIVE_IMAGES, null, 2)};

// Normalized fast lookup map
const NORMALIZED_LOOKUP = {};
Object.keys(DRIVE_IMAGES).forEach((key) => {
  const normKey = key.replace(/\\\\/g, '/').toLowerCase();
  NORMALIZED_LOOKUP[normKey] = \`/resources/\${key.replace(/\\\\/g, '/')}\`;
  const parts = key.replace(/\\\\/g, '/').split('/');
  const bareName = parts[parts.length - 1].toLowerCase();
  if (!NORMALIZED_LOOKUP[bareName]) {
    NORMALIZED_LOOKUP[bareName] = \`/resources/\${key.replace(/\\\\/g, '/')}\`;
  }
});

export const driveAsset = (assetPath) => {
  if (!assetPath) return '';
  const norm = assetPath.replace(/\\\\/g, '/').replace(/^(\\.\\\\/)+resources\\\\/, '').replace(/^resources\\\\/, '').toLowerCase();
  if (NORMALIZED_LOOKUP[norm]) {
    return NORMALIZED_LOOKUP[norm];
  }
  for (const [k, url] of Object.entries(NORMALIZED_LOOKUP)) {
    if (k.endsWith(norm) || norm.endsWith(k)) {
      return url;
    }
  }
  return assetPath.startsWith('/') ? assetPath : \`/resources/\${assetPath}\`;
};

export default driveAsset;
`;

  fs.writeFileSync(path.join(__dirname, 'src', 'constants', 'driveImages.js'), newDriveImagesCode, 'utf8');
  console.log('Updated src/constants/driveImages.js to point to /resources/');
}

run();
