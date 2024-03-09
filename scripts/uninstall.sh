#!/bin/sh
set -eu

cwd="$(pwd)"
cd "$(dirname "${0}")"
. "$(pwd)/common"
cd "${cwd}"

isScriptLoaded="$(qdbus org.kde.KWin /Scripting org.kde.kwin.Scripting.isScriptLoaded "${package_name}")"
if [ "${isScriptLoaded}" = "true" ]; then
  echo "Unloading ${package_name}"
  qdbus org.kde.KWin /Scripting org.kde.kwin.Scripting.unloadScript "${package_name}" > /dev/null
fi

if kpackagetool6 --type KWin/Script --list | grep ${package_name} > /dev/null; then
  kpackagetool6 --type=KWin/Script --remove "${package_name}"
  kwriteconfig6 --file kwinrc --group Plugins --key "${package_name}Enabled" --delete
  # Cleanup the shortcuts after having them removed
  qdbus org.kde.kglobalaccel /component/kwin org.kde.kglobalaccel.Component.cleanUp > /dev/null
  # Reload the configuration
  dbus-send --type=signal --dest=org.kde.KWin /KWin org.kde.KWin.reloadConfig
  # Wait for the config to be reloaded - required, otherwise the update.sh script
  # (that is calling uninstall.sh first) sometimes fails
  sleep 1
else
  echo "Already uninstalled"
fi
