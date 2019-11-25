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
    "revision": "bd844c8e912eb75d702370e264e7abc9"
  },
  {
    "url": "algorithm/index.html",
    "revision": "04c6de9fd5e415288f62fe9682cec4e4"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "59898d9e7475da6ed83461f087972294"
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
    "url": "assets/js/11.962f9989.js",
    "revision": "ce1fb6037876e82e50499a50f57b6c8a"
  },
  {
    "url": "assets/js/12.05501194.js",
    "revision": "5692b59a087e090d94b063283417029c"
  },
  {
    "url": "assets/js/13.43b271b2.js",
    "revision": "cc74a0b3bd606e730f853327d875a8e0"
  },
  {
    "url": "assets/js/14.0f435962.js",
    "revision": "930a342a09e63c3c170524ea63cd2659"
  },
  {
    "url": "assets/js/15.d13afff4.js",
    "revision": "fbcd799b1dc55c3282c598accdffee97"
  },
  {
    "url": "assets/js/16.affc2dcc.js",
    "revision": "1c411281abbdcc0f6632f58b2e671d07"
  },
  {
    "url": "assets/js/17.5665910f.js",
    "revision": "56ed450fee5f71351e25ecc04523b2c3"
  },
  {
    "url": "assets/js/18.5d0f71c1.js",
    "revision": "47d215c1a9d7588059b5426c1a9d6f7b"
  },
  {
    "url": "assets/js/19.ed07587c.js",
    "revision": "c40c11f7924e9b3ffc630d9f1bff888b"
  },
  {
    "url": "assets/js/2.43a1965f.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.60b5413c.js",
    "revision": "584a87a5df5a45465bf982c34b814cae"
  },
  {
    "url": "assets/js/21.3e0ee82e.js",
    "revision": "7dcab4b36d0fbcf90e3df920e2e8183f"
  },
  {
    "url": "assets/js/22.757fc558.js",
    "revision": "837a4a96a4ed2bf165433ec0a0a061a1"
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
    "url": "assets/js/25.7c1f2479.js",
    "revision": "d1c39f31b099de7c4444c973f78eaa50"
  },
  {
    "url": "assets/js/26.fbc32bc0.js",
    "revision": "ba67b21e071dd67f72e8666796957145"
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
    "url": "assets/js/7.12f7a087.js",
    "revision": "32298380b65f8d4343955b7b052b3201"
  },
  {
    "url": "assets/js/8.3f5164f3.js",
    "revision": "27540baa2793fac9122a14f666b364a0"
  },
  {
    "url": "assets/js/9.6cfe99ed.js",
    "revision": "cc54c3e32c13b031affb08781967f641"
  },
  {
    "url": "assets/js/app.53a7100e.js",
    "revision": "91a002af1da3698533647e3d022d3961"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "8587d94e644ee0820f1ab6ee4da130af"
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
    "revision": "41764906967e54663c13abf982783aed"
  },
  {
    "url": "life/index.html",
    "revision": "3a9ac3ccb7ebaf5c3dbacffd9b6f35b9"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/babel总结.html",
    "revision": "c235b4dec11414e31d20eb51a3e9e92c"
  },
  {
    "url": "skills/Babel总结.html",
    "revision": "aa1ca4558423063ced917ac0f60c4660"
  },
  {
    "url": "skills/base64.html",
    "revision": "3d2a9ce70dfdabbccefba126021f745c"
  },
  {
    "url": "skills/Base64.html",
    "revision": "e0ae36fcd3fcc8ff185a4a0cd998c2ec"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/docker.html",
    "revision": "bb4b04cbf7fd7e502bef45d2e9699987"
  },
  {
    "url": "skills/Docker.html",
    "revision": "03efe1140bec5b9679f1926f95fda84e"
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
    "revision": "7c166c89f85838b2ecc5a2dd14cdd419"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "d6e0712d82aa80066a139301dcca5c7f"
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
    "revision": "b4c832da4bb0806fa3d29853cd2e8ea3"
  },
  {
    "url": "skills/index.html",
    "revision": "d0ea132766b52d0c4f5f309da4bb521a"
  },
  {
    "url": "skills/promise.html",
    "revision": "21117744102633718334cc1173ac5f8c"
  },
  {
    "url": "skills/Promise.html",
    "revision": "d4ca736336f77ee3bb28be791d77bc5d"
  },
  {
    "url": "skills/rxjs初探.html",
    "revision": "94f48f1ecd737b9593c7ad39f6b7acd9"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "e5d7527dd86fb1fbaf77524cbf87f4fb"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "cd39054d37b35e7940059b6c5fb3e21d"
  },
  {
    "url": "skills/Webpack入门知识.html",
    "revision": "0d7d9743c7deb5776357707327f8c0de"
  },
  {
    "url": "skills/Webpack模块加载.html",
    "revision": "126d82deb5cea68c324624bb88ed710a"
  },
  {
    "url": "skills/Web性能请求优化.html",
    "revision": "ea06b30ca22b1f174074eda7ddf97dad"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "322b4e57a22ae97958e3b12243569b27"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "2ceb24e847d6e3bd37e839fba291b479"
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
