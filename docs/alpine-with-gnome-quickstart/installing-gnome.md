---
sidebar_position: 2
---

# Installing Gnome

Let's see in this section how to install Gnome on Alpine Linux.

## Intro

When you start a standard Alpine image your screen should look like this:

<p align="center">
    <img alt="Alpine Standard Image Start Screen" src="/img/alpine_standard.png"/>
    <h3>Alpine Standard Image Start Screen</h3>
</p>

## Steps

With all setup you can follow the steps bellow to install Gnome:

1. Type your username login
2. Type your password
3. Update the index of available packages by running: ``doas apk update``
4. Upgrade the currently installed packages by running: ``doas apk upgrade``
5. Install nano by running: ``doas apk add nano``
6. Enable community packages running: ``doas nano /etc/apk/repositories``
7. Remove the ``#`` on the community repository in the last line
8. Save the file by pressing ``CTRL + X`` then ``y`` and then ``enter``
9. Check if the ``#`` is removed from the last line by running: ``nano /etc/apk/repositories``
10. Update the index of available packages again by running: ``doas apk update``
11. Start the desktop script by typing: ``doas setup-desktop``
12. Install Gnome by typing: ``gnome``
13. Congratulations! Reboot your system and Gnome will start!

<p align="center">
    <img alt="Alpine Gnome Start Screen" src="/img/alpine_gnome.png"/>
    <h3>Alpine Gnome Start Screen</h3>
</p>
