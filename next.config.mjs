/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 啟用靜態導出
  basePath: '/portfolio', // 子路徑
  assetPrefix: '/portfolio/', // 靜態資源前綴
};

export default nextConfig;
