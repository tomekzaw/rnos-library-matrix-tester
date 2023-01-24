#!/usr/bin/env bash
set -u

cd $E2E_APP_PATH

# install SWM libraries
yarn add \
    react-native-reanimated@3.0.0-rc.10 \
    react-native-gesture-handler@2.9.0 \
    yarn add react-native-screens@3.19.0 \
    yarn add react-native-svg@13.7.0 \
    yarn add react-native-safe-area-context@4.5.0

# install patch-package
yarn add --dev patch-package postinstall-postinstall

# install linters
yarn add --dev prettier

# install E2E testing tools
yarn add appium webdriverio@7
