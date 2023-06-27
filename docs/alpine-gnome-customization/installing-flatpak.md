---
sidebar_position: 2
---

# Installing Flatpak

Let's see in this section how to install [Flatpak](https://www.flatpak.org/) on Alpine Linux to enable [Flathub](https://flathub.org/) apps.

## Intro

To start just open your terminal and follow the steps bellow, as it is really easy and short to install Flatpak I'll show some useful apps.

## Steps

1. Install Flatpak by running: ``doas apk add flatpak``
2. Add Flathub repository:
```bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```
3. Congratulations! Restart and starting using Flatpak.

## Useful Flatpaks

1. [Flatseal](https://flathub.org/apps/com.github.tchx84.Flatseal): Flatpak manager
2. [Firefox](https://flathub.org/apps/org.mozilla.firefox): Mozilla official Firefox distribution
3. [Wezterm](https://flathub.org/apps/org.wezfurlong.wezterm): A GPU-accelerated cross-platform terminal emulator and multiplexer
4. [OBS](https://flathub.org/apps/com.obsproject.Studio): Live streaming and video recording software
5. [Helvum](https://flathub.org/apps/org.pipewire.Helvum): Patchbay for PipeWire
