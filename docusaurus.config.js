/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/* eslint-disable */
// @ts-check

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'FEED Docs',
  tagline: 'QBurst FEED team documentations',
  url: 'https://feedpm.github.io',
  baseUrl: '/feed-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'QBurst',
  projectName: 'feed-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        debug: false,
      },
      navbar: {
        title: 'FEED Docs',
        logo: {
          alt: 'FEED Logo',
          src: 'img/icon.svg',
        },
        items: [
          {to: 'docs/welcome/intro', label: 'Docs', position: 'left'},
          {to: 'blog', label: 'Blog', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/feedpm/feed-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Style Guide',
                to: 'docs/welcome/style-guide',
              },
              {
                label: 'Contribute style',
                to: 'docs/welcome/contribute',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/QBurst',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/qburst',
              },
            ],
          },
        ],
        logo: {
          alt: 'QBurst',
          src: 'img/QBlogo.svg',
          href: 'https://qburst.com/',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} QBurst. Maintained by FEED team. Built with Docusaurus.`,
      },
    }),
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: 'sidebars.js',
          editUrl: 'https://github.com/feedpm/feed-docs/tree/main',
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};
