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
    "revision": "23f5aee057ece3beb4aeb7ac42722691"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b3c5903acf0b0be7cc5c2fad928417cd"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "f821fdf234f6daedddfac10c1ec719ad"
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
    "url": "assets/js/11.0316a9e9.js",
    "revision": "c601eb7d56c1674f9a2bead5885066dc"
  },
  {
    "url": "assets/js/12.0d81011f.js",
    "revision": "2a8795f6b6c0b439bfde1cc9435dda78"
  },
  {
    "url": "assets/js/13.0ff411ff.js",
    "revision": "d1c9d863835f92a9f26e632fafa131ac"
  },
  {
    "url": "assets/js/14.9c3cd28b.js",
    "revision": "953af77ef6e0255435f2dce0a72a0be6"
  },
  {
    "url": "assets/js/15.d5d07d01.js",
    "revision": "18a40175ca1fee4b2c49859ba34bd297"
  },
  {
    "url": "assets/js/16.baee9a8c.js",
    "revision": "43dc36507f7e1e2541d9960b36f6b16f"
  },
  {
    "url": "assets/js/17.57fe0bac.js",
    "revision": "b7272283b5981b56f49b70a2334259e6"
  },
  {
    "url": "assets/js/18.67cbba8e.js",
    "revision": "722d5dc7c9bffce28708a4daf2640914"
  },
  {
    "url": "assets/js/19.071a5fb7.js",
    "revision": "4503bb428fb352352e4c101e7c87752b"
  },
  {
    "url": "assets/js/2.43a1965f.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.3a37f05d.js",
    "revision": "b6efa539395110192d53d3ee383a86c8"
  },
  {
    "url": "assets/js/21.cf0470e3.js",
    "revision": "bcd640de2bd17d1a81c27248a26e7681"
  },
  {
    "url": "assets/js/22.f7601492.js",
    "revision": "ab1939db51e4b0d2f91f15304f3e9f63"
  },
  {
    "url": "assets/js/23.924b9424.js",
    "revision": "53f5d62b738a5b90e1959eb1dbb098a3"
  },
  {
    "url": "assets/js/24.e11092e9.js",
    "revision": "22e1861fbfc05bcc91f5cb5064e551b5"
  },
  {
    "url": "assets/js/25.4ef60b97.js",
    "revision": "cc2d3de107f97dd6022d3632dde8c351"
  },
  {
    "url": "assets/js/3.afb07ee6.js",
    "revision": "66c3f23fab02065c02431e599339573a"
  },
  {
    "url": "assets/js/4.b11212aa.js",
    "revision": "355e2ec390a29a0ff43e89ddd8fe4450"
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
    "url": "assets/js/7.274b47af.js",
    "revision": "315d54ea56dc6b0607e86277d35a82f1"
  },
  {
    "url": "assets/js/8.a24b0d48.js",
    "revision": "419e0ce6d155a5cd8974c4fdd91bd104"
  },
  {
    "url": "assets/js/9.2fd2005b.js",
    "revision": "f36b6e1660dcd4cc452bd5504d812893"
  },
  {
    "url": "assets/js/app.9f9653a5.js",
    "revision": "6d644e5980fc9c328de7c073990f77af"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "92a8e6a7e2ccd9a73414b2dcade817a7"
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
    "revision": "1adb66933c484c5137c9e331207234aa"
  },
  {
    "url": "life/index.html",
    "revision": "86710ffa8123396cf7e7a45749e1322c"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/Babel总结.html",
    "revision": "18ba1cf973c92de046da6ea24a11e4f1"
  },
  {
    "url": "skills/Base64.html",
    "revision": "6a2af3b344f0df40e699ce5a8e3ae93f"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Docker.html",
    "revision": "c4e87f9df8055f016a9701e4b5321965"
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
    "revision": "dd58fe091a5125c3a9baeda8dcb364d7"
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
    "revision": "54f67f981b2e6f79c04161911716f8d6"
  },
  {
    "url": "skills/index.html",
    "revision": "30b56050cc7aee82ae2868ea40dcb30e"
  },
  {
    "url": "skills/Promise.html",
    "revision": "fb9ad6d86777447293fc7d800a9e23f1"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "6caac1bd3025b637ed8e635d7e06de76"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "6bd7b0c133b713b8dbf8572c0ec30bb6"
  },
  {
    "url": "skills/Webpack入门知识.html",
    "revision": "69cc8c4a2df1c9a6c69ed662988a4ab4"
  },
  {
    "url": "skills/Webpack模块加载.html",
    "revision": "09c410fd6c2700a3935804ff2c1cadd3"
  },
  {
    "url": "skills/Web性能请求优化.html",
    "revision": "dc33eac07681a6f856d819a2dfbcce36"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "c366a709ed0b8d48787078983135c981"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "b35eca5b16ea15705dc69e334c4f88b1"
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
