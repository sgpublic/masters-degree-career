#!/bin/bash

set -e

apt install python3-venv

$(dirname $0)/build.sh
