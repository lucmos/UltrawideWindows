#!/bin/sh
set -eu

cwd="$(pwd)"
cd "$(dirname "${0}")"
. "$(pwd)/common"
cd "${cwd}"

"$(dirname "${0}")"/uninstall.sh
"$(dirname "${0}")"/release.sh

kpackagetool6 --type=KWin/Script --install "${package_archive}"

if [ "$(pgrep --count --full --list-full kwin_wayland)" -gt 0 ]; then
  kwin_wayland --replace &
else
  kwin_x11 --replace &
fi
