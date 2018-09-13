#!/usr/bin/env bash

if [ "$TRAVIS_PULL_REQUEST" != "false" ] ; then
    COMMENT="Test it at https://preview.iiif.io/root/$TRAVIS_BRANCH"
    echo "Adding $COMMENT to issue https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST_BRANCH}/comments"
    curl -H "Authorization: token $GITHUB_TOKEN" -X POST -d "{\"body\": \"$COMMENT\"}" "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
else
    echo "Pull request was false";
fi
