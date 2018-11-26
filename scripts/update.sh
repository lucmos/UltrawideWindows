#!/bin/sh

plasmapkg2 --type=kwinscript -r .
./release.sh
plasmapkg2 --type=kwinscript -i .
