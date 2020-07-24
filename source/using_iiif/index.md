---
title: "Using IIIF"
id: using_iiif
layout: default
tags: [using_iiif ]

---

# Using IIIF

There are two main components of the framework: **delivering objects** and **viewing them**.

We’ve illustrated the components, how they fit together, and which [APIs]({{ site.url }}{{ site.baseurl }}/using_iiif/api_docs/) are needed for which parts below.

![The IIIF Components]({{ site.url }}{{ site.baseurl }}/img/iiif_components.png "The IIIF Components")


Find out more about how the framework fits together in the [API docs]({{ site.url }}{{ site.baseurl }}/using_iiif/api_docs/) section.

Explore projects people have made through their conference [talks]({{ site.url }}{{ site.baseurl }}/using_iiif/talks/), check out the variety of [tools]({{ site.url }}{{ site.baseurl }}/using_iiif/community_tools/) the community has made to help, or browse [The Cookbook]({{ site.url }}{{ site.baseurl }}/using_iiif/cookbook/), a new community initiative to string together commonly used functions into “recipes” that can be reused easily.


## Who is using IIIF?

We’ve attempted to make a [map of every IIIF implementation](https://www.google.com/maps/d/viewer?mid=1faJRKJpj2Vau__RDwt8af040x0GTVozp&ll=4.340203155220545%2C18.29779899999994&z=2) we’re aware of (if something is missing, please feel free to [let us know](mailto:staff@iiif.io?subject=Add us to the IIIF Map)). Generally, a wide range of institutions adopt IIIF, including:

*   **Aggregators** such as Artstor, JSTOR, CONTENTdm, DPLA, Europeana, the Internet Archive, Wikimedia Foundation, and more.
*   **Universities and research institutions**, including Cambridge University, Ghent University, Harvard University, Kyoto University, University of Michigan, University of St. Andrews, College of Charleston, Stanford University, University of Toronto, and Wellcome Trust, among others.
*   **National libraries** and **archives** like the Library of Congress, the National Library of Qatar, Bibliotheque National de France, the Vatican, and the Egyptian National Library and Archives, and the Blavatnik Foundation Archive.
*   **Museums** such as the British Museum, National Gallery of Art, The J. Paul Getty Trust, the Georgia O’Keefe Museum, and The Walters Art Museum.
*   **Software companies** and **digital agencies**, including Kakadu Software, Gallery Systems, Digirati, Cogapp, and more.

Many who use IIIF's APIs become members of the <a href="{{ site.url }}{{ site.baseurl }}/community/consortium/">IIIF Consortium</a>, sustaining the framework’s growth and serving on various advisory committees.

## Glossary of key IIIF concepts

*   An **Annotation** is a standard way to associate different types of content to whatever is on your canvas (such as a translation of a line or the name of a person in a photograph. In the IIIF model, images and other presentation content are also technically annotations onto a canvas). For more detail, see the [Web Annotation Data Model](http://w3.org/TR/annotation-model/).
*   A **Canvas** is the frame of reference for the display of your content, both spatial and temporal (just like a painting canvas for two-dimensional materials, or with an added time dimension for a/v content)
*   A **Collection** is a set of manifests (or ‘child’ collections) that allow you to communicate hierarchy or gather related things (think of a set of archival boxes that each have folders within them, and photographs within those folders, as one example)
*   An **Image Server** is the computer or service where your digital objects live (basically, where your assets are stored while waiting for users to access them)
*   An **Image Viewer** is software, usually web-based, that allows viewing and manipulation of images. Sometimes called a “client” (this is almost always the tool via which end users interact with IIIF materials, and many image viewers add additional functionality like the ability to add annotations or search through transcriptions/translations, etc.)
*   A **Manifest** is the centre of the IIIF universe. It’s the plan that communicates how to display your digital objects, and what information to display about them, including structure. (A basic example is to think of a book of illustrations, where each illustrated page is a canvas, and there is one specific order to the arrangement of those pages. Keep in mind, the structure of manifests can also be more complex than this.)
*   A **Metadata Source** is the place where the information about objects live, and needs to be connected to your Manifest via the Presentation API (for libraries and museums, this is usually some kind of asset management system, though there are many other possibilities)
*   A **Range** is a particular order of Canvases (as a basic example, think of the order of pages in a book, or the order of tracks on a music album)

{% include acronyms.md %}
