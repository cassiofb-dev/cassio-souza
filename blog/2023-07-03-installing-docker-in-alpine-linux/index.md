---
date: 2023-07-03T00:00
slug: installing-docker-in-alpine-linux
title: Installing Docker in Alpine Linux
description: This post will be quick but with two awesome tools installation (docker and lazydocker)!
authors: [cassio]
tags: [development, docker]
---

Hi, Cassio's here!

This post will be quick but with two awesome tools installation ([Docker](https://www.docker.com/) and [Lazydocker](https://github.com/jesseduffield/lazydocker))!

<!-- truncate -->

To get it all setup on your Alpine Linux just run the following:

```sh
doas apk add docker docker-cli docker-cli-compose lazydocker

doas usermod -aG docker <Your User>

doas rc-update add docker
```

Reboot and it should be done! Lazydocker is an amazing way to manage docker containers, [check it out](https://github.com/jesseduffield/lazydocker)!
