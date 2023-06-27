---
sidebar_position: 3
---

# Installing Dracula Theme in Gnome

Let's see in this section how to install a custom theme on Gnome.

## Intro

The theme in this tutorial is [Dracula Theme](https://draculatheme.com/), my favorite color palette.

## Steps

1. Open [Dracula Theme GTK](https://draculatheme.com/gtk) link and follow the steps (rename **gtk-master** folder to **Dracula**).
2. On **Gnome Extensions** enable **user themes**
3. Make sure the right theme and icon theme are set on **Gnome Tweaks**
4. Copy the folder ``~/.themes/Dracula/gtk-4.0`` into ``~/.config`` (delete the folder if exists)
5. Copy the contents in the folder ``~/.themes/Dracula/gnome-shell/v40`` outside it (replace all files)
6. Got to [this link](https://github.com/odziom91/libadwaita-theme-changer) and follow steps (**Dracula** should be the only option)
7. Congratulations! Your system should be like the image bellow.

<p align="center">
    <img alt="alpine start" src="/img/alpine_gnome_dracula.png"/>
    <h3>Alpine Gnome with Dracula Theme</h3>
</p>

## Sharing Custom Themes with Flatpak

Flatpak does not have permission to access user themes by default, to enable it follow the steps bellow:

1. Open **Flatseal** and open the **All Applications** tab options.
2. Scroll down to **Filesystem** and **Other files**:
   1. Add ``~/.themes:ro``
   2. Add ``~/.icons:ro``
3. Scroll down to **Environment** and add:
   1. ``GTK_THEME=Dracula``
   2. ``GTK_ICONS=Dracula``
   3. And if you have a custom cursor theme: ``XCURSOR_THEME=Your-Cursor-Theme-Name``
4. Congratulations! Close and open your Flatseal, it should look like the image bellow:

<p align="center">
    <img alt="alpine start" src="/img/alpine_gnome_dracula_flatpak.png"/>
    <h3>Alpine Gnome Dracula Flatpak</h3>
</p>

## Wezterm Dracula Theme

It's possible to use custom theme config on Wezterm, to enable this copy the file bellow to your home directory.

:::caution

I highly recommend to install a custom mouse theme and share it on Flatseal to avoid pointer issues.<br />
I use [Bibata Modern Classic](https://github.com/ful1e5/Bibata_Cursor).

:::

```lua title=".wezterm.lua"
local wezterm = require 'wezterm'

local config = {}

if wezterm.config_builder then
  config = wezterm.config_builder()
end

config.color_scheme = 'Dracula (Official)'

config.window_background_opacity = 0.88

config.window_decorations = "INTEGRATED_BUTTONS|RESIZE"

config.window_background_gradient = {
  interpolation = 'Linear',

  orientation = 'Vertical',

  blend = 'Rgb',

  colors = {
    '#282a36',
    '#44475a',
  },
}

return config
```

By the end your system should look like this:

<p align="center">
    <img alt="alpine start" src="/img/alpine_gnome_dracula_wezterm.png"/>
    <h3>Alpine Gnome Dracula Wezterm</h3>
</p>
