#!/bin/bash

set -e

apt-get update
apt-get install -y python3.11-venv

$(dirname $0)/build.sh
