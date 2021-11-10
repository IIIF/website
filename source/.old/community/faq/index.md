---
title: IIIF Frequently Asked Questions (FAQs)
id: consortium
layout: sub-page
---

{% capture content %}

## What is IIIF?

IIIF is an initialism that stands for the International Image Interoperability Framework (IIIF). 

When people talk about IIIF, they're usually referring to one of two things (and often both):

- a set of open standards that help archives, libraries, and museums make the most of their digitized collections with deep zoom, annotation capabilities, and more, and
- the community of users and developers who work everyday to enrich the IIIF ecosystem and advocate for its adoption.

The [IIIF community][community-list] is comprised of and driven by libraries, museums, archives, software companies, and other organizations working together to create, test, refine, implement, and promote the IIIF specifications. (See also ["Who is part of the IIIF community?"](#who-is-part-of-the-iiif-community))

The IIIF standards are a set of shared application programming interface (API) specifications for interoperable functionality in digital asset repositories. Using JSON-LD, linked data, and standard W3C web protocols such as Web Annotation, IIIF makes it easy to parse and share digitized materials, migrate across technology systems, and provide enhanced image access for scholars and researchers. 

In short, IIIF enables better, faster and cheaper image delivery. It lets you leverage interoperability and the fabric of the Web to access new possibilities and new users for your image-based resources, while reducing long term maintenance and technological lock in. IIIF gives users a rich set of baseline functionality for viewing, zooming, and assembling the best mix of resources and tools to view, compare, manipulate and work with images on the Web, an experience made portable--shareable, citable, and embeddable. 

## What are the benefits of IIIF?

To see how IIIF serves other institutions and researchers, check out the [Demos]({{ page.webprefix }}/apps-demos/#implementation-demos) section of this site, and don't miss the [IIIF Awesome list][awesome]{:.external} for lots of links to tools, demos, tutorials, and other resources.

IIIF allows for:

 * Advanced, interactive functionality for end users
    * Fast, rich, zoom and pan delivery of images
    * Manipulation of size, scale, region of interest, rotation, quality and format.
    * Annotation - IIIF has native compatibility with the W3C annotation working group’s [Web Annotation Data Model][wadm], which supports annotating content on the Web. Users can comment on, transcribe, and draw on image-based resources using the Web’s inherent architecture.
    * Assemble and use image-based resources from across the Web, regardless of source. Compare pages, build an exhibit, or view a virtual collection of items served from different sites.
    * Cite and Share - IIIF APIs provide motivation for persistence, providing portable views of images and/or regions of images. Cite an image with confidence in stable image URIs, or share it for reference by others--or yourself in a different environment.
 * Support for institutional authentication
    * IIIF is designed to support access control and can leverage existing SSO systems, via the [IIIF Authentication API][auth]
 * System flexibility
   * Use any IIIF-compatible software for viewing, comparing and manipulating images, regardless of the back-end server. Swap parts of the stack at any time, or run multiple components in parallel at once.
 * Easy data transfer and sharing
    * IIIF is standards-based, uses RESTful API construction, JSON-LD, and follows Web patterns, simplifying processes for data migration and sharing
 * Avoidance of vendor lock-in, complicated migrations, and system overhauls
    * IIIF provides the ability to separate image delivery user interfaces from back end data stores, allowing repositories the ability to update image servers and databases without changing front end delivery, or vice versa, avoiding the need to re-architect the entire stack. With an active and growing community of organizations developing and supporting IIIF-compatible technologies, there are plenty of software options to choose from.
 * Reduction of long term total costs
    * A rich ecosystem of interoperable software, including many high quality, open source options, keeps licensing and operational costs low and predictable over time.
 * Combining content from across repositories
    * Unify presentation of content from many different stores (within or outside your institution) without complex or expensive system or data migrations. Bring together content from your institutional DAM, library digital collections, and external sources.
 * Publish once, re-use often
    * Deliver images from your own site for manifold uses; host a single copy and embed in other sites. No need to transfer images to others for them to locally load for one off analysis or republishing.  
 * A thriving global network
    * Join a global network of image suppliers making content available in a common , interoperable framework. Tap a growing suite of software tools and platforms. Maximize the use of your images on the Web. Unlock new potential with interoperability.

## Who is part of the IIIF community?

The IIIF Community encompasses a large and growing group of interested and active individuals and organizations dedicated to leading and sustaining the IIIF. 
 
As a community-driven initiative, IIIF thrives on active discussion, input, and feedback from a wide array of diverse individuals from libraries, museums, cultural heritage institutions, software firms, and other organizations working with digital images and audio/visual materials. We welcome any organization or individual interested in adopting the IIIF, developing software to support it, or giving feedback on the effort to get involved. Participants in all IIIF activities are expected to follow the IIIF [code of conduct][conduct]. The [list of known IIIF community participants][community-list] is always growing. Additionally, the IIIF Consortium (IIIF-C) provides sustainability and steering for the initiative. For more information about the IIIF-C, see the [Consortium page][iiif-c] and [IIIF-C FAQ][iiifc-faq].

## How can I participate in the IIIF Community?

Please see the [IIIF Community page][community-list] for details on how to get involved.

## What are the current IIIF specifications?

 * [Image API][image] -- Delivers the pixels of an image in a simple and intuitive way that easily specifies the region, size, rotation, quality characteristics and format of the requested image
 * [Presentation API][presentation] -- Delivers just enough data about digital assets and their structure to drive a compelling viewer experience
 * [Content Search API][search] -- Provides ability to search within the transcription (OCR) or translation text associated with a document
 * [Authentication API][auth] -- Allows lightweight handling of authentication workflows

Also in the works is a [IIIF Discovery API][discovery] which will allow users to easily find and engage with content available via existing IIIF APIs.

##  How do the IIIF APIs relate to my current, internal interoperability layer?

Some institutions implement IIIF using shims, or translation layers, on top of their existing interoperability layer.  In other cases, IIIF is implemented without dependencies on existing services. IIIF provides for different levels of compliance, beginning with the IIIF Image API. For more information, please see [IIIF technical details][tech-details].  

## Does IIIF replace or integrate with my Digital Asset Management (DAM) software?

IIIF is a method for delivery of assets, not storage. Integration with your DAM software is dependent on your DAM provider. The IIIF community encourages DAM software providers to incorporate native IIIF support into their products.

## Does the IIIF Consortium serve as an aggregator of IIIF content?

No, the IIIF Consortium and wider community does not have a single aggregation platform for content.  IIIF defines APIs that allow for interoperability between digital image repositories, including aggregators.  Because the IIIF APIs are well documented and understood, use of IIIF can enable aggregators such as Artstor, DPLA, and Europeana to access your images more easily.  

## Does IIIF handle audio/visual materials (time-based media)?

Yes! Version 3 of the Presentation API (currently in Beta release) allows for time-based media to be added to presentation canvases, and for annotations to be addressed to particular moments or sections of the time dimension for those materials. 

## Does IIIF do 3D?

There is no formal IIIF specification for 3D objects at this point, but there is an active and thriving [IIIF 3D Community group][3d] keeping tabs on what's happening with 3D in the cultural heritage and STEM communities.


{% endcapture %}

{% include section.html class="step quick-start" content=content %}

[search]: {{ page.webprefix }}/api/search/
[presentation]: {{ page.webprefix }}/api/presentation/
[image]: {{ page.webprefix }}/api/image/
[discovery]: {{ page.webprefix }}/api/discovery/
[apps-demos]: {{ site.url }}{{ site.baseurl }}/apps-demos
[iiifc-faq]: {{ site.url }}{{ site.baseurl }}/community/consortium/faq
[iiif-c]: {{ site.url }}{{ site.baseurl }}/community/consortium
[community-list]: {{ site.url }}{{ site.baseurl }}/community/
[auth]: {{ page.webprefix }}/api/auth/
[wadm]: https://www.w3.org/TR/2017/REC-annotation-model-20170223/
[conduct]: {{ site.url }}{{ site.baseurl }}/event/conduct/
[av]: {{ site.url }}{{ site.baseurl }}/community/groups/av/
[tech-details]: {{ site.url }}{{ site.baseurl }}/technical-details/
[awesome]: https://github.com/IIIF/awesome-iiif
[3d]: {{ site.url }}{{ site.baseurl }}/community/groups/3d/