#!/bin/sh
sed -i '/UltrawideWindows/d' ~/.config/kglobalshortcutsrc
plasmapkg2 --type=kwinscript -r .
zip -r movewindowtocenter.kwinscript contents/ LICENSE metadata.desktop
plasmapkg2 --type=kwinscript -i .
mkdir -p ~/.local/share/kservices5
ln -sf ~/.local/share/kwin/scripts/ultrawidewindows/metadata.desktop ~/.local/share/kservices5/ultrawidewindows.desktop
kwin_x11 --replace &

