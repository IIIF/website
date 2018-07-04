#!/bin/bash


echo "Running mixed content report"
find _site/text -name "*.html" | while read line;
do
    echo "Testing $line"
    phantomjs files/report-mixed-content.js $line
done
echo "report finsihed."
