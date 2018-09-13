#!/usr/bin/env bash

if [ "$TRAVIS_PULL_REQUEST" != "false" ] ; then
    URL="https://preview.iiif.io/root/$TRAVIS_PULL_REQUEST_BRANCH"
    COMMENT="Branch aviliable for testing at"
    curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/IIIF/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments |grep "$COMMENT";
    if [ $? -eq 1 ]; then
        echo "Adding $COMMENT to issue https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
        curl -H "Authorization: token $GITHUB_TOKEN" -X POST -d "{\"body\": \"$COMMENT $URL\"}" "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
    else
        echo "Not going to add link to pull request as this pull request already has a link."
    fi
else
    echo "Pull request was false";
fi
