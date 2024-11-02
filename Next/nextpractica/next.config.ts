import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        //destination: 'https://api.vercel.app/:path*', 
        destination: 'https://test-deploy-12.onrender.com/:path*'
      },
    ];
  },
  // Otras opciones de configuración de Next.js aquí (si es necesario)
};

export default nextConfig;