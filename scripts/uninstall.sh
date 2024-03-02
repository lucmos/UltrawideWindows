#!/bin/sh
set -eu

cwd="$(pwd)"
cd "$(dirname "${0}")"
. "$(pwd)/common"
cd "${cwd}"

if kpackagetool6 --type KWin/Script --list | grep ${package_name} > /dev/null; then
  sed -i '/UltrawideWindows/d' ~/.config/kglobalshortcutsrc
  kpackagetool6 --type=KWin/Script --remove "${package_name}"
else
  echo "Already uninstalled"
fi
