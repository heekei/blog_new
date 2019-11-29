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
    "revision": "ab9500ecb8bd52b4efb65700fbf1ca99"
  },
  {
    "url": "algorithm/index.html",
    "revision": "df2eaad27ed24ffd55ca291aea7f31d9"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "268c2198c80f510856e0f9b597d6e46a"
  },
  {
    "url": "assets/css/0.styles.23757f30.css",
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
    "url": "assets/js/11.320f70e2.js",
    "revision": "88402cd8e9037d0881caba7b63c78f7b"
  },
  {
    "url": "assets/js/12.d1910502.js",
    "revision": "3aa46098c0d6b194f22b6ff422ebeefd"
  },
  {
    "url": "assets/js/13.e80b0335.js",
    "revision": "8a77f9716140dcd4e19a6869de54464d"
  },
  {
    "url": "assets/js/14.8a9e9623.js",
    "revision": "112a04f2e51fa0abadefdf81f179570a"
  },
  {
    "url": "assets/js/15.7430543d.js",
    "revision": "aa01ed7d4ee6a88a01fe7ad133078e3d"
  },
  {
    "url": "assets/js/16.6cf78789.js",
    "revision": "90b301c9709e7e1b0e101bfbd8588ac3"
  },
  {
    "url": "assets/js/17.9d712fc5.js",
    "revision": "15301be7f2d5c0ed77f0c1bf6e6b20a8"
  },
  {
    "url": "assets/js/18.0cc39129.js",
    "revision": "26d1be0d9b3d5d45474c495d82f82238"
  },
  {
    "url": "assets/js/19.d24389ca.js",
    "revision": "94456b14a2bc7da40646a3043a17a61d"
  },
  {
    "url": "assets/js/2.8d813f31.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.1ade1778.js",
    "revision": "50a7dbefa30e0c2ad9bc338329209cff"
  },
  {
    "url": "assets/js/21.73730135.js",
    "revision": "cc9a2961db7fcc3e6d6d641e4132033a"
  },
  {
    "url": "assets/js/22.e6117bbe.js",
    "revision": "f2e088b937a059af99b06532bb549ad1"
  },
  {
    "url": "assets/js/23.ec262ad2.js",
    "revision": "8747acdab3432921ddba522c8087113f"
  },
  {
    "url": "assets/js/24.cd077704.js",
    "revision": "1a3422cea9113face6177a22bf921ee1"
  },
  {
    "url": "assets/js/25.1cd93af5.js",
    "revision": "4a5b394c429239304055635b452fafd7"
  },
  {
    "url": "assets/js/26.d98b5895.js",
    "revision": "fdd917af7f08ebaed976e07fb7832991"
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
    "url": "assets/js/6.1061e1bc.js",
    "revision": "4ca1a34158c88a6cb467cdba2f6b1264"
  },
  {
    "url": "assets/js/7.274b47af.js",
    "revision": "315d54ea56dc6b0607e86277d35a82f1"
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
    "url": "assets/js/app.6a89e13a.js",
    "revision": "017b378cc3ca96f01a5eedc7c8b17b7e"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "e6ca8d013113d3cb4a87eac37ea49c37"
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
    "revision": "4151974c9d3bff333ecac7e0267a56b0"
  },
  {
    "url": "life/index.html",
    "revision": "323236bcb7753c0dcb1ee134c05a78d7"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/Babel总结.html",
    "revision": "b4cfd496d64994c93ea5714a9bcbcc19"
  },
  {
    "url": "skills/Base64.html",
    "revision": "3fb586c03345641b58ae2ff4c1f73e33"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Docker.html",
    "revision": "631c64584dbbb914821d6e1a083f00be"
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
    "revision": "43494a9b7069ea4f47617e769803c34b"
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
    "revision": "7135084f94df86c2f0a4120523d4d204"
  },
  {
    "url": "skills/index.html",
    "revision": "d72f3a8b4fd350d0042fe653d463c5c5"
  },
  {
    "url": "skills/Promise.html",
    "revision": "dbe0cf06e8ed1c3d6038b7afbe9b872d"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "cdfcd7db1526bd8f410027b6d3d4cd80"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "6822e9940f9ef5ad2d3c27159e9844b9"
  },
  {
    "url": "skills/Webpack入门知识.html",
    "revision": "fbb3ee50c6e2bac16002317bec827b71"
  },
  {
    "url": "skills/Webpack模块加载.html",
    "revision": "e724a861651bdbe36a1e7ae46886620e"
  },
  {
    "url": "skills/Web性能请求优化.html",
    "revision": "03403ad1b70c818bff02840775b67a9c"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "f71cae8c12686f59eb63d18426d550d0"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "27796a6e776be353a2221c142c4b2509"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "6c4ba7d8849c56b65df1ec85ed3c72b3"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "0decbcf8f0ac07a0c198aca796051d28"
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
