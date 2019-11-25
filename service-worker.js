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
    "revision": "bb46fecb1f6b384dc49d9735447a492c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "044c8d64955fadd7933b3c6684020ec5"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "adfb8499c15968fafd4747344e3e8716"
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
    "url": "assets/js/12.d0e1576d.js",
    "revision": "4f9292047debbee41bed532dc146331c"
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
    "url": "assets/js/21.36e7de42.js",
    "revision": "180810b37e8826fa58c03b4d9ceec738"
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
    "url": "assets/js/app.921c39c5.js",
    "revision": "d35b07e3f87136d18f6a86167d603a6d"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "c0fd7bea6dd4604207d1f766438d6580"
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
    "revision": "cafa8b7c966dd5871e0d951fcb776927"
  },
  {
    "url": "life/index.html",
    "revision": "2cd08157147d44209675f1119160b8b0"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/Babel总结.html",
    "revision": "5e3c53a61b11377736cf463eeeba5556"
  },
  {
    "url": "skills/Base64.html",
    "revision": "db302df7e8372ed0c4563ec3ada469a7"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Docker.html",
    "revision": "1642d415d1fe034e459bc1dbac548946"
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
    "revision": "6148e351180b25f10f2438500a8ca0b5"
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
    "revision": "9842c0a49d1762bba9f07b57b9340566"
  },
  {
    "url": "skills/index.html",
    "revision": "bd3599f0e2ec5f136b5bb5e4c9fb6459"
  },
  {
    "url": "skills/Promise.html",
    "revision": "134e1f59ca0436c78cf479f7155eec7f"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "a257d639104e07acf72fc73a9c6e5923"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "d79b1fc1bc1ad3b7f874c0670bd5aaaf"
  },
  {
    "url": "skills/Webpack入门知识.html",
    "revision": "0b2c35f42af65de6722e30021a70de00"
  },
  {
    "url": "skills/Webpack模块加载.html",
    "revision": "2cb80c14c79249c95a2bb098f3a640e3"
  },
  {
    "url": "skills/Web性能请求优化.html",
    "revision": "1348d15ee2cd67f01404a7e753019eba"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "e37eb42caa40138de91a768154ab0c0c"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "d11b39cfe4e364bf98b75a1487e185d7"
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
