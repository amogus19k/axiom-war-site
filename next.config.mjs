/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Говорим Next.js сгенерировать статические файлы (HTML/CSS/JS)
  basePath: '/axiom-war-site', // Указываем имя твоего репозитория на GitHub
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig