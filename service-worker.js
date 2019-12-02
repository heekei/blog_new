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
    "revision": "475803e2437f5830d52bd8c57c190026"
  },
  {
    "url": "assets/css/0.styles.741ccdbb.css",
    "revision": "b4afa274e00903f246a27658ec698a0e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1aa7e09a.js",
    "revision": "9b9c1eff6dcea64306eb5ea5a642c67b"
  },
  {
    "url": "assets/js/11.e74b4dbd.js",
    "revision": "0ba208b49d075a62108f4ffb0fddf6c8"
  },
  {
    "url": "assets/js/12.99f5c39a.js",
    "revision": "a3906ff94c9086ee7617ac9fb8b61d4f"
  },
  {
    "url": "assets/js/13.a4bfb382.js",
    "revision": "5f21d0b5b8db36ee86d693f77a0a0ea6"
  },
  {
    "url": "assets/js/14.cb984dc4.js",
    "revision": "e75ce6ad2f59b5ffbbe66f1a2cda229a"
  },
  {
    "url": "assets/js/15.a563f6b9.js",
    "revision": "3e5401464def0c33259e15546bc0c4f6"
  },
  {
    "url": "assets/js/16.95ba493c.js",
    "revision": "90b301c9709e7e1b0e101bfbd8588ac3"
  },
  {
    "url": "assets/js/17.f5200935.js",
    "revision": "2b1543abb01c5d8fb0ef2a4ed5802706"
  },
  {
    "url": "assets/js/18.2053f666.js",
    "revision": "a3c9c06444502cabc1314b0b0ca448eb"
  },
  {
    "url": "assets/js/19.ed31cfad.js",
    "revision": "e9e7e25dcc710a5d3d04aed559663f8a"
  },
  {
    "url": "assets/js/2.8d813f31.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.71867e50.js",
    "revision": "6ce4677f70ebe86a0ddb222e72ad315a"
  },
  {
    "url": "assets/js/21.983d0032.js",
    "revision": "d6db2af395a3074b1036a0fb97faf0aa"
  },
  {
    "url": "assets/js/22.e5baf24f.js",
    "revision": "4caedd820b132f0ca65dbc2770612104"
  },
  {
    "url": "assets/js/23.7da579be.js",
    "revision": "668d32e4b2f414f9448520cf650ac6b4"
  },
  {
    "url": "assets/js/24.4957f396.js",
    "revision": "05e6e45afd3587868fc2327a378c0cbc"
  },
  {
    "url": "assets/js/25.8cad05ad.js",
    "revision": "cc2cf15a037111c9a69162130cdaff1d"
  },
  {
    "url": "assets/js/26.969cfbe2.js",
    "revision": "3e4cabe5cc8300f97c9ce2be66267627"
  },
  {
    "url": "assets/js/27.f80ce0b0.js",
    "revision": "cb0a62ca7451a4920f418cfa2251e13c"
  },
  {
    "url": "assets/js/28.fe733bf1.js",
    "revision": "37839fb9b8ca81b951b2f78011d3e7d7"
  },
  {
    "url": "assets/js/29.991b32ad.js",
    "revision": "915e0756845c07aad09f5380801d1467"
  },
  {
    "url": "assets/js/3.d3c7005e.js",
    "revision": "e6f0e52741110fa7b32a7dc07003d33d"
  },
  {
    "url": "assets/js/30.f341dc94.js",
    "revision": "8e3a29418e7be958e6bb99165d99ae4e"
  },
  {
    "url": "assets/js/31.0021d206.js",
    "revision": "d9a785f8fdbc83a2b5376ba92000db21"
  },
  {
    "url": "assets/js/32.a41fd11e.js",
    "revision": "a82527dbd821dc05b6f2de51031d4a46"
  },
  {
    "url": "assets/js/33.b5f78021.js",
    "revision": "96e5bc25ecd25930c79024142836df21"
  },
  {
    "url": "assets/js/34.e589a402.js",
    "revision": "6c81734653c416dbeb7f0b6ac84c1542"
  },
  {
    "url": "assets/js/35.7beca50f.js",
    "revision": "bb47f1d07ae431dafb2585827f60abf1"
  },
  {
    "url": "assets/js/36.64824eb4.js",
    "revision": "78472e1e6a8cd551c42144bf215fa37c"
  },
  {
    "url": "assets/js/37.418be545.js",
    "revision": "bab911b95204b474be856df97c8fe6e1"
  },
  {
    "url": "assets/js/38.f7aed5f6.js",
    "revision": "8f06df2f47fff5eb0f360bf9d774f054"
  },
  {
    "url": "assets/js/39.f68d3257.js",
    "revision": "8f4a740d4d044bc76082666345a29bda"
  },
  {
    "url": "assets/js/4.64e88808.js",
    "revision": "b06b86519175e87fe0e7223dc786f82b"
  },
  {
    "url": "assets/js/40.0819ac46.js",
    "revision": "e9099b9ee8000776778351078824058a"
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
    "url": "assets/js/8.ea646645.js",
    "revision": "64d66778bb0845ef724024d1f2103688"
  },
  {
    "url": "assets/js/9.34436425.js",
    "revision": "6987a3b926ca84368be163165588671d"
  },
  {
    "url": "assets/js/app.4850f96d.js",
    "revision": "dfd5bc1a47026c2e2c3cb814d7f6b206"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "5063aeddea3c67ce583b722b9833b7a1"
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
    "revision": "0eb37a6c3e04e8c5ea12a76a02f57d7d"
  },
  {
    "url": "life/index.html",
    "revision": "1b06b24f1067b148739e2a34bc35c152"
  },
  {
    "url": "technology/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "technology/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "technology/CSharp/asp-net-自定义服务器控件的使用.html",
    "revision": "5843441519d7a7b59fff231f470f3196"
  },
  {
    "url": "technology/CSharp/vs2010-打开-vs2012-的解决方案.html",
    "revision": "b0b1ca0f87405ca48757838046c56fd1"
  },
  {
    "url": "technology/CSharp/wpf-透明自定义窗口.html",
    "revision": "06f910437634bdf2bd50a3b3e44390dd"
  },
  {
    "url": "technology/Css/css中一些有趣的东西-不定时更新.html",
    "revision": "81566c0bc3e63059355771b4020cf0ea"
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
    "revision": "d49edb743bd60148800b57873095bef2"
  },
  {
    "url": "technology/index.html",
    "revision": "f7decf353cde16063c96dd027b251890"
  },
  {
    "url": "technology/Javascript/Event-loop.html",
    "revision": "a6d4d2072c2e90581d26155e916ab067"
  },
  {
    "url": "technology/Javascript/JS数组操作基础.html",
    "revision": "9aaf2f323b1a932a766356b45649e06c"
  },
  {
    "url": "technology/Javascript/onmousemove事件遇到iframe.html",
    "revision": "0ad0d72d5255b85eaf852dc88568a7e1"
  },
  {
    "url": "technology/Javascript/Promise.html",
    "revision": "c659a504841983bf1560abb3f27c1b01"
  },
  {
    "url": "technology/Javascript/requirejs实现.html",
    "revision": "7425c5c98ba11b938bc819fd82a6ec1e"
  },
  {
    "url": "technology/Javascript/Set和Map总结.html",
    "revision": "3c506c9a510607b7f6927db30af83cc6"
  },
  {
    "url": "technology/Javascript/并行加载与顺序执行.html",
    "revision": "e48ebbeda1a8691a20a03407a2481579"
  },
  {
    "url": "technology/Linux相关/apache-配置虚拟主机及开启ssl.html",
    "revision": "ed386deff941b7c1ab5440b3f0c536b0"
  },
  {
    "url": "technology/Linux相关/Centos-Firewall-启用端口.html",
    "revision": "580eb209e2f34bbb30ee427950ed40ac"
  },
  {
    "url": "technology/Linux相关/Docker.html",
    "revision": "7cfc9e2a6884f409c7af7c0c014e29dc"
  },
  {
    "url": "technology/Node.js/pkg打包.html",
    "revision": "edbac19b79806552d4613c5ad3b35012"
  },
  {
    "url": "technology/Node.js/说一说gulp.html",
    "revision": "afee74c8600530298c53c62828e367af"
  },
  {
    "url": "technology/技术进阶/Babel总结.html",
    "revision": "42590b65357f0403e7c00bb746de6695"
  },
  {
    "url": "technology/技术进阶/Base64.html",
    "revision": "fc85f7adb547ab742546bcb87c3c86bc"
  },
  {
    "url": "technology/技术进阶/Content-Type和Accept的关系.html",
    "revision": "f05fe43eeba44c06d63b626dc4397769"
  },
  {
    "url": "technology/技术进阶/Git中~和^的区别.html",
    "revision": "36a4d699498db2866ae921d01dfcabc7"
  },
  {
    "url": "technology/技术进阶/Rxjs初探.html",
    "revision": "b1baa4880cabc390d024a1f9f901e518"
  },
  {
    "url": "technology/技术进阶/Webpack入门知识.html",
    "revision": "a4de2065b55604578c0c5d4fdbc6f9c3"
  },
  {
    "url": "technology/技术进阶/Webpack模块加载.html",
    "revision": "ecda1eb7838e4db72c2904181b5cffe5"
  },
  {
    "url": "technology/技术进阶/Web性能请求优化.html",
    "revision": "8c9b30839bebf62da1809bb90a81b377"
  },
  {
    "url": "technology/技术进阶/前端安全防范.html",
    "revision": "53309fe32b5c087285e8570fbda427b1"
  },
  {
    "url": "technology/技术进阶/服务器推送.html",
    "revision": "b7fcdb618b3d3ef93bccc6ca0d884739"
  },
  {
    "url": "technology/技术进阶/浏览器缓存.html",
    "revision": "39d97b6d1d5d543c6b74881877616280"
  },
  {
    "url": "technology/技术进阶/简易打包工具实现.html",
    "revision": "499905924491b3161b1a5d014f3bb271"
  },
  {
    "url": "technology/算法/基础算法/递归算法.html",
    "revision": "0a26a3a21c37b0248ebfe973036391ae"
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
