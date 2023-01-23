#!/usr/bin/env bash
set -u

: "${E2E_APP_PATH}" # bound variable

node EditPackageJson.js
