#!/bin/bash

set -e

$(dirname $0)/jieba_segment.sh
$(dirname $0)/npm_build.sh
