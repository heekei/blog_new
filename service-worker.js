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
    "revision": "cf9248fcf866800fcff4c889df0a7a1b"
  },
  {
    "url": "algorithm/index.html",
    "revision": "0af2afa7362e982a7c9c7b612d429032"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "01198b2247e773c967d1b8426b0ac971"
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
    "url": "assets/js/14.d72ba19c.js",
    "revision": "7c651aa43cfb82c750ddf698dee9c966"
  },
  {
    "url": "assets/js/15.8be68cdb.js",
    "revision": "1365b9f642349e045609ea4f1e51581f"
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
    "url": "assets/js/app.5a3f6d7b.js",
    "revision": "5c5a7afc17b62a3997fd1f51ebe78f82"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "2ae60ef9328035bcd8bcb1253cc25079"
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
    "revision": "ebabd21c9eab0d8dab0949b76c932e0e"
  },
  {
    "url": "life/index.html",
    "revision": "e2dd9ad5a0e29c0b72b182885fca08c3"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/babel总结.html",
    "revision": "4e8c2e88b1b7126420940bb194603130"
  },
  {
    "url": "skills/base64.html",
    "revision": "c6227d3c3f1d18b804f9960bc9b296dc"
  },
  {
    "url": "skills/docker.html",
    "revision": "e1bd12c126d2248466ca43254e17c3f6"
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
    "revision": "eb0bdbeeec9558e989294816ecdedb76"
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
    "revision": "b610320ed9a7b6b53e5b91ab89a4b829"
  },
  {
    "url": "skills/index.html",
    "revision": "a7154167f58c239e384f77fa9dae1aa7"
  },
  {
    "url": "skills/promise.html",
    "revision": "1d08800280288f58a0c191202d39afcd"
  },
  {
    "url": "skills/rxjs初探.html",
    "revision": "4d404149dd8d7fe1496255ada810f58e"
  },
  {
    "url": "skills/webpack学习.html",
    "revision": "a7b8769d6630a275308ca9dc36a4d75b"
  },
  {
    "url": "skills/webpack模块实现.html",
    "revision": "efb90f0595affca2d98eea854f54fe5f"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "265d281ef8906c95047d4d83bbe418d7"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "74c51fa89ae47766feb04051953af301"
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
