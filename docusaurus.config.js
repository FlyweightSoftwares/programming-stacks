module.exports = {
  title: 'Programming Stacks',
  tagline: 'The Knowledge Document',
  url: 'https://flyweightsoftwares.github.io',
  baseUrl: '/programming-stacks/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FlyweightSoftwares', // Usually your GitHub org/user name.
  projectName: 'programming-stacks', 
  themeConfig: {
    algolia: {
      apiKey: '02034788fc4eb23f7b9f71664243d40b',
      indexName: 'prod_DOC',
      appId:'JTSEQU932W',
    
    },// Usually your repo name.
    navbar: {
      title: 'Programming Stacks',
      logo: {
        alt: 'Programming Stacks Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/FlyweightSoftwares/programming-stacks',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/FlyweightSoftwares/programming-stacks/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/FlyweightSoftwares/programming-stacks/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
