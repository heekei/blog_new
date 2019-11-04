## Babel 知识点总结

---

### Babel 的几个模块

1.  #### babel-core

    仅仅用作语法转化成 ast 的一个包

2.  #### babel-cli

    包含了 babel-node 以及 babel-external-helps:

    - babel-node

      babel-cli 下面的一个 command，主要是实现了 node 执行脚本和命令行写代码的能力。

      ```
      node_modules/.bin/babel-node --presets react test.js
      ```

      --presets react 是参数，等同于

      ```js
      { "presets": ["react"] } //需要安装babel-preset-react
      ```

    - babel-node 又包含了 babel-register 实时编译模块

      ```
      npm install babel-register --save-dev
      ```

      babel-node 可以通过它编译代码，可以了解到，它其实就是一个编译器。我们同样可以在代码中引入它 require('babel-register')，并通过 node 执行我们的代码。

      它的原理是通过改写 node 本身的 require，添加钩子，然后在 require 其他模块的时候，就会触发 babel 编译。也就是你引入 require('babel-register')的文件代码，是不会被编译的。只有通过 require 引入的其他代码才会。我们是不是可以理解，babel-node 就是在内存中写入一个临时文件，在顶部引入 babel-register，然后再引入我们的脚本或者代码？

      举个栗子，还是 node 中执行 jsx，要通过 babel 编译。我们可以把 jsx 的代码 a.js 编译完输出到一个 b.js，然后 node b.js 也是可以执行的。但是太麻烦，不利于开发。让我们看一下通过 register 怎么用

      ```js
      // register.js 引入 babel-register，并配置。然后引入要执行代码的入口文件

      require('babel-register')({ presets: ['react'] })
      require('./test')
      // test.js 这个文件是 jsx...
      const React = require('react')
      const elements = [1, 2, 3].map(item => {
        return <div>{item}</div>
      })
      console.log(elements)
      ```

      ```
      node register.js  // 执行
      ```

    - babel-external-helps

      主要用来生成一段代码，包含 babel 所有的 helper 辅助函数, 如果使用了 transform-runtime 模块,就不需要该  单独生成该 helps 了

      生成方法:

      > 1. 执行 babel-external-helpers 生成 helpers.js 文件，

      ```
        node_modules/.bin/babel-external-helpers > helpers.js
        注意：示例代码的包都是装到项目中的，也就是本地。同样你可以全局安装直接执行。
      ```

      > 2.  安装 plugin

      ```
        npm install --save-dev babel-plugin-external-helpers
      ```

      > 3. 然后在 babel 的配置文件加入

      ```

        {
        "plugins": ["external-helpers"]
        }
      ```

      > 4. 入口文件引入 helpers.js

      ```js
      require('./helpers.js')
      ```

3.  #### babel-runtime

    babel-runtime 中主要包括,注意使用中需要引入到 dependencis 中:

    > 核心库 core（主要的语法  转换实现）

    > 辅助函数 helps（调用中间转换的辅助函数）

    > regenerate（实现了 generator/yeild， async/await）

    使用方式:

    ```js
    {
        "plugins": [
            ["transform-runtime", {
            "helpers": true,
            "polyfill": true,
            "regenerator": true,
            "moduleName": "babel-runtime"
            }]
        ]
    }
    ```

4.  #### transform-runtime 和 babel-polyfill 对比

    babel-polyfill 是为了模拟一个完整的 ES2015 +环境，旨在用于应用程序而不是库/工具。并且使用 babel-node 时，这个 polyfill 会自动加载（这个我们在介绍 babel-node 的最后已经说了

    > babel-polyfill 使用场景 建议开发大型 web 应用的时候考虑, 需要手动引入 helps

    transform-runtime 是利用 plugin 自动识别并替换代码中的新特性，你不需要再引入，只需要装好 babel-runtime 和 配好 plugin 就可以了。好处是按需替换，检测到你需要哪个，就引入哪个 polyfill，如果只用了一部分，打包完的文件体积对比 babel-polyfill 会小很多。而且 transform-runtime 不会污染原生的对象,但是缺失了 es6+ 一些实例方法,比如 数组的 includes, filter, fill

    > transform-runtime 使用场景 建议开发工具或者库的时候考虑,不需要手动引入 helps

5.  #### presets

    presets 就是 plugins 的组合，你也可以理解为是套餐

    现在主流的几个 presets 为 babel-presets-env

    而 babel-presets-env 主要是基本语法的转化,并不包含任何 polyfill

    可以看做是 babel-core

    ```js
        { "presets": ["latest"] } === { "presets": ["env"] }
    ```

6.  #### babel 模块总结

    ![avatar](/blog/babel.jpg)

---

### Babel presets 和 plugin 的结合使用

1.  现在  主要分为 env+polyfill+useBuiltIns+helps 和 env+transform-runtime 两套方案

    配置分别为:

    ```js
    {
      "presets": [
        [
          "env",
          {
            "targets": { // 配支持的环境
              "browsers": [ // 浏览器
                "last 2 versions",
                "safari >= 7"
              ],
              "node": "current"
            },
            "modules": true,  //设置ES6 模块转译的模块格式 默认是 commonjs
            "debug": true, // debug，编译的时候 console
            "useBuiltIns": 'useage|entry', // 是否开启自动支持 polyfill
            "include": [], // 总是启用哪些 plugins
            "exclude": []  // 强制不启用哪些 plugins，用来防止某些插件被启用
          }
        ]
      ],
      plugin:['external-helps']
    }

    // 需要安装开发时的依赖 babel-extenal-helps 然后生成helps
    // 还需在入口文件引入 require('babel-polyfill')
    // 还需在入口文件引入生成的helps  require('./helps')
    ```

    ```js
    // 需要安装开发依赖babel-plugin-transform-runtime   (babel7使用@babel/plugin-transform-runtime)。
    // 同时还需要安装生产环境的依赖 babel-runtime  (babel7使用@babel/runtime)
    {
      "presets": [
        "env"
      ],
      "plugins": [
        ["transform-runtime", {
          "helpers": true,
          "polyfill": true,
          "regenerator": true,
          "moduleName": "babel-runtime"
        }]
      ]
    }
    ```

    ```js
      //babel7
      {
        "plugins": [
          [  // 作用:
             // 1. 避免多次混入重复的helps代码
             // 2. 另一个目的是为您的代码创建沙盒环境,不污染全局变量
              "@babel/plugin-transform-runtime",
              {
                  "corejs": false, // 默认值，可以不写
                  "helpers": true, // 默认，可以不写
                  "regenerator": false, // 通过 preset-env 已经使用了全局的 regeneratorRuntime, 不再需要 transform-runtime 提供的 不污染全局的 regeneratorRuntime
                  "useESModules": true, // 使用 es modules helpers, 减少 commonJS 语法代码
              }
          ]
        ],
        presets: [
          [
              "@babel/preset-env",
              {
                  "modules": false, // 模块使用 es modules ，不使用 commonJS 规范
                  "useBuiltIns": 'usage', // 默认 false, 可选 entry , usage
              }
          ]
        ]
      }

    ```

2.  plugins/presets 排序

    也许你会问，或者你没注意到，我帮你问了，plugins 和 presets 编译，也许会有相同的功能，或者有联系的功能，按照怎么的顺序进行编译？答案是会按照一定的顺序。

    具体而言，plugins 优先于 presets 进行编译。

    plugins 按照数组的 index 增序(从数组第一个到最后一个)进行编译。

    presets 按照数组的 index 倒序(从数组最后一个到第一个)进行编译。

---

### Babel/runtime 和 balbel/plugin-transform-runtime 和 babel-polyfill 的区别

1. babel-polyfill

   提供完整的 es6 环境

2. @babel/runtime

   包含了 helps 辅助工具函数以及除了实例方法的 polyfill,不污染全局,
   balbel/plugin-transform-runtime 需要用到这个包来进行转换

   #### 注意: 这个包一般需要安装在运行时的依赖中

3. @balbel/plugin-transform-runtime

   一个插件。 babel 编译后的代码是包含了多个重复的帮助函数(helps 代码)
   而该插件就是将这些重复的代码通过引入公共的 helps 来解决的(从 babel/runtime 中引入)

4. 区别总结:

   这个只针对 Node.js 的项目使用 babel 来编译的情况，如果是写前端项目（用 webpack 打包）的话，就可以无视这个问题了。

   因为 babel 编译 es6 到 es5 的过程中，babel-plugin-transform-runtime 这个插件会自动 polyfill es5 不支持的特性，这些 polyfill 包就是在 babel-runtime 这个包里，所以 babel-runtime 需要安装在 dependency 而不是 devDependency。

   dependency 和 devDependency 应该能明白吧。假如一个用户 npm install 了你发布在 npm 上的一个包，他只会安装这个包的 dependency 依赖，devDependency 是不会安装的，那么此时假如 babel-runtime 是安装在 devDependency 的话，有些 polyfill 就会找不到了。

5. 最新更新

   2019 年 3 月 babel 官方更新了@babel/runtime-corejs3,已经支持了实例方法的转换,而不污染全局对象,现在完美的配置如下(可用于库以及 web 应用开发):

   @babel/preset-env 就是**预设**,也就是插件的集合(比如包括@babel/plugin-transform-classes,@babel/plugin-transform-arrows 等等),以方便用户不用一个一个的写入

   @babel/preset-env 包括了整个 es6 的插件集合, 不开启 useBuiltIns 将会通过 core-js 来引入转换函数, 也将不污染全局对象等

   如果开启 useBuiltIns, 那么值为 entry 需要手动引入@babel/polyfill(根据 .browselist 来加入全局垫片),如果值为 usage,那么不需要引入@babel/polyfill,需要开启 corejs 为 2 或者 3(根据 .browselist 以及按需引入垫片)

   @babel/plugin-transform-runtime 的作用仅仅是配合@babel/runtime-corejs3 来解决引入多次 helps 函数的问题

   @babel/presets-env 开启 corejs:3 选项, 能够自动转换代码但是不能解决引入多个 helps 的问题

   ```js
   module.exports = {
     presets: [
       [
         '@babel/preset-env',
         {
           modules: false, //默认 可省略
           useBuiltIns: false, //默认 可省略
           targets: 'ie >= 8', // 可省略 不写该字段将以.browselist为准
           corejs: false,
         },
       ],
     ],
     plugins: [
       [
         '@babel/plugin-transform-runtime',
         {
           corejs: 3,
           useESModules: true,
         },
       ],
     ],
   }
   ```

6. @babel/runtime @babel/runtime-corejs2 以及@babel/runtime-corejs3 的区别

   这三个包都是一个系列的包,后两者可以视为是前者的升级版

   @babel/runtime 只包含了基本的语法转换 polyfill;

   @babel/runtime-corejs2 更新了一些功能增加了 api 的支持,但是没支持实例方法的转换

   @babel/runtime-corejs3 完善了之前的实例方法的支持,是包含了完整的 polyfill 不污染全局,一般必须加上@babel/preset-env 才能自动引入该包中的 polyfill 到代码中,否则不能自动转换

7. [附录][参考链接](https://www.babeljs.cn/docs/babel-plugin-transform-runtime#polyfill)

---

### [Npm-scope](https://docs.npmjs.com/misc/scope)

npm-scope 的作用:

    1. 相关包分组在一起,体现在node_modules出现在一个文件夹里
    2. 使用@开头的scope(范围包),后续都只能由该账号发布这个系列的范围包
    3. 一般用于区分社区的包还是官方的包
