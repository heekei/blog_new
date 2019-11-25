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
    "revision": "dfe9027e5c1e53919a0dafce8a195819"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ed4822c6918d1864d72bb0b8e642112e"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "97090ae7ff7ab210cdd57b64d2f1974d"
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
    "url": "assets/js/11.63428811.js",
    "revision": "001e37150e0c5e0d8ecd76e53f99c5e5"
  },
  {
    "url": "assets/js/12.21b2b167.js",
    "revision": "78b1ca0947af7eaff3b41acd641c631b"
  },
  {
    "url": "assets/js/13.0ff411ff.js",
    "revision": "d1c9d863835f92a9f26e632fafa131ac"
  },
  {
    "url": "assets/js/14.00ddfa33.js",
    "revision": "37b7965d445ecf2b9cbf8921c734b1ae"
  },
  {
    "url": "assets/js/15.3e39cf7a.js",
    "revision": "47772ab22edfb8026586756303797211"
  },
  {
    "url": "assets/js/16.baee9a8c.js",
    "revision": "43dc36507f7e1e2541d9960b36f6b16f"
  },
  {
    "url": "assets/js/17.abd10885.js",
    "revision": "4c3d0c83b348c46741c5a2bc48cc70dd"
  },
  {
    "url": "assets/js/18.0377c2a0.js",
    "revision": "a9b02743e48b070fdbcd688a9c020bcb"
  },
  {
    "url": "assets/js/19.91ac281e.js",
    "revision": "09e54f73f7d1c3a42ab67bab346c60c7"
  },
  {
    "url": "assets/js/2.43a1965f.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.ea32f09a.js",
    "revision": "2f93be41f31818786119b11b4b44b519"
  },
  {
    "url": "assets/js/21.008e5722.js",
    "revision": "68bf6ea0d4206d272d1d9671ea83e93a"
  },
  {
    "url": "assets/js/22.5afb8cf2.js",
    "revision": "a4bc653529f078ced245953a0d05b937"
  },
  {
    "url": "assets/js/23.676e3a85.js",
    "revision": "ec118932e8e3d332521513b6e6bb5cd0"
  },
  {
    "url": "assets/js/24.d2d51453.js",
    "revision": "dc2205477f9e05ba7aaca36e57446358"
  },
  {
    "url": "assets/js/25.29e4c35b.js",
    "revision": "a484dc469bf57bf483f7fb5e93c94c35"
  },
  {
    "url": "assets/js/26.5b22d1a4.js",
    "revision": "622ccc982d606544dc1dce84dc89e6c9"
  },
  {
    "url": "assets/js/27.16b3bb1f.js",
    "revision": "4f43f362e04d0b681887794a60119250"
  },
  {
    "url": "assets/js/3.afb07ee6.js",
    "revision": "66c3f23fab02065c02431e599339573a"
  },
  {
    "url": "assets/js/4.39d686fd.js",
    "revision": "67f0da686087c9ce59848ba40f09e0b3"
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
    "url": "assets/js/7.285ca763.js",
    "revision": "9d15f0a410fbc5b490576be56a9c515d"
  },
  {
    "url": "assets/js/8.f3465798.js",
    "revision": "77de3bc6317d717ebdeaa12f55dc80e6"
  },
  {
    "url": "assets/js/9.4d7dc2a6.js",
    "revision": "1eab0973d5c554ac14e02016e338013d"
  },
  {
    "url": "assets/js/app.0e0389d7.js",
    "revision": "bad52f7c6a0b9a11a14b851f74593b2b"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "ee042068ebaeb2af129cca344dfc1ea6"
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
    "revision": "c7e66cee4568b26fe58e18e4e2918ca7"
  },
  {
    "url": "life/index.html",
    "revision": "0bb86fd511a31ec48abfb97c0ead8638"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/Babel总结.html",
    "revision": "5c733249dc627e554391e422c3c472bd"
  },
  {
    "url": "skills/Base64.html",
    "revision": "2c1964d3de6bdf91ce44d96801750ceb"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Docker.html",
    "revision": "ae9bddac1ae3576ede3f58d910913419"
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
    "revision": "3edaef291197dbfbf26ee23e3d78917c"
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
    "revision": "9e3739e64976c980772072a80ec7f473"
  },
  {
    "url": "skills/index.html",
    "revision": "0730221e4ef191f5e87252c401888f39"
  },
  {
    "url": "skills/Promise.html",
    "revision": "0d5b878c1bc787fd063aa8f3957ad921"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "a2b48d781209ab2c445186b1449caf4d"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "d4f2a0d65db3bf4631f06f85c539648b"
  },
  {
    "url": "skills/Webpack入门知识.html",
    "revision": "b53f45b6831673cfc81528d7968d0baa"
  },
  {
    "url": "skills/Webpack模块加载.html",
    "revision": "7bf7fb4ed3544a5a1a767c85985bb093"
  },
  {
    "url": "skills/Web性能请求优化.html",
    "revision": "c7aebf806f28e7ff52e1f2f5ffda90da"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "b94e1e855f0c683db286e4316be11609"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "e84fb0aff5a9be00bb6132b242e8043b"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "1653853dcb4d83c201060735622f9b29"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "7759dbb76bb4ce52edbf188dbfd9f01e"
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
