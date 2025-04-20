import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https:/github.com/matheusg18' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/matheusg18' },
  ],
  footNote: `
    Made by me from <a class="text-blue-600 underline dark:text-muted" href="https://github.com/onwidget/astrowind"> Astrowind</a> · All rights reserved.
  `,
};
