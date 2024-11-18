#!/bin/bash

set -e

apt update
apt install -y python3.11-venv

$(dirname $0)/build.sh
