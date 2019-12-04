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
    "revision": "de4dfac291b21da5db5307cf8b5f84b7"
  },
  {
    "url": "assets/css/0.styles.741ccdbb.css",
    "revision": "b4afa274e00903f246a27658ec698a0e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1aa7e09a.js",
    "revision": "9b9c1eff6dcea64306eb5ea5a642c67b"
  },
  {
    "url": "assets/js/11.e74b4dbd.js",
    "revision": "0ba208b49d075a62108f4ffb0fddf6c8"
  },
  {
    "url": "assets/js/12.99f5c39a.js",
    "revision": "a3906ff94c9086ee7617ac9fb8b61d4f"
  },
  {
    "url": "assets/js/13.a4bfb382.js",
    "revision": "5f21d0b5b8db36ee86d693f77a0a0ea6"
  },
  {
    "url": "assets/js/14.cb984dc4.js",
    "revision": "e75ce6ad2f59b5ffbbe66f1a2cda229a"
  },
  {
    "url": "assets/js/15.a563f6b9.js",
    "revision": "3e5401464def0c33259e15546bc0c4f6"
  },
  {
    "url": "assets/js/16.95ba493c.js",
    "revision": "90b301c9709e7e1b0e101bfbd8588ac3"
  },
  {
    "url": "assets/js/17.f5200935.js",
    "revision": "2b1543abb01c5d8fb0ef2a4ed5802706"
  },
  {
    "url": "assets/js/18.183ccd21.js",
    "revision": "c2e1cb075df4b33f0b40877c7585e6b0"
  },
  {
    "url": "assets/js/19.951538c3.js",
    "revision": "512627be7c6198f2c383c7df416093ac"
  },
  {
    "url": "assets/js/2.8d813f31.js",
    "revision": "d0379555a9601dd376db10144a5c2953"
  },
  {
    "url": "assets/js/20.2f733aec.js",
    "revision": "47464317c3da855ccbb6f629f23c598f"
  },
  {
    "url": "assets/js/21.b1c5bf43.js",
    "revision": "f73c0a9c1f1996b7eb29ea48f8621684"
  },
  {
    "url": "assets/js/22.8f893608.js",
    "revision": "d21116a971b43c55345e452ab31cf978"
  },
  {
    "url": "assets/js/23.344fbecb.js",
    "revision": "45f10cf9a984f9f6e3c7e95c9268524f"
  },
  {
    "url": "assets/js/24.969182d1.js",
    "revision": "531a5f74c389ec7b4ce1f827dd3367d1"
  },
  {
    "url": "assets/js/25.99ebbe3c.js",
    "revision": "42016db82fee8057f1e349c47aeed61c"
  },
  {
    "url": "assets/js/26.6303ed10.js",
    "revision": "d05f11cede582164fb87694a31ebf42a"
  },
  {
    "url": "assets/js/27.09297365.js",
    "revision": "64ad2c139ee022f3033257fc0add90d7"
  },
  {
    "url": "assets/js/28.f0593523.js",
    "revision": "dea78954a34d99f5c82bc36b6e0b52fc"
  },
  {
    "url": "assets/js/29.b715bff7.js",
    "revision": "65e2f7bf5f62546641c36774e3ec2ad5"
  },
  {
    "url": "assets/js/3.d3c7005e.js",
    "revision": "e6f0e52741110fa7b32a7dc07003d33d"
  },
  {
    "url": "assets/js/30.a3d986be.js",
    "revision": "4ca183b312c1f502e4601932e9488f9c"
  },
  {
    "url": "assets/js/31.344d88f4.js",
    "revision": "93277c84d0f10bf6196bfce42f912dce"
  },
  {
    "url": "assets/js/32.96d9fd99.js",
    "revision": "708563e94156120e7bb2205fad4d38fb"
  },
  {
    "url": "assets/js/33.bccc8c17.js",
    "revision": "7b2d18ac297f091a54a61566d2260f93"
  },
  {
    "url": "assets/js/34.ad456743.js",
    "revision": "bbbf8935a34f4e2f94a56e60495de871"
  },
  {
    "url": "assets/js/35.4768131f.js",
    "revision": "78f94962a8a7c51fd5cb49a793f3e0cb"
  },
  {
    "url": "assets/js/36.d02fe6c3.js",
    "revision": "a8928e8a66359f11bd0cd54a2603617c"
  },
  {
    "url": "assets/js/37.8e6c5cf0.js",
    "revision": "f7cdb55cc43b502163c4be3db5021ca9"
  },
  {
    "url": "assets/js/38.e6197db4.js",
    "revision": "d821011f35c8dc3844d947ff6b57d14f"
  },
  {
    "url": "assets/js/39.189520b1.js",
    "revision": "3b99d7fe17c33080c2145fbe93a66812"
  },
  {
    "url": "assets/js/4.416f4576.js",
    "revision": "39c222c83b34c15d39729bde7ce0882d"
  },
  {
    "url": "assets/js/40.cc7a24d5.js",
    "revision": "b02e695d8f2d512585873d16d6272b2e"
  },
  {
    "url": "assets/js/41.6b3919e6.js",
    "revision": "10707b2c088924f161a358ce5d47e55c"
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
    "url": "assets/js/7.978b5e81.js",
    "revision": "99ed14b213797bd858148f3c2f7a9786"
  },
  {
    "url": "assets/js/8.ea646645.js",
    "revision": "64d66778bb0845ef724024d1f2103688"
  },
  {
    "url": "assets/js/9.34436425.js",
    "revision": "6987a3b926ca84368be163165588671d"
  },
  {
    "url": "assets/js/app.1a2380a8.js",
    "revision": "e88c870687e8c3eec839b5f2dce3fae5"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "4725b5e2bc20ed59792e8735d5b6c738"
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
    "revision": "49604f187ad5d1ed7ac6052e7817b366"
  },
  {
    "url": "life/index.html",
    "revision": "c87564a0444466cde3a5060f22eab19d"
  },
  {
    "url": "technology/babel.jpg",
    "revision": "718c308466a5289a0fd542b9215a3712"
  },
  {
    "url": "technology/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "technology/CSharp/asp-net-自定义服务器控件的使用.html",
    "revision": "4b3bc291976137c231a2dee7eaacea5c"
  },
  {
    "url": "technology/CSharp/vs2010-打开-vs2012-的解决方案.html",
    "revision": "d41b4436ebdd5c48b70757413588a055"
  },
  {
    "url": "technology/CSharp/wpf-透明自定义窗口.html",
    "revision": "e74ca5cdb57d4a45431d74d2c57f019f"
  },
  {
    "url": "technology/Css/css中一些有趣的东西-不定时更新.html",
    "revision": "e9685393f08098473c5c1157e2ce6322"
  },
  {
    "url": "technology/event-loop-1.gif",
    "revision": "2d2f74f2d43ac5283f0328ba9288721b"
  },
  {
    "url": "technology/event-loop-2.jpg",
    "revision": "8213a271b7328eaa07252ded309d9e4c"
  },
  {
    "url": "technology/event-loop-3.jpg",
    "revision": "3872fc560971831a2fd24597d6b59313"
  },
  {
    "url": "technology/event-loop-4.jpg",
    "revision": "5a1bdc0ce131e37ab3d5ae7f14bb1ad4"
  },
  {
    "url": "technology/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "technology/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "technology/HTML5/uc-qq-safari私有meta.html",
    "revision": "07dbea2d04f321fa3fc3a6d88c61f020"
  },
  {
    "url": "technology/index.html",
    "revision": "242c1d56fc9e3520ab66b07c5a38731a"
  },
  {
    "url": "technology/Javascript/call bind apply实现.html",
    "revision": "e452f6b6ab6ef2f42e839bca0a5234a7"
  },
  {
    "url": "technology/Javascript/Event-loop.html",
    "revision": "f58e91c403796cfe6e174ba04d118237"
  },
  {
    "url": "technology/Javascript/JS数组操作基础.html",
    "revision": "dd2018f3907a454e46b84a25121e407d"
  },
  {
    "url": "technology/Javascript/onmousemove事件遇到iframe.html",
    "revision": "d19ea0c564b292c427667844a1af060f"
  },
  {
    "url": "technology/Javascript/Promise.html",
    "revision": "6dc864b8a12977c7e89cedc49b99e9ab"
  },
  {
    "url": "technology/Javascript/requirejs实现.html",
    "revision": "955519f7e47800e29c92284289dc2229"
  },
  {
    "url": "technology/Javascript/Set和Map总结.html",
    "revision": "f7b7af5df5fc592c15f93cfdbb45b4ee"
  },
  {
    "url": "technology/Javascript/并行加载与顺序执行.html",
    "revision": "d013912851780aa6752ab591a381106a"
  },
  {
    "url": "technology/Linux相关/apache-配置虚拟主机及开启ssl.html",
    "revision": "c691a5f591faa6acaa7cf2cfecbe80e8"
  },
  {
    "url": "technology/Linux相关/Centos-Firewall-启用端口.html",
    "revision": "958d47808de760202b7853ea2f9e148f"
  },
  {
    "url": "technology/Linux相关/Docker.html",
    "revision": "4e2c4ce511f5c7334792b2f7a704d22b"
  },
  {
    "url": "technology/Node.js/pkg打包.html",
    "revision": "a276223eab9ff64fd2806eff37f1adb1"
  },
  {
    "url": "technology/Node.js/说一说gulp.html",
    "revision": "674b2e52c8bef3fbf038853147ffc3e4"
  },
  {
    "url": "technology/技术进阶/Babel总结.html",
    "revision": "5baca3364859d45ea13203dbf96dbc4d"
  },
  {
    "url": "technology/技术进阶/Base64.html",
    "revision": "016d1c8690d4fbb01c73e3648a97b08a"
  },
  {
    "url": "technology/技术进阶/Content-Type和Accept的关系.html",
    "revision": "33de9e8c106347e805614dbedec13d98"
  },
  {
    "url": "technology/技术进阶/Git中~和^的区别.html",
    "revision": "d5f4827b2a7591b049f8cde3eb2c2e65"
  },
  {
    "url": "technology/技术进阶/Rxjs初探.html",
    "revision": "dcbf198653993391a10aec39184c7027"
  },
  {
    "url": "technology/技术进阶/Webpack入门知识.html",
    "revision": "4b89a9036c8e6b9857cafd244dcd1ac1"
  },
  {
    "url": "technology/技术进阶/Webpack模块加载.html",
    "revision": "f542991b9e06086a746e6b4730bee40e"
  },
  {
    "url": "technology/技术进阶/Web性能请求优化.html",
    "revision": "a20a6e30552f45f7008c383be5fa0d88"
  },
  {
    "url": "technology/技术进阶/前端安全防范.html",
    "revision": "b157ecb01318706c39ba75c26c200b77"
  },
  {
    "url": "technology/技术进阶/服务器推送.html",
    "revision": "fb40cbe9b90971469f2a3e8e16e4a948"
  },
  {
    "url": "technology/技术进阶/浏览器缓存.html",
    "revision": "dc870216e06ee6930540d65e60a92b26"
  },
  {
    "url": "technology/技术进阶/简易打包工具实现.html",
    "revision": "9776edd3e554f422b9a53873b27b15b5"
  },
  {
    "url": "technology/算法/基础算法/递归算法.html",
    "revision": "111182d3e2114ac9f08b03309fed3b03"
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
