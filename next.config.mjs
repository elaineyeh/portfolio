/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 啟用靜態導出
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '', // 子路徑
  images: {
    unoptimized: true, // 為了靜態輸出
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '', // 靜態資源前綴
};

export default nextConfig;
