/**
 * Returns the full path for an asset, prepending the base URL if needed.
 * This ensures assets load correctly both locally and when deployed to a subdirectory (e.g. GitHub Pages).
 * 
 * @param path - The absolute path to the asset (e.g. "/services/image.png")
 * @returns The full path with base URL (e.g. "/duhvia-landing/services/image.png")
 */
export function getAssetPath(path: string): string {
    // import.meta.env.BASE_URL is set by Vite based on the 'base' config in vite.config.ts
    // It usually ends with a slash, so we remove the leading slash from the path if present
    const baseUrl = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;

    return `${baseUrl}${cleanPath}`;
}
