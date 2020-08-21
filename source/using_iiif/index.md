---
title: "Using IIIF"
id: using_iiif
layout: default
tags: [using_iiif ]

---

# Using IIIF
You’re either a **user** of digital objects served using IIIF technologies, allowing you to view, compare, search within, and annotate. Or, you’re a **developer**, setting up image and audio/visual files, servers, and APIs to make digital objects available to the world.

* If you’re a **user**, start with our [guide](https://medium.com/@IIIF_io/how-to-use-iiif-resources-and-image-viewers-bd378a68b013) to working with IIIF materials.

* If you’re a **developer** and not sure what you need to get started, you can use this community-generated [questionnaire](http://localhost:4000/assets/acc_implementation_questionnaire_011017.pdf) to help determine a path forward.

Explore projects people have made through their conference [talks]({{ site.url }}{{ site.baseurl }}/using_iiif/talks/), take a look at a [few illustrated case study examples]({{ site.url }}{{ site.baseurl }}/demos/case_studies/), check out the variety of [tools]({{ site.url }}{{ site.baseurl }}/using_iiif/community_tools/) the community has made to help, or browse [The Cookbook]({{ site.url }}{{ site.baseurl }}/using_iiif/cookbook/), a new community initiative to string together commonly used functions into “recipes” that can be reused easily.


<div id="announce-list">

## Glossary of key IIIF concepts

*   An **Annotation** is a standard way to associate different types of content to whatever is on your canvas (such as a translation of a line or the name of a person in a photograph. In the IIIF model, images and other presentation content are also technically annotations onto a canvas). For more detail, see the [Web Annotation Data Model](http://w3.org/TR/annotation-model/).
*   A **Canvas** is the frame of reference for the display of your content, both spatial and temporal (just like a painting canvas for two-dimensional materials, or with an added time dimension for a/v content)
*   A **Collection** is a set of manifests (or ‘child’ collections) that allow you to communicate hierarchy or gather related things (think of a set of archival boxes that each have folders within them, and photographs within those folders, as one example)
*   An **Image Server** is the computer or service where your digital objects live (basically, where your assets are stored while waiting for users to access them)
*   An **Image Viewer** is software, usually web-based, that allows viewing and manipulation of images. Sometimes called a “client” (this is almost always the tool via which end users interact with IIIF materials, and many image viewers add additional functionality like the ability to add annotations or search through transcriptions/translations, etc.)
*   A **Manifest** is the centre of the IIIF universe. It’s the plan that communicates how to display your digital objects, and what information to display about them, including structure. (A basic example is to think of a book of illustrations, where each illustrated page is a canvas, and there is one specific order to the arrangement of those pages. Keep in mind, the structure of manifests can also be more complex than this.)
*   A **Metadata Source** is the place where the information about objects live, and needs to be connected to your Manifest via the Presentation API (for libraries and museums, this is usually some kind of asset management system, though there are many other possibilities)
*   A **Range** is a particular order of Canvases (as a basic example, think of the order of pages in a book, or the order of tracks on a music album)

</div>

{% include acronyms.md %}

## Core features of IIIF
![IIIF Interoperability]({{ site.url }}{{ site.baseurl }}/img/interoperable_bit.png "Interoperable bit")

<!-- We’ve illustrated the components, how they fit together, and which [APIs]({{ site.url }}{{ site.baseurl }}/using_iiif/api_docs/) are needed for which parts below.

![The IIIF Components]({{ site.url }}{{ site.baseurl }}/img/iiif_components.png "The IIIF Components")
 -->
There are two main components of the framework: delivering digital objects (like images and audio/visual files) to sites, and viewing them.

### Delivering digital objects
* The Image API packages up bytes and sends digital objects to a viewer
* The Presentation API attaches metadata and structure to digital objects, defining how they appear in viewers
* The Authentication API defines where or by who your objects can be viewed

### Viewing content
* IIIF-compatible viewers allow users to pan, zoom, rotate, and resize objects
* Some viewers allow annotation with text, audio, location, and more
* Compare objects from a single collection side-by-side (or compare objects from multiple collections if the object’s Manifest is made available)
* When the Search API has been implemented, users can search within an object’s metadata

### The basics of setting up IIIF images
To get your images online using IIIF you’ll need high-quality images (most people use JP2 or TIF files), and metadata about structure as well as the information people will read about the image. IIIF works with all metadata schemas.  

Next, you’ll need to:
* Make images and audio/video materials available using the Image API and an IIIF image server, or a IIIF-compatible image server from a vendor or other web host
* Combine your images and structural data (like pagination or ordering) from your metadata source into a IIIF manifest using the Presentation API. (This is probably the most challenging part.)
* Choose a viewer to show your images.
* Consider making your image manifests available publicly so users can work with your images across collections.
* If you want to tackle more, check out the other two APIs: Authentication and Search.
