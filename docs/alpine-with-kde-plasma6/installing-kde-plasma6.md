---
sidebar_position: 2
---

# Installing KDE Plasma 6

Let's see in this section how to install KDE Plasma 6 on Alpine Linux.

## Intro

After installing Alpine standard image you can proceed to turn on so that now you can install Plasma 6.

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
9. Check if the ``#`` is removed from the last line by running: ``cat /etc/apk/repositories``
10. Start the desktop script by typing: ``doas setup-desktop``
11. Install Plasma by typing: ``plasma``
12. Congratulations! Reboot your system and Plasma 6 will start!

:::note

Alpine Plasma setup is really minimal, it's recommended that you install Dolphin file manager:

```sh
doas apk add dolphin
```

:::
