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
  footNote: 'All rights reserved.',
};
