# Web 性能请求优化

> 内容部分转自网络

## 概览

该篇主要介绍**在发送请求的过程中前端的性能优化**, 其中会穿插这网络相关知识, 主要包含以下几个部分。

- 避免多余重定向
- DNS 预解析
- 预先建立连接
- CDN 内容分发网络

## 避免多余重定向

HTTP 状态码中重定向分为:

`301`: 永久重定向

`302`: 临时重定向

建议贴合语义，例如服务迁移的情况下，使用 301 重定向。对 SEO 也会更友好;
且不要滥用重定向,每次重定向都是有请求耗时的，建议避免过多的重定向

## DNS 预解析

访问远程服务的时候，不会直接使用服务的出口 IP，而是使用域名。DNS 是应用层协议，事实上他是为其他应用层协议工作的，包括不限于 HTTP 和 SMTP 以及 FTP，用于将用户提供的主机名解析为 ip 地址

DNS 获取的流程主要分为以下几个步骤:

1. `浏览器缓存`：当用户通过浏览器访问某域名时，浏览器首先会在自己的缓存中查找是否有该域名对应的 IP 地址（若曾经访问过该域名且没有清空缓存便存在）

2. `系统缓存`：当浏览器缓存中无域名对应 IP 则会自动检查用户计算机系统 Hosts 文件 DNS 缓存是否有该域名对应 IP；

3. `路由器缓存`：当浏览器及系统缓存中均无域名对应 IP 则进入路由器缓存中检查，以上三步均为客服端的 DNS 缓存；

4. `ISP（互联网服务提供商）DNS 缓存`：当在用户客服端查找不到域名对应 IP 地址，则将进入 ISP DNS 缓存中进行查询。比如你用的是电信的网络，则会进入电信的 DNS 缓存服务器中进行查找；

5. `根域名服务器`：当以上均未完成，则进入根服务器进行查询。全球仅有 13 台根域名服务器，1 个主根域名服务器，其余 12 为辅根域名服务器。根域名收到请求后会查看区域文件记录，若无则将其管辖范围内顶级域名（如.com）服务器 IP 告诉本地 DNS 服务器；

6. `顶级域名服务器`：顶级域名服务器收到请求后查看区域文件记录，若无则将其管辖范围内主域名服务器的 IP 地址告诉本地 DNS 服务器；

7. `主域名服务器`：主域名服务器接受到请求后查询自己的缓存，如果没有则进入下一级域名服务器进行查找，并重复该步骤直至找到正确纪录；

8. `保存结果至缓存`：本地域名服务器把返回的结果保存到缓存，以备下一次使用，同时将该结果反馈给客户端，客户端通过这个 IP 地址与 web 服务器建立链接。

::: tip 这里我们需要了解的是

- 首先，DNS 解析流程可能会很长，耗时很高，所以整个 DNS 服务，包括客户端都会有缓存机制，这个作为前端不好涉入；
- 其次，在 DNS 解析上，前端还是可以通过浏览器提供的其他手段来“加速”的。

:::

DNS Prefetch 就是浏览器提供给我们的一个 API。它是 Resource Hint 的一部分。它可以告诉浏览器：过会我就可能要去 yourwebsite.com 上下载一个资源啦，帮我先解析一下域名吧。这样之后用户点击某个按钮，触发了 yourwebsite.com 域名下的远程请求时，就略去了 DNS 解析的步骤。使用方式很简单

```html
<link rel="dns-prefetch" href="//yourwebsite.com" />
```

## 预先建立连接

我们知道，建立连接不仅需要 DNS 查询，还需要进行 TCP 协议握手，有些还会有 TLS/SSL 协议，这些都会导致连接的耗时。使用 Preconnect[3] 可以帮助你告诉浏览器：“我有一些资源会用到某个源（origin），你可以帮我预先建立连接”

根据规范，当你使用 [Preconnect](https://www.w3.org/TR/resource-hints/#preconnect) 时，浏览器大致做了如下处理：

- 首先，解析 Preconnect 的 url；
- 其次，根据当前 link 元素中的属性进行 cors 的设置；
- 然后，默认先将 credential 设为 true，如果 cors 为 Anonymous 并且存在跨域，则将 credential 置为 false；
- 最后，进行连接。

使用 Preconnect 只需要将 rel 属性设为 preconnect 即可：

```html
<link rel="preconnect" href="//sample.com" />
```

当然，你也可以设置 CORS：

```html
<link rel="preconnect" href="//sample.com" crossorigin />
```

需要注意的是，标准并没有硬性规定浏览器一定要（而是 SHOULD）完成整个连接过程，与 DNS Prefetch 类似，浏览器可以视情况完成部分工作。

## 使用 CDN(内容分发网络)

对于静态资源，我们可以考虑通过 CDN 来降低时延

对于使用 CDN 的资源，DNS 解析会将 CDN 资源的域名解析到 CDN 服务的负载均衡器上，负载均衡器可以通过请求的信息获取用户对应的地理区域，从而通过负载均衡算法，在背后的诸多服务器中，综合选择一台地理位置近、负载低的机器来提供服务。例如为北京联通用户解析北京的服务器 IP。这样，用户在之后访问 CDN 资源时都是访问北京服务器，距离近，速度快

下图是请求声明周期中各个阶段的示意图，可以帮助我们理解发送请求（以及接收响应）的流程。

![](/blog_new/technology/cdn.png)
