---
title: Authorization Flow 2.0 Published
author: IIIF-C Staff
date: 2023-07-10
tags: [news, announcements]
layout: post
apis: 
    auth:
      label: Authorization Flow API
      description: Control and restrict access by creating a link to a user interface for logging in and services that provide credentials.
      tech_description: The IIIF Authorization Flow specification describes a set of workflows for guiding the user through an existing access control system.
      image: assets/images/icons/auth-group@2x.png
      alt_text: Auth Flow API icon
      latest:
        label: Stable 2.0
        major: 2
        minor: 0
        patch: 0
    search:
      label: Content Search API
      description: Perform search for text within or annotations related to digital objects. 
      tech_description: The IIIF Content Search API specification lays out the interoperability mechanism for performing searches of text annotations associated with an object within the IIIF context.
      image: assets/images/icons/search-group@2x.png
      alt_text: Search API icon
      latest:
        label: Stable 2.0
        major: 2
        minor: 0
        patch: 0
---


The [IIIF Authorization Flow Technical Specification Group][tsg] and the [IIIF Editorial Committee][editors] are pleased to announce the official publication of the 2.0 version of the [Authorization Flow API specification][auth] after a unanimous vote of approval from the [Technical Review Committee][trc].

Along with the publication of the [Content Search 2.0 specification][content-search] last fall, this now brings all the IIIF APIs in line with the updates prompted by the release of the 3.0 versions of Presentation and Image APIs.

As described at the [IIIF Annual Conference in Naples][naples] by IIIF Editor and Auth TSG co-chair Tom Crane (see video below), the Authorization Flow spec is "a set of interaction patterns that allow a IIIF viewer to:

- Know whether you are authorized to see the things that you are trying to look at (and not show you broken images / dead links / no video if you’re not)
- Know where to send you to get access (e.g., send you to the publisher’s login page)
- Know when you’re back in the viewer (and show appropriate messaging)"

A series of example interactions for the Authorization Flow API can be seen at a [demo site set up by Tom Crane](https://tomcrane.github.io/iiif-auth-client/?collection=https://iiif-auth2-server.herokuapp.com/collection.json).

{{ theme.block-start }}
### Check out the specifications
<br >

{% include blocks/api-cards.html link_text="View the spec" items=page.apis %}

 The changelogs ([Auth](https://iiif.io/api/auth/2.0/change-log/), [Content Search](https://iiif.io/api/search/2.0/change-log/ )) may be useful for developers to see major changes and updates at a glance.

{{ theme.block-end }}

<iframe width="100%" height="415" src="https://www.youtube.com/embed/I5k7nG5Gyx4?start=24&end=1042;rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Questions?

Please contact [staff@iiif.io](mailto:staff@iiif.io).


[tsg]: {{ site.root_url | absolute_url }}/community/groups/auth-tsg/
[auth]: {{ site.api_url | absolute_url }}/auth/
[content-search]: {{ site.api_url | absolute_url }}/search/
[naples]: {{ site.root_url | absolute_url }}/event/2023/naples/schedule/#170
[editors]: {{ site.root_url | absolute_url }}/community/editors/
[trc]: {{ site.root_url | absolute_url }}/community/trc/
[apis]: {{ site.api_url | absolute_url }}