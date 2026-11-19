/**
 * Local Localized Asset Configuration & Direct URL Resolution
 * Burned-in assets stored locally in public/resources
 */

export const getDriveImageUrl = (idOrUrl) => {
  if (!idOrUrl) return '';
  if (idOrUrl.startsWith('/') || idOrUrl.startsWith('http')) return idOrUrl;
  return '/resources/' + idOrUrl.replace(/\\/g, '/');
};

export const getDriveVideoUrl = (idOrUrl) => {
  return getDriveImageUrl(idOrUrl);
};

export const driveAsset = (assetPath) => {
  if (!assetPath) return '';
  const cleanPath = assetPath
    .replace(/\\/g, '/')
    .replace(/^(\.\.\/)+resources\//, '')
    .replace(/^resources\//, '')
    .replace(/^\/+/, '');

  if (cleanPath === 'nexus-pirate-map.png') {
    return '/mapvertical.png';
  }
  return '/resources/' + cleanPath;
};

export default driveAsset;
