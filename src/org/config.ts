export function getHeaderConfig() {
  return {
    linkedInHref: 'https://www.linkedin.com/in/mikedmcfarland/',
    githubHref: 'https://github.com/mikedmcfarland',
    links: [
      { name: 'Articles', href: '/articles' },
      { name: 'Snippets', href: '/snippets' },
      { name: 'Projects', href: '/projects' },
      { name: 'About', href: '/pages/about' },
    ],
  }
}
export function getDocTypes() {
  return ['articles', 'snippets', 'projects', 'pages']
}
