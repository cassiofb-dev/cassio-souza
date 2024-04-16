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
      // Google search console metatag
      // <meta name="google-site-verification" content="Dw3qwr4EXaOirp41QsYEBxtJlmgr-9ZgtVQzzGoFGcI" />
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'Dw3qwr4EXaOirp41QsYEBxtJlmgr-9ZgtVQzzGoFGcI',
      },
    },
    {
      // Microsoft Bing Webmaster Tools
      // <meta name="msvalidate.01" content="4DB2206D095FE64FBB11B2069CAF0DB4" />
      tagName: 'meta',
      attributes: {
        name: 'msvalidate.01',
        content: '4DB2206D095FE64FBB11B2069CAF0DB4',
      },
    },
    {
      // Yandex Webmaster
      // <meta name="yandex-verification" content="cec0c07cd825efc2" />
      tagName: 'meta',
      attributes: {
        name: 'yandex-verification',
        content: 'cec0c07cd825efc2',
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
            href: 'https://matrix.to/#/#cassio-souza:matrix.org',
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
                label: 'Tutorials',
                to: '/tutorials/welcome',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/cassiofb-dev',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/cassiofb_dev',
              },
              {
                label: 'Email',
                href: 'mailto:contact@cassiofernando.com',
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
                label: 'Blog',
                to: '/blog',
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
