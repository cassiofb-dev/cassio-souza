import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cássio Fernando',
  tagline: 'Personal Website and Blog.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cassiofernando.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cassiofb-dev', // Usually your GitHub org/user name.
  projectName: 'cassio-souza', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      // Yandex Webmaster
      // <meta name="yandex-verification" content="ac6c17905ec15f07" />
      tagName: 'meta',
      attributes: {
        name: 'yandex-verification',
        content: 'ac6c17905ec15f07',
      },
    },
    {
      // Mastodon Verification
      // <link rel="me" href="https://mastodon.social/@cassiofernando" />
      tagName: 'link',
      attributes: {
        rel: 'me',
        href: 'https://mastodon.social/@cassiofernando',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cassiofb-dev/cassio-souza/tree/main',
            routeBasePath: '/tutorials',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cassiofb-dev/cassio-souza/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
      colorMode: {
        defaultMode: 'light',
      },
      // Replace with your project's social card
      image: 'https://cassiofernando.com/img/social_card.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Cassio',
          src: 'img/logo.svg',
          height: '32px',
          width: '54px',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://cassiofernando.com/pdfs/cassio-fernando-cv.en.pdf', label: 'Curriculum', position: 'right'},
          {
            href: 'https://matrix.to/#/@cassio:mozilla.org',
            label: 'Matrix',
            position: 'right',
          },
          {
            href: 'https://github.com/cassiofb-dev/cassio-souza',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Tutorials',
                to: '/tutorials/welcome',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:contact@cassiofernando.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/cassiofb_dev',
              },
              {
                label: 'Mastodon',
                href: 'https://mastodon.social/@cassiofernando',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cassiofb-dev/cassio-souza',
              },
              {
                label: 'Terminal',
                href: 'https://term.cassiofernando.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cássio Fernando.`,
      },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
