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
    "revision": "46176fc47005e693761c6be3031e042d"
  },
  {
    "url": "algorithm/index.html",
    "revision": "7d0d22529fbfc8a4c0d295aad4af5684"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "caaabc62a27e2d681c918a03071fe861"
  },
  {
    "url": "assets/css/0.styles.a9382155.css",
    "revision": "72da33e4d4e2b5645b5083609b51baf6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4bdd0cf8.js",
    "revision": "d4b54a3c93d455bc2e1cebe7d340d4a8"
  },
  {
    "url": "assets/js/11.63428811.js",
    "revision": "001e37150e0c5e0d8ecd76e53f99c5e5"
  },
  {
    "url": "assets/js/12.ddd401a1.js",
    "revision": "fd1ca5ef260f0aa0754e505e38436081"
  },
  {
    "url": "assets/js/13.55466023.js",
    "revision": "2865e50a259970dfef51b5f6d1ced1b2"
  },
  {
    "url": "assets/js/14.23d0e159.js",
    "revision": "700b765b51cb8cd24f2ba2eccea391fb"
  },
  {
    "url": "assets/js/15.7430543d.js",
    "revision": "aa01ed7d4ee6a88a01fe7ad133078e3d"
  },
  {
    "url": "assets/js/16.baee9a8c.js",
    "revision": "43dc36507f7e1e2541d9960b36f6b16f"
  },
  {
    "url": "assets/js/17.196d1de6.js",
    "revision": "a61385f3e975ce794ab9abcdc854cc61"
  },
  {
    "url": "assets/js/18.4e41069d.js",
    "revision": "1ca3b3720672bb4b9f73f85c8f3df720"
  },
  {
    "url": "assets/js/19.3a3503a3.js",
    "revision": "f7375efbb406b879883b73d802bb877f"
  },
  {
    "url": "assets/js/2.43a1965f.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.b239403a.js",
    "revision": "3525f4ae764af8b843c79547c8046455"
  },
  {
    "url": "assets/js/21.817ab45f.js",
    "revision": "78792af13a36f47f4e6711f1e594ae47"
  },
  {
    "url": "assets/js/22.20920bd5.js",
    "revision": "ac9c40080eb5153cfe7d865e26973223"
  },
  {
    "url": "assets/js/23.c65599ec.js",
    "revision": "d582df64a546eb7435b3e730e0db3e37"
  },
  {
    "url": "assets/js/24.07facf02.js",
    "revision": "9e29eb3c1abb81021cb36b13090c2c1c"
  },
  {
    "url": "assets/js/25.6b31a6a3.js",
    "revision": "8dea189ae6e0a27ca2c2da2f79718f15"
  },
  {
    "url": "assets/js/26.3e25b682.js",
    "revision": "5cd89e27ce2a8149b4f4a7caaef210a2"
  },
  {
    "url": "assets/js/3.afb07ee6.js",
    "revision": "66c3f23fab02065c02431e599339573a"
  },
  {
    "url": "assets/js/4.621bc12d.js",
    "revision": "f522f3fadece5deecac66ccac1747916"
  },
  {
    "url": "assets/js/5.d19f3e17.js",
    "revision": "1f86f27ba5817f38b109d5ad16d34e01"
  },
  {
    "url": "assets/js/6.53abcf74.js",
    "revision": "449038e613f70382fd327cf72d2c58fd"
  },
  {
    "url": "assets/js/7.285ca763.js",
    "revision": "9d15f0a410fbc5b490576be56a9c515d"
  },
  {
    "url": "assets/js/8.a24b0d48.js",
    "revision": "419e0ce6d155a5cd8974c4fdd91bd104"
  },
  {
    "url": "assets/js/9.4d7dc2a6.js",
    "revision": "1eab0973d5c554ac14e02016e338013d"
  },
  {
    "url": "assets/js/app.6e521822.js",
    "revision": "650f4faea020343f141f769e344bbfa6"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "8a3dd1dc994ad4a2a90111d7731b78e4"
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
    "revision": "343b930df93ce5c5e5d8fd8915dc8706"
  },
  {
    "url": "life/index.html",
    "revision": "3fe73fcceda5e7624a4829d0ff80e59c"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/Babel总结.html",
    "revision": "248f1a8a2273404dd79e4b30fa14d575"
  },
  {
    "url": "skills/Base64.html",
    "revision": "76046ef9fd9f18bcf115f14e183858d8"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Docker.html",
    "revision": "47e049ef0942dfeafd8955635d334b7a"
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
    "url": "skills/Event-loop.html",
    "revision": "500d5f23395e407614948c57b43a2443"
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
    "url": "skills/Git中~和^的区别.html",
    "revision": "b0aa82f0bf1d6ea2fa86ea9d5d39c38f"
  },
  {
    "url": "skills/index.html",
    "revision": "3c5485ebe85070e4d38556a1e52a9b35"
  },
  {
    "url": "skills/Promise.html",
    "revision": "c770be881be5ecf85eccb500b103ca4c"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "607f6ba607a7b17a85d5c02f12143e4d"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "1b79edf5eea4e0ecd65bd974636b22ad"
  },
  {
    "url": "skills/Webpack入门知识.html",
    "revision": "48cb017ce2e0f6745d4dfad69a65aca4"
  },
  {
    "url": "skills/Webpack模块加载.html",
    "revision": "b9dc76b188810b1f1c5433b1d8cb614d"
  },
  {
    "url": "skills/Web性能请求优化.html",
    "revision": "f6f9fb258290b542a90cbbc6b0984870"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "d683756e3b0b92702d7e57065a861438"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "0426d2df07053929e5eb8be367251c39"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "3802eaf96f449ae9a14bee18e2487e28"
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
