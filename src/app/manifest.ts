import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tempo Converter',
    short_name: 'Tempo Converter',
    description: 'A simple tap tempo converter for musicians and audio engineers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    orientation: 'portrait',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
