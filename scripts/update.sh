#!/bin/sh
set -eu

cwd="$(pwd)"
cd "$(dirname "${0}")"
. "$(pwd)/common"
cd "${cwd}"

"$(dirname "${0}")"/uninstall.sh
"$(dirname "${0}")"/release.sh

kpackagetool6 --type=KWin/Script --install "${package_archive}"
kwriteconfig6 --file kwinrc --group Plugins --key "${package_name}Enabled" true
dbus-send --type=signal --dest=org.kde.KWin /KWin org.kde.KWin.reloadConfig
# Wait until the config is reloaded, otherwise the loadScript
# command below doesn't work and the script doesn't activate.
# Seems like 1 sec sleep is enough
sleep 1
loaded=$(qdbus org.kde.KWin /Scripting org.kde.kwin.Scripting.loadScript "${package_name}")
if [ "${loaded}" -ne 1 ]; then
  echo >&2 "Failed to load ${package_name}. Try to logout and login again"
  exit 1
fi

# Reload the configuration and make the shortcuts appear in the kglobalshortcutsrc
# without having to logout and log back in
qdbus org.kde.kglobalaccel /component/kwin org.kde.kglobalaccel.Component.cleanUp > /dev/null
