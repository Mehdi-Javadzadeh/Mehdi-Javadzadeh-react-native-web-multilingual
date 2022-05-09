const { i18n } = require('./next-i18next.config')
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
}
module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', ...config.resolve.extensions]
    return config
  },
  nextConfig,
  i18n,
}
