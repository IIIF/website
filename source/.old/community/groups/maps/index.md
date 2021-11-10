---
title: "IIIF Maps Community Group"
layout: default
tags: []

---

{% include next_call.html group="IIIF Maps" %}

## About

Digitized maps and geo-located images represent some of the best ways of connecting end users with critical context about the historical and changing face of the physical world. Given the increasing prevalence and utility of IIIF compliance for digitized assets and the fact the digitized maps represent a large and important facet of material made available via IIIF, there is a growing need for better ways of working with IIIF assets in geospatial tools, and connecting those assets to the broader world of geospatial resources. The same is true of geo-located images which are now being generated in various ways including via crowdsourcing and more manual methods of associating an image with a geographical location. 

This group will work on defining best practice in associating geographical information with IIIF materials. This may include recipes but also more in depth work to align efforts to link IIIF maps to geospatial systems. The group will explore creating a JSON schema with the needs of the IIIF community, including how to incorporate this connective schema with IIIF manifests. It will also explore the utility and possibilities related to a shim or proxy service that would help connect assets served via the IIIF Image API to the Web Map Service (WMS) standard protocol widely used for delivery of geographic assets. 

If successful, the work will enable greater interoperability of geospatial assets in IIIF contexts, and will broaden the reach of IIIF interoperability into new domains. 


## Goals

This group will look at improving the support for digitised maps and geolocated images available through IIIF and connecting it with other standards in the Geospatial domain. In particular it will focus on:

 * Create best practice for using IIIF with geolocated images and maps including the creation of recipes
 * Look at interoperability between IIIF and other Geospatial standards e.g. WMS 
 * Investigate a JSON based schema that could be used to represent an image in geographic space through the use of a IIIF extension. 
 * Investigate what is needed to create a proxy between WMS and a IIIF Image server
 * Transforming annotations from an image coordinate space to a geo-coordinate space 
 
## Organization

**Chairs:**
 * Bert Spaan - Freelance
 * Eliot Jordan - Princeton University
 * Stace Maples - Stanford University

**Communication Channels:**

  * Monthly calls - see [IIIF Community Calendar][iiif-calendar] for details
  * Virtual meetings announced on the [IIIF-Discuss][iiif-discuss] email list
  * General discussion on the [#maps IIIF Slack channel][slack]

**Call Notes and Group Documents**

IIIF Maps Group Folder ([https://drive.google.com/drive/folders/12XGcqb1qQp64C9BggoDuXGOFS317Jk8D](https://drive.google.com/drive/folders/12XGcqb1qQp64C9BggoDuXGOFS317Jk8D))

**Call Connection Information:**

 * Online: [https://stanford.zoom.us/j/99449304468][zoom-link]

[iiif-discuss]: https://groups.google.com/forum/#!forum/iiif-discuss "IIIF-Discuss Forum"
[slack]: http://bit.ly/iiif-slack
[iiif-calendar]: {{ site.url }}{{ site.baseurl }}/community/groups/
[international-zoom]: https://zoom.us/zoomconference
[zoom-link]: https://stanford.zoom.us/j/99449304468?pwd=UUNzMmFtV2dXSWs2MjVicnplS29LUT09

{% include acronyms.md %}
