---
title: How To Use IIIF Resources and Image Viewers
id: using_iiif_resources
layout: post
author: IIIF-C Staff
date: Last updated 2020-04-07
---
# How to use IIIF resources and Image Viewers to work with images across collections

You may have heard about IIIF (pronounced "triple eye eff", which stands for the International Image Interoperability Framework) and you may have seen the IIIF logo on websites but did you know that you can take that IIIF resource and use it in another viewer or compatible tool? Different IIIF tools have different features, for example Mirador will allow annotation but the UniversalViewer supports Audio/Visual. This guide aims to show you the ways to find the `IIIF Manifest` and open it in a compatible IIIF tool.

## Table of Contents
{:.no_toc}

* Goes Here
{:toc}

## IIIF Manifest
The prime unit in IIIF is something called a Manifest. You can think of this as the package or envelope which contains links to all of the resources that make up a IIIF item, just like a manifest that lists passengers or cargo -- in this case, the cargo is the digital resource. This IIIF Manifest is what is shown in a Viewer and is usually the thing that can be imported into viewers and other tools. A IIIF Manifest usually represents a physical object such as a book, an artwork, a newspaper issue, etc., but it doesn't have to.

This IIIF Manifest itself is accessible via a URL that points to a document online (in a format called JSON, or JavaScript Object Notation) which a IIIF tool can read and display.


## Finding a IIIF Manifest URL

There are various ways to find a manifest URL, and this is easier on some websites than others. The main method is to look for the IIIF logo:

<img class="img-center" src="{{ site.url }}{{ site.baseurl }}/img/logo-iiif-34x30.png" alt="IIIF Logo"/>

Many institutions provide the IIIF logo which can be dragged into another viewer. See this example below where content is dragged from the Yale Centre for British Art and the Bodleian Library to an instance of the [IIIF Mirador viewer](https://projectmirador.org/).

<img class="img-standout" src="https://miro.medium.com/max/2850/1*9BOu0u6fmgjCqpC_3JQgZQ.gif" alt="Video showing Drag and Drop in Mirador"/>

(from a more detailed [blog by Drew Winget on drag and drop](https://medium.com/@aeschylus/create-and-share-iiif-items-quickly-and-easily-with-drag-and-drop-over-email-879f13c9caba)).

This is also possible using the [UniversalViewer](https://universalviewer.io/) which is another popular IIIF viewer:

<!--<img class="img-standout" src="{{ site.url }}{{ site.baseurl }}/explainers/images/tools/UV2Mirador.gif" alt="A gif showing drag and drop"/> -->
<div class="video-container">
<iframe class="video" src="https://www.youtube-nocookie.com/embed/UVM0taaT0B0" allow="encrypted-media" allowfullscreen></iframe>
</div>    

The drag and drop functionality works relatively well but does have some issues particularly in regards to accessibility and with interfaces without a mouse. To address these concerns the IIIF community has been working on a new API called [Content State](https://iiif.io/api/content-state) which offers a number of different ways to transfer content between viewers. This API is still in development so the examples below mostly use the drag and drop method.

## IIIF Tools
Many institutions that use IIIF will use one of the common IIIF Viewers and you may recognize either Mirador or the UniversalViewer in a page you are viewing. Here is a guide to importing and exporting from the different IIIF Viewers and tools.

### Mirador

Mirador is an Open-source, web based, multi-window image viewing platform with the ability to zoom, display, compare and annotate images from around the world. It comes in two major versions. Version 2 has been around for a number of years and is in production in many institutions. Version 3 was released in 2020 and is under active development. A number of institutions are running version 3 in production.

A demo instance of Mirador can be found at [https://projectmirador.org/](https://mirador-dev.netlify.app/__tests__/integration/mirador/).

#### Mirador 2

**Export**:
In Mirador The Manifest URL can be found by clicking the `info` button in Mirador and scrolling to the bottom of the metadata window. This can be copied and pasted into another viewer or another instance of Mirador. In the example below the URL is copied and then pasted using the UV demo URL.

<div class="video-container">
<iframe class="video" src="https://www.youtube-nocookie.com/embed/_P9TBJIY4UM" allow="encrypted-media" allowfullscreen></iframe>
</div>    

**Import**:
 * Method 1: Drag and drop

As seen earlier it is possible to drag a IIIF logo into a Mirador window to open up the IIIF Manifest.

 * Method 2: Paste URL

As well as the drag and drop method there is also a more reliable paste from URL option. To do this navigate to the ‘Replace options’ screen and paste the URL into the box at the top right labeled `Add new object from URL`. See the following video:

<div class="video-container">
<iframe class="video" src="https://www.youtube-nocookie.com/embed/R33IJtil8tg" allow="encrypted-media" allowfullscreen></iframe>
</div>    

#### Mirador 3

**Export**

Exporting in Mirador 3 is similar to Mirador 2 in that the URL to the Manifest is in the metadata panel. To access this click the information button on the top left. You should find the manifest at the bottom of the panel.

<div class="video-container">
<iframe class="video" src="https://www.youtube-nocookie.com/embed/splaQ6kWw2M" allow="encrypted-media" allowfullscreen></iframe>
</div>    

**Import:**
To add a manifest, click the big blue plus sign at the top right. This gives you a list of resources that are currently loaded into Mirador 3. To add another click the ‘Add resources’ button at the bottom and this will give you the option to add a URL to a manifest.

<div class="video-container">
<iframe class="video" src="https://www.youtube-nocookie.com/embed/0KEiGkkNVnM" allow="encrypted-media" allowfullscreen></iframe>
</div>    

### Universal Viewer (UV)

The Universal Viewer is a popular IIIF viewer particularly prevalent in National Cultural Heritage Institutions. It has more of a view-only feel compared to Mirador but can display a variety of different IIIF presentations (as well as many other kinds of media). For more details see [UniversalViewer.io](https://universalviewer.io/).

**Export:**

This is a similar example to the drag and drop but the IIIF logo is hidden in either the Embed or the Share button usually found at the bottom left of the UV. Note the UV can be themed so the text or location can be different.

<div class="video-container">
<iframe class="video" src="https://www.youtube-nocookie.com/embed/UVM0taaT0B0" allow="encrypted-media" allowfullscreen></iframe>
</div>    

**Import:**

Note this requires you to get the URL to the manifest and paste it into the following UniversalViewer demo site:

[https://universalviewer.io/uv.html?manifest=](https://universalviewer.io/uv.html?manifest=)[manifest url]

<div class="video-container">
<iframe class="video" src="https://www.youtube-nocookie.com/embed/_P9TBJIY4UM" allow="encrypted-media" allowfullscreen></iframe>
</div>    

### Tify
Tify has been developed by the University of Göttingen and is a good general purpose IIIF viewer. Source code and further details are available on: [https://github.com/tify-iiif-viewer/tify](https://github.com/tify-iiif-viewer/tify)

**Export:**
The Tify viewer makes this easy by providing an export button at the top right of the viewer. Simply click this button and you should see the URL to the Manifest towards the bottom. Copy this and you can use it in another viewer.

<div class="video-container">
<iframe class="video" src="https://www.youtube-nocookie.com/embed/5FtXo3mHXlU" allow="encrypted-media" allowfullscreen></iframe>
</div>    

**Import:**

Like the Universal Viewer, Tify also has a demo page where you can pass a manifest in the URL:

[https://demo.tify.rocks/demo.html?manifest=](https://demo.tify.rocks/demo.html?manifest=)[manifest url]

### IIIF Curation Viewer
This is a powerful IIIF Viewer that was developed in Japan and in addition to the general viewer functions such as page movement and zooming, it also cuts and collects parts of images from multiple items.

**Export:**
To export a manifest from the IIIF Curation Viewer click the information button on the top right. This shows the URL to the manifest but with chrome there was some issue with copying the URL.

<div class="video-container">
<iframe class="video" src="https://www.youtube-nocookie.com/embed/JHD_pvDK46M" allow="encrypted-media" allowfullscreen></iframe>
</div>    

**Import:**

If you navigate to:

[http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/](http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/)

You can drop the IIIF logo on to the viewer and it will load the content. It also supports loading by passing the manifest through the URL:

[http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=](http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=)[manifest url]

### Diva.js
Diva.js is a fast lightweight IIIF viewer and is available from the [Diva.js website](https://ddmal.music.mcgill.ca/diva.js/).

**Export:**
Similar to Mirador, Diva.js makes the IIIF Manifest available through the metadata panel. Simply click the luggage tag icon on the top right to open the Metadata panel and the IIIF Manifest link should be at the bottom of the screen. See the video below:

<div class="video-container">
<iframe class="video" src="https://www.youtube-nocookie.com/embed/gImYrRvW7DA" allow="encrypted-media" allowfullscreen></iframe>
</div>    

**Import:**
The demo instance of Diva.js available below helpfully provides a text box where you can paste a URL to a IIIF Manifest. Once you have the URL in the box click ‘Load IIIF Manifest’ to see it in Diva. Demo site:

[https://ddmal.music.mcgill.ca/diva.js/try/iiif-external.html](https://ddmal.music.mcgill.ca/diva.js/try/iiif-external.html)

## Quick links

Below are list of links to viewers including links where you can add your own manifests:

 * [Mirador 2](https://projectmirador.org/) - [http://www.getty.edu/art/collection/static/viewers/mirador/?manifest=](http://www.getty.edu/art/collection/static/viewers/mirador/?manifest=)
 * [Mirador 3](https://mirador-dev.netlify.com/)
 * [UniversalViewer](https://universalviewer.io/examples/) - [https://universalviewer.io/uv.html?manifest=](https://universalviewer.io/uv.html?manifest=)
 * [Tify](https://demo.tify.rocks/demo.html?manifest=https://manifests.sub.uni-goettingen.de/iiif/presentation/PPN857449303/manifest) - [https://demo.tify.rocks/demo.html?manifest=](https://demo.tify.rocks/demo.html?manifest=)
 * [IIIF Curation Viewer](http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/) - [http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=](http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=)
 * [Diva.js](https://ddmal.music.mcgill.ca/diva.js/try/iiif-external.html)
