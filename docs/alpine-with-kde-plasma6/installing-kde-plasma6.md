---
sidebar_position: 2
---

# Installing KDE Plasma 6

Let's see in this section how to install KDE Plasma 6 on Alpine Linux.

## Intro

When you start a standard Alpine image your screen should look like this:

<p align="center">
    <img alt="Alpine Standard Image Start Screen" src="/img/alpine_standard.png"/>
    <h3>Alpine Standard Image Start Screen</h3>
</p>

## Steps

With all setup you can follow the steps bellow to install KDE Plasma:

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
12. Install Plasma by typing: ``plasma``
13. Congratulations! Reboot your system and Plasma 6 will start!

<p align="center">
    <img alt="Alpine Plasma Start Screen" src=""/>
    <h3>Alpine Plasma Start Screen</h3>
</p>
