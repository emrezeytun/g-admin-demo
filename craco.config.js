const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@helper': path.resolve(__dirname, 'src/helper/'),
      '@layout': path.resolve(__dirname, 'src/layout/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@services': path.resolve(__dirname, 'src/services/'),
    },
  },
};
