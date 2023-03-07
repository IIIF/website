---
title: Why IIIF?
subtitle: >
  IIIF provides benefits to collection-hosting instititons and end users alike.
layout: page
redirect_from:
  - /about.html
  - /about/
  - /why-iiif/
hero:
  image: "assets/uploads/kandinsky.webp"
next_resources:
 - label: Get started
   link: /get-started/
   description: Take the first step to exploring the rich world of IIIF-enabled materials.
 - label: Guides
   link: https://iiif.io/guides/
   description: A set of resources to help you find and work with IIIF materials, built by members of the IIIF community.
 - label: Talks
   link: /get-started/talks
   description: Watch selected talks from conferences and other events to learn more about IIIF directly from the community.
---

{{ theme.block-start }}

*Some of the major selling points institutions have found useful in advocating for IIIF adoption.*

> If you're just getting started, see also: ["How IIIF Works"]({{ site.root_url | absolute_url }}/get-started/how-iiif-works)

## Rich image delivery

Fast, rich zoom & pan delivery of images via the Internet, with options for size, scale, region of interest, rotation, quality and format.


## Plug and play software

Use any IIIF-compatible software for viewing, comparing and manipulating images from any IIIF-compatible image site, regardless of the back-end server. Swap parts of the stack at any time, or run multiple components in parallel at once.


## Publish once, reuse often

Deliver images from your own site for many uses; host a single copy and embed in other sites. No need to transfer images to others for them to locally load and use them for one off analysis or republishing.


## Remix content

Assemble and reuse IIIF resources from across the Web, regardless of source. Compare pages, import into tools, build exhibits, or view items served from different sites in one place.


## Annotate

IIIF has native compatibility with the [W3C Web Annotation model][wadm], which supports annotating content on the Web. Comment on, transcribe, and mark up resources using the Web’s inherent architecture--even for Audiovisual resources.


## Cite and share

IIIF APIs give portable views onto images or any of its regions, and provide incentive for URIs that persist through image server migrations. Cite an image with a stable URI, or share it for reference by others--or yourself in a different environment.


### Support for attribution and access control

Built in API calls support attribution and access control: the Authentication API ([https://iiif.io/api/auth/](https://iiif.io/api/auth/)), is integral and consistent with the IIIF conception.


## Global network

Join a global network of image suppliers making content available in a common framework. Tap a growing suite of software tools and platforms. Maximize the use of your images on the Web. Unlock new potential with interoperability. Bring together content from multiple sources (organizational and technical)

{{ theme.block-end }}

{{ theme.block-start }}

## Spread the word

Need to explain IIIF's benefits to a colleague? These handouts provide relevant information and a list of benefits based on audience. For more resources, see our [Outreach Materials][outreach]).

- [IIIF for CIOs and Engineers](https://docs.google.com/document/d/1RJbJ8MdNWC_6Y1fyCvvtAzZfQIhHNDiFrpS2XA5TdGs/edit?usp=sharing){:.external}
- [IIIF for Deans and other leaders](https://docs.google.com/document/d/1G62fUv1V6iUhskMDNgZlcyXVoIk4O9_FIOrL4kjlxXM/edit?usp=sharing){:.external}
- [IIIF for researchers](https://docs.google.com/document/d/1GWfh0F6HlzJtII9JxyED2CQ4eH9qwtGdO9yhMHxqvjs/edit?usp=sharing){:.external}

{{ theme.block-end }}

{{ theme.block-start }}

## Next steps

Feel like you have a handle on the reasons IIIF is adopted all over the world? Try out some of these resources as a next step, or see our "Get Started" page for the full set of ways to get started with IIIF.

{% include blocks/cards.html items=page.next_resources %}

{{ theme.block-end }}


[wadm]: https://www.w3.org/TR/2017/REC-annotation-model-20170223/
[awesome]: https://github.com/IIIF/awesome-iiif
[outreach]: {{ site.root_url | absolute_url }}/get-started/training/outreach-materials/
