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
    "revision": "5b2452e544e048ef729e4181184c3572"
  },
  {
    "url": "algorithm/index.html",
    "revision": "e714a91e55bcaea4d06c5aa1fcc2f311"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "16a51236d806cb7cabad422f699749b8"
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
    "url": "assets/js/12.ddd401a1.js",
    "revision": "fd1ca5ef260f0aa0754e505e38436081"
  },
  {
    "url": "assets/js/13.55466023.js",
    "revision": "2865e50a259970dfef51b5f6d1ced1b2"
  },
  {
    "url": "assets/js/14.23d0e159.js",
    "revision": "700b765b51cb8cd24f2ba2eccea391fb"
  },
  {
    "url": "assets/js/15.7430543d.js",
    "revision": "aa01ed7d4ee6a88a01fe7ad133078e3d"
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
    "url": "assets/js/24.7af49c4f.js",
    "revision": "106eb6667afa1d1e777901cbe631ede3"
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
    "url": "assets/js/app.ff85766f.js",
    "revision": "9fb5fc9f5bad6582a7eaa0a132662a1d"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "1a8873cb7c07cbd4c4764511fd6d0f07"
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
    "revision": "a504f3beb0ebaba26e97ea272ed0bd15"
  },
  {
    "url": "life/index.html",
    "revision": "3f9fc0ec3a353ffbccf781f76426628b"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/Babel总结.html",
    "revision": "786807b302c3b477f9948f6c5c0e3527"
  },
  {
    "url": "skills/Base64.html",
    "revision": "d6da4ec2621b5ba54f70393ad8437994"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Docker.html",
    "revision": "bda4fa485a9155f445d2f2dc791ec3b8"
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
    "revision": "23b4110020b4e29c158aae2eaff2aeee"
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
    "revision": "3ef47c340ec6774ba2559cfae0aa4166"
  },
  {
    "url": "skills/index.html",
    "revision": "4092e86b6be029e079d5359ceb36cea5"
  },
  {
    "url": "skills/Promise.html",
    "revision": "8310724954f010fe55781c9a8738d9ae"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "6db185ac799770fdbeb3de2c1d1af7cd"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "ad152106b45be94af314f6956fcabfa1"
  },
  {
    "url": "skills/Webpack入门知识.html",
    "revision": "9ba98c606145dc5cc02ade092a87b7a0"
  },
  {
    "url": "skills/Webpack模块加载.html",
    "revision": "71d36f6baca8058c2c65c0a7f5e6dbca"
  },
  {
    "url": "skills/Web性能请求优化.html",
    "revision": "807cb5522f254a6a12badd8803144dd3"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "bf8c825a297dec5879e070f5f4e5e2ff"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "93689a78aa5126e91fab1cfd3eab4776"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "42c9a76b1358b1d46bacc6828315807b"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "ad5f6903a162088de463ce79891b28ba"
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
