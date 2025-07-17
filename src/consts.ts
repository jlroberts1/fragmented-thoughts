import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'fragmented thoughts',
  description:
    'fragmented thoughts is a blog about software development, technology, and the occasional personal reflection.',
  href: 'https://fragmentedthoughts.jlroberts.me',
  author: 'jlroberts',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/jlroberts1',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/xoomdev',
    label: 'Twitter',
  },
  {
    href: 'mailto:jlroberts1@proton.me',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
