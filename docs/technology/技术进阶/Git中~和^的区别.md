# Git 中^和~的区别

---

## 概览

先贴图:

![avatr](/blog_new/technology/git-head.png)

## Git Commit Log

每条线上的雪花点右侧对应的 commitid,都属于该条线,开始和结尾的公共点共同拥有, 可以使用`--decorate`和`--graph`等参数简化 git 提交历史图

    git log --graph --decorate

上图第一条线拥有 `165f5a1->3cb9272->de87e10->b6de943`这几条提交记录:

## HEAD^[num]

用于选择第几条为主线,例如使用:

    git reset --hard HEAD^2

这个将从左往右选取第二条为主线,且回退一个版本,commit-id 将为:

    ae3d768->02c1b1b->b6de943

## HEAD~[num]

用于在当前主线『默认 master』,回退版本,例如使用:

    git reset --hard HEAD~1

这个将选取当前 master 主线,且回退一个版本,commit-id 将为:

    3cb9272->de87e10->b6de943

---

## HEAD^^

这种使用方式 HEAD 后面可以跟多个^,每个表示回退一个版本,效果同 HEAD~[num]

    git reset --hard HEAD^^

这个将选取第一条主线,且回退两个版本,commit-id 将为:

    de87e10->b6de943

---

## HEAD~~

这种使用方式 HEAD 后面可以跟多个~,每个表示回退一个版本,效果同 HEAD~[num]

    git reset --hard HEAD~~

这个将选取第一条主线,且回退两个版本,commit-id 将为:

    de87e10->b6de943
