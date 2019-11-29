(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{232:function(e,s,a){"use strict";a.r(s);var t=a(2),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"阿里云ecs-centos-80端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云ecs-centos-80端口"}},[e._v("#")]),e._v(" 阿里云ECS CentOS 80端口")]),e._v(" "),a("p",[e._v("前几天在阿里云上用学生特惠又买了一次ECS，上次装的Ubuntu ,这回装的CentOS ，Ubuntu 的 默认防火墙是iptables，而如今Centos7 下默认的防火墙是 Firewall，替代了之前的 iptables.")]),e._v(" "),a("h2",{attrs:{id:"配置-firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-firewall"}},[e._v("#")]),e._v(" 配置 Firewall")]),e._v(" "),a("p",[e._v("进入系统之后，Centos7 默认是已安装了 Firewall，但是没有启动的，所以需要先启动下 Firewall，同时设置开机自启动")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("systemctl start firewalld       ##启动Firewall\nsystemctl enable firewalld.service  ##设置开机自启动\n\n\nln -s '/usr/lib/systemd/system/firewalld.service' '/etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service'\nln -s '/usr/lib/systemd/system/firewalld.service' '/etc/systemd/system/basic.target.wants/firewalld.service'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h2",{attrs:{id:"常用命令介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令介绍"}},[e._v("#")]),e._v(" 常用命令介绍")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("firewall-cmd --state                           ##查看防火墙状态，是否是running\nfirewall-cmd --reload                          ##重新载入配置，比如添加规则之后，需要执行此命令\nfirewall-cmd --get-zones                       ##列出支持的zone\nfirewall-cmd --get-services                    ##列出支持的服务，在列表中的服务是放行的\nfirewall-cmd --query-service ftp               ##查看ftp服务是否支持，返回yes或者no\nfirewall-cmd --add-service=ftp                 ##临时开放ftp服务\nfirewall-cmd --add-service=ftp --permanent     ##永久开放ftp服务\nfirewall-cmd --remove-service=ftp --permanent  ##永久移除ftp服务\nfirewall-cmd --add-port=80/tcp --permanent     ##永久添加80端口 \niptables -L -n                                 ##查看规则，这个命令是和iptables的相同的\nman firewall-cmd                               ##查看帮助\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);