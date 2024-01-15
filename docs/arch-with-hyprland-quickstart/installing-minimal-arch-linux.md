---
sidebar_position: 1
---

# Installing Minimal Arch Linux

In this tutorial we will use [Hyprdots](https://github.com/prasanthrangan/hyprdots) and for this we first will need a minimal Arch linux install.

:::note

If something is not working for you
please open an issue [on this repository](https://github.com/cassiofb-dev/cassio-souza).

:::

## Intro

This tutorial teaches how to install a minimal Arch Linux with [archinstall](https://archinstall.archlinux.page/). You will need a bootable drive and Arch iso:

- [Arch Linux Downloads](https://archlinux.org/download/)
- [Ventoy Downloads](https://www.ventoy.net/en/download.html)

<p align="center">
    <img alt="Arch Linux ISO Start Screen" src="/img/arch_install.png"/>
    <h3>Arch Linux ISO Start Screen</h3>
</p>

## Steps

You can also check the [video with full installation process and a short showcase here](https://www.youtube.com/watch?v=Laa4XG4tDv0).

1. Type ``archinstall`` and follow the guided tutorial. Only remember these:
   1. Bootloader: GRUB
   2. Profile: minimal
   3. Audio: No audio server
2. After finishing the install remove the installation media and reboot.
3. Install git: ``sudo pacman -Sy git``
4. Download the config repo: ``git clone --depth 1 https://github.com/prasanthrangan/hyprdots ~/Hyprdots``
5. CD into the script folder: ``cd ~/Hyprdots/Scripts``
6. Install by following the guided script: ``./install.sh`` (this will take some time)
7. Congrats! You finished did it.

<p align="center">
    <img alt="Arch Linux Hyprdots - Login Screen" src="/img/arch_hyprdots.png"/>
    <h3>Arch Linux Hyprdots - Login Screen</h3>
</p>
