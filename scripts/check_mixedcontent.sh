#!/bin/bash


echo "Running mixed content report"
phantomjs --debug=true files/report-mixed-content.js _site/test/index.html
echo "report finsihed."
