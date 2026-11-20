/**
 * 100% Local Asset Resolution
 * All assets (map, members, events, gallery, PMC) are served locally from /resources/
 * ensuring 100% offline-ready performance and lightning-fast loading.
 */

export const getDriveImageUrl = (idOrUrl) => {
  if (!idOrUrl) return '';
  if (idOrUrl.startsWith('/') || idOrUrl.startsWith('http')) return idOrUrl;
  const cleanPath = idOrUrl.replace(/\\/g, '/').replace(/^\/+/, '');
  return `/resources/${cleanPath}`;
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

  if (cleanPath === 'nexus-pirate-map.png' || cleanPath === 'mapvertical.png' || cleanPath.toLowerCase().includes('map')) {
    return '/mapvertical.png';
  }

  // Serve 100% locally from public / resources
  const subPath = cleanPath.replace(/^resources\//, '');
  return `/resources/${subPath}`;
};

export default driveAsset;
