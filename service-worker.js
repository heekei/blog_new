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
    "revision": "426ff7f9d584cf81f6b25066776d61f4"
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
    "url": "assets/js/14.09014ce0.js",
    "revision": "5e9b8d6e7099ccba5cb0e2968e979a68"
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
    "url": "assets/js/23.f77f44b2.js",
    "revision": "2e8f038cc3bba88b4bd5cce7dcfe6067"
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
    "url": "assets/js/27.a8d9c344.js",
    "revision": "75d13a6053290f99aa9f52a32b550a08"
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
    "url": "assets/js/30.43f66c93.js",
    "revision": "3bdfd3efd932592bf8ff605025064c8c"
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
    "url": "assets/js/34.06c58000.js",
    "revision": "e34904f483669e424d5d562a225fd983"
  },
  {
    "url": "assets/js/35.b46af22b.js",
    "revision": "35e01f5074f875a36bdbf70a55059c31"
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
    "url": "assets/js/app.5657d1c8.js",
    "revision": "f71113531416941a150b292070bd5b0d"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "9bbedd4383f4f5427a0fdd084f4d81b1"
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
    "revision": "e642b41e26d01c9a1bbf4ee11ecaeda8"
  },
  {
    "url": "life/index.html",
    "revision": "7609f287b45448b8cbe1b0a1b7af9e10"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/event-loop-1.gif",
    "revision": "2d2f74f2d43ac5283f0328ba9288721b"
  },
  {
    "url": "skills/event-loop-2.jpg",
    "revision": "8213a271b7328eaa07252ded309d9e4c"
  },
  {
    "url": "skills/event-loop-3.jpg",
    "revision": "3872fc560971831a2fd24597d6b59313"
  },
  {
    "url": "skills/event-loop-4.jpg",
    "revision": "5a1bdc0ce131e37ab3d5ae7f14bb1ad4"
  },
  {
    "url": "skills/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "skills/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "technology/CSharp/asp-net-自定义服务器控件的使用.html",
    "revision": "4da685790e570a81ac8edcb82e7a1d42"
  },
  {
    "url": "technology/CSharp/vs2010-打开-vs2012-的解决方案.html",
    "revision": "1a68202472e8ac924d120187fd2af2fb"
  },
  {
    "url": "technology/CSharp/wpf-透明自定义窗口.html",
    "revision": "896c4010b2ddc8c6b6feb830e342fbae"
  },
  {
    "url": "technology/Css/css中一些有趣的东西-不定时更新.html",
    "revision": "a0b6fb983b56e33fd8e1a9ac877939f7"
  },
  {
    "url": "technology/HTML5/uc-qq-safari私有meta.html",
    "revision": "4d2b0f1075ce3faa82b735e359976e8a"
  },
  {
    "url": "technology/index.html",
    "revision": "ef4ae40f93d45f5db004c298426892c3"
  },
  {
    "url": "technology/Javascript/Event-loop.html",
    "revision": "0f2dd873242b966ff53c74f9bb3ecbe1"
  },
  {
    "url": "technology/Javascript/JS数组操作基础.html",
    "revision": "2b0c15a7405d19694f2112fcd0d631c1"
  },
  {
    "url": "technology/Javascript/onmousemove事件遇到iframe.html",
    "revision": "f82d6821fc0d27bbf14b50483efbff8d"
  },
  {
    "url": "technology/Javascript/Promise.html",
    "revision": "f8e455a24b88b0b262147d5c18ec8ba1"
  },
  {
    "url": "technology/Javascript/requirejs实现.html",
    "revision": "729d0c68b6aade1062b54fe5bbd85704"
  },
  {
    "url": "technology/Javascript/Set和Map总结.html",
    "revision": "0c998ad9d6be872fc5beee7d9b64ca13"
  },
  {
    "url": "technology/Javascript/并行加载与顺序执行.html",
    "revision": "bb1fbc9bf5b0335172be44f734c0668e"
  },
  {
    "url": "technology/Linux相关/apache-配置虚拟主机及开启ssl.html",
    "revision": "7692f12cf6ede92e13c478db895e506a"
  },
  {
    "url": "technology/Linux相关/Centos-Firewall-启用端口.html",
    "revision": "936c96552eb6a7e210b93a30aef525f6"
  },
  {
    "url": "technology/Linux相关/Docker.html",
    "revision": "05158893399f72258ce5589bdabac1cd"
  },
  {
    "url": "technology/Node.js/pkg打包.html",
    "revision": "3f87b8e7707f6190a1bcc2f818610a91"
  },
  {
    "url": "technology/Node.js/说一说gulp.html",
    "revision": "02b0d82a3bcb6c7cc9262ff16de3b687"
  },
  {
    "url": "technology/技术进阶/Babel总结.html",
    "revision": "eaf2c28c2c8bdee33c0d22984ef6ef9e"
  },
  {
    "url": "technology/技术进阶/Base64.html",
    "revision": "1e5d6b7f9d085c5536d24f60fc446cd2"
  },
  {
    "url": "technology/技术进阶/Content-Type和Accept的关系.html",
    "revision": "7d01c183f18c8d54b8f95fe98d87dac6"
  },
  {
    "url": "technology/技术进阶/Git中~和^的区别.html",
    "revision": "54d6345ebafea63ec2dc245a7afdf658"
  },
  {
    "url": "technology/技术进阶/Rxjs初探.html",
    "revision": "ab164d67b0c41a879315b9421df1ed24"
  },
  {
    "url": "technology/技术进阶/Webpack入门知识.html",
    "revision": "029776ac316de39c5ede3d377a3ae390"
  },
  {
    "url": "technology/技术进阶/Webpack模块加载.html",
    "revision": "0c0297aae58a310d62097b0636063647"
  },
  {
    "url": "technology/技术进阶/Web性能请求优化.html",
    "revision": "5d6968c352f5d979b3450ef594352763"
  },
  {
    "url": "technology/技术进阶/前端安全防范.html",
    "revision": "74308064157cc5c730c0262fa18a5cd2"
  },
  {
    "url": "technology/技术进阶/服务器推送.html",
    "revision": "fc42eaab0d8dd33d4f372c3c5fdc6f5c"
  },
  {
    "url": "technology/技术进阶/浏览器缓存.html",
    "revision": "b7572545ae984f5f0c63a0f8f0d90aa3"
  },
  {
    "url": "technology/技术进阶/简易打包工具实现.html",
    "revision": "b197e4bdafcb5136047ba9315a6cfe83"
  },
  {
    "url": "technology/算法/基础算法/递归算法.html",
    "revision": "37954c5d07962c1065795ca31aa1685b"
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
