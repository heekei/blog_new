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
    "revision": "3c534926ee372d447f7a94e647dda94c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "2fa9bffcb363eb106e8a2d33cf5cc698"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "2fa94e5faf089a35c0c8407722328a14"
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
    "url": "assets/js/11.dd13982c.js",
    "revision": "2b4d1ff63bf54d062b7a515546983415"
  },
  {
    "url": "assets/js/12.5dbb6899.js",
    "revision": "50cddad2fb1e1060e6bc82f393e3337b"
  },
  {
    "url": "assets/js/13.9591a8c8.js",
    "revision": "cb7c78e9c50fdf26762a2b71fab58f7a"
  },
  {
    "url": "assets/js/14.2b2242b3.js",
    "revision": "cfe33d1e916e6ad1a33081a616714c64"
  },
  {
    "url": "assets/js/15.418ad619.js",
    "revision": "1e3fcec225cda63a159710b36dbcf947"
  },
  {
    "url": "assets/js/16.1ede81c1.js",
    "revision": "6c4bb2ce7bae9572b0039567c445b1ce"
  },
  {
    "url": "assets/js/17.4122ee56.js",
    "revision": "51ea3117173308049b2f0a96152f4f2e"
  },
  {
    "url": "assets/js/18.ca5bf2cf.js",
    "revision": "100fb45f11226f6498c3bac30c91aa8f"
  },
  {
    "url": "assets/js/19.7f67283c.js",
    "revision": "334e618408d62d665ceff452df53c688"
  },
  {
    "url": "assets/js/2.43a1965f.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.5c5817db.js",
    "revision": "f7c62715faedc0d7ed603d4f3a7198f7"
  },
  {
    "url": "assets/js/21.fb79ead4.js",
    "revision": "fea090814ff92d5e488515c67f80fe9b"
  },
  {
    "url": "assets/js/22.cb5d651e.js",
    "revision": "8e9928dcca9aef5209efa1b406a76265"
  },
  {
    "url": "assets/js/23.3be279e1.js",
    "revision": "2f9aa8ad3bce818007b7a22bb7609cd9"
  },
  {
    "url": "assets/js/3.afb07ee6.js",
    "revision": "66c3f23fab02065c02431e599339573a"
  },
  {
    "url": "assets/js/4.ef5e353e.js",
    "revision": "2c150778858c76b12cc99a1cb64e3d56"
  },
  {
    "url": "assets/js/5.d19f3e17.js",
    "revision": "1f86f27ba5817f38b109d5ad16d34e01"
  },
  {
    "url": "assets/js/6.fbff64ad.js",
    "revision": "4f48bb1bb0719341977dd51b260f86ef"
  },
  {
    "url": "assets/js/7.a1638fba.js",
    "revision": "b9a0b90922bb0968aa21d15d9a628b06"
  },
  {
    "url": "assets/js/8.a24b0d48.js",
    "revision": "419e0ce6d155a5cd8974c4fdd91bd104"
  },
  {
    "url": "assets/js/9.f49e1b97.js",
    "revision": "1411c5c3672b40506b63e2886a971df7"
  },
  {
    "url": "assets/js/app.8bbe08ec.js",
    "revision": "50bbb4744f0cb5c18f5d7dc4b758826b"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "a5aa0b93e7377fcf27c5b9b80555153a"
  },
  {
    "url": "index.html",
    "revision": "3fb9e572e3f158794d9b618261dd1764"
  },
  {
    "url": "life/index.html",
    "revision": "844d927d2cc8203e7abf8376c18ab4aa"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/babel总结.html",
    "revision": "ee305823025774d0ad15c1bbed8de781"
  },
  {
    "url": "skills/base64.html",
    "revision": "2d0ef43b4ffebfce18fb61e2a7357c2d"
  },
  {
    "url": "skills/docker.html",
    "revision": "d46f426f0d0a7d7aa6a293421410c07a"
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
    "revision": "7f74464f0e04a48e77208e82a960aaf5"
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
    "revision": "18706a6103c1ca71d72a54783d9ed720"
  },
  {
    "url": "skills/index.html",
    "revision": "3bcc8234f5ddf594ab285e1eb25526b9"
  },
  {
    "url": "skills/promise.html",
    "revision": "466a8245af247d2306986539a748e07e"
  },
  {
    "url": "skills/rxjs初探.html",
    "revision": "ff47022ce10d645f9e51731e18d7dc10"
  },
  {
    "url": "skills/webpack学习.html",
    "revision": "afba2fb24303914a9f98d0c42eed0857"
  },
  {
    "url": "skills/webpack模块实现.html",
    "revision": "edaac4af7eac2a78881d6303e9795ee6"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "7d8553bd21274ebaea1de766ca8341e8"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "c8599bfa351d4d445c063cd285b1ffa3"
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
