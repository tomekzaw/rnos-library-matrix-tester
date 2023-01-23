#!/usr/bin/env bash
set -u

: "${E2E_ARCHITECTURE}" # bound variable

node SelectArchitecture.js
