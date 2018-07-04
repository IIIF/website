#!/bin/bash


mkdir files
cd files
curl -O https://raw.githubusercontent.com/acdha/phantomjs-mixed-content-scan/master/report-mixed-content.js

chmod 755 report-mixed-content.js

./report-mixed-content.js ../_site/test/index.html

rm report-mixed-content.js
cd ..
rmdir files
