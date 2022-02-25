---
title: IIIF Consortium
id: consortium
layout: page
hero:
    image: 'assets/uploads/consortium_map.png'
breadcrumbs:
 - label: Community
   link: /community/
---

{{ theme.block-start }}

## About the Consortium

The IIIF Consortium (IIIF-C) unites a growing number of global research libraries, national libraries, archives, software companies, digital agencies, and aggregators with a set of shared goals:

*   Providing researchers--and other audiences--an unprecedented level of uniform and rich access to digitized image, audio, and video resources hosted around the world
*   Defining and maintaining a community-driven set of APIs that support interoperability between repositories
*   Developing, cultivating, and documenting shared technologies that provide a world-class user experience in viewing, comparing, manipulating, and annotating digitized visual and audio materials

The Consortium was formed in 2015 by 11 institutions: University of Oxford, the British Library, Stanford University, Artstor (now ITHAKA), Die Bayerische Staatsbibliothek (The Bavarian State Library), Cornell University, La Bibliothèque Nationale de France (The National Library of France), Nasjonalbiblioteket (The National Library of Norway), Princeton University, Wellcome Trust, and Yale University.

While IIIF’s origins are in libraries, the community includes museums, archives, commercial design and technology companies, and image services of all types, creating new opportunities for exchange and collaboration across sectors.

{% assign members = site.data.institutions | where_exp: "org", 'org.iiifc == 1 or org.iiifc == 2 or org.iiifc == 3 or org.iiifc == 4' %}

The IIIF-C now comprises [{{ members.size }} members]({{ site.root_url | absolute_url }}/community/consortium/members/) around the world who have signed the [IIIF-C Memorandum of Understanding]({{ site.root_url | absolute_url }}/community/consortium/mou), committing to support the growth and adoption of IIIF, including:

{% assign logos = site.data.institutions | where_exp: "org", 'org.original == true'  | sample: 11 %}

{% include blocks/logo-grid.html items=logos %}

<div class="columns is-centered">{% include misc/button.html button_label="View all members" button_link="/community/consortium/members" %}</div>


{{ theme.block-end }}

{{ theme.block-center-start }}

## Join
Membership is open to universities, libraries, museums, archives, vendors, and others who have an interest in supporting the framework. Multiple levels of membership include a range of benefits.   
<br>
<div class="columns is-centered">{% include misc/button.html button_label="Learn more" button_link="/community/consortium/join" %}</div>

{{ theme.block-end }}

{{ theme.block-start }}


## Oversight
The Consortium is guided by three committees which members may join:

*   [Executive Committee]({{ site.root_url | absolute_url }}/community/consortium/consortium_committees/#executive-committee) - Steering strategic direction and budget approval, this committee meets twice annually. Initially it was composed of staff from the first eleven founding members of the Consortium, plus two additional elected members. Starting in 2021, seats on this committee are elected annually by the Consortium membership to staggered terms.
*   [Operating Committee]({{ site.root_url | absolute_url }}/community/consortium/consortium_committees/#operating-committee) - A group selected from Executive Committee institution staff consisting of a Chair, Vice-Chair, and Treasurer along with three members at large who meet monthly to ensure the strategic direction set by the Executive Committee is being achieved.
*   [Technical Review Committee]({{ site.root_url | absolute_url }}/community/consortium/trc) - This committee is made up of appointees from Consortium member institutions with technical backgrounds, who vote monthly to approve or reject proposed changes to the specifications, cookbook recipes, and technical community groups.

