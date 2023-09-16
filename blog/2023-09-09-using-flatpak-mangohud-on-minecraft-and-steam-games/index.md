---
slug: using-flatpak-mangohud-on-minecraft-and-steam-games
title: Using Flatpak MangoHud on Minecraft (PolyMC) and Steam Games
description: Today I'll share how to use Flatpak MangoHud on Minecraft and Steam games.
authors: [cassio]
tags: [review, hardware, smartphone]
---

Hi, Cassio here!

Today I'll share how to use Flatpak MangoHud on Minecraft and Steam games.

<!-- truncate -->

## Setup

:::note

MangoHud already is installed together with Steam Flatpak, but it's not enabled by default.

:::

1. Install [Flatseal](https://flathub.org/apps/com.github.tchx84.Flatseal)
2. Check if **MangoHud** is already installed by running: ```flatpak list```
   1. Choose the branch with the highest version
   2. List all flatpak apps again to make sure the install is done

### Enabling all MangoHud stats variables

1. Open **Flatseal**
2. Go to the application you want to run MangoHud
3. Paste this on **enviroment variables**: ```MANGOHUD_CONFIG=full```

![Flatseal Mangohud Example](https://i.imgur.com/JVqkHSY.png)

## Steam

1. Open your **Steam library**
2. Click on the **Gear Icon**
3. Click on **Properties...**
4. Paste in **Launch Options**:
```sh
mangohud gamemoderun %command%
```
5. Done!

### Screenshot in Baldur's Gate 3

![Steam Mangohud Screenshot](https://i.imgur.com/IHJq6D1.jpg)

## Minecraft (PolyMC)

1. Open **Settings**
2. Click on **Custom Commands**
3. Paste in **Wrapper command**: 
```sh
gamemoderun /usr/lib/extensions/vulkan/MangoHud/bin/mangohud --dlsym
```
4. Done!

### Screenshot in Minecraft (PolyMC)

![PolyMC Mangohud Screenshot](https://i.imgur.com/voOsZJe.png)
