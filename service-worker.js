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
    "revision": "824974bb414b6a774d011e4012b9cd52"
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
    "url": "assets/js/26.8c0211f1.js",
    "revision": "b2bbfcc90347f20ce92c4bfa68bcce25"
  },
  {
    "url": "assets/js/27.a3def997.js",
    "revision": "76ac6100ceffaf5d5e80c4813b8999b1"
  },
  {
    "url": "assets/js/28.f7215b46.js",
    "revision": "e8b88b4033e7976b7602c9b05b6c7357"
  },
  {
    "url": "assets/js/29.76552ceb.js",
    "revision": "ab496cca92c0d51dcccf78147dbc2c3d"
  },
  {
    "url": "assets/js/3.d3c7005e.js",
    "revision": "e6f0e52741110fa7b32a7dc07003d33d"
  },
  {
    "url": "assets/js/30.2a225ec5.js",
    "revision": "e160f9c4fd140b1c9accfb665b142c36"
  },
  {
    "url": "assets/js/31.edb59495.js",
    "revision": "060bb2bb375d4906f812191cf406cda9"
  },
  {
    "url": "assets/js/32.8dddaeb3.js",
    "revision": "6dcbbf39b90ffb4a77fea28d9fbbfab2"
  },
  {
    "url": "assets/js/33.57534fe4.js",
    "revision": "7bc26a621af29c8ab2e85e331131aedf"
  },
  {
    "url": "assets/js/34.3ff92791.js",
    "revision": "6789df22ab77a22fe995d014ae440892"
  },
  {
    "url": "assets/js/35.0f172f1e.js",
    "revision": "216188335606fca90d330154afd7e7ee"
  },
  {
    "url": "assets/js/36.cad5336f.js",
    "revision": "be673278952f75d5702154be421d0930"
  },
  {
    "url": "assets/js/37.224b816f.js",
    "revision": "fa7545338314848e265df9fe4c960ee8"
  },
  {
    "url": "assets/js/38.93e5b59f.js",
    "revision": "3cdc69d5462a13661ec7fe953b152d94"
  },
  {
    "url": "assets/js/39.21106e0e.js",
    "revision": "03242ddaff7c78fb54247f4dc18aa8a8"
  },
  {
    "url": "assets/js/4.ef7e50d2.js",
    "revision": "17b802bf1fae80ac3424b7a24882551b"
  },
  {
    "url": "assets/js/40.a472da90.js",
    "revision": "f90f986bc51768e5a8eda26a9ec29ad2"
  },
  {
    "url": "assets/js/41.391384ad.js",
    "revision": "8e444f9ff32cb2ca7c9ed3cd3467fbc8"
  },
  {
    "url": "assets/js/42.49b14b48.js",
    "revision": "2ae63601a3361fb02f5975bb83544d25"
  },
  {
    "url": "assets/js/43.cb5ce5d4.js",
    "revision": "e50c66044d3d3434cd12627308f59840"
  },
  {
    "url": "assets/js/44.ece8bc94.js",
    "revision": "f6f8532f83bb5c9421db54c9eafc6082"
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
    "url": "assets/js/app.66a2fb8c.js",
    "revision": "d3d21265c0cd6cd3a81cce63399c718a"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "e556d0832085396d30a06ca6207c69c2"
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
    "revision": "169ea8e605ef6dd69522c000623f1444"
  },
  {
    "url": "life/index.html",
    "revision": "9c60623349779f691124a8014f1a6cf8"
  },
  {
    "url": "life/意志力.html",
    "revision": "a0e2e8780b45f4c6dbac6547a9f9f73f"
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
    "revision": "cbe18628e8d00f0546fcbd189c8835fb"
  },
  {
    "url": "technology/CSharp/vs2010-打开-vs2012-的解决方案.html",
    "revision": "96ec4cc491ea741256c4d46829436970"
  },
  {
    "url": "technology/CSharp/wpf-透明自定义窗口.html",
    "revision": "58c4e774c2365dcff43399c00b3e576e"
  },
  {
    "url": "technology/Css/css中一些有趣的东西-不定时更新.html",
    "revision": "d7bc663825bdb6cb725486dcdaddbb18"
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
    "revision": "dd8a0f09023be670b50ba32bdfc5d558"
  },
  {
    "url": "technology/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "technology/index.html",
    "revision": "5c5824d111c3e037fdb4e400f8e86c9b"
  },
  {
    "url": "technology/Javascript/call bind apply实现.html",
    "revision": "8acf68a58b9c144117f96154ecb6cfc0"
  },
  {
    "url": "technology/Javascript/Event-loop.html",
    "revision": "331a8d065b20e0e4ce37d07847c45c4b"
  },
  {
    "url": "technology/Javascript/JS数组操作基础.html",
    "revision": "47d81561749357e399c38f3a8a1f980c"
  },
  {
    "url": "technology/Javascript/onmousemove事件遇到iframe.html",
    "revision": "aa028850e7a9ae298e4d62331cbc08e8"
  },
  {
    "url": "technology/Javascript/Promise.html",
    "revision": "f2661a079880f2aaefd2ced31424ebb6"
  },
  {
    "url": "technology/Javascript/requirejs实现.html",
    "revision": "863466aa5db69dac38469e7988491fde"
  },
  {
    "url": "technology/Javascript/Set和Map总结.html",
    "revision": "d9e3865fe7bd3c084904214583f55e3a"
  },
  {
    "url": "technology/Javascript/并行加载与顺序执行.html",
    "revision": "06b8e01d9d37af0e9d86c4f96c7dc32c"
  },
  {
    "url": "technology/Linux相关/apache-配置虚拟主机及开启ssl.html",
    "revision": "8dcc2fc43f3157db5d98ad6bf08a4a47"
  },
  {
    "url": "technology/Linux相关/Centos-Firewall-启用端口.html",
    "revision": "1b83081f15aadf48917d150a8d3c9fec"
  },
  {
    "url": "technology/Linux相关/Docker.html",
    "revision": "65697049778e60510854a9509c8be954"
  },
  {
    "url": "technology/Node.js/pkg打包.html",
    "revision": "03d8ca8d550fd5a648db56ef040932f0"
  },
  {
    "url": "technology/Node.js/说一说gulp.html",
    "revision": "1d02c3a20546dc785dd698ef474456b5"
  },
  {
    "url": "technology/技术进阶/Babel总结.html",
    "revision": "bafe36bb1a9efc9d1b0a3d4e7e4f3ac2"
  },
  {
    "url": "technology/技术进阶/Base64.html",
    "revision": "b6c995b939719ed724a7ca51fba29d09"
  },
  {
    "url": "technology/技术进阶/Content-Type和Accept的关系.html",
    "revision": "bae6ea072b828ba93115577b8f224a28"
  },
  {
    "url": "technology/技术进阶/Git中~和^的区别.html",
    "revision": "fa0576881cda416d2926f608ce92c38f"
  },
  {
    "url": "technology/技术进阶/Rxjs初探.html",
    "revision": "222523d87456e69b1d6bae32b05dca47"
  },
  {
    "url": "technology/技术进阶/Ts知识总结.html",
    "revision": "930ef8f2ab7912f8e83f928eb1db665e"
  },
  {
    "url": "technology/技术进阶/Webpack入门知识.html",
    "revision": "65886856d7b509ced66bd5ee3ac03aab"
  },
  {
    "url": "technology/技术进阶/Webpack异步加载.html",
    "revision": "1318c3da5f94f383b68f01915fddf1ba"
  },
  {
    "url": "technology/技术进阶/Webpack模块加载.html",
    "revision": "0cf827a22eaf2776cce11d76ba48170a"
  },
  {
    "url": "technology/技术进阶/Webpack模块实现.html",
    "revision": "c4b877b1a4d1b0c46e9394bdf4dc9f82"
  },
  {
    "url": "technology/技术进阶/Web性能请求优化.html",
    "revision": "34fd5c6d6e26f8ffcd3f4e9acc0ee070"
  },
  {
    "url": "technology/技术进阶/前端安全防范.html",
    "revision": "553efa5b7a6af608527af4c26ca85d16"
  },
  {
    "url": "technology/技术进阶/发布订阅vs观察者模式.html",
    "revision": "5b8989cdd08dee7ddffdb8e48306be5e"
  },
  {
    "url": "technology/技术进阶/图片分类.html",
    "revision": "5baa13c7f040ea6d759e478d4a5a54e7"
  },
  {
    "url": "technology/技术进阶/服务器推送.html",
    "revision": "d31aee24c830f00fcb9a95ebd88813a7"
  },
  {
    "url": "technology/技术进阶/查看日志命令.html",
    "revision": "9802118422eefe1cccf91dcc1020a11d"
  },
  {
    "url": "technology/技术进阶/浏览器缓存.html",
    "revision": "952b07d4dbdb65a6a318e1c4bd9e69f2"
  },
  {
    "url": "technology/技术进阶/简易依赖注入实现.html",
    "revision": "87d4a6f50aa60331791a8a24cd7bd71e"
  },
  {
    "url": "technology/技术进阶/简易打包工具实现.html",
    "revision": "91a1758ee649ff3e0d1adef82aff35c4"
  },
  {
    "url": "technology/算法/基础算法/递归算法.html",
    "revision": "366ae53d054758c80b8bf3bfd5cef971"
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
