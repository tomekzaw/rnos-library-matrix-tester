#!/usr/bin/env bash
set -u

: "${E2E_RUNTIME}" # bound variable

node SelectRuntime.js
