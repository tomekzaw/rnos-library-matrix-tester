#!/usr/bin/env bash
set -u

cd $E2E_APP_PATH
yarn appium &
until $(curl --output /dev/null --silent --head --fail http://127.0.0.1:4723/wd/hub/sessions); do
    sleep 1
done
