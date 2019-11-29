const fs = require('fs');
const path = require('path')
const genSidebarItem = (title, children, path) => {
  return {
    title,
    // collapsable: false,
    // sidebarDepth:3,
    path,
    children: [
      ...children
    ]
  }
}
const genSidebar = (excludes = ['README.md', '.vuepress']) => {
  const res = {};
  const root = './docs'
  fs.readdirSync(root).map(fn => {
    const _path = path.join('.', root, fn).toString();
    const stat = fs.lstatSync(_path);
    if (excludes.includes(fn)) return;
    if (stat.isDirectory()) {
      res[`/${fn}/`] = genCates(_path);
    }
  })
  return res;
};
const genCates = (parent/*  = './docs' */, excludes = ['README.md', '.vuepress']) => {
  // const root = parent || './docs'
  const res = []
  fs.readdirSync(parent).map(fn => {
    const _path = path.join(parent, fn).toString();
    const stat = fs.lstatSync(_path);
    if (excludes.includes(fn)) return;
    if (stat.isDirectory()) {
      res.push(genSidebarItem(fn, genCates(_path)))
    } else {
      const fname = fn.slice(0, -3);
      res.push(genSidebarItem(fname, [], _path.slice(4).slice(0, -3)))
    }
  })
  return res;
}
const r = genSidebar();
console.log(JSON.stringify(r, null, 2));

module.exports = {
  title: '我是阿庄啊',
  description: '记录技术&生活',
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    // ['link', { rel: 'icon', href: '/base/hd-img.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/base/hd-img.jpg' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/blog_new/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '技术相关', link: '/technology/' },
      // { text: '算法相关', link: '/algorithm/' },
      { text: '生活相关', link: '/life/' },
      { text: 'Github', link: 'https://github.com/heekei', target: '_blank', rel: '' }
    ],
    sidebar: r,
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
