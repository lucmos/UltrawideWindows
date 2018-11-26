#!/bin/sh

plasmapkg2 --type=kwinscript -r .
zip -r movewindowtocenter.kwinscript contents/ LICENSE metadata.desktop
plasmapkg2 --type=kwinscript -i .
