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
The IIIF Consortium (IIIF-C) unites a growing number of global research libraries, national libraries, archives, software companies, digital agencies, and aggregators with a shared vision and mission:

### Vision Statement
 * Build and sustain a global community to provide richer access to the world's image, audio/visual, and 3D digital content now and for the future.

### Mission Statement
 * The International Image Interoperability Framework Consortium (IIIF-C) shepherds the development and implementation of IIIF as a global standard for describing and delivering images, audio/visual, and 3D digital content over the web through collaboration across cultural heritage and research communities, knowledge organizations, and service providers around the world.

The Vision and Mission support the four strategic pillars as outlined in the 2026-2028 IIIF Consortium [Strategic Plan]({{ site.root_url | absolute_url }}/community/consortium/strategic_plan_26-28/):

### Pillar 1: Advocacy & Leadership
 * IIIF-C will grow to become a global leader in advocating for the interoperability of image, audio/visual, and 3D digital content for cultural heritage research and beyond.

### Pillar 2: Technical Development
 * IIIF-C will facilitate increasing the number of interoperable systems.

### Pillar 3: Scholarship & Community Development
 * The IIIF-C will systematically invest in lowering barriers and connecting community members.

### Pillar 4: Membership & Value
 * The IIIF-C will re-evaluate its membership model with an eye toward a more equitable structure and increasing the number of IIIF-C memberships and revenue.

{% assign iiifc_members = site.data.institutions | where_exp: "org", 'org.iiifc == 1 or org.iiifc == 2 or org.iiifc == 3 or org.iiifc == 4' %}

## How to Join
The IIIF-C now comprises [{{ iiifc_members.size }} members]({{ site.root_url | absolute_url }}/community/consortium/members/) around the world who support the IIIF-C through financial contributions and participation in the broader IIIF community. Membership is open to universities, libraries, museums, archives, vendors, and others who have an interest in supporting the framework. Multiple levels of membership include a range of benefits, and all support the central goal of ensuring the sustainability of IIIF. You can find more information on how to join and the conveyed benefits of membership on the ["How to Join"]({{ site.root_url | absolute_url }}/community/consortium/join/) page.

The IIIF community is extremely active in developing, sharing and implementing a wealth of IIIF compatible tools used extensively across the cultural heritage and research communities, knowledge organizations, and service providers around the world.

The Consortium provides a crucial backbone to this development in managing the maintenance and evolution of the IIIF specifications on which these developments rest.  Without this level of care, the IIIF ecosystem would become vulnerable. We therefore recommend all institutions implementing IIIF consider the significant value of becoming consortium members. You will be helping to secure the resilience and longevity of your infrastructure, and ongoing support for your community of users.

## Governance
The Consortium is guided by three committees which members may join:

 * [Executive Committee]({{ site.root_url | absolute_url }}/community/consortium/consortium_committees/#executive-committee) - Steering strategic direction and budget approval, the thirteen institution committee is elected for staggered terms from Full Consortium members..
 * [Operating Committee]({{ site.root_url | absolute_url }}/community/consortium/consortium_committees/#operating-committee) - Elected from within the Executive Committee, the Operating Committee is comprised of a Chair, Vice-Chair, and Treasurer along with three members at large. 
 * [Technical Review Committee]({{ site.root_url | absolute_url }}/community/consortium/trc) - This committee is made up of appointees from Consortium member institutions with technical backgrounds, who vote monthly to approve or reject proposed changes to the specifications, cookbook recipes, and technical community groups.

The [IIIF-C staff]({{ site.root_url | absolute_url }}/community/consortium/staff/) provide the day-to-day management of the IIIF Consortium is provided by the Managing Director, Communications and Community Coordinator, and Technical Coordinator who are employed under the auspices of the Executive Committee.

## Consortium Origins
The Consortium was formed in 2015 by 11 institutions: University of Oxford, the British Library, Stanford University, Artstor (now ITHAKA), Die Bayerische Staatsbibliothek (The Bavarian State Library), Cornell University, La Bibliothèque Nationale de France (The National Library of France), Nasjonalbiblioteket (The National Library of Norway), Princeton University, Wellcome Trust, and Yale University.
While IIIF’s origins are in libraries, the community includes museums, archives, commercial design and technology companies, and image services of all types, creating new opportunities for exchange and collaboration across sectors.

From those original funding institutions, the IIIF-C has grown to a global community of {{ iiifc_members.size }} members.

{{ theme.block-end }}