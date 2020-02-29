#!/bin/sh

sed -i '/UltrawideWindows/d' ~/.config/kglobalshortcutsrc
plasmapkg2 --type=kwinscript -r .
zip -r movewindowtocenter.kwinscript contents/ LICENSE metadata.desktop
plasmapkg2 --type=kwinscript -i .
kwin --replace &
