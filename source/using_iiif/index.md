---
title: "Using IIIF"
id: using_iiif
layout: default
tags: [using_iiif ]

---

#Using IIIF

There are two main components of the framework: **delivering objects** and **viewing them**.

We’ve illustrated the components, how they fit together, and which <span style="text-decoration:underline;">APIs</span> are needed for which parts below.

![The IIIF Components]({{ site.url }}{{ site.baseurl }}/img/iiif_components.png "The IIIF Components")


Find out more about how the framework fits together in the <span style="text-decoration:underline;">API docs</span> section.

Explore projects people have made through their conference <span style="text-decoration:underline;">talks</span>, check out the variety of <span style="text-decoration:underline;">tools</span> the community has made to help, or browse <span style="text-decoration:underline;">The Cookbook</span>, a new community initiative to string together commonly used functions into “recipes” that can be reused easily.


## Who is using IIIF?

List - institutions, aggregators, etc

This is a teaser list, can connect to “Consortium Members” page


## Glossary of key IIIF concepts



*   An **Annotation** is a standard way to associate different types of content to whatever is on your canvas. For more detail, see the [Web Annotation Data Model](http://w3.org/TR/annotation-model/).
*   A **Canvas** is the frame of reference for the display of your content, both spatial and temporal
*   A **Collection** is a set of manifests (or ‘child’ collections) that allow you to communicate hierarchy or gather related things
*   An **Image Server** is the computer or service where your digital objects live
*   An **Image Viewer** is software, usually web-based, that allows viewing and manipulation of images. Sometimes called a “client”
*   A **Manifest** is the centre of the IIIF universe. It’s the plan that communicates how to display your digital objects, and what information to display about them, including structure.
*   A **Metadata Source** is the place where the information about objects live, and needs to be connected to your Manifest via the Presentation API
*   A **Range** is a particular order of Canvases
