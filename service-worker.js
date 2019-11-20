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
    "revision": "3a207d70baf094272d949da8d3ae9901"
  },
  {
    "url": "algorithm/index.html",
    "revision": "59e2ea35c146a65eec5f48f37ffa2cac"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "8de2503b56ba02f1896c43ca00edc17d"
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
    "url": "assets/js/11.a4fa1471.js",
    "revision": "eec5f890421029affeae7b9b20e42628"
  },
  {
    "url": "assets/js/12.e4dac3b4.js",
    "revision": "8815289d6b08698f9518c202036db6c6"
  },
  {
    "url": "assets/js/13.9dcab1a4.js",
    "revision": "988444baa0ded798c1878c10ba2b4ce0"
  },
  {
    "url": "assets/js/14.e8460f38.js",
    "revision": "843c6b91507a5d880bdd16e7f9e8bc26"
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
    "url": "assets/js/8.93741935.js",
    "revision": "8bde4c17c52aed21402a2f38890e88e2"
  },
  {
    "url": "assets/js/9.c119becf.js",
    "revision": "cf9d3ca5720ce611aeed6e2d8ea01c54"
  },
  {
    "url": "assets/js/app.7377accb.js",
    "revision": "1df6d637cad4177a4f73222dc7da72fd"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "7521bb7a14a754c9ad6b705b7ae1a767"
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
    "revision": "725371198f9303dd65c36bf6ffa96d3f"
  },
  {
    "url": "life/index.html",
    "revision": "f8098fbf5503082046b71acabe0ab0be"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/babel总结.html",
    "revision": "eefdc286a25ba34d3d04dc5406cf2f2a"
  },
  {
    "url": "skills/base64.html",
    "revision": "331989d87342ba6ad6d6959003e43c42"
  },
  {
    "url": "skills/docker.html",
    "revision": "4125b9ac14adf239e2c60b51ba11afec"
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
    "revision": "27881a4fabac8073bef2e60d46e796b9"
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
    "revision": "fc4b0b2f47746b3b9b6d938db65d9788"
  },
  {
    "url": "skills/index.html",
    "revision": "a9f281e179ce812dac6d24eb8dd51ad2"
  },
  {
    "url": "skills/promise.html",
    "revision": "7af85de5bdcc57ae5bd0010a6c5a57e4"
  },
  {
    "url": "skills/rxjs初探.html",
    "revision": "637cac18e03c6112341a9a300beee4bb"
  },
  {
    "url": "skills/webpack学习.html",
    "revision": "2f8df9424736170ce5e9bd9f38f8d57b"
  },
  {
    "url": "skills/webpack模块实现.html",
    "revision": "2eef19fb8e57025f03b44a591c7e5707"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "90ac5579c8fd1f3003d8bf4b5585cfee"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "6cb5af10f7da43ac14b042f35040fd64"
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
