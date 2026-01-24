/**
 * Generates a local path URL for a given image path.
 * Usage: getImageUrl('my-image.jpg') -> /images/my-image.jpg
 */
export const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('data:')) return path;

    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const fileName = cleanPath.replace(/^images\//, '').replace(/\.JPG$/, '.jpg').replace(/\.PNG$/, '.png');

    // Route gallery images to the gallery folder
    if (fileName.startsWith('1G4A')) {
        return `/images/gallery/${fileName}`;
    }

    return `/images/${fileName}`;
};

/**
 * Generates a local path URL for a given VIDEO path.
 * Usage: getVideoUrl('my-video.mp4') -> /videos/my-video.mp4
 */
export const getVideoUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const fileName = cleanPath.replace(/^images\//, '');

    return `/videos/${fileName}`;
};
