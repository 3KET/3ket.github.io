#!/bin/sh

# git config --global user.email "${GIT_EMAIL}"
# git config --global user.name "${GIT_USERNAME}"

git config --global credential.helper \
    '!f() { echo "username=$GIT_USERNAME"; echo "password=$GIT_TOKEN"; };f'

sleep infinity
