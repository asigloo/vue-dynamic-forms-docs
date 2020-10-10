const isDeployPreview = require('./isDeployPreview');

module.exports = [
  [
    '@vuepress/pwa',
    {
      serviceWorker: false,
      updatePopup: true,
    },
  ],
  '@vuepress/plugin-register-components',
  '@vuepress/plugin-active-header-links',
  '@vuepress/plugin-search',
  '@vuepress/plugin-nprogress',
  '@vuepress/plugin-back-to-top',
  '@vuepress/plugin-medium-zoom',
];
