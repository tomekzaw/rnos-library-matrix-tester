#!/usr/bin/env bash
set -u

cd $E2E_APP_PATH

if [ $E2E_PLATFORM == "iOS" ]; then
    if [ $E2E_MODE == "debug" ]; then
        yarn react-native run-ios --configuration Debug --simulator "$E2E_IOS_SIMULATOR_NAME"
    elif [ $E2E_MODE == "release" ]; then
        yarn react-native run-ios --configuration Release --simulator "$E2E_IOS_SIMULATOR_NAME" --no-packager
    fi
elif [ $E2E_PLATFORM == "Android" ]; then
    # TODO: use --mode instead of --variant for 0.71+
    if [ $E2E_MODE == "debug" ]; then
        yarn react-native run-android --variant=debug
    elif [ $E2E_MODE == "release" ]; then
        yarn react-native run-android --variant=release --no-packager
    fi
fi
