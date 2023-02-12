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
    component: ComponentCreator('/docs', 'd70'),
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
        path: '/docs/category/guides',
        component: ComponentCreator('/docs/category/guides', '1cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/other',
        component: ComponentCreator('/docs/category/other', 'cc0'),
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
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
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
        path: '/docs/other/thegraph-snapshot',
        component: ComponentCreator('/docs/other/thegraph-snapshot', '8f7'),
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
        path: '/docs/snapshots/substrate-astar-snapshot',
        component: ComponentCreator('/docs/snapshots/substrate-astar-snapshot', '5a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snapshots/substrate-moonriver-snapshot',
        component: ComponentCreator('/docs/snapshots/substrate-moonriver-snapshot', '72d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snapshots/substrate-shiden-snapshot',
        component: ComponentCreator('/docs/snapshots/substrate-shiden-snapshot', '536'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutors/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutors/tutorial-basics/congratulations', '7f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutors/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutors/tutorial-basics/create-a-blog-post', 'dd4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutors/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutors/tutorial-basics/create-a-document', 'dee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutors/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutors/tutorial-basics/create-a-page', '904'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutors/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutors/tutorial-basics/deploy-your-site', '1a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutors/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutors/tutorial-basics/markdown-features', 'e55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutors/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutors/tutorial-extras/manage-docs-versions', '3cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutors/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutors/tutorial-extras/translate-your-site', 'c73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutors/tutorial-intro',
        component: ComponentCreator('/docs/tutors/tutorial-intro', '9d6'),
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
