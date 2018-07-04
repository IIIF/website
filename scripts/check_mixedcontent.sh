#!/bin/bash


echo "Running mixed content report"
find _site/test -name "*.html" | xargs phantomjs scripts/report-mixed-content.js ;
echo "report finsihed."
