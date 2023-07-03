---
sidebar_position: 5
---

# Installing Catppuccin Theme in Wezterm

Let's see in this section how to install Catppucin theme in Wezterm.

## Intro

You will need Wezterm installed, in this tutorial is used the [Flatpak version](https://flathub.org/apps/org.wezfurlong.wezterm).

:::note

This tutorial uses my custom config file, Catppuccin has an [official one here](https://github.com/catppuccin/wezterm).

:::

## Steps

Make a file named ``.wezterm.lua`` on your home directory with the contents bellow.

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

config.color_scheme = 'Catppuccin Frappe'

config.window_background_opacity = 0.88

config.window_decorations = "INTEGRATED_BUTTONS|RESIZE"

config.window_background_gradient = {
  interpolation = 'Linear',

  orientation = 'Vertical',

  blend = 'Rgb',

  colors = {
    '#303446',
    '#292c3c',
  },
}

return config
```

By the end your system should look like this:

<p align="center">
    <img alt="Alpine Gnome Catppuccin Wezterm" src="/img/alpine_gnome_catppuccin_wezterm.png"/>
    <h3>Alpine Gnome Catppuccin Wezterm</h3>
</p>
