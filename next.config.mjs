/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 啟用靜態導出
  /* basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '', // 子路徑 */
  /* 原本因為「非自訂網域的子資料夾部署」情境，所以要設定專案路徑，現在用了 Custom Domain 就是直接掛在根網域上，就不需要 basePath，不然路徑就錯了 */
  basePath: '',
  images: {
    unoptimized: true, // 為了靜態輸出
  },
  /* assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '', // 靜態資源前綴 */
  /* 改成根網域的原因跟 basePath 一樣 */
  assetPrefix: '',
};

export default nextConfig;
