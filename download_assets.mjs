import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { DRIVE_IMAGES } from './src/constants/driveImages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function downloadAll() {
  const assetsDir = path.join(__dirname, 'public', 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  let successCount = 0;
  let failCount = 0;

  for (const [key, item] of Object.entries(DRIVE_IMAGES)) {
    // Skip mapvertical.png or fonts if handled separately, but let's download everything
    const url = item.directUrl;
    if (!url) continue;

    const destPath = path.join(assetsDir, key.replace(/\\/g, '/'));
    const destDir = path.dirname(destPath);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const arrayBuffer = await response.arrayBuffer();
      fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
      console.log(`[SUCCESS] Downloaded: ${key}`);
      successCount++;
    } catch (err) {
      console.error(`[FAIL] Failed to download ${key}: ${err.message}`);
      failCount++;
    }
  }

  console.log(`\nDownload complete! Success: ${successCount}, Fail: ${failCount}`);

  // Now generate updated driveImages.js that points to local /assets/...
  const newDriveImagesCode = `/**
 * Local Localized Asset Configuration & Direct URL Resolution
 * Burned-in assets stored locally in public/assets
 */

export const getDriveImageUrl = (idOrUrl) => {
  if (!idOrUrl) return '';
  // If it's already a local path or full URL, return it
  if (idOrUrl.startsWith('/') || idOrUrl.startsWith('http')) return idOrUrl;
  return \`/assets/\${idOrUrl.replace(/\\\\/g, '/')}\`;
};

export const getDriveVideoUrl = (idOrUrl) => {
  return getDriveImageUrl(idOrUrl);
};

export const DRIVE_IMAGES = ${JSON.stringify(DRIVE_IMAGES, null, 2)};

// Normalized fast lookup map
const NORMALIZED_LOOKUP = {};
Object.keys(DRIVE_IMAGES).forEach((key) => {
  const normKey = key.replace(/\\\\/g, '/').toLowerCase();
  NORMALIZED_LOOKUP[normKey] = \`/assets/\${key.replace(/\\\\/g, '/')}\`;
  const parts = key.replace(/\\\\/g, '/').split('/');
  const bareName = parts[parts.length - 1].toLowerCase();
  if (!NORMALIZED_LOOKUP[bareName]) {
    NORMALIZED_LOOKUP[bareName] = \`/assets/\${key.replace(/\\\\/g, '/')}\`;
  }
});

export const driveAsset = (assetPath) => {
  if (!assetPath) return '';
  const norm = assetPath.replace(/\\\\/g, '/').replace(/^(\\.\\\\/)+assets\\\\/, '').replace(/^assets\\\\/, '').toLowerCase();
  if (NORMALIZED_LOOKUP[norm]) {
    return NORMALIZED_LOOKUP[norm];
  }
  for (const [k, url] of Object.entries(NORMALIZED_LOOKUP)) {
    if (k.endsWith(norm) || norm.endsWith(k)) {
      return url;
    }
  }
  // Fallback to assetPath as local path
  return assetPath.startsWith('/') ? assetPath : \`/assets/\${assetPath}\`;
};

export default driveAsset;
`;

  fs.writeFileSync(path.join(__dirname, 'src', 'constants', 'driveImages.js'), newDriveImagesCode, 'utf8');
  console.log('Updated src/constants/driveImages.js successfully!');
}

downloadAll();
