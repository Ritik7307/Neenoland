export const CLOUDINARY_CLOUD_NAME = 'dnh1p0xax';

/**
 * Generates an optimized Cloudinary URL for a given image path.
 * Usage: getImageUrl('my-image.jpg') -> https://res.cloudinary.com/.../my-image.jpg
 */
export const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('data:')) return path;

    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    let fileName = cleanPath.replace(/^images\//, '');

    fileName = fileName.replace(/\.JPG$/, '.jpg').replace(/\.PNG$/, '.png');

    // Removed specific version 'v1...' as per user request to handle dynamic versions.
    // Cloudinary supports versionless URLs.
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${fileName}`;
};

/**
 * Generates an optimized Cloudinary URL for a given VIDEO path.
 * Usage: getVideoUrl('my-video.mp4') -> https://res.cloudinary.com/.../my-video.mp4
 */
export const getVideoUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    let fileName = cleanPath.replace(/^images\//, '');

    // Video URL structure: .../video/upload/...
    // We removed version numbers here too for consistency.
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/f_auto,q_auto/${fileName}`;
};
