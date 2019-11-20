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
    "revision": "19e44ee6d6d6d24442479b7c82a60352"
  },
  {
    "url": "algorithm/index.html",
    "revision": "a40d4c6c4a50868193d639a188b2bac3"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "629cba22260ed9687b22e4ece1a48934"
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
    "url": "assets/js/11.8698e079.js",
    "revision": "5eb289b2f63ecac7b38a7a256bd5a5ee"
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
    "url": "assets/js/20.09fd5a40.js",
    "revision": "f605726eee33a75d002f587608a50e6e"
  },
  {
    "url": "assets/js/21.c18503cc.js",
    "revision": "51e8c6c078b74549bb67713b86bcbe46"
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
    "url": "assets/js/app.23ffdeeb.js",
    "revision": "2d16844312819abf31a07a06aeb5a0ca"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "affbaf70bd9c3a52b978b0e719f50172"
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
    "revision": "236b61de6e4abec9363e8b842184ea31"
  },
  {
    "url": "life/index.html",
    "revision": "e39acf125ac28cfb02ebd123fb2d6da9"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/babel总结.html",
    "revision": "2469e3d26a54c6473f332ad3c0e2ecc6"
  },
  {
    "url": "skills/base64.html",
    "revision": "c0d02fc0c825e71e9c48f5ca877ea48b"
  },
  {
    "url": "skills/docker.html",
    "revision": "1abd2bd7d0b4bcc9207f227e26fcbc5b"
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
    "revision": "098c1ae8027b0b493e099a4331287523"
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
    "revision": "fe37f04ebd26f639cfa07caedc449c60"
  },
  {
    "url": "skills/index.html",
    "revision": "2ccfdb64fbdef5c100454de1fbe5b945"
  },
  {
    "url": "skills/promise.html",
    "revision": "1475e811d2789d121931d0f0c302d536"
  },
  {
    "url": "skills/rxjs初探.html",
    "revision": "86a3ca072e5bf428728d829f0c05b0ea"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "2660c7d2fe1509fa860b89ec63cd338a"
  },
  {
    "url": "skills/webpack学习.html",
    "revision": "4a3af0e1897219a01eb4b27ff150553e"
  },
  {
    "url": "skills/webpack模块实现.html",
    "revision": "c59d9f19bf0e052a31c04b3ee0bfad1d"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "97dca7af0dc2b96713b00bd208ae97b6"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "3341cf00e7a1dc232a3aaab3da9a77f3"
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
