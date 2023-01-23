#!/usr/bin/env bash
set -u

if [ $E2E_MODE == "debug" ]; then
    cd $E2E_APP_PATH
    yarn start &
fi
