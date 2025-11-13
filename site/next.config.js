/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'WolfpacKMars2 KASM Registry',
    description: 'Custom KASM workspaces.',
    icon: 'https://wolfpackmars2.github.io/kasm-registry/1.1/logo.png',
    listUrl: 'https://wolfpackmars2.github.io/kasm-registry/',
    contactUrl: 'https://github.com/wolfpackmars2/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
