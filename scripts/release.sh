#!/bin/sh
set -eu

cwd="$(pwd)"
cd "$(dirname "${0}")"
. "$(pwd)/common"
cd "${cwd}"

zip -r "${package_archive}" contents/ LICENSE metadata.json

echo Packaged in "$(realpath ${package_archive})"
