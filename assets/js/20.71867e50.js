(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{231:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"并行加载与顺序执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并行加载与顺序执行"}},[s._v("#")]),s._v(" 并行加载与顺序执行")]),s._v(" "),a("h2",{attrs:{id:"引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[s._v("#")]),s._v(" 引言")]),s._v(" "),a("p",[s._v("Javascript文件（下面简称脚本文件）需要被HTML文件引用才能在浏览器中运行。在HTML文件中可以通过不同的方式来引用脚本文件，我们需要关注的是，引用的具体实现方式和这些方式可能会带来的性能问题。")]),s._v(" "),a("p",[s._v("首先，引用脚本必须用到"),a("code",[s._v("<script>")]),s._v("标签，所以需要了解"),a("code",[s._v("<script>")]),s._v("标签的特性，引述书中作者原话：")]),s._v(" "),a("blockquote",[a("p",[s._v("当浏览器遇到（"),a("strong",[s._v("即内嵌")]),s._v("）"),a("code",[s._v("<script>")]),s._v("标签时，当前浏览器无从获知Javascript是否会修改页面内容。因此，这时浏览器会停止处理页面，先执行Javascript代码，然后再继续解析和渲染页面。同样的情况也发生在使用 src 属性加在Javascript的过程中（即"),a("strong",[s._v("外链")]),s._v("），浏览器必须先花时间下载外链文件中的代码，然后解析并执行它。在这个过程中，页面渲染和用户交互完全被阻塞了。")])]),s._v(" "),a("p",[s._v("根据上述描述，能了解到：")]),s._v(" "),a("p",[a("strong",[s._v("每当浏览器解析到"),a("code",[s._v("<script>")]),s._v("标签（无论内嵌还是外链）时，浏览器会优先下载、解析并执行该标签中的Javascript代码，而阻塞了其后所有页面内容的下载和渲染。")])]),s._v(" "),a("p",[s._v("可以说，正是因为"),a("code",[s._v("<script>")]),s._v("标签的这一特性，所以才有了脚本文件的各种引用方式及其讨论。")]),s._v(" "),a("h2",{attrs:{id:"传统做法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统做法"}},[s._v("#")]),s._v(" 传统做法")]),s._v(" "),a("p",[s._v("最传统的做法是在"),a("code",[s._v("<head>")]),s._v("标签内插入"),a("code",[s._v("<script>")]),s._v("标签：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<head>\n<script src="test.js"><\/script>\n<link rel="stylesheet" type="text/css" href="styles/test.css" />\n</head>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这种引用方式隐藏着严重的性能问题。由于"),a("code",[s._v("<script>")]),s._v("标签的特性，当浏览器解析到"),a("code",[s._v("<script>")]),s._v("标签时，浏览器优先下载解析脚本文件，而停止解析其后的页面内容，这意味着，其后的 test.css 样式文件和"),a("code",[s._v("<body>")]),s._v("标签都无法被加载，由于"),a("code",[s._v("<body>")]),s._v("标签无法被加载，那么页面自然就无法渲染了。因此在该javascript代码完全执行完之前，页面都是一片空白。")]),s._v(" "),a("p",[s._v("下面用张动态图来说明：")]),s._v(" "),a("p",[a("img",{attrs:{src:"",alt:"图片失效"}})]),s._v(" "),a("p",[s._v("上图有两点是需要注意的：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("页面的渲染和javascript代码的执行是一起显示出来的。")]),s._v("\n说明最开始出现的空白正是由于javascript文件阻塞特性引起的。这是因为如果脚本文件没有阻塞页面渲染的话，页面的渲染一般要先于脚本文件的加载，简来说就是页面先显示出来，过一小会儿，才有动态效果（一般来说页面所需要的的css样式文件和html文件的体积会远远小于脚本文件，如果没有被阻塞，它们会先于脚本文件下载好，然后立即被浏览器解析出来）。")]),s._v(" "),a("li",[a("strong",[s._v("图片的加载是在javascript执行之后才开始的")]),s._v("\n说明javascript阻塞了图片的加载。")])]),s._v(" "),a("h2",{attrs:{id:"推荐做法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐做法"}},[s._v("#")]),s._v(" 推荐做法")]),s._v(" "),a("p",[s._v("既然"),a("code",[s._v("<script>")]),s._v("标签会阻塞其后内容的加载，那么将"),a("code",[s._v("<script>")]),s._v("标签"),a("strong",[s._v("放到所有页面内容之后")]),s._v("不就可以避免这种糟糕的状况了吗？如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<body>\n\x3c!-- 页面其他内容 --\x3e\n\n\x3c!-- 推荐的脚本放置位置 --\x3e\n<script type="text/javascript" src="file1.js">\n<script type="text/javascript" src="file2.js">\n<script type="text/javascript" src="file3.js">\n</body>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("将所有的"),a("code",[s._v("<script>")]),s._v("标签尽可能地放到"),a("code",[s._v("<body>")]),s._v("标签底部，尽量避免对页面其余部分下载及渲染的影响，效果图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"",alt:"图片失效"}})]),s._v(" "),a("p",[s._v("对比上一张动态图，可以发现，"),a("strong",[s._v("页面渲染要先于脚本文件的执行")]),s._v("，说明脚本文件不再阻塞页面渲染了（包括css文件和img等文件的下载）。")]),s._v(" "),a("p",[s._v("然而这种做法在一些老旧的浏览器中依旧有些弊端，先选取书中作者的原话：")]),s._v(" "),a("blockquote",[a("p",[s._v("(将脚本放到"),a("code",[s._v("<body>")]),s._v("标签底部时)尽管脚本下载会阻塞另一个脚本，但是页面的大部分内容已经下载完成并显示给用户…")])]),s._v(" "),a("p",[s._v("也就是说，尽管在"),a("strong",[s._v("IE8+浏览器")]),s._v("上已经实现了脚本并行下载，但在更老旧浏览器中，页面中脚本仍是一个接着一个加载的。就上面的示例代码而言，浏览器先加载完file1脚本文件，再去加载file2脚本文件，最后才轮到file3脚本文件。虽然此时脚本已经不阻塞其他页面内容，但"),a("strong",[s._v("脚本之间却是相互阻塞加载")]),s._v("，于是有了动态加载脚本这一方法。")]),s._v(" "),a("h3",{attrs:{id:"动态加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态加载"}},[s._v("#")]),s._v(" 动态加载")]),s._v(" "),a("p",[s._v("动态加载脚本文件，即通过文档对象模型（DOM），在页面任意地方创建并插入"),a("code",[s._v("<script>")]),s._v("标签：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var script=document.createElement('script');\nscript.type='text/javascript';\nscript.src='file1.js';\ndocument.getElementsByTagName('head')[0].appendChild(script);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("上述代码动态创建了一个链接file1脚本文件的"),a("code",[s._v("<script>")]),s._v("标签，并将其添加到"),a("code",[s._v("<head>")]),s._v("标签内。")]),s._v(" "),a("p",[s._v("这种方法的"),a("strong",[s._v("优点")]),s._v("在于：")]),s._v(" "),a("blockquote",[a("p",[s._v("无论在何时启动下载，文件的下载和执行过程不会阻塞页面其他进程（包括脚本加载）。")])]),s._v(" "),a("p",[s._v("然而这种方法也是有"),a("strong",[s._v("缺陷")]),s._v("的：")]),s._v(" "),a("blockquote",[a("p",[s._v("脚本会在下载完成后立即执行，那么意味着多个脚本之间的运行顺序是无法保证的（除了Firefox和Opera）。")])]),s._v(" "),a("p",[s._v("当某个脚本对另一个脚本有依赖关系时，就很可能发生错误了。比如，写一个jQuery代码，需要引入jQuery库，然而你写的jQuery代码文件很可能会先完成下载并立即执行，这时浏览器会报错——‘jQuery未定义’之类的，因为此时jQuery库还未下载完成。针对这种情况，有了以下改进：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function loadScript(url,callback){\n    var script=document.createElement(\'script\');\n    script.type="text/javascript";\n    if(script.readyState){\n        //IE\n        script.onreadystatechange=function(){\n            if(script.readyState=="loaded"||script.readyState=="complete"){\n                script.onreadystatechange=null;\n                callback();\n            }\n        };\n    }else{\n        //其他浏览器\n        script.onload=function(){\n            callback();\n        };\n    }\n    script.src=url;\n    document.getElementsByTagName(\'head\')[0].appendChild(script);\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("上述代码改进的地方就是增加了一个回调函数，该函数会在相应脚本文件加载完成后被调用。这样便可以实现顺序加载了，写法如下（假设file2依赖file1，file1和file3相互独立）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("loadScript('file1.js',function(){\n    loadScript('file2.js',function(){});\n});\nloadScript('file3.js',function(){});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("file2会在file1加载完后才开始加载，保证了在file2执行前file1已经准备妥当。而file1和file3是并行下载的，互不影响。")]),s._v(" "),a("p",[s._v("虽然loadScript函数已经足够好，但还是有些不尽人意的地方——loadScript函数中的"),a("strong",[s._v("顺序加载是以脚本的阻塞加载")]),s._v("来实现的。而我们真正想实现的是——脚本同时下载并按相应顺序执行，即并行加载并顺序执行。")]),s._v(" "),a("h3",{attrs:{id:"labjs库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labjs库"}},[s._v("#")]),s._v(" LABjs库")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://labjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("LABjs库"),a("OutboundLink")],1),s._v("能帮我们真正地实现"),a("strong",[s._v("并行加载与顺序执行")]),s._v("，推荐写法如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<body>\n    \x3c!-- 页面其余内容 --\x3e\n\n    \x3c!-- 推荐的脚本放置位置 --\x3e\n    <script type=\"text/javascript\" src=\"LABjs.js\"><\/script>\n    <script type=\"text/javascript\">\n        $LAB\n            .script('file1.js')\n            .script('file2.js')\n            .script('file3.js');\n    <\/script>\n</body>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("上述代码会并行加载三个脚本文件，更赞的是，它会按脚本的顺序来执行这些脚本。")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"http://book.douban.com/subject/5362856/",target:"_blank",rel:"noopener noreferrer"}},[s._v("高性能Javascript"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2011/10/javascript_loading.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Javascript文件加载：LABjs和RequireJS"),a("OutboundLink")],1)])]),s._v(" "),a("blockquote",[a("p",[s._v("原文地址:"),a("a",{attrs:{href:"http://blog.lxjwlt.com/front-end/2013/05/17/loading-javascript.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://blog.lxjwlt.com/front-end/2013/05/17/loading-javascript.html"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);