import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '457'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '5cc'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '928'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '3f4'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '33a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '292'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '5e9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '9c4'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '1ca'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'c5f'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'ed6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'f38'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2bf'),
    routes: [
      {
        path: '/docs/category/other',
        component: ComponentCreator('/docs/category/other', 'cc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/substrate',
        component: ComponentCreator('/docs/category/substrate', 'e2e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tendermint',
        component: ComponentCreator('/docs/category/tendermint', 'ef0'),
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
        path: '/docs/category/tutorials',
        component: ComponentCreator('/docs/category/tutorials', 'f40'),
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
        path: '/docs/substrate/astar-snapshot',
        component: ComponentCreator('/docs/substrate/astar-snapshot', '494'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/substrate/centrifuge-snapshot',
        component: ComponentCreator('/docs/substrate/centrifuge-snapshot', 'b57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/substrate/moonriver-snapshot',
        component: ComponentCreator('/docs/substrate/moonriver-snapshot', '170'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/substrate/shiden-snapshot',
        component: ComponentCreator('/docs/substrate/shiden-snapshot', 'eaa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tendermint/juno-snapshot',
        component: ComponentCreator('/docs/tendermint/juno-snapshot', '1b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tendermint/stargaze-snapshot',
        component: ComponentCreator('/docs/tendermint/stargaze-snapshot', 'c23'),
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
    component: ComponentCreator('/', 'ddd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
