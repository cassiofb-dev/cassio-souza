---
sidebar_position: 1
---

# Installing Pipewire

Let's see in this section how to install and configure [Pipewire audio server](https://gitlab.freedesktop.org/pipewire/pipewire).

:::note

Alpine Gnome already has installed pulseaudio audio server.

:::

## Intro

This tutorial start point is an Alpine with Gnome installed.

## Steps

1. First we need to prevent pulseaudio start by autospawning so copy the file bellow to your home directory:

```txt title="~/.pulse/client.conf"
autospawn = no
```

2. Install pipewire by running: ``doas apk add wireplumber pipewire pipewire-pulse``
3. Install **Htop** to check if Pipewire is working by running: ``doas apk add htop``
4. Type ``htop`` on console and then press ``F4`` type ``wire``
5. If your result is the same from the image bellow, congratulations!

<p align="center">
    <img alt="alpine start" src="/img/alpine_pipewire.png"/>
    <h3>Alpine wireplumber, pipewire and pipewire-pulse process in htop</h3>
</p>
