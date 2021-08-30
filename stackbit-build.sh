#!/usr/bin/env bash

set -e
set -o pipefail
set -v

echo "stackbit-build.sh: start build"

# fetch data from CMS through stackbit-pull
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/60323df295aa610015b59f66 --stackbit-api-key="bd48a94d051a6ed548c6627e74e2075f911d90abe3b7ded6ca5f0249aa5ce996"

# build site
npm run build

echo "stackbit-build.sh: finished build"
