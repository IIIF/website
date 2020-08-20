---
title: "Image Servers"
id: "image servers"
layout: default
tags: [image servers ]

---

# Image Servers

Here are a few of the most popular IIIF image servers, though there are many possible options:

*   [Loris](https://github.com/loris-imageserver/loris) - A IIIF image server written in Python.
*   [IIPImage Server](http://iipimage.sourceforge.net/documentation/server/) - IIPImage Server is a high-performance image server for web-based streamed viewing and zooming of high-resolution images, written in C++.
*   [Cantaloupe](https://cantaloupe-project.github.io/) - Cantaloupe is an open-source dynamic image server for on-demand generation of derivatives of high-resolution source images, written in Java.
*   [serverless-iiif](https://github.com/nulib/serverless-iiif) - A IIIF Image API 2.1 server as an AWS Serverless Application.


## Making an existing image server IIIF compatible

Many existing image servers can be made compatible with serving images into the IIIF ecosystem with a simple “shim”.

### Example Shims

*   [Shimmy](https://github.com/mejackreed/shimmy) - Ruby gem designed to help you build shims for the IIIF Presentation API. Built by Jack Reed.
*   [ContentDM Image translator](https://github.com/azaroth42/pi3f/tree/master/shims/ContentDM) - Makes ContentDM images available through IIIF. Python. Built by Rob Sanderson.
*   [Flask-IIIF](https://github.com/inveniosoftware/flask-iiif) - Flask extension to support IIIF in Python/Flask applications. Built by [16 contributors](https://github.com/inveniosoftware/flask-iiif/graphs/contributors).

You should also check out the [Awesome IIIF page on Github](https://github.com/IIIF/awesome-iiif). That’s a community-driven compendium of all things IIIF, and there’s a ton of stuff to explore related to the above categories and more.
