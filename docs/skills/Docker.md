# Docker 总结：《Docker 从入门到实战(黄靖钧)》


# 观其大纲

第一篇 容器技术与 Docker 概念  
1 认识容器技术  
2 Docker 基本概念  
3 安装和测试 Docker  
第二篇 Docker 基础知识  
4 Docker 基础  
5 Docker 镜像  
6 Dockerfile 文件  
7 Docker 仓库  
8 Docker 容器  
9 数据卷  
10 网络管理  
第三篇 Docker 进阶实战  
11 操作系统  
12 编排工具-compose  
13 web 服务器与应用  
14 数据库  
15 编程语言  
16 Docker API  
17 私有仓库  
18 集群网络  
19 容器安全  
20 Docker 网络生态

# 大纲细节

第 1 篇 容器技术与 Docker 概念  
第 1 章 容器技术  
1.1 什么是容器  
1.2 容器技术的前世今生  
1.3 容器的原理  
1.4 容器云  
1.5 容器与 Docker  
1.6 本章小结  
第 2 章 Docker 简介  
2.1 什么是 Docker  
2.2 Docker 的功能及优缺点  
2.3 Docker 和虚拟机  
2.4 Docker 与 runC  
2.5 Docker 基本架构  
2.6 本章小结  
第 3 章 安装 Docker  
3.1 Linux 系统  
3.2 Windows 与 Mac OS 系统  
3.3 二进制安装  
3.4 本章小结  
第 2 篇 Docker 基础知识  
第 4 章 Docker 基础  
4.1 Docker 基本操作  
4.2 启动第一个 Docker 容器  
4.3 构建第一个 Docker 镜像  
4.4 本章小结  
第 5 章 Docker 镜像  
5.1 认识镜像  
5.2 创建镜像  
5.3 导出和导入镜像  
5.4 发布镜像  
5.5 删除镜像  
5.6 Docker 镜像扩展  
5.7 本章小结  
第 6 章 Dockerfile 文件  
6.1 Dockerfile 基本结构  
6.2 Dockerfile 指令  
6.3 镜像构建实战  
6.4 本章小结  
第 7 章 Docker 仓库  
7.1 官方仓库 Docker Hub  
7.2 国内镜像仓库  
7.3 私有仓库  
7.4 Registry 原理  
7.5 本章小结  
第 8 章 Docker 容器  
8.1 容器基本操作  
8.2 进入容器内部  
8.3 导出和导入容器  
8.4 容器结构  
8.5 本章小结  
第 9 章 数据卷  
9.1 数据卷是什么  
9.2 为容器挂载数据卷  
9.3 备份、恢复、迁移数据卷  
9.4 容器数据卷扩展  
9.5 本章小结  
第 10 章 网络管理  
10.1 Docker 网络基础  
10.2 Docker 网络模式  
10.3 Docker 网络配置  
10.4 本章小结  
第 3 篇 Docker 进阶实战  
第 11 章 操作系统  
11.1 Alpine 发行版  
11.2 Busybox 发行版  
11.3 Debian/Ubuntu 发行版  
11.4 CentOS/Fedora 发行版  
11.5 CoreOS 发行版  
11.6 RancherOS 发行版  
11.7 本章小结  
第 12 章 编排工具 Compose  
12.1 安装 Docker Compose  
12.2 Compose 命令基础  
12.3 Compose 配置文件  
12.4 Compose 实战  
12.5 本章小结  
第 13 章 Web 服务器与应用  
13.1 Apache 服务器  
13.2 Nginx 服务器  
13.3 Tomcat 服务器  
13.4 其他 Web 服务器  
13.5 本章小结  
第 14 章 数据库  
14.1 MySQL 数据库  
14.2 PostgreSQL 数据库  
14.3 Redis 数据库  
14.4 MongoDB 数据库  
14.5 其他  
14.6 本章小结  
第 15 章 编程语言  
15.1 C/C++语言  
15.2 Golang 语言  
15.3 Java 语言  
15.4 JavaScript（Node.js）语言  
15.5 PHP 语言  
15.6 Python 语言  
15.7 Swift 语言  
15.8 本章小结  
第 16 章 Docker API 介绍  
16.1 认识 Docker API  
16.2 Docker Remote API 介绍  
16.3 其他 API  
16.4 本章小结  
第 17 章 私有仓库  
17.1 Docker Registry 介绍  
17.2 认证与前端  
17.3 企业级私有仓库 Harbor  
17.4 私有仓库前端授权工具 Portus  
17.5 本章小结  
第 18 章 集群网络  
第 19 章 Docker 安全

* * *


# 熟知概念

第 1 篇 容器技术与 Docker 概念  
第 1 章 容器技术

> *   什么是容器  
>     容器映像是一个软件的轻量级独立可执行软件包，包含运行它所需的一切：代码，运行时，系统工具，系统库，设置。不管环境如何，集装箱化软件都可以运行相同的 Linux 和 Windows 应用程序。容器将软件与其周围环境隔离开来，例如开发环境和登台环境之间的差异，并有助于减少在同一基础架构上运行不同软件的团队之间的冲突。
>     
>       
>     
>     ![](invalid-url.png)
>     
>     what is a container?
>     

> LXC  
> Linux Container 容器是一种内核虚拟化技术，可以提供轻量级的虚拟化，以便隔离进程和资源。

> 容器技术主要包括 Cgroup 和 Namespace 这两个内核特性。  
> **Cgroup**  
> Cgroup 是 control group，又称为控制组，它主要是做资源控制。原理是将一组进程放在放在一个控制组里，通过给这个控制组分配指定的可用资源，达到控制这一组进程可用资源的目的。  
> **Namespace**  
> Namespace 又称为命名空间，它主要做访问隔离。其原理是针对一类资源进行抽象，并将其封装在一起提供给一个容器使用，对于这类资源，因为每个容器都有自己的抽象，而他们彼此之间是不可见的，所以就可以做到访问隔离。

> 对于 Linux 容器的最小组成，除了上面两个抽象的技术概念还不够，完整的容器可以用以下公示描述：

#### 容器=Cgroup+Namespace+rootfs+容器引擎（用户态工具）。

> 其中各项功能分别为：  
> Cgroup：资源控制；  
> Namespace：访问隔离；  
> rootfs：文件系统隔离；  
> 容器引擎：生命周期控制；

第 2 章 Docker 简介  
2.1 什么是 Docker

> Docker 是一个用于开发、迁移、运行的开发平台。它使你能够将你的应用程序从基础架构中分离，从而可以快速交付。使用 Docker，你可以以与管理应用程序相同的方式来管理这些基础架构。使用 Docker 的方法，进行快速开发，测试，并可以显著的减少编写代码和运行之间的时间延迟。  
> 就像官网上说的：Build，Ship，and Run Any App, Anywhere

> Docker 基本架构  
> docker 主要有以下几部分组成：
> 
> > Docker Client 客户端  
> > Docker daemon 守护进程  
> > Docker Image 镜像  
> > Docker Container 容器  
> > Docker Registry 仓库

> *   客户端和守护进程：  
>     1 Docker 是 C/S（客户端 client-服务器 server）架构模式。  
>     docker 通过客户端连接守护进程，通过命令向守护进程发出请求，守护进程通过一系列的操作返回结果。  
>     2 docker 客户端可以连接本地或者远程的守护进程。  
>     3 docker 客户端和服务器通过 socket 或 RESTful API 进行通信。
>     
>       
>     
>     ![](invalid-url.png)
>     
>     docker 架构
>     

第 3 章 安装 Docker

第 2 篇 Docker 基础知识  
第 4 章 Docker 基础

## 常用命令表

> *   操作 命令  
>     实例

#### 通用命令

*   查看 docker 版本 docker version  
    docker version
*   查看 docker 信息 docker info  
    docker info
*   查看某命令 help 信息 docker help \[command\]  
    docker help attach
*   查看 docker help 信息 docker --help  
    docker --help

#### 容器操作命令

*   创建 container docker create  
    docker create chenhengjie123/xwalkdriver
*   创建并运行 container docker run  
    docker run chenhengjie123/xwalkdriver /bin/bash
*   创建并运行 container 后进入其 bash 控制台  
    docker run -t -i image /bin/bash  
    docker run -t -i ubuntu /bin/bash
*   创建并运行 container 并让其在后台运行，并端口映射  
    docker run -p \[port in container\]:\[port in physical system\] -d \[image\] \[command\]  
    docker run -p 5000:5000 -d training/webapp python app.py
*   查看正在运行的所有 container 信息 docker ps  
    docker ps
*   查看最后创建的 container docker ps -l  
    docker ps -l
*   查看所有 container ，包括正在运行和已经关闭的 docker ps -a  
    docker ps -a
*   输出指定 container 的 stdout 信息（用来看 log ，效果和 tail -f 类似，会实时输出。）  
    docker logs -f \[container\]  
    docker logs -f nostalgic_morse  
    **补充 docker logs -f -t --since="2017-05-01" --tail=10 edu\_web\_01**
*   获取 container 指定端口映射关系 docker port \[container\] \[port\]  
    docker port nostalgic_morse 5000
*   查看 container 进程列表 docker top \[container\]  
    docker top nostalgic_morse
*   查看 container 详细信息 docker inspect \[container\]  
    docker inspect nostalgic_morse
*   停止 continer docker stop \[container\]  
    docker stop nostalgic_morse
*   强制停止 container docker kill \[container\]  
    docker kill nostalgic_morse
*   启动一个已经停止的 container docker start \[container\]  
    docker start nostalgic_morse
*   重启 container (若 container 处于关闭状态，则直接启动)  
    docker restart \[container\]  
    docker restart nostalgic_morse
*   删除 container docker rm \[container\]  
    docker rm nostalgic_morse

注意：命令中需要指定 container 时，既可使用其名称，也可使用其 id 。

#### 镜像操作命令

*   从 container 创建 image， docker commit \[container\] \[imageName\]  
    docker commit nostalgic_morse ouruser/sinatra:v2
*   从 Dockerfile 创建 image， docker build -t \[imageName\] \[pathToFolder\]  
    docker build ouruser/sinatra:v3 .
*   查看本地所有 image， docker images  
    docker images
*   显示镜像构建历史 docker history \[OPTIONS\] IMAGE  
    docker history runoob/ubuntu:v3
*   在 registry 中搜索镜像 docker search \[query\]  
    docker search ubuntu
*   从 registry 中获取镜像 （若无指定 tag 名称，则默认使用 latest 这个 tag）  
    docker pull \[imageName\]  
    docker pull ubuntu:14.04  
    docker pull training/webapp
*   给 image 打 tag， docker tag \[imageId\] \[imageName\]  
    docker tag 5db5f8471261 ouruser/sinatra:devel
*   把本地 image 上传到 registry 中 (此时会把所有 tag 都上传上去)  
    docker push \[imageName\]  
    docker push ouruser/sinatra
*   删除本地 image， docker rmi \[image\]  
    docker rmi training/sinatra

注意：注意：image 中没有指定 tag 名称的话默认使用 latest 这个 tag 。然而 latest 的含义和 VCS 中的 head 不一样，不是代表最新一个镜像，仅仅是代表 tag 名称为 latest 的镜像。若不存在 tag 名称为 latest 的镜像则会报错。

小结：

> docker 虽然是一个虚拟化技术，但使用上却更像是在管理系统软件或者代码。里面的一些 ps，top，rm 命令让使用 Linux 命令的人感到十分亲切（虽然它们的语义有点不一样。。。），start，stop，restart 让你感觉像是在控制 service ，而 push，pull，commit，tag 又让你觉得像是在使用 git 。因此程序员会感到很亲切且容易上手。

> 同时由于可以使用 Dockerfile 进行 image 的构建，且 docker hub 支持从 github 等地方自动根据 Dockerfile 进行构建，所以 docker 把运行环境也集成到 CI 中了。

> 美中不足的是由于 docker 目前仅支持 linux 上的容器技术，因此它要在非 Linux 系统下运行必须加多一个虚拟机层。这会造成一些在 Linux 上运行不会出现的问题（ip 地址、硬件资源、文件映射等），同时由于基于 linux ，一些 windows 的程序会水土不服，泛用性比虚拟机差一些。

> 但带来的好处是占用的系统资源低很多。一个只能开数个虚拟机的电脑一般能开数十个 container ，且 container 的启动时间一般在数秒内，比虚拟机快得多。另外，由于 docker 的 image 除了一些特殊的基础镜像外基本都是增量镜像，因此重复部分不会耗费额外的资源，所以几个看起来有数 g 的 image 如果里面使用的基础镜像有重复部分（大部分情况下都会有部分重复），那么它们实际占用空间将会小得多。

第 5 章 Docker 镜像  
5.1 认识镜像  
镜像是 Docker 容器的基石，容器是镜像的运行实例，有了镜像才能启动容器。

##### Docker 镜像中的 base 镜像理解

*   base 镜像有两层含义：  
    1 不依赖其他镜像，从 scratch 构建。  
    2 其他镜像可以之为基础进行扩展。  
    能称作 base 镜像的通常都是各种 Linux 发行版的 Docker 镜像，比如 Ubuntu, Debian, CentOS 等
    
*   base 镜像内容：  
    下载镜像：  
    docker pull centos  
    查看镜像信息：docker images centos # 大约 200M  
    Linux 操作系统由内核空间和用户空间组成。如下图所示：
    

![](invalid-url.png)

linux 操作系统

rootfs

*   内核空间是 kernel，Linux 刚启动时会加载 bootfs 文件系统，之后 bootfs 会被卸载掉。
*   用户空间的文件系统是 rootfs，包含我们熟悉的 /dev, /proc, /bin 等目录。对于 base 镜像来说，底层直接用 Host 的 kernel，自己只需要提供 rootfs 就行了。
*   而对于一个精简的 OS，rootfs 可以很小，只需要包括最基本的命令、工具和程序库就可以了。相比其他 Linux 发行版，CentOS 的 rootfs 已经算臃肿的了，alpine 还不到 10MB。
*   我们平时安装的 CentOS 除了 rootfs 还会选装很多软件、服务、图形桌面等，需要好几个 GB 就不足为奇了。
*   base 镜像提供的是最小安装的 Linux 发行版。

> base 镜像----提供了一个基本的操作系统环境，用户可以根据需要安装和配置软件  
> base 镜像通常是各种 Linux 发行版的 Docker 镜像比如 ubuntu、Debian、centos 等。  
> **base 镜像只是在用户空间与发行版一致，kernel 版本与发行版是不同的。**比如说虚机系统是 ubuntu14.04，运行一个容器是 centos 系统的，那么 centos 使用的其实就是本虚机的 kernel。

5.2 创建镜像

> 当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载。
> 
> *   列出镜像列表  
>     我们可以使用 docker images 来列出本地主机上的镜像。  
>     我们如果要使用版本为 15.10 的 ubuntu 系统镜像来运行容器时，命令如下：  
>     docker run -t -i ubuntu:15.10 /bin/bash
> *   获取一个新的镜像  
>     当我们在本地主机上使用一个不存在的镜像时 Docker 就会自动下载这个镜像。如果我们想预先下载这个镜像，我们可以使用 docker pull 命令来下载它。  
>     docker pull ubuntu:13.10
> *   查找镜像  
>     我们可以从 Docker Hub 网站来搜索镜像，Docker Hub 网址为： [https://hub.docker.com/](https://hub.docker.com/)  
>     我们也可以使用 docker search 命令来搜索镜像。比如我们需要一个 httpd 的镜像来作为我们的 web 服务。我们可以通过 docker search 命令搜索 httpd 来寻找适合我们的镜像。  
>     docker search httpd
> *   创建镜像  
>     当我们从 docker 镜像仓库中下载的镜像不能满足我们的需求时，我们可以通过以下两种方式对镜像进行更改。  
>     1.从已经创建的容器中更新镜像，并且提交这个镜像  
>     2.使用 Dockerfile 指令来创建一个新的镜像

> *   更新镜像  
>     更新镜像之前，我们需要使用镜像来创建一个容器。  
>     docker run -t -i ubuntu:15.10 /bin/bash  
>     在运行的容器内使用命令进行更新:  
>     apt-get update  
>     在完成操作之后，输入 exit 命令来退出这个容器。  
>     此时 ID 为 e218edb10161 的容器，是按我们的需求更改的容器。我们可以通过命令 docker commit 来提交容器副本。  
>     docker commit -m="has update" -a="runoob" e218edb10161 runoob/ubuntu:v2
> 
> > 各个参数说明：  
> > -m:提交的描述信息  
> > -a:指定镜像作者  
> > e218edb10161：容器 ID  
> > runoob/ubuntu:v2:指定要创建的目标镜像名
> 
> *   构建镜像  
>     我们使用命令 docker build ， 从零开始来创建一个新的镜像。为此，我们需要创建一个 Dockerfile 文件，其中包含一组指令来告诉 Docker 如何构建我们的镜像。

```bash
runoob@runoob:~$ cat Dockerfile 
FROM    centos:6.7
MAINTAINER      Fisher "fisher@sudops.com"

RUN     /bin/echo 'root:123456' |chpasswd
RUN     useradd runoob
RUN     /bin/echo 'runoob:123456' |chpasswd
RUN     /bin/echo -e "LANG=\"en_US.UTF-8\"" >/etc/default/local
EXPOSE  22
EXPOSE  80
CMD     /usr/sbin/sshd -D
```

> 每一个指令都会在镜像上创建一个新的层，每一个指令的前缀都必须是大写的。  
> FROM，指定使用哪个镜像源  
> RUN 指令告诉 docker 在镜像内执行命令，安装了什么。  
> 然后，我们使用 Dockerfile 文件，通过 docker build 命令来构建一个镜像。

#### docker build -t runoob/centos:6.7 .

> -t 指定要创建的目标镜像名  
> . Dockerfile 文件所在目录，可以指定 Dockerfile 的绝对路径  
> 使用 docker images 查看创建的镜像

> *   设置镜像标签  
>     我们可以使用 docker tag 命令，为镜像添加一个新的标签。  
>     docker tag 860c279d2fec runoob/centos:dev

5.3 导出和导入镜像

*   将镜像导出到文件  
    docker export cbe3cb7799ed > update.tar
*   基于导出的文件创建一个新静像（导入镜像）  
    docker import - update < update.tar  
    新镜像为 update
*   镜像的备份和恢复 save 和 load  
    docker save -o update1.tar update  
    备份， -o 输出到文件  
    docker rmi update  
    docker load < update1.tar  
    恢复

5.4 发布镜像  
5.5 删除镜像  
5.6 Docker 镜像扩展

第 6 章 Dockerfile 文件  
6.1 Dockerfile 基本结构  
DockerFile 分为四部分组成：基础镜像信息、维护者信息、镜像操作指令和容器启动时执行指令。例如：

```ruby
#第一行必须指定基于的基础镜像
From ubutu
#维护者信息
MAINTAINER docker_user  docker_user@mail.com
#镜像的操作指令
apt/sourcelist.list
RUN apt-get update && apt-get install -y ngnix 
RUN echo "\ndaemon off;">>/etc/ngnix/nignix.conf
#容器启动时执行指令
CMD /usr/sbin/ngnix
```

6.2 Dockerfile 指令

*   1、From 指令  
    From 或者 From :  
    DockerFile 第一条必须为 From 指令。如果同一个 DockerFile 创建多个镜像时，可使用多个 From 指令（每个镜像一次）
*   2、MAINTAINER  
    格式为 maintainer ，指定维护者的信息
*   3、RUN  
    格式为 Run 或者 Run \[“executable” ,”Param1”, “param2”\]  
    前者在 shell 终端上运行，即/bin/sh -C，后者使用 exec 运行。例如：RUN \[“/bin/bash”, “-c”,”echo hello”\]  
    每条 run 指令在当前基础镜像执行，并且提交新镜像。当命令比较长时，可以使用“/”换行。

> > exec 命令用于调用并执行指令的命令。exec 命令通常用在 shell 脚本程序中，可以调用其他的命令。如果在当前终端中使用命令，则当指定的命令执行完毕后会立即退出终端。  
> > -c：在空环境中执行指定的命令。  
> > 例如：exec -c echo Linux C++

*   4、CMD 指令  
    支持三种格式：  
    CMD \[“executable” ,”Param1”, “param2”\]使用 exec 执行，推荐  
    CMD command param1 param2，在/bin/sh 上执行  
    CMD \[“Param1”, “param2”\] 提供给 ENTRYPOINT 做默认参数。  
    **每个容器只能执行一条 CMD 命令，多个 CMD 命令时，只最后一条被执行。**
    
*   5、EXPOSE  
    格式为 EXPOSE \[……\] 。  
    告诉 Docker 服务端容器暴露的端口号，供互联系统使用。在启动 Docker 时，可以通过-P,主机会自动分配一个端口号转发到指定的端口。使用-P，则可以具体指定哪个本地端口映射过来  
    例如：  
    EXPOSE 22 80 8443
    
*   6、ENV  
    格式为 ENV 。 指定一个环境变量，会被后续 RUN 指令使用，并在容器运行时保持。  
    例如  
    ENV PG_MAJOR 9.3  
    ENV PG_VERSION 9.3.4  
    RUN curl -SL [http://example.com/postgres-$PG_VERSION.tar.xz](http://example.com/postgres-%24PG_VERSION.tar.xz) | tar -xJC /usr/src/postgress && ……  
    ENV PATH /usr/local/postgres-$PG_MAJOR/bin:$PATH
    
*   7、ADD  
    ADD 命令有两个参数，源和目标。它的基本作用是从源系统的文件系统上复制文件到目标容器的文件系统。如果源是一个 URL，那该 URL 的内容将被下载并复制到容器中。  
    ADD \[source directory or URL\] \[destination directory\]  
    ADD /my\_app\_folder /my\_app\_folder
    
*   8、ENTRYPOINT  
    两种格式：  
    ENTRYPOINT \[“executable”, “param1”, “param2”\]  
    ENTRYPOINT command param1 param2 （shell 中执行）。  
    配置容器启动后执行的命令，并且不可被 docker run 提供的参数覆盖。  
    每个 Dockerfile 中只能有一个 ENTRYPOINT ，当指定多个时，只有最后一个起效。
    
*   9、VOLUME  
    格式为 VOLUME \[“/data”\] 。  
    创建一个可以从本地主机或其他容器挂载的挂载点，一般用来存放数据库和需要保持的数据等。
    

11、USER  
格式为 USER daemon 。  
指定运行容器时的用户名或 UID，后续的 RUN 也会使用指定用户。  
当服务不需要管理员权限时，可以通过该命令指定运行用户。并且可以在之前创建所需要的用户，例如： RUN groupadd -r postgres && useradd -r -g postgres postgres 。**要临时获取管理员权限可以使用 gosu ，而不推荐 sudo 。**

*   11、WORKDIR  
    格式为 WORKDIR /path/to/workdir 。  
    为后续的 RUN 、 CMD 、 ENTRYPOINT 指令配置工作目录。  
    可以使用多个 WORKDIR 指令，后续命令如果参数是相对路径，则会基于之前命令指定的路径。例如  
    WORKDIR /a  
    WORKDIR b  
    WORKDIR c  
    RUN pwd  
    则最终路径为 /a/b/c 。
    
*   12、ONBUILD  
    格式为 ONBUILD \[INSTRUCTION\] 。  
    配置当所创建的镜像作为其它新创建镜像的基础镜像时，所执行的操作指令。  
    例如，Dockerfile 使用如下的内容创建了镜像 image-A 。
    

```bash
[…] 
ONBUILD ADD . /app/src 
ONBUILD RUN /usr/local/bin/python-build –dir /app/src 
[…] 
#如果基于A创建新的镜像时，新的Dockerfile中使用 FROM image-A
 指定基础镜像时，会自动执行 ONBUILD 指令内容，
等价于在后面添加了两条指令。
FROM image-A
#Automatically run the following
ADD . /app/src
RUN /usr/local/bin/python-build --dir /app/src
```

使用 ONBUILD 指令的镜像，推荐在标签中注明，例如 ruby:1.9-onbuild 。

*   13 CMD 和 ENTRYPOINT 差异对比  
    两个共同点：  
    都可以指定 shell 或 exec 函数调用的方式执行命令；  
    当存在多个 CMD 指令或 ENTRYPOINT 指令时，只有最后一个生效；  
    差异：  
    差异 1：CMD 指令指定的容器启动时命令可以被 docker run 指定的命令覆盖，而 ENTRYPOINT 指令指定的命令不能被覆盖，而是将 docker run 指定的参数当做 ENTRYPOINT 指定命令的参数。  
    差异 2：CMD 指令可以为 ENTRYPOINT 指令设置默认参数，而且可以被 docker run 指定的参数覆盖；

> ENTRYPOINT 　  
> An ENTRYPOINT allows you to configure a container that will run as an executable.它可以让你的容器功能表现得像一个可执行程序一样。
> 
> > *   例子一：  
> >     使用下面的 ENTRYPOINT 构造镜像:  
> >     ENTRYPOINT \["/bin/echo"\]  
> >     那么 docker build 出来的镜像以后的容器功能就像一个/bin/echo 程序：  
> >     比如我 build 出来的镜像名称叫 imageecho，那么我可以这样用它：  
> >     docker run -it imageecho “this is a test”  
> >     这里就会输出”this is a test”这串字符，而这个 imageecho 镜像对应的容器表现出来的功能就像一个 echo 程序一样。 你添加的参数“this is a test”会添加到 ENTRYPOINT 后面，就成了这样　/bin/echo “this is a test” 。现在你应该明白进入点的意思了吧。
> > *   例子二：  
> >     ENTRYPOINT \["/bin/cat"\]  
> >     构造出来的镜像你可以这样运行(假设名为 st)：  
> >     docker run -it st /etc/fstab  
> >     这样相当： /bin/cat /etc/fstab 这个命令的作用。运行之后就输出/etc/fstab 里的内容。

6.3 镜像构建实战

### [_Docker_实战-编写_Dockerfile_](https://www.baidu.com/link?url=Txd6HF2sXm6ny96Fjxt-N3s5dttG95iZVSuRWtIrXvX89AX_aPaS3cRwHcBTD-JmkqeUeDlJSpewjssg6y-vZ9vK1JcdTFmhBF8rf6uXkC_&wd=&eqid=ba06d5a70003473c000000025b1f9ae9)

```python
[root@docker docker_demo]# cat Dockerfile 
# base image
FROM centos

# MAINTAINER
MAINTAINER json_hc@163.com

# put nginx-1.12.2.tar.gz into /usr/local/src and unpack nginx
ADD nginx-1.12.2.tar.gz /usr/local/src

# running required command
RUN yum install -y gcc gcc-c++ glibc make autoconf openssl openssl-devel 
RUN yum install -y libxslt-devel -y gd gd-devel GeoIP \
 GeoIP-devel pcre pcre-devel
RUN useradd -M -s /sbin/nologin nginx

# mount a dir to container
ONBUILD VOLUME ["/data"]

# change dir to /usr/local/src/nginx-1.12.2
WORKDIR /usr/local/src/nginx-1.12.2

# execute command to compile nginx
RUN ./configure --user=nginx --group=nginx --prefix=/usr/local/nginx \
--with-file-aio  --with-http_ssl_module  --with-http_realip_module    \
--with-http_addition_module    --with-http_xslt_module  \
 --with-http_image_filter_module    --with-http_geoip_module  \
--with-http_sub_module  --with-http_dav_module \
--with-http_flv_module    --with-http_mp4_module \
--with-http_gunzip_module  --with-http_gzip_static_module  \
--with-http_auth_request_module  --with-http_random_index_module  \
 --with-http_secure_link_module   --with-http_degradation_module  \
 --with-http_stub_status_module && make && make install

# setup PATH
ENV PATH /usr/local/nginx/sbin:$PATH

# EXPOSE
EXPOSE 80

# the command of entrypoint
ENTRYPOINT ["nginx"]

CMD ["-g"]
```

第 7 章 Docker 仓库  
7.1 官方仓库 Docker Hub  
7.2 国内镜像仓库  
7.3 私有仓库  
7.4 Registry 原理  
7.5 本章小结  
第 8 章 Docker 容器  
8.1 容器基本操作  
8.2 进入容器内部  
8.3 导出和导入容器  
8.4 容器结构  
8.5 本章小结  
第 9 章 数据卷  
9.1 数据卷是什么  
9.2 为容器挂载数据卷  
9.3 备份、恢复、迁移数据卷  
9.4 容器数据卷扩展  
9.5 本章小结  
第 10 章 网络管理  
10.1 Docker 网络基础  
10.2 Docker 网络模式  
10.3 Docker 网络配置  
10.4 本章小结  
第 3 篇 Docker 进阶实战  
第 11 章 操作系统  
11.1 Alpine 发行版  
11.2 Busybox 发行版  
11.3 Debian/Ubuntu 发行版  
11.4 CentOS/Fedora 发行版  
11.5 CoreOS 发行版  
11.6 RancherOS 发行版  
11.7 本章小结  
第 12 章 编排工具 Compose  
12.1 安装 Docker Compose  
12.2 Compose 命令基础  
12.3 Compose 配置文件  
12.4 Compose 实战  
12.5 本章小结  
第 13 章 Web 服务器与应用  
13.1 Apache 服务器  
13.2 Nginx 服务器  
13.3 Tomcat 服务器  
13.4 其他 Web 服务器  
13.5 本章小结  
第 14 章 数据库  
14.1 MySQL 数据库  
14.2 PostgreSQL 数据库  
14.3 Redis 数据库  
14.4 MongoDB 数据库  
14.5 其他  
14.6 本章小结  
第 15 章 编程语言  
15.1 C/C++语言  
15.2 Golang 语言  
15.3 Java 语言  
15.4 JavaScript（Node.js）语言  
15.5 PHP 语言  
15.6 Python 语言  
15.7 Swift 语言  
15.8 本章小结  
第 16 章 Docker API 介绍  
16.1 认识 Docker API  
16.2 Docker Remote API 介绍  
16.3 其他 API  
16.4 本章小结  
第 17 章 私有仓库  
17.1 Docker Registry 介绍  
17.2 认证与前端  
17.3 企业级私有仓库 Harbor  
17.4 私有仓库前端授权工具 Portus  
17.5 本章小结  
第 18 章 集群网络  
第 19 章 Docker 安全


