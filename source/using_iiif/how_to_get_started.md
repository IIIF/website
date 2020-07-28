---
title: "How to get started"
id: how_to_get_started
layout: default
tags: [how_to_get_started ]

---

# How to get started

There are two main IIIF modes: you’re either a **consumer** of digital delights served up using IIIF technologies, or, you’re the **plumber**, setting up images and servers and all that. You may be both!



*   If you’re not sure what you need, please review this helpful [PDF questionnaire for people considering using IIIF]({{ site.url }}{{ site.baseurl }}/assets/acc_implementation_questionnaire_011017.pdf) by Jason Ronallo, Sara Brumfield and Ben Brumfield


## Core features of IIIF


### Deliver digital objects, send pixels



*   [Package up bytes]({{ site.url }}{{ site.baseurl }}/using_iiif/api_docs/#image) - Image API
*   [Attach metadata and structure]({{ site.url }}{{ site.baseurl }}/using_iiif/api_docs/#presentation) - Presentation API
*   [Add authentication]({{ site.url }}{{ site.baseurl }}/using_iiif/api_docs/#authentication) - Auth API


### View content in the right order



*   <span style="text-decoration:underline;">Pan & Zoom</span>
*   <span style="text-decoration:underline;">Rotate & Resize</span>
*   <span style="text-decoration:underline;">Annotate</span> with text, audio, location, etc
*   <span style="text-decoration:underline;">Compare side-by-side</span> from two collections
*   <span style="text-decoration:underline;">Search metadata</span>


### The basics of setting up

To get your images online using IIIF you’ll need **high quality images** (most people use JP2 or TIF files), and **metadata** about structure and the information people will read about the image.

The steps you’ll need to follow are:

1. Make images available using the **[Image API]({{ site.url }}{{ site.baseurl }}/using_iiif/api_docs/#image)** and an **[IIIF image server]({{ site.url }}{{ site.baseurl }}/demos/image_servers)** or a IIIF-compatible image server from a vendor or other web host
2. Combine your images and structural data (like pagination or ordering) from your metadata source into a **IIIF manifest** using the **[Presentation API]({{ site.url }}{{ site.baseurl }}/using_iiif/api_docs/#presentation)**. (This is probably the most challenging part)
3. Choose a **[Viewer]({{ site.url }}{{ site.baseurl }}/demos/image_viewers)** to show your images. Tell your friends!
4. If you want to tackle more, check out the other two APIs: **[Authentication]({{ site.url }}{{ site.baseurl }}/using_iiif/api_docs/#authentication)** and **[Search]({{ site.url }}{{ site.baseurl }}/using_iiif/api_docs/#search)**.
