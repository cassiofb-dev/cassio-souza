---
sidebar_position: 3
---

# Installing Fonts, Wi-Fi, Bluetooth and Flatpak

Let's see in this section how to install Fonts, Wi-Fi, Bluetooth and Flatpak in Alpine Linux.

:::note

This section was made based on those pages of Alpine Wiki:

1. [Alpine Wiki Fonts](https://wiki.alpinelinux.org/wiki/Fonts)
2. [Alpine Wiki NetworkManager](https://wiki.alpinelinux.org/wiki/NetworkManager)
3. [Alpine Wiki Wifi](https://wiki.alpinelinux.org/wiki/Wi-Fi)
4. [Alpine Wiki Bluetooth](https://wiki.alpinelinux.org/wiki/Bluetooth)
5. [Alpine Wiki Pipewire Bluetooth Audio](https://wiki.alpinelinux.org/wiki/PipeWire#Bluetooth_audio)
6. [Alpine Wiki Flatpak](https://wiki.alpinelinux.org/wiki/Flatpak)

:::

## Intro

Now that you have Alpine with Plasma 6 installed you can setup extra stuffs like fonts, wifi and bluetooth.

## Steps

### 1) Basic fonts support

If you need more fonts or a specific font, checkout the first link.

```sh
doas apk add font-terminus font-inconsolata font-dejavu font-noto font-noto-cjk font-awesome font-noto-extra
```

### 2) Wi-Fi

We will use wpa_supplicant for this, if you want IWD, checkout the second and third links.

1. Install network manager wifi support: ``doas apk add networkmanager-wifi``
2. Add network manager service: ``doas rc-update add networkmanager default``
3. Install wpa_supplicant: ``doas apk add wpa_suppplicant``
4. Add your user to plugdev group: ``doas adduser <your user> plugdev``
5. Remove network from boot: ``doas rc-update del networking boot``
6. Remove wpa_supplicant from boot: ``doas rc-update del wpa_supplicant boot``

Edit you Network Manger config like this:

```txt title="/etc/NetworkManager/NetworkManager.conf"
[main] 
dhcp=internal
plugins=ifupdown,keyfile

[ifupdown]
managed=true

[device]
wifi.scan-rand-mac-address=yes
wifi.backend=wpa_supplicant
```

Edit your network interfaces like this:

```txt title="/etc/network/interfaces"
auto lo
iface lo inet loopback
```

Done, now you can reboot!

### 3) Bluetooth

If you need support for a specific bluetooth device checkout the 4th and 5th links.

1. Add your user to lp group: ``doas adduser <your user> lp``
2. Install basic packages: ``doas apk add bluez bluez-openrc pipewire-spa-bluez``
3. Install hidapi: ``doas apk add hidapi``
4. Load hidapi module: ``doas modprobe uhid``
5. Add bluetooth service: ``doas rc-update add bluetooth``

Done, now you can reboot!

### 4) Flatpak

As Alpine is a distro with [busybox](https://www.busybox.net/) userspace and [OpenRC](https://github.com/OpenRC/openrc) init system a lot of softwares does not have support or will not run fine on Alpine. For other apps that are not core we can use flatpak sandbox to execute them.

1. Install GTK portal: ``doas apk add xdg-desktop-portal-gtk``
2. Install flatpak: ``doas apk add flatpak``
3. Add flatpak repo: ``flatpak remote-add --user --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo``

Done, now you can reboot.
You have now access to all apps on [flathub](https://flathub.org/)!
