#!/bin/bash

cd $(dirname $0)

python3 -m venv ./.venv
source ./.venv/bin/activate

pip install jieba markdown-it-py

python3 ./jieba_segment.py