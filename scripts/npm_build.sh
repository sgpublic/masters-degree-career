#!/bin/bash

set -e
export RUST_BACKTRACE=full

npm install
npm run build
