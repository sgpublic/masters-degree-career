#!/bin/bash

set -e

apt install python3.11-venv

$(dirname $0)/build.sh
