/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enabling static export mode
    trailingSlash: true,
  
    // Configuring export path map
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/projects': { page: '/projects' },
        '/contact': { page: '/contact' },
        // Add additional pages as needed
      }
    },
  };
  
  export default nextConfig;
  