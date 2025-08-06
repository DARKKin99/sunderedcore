import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0d6'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f6b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '82e'),
            routes: [
              {
                path: '/docs/ability-checks',
                component: ComponentCreator('/docs/ability-checks', '9f5'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/combat',
                component: ComponentCreator('/docs/combat', 'bd7'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/counters',
                component: ComponentCreator('/docs/counters', '550'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/creating-a-character',
                component: ComponentCreator('/docs/creating-a-character', 'c48'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/creatures-and-creature-tiers',
                component: ComponentCreator('/docs/creatures-and-creature-tiers', 'b3c'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/criticals',
                component: ComponentCreator('/docs/criticals', '82f'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/familiars',
                component: ComponentCreator('/docs/familiars', '315'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/faq',
                component: ComponentCreator('/docs/faq', 'c67'),
                exact: true,
                sidebar: "licensingSidebar"
              },
              {
                path: '/docs/items-and-types',
                component: ComponentCreator('/docs/items-and-types', '708'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/momentum',
                component: ComponentCreator('/docs/momentum', '540'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/original-content',
                component: ComponentCreator('/docs/original-content', 'ad0'),
                exact: true,
                sidebar: "licensingSidebar"
              },
              {
                path: '/docs/pets',
                component: ComponentCreator('/docs/pets', 'bea'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/quickstart',
                component: ComponentCreator('/docs/quickstart', 'b8e'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/renown',
                component: ComponentCreator('/docs/renown', 'dc0'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/replenishment',
                component: ComponentCreator('/docs/replenishment', 'faa'),
                exact: true
              },
              {
                path: '/docs/SCL',
                component: ComponentCreator('/docs/SCL', '4d1'),
                exact: true,
                sidebar: "licensingSidebar"
              },
              {
                path: '/docs/size-limits-for-familiars-pets-and-summons',
                component: ComponentCreator('/docs/size-limits-for-familiars-pets-and-summons', 'e6b'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/summoned-creatures',
                component: ComponentCreator('/docs/summoned-creatures', '8d9'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/techniques',
                component: ComponentCreator('/docs/techniques', 'c65'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/welcome',
                component: ComponentCreator('/docs/welcome', '12a'),
                exact: true,
                sidebar: "sidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
