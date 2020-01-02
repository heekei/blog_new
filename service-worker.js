/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "658505aa78253bbdfef0d80bf5bfd2c9"
  },
  {
    "url": "assets/css/0.styles.5edd396c.css",
    "revision": "e44d4dc4fa93d796834437a7e102c43f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bcd32f3b.js",
    "revision": "1eb58249f423a8655117e858560ff30a"
  },
  {
    "url": "assets/js/11.e0cc0425.js",
    "revision": "ebfc2963fca121bbc518a4903d208b16"
  },
  {
    "url": "assets/js/12.07de4d42.js",
    "revision": "067ceaede5a826a590f66ca1e8f44b53"
  },
  {
    "url": "assets/js/13.8e336bcd.js",
    "revision": "d26e7c02bcfe052542767eb523813765"
  },
  {
    "url": "assets/js/14.7be7b23f.js",
    "revision": "37ba23be696ee45c8472130961a9a41d"
  },
  {
    "url": "assets/js/15.165cbb31.js",
    "revision": "9b29ff3dfe26987261c6be8e566f09c9"
  },
  {
    "url": "assets/js/16.7acf31a4.js",
    "revision": "486a7be58a5e7b0781d5b24721ab5ebb"
  },
  {
    "url": "assets/js/17.600f793e.js",
    "revision": "292a39ec74b703e9af73c1ce8335ee4c"
  },
  {
    "url": "assets/js/18.14eda758.js",
    "revision": "21d786a981a39d454f2979c534918afc"
  },
  {
    "url": "assets/js/19.5010690e.js",
    "revision": "bd0e8770d68b959a7704313807c9569e"
  },
  {
    "url": "assets/js/2.660b70b7.js",
    "revision": "b4136b75d3084cb045ab62571a4d796f"
  },
  {
    "url": "assets/js/20.55309088.js",
    "revision": "cf96b7eed35011476a60769f6ddb3d62"
  },
  {
    "url": "assets/js/21.08de48df.js",
    "revision": "2e90d5f36169f33d119c5c63bf3d4d12"
  },
  {
    "url": "assets/js/22.a2a3f5ec.js",
    "revision": "69ef48919593f677cac99827d15d4659"
  },
  {
    "url": "assets/js/23.014026ac.js",
    "revision": "e1222bbf84acbe2b5b70a90cd9ba9fd2"
  },
  {
    "url": "assets/js/24.20dfeda7.js",
    "revision": "82c98877d3d4b40681d9d86cd1fe3193"
  },
  {
    "url": "assets/js/25.cef1873f.js",
    "revision": "05733fad9bdbfed2d73cf62b9944667e"
  },
  {
    "url": "assets/js/26.052ad603.js",
    "revision": "c990b603ed0a133f5033dd51d1435589"
  },
  {
    "url": "assets/js/27.a086ce91.js",
    "revision": "785e249fed5ce1b0d527d5165b9eb24d"
  },
  {
    "url": "assets/js/28.89e0e57a.js",
    "revision": "4daecbf550165b455c792b9b9a0a9fc2"
  },
  {
    "url": "assets/js/29.9938d5d9.js",
    "revision": "56d9d841531db8c40829cde542556f2d"
  },
  {
    "url": "assets/js/3.d3c7005e.js",
    "revision": "e6f0e52741110fa7b32a7dc07003d33d"
  },
  {
    "url": "assets/js/30.346f7afb.js",
    "revision": "bab802fc00b287aeb19ff4015a9d853c"
  },
  {
    "url": "assets/js/31.c2cd1727.js",
    "revision": "f2522a81e2048c526a1c8c5c5c3383da"
  },
  {
    "url": "assets/js/32.b70bfaf7.js",
    "revision": "7e4c913fe9fd384f904048be7c4c802a"
  },
  {
    "url": "assets/js/33.96d39a48.js",
    "revision": "785ca403e55637b494b9312c4ea0fc32"
  },
  {
    "url": "assets/js/34.e8dda6d8.js",
    "revision": "94dd24a88fdc9f04c7b28e9cb885a15e"
  },
  {
    "url": "assets/js/35.75bbd6c0.js",
    "revision": "bf3b91f597fc4f085380bf9f5abe0eb4"
  },
  {
    "url": "assets/js/36.76b3d628.js",
    "revision": "cac6cec4c84a640392299c676879b49b"
  },
  {
    "url": "assets/js/37.42a3045f.js",
    "revision": "e46db85561aec183f05d573ad9797ff7"
  },
  {
    "url": "assets/js/38.a1eb733e.js",
    "revision": "3cdc69d5462a13661ec7fe953b152d94"
  },
  {
    "url": "assets/js/39.bdfd08ef.js",
    "revision": "fd9ce3372d1faafa4eb86d25129eece4"
  },
  {
    "url": "assets/js/4.ef7e50d2.js",
    "revision": "17b802bf1fae80ac3424b7a24882551b"
  },
  {
    "url": "assets/js/40.fd9129ee.js",
    "revision": "af056a6541f7416a7f13c710170a9daa"
  },
  {
    "url": "assets/js/41.10958aa5.js",
    "revision": "0a4ec610669055da44e728ba38c0644f"
  },
  {
    "url": "assets/js/42.d228f7bc.js",
    "revision": "92d078e5369bffdcc1b197d5c0924447"
  },
  {
    "url": "assets/js/43.185f2b34.js",
    "revision": "c41f09534c704d29383eb504302778bf"
  },
  {
    "url": "assets/js/44.07c8ded7.js",
    "revision": "858c59d372cdc7cfd1ecc4a280e61022"
  },
  {
    "url": "assets/js/45.af6e7fac.js",
    "revision": "d063492335a35da48ed7c32dd2e613e9"
  },
  {
    "url": "assets/js/46.061fea71.js",
    "revision": "87dab5c62264ff0e23da109cbc8fbb80"
  },
  {
    "url": "assets/js/47.046afdd8.js",
    "revision": "82762a55ef450e35512602246e7ec0c0"
  },
  {
    "url": "assets/js/48.249f27bf.js",
    "revision": "6eb50b4cec9a6c02fd043df7f642b264"
  },
  {
    "url": "assets/js/49.6d082343.js",
    "revision": "6d872ea6f369014f55cf56b08fe3d991"
  },
  {
    "url": "assets/js/5.d19f3e17.js",
    "revision": "1f86f27ba5817f38b109d5ad16d34e01"
  },
  {
    "url": "assets/js/6.1061e1bc.js",
    "revision": "4ca1a34158c88a6cb467cdba2f6b1264"
  },
  {
    "url": "assets/js/7.978b5e81.js",
    "revision": "99ed14b213797bd858148f3c2f7a9786"
  },
  {
    "url": "assets/js/8.0227561e.js",
    "revision": "570d3064e729ff51dd486baa5b88633b"
  },
  {
    "url": "assets/js/9.80a4d338.js",
    "revision": "2e6bea7d0b0ec3e64b2253c07dc38458"
  },
  {
    "url": "assets/js/app.4cd2c216.js",
    "revision": "6feefb45ab69f3c7d903f043d3e3efd4"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "9722ae1fd3c042e0fbf2910e28244b42"
  },
  {
    "url": "icons/icon-144.png",
    "revision": "587afd39b22d44db6c9ba5b7637a9464"
  },
  {
    "url": "icons/icon-192.png",
    "revision": "54d6b1c0313fa186794107c13a2b7a17"
  },
  {
    "url": "icons/icon-48.png",
    "revision": "f2116c01da4295c41d15f44b2812a32d"
  },
  {
    "url": "icons/icon-72.png",
    "revision": "de89749179e07bb87c722b0e13dc063f"
  },
  {
    "url": "icons/icon-96.png",
    "revision": "97dd8b61c823a92084926ad8e081b956"
  },
  {
    "url": "index.html",
    "revision": "e0cfdbf711b1403022609552d55a8e56"
  },
  {
    "url": "life/index.html",
    "revision": "b8b66ec639c0e0e5d366335ab0b0edb4"
  },
  {
    "url": "life/意志力.html",
    "revision": "e422b4c743ddbcaf4f32849f3993483f"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "technology/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "technology/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "technology/CSharp/asp-net-自定义服务器控件的使用.html",
    "revision": "dc970f06f033c485b9eccefd0f40fef9"
  },
  {
    "url": "technology/CSharp/vs2010-打开-vs2012-的解决方案.html",
    "revision": "416098057a4431d5db91fbeb89d2ae67"
  },
  {
    "url": "technology/CSharp/wpf-透明自定义窗口.html",
    "revision": "dc300437664d30624c96733d6a130585"
  },
  {
    "url": "technology/Css/css中一些有趣的东西-不定时更新.html",
    "revision": "47e0ec97395590857a08773503635098"
  },
  {
    "url": "technology/event-loop-1.gif",
    "revision": "2d2f74f2d43ac5283f0328ba9288721b"
  },
  {
    "url": "technology/event-loop-2.jpg",
    "revision": "8213a271b7328eaa07252ded309d9e4c"
  },
  {
    "url": "technology/event-loop-3.jpg",
    "revision": "3872fc560971831a2fd24597d6b59313"
  },
  {
    "url": "technology/event-loop-4.jpg",
    "revision": "5a1bdc0ce131e37ab3d5ae7f14bb1ad4"
  },
  {
    "url": "technology/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "technology/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "technology/HTML5/uc-qq-safari私有meta.html",
    "revision": "d3bf4c8e771c123358d0cdb6775a09f7"
  },
  {
    "url": "technology/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "technology/index.html",
    "revision": "6a1145c4853c203d2fefe7f6e8f5e4ff"
  },
  {
    "url": "technology/Javascript/call bind apply实现.html",
    "revision": "5ccc77a53a71daa85c61eaf9f3f3698d"
  },
  {
    "url": "technology/Javascript/Event-loop.html",
    "revision": "65c23809d31fa1c990cf3fc1df57cd14"
  },
  {
    "url": "technology/Javascript/JS数组操作基础.html",
    "revision": "8b2e7c78dba90b3cfe0db7f10d1d071b"
  },
  {
    "url": "technology/Javascript/onmousemove事件遇到iframe.html",
    "revision": "d2b296df1c2d62ffaaec6e068739c465"
  },
  {
    "url": "technology/Javascript/Promise.html",
    "revision": "4255909ee34041d4909a562d3997ae00"
  },
  {
    "url": "technology/Javascript/requirejs实现.html",
    "revision": "ae1a65c9fb8141a788e21982d38f8d36"
  },
  {
    "url": "technology/Javascript/Set和Map总结.html",
    "revision": "fa96526d5c6114a4e97205d80fe59fca"
  },
  {
    "url": "technology/Javascript/并行加载与顺序执行.html",
    "revision": "9f072adb0c5bd67d8e0fbd9ae1ab684e"
  },
  {
    "url": "technology/Linux相关/apache-配置虚拟主机及开启ssl.html",
    "revision": "a06eefe57d806741a2756ead1ec99357"
  },
  {
    "url": "technology/Linux相关/Centos-Firewall-启用端口.html",
    "revision": "033ce3aea9335fc0c491566c38e6373a"
  },
  {
    "url": "technology/Linux相关/Docker.html",
    "revision": "29e5c4e5dda810cbf21471d4f605f3a3"
  },
  {
    "url": "technology/Linux相关/查看日志命令.html",
    "revision": "187867abd95499b42d1a6e9ae57a97ec"
  },
  {
    "url": "technology/Node.js/pkg打包.html",
    "revision": "b963b8e9b436458cd222d4f6b7c857c6"
  },
  {
    "url": "technology/Node.js/说一说gulp.html",
    "revision": "25eb5cd6e4e2d330d167e661d76cc7f1"
  },
  {
    "url": "technology/技术进阶/Babel总结.html",
    "revision": "e8e0a0fdd846365c9f8f94ca3f1fde0d"
  },
  {
    "url": "technology/技术进阶/Base64.html",
    "revision": "7737d9800e594e1bfe01a258bc117e9a"
  },
  {
    "url": "technology/技术进阶/Content-Type和Accept的关系.html",
    "revision": "c9011f4f133db672b2c79eb088cc862f"
  },
  {
    "url": "technology/技术进阶/Git中~和^的区别.html",
    "revision": "fb31fadd54a5fb8f4f07d054a2630cb8"
  },
  {
    "url": "technology/技术进阶/Rxjs初探.html",
    "revision": "7052da836a98bd6f81e9cd5644ce36a5"
  },
  {
    "url": "technology/技术进阶/Ts知识总结.html",
    "revision": "95f01721f164395bd18299138fd8f552"
  },
  {
    "url": "technology/技术进阶/Webpack入门知识.html",
    "revision": "06d1a96c7a416f0b5fac5e1550572082"
  },
  {
    "url": "technology/技术进阶/Webpack异步加载.html",
    "revision": "5aeca95bfdebd0ab6667e15508d0d9b4"
  },
  {
    "url": "technology/技术进阶/Webpack模块加载.html",
    "revision": "0ea818203a3468b744a0c70c7d3185c0"
  },
  {
    "url": "technology/技术进阶/Webpack模块实现.html",
    "revision": "fcc6fd4d1d76425a32e4ad555df1bb33"
  },
  {
    "url": "technology/技术进阶/Web性能请求优化.html",
    "revision": "147e6af650685bc65d2fbccde891d09d"
  },
  {
    "url": "technology/技术进阶/前端安全防范.html",
    "revision": "bbc5e50da2a475da5e76527d5d019728"
  },
  {
    "url": "technology/技术进阶/发布订阅vs观察者模式.html",
    "revision": "7a0b5058677a73ad652312d0a90bf98c"
  },
  {
    "url": "technology/技术进阶/图片分类.html",
    "revision": "1292da78f61487fb862c3db944688e73"
  },
  {
    "url": "technology/技术进阶/服务器推送.html",
    "revision": "fcb9431aa39976c7d70510aaab9a8528"
  },
  {
    "url": "technology/技术进阶/浏览器缓存.html",
    "revision": "9bd19f75d46ff10607e12cde3bf22fd0"
  },
  {
    "url": "technology/技术进阶/简易依赖注入实现.html",
    "revision": "7813425f29b790661c1dd0d49183ff1e"
  },
  {
    "url": "technology/技术进阶/简易打包工具实现.html",
    "revision": "1bb5b83c480bcdc30e6e1acff2110e7c"
  },
  {
    "url": "technology/算法/基础算法/递归算法.html",
    "revision": "a1109d1dfede173408ed25734e9b108e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
