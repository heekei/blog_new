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
    "revision": "cc0dbec68d8c15da3ce565a02c6906c8"
  },
  {
    "url": "algorithm/index.html",
    "revision": "cb81f4dde224030e3bff5c5bd783f5aa"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "46bed951344ac1e64c8d86bd1b8d373d"
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
    "url": "assets/js/22.04139bfe.js",
    "revision": "7a82efe5b72e7d9328bd2b4f37eabce3"
  },
  {
    "url": "assets/js/23.7a78b71a.js",
    "revision": "f64920ab0493488ec91d97579f26515b"
  },
  {
    "url": "assets/js/24.38f7a97d.js",
    "revision": "306d5f7351f98130f28687f661a043c9"
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
    "url": "assets/js/6.fbff64ad.js",
    "revision": "4f48bb1bb0719341977dd51b260f86ef"
  },
  {
    "url": "assets/js/7.e0e6397b.js",
    "revision": "db0250f24dddcb24ab1e5f34757754e7"
  },
  {
    "url": "assets/js/8.84611788.js",
    "revision": "f43402572b5d122c425eed4a175be7fb"
  },
  {
    "url": "assets/js/9.54a746ab.js",
    "revision": "22146865671386111cb8a68f53ed1588"
  },
  {
    "url": "assets/js/app.ff00019a.js",
    "revision": "fe3b89b84aeda791c2b400e2a9968a82"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "ccfa06e523e8dfc6d00832fadca964ca"
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
    "revision": "043f47f454835170346c04f6d193bb05"
  },
  {
    "url": "life/index.html",
    "revision": "e09a2a55fc4ebd358b783e3d502c21e5"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/Babel总结.html",
    "revision": "4c6a1c37ab6c52e7aa6924379a963d07"
  },
  {
    "url": "skills/Base64.html",
    "revision": "2407d945f143cbd879e2b63f2c39d104"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Docker.html",
    "revision": "cf79afde23c3f2cb865308c3bd3f9d4d"
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
    "revision": "d5dca5658be4d8faea4f499be696db9a"
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
    "revision": "9e79988aae5773b49f78f62574a5e675"
  },
  {
    "url": "skills/index.html",
    "revision": "ab62cbd81866c9afe9e7afac93fa79af"
  },
  {
    "url": "skills/Promise.html",
    "revision": "429795c05ca4af588c423e75be7b4ed8"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "2f6da984e9c1f3cae54c89576a8fa537"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "9788e5cb4795928e79fc0735555c2c9b"
  },
  {
    "url": "skills/Webpack入门知识.html",
    "revision": "39fe5f5138f83a3273397f42fee3fe87"
  },
  {
    "url": "skills/Webpack模块加载.html",
    "revision": "0c08724ab11182a782f55cc115c23b86"
  },
  {
    "url": "skills/Web性能请求优化.html",
    "revision": "618c11924098cf476879436c757c7a49"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "6532b85e9dd09f5599144a6eb7c9afa4"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "73e86070bf6c32e2f924b76e85d3b145"
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
