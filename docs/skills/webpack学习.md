## webpack 学习总结

---

1.  ### 关于 module、chunk 以及 bundle 之间的区别

    > module: 模块就是模块可以是 es 模块也可以是 commonJS 或者 AMD 模块

    > chunk: 打包过程中被操作的模块文件叫做 chunk,例如异步加载一个模块就是一个 chunk

    > bundle: bundle 是最后打包后的文件,最终文件可以和 chunk 长的一模一样,但是大部分情况下他是多个 chunk 的集合

    ***

    另外的理解(摘至网络):

    - module：

      就是 js 的模块化 webpack 支持 commonJS、ES6 等模块化规范，简单来说就是你通过 import 语句引入的代码。

    - chunk:

      chunk 是 webpack 根据功能拆分出来的，包含三种情况：

      1、你的项目入口（entry）

      2、通过 import()动态引入的代码

      3、通过 splitChunks 拆分出来的代码

      chunk 包含着 module，可能是一对多也可能是一对一。

    - bundle：

      bundle 是 webpack 打包之后的各个文件，一般就是和 chunk 是一对一的关系，bundle 就是对 chunk 进行编译压缩打包等处理之后的产出。

---

2. ### webpack 打包一个库的[配置方法](https://github.com/webpack/webpack/tree/master/examples/multi-part-library)

   ```js
   var path = require('path');
   module.exports = {
     // mode: "development || "production",
     entry: {
       alpha: './alpha',
       beta: './beta',
     },
     output: {
       path: path.join(__dirname, 'dist'),
       filename: 'MyLibrary.[name].js',
       // 征对多页面,可以配置为数组,MyLibrary作为整体的命名空间,[name]作为该空间的属性调用
       // 示例地址:
       //https://github.com/webpack/webpack/tree/master/examples/multi-part-library
       library: ['MyLibrary', '[name]'],
       libraryTarget: 'umd',
     },
   };
   ```

---

3. ### webpack 入口的配置方式

   ```js
   // 对象式
   {
     entry:{
       app:'./file.js',
       vendor: './file1.js', //多页面
       normal: ['jquery','lodash'], //两个chunk打包到一个bundle
       'js/home': './files2.js' // 会生成到js/home文件夹下
     }
   }
   // 字符串式
   {
     entry:'app' // 等同于 entry:{ main:'app.js' }
   }
   ```

   ***

4. ### 关于 npm3 下 peerDependency

   #### 例子:

   > 假如 项目 project-main 依赖的 package-a(dependency) 的 package.json 中声明了 peerDependency 是 package-apeer@^1.0.0，而 project-main 中没有任何 package-apeer 的配置，此时在 project-main 下使用 npm3 执行 npm install，控制台就会告警 UNMET PEER DEPENDENCY package-apeer@^1.0.0，意思就是说使用到 package-a 的项目必须安装同时安装 package-apeer@^1.0.0 ，否则程序就可能会有异常，而在 npm@1 和 npm@2 下，就不会报错而是自动把 package-apeer@^1.0.0 安装上，因为很多用户反应这样很困惑，我没声明这个包，你为什么要给我安装呢？所以在 npm@3 中这个 peerDependencies 如果没装就变成了控制台告警。

   #### npm3 的官方文档  中  记录到:

   > 通常是在插件开发的场景下，你的插件需要某些依赖的支持，但是你又没必要去安装，因为插件的宿主会去安装这些依赖，你就可以用 peerDependencies 去声明一下需要依赖的插件和版本，如果出问题 npm 就会有警告来提醒使用者去解决版本冲突问题。

   ***

5. ### html-webpack-plugin 疑惑选项

- #### chunks

  > chunks 选项的作用主要是针对多入口(entry)文件。当你有多个入口文件的时候，对应就会生成多个编译后的 js 文件。那么 chunks 选项就可以决定是否都使用这些生成的 js 文件。

  > chunks 默认会在生成的 html 文件中引用所有的 js 文件，当然你也可以指定引入哪些特定的文件。

  > 看一个小例子。

  ```js
    // webpack.config.js
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
        index1: path.resolve(__dirname, './src/index1.js'),
        index2: path.resolve(__dirname, './src/index2.js')
    }
    ...
    plugins: [
        new HtmlWebpackPlugin({
            ...
            chunks: ['index','index2']
        })
    ]
  ```

  执行 webpack 命令之后，你会看到生成的 index.html 文件中，只引用了 index.js 和 index2.js, 而如果没有指定 chunks 选项，默认会全部引用。

  ```html
    ...
    <script type=text/javascript src=index.js></script>
    <script type=text/javascript src=index2.js></script>
  ```

- #### excludeChunks

  弄懂了 chunks 之后，excludeChunks 选项也就好理解了，跟 chunks 是相反的，排除掉某些 js 文件。 比如上面的例子，其实等价于下面这一行

  ```js
    ...
    excludeChunks: ['index1.js']
  ```

  ***

6. ### loaders 配置项 use 和 loader 的区别

   [参考链接-webpack1 升级 webpack2](https://webpack.docschina.org/migrate/3/)

   webpack1 是使用 loader 选项,而 webpack2 以上的版本都建议直接使用 use 选项,具体的更新如下:

   - 外层 loaders 改为 rules
   - 内层 loader 改为 use,也可以用 loader
   - 所有插件必须加上 -loader，不再允许缩写
   - 不再支持使用!连接插件，改为数组形式
   - json-loader 模块移除，不再需要手动添加，webpack2 会自动处理

   #webpack1

   ```js
   module: {
     loaders: [
       {
         test: /\.(less|css)$/,
         loader: 'style!css!less!postcss',
       },
       {
         test: /\.json$/,
         loader: 'json',
       },
     ];
   }
   ```

   #Webpack2

   ```js
   module: {
     rules: [
       {
         test: /\.(less|css)$/,
         use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
       },
     ];
   }
   ```

   #使用示例:

   ```js
   module: {
     rules: [
       {
         test: /\.jsx$/,
         loader: "babel-loader", // Do not use "use" here
         options: {
           // ...
         }
       },
       {
         test: /\.less$/,
         // 可以配置成字符串
         loader: "style-loader!css-loader!less-loader"
         // 也可以配置成数组,并通过queryString来设定选项(传参给loader)
         use: ["style-loader", "css-loader?minimize", "less-loader"],
         // 使用options来设定选项
         use: [
           {
             loader: "css-loader",
             options: {
                 minimize:true
             }
           }
         ]
       }
     ];
   }
   ```

   #补充:

   正如 Webpack 2 迁移教程所述，两者之间的区别在于，如果我们想要一个加载器数组，我们必须使用 use，如果它只是一个加载器，那么我们必须使用 loader：

   ````js
   module: {
     rules: [
         {
           test: /\.jsx$/,
           loader: "babel-loader", // Do not use "use" here
           options: {
             // ...
           }
         },
         {
           test: /\.less$/,
           loader: "style-loader!css-loader!less-loader"
           use: [
             "style-loader",
             "css-loader",
             "less-loader"
           ]
         }
       ]
     }
     ```
   ````

   loader 也可以使用 import 或者 require 直接指定:

   ```js
   require('style-loader!css-loader?minimize!./main.css');
   import Styles from 'style-loader!css-loader?modules!./styles.css';
   // 选项可以传递查询参数，例如 ?key=value&foo=bar，或者一个 JSON 对象，例如 ?{"key":"value","foo":"bar"}
   ```

   > 总结: loader 的几种用法:

   ```js
     1. use:['xxx-loader','xxx-loader']

     2. loader:['style-loader','css-loader']

     3. use:[
        {loader:'style-loader'},
        {loader:'css-loader'}
       ]
   ```

   ***

7. ### 常用 loaders 作用的归纳

- #### css-loader

  > css-laoder 是解释 @import 'a.css' 和 @import url(a.css)等引入的.css 文件, 将其加载到 js 文件中,便于 webpack 的其他 loader 处理

* #### style-loader

  > style-loaders 用于处理将所有的样式文件插入到`<style></style>`中

* #### url-loader

  > url-loader 是用于处理文件(css/js)中的中引用的资源. 例如图片引入, 小图片转换成 base64...

* #### postcss-loader

  > postcss-loader 的 autoprefixer 实现将 css3 属性添加上厂商前缀

  ---

8. ### 关于 husky 和 yorkie [# 原文地址](https://segmentfault.com/a/1190000016750078)

   > #### [git 钩子介绍](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)
   >
   > 客户端钩子包括：pre-commit、prepare-commit-msg、commit-msg、post-commit 等，主要用于控制客户端 git 的提交工作流。服务端钩子：pre-receive、post-receive、update，主要在服务端接收提交对象时、推送到服务器之前调用

   > #### [关于 husky](https://github.com/typicode/husky)
   >
   > husky 可以让 git hooks 的使用变得更简单方便。运行 npm install husky@next --save-dev 安装最新版本，它会在我们项目根目录下面的.git/hooks 文件夹下面创建 pre-commit、pre-push 等 hooks。这些 hooks 可以让我们直接在 package.json 的 script 里运行我们想要在某个 hook 阶段执行的命令

   > **使用 husky 要注意，对应属性名已经改为 HUSKY_GIT_PARAMS , 而不是原始的 GIT_PARAMS 环境变量**

   ```js
   {
      "husky": {
        "hooks": {
          "pre-commit": "lint-staged"
        }
      },
      "lint-staged": {
        "*.js": ["eslint --fix", "git add"]
      }
   }
   ```

   > #### [关于 youkie](https://github.com/yyx990803/yorkie)
   >
   > 在 vue 最新的版本中，已经使用尤大改写的 youkie， youkie 实际是 fork husky,然后做了一些定制化的改动， 使得钩子能从 package.json 的 "gitHooks"属性中读取

   ```js
   {
    "gitHooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "node scripts/verify-commit-msg.js" //t比提交信息检查 [连接](https://github.com/vuejs/vue/blob/dev/scripts/verify-commit-msg.js)
    }
    "lint-staged": {
      "*.js": [
        "eslint --fix",
        "git add"
      ]
    }
   }
   ```

   > #### [关于 lint-staged](https://github.com/okonet/lint-staged)
   >
   > 只 lint 当前改动的文件，lint-staged 就非常准确的解决了这一问题，从这个包名，就可以看出，Run linters on git staged files，只针对改动的文件进行处理

   ***

9. ### webpack 常用的 plugins 总结

- DllPlugin & DllReferencePlugin (动态链接库插件)

  dll 插件一般只应用于开发环境,正式环境中不建议这么做

  ```js
  {
    plugins: [
      // 接入 DllPlugin
      new webpack.DllPlugin({
        // 动态链接库的全局变量名称，需要和 output.library 中保持一致
        // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
        name: '[name]_dll_[hash]',
        // 描述动态链接库的 manifest.json 文件输出时的文件名称
        path: path.join(__dirname, 'dist/dll', '[name].manifest.json'),
      }),
    ];
  }
  ```

  ```js
  plugins: [
    // 接入 DllPlugin
    new DllReferencePlugin({
      context: __dirname,
      // 描述 react 动态链接库的文件内容
      manifest: require('./dist/react.manifest.json'),
    }),
  ];
  ```

- webpack-bundle-analyzer (性能分析插件)

* WebpackMd5Hash

  注意: webpack-md5-hash 有相关问题请[查看](https://sebastianblade.com/using-webpack-to-achieve-long-term-cache/)

  > 使用该插件后,模块与公共代码的映射关系文件(manifest),将不会  随着模块的改动来重新  计算公共代码的 chunkhash

  因此 webpack-md5-hash 并没有解决之前的问题：

      如何生成稳定的模块 ID？

      如何避免频繁的 chunk 内容变动？

  使用 NamedModulesPlugin 来解决

- NamedChunksPlugin

  webpack4.25 以上有两个选项来控制这个插件: namedChunks 和 chunkIds

  这两个插件在更高的版本已经合并为了 chunkIds,详见[链接](https://github.com/webpack/webpack/issues/8354)

  > 固化 runtime 代码 内以及在使用动态加载时分离出的 chunk 的 chunk id

- NamedModulesPlugin(webpack4 开发模式默认值,不需要单独配置了)

  > 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。

  > 开发环境下使用来固化 module id

  > webpack.NamedChunksPlugin 只能对普通的 Webpack 模块起作用，异步模块，external 模块是不会起作用的。

  > **征对上述的问题解决办法:**

  1. 异步模块可以在 import 的时候加上 chunkName 的注释，比如这样：import(/_ webpackChunkName: "lodash" _/ 'lodash').then() 这样就有 Name 了

  2. 所以我们需要再使用一个插件：name-all-modules-plugin
     这个插件中用到一些老的 API，Webpack 4 会发出警告，这个 [pr](https://github.com/timse/name-all-modules-plugin/pull/2/commits/18b460556e625908ca419c1e4798451ab0c5d788) 有新的版本，不过作者不一定会 merge。我们使用的时候可以直接 copy 这个插件的代码到我们的 Webpack 配置里面。


     ```js
      //pr的核心代码
      class NameAllModulesPlugin {
        apply(compiler) {
          compiler.hooks.compilation.tap("NameAllModulesPlugin", compilation => {
            compilation.hooks.beforeModuleIds.tap("NameAllModulesPlugin", modules => {
              for (const module of modules) {
                if (module.id === null) {
                  module.id = module.identifier();
                }
              }
            }
          })
        }
      }
     ```

- HashedModuleIdsPlugin

  > 在生产环境下使用来固化 module id,就是在 namedModulesPlugin 的基础上做了路径的 hash,简化路径值, 减小 chunk 的

- CommonsChunkPlugin(webpack3 中的公共代码提取插件)

  > HashedModuleIdsPlugin: 它是根据模块相对路径生成模块标识，如果模块没有改变，那模块标识也不会改变, 改变 webpack->entry 的顺序也将不改变模块的 ID, 也就不会影响 hash 和 chunkhash 的改变

  ```js
  {
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['react', 'common'], // 用于提取manifest
        minChunks: Infinity, // Infinity不会打包任何多余的代码
      }),
      new webpack.HashedModuleIdsPlugin(),
      new WebpackMd5Hash(),
    ];
  }
  ```

- splitChunks (webpack4)

  > 默认的分包策略:(条件需要全满足)

      -  新的 chunk 是否被共享2次以上或者是来自 node_modules 的模块
      -  新的 chunk 体积在压缩之前是否大于 30kb
      -  按需加载 chunk 的并发请求数量小于等于 5 个
      -  页面初始加载时的并发请求数量小于等于 3 个

  >  默认配置:

  ```js
  module.exports = {
    optimization: {
      // 提取webpack运行时的代码块单独引入到入口文件
      // 而不是直接混入每个chunk,可以减小入口的代码体积
      // 存储着 webpack 对 module 和 chunk 的解析信息
      // 主要作用: 把entry中不相关的 module id 或者说内容摒除在外
      //
      runtimeChunk: true,
      splitChunks: {
        //范围:异步加载的模块中的引入import才进行拆分
        chunks: 'async', // inital(入口) all(所有) async(异步)
        minSize: 30000, // 大于30kb的
        minChunks: 1, // 引用一次就拆分
        maxAsyncRequests: 5, // 异步加载模块最多可以拆分的块数量
        maxInitialRequests: 3, // 一个入口模块最多可以拆分的块数量
        automaticNameDelimiter: '~', // 模块拆分名称的连接符
        // 值为true:webpack会基于代码块和缓存组的key自动选择一个名称
        // 当一个名称匹配到相应的入口名称，这个入口会被移除。
        name: true,
        //命中以下规则将被代码拆分
        cacheGroups: {
          vendors: {
            // node_modules中的模块
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            // default值改为false则关闭这个匹配条件
            minChunks: 2, // 页面引用2次以上的模块
            priority: -20, // 同优先级的规则,以从上到下来匹配
            // 复用已经存在的代码块
            // 需要在精确匹配到对应模块时候才会生效
            reuseExistingChunk: true,
          },
        },
      },
    },
  };
  ```

  > maxInitialRequests: 一个入口模块最多可以拆分的代码块 chunk 数量

        * 规则:

        -  入口文件本身算一个请求
        -  如果入口里面有动态加载得模块这个不算在内
        -  通过 runtimeChunk 拆分出的 runtime 不算在内
        -  只算 js 文件的请求，css 不算在内
        -  如果同时又两个模块满足 cacheGroup 的规则要进行拆分，
          但是  maxInitialRequests 的值只能允许再拆分一个模块，
          那尺寸更大的模块会被拆分出来

  > maxAsyncRequests: 异步按需加载模块最多可拆分的代码块 chunk 数量

        * 规则:

        - import()文件本身算一个请求
        - 并不算 js 以外的公共资源请求比如 css
        - 如果同时又两个模块满足 cacheGroup 的规则要进行拆分，
          但是 maxInitialRequests 的值只能允许再拆分一个模块，
          那尺寸更大的模块会被拆分出来

- ParallelUglifyPlugin(并行插件)

  注意: 该插件已经无人  维护,可以用 terser-webpack-plugin

  这个插件可以帮助有很多入口点的项目加快构建速度。把对 JS 文件的串行压缩变为开启多个子进程并行进行 uglify。

  ```js
  // webpck.config.js

  const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

  plugins: [
    new ParallelUglifyPlugin({
        workerCount: 4,
        uglifyJS: {
            output: {
                beautify: false, // 不需要格式化
                comments: false // 保留注释
            },
            compress: { // 压缩
                warnings: false, // 删除无用代码时不输出警告
                drop_console: true, // 删除console语句
                // 内嵌定义了但是只有用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            }
        }
    });
  ]

  ```

- speed-measure-webpack-plugin

  用来检测 webpack 打包过程中各个部分所花费的时间

- webpack 动态引入资源, 使用 prefetch 和 preload

  ```js
  // webpackChunkName: 打包后的文件名,防止出现1.js,2.js这种
  // webpackPrefetch: 开启prefetch (页面空闲时请求, 优先级中等)
  // webpackPreload: 开启preload (更高的优先级,不阻塞onload事件)

  import(
    /* webpackPrefetch: true */
    /*webpackChunkName: 'topic'*/

    '../topic'
  );
  ```

- ParallelUglifyPlugin(并行多进程压缩 js 文件)

  ```js
  module.exports = {
    plugins: [
      new ParallelUglifyPlugin({
        // 传递给 UglifyJS 的参数
        uglifyJS: {
          output: {
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
          },
          compress: {
            // 在UglifyJs删除没有用到的代码时不输出警告
            warnings: false,
            // 删除所有的 `console` 语句，可以兼容ie浏览器
            drop_console: true,
            // 内嵌定义了但是只用到一次的变量
            collapse_vars: true,
            // 提取出出现多次但是没有定义成变量去引用的静态值
            reduce_vars: true,
          },
        },
      }),
    ],
  };
  ```

- ModuleConcatenationPlugin(开启 scope hosting 支持, 生产模式默认值)

  对于使用 ES6 的代码,分析出模块之间的依赖关系，尽可能的把打散的模块合并到一个函数中去，但前提是不能造成代码冗余。 因此只有那些被引用了一次的模块才能被合并

  ```js
  const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');

  module.exports = {
    resolve: {
      // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
      mainFields: ['jsnext:main', 'browser', 'main'],
    },
    plugins: [
      // 开启 Scope Hoisting
      new ModuleConcatenationPlugin(),
    ],
  };
  ```

- webpack.DefinePlugin(定义环境变量)

  该插件用于替换代码中的部分字段,例如定义了下面代码中的方式,那么在客户端中遇到 process.env.NODE_ENV 就会被替换成后面的值(webpack.DefinePlugin 将替换 process.env.NODE_ENV 为您定义的 development)

  ```js
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"',
    },
  });
  ```

- terser-webpack-plugin

  [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin) 是一个使用 terser 压缩 js 的 webpack 插件

  压缩是发布前处理最耗时间的一个步骤，如果是你是在 webpack 4 中，只要几行代码，即可加速你的构建发布速度

  ```js
  const TerserPlugin = require('terser-webpack-plugin');
  module.exports = {
    optimization: {
      minimizer: [new TerserPlugin(
        parallel: true   // 多线程
      )],
    },
  };
  ```

---

10. ### webpack 常用优化手段

- 缩小搜索范围

  ```js
  module.exports = {
    module: {
      // 由于 Loader 对文件的转换操作很耗时，需要让尽可能少的文件被 Loader 处理,可以通过 include 去命中只有哪些文件需要被处理。
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
        },
      ],
      //一些库，例如 jQuery 、ChartJS， 它们庞大又没有采用模块化标准，让 Webpack 去解析这些文件耗时又没有意义
      noParse: [/react\.min\.js$/],
    },
    /* 
    resolve.modules 的默认值是 ['node_modules']，含义是先去当前目录下的 ./node_modules 目录下去找想找的模块，如果没找到就去上一级目录 ../node_modules 中找，再没有就去 ../../node_modules 中找，以此类推，这和 Node.js 的模块寻找机制很相似。
  
    当安装的第三方模块都放在项目根目录下的 ./node_modules 目录下时，没有必要按照默认的方式去一层层的寻找，可以指明存放第三方模块的绝对路径，以减少寻找，配置如下
    */
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],
      // 入口文件配置
      mainFields: ['main'],
      alias: {
        /* 默认情况下 Webpack 会从入口文件 ./node_modules/react/react.js 开始递归的解析和处理依赖的几十个文件，这会时一个耗时的操作。 通过配置 resolve.alias 可以让 Webpack 在处理 React 库时，直接使用单独完整的 react.min.js 文件，从而跳过耗时的递归解析操作 */
        react: path.resolve(__dirname, './node_modules/dist/react.min.js'),
      },
      /*  如果这个列表越长，或者正确的后缀在越后面，就会造成尝试的次数越多，所以 resolve.extensions 的配置也会影响到构建的性能。 在配置 resolve.extensions 时你需要遵守以下几点，以做到尽可能的优化构建性能：
  
      后缀尝试列表要尽可能的小，不要把项目中不可能存在的情况写到后缀尝试列表中。
      频率出现最高的文件后缀要优先放在最前面，以做到尽快的退出寻找过程。
      在源码中写导入语句时，要尽可能的带上后缀，从而可以避免寻找过程。例如在你确定的情况下把 require('./data') 写成 require('./data.json')。 */
      extension: ['js'],
    },
  };
  ```

  ***

11. webpack 部分疑惑选项记录

- include/exclude/test 的区别

  ```js
    module.exports = {
    module: {
      rules: [
        {
          // "test" is commonly used to match the file extension
          test: /\.jsx$/,

          // "include" is commonly used to match the directories
          include: [
            path.resolve(__dirname, "app/src"),
            path.resolve(__dirname, "app/test")
          ],
          // "exclude" should be used to exclude exceptions
          // try to prefer "include" when possible

          // the "loader"
          loader: "babel-loader" // or "babel" because webpack adds the '-loader' automatically
        }
      ];
    }
    }
  ```

- output 选项的 chunkFilename

  作用: 配置无入口的 Chunk 在输出时的文件名称

  常见的会在运行时生成 Chunk 场景有在使用 CommonChunkPlugin、使用 import('path/to/module') 动态加载等时。 chunkFilename 支持和 filename 一致的内置变量

-  提取公共代码插件 splitChunks 与 dllplugin 的区别:

  总而言之，它们看起来很相似，但它们可以让你击中不同的目标。这么多，你可以考虑在开发环境中使用 DllPlugin（优点：编译时间短），同时使用 splitChunks 进行生产（优点：app 更改时的加载时间短）。同样，您也可以在生产中使用 DllPlugin，只需要连续运行两个版本的小麻烦：一个用于 DLL，另一个用于应用程序。

  附上 stackoverflow 中的[分析连接](https://stackoverflow.com/questions/41890855/webpack-common-chunks-plugin-vs-webpack-dll-plugin)

- output 选项中的[hash]以及[chunkhash]

  chunkhash 只能用于生产环境, 而 hash 一般用于开发环境,因为 chunkhash 与 HMR 冲突
