const genSidebar = (title, children) => {
  return {
    title,
    // collapsable: false,
    children: [
      ...children
    ]
  }
}

module.exports = {
  title: 'Lorain\'s个人主页',
  description: '记录技术&生活',
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/base/hd-img.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/base/hd-img.jpg' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
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
      { text: '算法相关', link: '/algorithm/' },
      { text: '热爱生活', link: '/life/' },
      { text: 'Github', link: 'https://github.com/lorainwings', target: '_blank', rel: '' }
    ],
    sidebar: {
      '/skills/': [
        genSidebar('技术进阶', [
          'Promise',
          'Base64',
          'Rxjs初探',
          'Babel总结',
          '服务器推送',
          '浏览器缓存',
          '前端安全防范',
          'Event-loop',
          'Set和Map总结',
          'Web性能请求优化',
          '简易打包工具实现',
          'Git中~和^的区别',
          'Webpack入门知识',
          'Webpack模块加载',
        ]),
        genSidebar('Html5', []),
        genSidebar('Linux相关', [
          'Docker',
        ])
      ],
      '/algorithm/': [
        genSidebar('基础算法', [
          '递归算法'
        ]),
        genSidebar('高级算法', []),
      ],
      '/life/': [
        genSidebar('生活记录', []),
        genSidebar('名人语录', []),
        genSidebar('诗词歌赋', []),
      ]
    },
    lastUpdated: '更新时间',
    smoothScroll: true,
    docsDir: "docs"
  },
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    '@vuepress/search',
    ['@vuepress/google-analytics', {
      'ga': 'UA-151094245-1'
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => new Date(timestamp).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
    }]
  ]
};
