---
title: IIIF Consortium announces new extensions for working with digitized maps
author: IIIF-C Staff
date: 2023-05-15
tags: [news, announcements]
layout: post
excerpt: >
  New capabilities unlocked include photo geotagging, map-based search result navigation, and georectification of historical maps.
subtitle: >
  New capabilities unlocked include photo geotagging, map-based search result navigation, and georectification of historical maps.
---

_New capabilities unlocked include photo geotagging, map-based search result navigation, and georectification of historical maps._

---

{% include content/inline-image.html image="assets/uploads/allmaps.png" image_link="https://viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fimages%2Fde355aec39f77556" alt_text="The Allmaps viewer" caption="An example of the Georeference extension as seen in the Allmaps viewer showing a 1948 view of Zutphen, Netherlands" %}

The IIIF Consortium and the IIIF [Maps Technical Specification Group (TSG)](https://iiif.io/community/groups/maps-tsg/) are pleased to announce the publication of the [Georeference Extension specification](https://iiif.io/api/extension/georef/). This extension builds on the [IIIF Presentation API 3.0]({{ site.api_url | absolute_url }}/presentation/3/), which provides a standardized way to describe and annotate digital objects. The extension unlocks new capabilities for working with digitized maps, including the ability to overlay any IIIF-compliant map image on top of a standard web map with no specialized GIS software or file formats required. This new specification makes it possible to use any IIIF-compliant image in a mapping context (for example, as a base layer for historical town and city views) and unlocks other functionality like the ability to search for collection items via map-based interfaces.



{% include content/inline-image.html image='assets/uploads/chronoscope.png' image_link='https://mprove.de/chrono?q=38.69319,-90.4133&z=10.1&t=13&m=HL7766478&d=1' alt_text="Chronoscope World view of a rectified map" caption='Chronoscope World view of a rectified map.' %}

This process of connecting historical maps to modern ones &mdash; known as [georeferencing](https://en.wikipedia.org/wiki/Georeferencing) &mdash; previously required complex, and often proprietary tools to warp historical maps to align with modern spatial projections. Now, with the IIIF georeference extension, browser-based tools can warp map images with only a IIIF item URL and few control points on a web map interface. 

One such tool is [Allmaps](https://allmaps.org/) from Bert Spaan and Jules Schoonman, two contributors to the new specification. Allmaps provides a graphic interface for curating, georeferencing, and exploring IIIF maps, based on open source components others can use to create similar interfaces. Allmaps takes as input IIIF URLs from anywhere in the world, and saves all the data required for the map transformations in the form of IIIF annotations that connect pixel coordinates of the image to spatial coordinates on a map. A process that used to entail GeoTIFFs that could be gigabytes in size can now be accomplished with a few kilobytes of plain text.

{% include content/inline-image.html image='assets/uploads/navplace-viewer.png' image_link='http://map.rerum.io/?iiif-content=https://iiif.io/api/cookbook/recipe/0154-geo-extension/manifest.json' alt_text="The IIIF NavPlace viewer from the Research Computing Group" caption='The IIIF NavPlace viewer from the Research Computing Group at Saint Louis University showing a geotagging example using the IIIF navPlace extension.' %}

### Related IIIF map work

The georeference extension builds on previous work from the Maps TSG, including the [navPlace extension](https://iiif.io/api/extension/navplace/) published in October of 2021. NavPlace allows IIIF objects to be associated with geographic coordinates for use cases like:

* Linking IIIF resources to geographic areas (e.g., geo-tagging photo locations)
* Supplying a geographic bounding box for an image of a map
* Representing locations that appear in digital objects, such as itineraries or travel journals

The [Maps TSG](https://iiif.io/community/groups/maps-tsg/) was [chartered in June 2020](https://iiif.io/community/groups/maps-tsg/charter/), and has completed in record time its goal of publishing the navPlace and georeferencing extensions. 

{% include content/inline-image.html image='assets/uploads/maptime.png' image_link='http://map.rerum.io/?iiif-content=https://iiif.io/api/cookbook/recipe/0154-geo-extension/manifest.json' alt_text="The IIIF Map and Timeline demo" caption='The IIIF Map and Timeline demo from Mike Appleby shows how to combine the IIIF navPlace and navDate properties in a single view.' %}

The group will continue on for the time being to promote the work and to create additional cookbook recipes and tutorials for how to make the best use of spatial assets in a IIIF context. This work will be featured at the [IIIF Annual Conference](https://iiif.io/event/2023/naples/schedule/) in Naples, Italy, June 7 and 8.

We would like to thank the co-chairs of the IIIF Maps groups, the many IIIF community members who contributed to the development of these extensions, as well as the IIIF Editors for guiding the process to publication.

#### **Getting started with IIIF and Maps**

Explore the new extensions with the following resources:

* Guide: 
  * [Using the navPlace Extension With Leaflet](https://guides.iiif.io/guides/navplace/)
* Tools:
    * [Allmaps](https://allmaps.org/)
    * [Rerum navPlace Viewer](http://map.rerum.io/?iiif-content=)
    * [The IIIF Map and Timeline demo](https://mikeapp.github.io/maptime-demo/?iiif-content=https://mikeapp.github.io/manifest-fixtures/collection/test.json)
* Cookbook recipes:
    * [Locate a Manifest on a Web Map](https://iiif.io/api/cookbook/recipe/0154-geo-extension/)
    * [Locate Multiple Canvases on a Web Map](https://iiif.io/api/cookbook/recipe/0240-navPlace-on-canvases/)


### Questions?

Please contact [staff@iiif.io](mailto:staff@iiif.io).
