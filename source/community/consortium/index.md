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
## About the Consortium

The IIIF Consortium was formed in 2015 by 11 institutions: University of Oxford, the British Library, Stanford University, Artstor (now ITHAKA), Die Bayerische Staatsbibliothek (The Bavarian State Library), Cornell University, La Bibliothèque Nationale de France (The National Library of France), Nasjonalbiblioteket (The National Library of Norway), Princeton University, Wellcome Trust, and Yale University.

Today, the consortium unites a growing number of research libraries, national libraries, archives, software companies, digital agencies, and aggregators with a set of shared goals:

*   Providing researchers--and other audiences--an unprecedented level of uniform and rich access to digitized image, audio, and video resources hosted around the world
*   Defining and maintaining a community-driven set of APIs that support interoperability between repositories
*   Developing, cultivating, and documenting shared technologies that provide a world-class user experience in viewing, comparing, manipulating, and annotating digitized visual and audio materials

While IIIF’s origins are in libraries, the community is expanding organically to include museums, archives, commercial design and technology companies, and image services of all types, creating new opportunities for exchange and collaboration across sectors.

{% assign members = site.data.institutions | where_exp: "org", 'org.iiifc == 1 or org.iiifc == 2 or org.iiifc == 3 or org.iiifc == 4' %}

The IIIF-C now comprises {{ members.size }} full and associate members across the globe who have signed the [IIIF-C Memorandum of Understanding](/community/consortium/mou), committing to support the growth and adoption of IIIF. 

## Oversight
There are three committees that oversee the Consortium's operations:

*   [Executive Committee]({{ site.root_url | absolute_url }}/community/consortium/consortium_committees/#executive-committee) - Steering strategic direction and budget approval, this committee meets twice annually and is composed of staff from the first eleven founding members of the Consortium, plus two additional elected members. Starting in 2020, seats on this committee will begin opening to new members by vote.
*   [Operating Committee]({{ site.root_url | absolute_url }}/community/consortium/consortium_committees/#operating-committee) - A group consisting of a Chair, Vice-Chair, Secretary, and Treasurer selected from the Executive Committee who meet monthly to ensure the strategic direction set by the Executive Committee is being achieved.
*   [Technical Review Committee]({{ site.root_url | absolute_url }}/community/consortium/trc) - This committee is made up of appointees from Consortium member institutions with technical backgrounds, who vote monthly to approve or reject proposed changes to the specifications, cookbook recipes, and technical community groups.

## Members
The IIIF Consortium--like our community--is global.

<div style="width: 100%; margin: 0 auto;">
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1_ios5waTvJLj4qIL0o5kAxFjKi2ijLd-" style="width: 100%; height: 480px;"></iframe>
</div>
<br>
{% include misc/button.html button_label="View all members" button_link="/community/consortium/members" %}

## Join the Consortium
Membership is open to universities, libraries, museums, archives, vendors, and others who have an interest in supporting the framework. Multiple levels of membership are available.
<br>
{% include misc/button.html button_label="Join the Consortium" button_link="/community/consortium/join" %}
