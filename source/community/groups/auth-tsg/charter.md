---
title: "IIIF Authentication TSG Charter"
tags: [auth-tsg, tsg]
cssversion: 2
---
## Introduction
The IIIF Authentication API is an interaction pattern for managing access control to IIIF image resources. With the introduction of support for A/V in the IIIF Presentation API version 3 there is now a need to support authenticating resources which do not require a IIIF Image API service, as well as general updates for consistency with the new APIs. There have also been developments in the browser community that cause difficulties with the existing authentication specification. With the current specification being broken in some browsers, and soon to be obsolete in others, there is an urgent need to update the method in which the IIIF Authentication API works to remain useful in the evolving web landscape.

## Scope
The scope of work to be performed by the Authentication TSG will be:   
* Updating the IIIF Authentication API in line with version 3.0 of the IIIF Image and Presentation APIs
* Finding and documenting a solution to the browser issues that have arisen, with an initial approach of engaging with the standards and browser communities
* Determining a IIIF Authentication API pattern for access to non-Image content resources
* Explore Authentication patterns for access to resources requested through JavaScript without exposing authorization credentials to the client (such as for searching annotations with credentials)   

## Deliverables
The expected deliverable will be a new version of the IIIF Authentication API that meets the requirements of the scope described above.   

## References
References for implementations of the third-party cookie changes:
* Safari issue
* Chrome plans
* IIIF API issue: [https://github.com/IIIF/api/issues/1959](https://github.com/IIIF/api/issues/1959)   

Stories that support this TSG work:
* Canvas with content that will never be "seen"
* And the following issues that have been raised on the API Github repository:
[https://github.com/IIIF/api/issues?q=is%3Aissue+is%3Aopen+label%3Aauth](https://github.com/IIIF/api/issues?q=is%3Aissue+is%3Aopen+label%3Aauth   )

## Roadmap
* Group formation: October 2020
* Delivery of new Authentication API version, given current technical /political environment:
    * Initial draft: June 2021
    * Implementable Beta: November 2021
    * Proposed Recommendation: June 2022    
 

[3d]: {{ site.url }}{{ site.baseurl }}/community/groups/3d "IIIF 3D Community Group"
[archives]: {{ site.url }}{{ site.baseurl }}/community/groups/archives "IIIF Archives Community Group"
[av]: {{ site.url }}{{ site.baseurl }}/community/groups/av "IIIF A/V Technical Specification Group"
[d4h]: {{ site.url }}{{ site.baseurl }}/community/groups/D4H "IIIF Discovery for Humans Community Group"
[manuscripts]: {{ site.url }}{{ site.baseurl }}/community/groups/manuscripts "IIIF Manuscripts Community Group"
[museums]: {{ site.url }}{{ site.baseurl }}/community/groups/museums "IIIF Museums Community Group"
[maps]: {{ site.url }}{{ site.baseurl }}/community/groups/maps "IIIF Maps Community Group"
[newspapers]: {{ site.url }}{{ site.baseurl }}/community/groups/newspapers "IIIF Newspapers Community Group"
[software]: {{ site.url }}{{ site.baseurl }}/community/groups/software "Software Developers Community Group"
[discovery]: {{ site.url }}{{ site.baseurl }}/community/groups/discovery "IIIF Discovery Technical Specification Group"
[outreach]: {{ site.url }}{{ site.baseurl }}/community/groups/outreach "IIIF Outreach Community Group"
[groups-framework]: {{ site.url }}{{ site.baseurl }}/community/groups/framework
[text-granularity]: {{ site.url }}{{ site.baseurl }}/community/groups/text-granularity/
[cal-ical]: https://calendar.google.com/calendar/ical/1hnm5h86n94ore0vnoo188ter8%40group.calendar.google.com/public/basic.ics
[maps-tsg]: {{ site.url }}{{ site.baseurl }}/community/groups/maps-tsg/
[auth-tsg]: {{ site.url }}{{ site.baseurl }}/community/groups/auth-tsg/
[auth-charter]: {{ site.url }}{{ site.baseurl }}/community/groups/auth-tsg/charter/

{% include acronyms.md %}
