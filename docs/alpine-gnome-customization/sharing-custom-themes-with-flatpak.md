---
sidebar_position: 4
---

# Sharing Custom Themes with Flatpak

Let's see in this section how to install a custom theme in Flatpak.

## Intro

This tutorial uses [Flatseal](https://flathub.org/apps/com.github.tchx84.Flatseal), a awesome GUI for managing Flatpak permissions.

:::note

This tutorial uses Catppuccin Theme installed on the previous section as an example.

:::

## Steps

Flatpak does not have permission to access user themes by default, to enable it follow the steps bellow:

1. Open **Flatseal** and open the **All Applications** tab options.
2. Scroll down to **Filesystem** and **Other files**:
   1. Add ``~/.themes:ro``
   2. Add ``~/.icons:ro``
3. Scroll down to **Environment** and add:
   1. ``GTK_THEME=Catppuccin-Frappe-Standard-Mauve-dark``
   2. If you have a custom icon theme: ``GTK_ICONS=Your-Icon-Theme-Name``
   3. And if you have a custom cursor theme: ``XCURSOR_THEME=Your-Cursor-Theme-Name``
4. Congratulations! Close and open your Flatseal, it should look like the image bellow.

<p align="center">
    <img alt="Alpine Gnome Catppuccin Frappe Flatpak" src="/img/alpine_gnome_catppuccin_flatpak.png"/>
    <h3>Alpine Gnome Catppuccin Frappe Flatpak</h3>
</p>