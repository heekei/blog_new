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
    "revision": "62d6fb5077579b88e176f016ea2e3aef"
  },
  {
    "url": "algorithm/index.html",
    "revision": "edfb00dd5de91683c6f40bfaea842a4c"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "25d777d732e0dbc452bac5940e4032df"
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
    "url": "assets/js/11.5ee14d57.js",
    "revision": "6a8834aa31ff17a93e228d8e4ddf8ced"
  },
  {
    "url": "assets/js/12.c57fcbc9.js",
    "revision": "1501382c9d568d645ab802a7a1317d71"
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
    "url": "assets/js/16.4554b189.js",
    "revision": "115ff55522aa9d958c4f8debc56b64f4"
  },
  {
    "url": "assets/js/17.587ff56f.js",
    "revision": "30db6ad0504a742a260d9d4db8c323f8"
  },
  {
    "url": "assets/js/18.26fa3281.js",
    "revision": "ad039b098433b865546c06b61f75025b"
  },
  {
    "url": "assets/js/19.e047481b.js",
    "revision": "d04fa9c74ae57a7b5bd0ceafb1624cda"
  },
  {
    "url": "assets/js/2.43a1965f.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.6f5e65a7.js",
    "revision": "6e3ab39315555fee3bf14e5ccd7508ed"
  },
  {
    "url": "assets/js/21.c18503cc.js",
    "revision": "51e8c6c078b74549bb67713b86bcbe46"
  },
  {
    "url": "assets/js/22.f8d9ad19.js",
    "revision": "295e22bb15c7677a724a62374928d6e6"
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
    "url": "assets/js/7.8b8eee0e.js",
    "revision": "f38d42f990b76d1a69145b8eab2471bf"
  },
  {
    "url": "assets/js/8.84611788.js",
    "revision": "f43402572b5d122c425eed4a175be7fb"
  },
  {
    "url": "assets/js/9.c119becf.js",
    "revision": "cf9d3ca5720ce611aeed6e2d8ea01c54"
  },
  {
    "url": "assets/js/app.d6f9afcd.js",
    "revision": "e99be282af1ab5811d05a2f35c8c57e3"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "7911f40c67f515f6d6b28256adcb8af0"
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
    "revision": "f8bacf9dc728f14a3d532d790f86d7e7"
  },
  {
    "url": "life/index.html",
    "revision": "0caf01842957ec6b650f913b3303ac69"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "skills/babel总结.html",
    "revision": "b42560a483d01658aa75b7a963b3faf6"
  },
  {
    "url": "skills/base64.html",
    "revision": "09e3fe021c7315f45e6b167a23fc3019"
  },
  {
    "url": "skills/docker.html",
    "revision": "93c19cdde719461dcbeaf21d5b2093d6"
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
    "revision": "5b8b8d2d6aefba914eaa7098a47c4c11"
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
    "revision": "30fd08117c041c3dab1023e83cfd0a9a"
  },
  {
    "url": "skills/index.html",
    "revision": "3eda0a524b2c40ee534391a8f3c9ce61"
  },
  {
    "url": "skills/promise.html",
    "revision": "f3e9525473a4a9659e9533606f7d9747"
  },
  {
    "url": "skills/rxjs初探.html",
    "revision": "972d32c42aeba787460eab3a5a19aa3e"
  },
  {
    "url": "skills/Set和Map总结.html",
    "revision": "8254b595b28bd1a752e38440fa7e79c9"
  },
  {
    "url": "skills/webpack学习.html",
    "revision": "353718370ca15c05affcbe370260bb79"
  },
  {
    "url": "skills/webpack模块实现.html",
    "revision": "c21ff48c98698d5427e6e67ab17d92a7"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "f54d8d2bb8837b05601535c2420a7c20"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "65ec5fde1cc068735642a80b8862bb68"
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
