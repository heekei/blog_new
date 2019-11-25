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
    "revision": "635bdf45bcf61b9044e163c15bd4e9fe"
  },
  {
    "url": "algorithm/index.html",
    "revision": "afa654b40c0a8b6ab4ce2d53aed9a9cc"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "b514acb84fccd43c7f718937818b5816"
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
    "url": "assets/js/10.012caad7.js",
    "revision": "65f574fedc79446867f9e6cad11a0baf"
  },
  {
    "url": "assets/js/11.4ce15db5.js",
    "revision": "c90d08f731a98dd17d454c058998693a"
  },
  {
    "url": "assets/js/12.87d193f6.js",
    "revision": "39b63e316cacab7431976185504a6a6f"
  },
  {
    "url": "assets/js/13.dee45405.js",
    "revision": "45b6b349c3ab32a6fdd494d5a0b8828d"
  },
  {
    "url": "assets/js/14.9714d508.js",
    "revision": "17bcb06f59e57be66cd8f59bef16c00e"
  },
  {
    "url": "assets/js/15.d5d07d01.js",
    "revision": "18a40175ca1fee4b2c49859ba34bd297"
  },
  {
    "url": "assets/js/16.a41d5d16.js",
    "revision": "6e1763a5fac15e24405613fcb62dd1f8"
  },
  {
    "url": "assets/js/17.5bf5a8d1.js",
    "revision": "fc27220532162c29f21b0fc5a725c60a"
  },
  {
    "url": "assets/js/18.ccf596f4.js",
    "revision": "f465f8b34d3084ee00d3a654a4871143"
  },
  {
    "url": "assets/js/19.68f90681.js",
    "revision": "ce7af7bc700b6dfec3b450945c875405"
  },
  {
    "url": "assets/js/2.43a1965f.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.cd9ca306.js",
    "revision": "76816451154f6ca99295c8ab8a0fbade"
  },
  {
    "url": "assets/js/21.e58fcea5.js",
    "revision": "f83bd44cc464ef115c910cd7a8492480"
  },
  {
    "url": "assets/js/22.20920bd5.js",
    "revision": "ac9c40080eb5153cfe7d865e26973223"
  },
  {
    "url": "assets/js/23.0791c127.js",
    "revision": "eef487746c482e9545ef5407681056d8"
  },
  {
    "url": "assets/js/24.f1314c7c.js",
    "revision": "82a634c511dcdcf44ee7166d539b9e61"
  },
  {
    "url": "assets/js/25.1fbedb9b.js",
    "revision": "215b255da7b3d7a08335414c49ae3c37"
  },
  {
    "url": "assets/js/26.395dec42.js",
    "revision": "0f8a34f9c1a46339599cae0aaf25068a"
  },
  {
    "url": "assets/js/27.79aac922.js",
    "revision": "9d56430207e7320cf8edae750bf3716f"
  },
  {
    "url": "assets/js/28.01fa2293.js",
    "revision": "c2b3051b0b25e65b13e9e1c34d2faa51"
  },
  {
    "url": "assets/js/29.6021e4d4.js",
    "revision": "5682d16a447a219bbd5a3fbe27c54c08"
  },
  {
    "url": "assets/js/3.d3c7005e.js",
    "revision": "e6f0e52741110fa7b32a7dc07003d33d"
  },
  {
    "url": "assets/js/30.3774d191.js",
    "revision": "edebdd3f539c432f5bc718e7cec37918"
  },
  {
    "url": "assets/js/31.aa9a1cb9.js",
    "revision": "5555cd25bed91d7334fca0db34c0ab59"
  },
  {
    "url": "assets/js/4.939eff57.js",
    "revision": "becc3b2045de61d414d55b20da8b80b9"
  },
  {
    "url": "assets/js/5.d19f3e17.js",
    "revision": "1f86f27ba5817f38b109d5ad16d34e01"
  },
  {
    "url": "assets/js/6.edcf6073.js",
    "revision": "ee78e95207c2eb674ceb3d64c6ded0d7"
  },
  {
    "url": "assets/js/7.f2f2514a.js",
    "revision": "bde5aca8f0c6c8642933b0ce80ed58b2"
  },
  {
    "url": "assets/js/8.93741935.js",
    "revision": "8bde4c17c52aed21402a2f38890e88e2"
  },
  {
    "url": "assets/js/9.af4b942e.js",
    "revision": "022f6f71652efe5b76b5aee6f0e2a751"
  },
  {
    "url": "assets/js/app.77598b39.js",
    "revision": "8be090263e21cf894c8298342cc2362a"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "f889aa66b3d3e6dd5d47a8b7a45f9444"
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
    "revision": "7a8f2f6439cf92a2c5966bdac9b9638b"
  },
  {
    "url": "life/index.html",
    "revision": "1425d21a6518aa59469f20cbb10c005d"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/babel总结.html",
    "revision": "bc626fa8099aa1d45dee5aeefc332465"
  },
  {
    "url": "skills/Babel总结.html",
    "revision": "0d8d192c8957d998c0eb7303e7a298ac"
  },
  {
    "url": "skills/base64.html",
    "revision": "9b4cd0327cc277aebbaa470570e5f478"
  },
  {
    "url": "skills/Base64.html",
    "revision": "5befde6538935cb0778467c0428dbd05"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/docker.html",
    "revision": "d9f730e1541a14ffb8c3ab91fbacb204"
  },
  {
    "url": "skills/Docker.html",
    "revision": "df701077ed5adba8250e8bfcd8196de5"
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
    "revision": "7006433b9ae538695af21f5396e86197"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "0473a09eff3148888b0b820e4bab8e50"
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
    "revision": "f4a100d3039ec9be2368aced72150569"
  },
  {
    "url": "skills/index.html",
    "revision": "cc11a12991fa90498c6a2b6b8d6edfb9"
  },
  {
    "url": "skills/promise.html",
    "revision": "13151147d67cc29d4fbacd09ece3593a"
  },
  {
    "url": "skills/Promise.html",
    "revision": "7215bb844fc20c7849db24fd6eba6a23"
  },
  {
    "url": "skills/rxjs初探.html",
    "revision": "3eb387dfc666855e752cac6ec70196dc"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "9260985b8beaa8b40c0f8ff7258593de"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "f48fb7f605f887dd560d9e62e0e3f228"
  },
  {
    "url": "skills/Webpack入门知识.html",
    "revision": "3c78a2662b25c28a1e002f48301a0bfd"
  },
  {
    "url": "skills/Webpack模块加载.html",
    "revision": "df8bfe1a0f39534a830a5eced992f24f"
  },
  {
    "url": "skills/Web性能请求优化.html",
    "revision": "98d781f623ff3175dddea10faf16c60b"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "691cbdd0bfb0cb9e38e9ea31831f420d"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "6b1d477fc3bd4effa0cfa2b99e379877"
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
