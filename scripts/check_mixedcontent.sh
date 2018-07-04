#!/bin/bash


mkdir files
cd files
curl -O https://raw.githubusercontent.com/acdha/phantomjs-mixed-content-scan/master/report-mixed-content.js

chmod 755 report-mixed-content.js
echo "Running mixed content report"
pwd
ls ../_site/test/
./report-mixed-content.js ../_site/test/index.html
echo "report finsihed."
rm report-mixed-content.js
cd ..
rmdir files
