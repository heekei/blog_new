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
    "revision": "9a30035608d13b617a4693eb761eb6db"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bb32d8818f2801bd342c9cb919b07bff"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "10b04ff5f7318324f83ce81ebed00838"
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
    "url": "assets/js/10.1173f00a.js",
    "revision": "56111ae732f1c9cb12d77bdbec7e4a99"
  },
  {
    "url": "assets/js/11.4d5656a2.js",
    "revision": "a60fea84feaa2cc47f25fe9a093e6ec4"
  },
  {
    "url": "assets/js/12.0813d640.js",
    "revision": "cb6c7ba020f4b20b027077c2793ea5ea"
  },
  {
    "url": "assets/js/13.bc9da100.js",
    "revision": "f51348bf7099cce86fc1f74cf0193632"
  },
  {
    "url": "assets/js/14.16fa54e0.js",
    "revision": "b0820bfacea1fb5639b13cdf80b14f6a"
  },
  {
    "url": "assets/js/15.c64437d1.js",
    "revision": "ebffeeb6e90fb5da936f9aa9355bd22b"
  },
  {
    "url": "assets/js/16.bdc51670.js",
    "revision": "ecf5d4a24cd042d8c064f95c455954b7"
  },
  {
    "url": "assets/js/17.74522172.js",
    "revision": "c788c10cefb777a3859d4ac81e9cbc23"
  },
  {
    "url": "assets/js/18.ba15f018.js",
    "revision": "af9a2342f0d31c87fb70d2febe2e341b"
  },
  {
    "url": "assets/js/19.9a74d6db.js",
    "revision": "322721c9c3bc980645b9e5b3440f871d"
  },
  {
    "url": "assets/js/2.43a1965f.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.25fbac15.js",
    "revision": "5d4786988dc51c1ec98701c5374233f4"
  },
  {
    "url": "assets/js/21.1b99169b.js",
    "revision": "f35b7ce0bba269f118e3fad3000e5f3d"
  },
  {
    "url": "assets/js/22.3f17cc41.js",
    "revision": "a91ee70378308081f946d1a8814b700b"
  },
  {
    "url": "assets/js/23.51cb4077.js",
    "revision": "c46fd95a22efb632efbb8ebe67968a19"
  },
  {
    "url": "assets/js/24.9d9c67b2.js",
    "revision": "d430c3d1ef59b597fbc0d3bb173a6efc"
  },
  {
    "url": "assets/js/3.afb07ee6.js",
    "revision": "66c3f23fab02065c02431e599339573a"
  },
  {
    "url": "assets/js/4.df3a66a9.js",
    "revision": "e3cee92ec433004521f35d355e67b11a"
  },
  {
    "url": "assets/js/5.d19f3e17.js",
    "revision": "1f86f27ba5817f38b109d5ad16d34e01"
  },
  {
    "url": "assets/js/6.b5111fb8.js",
    "revision": "7bfaee9d1e18b94d59343c9cb716b9b4"
  },
  {
    "url": "assets/js/7.e0e6397b.js",
    "revision": "db0250f24dddcb24ab1e5f34757754e7"
  },
  {
    "url": "assets/js/8.c70db270.js",
    "revision": "8760c85539da85629dc02918425f358f"
  },
  {
    "url": "assets/js/9.db5c0726.js",
    "revision": "47ae47feaa317b691a5781b990d2d1e9"
  },
  {
    "url": "assets/js/app.78c37ccb.js",
    "revision": "2c89296586f9832145e64b7b9e9f3a7d"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "f33e518737a0cf71a06960076d63e3ee"
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
    "revision": "5c59da0d534d1102473286499b4e9404"
  },
  {
    "url": "life/index.html",
    "revision": "ca306e1a708e2ef290e8ecc30865d447"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/babel总结.html",
    "revision": "188303e31cc94c1102a58835e8247fbc"
  },
  {
    "url": "skills/base64.html",
    "revision": "d6bd2694c5516314552454fd7e826c40"
  },
  {
    "url": "skills/docker.html",
    "revision": "1812c97b16ecad80085f1ab43c365247"
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
    "url": "skills/event-loop.html",
    "revision": "1546d741ebc2546977b29a7727074dfd"
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
    "url": "skills/git中~和^的用法分析.html",
    "revision": "36eba3cb1e14465a859d3d86f4b46e4e"
  },
  {
    "url": "skills/index.html",
    "revision": "1aa79c9e1114303bca961ed1f5bd72a4"
  },
  {
    "url": "skills/promise.html",
    "revision": "ecba9e5a5df49aa844f2d5db92daff58"
  },
  {
    "url": "skills/rxjs初探.html",
    "revision": "cd9b22a6bc3883629b4321378a48d0fa"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "527eefa96205a1362f3bb10d0ebf5662"
  },
  {
    "url": "skills/webpack学习.html",
    "revision": "712bfaf64b54a9cbe30c18c4f7452436"
  },
  {
    "url": "skills/webpack模块实现.html",
    "revision": "cbbf6f3685f46f7660fd73a2e9df6ea8"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "28da4daac9a3636d6e9ac38a4cd72d8a"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "787c3dfc8313362ff3291a4e281c2c3c"
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
