---
title: IIIF Content State API Published
author: IIIF-C Staff
date: 2022-03-16
tags: [news, announcements]
layout: post
---

The [IIIF Discovery Technical Specification group][tsg] and the [IIIF Editorial Committee][editors] are pleased to announce the official publication of the new [Content State API specification][content-state] after a unanimous vote of approval from the [Technical Review Committee][trc]. This bring the total number of official [IIIF API specifications][apis] to six.



As IIIF Editor Tom Crane puts it, ["IIIF Content State is how we point at things in IIIF"][medium-article] -- i.e., a means to generate a very specific link to a particular view of an object, like a specific area on a particular page rotated at a certain angle.

Example use cases for sharing a resource, or a particular view of a resource, include:

- A user follows a link from a search result, which opens a IIIF viewer. The viewer focuses on the relevant part of the object, such as a particular line of text that contains the searched-for term.
- A user opens several IIIF manifests [[What's a manifest?][key-concepts]] to compare paintings, then wishes to share this set of views with a colleague.

Other examples include bookmarks, citations, playlists and deep linking into digital objects.

For a non-technical overview, see ["What is IIIF Content State" by IIIF Editor Tom Crane][medium-article].

There are already a number of implementations of the new standard, including the virally popular [Animal Crossing Art Generator from the Getty][acag]. 

### Questions?

Please contact [staff@iiif.io](mailto:staff@iiif.io).


[tsg]: {{ site.root_url | absolute_url }}/community/groups/discovery/
[content-state]: {{ site.api_url | absolute_url }}/content-state/
[editors]: {{ site.root_url | absolute_url }}/community/editors/
[medium-article]:  https://tom-crane.medium.com/what-is-iiif-content-state-dd15a543939f
[acag]: https://experiments.getty.edu/ac-art-generator/
[trc]: {{ site.root_url | absolute_url }}/community/trc/
[key-concepts]: {{ site.root_url | absolute_url }}/get-started/how-iiif-works/#key-concepts-youll-encounter-when-working-with-iiif
[apis]: {{ site.api_url | absolute_url }}