# pkg打包

## 为什么要使用pkg
今年有个项目，是用node开发一个自动化程序。为了便捷的服务器端运行，免除安装NODE环境等相关依赖，因此需要将node代码打包成可执行程序，直接在服务器端运行。

## 特点
将V8引擎和项目代码打包进一个可执行文件内;

即使在未安装Node.js的设备上(**支持 macos / linux / win**)也可以运行该可执行文件。

## 使用方式
在此，我就说一下我在项目中的应用和使用方式。

还是老套路，用npm安装：
> npm i pkg -D

在package.json中，新增一个字段**bin**，指定应用程序的入口：

```
{
    "name": "my_app",
    ...
    "bin": "src/index.js",
    ...
}
```

然后执行命令行执行：

```bash
# --out-path 是指定打包输出的路径
# --targets 是指定打包哪种平台下运行的程序，我这里打包的是linux-x64下的程序，支持的参数值可以在官方仓库中查阅
pkg . --out-path=bin/ --targets=node10-linux-x64
```

打包完成后，会在bin目录下生成一个名为`my_app`的二进制可执行程序，然后为程序设置可执行权限`chmod +x my_app`，接下来便可在linux上直接运行 `./my_app` 了.

注：如果你的程序是node10以下的项目，需要使用试验特性worker_threads，或者是其他v8配置，需要在运行打包的时候，设置node的runtime配置，例如：

```
pkg . --out-path=bin/ --targets=node10-linux-x64 --options experimental-worker
```

这样打包出来的程序在执行的时候，就相当于运行：
> node my_app --experimental-worker

更多配置方式和FAQ，大家可以到[zeit/pkg](https://github.com/zeit/pkg) 官方仓库中查看。
