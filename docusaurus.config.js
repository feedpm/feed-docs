/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/* eslint-disable */

module.exports = {
  title: 'FEED Docs',
  tagline: 'QBurst FEED team documentations',
  url: 'https://feedpm.github.io',
  baseUrl: '/feed-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'qburst',
  projectName: 'feed-docs',
  themeConfig: {
    navbar: {
      title: 'FEED Docs',
      logo: {
        alt: 'My Facebook Project Logo',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/feedpm/feed-docs/tree/main',
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
