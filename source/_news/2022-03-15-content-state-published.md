---
title: IIIF Content State API published
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

There are already a number of implementations of the new standard, including the virally popular [Animal Crossing Art Generator from the Getty][acag] used to import any IIIF image into the tool, and an example from [Durham University][durham-features] that demonstrates the [ability to link directly to a very specific annotation of a small house within the context of a large map][durham]. 

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
[durham-features]: https://www.durhampriory.ac.uk/using-the-features-of-iiif/
[durham]: https://iiif.durham.ac.uk/index.html?iiif-content=eyJAY29udGV4dCI6ICJodHRwOi8vaWlpZi5pby9hcGkvcHJlc2VudGF0aW9uLzAvY29udGV4dC5qc29uIiwgImlkIjogImh0dHBzOi8vaWlpZi5kdXJoYW0uYWMudWsvbWFuaWZlc3RzL3RyaWZsZS8zMjE1MC90MS9tdi9xMi90MW12cTI3em40MzIvY2FudmFzL3QxdHZtNDB4czE0Nl94eXdoPTk3ODcsMTI1NzEsMTY0LDkzIiwgInR5cGUiOiAiQW5ub3RhdGlvbiIsICJtb3RpdmF0aW9uIjogWyJoaWdobGlnaHRpbmciXSwgInJlc291cmNlIjp7InR5cGUiOiJkY3R5cGVzOlRleHQiLCJmb3JtYXQiOiJ0ZXh0L3BsYWluIiwiY2hhcnMiOiJMdWR3ZWxsLCBTdGFuaG9wZSBQYXJrIFF1YXJ0ZXIgdGl0aGUgbWFwIn0sICJ0YXJnZXQiOiB7ImlkIjoiaHR0cHM6Ly9paWlmLmR1cmhhbS5hYy51ay9tYW5pZmVzdHMvdHJpZmxlLzMyMTUwL3QxL212L3EyL3QxbXZxMjd6bjQzMi9jYW52YXMvdDF0dm00MHhzMTQ2I3h5d2g9OTc4NywxMjU3MSwxNjQsOTMiLCJ0eXBlIjoiQ2FudmFzIiwicGFydE9mIjp7ImlkIjogImh0dHBzOi8vaWlpZi5kdXJoYW0uYWMudWsvbWFuaWZlc3RzL3RyaWZsZS8zMjE1MC90MS9tdi9xMi90MW12cTI3em40MzIvbWFuaWZlc3QiLCJ0eXBlIjoiTWFuaWZlc3QifX19