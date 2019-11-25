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
    "revision": "743fafa184d922665a3099024c89b747"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f5f0f548a32c4c7e85b310201436799b"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "35945349a9194d3db15819e93f4b9005"
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
    "url": "assets/js/10.620db31b.js",
    "revision": "4e0a1a17b87ab8ebe5f2fa15af146cc1"
  },
  {
    "url": "assets/js/11.213d1df7.js",
    "revision": "db7356544f73bfe1613faf30095ed0c7"
  },
  {
    "url": "assets/js/12.e7320967.js",
    "revision": "50bdab82db09faadbb1c96b48090d50d"
  },
  {
    "url": "assets/js/13.40736926.js",
    "revision": "7b8c35013eb359bce4b88eb01f066fe4"
  },
  {
    "url": "assets/js/14.ddb7c7a3.js",
    "revision": "2473340613be15c8f4ecd5fa37e9bac5"
  },
  {
    "url": "assets/js/15.d8784cda.js",
    "revision": "f2dc74703a3dbabf1835353ea1a4366f"
  },
  {
    "url": "assets/js/16.188a24e8.js",
    "revision": "1c0b88ac4c461203bd1cd052efed4213"
  },
  {
    "url": "assets/js/17.3f0e3d63.js",
    "revision": "b6e11be3ed17795e53861d4f4c9b880e"
  },
  {
    "url": "assets/js/18.01f9241f.js",
    "revision": "46e652ac051cb04891b7d5a77d8a60c5"
  },
  {
    "url": "assets/js/19.d906e80c.js",
    "revision": "2b01001a052edb2fad2879bd6961a60d"
  },
  {
    "url": "assets/js/2.43a1965f.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.23cfb3de.js",
    "revision": "02cc61178eeb13ffc2813262450c5139"
  },
  {
    "url": "assets/js/21.887c3132.js",
    "revision": "096864494a367243ec0fa48739a5e118"
  },
  {
    "url": "assets/js/22.5bb3379a.js",
    "revision": "68d0496a52b33f30641b9950f0d3c6f2"
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
    "url": "assets/js/8.c70db270.js",
    "revision": "8760c85539da85629dc02918425f358f"
  },
  {
    "url": "assets/js/9.2fd2005b.js",
    "revision": "f36b6e1660dcd4cc452bd5504d812893"
  },
  {
    "url": "assets/js/app.d32c821d.js",
    "revision": "0c138ba36b4c5763f73132647651d4c7"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "74732ed0be049925cf79bca10fb57bec"
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
    "revision": "d609816cefe0d33daa52c3a0fa021076"
  },
  {
    "url": "life/index.html",
    "revision": "d9d8da4d83a2315d4536cacdcb6253d6"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/babel总结.html",
    "revision": "cb4663b84c2b4c556bc701cf2b36073f"
  },
  {
    "url": "skills/base64.html",
    "revision": "9ff4718f59cbc3bf2bb52dada4fe2982"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/docker.html",
    "revision": "73dea1879d196d2790bf01b27e84fdd4"
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
    "revision": "35d6a4d97ffa20008bc80fc85d260be2"
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
    "revision": "7596514b544bd87e55c9321bd694297e"
  },
  {
    "url": "skills/index.html",
    "revision": "8f7fd85e545da54a8bc4e22647791e7d"
  },
  {
    "url": "skills/promise.html",
    "revision": "94fc0ee822f8fce604166708fa7f32b5"
  },
  {
    "url": "skills/rxjs初探.html",
    "revision": "f6ba75f7e7bf30e7f905e2c1c102b33b"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "376da0d4077050f18659f25d9914a05d"
  },
  {
    "url": "skills/webpack学习.html",
    "revision": "6003fc9f74b22377dafdc09b2b950ba8"
  },
  {
    "url": "skills/webpack模块实现.html",
    "revision": "f83c6e6b2d4c1906797381bb40f2e8b1"
  },
  {
    "url": "skills/Web性能请求优化.html",
    "revision": "89bdcc4841914a462d908c38332c8764"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "d47e09e345357737fd6bc6a560e0ff1a"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "e7cc4991038b312e400c86be32932e51"
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
