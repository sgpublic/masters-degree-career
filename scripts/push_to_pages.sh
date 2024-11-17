#!/bin/bash

set -e
set -v

cd build

git init
git remote add origin https://$GITLAB_USER:$GITLAB_TOKEN@$GITLAB_HOST/mhmzx/pgee.git
git checkout -b pages
git add .
git config --global user.email "bot@example.com"
git config --global user.name "bot"
git commit -m "auto update"
git push -f origin pages
