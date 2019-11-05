const genSidebar = (title, children) => {
  return {
    title,
    collapsable: false,
    children: [
      ...children
    ]
  }
}

module.exports = {
  title: 'Lorain\'s个人主页',
  description: '记录技术&生活',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/hd-img.jpg' }],
    ['link', { rel: 'manifest', href: '/hd-img.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/hd-img.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/blog/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '记录技术', link: '/skills/' },
      { text: '算法题库', link: '/algorithm/' },
      { text: '热爱生活', link: '/life/' },
      { text: 'Github', link: 'https://github.com/lorainwings', target: '_blank', rel: '' }
    ],
    sidebar: {
      '/skills/': [
        genSidebar('JS进阶', [
          'promise',
          'base64',
          'babel总结',
          'rxjs初探',
          'webpack学习',
          'webpack模块实现',
          'event-loop',
          'git中~和^的用法分析',

        ]),
        genSidebar('Html5', []),
        genSidebar('Linux相关', [
          'docker',
        ])
      ],
      '/algorithm/': [
        genSidebar('基础算法', []),
        genSidebar('高级算法', []),
      ],
      '/life/': [
        genSidebar('生活记录', []),
        genSidebar('名人语录', []),
        genSidebar('诗词歌赋', []),
      ]
    },
    lastUpdated: '更新时间',
    docsDir: "docs"
  },
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/last-updated',
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    '@vuepress/search',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-151094245-1'
      }
    ]
  ]
};
