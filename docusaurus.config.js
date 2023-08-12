// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StakeCraft Services',
  tagline: 'Blockchain Nodes Services',
  url: 'https://services.stakecraft.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stakecraft', // Usually your GitHub org/user name.
  projectName: 'blockhain-node-services', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Stakecraft Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Services',
          },
          { href: 'https://stakecraft.medium.com', 
            label: 'Blog', 
            position: 'left',
          },
          {
            href: 'https://github.com/stakecraft',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Snapshots',
            items: [
              {
                label: 'Agoric',
                to: '/docs/snapshots/cosmos-agoric-snapshot',
              },
              {
                label: 'Astar',
                to: '/docs/snapshots/substrate-astar-snapshot',
              },
              {
                label: 'Shiden',
                to: '/docs/snapshots/substrate-shiden-snapshot',
              },
              {
                label: 'Juno',
                to: '/docs/snapshots/cosmos-juno-snapshot',
              },
              {
                label: 'Polygon',
                to: '/docs/snapshots/polygon-snapshot',
              },
              {
                label: 'Q-Mainnet',
                to: '/docs/snapshots/q-mainnet-snapshot',
              },
              {
                label: 'Q-Testnet',
                to: '/docs/snapshots/q-testnet-snapshot',
              },
              {
                label: 'Stargaze',
                to: '/docs/snapshots/cosmos-stargaze-snapshot',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/stakecraft',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/stakecraft',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/stakecraft',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://stakecraft.medium.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/stakecraft',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} StakeCraft. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
      [
          "docusaurus-plugin-remote-content",
          {
              // options here
              name: "snapshots", // used by CLI, must be path safe
              sourceBaseUrl: "https://snapshots.stakecraft.com/markdown/", // the base url for the markdown (gets prepended to all of the documents when fetching)
              outDir: "docs/snapshots", // the base directory to output to.
              documents: ["astar.md", "shiden.md", "q-testnet.md", "q-mainnet.md", "juno.md", "stargaze.md", "agoric.md", "polygon.md"], // the file names to download
              noRuntimeDownloads: true
          },
      ],
  ],
};
module.exports = config;
