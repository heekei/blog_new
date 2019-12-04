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
    "revision": "0c78ff1dff5546f03ebbbb6d7a67373c"
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
    "url": "assets/js/app.aaf2f98d.js",
    "revision": "1a3dcccbdaa59eb77ba3ff40b241edec"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "f8b993dc2c6f669aded164005a5e17b4"
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
    "revision": "4c8ebcce644f032c48659299a5705073"
  },
  {
    "url": "life/index.html",
    "revision": "29998d11be2d27f089c06c2392c004f0"
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
    "revision": "8b8dd8354c44fd07225633a96e01274c"
  },
  {
    "url": "technology/CSharp/vs2010-打开-vs2012-的解决方案.html",
    "revision": "d277eb089d04b69aaa85a1739b8242c8"
  },
  {
    "url": "technology/CSharp/wpf-透明自定义窗口.html",
    "revision": "c55ae3b058bee673adf12c0632f49142"
  },
  {
    "url": "technology/Css/css中一些有趣的东西-不定时更新.html",
    "revision": "79f27bb6c2aa9c65fcb375569e255f09"
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
    "revision": "8e746e2a6a6070ac9eb951d68d18821e"
  },
  {
    "url": "technology/index.html",
    "revision": "d17bc0ba2f05749825c68e5f83091223"
  },
  {
    "url": "technology/Javascript/Event-loop.html",
    "revision": "b79d07f2b11fb825ca6eba03f912314e"
  },
  {
    "url": "technology/Javascript/JS数组操作基础.html",
    "revision": "f1ad1d3bb1d47a4acfa8ba7b45f4ea72"
  },
  {
    "url": "technology/Javascript/onmousemove事件遇到iframe.html",
    "revision": "efa8bf526c207c8ed4cd8332759fdc0b"
  },
  {
    "url": "technology/Javascript/Promise.html",
    "revision": "d82ed7855070fa5def244f677e1ceec6"
  },
  {
    "url": "technology/Javascript/requirejs实现.html",
    "revision": "14c7c472c5472d858e4c2c44c8187ba5"
  },
  {
    "url": "technology/Javascript/Set和Map总结.html",
    "revision": "7bda428102ac7a9ecd1734ac404459cb"
  },
  {
    "url": "technology/Javascript/并行加载与顺序执行.html",
    "revision": "fce59d15ef4ee1a43d6cc4ba256f90c8"
  },
  {
    "url": "technology/Linux相关/apache-配置虚拟主机及开启ssl.html",
    "revision": "2f206cee705119cac3289781dc2c72c7"
  },
  {
    "url": "technology/Linux相关/Centos-Firewall-启用端口.html",
    "revision": "b4400adc966a64b3e077db6d727dcd8d"
  },
  {
    "url": "technology/Linux相关/Docker.html",
    "revision": "bdc25cebb31b413ff692e3dcc7a15263"
  },
  {
    "url": "technology/Node.js/pkg打包.html",
    "revision": "f06123ea095573289fd211f47a91a291"
  },
  {
    "url": "technology/Node.js/说一说gulp.html",
    "revision": "95e410def46fd9534b7f556d8dada1e4"
  },
  {
    "url": "technology/技术进阶/Babel总结.html",
    "revision": "e250f97b5157f3ee03257b1672512d96"
  },
  {
    "url": "technology/技术进阶/Base64.html",
    "revision": "9af55bfb234b5494fd171370e43995f8"
  },
  {
    "url": "technology/技术进阶/Content-Type和Accept的关系.html",
    "revision": "fc2b6935fb5a0d0fd647f196feff7aa5"
  },
  {
    "url": "technology/技术进阶/Git中~和^的区别.html",
    "revision": "b1953dbbb679fe4a698a8ab6a829acad"
  },
  {
    "url": "technology/技术进阶/Rxjs初探.html",
    "revision": "249d750dc50b9d65dd9b0a97ae72e399"
  },
  {
    "url": "technology/技术进阶/Webpack入门知识.html",
    "revision": "f6a6f8a25594aabea1aebaabe30610cd"
  },
  {
    "url": "technology/技术进阶/Webpack模块加载.html",
    "revision": "5a19243c287a4b5a2c75024f1892030d"
  },
  {
    "url": "technology/技术进阶/Web性能请求优化.html",
    "revision": "ea6d0cd4d4849a3f4e281c301965cde3"
  },
  {
    "url": "technology/技术进阶/前端安全防范.html",
    "revision": "c99a85f123cbb514b40ea39ba7736a2c"
  },
  {
    "url": "technology/技术进阶/服务器推送.html",
    "revision": "4975bb88884b83df4e39905a3df4cb2f"
  },
  {
    "url": "technology/技术进阶/浏览器缓存.html",
    "revision": "3817a76ff3aaa6ca03cb887dbb359bc7"
  },
  {
    "url": "technology/技术进阶/简易打包工具实现.html",
    "revision": "11cbe8fc706b806b8205c62121990935"
  },
  {
    "url": "technology/算法/基础算法/递归算法.html",
    "revision": "a38fab377dc5b18fabd090a531b4bbd0"
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
