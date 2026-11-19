/**
 * JSDelivr GitHub-Backed CDN Asset Resolution
 * Automatically serves all cloud assets reliably via a fast global CDN
 * while keeping only the map burned in locally to minimize app/APK size.
 */

const GITHUB_CDN_BASE = "https://cdn.jsdelivr.net/gh/swrjs/nexus-app@main/src/resources";

export const getDriveImageUrl = (idOrUrl) => {
  if (!idOrUrl) return '';
  if (idOrUrl.startsWith('/') || idOrUrl.startsWith('http')) return idOrUrl;
  const cleanPath = idOrUrl.replace(/\\/g, '/').replace(/^\/+/, '');
  return `${GITHUB_CDN_BASE}/${cleanPath}`;
};

export const getDriveVideoUrl = (idOrUrl) => {
  return getDriveImageUrl(idOrUrl);
};

export const driveAsset = (assetPath) => {
  if (!assetPath) return '';
  if (assetPath.startsWith('/') || assetPath.startsWith('http')) return assetPath;

  const cleanPath = assetPath
    .replace(/\\/g, '/')
    .replace(/^(\.\.\/)+assets\//, '')
    .replace(/^assets\//, '')
    .replace(/^\/+/, '');

  // Keep ONLY the map burned in locally
  if (cleanPath === 'nexus-pirate-map.png' || cleanPath === 'mapvertical.png' || cleanPath.toLowerCase().includes('map')) {
    return '/mapvertical.png';
  }

  // Serve gallery2025, members, events, and all other resources from JSDelivr global CDN
  return `${GITHUB_CDN_BASE}/${cleanPath}`;
};

export default driveAsset;
