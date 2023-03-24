import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '10b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '2e1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '9e0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd53'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6e8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'bcf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '63f'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '96c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '670'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'ae6'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '8bc'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '3fb'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c1'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '30f'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'f9a'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'd80'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '0ba'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '036'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '58c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '53f'),
    routes: [
      {
        path: '/docs/ansible/solana-playbooks',
        component: ComponentCreator('/docs/ansible/solana-playbooks', '051'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/ansible',
        component: ComponentCreator('/docs/category/ansible', 'e7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/rpc-endpoints',
        component: ComponentCreator('/docs/category/rpc-endpoints', '1ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/snapshots',
        component: ComponentCreator('/docs/category/snapshots', 'ac9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/rpc/rpc-mainnets',
        component: ComponentCreator('/docs/rpc/rpc-mainnets', '836'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/rpc/rpc-testnets',
        component: ComponentCreator('/docs/rpc/rpc-testnets', 'dd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snapshots/cosmos-agoric-snapshot',
        component: ComponentCreator('/docs/snapshots/cosmos-agoric-snapshot', '622'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snapshots/cosmos-juno-snapshot',
        component: ComponentCreator('/docs/snapshots/cosmos-juno-snapshot', '343'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snapshots/cosmos-stargaze-snapshot',
        component: ComponentCreator('/docs/snapshots/cosmos-stargaze-snapshot', '941'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snapshots/q-mainnet-snapshot',
        component: ComponentCreator('/docs/snapshots/q-mainnet-snapshot', '47d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snapshots/q-testnet-snapshot',
        component: ComponentCreator('/docs/snapshots/q-testnet-snapshot', 'ead'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snapshots/substrate-astar-snapshot',
        component: ComponentCreator('/docs/snapshots/substrate-astar-snapshot', '5a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snapshots/substrate-shiden-snapshot',
        component: ComponentCreator('/docs/snapshots/substrate-shiden-snapshot', '536'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '31f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
