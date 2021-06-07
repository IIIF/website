---
layout: default
title: Get Started
subtitle: >
  Access a robust set of resources for implementers and end users of IIIF.
permalink: /get-started/
hero:
  image: ''
implement_tabs:
  - label: 1. Integrate a Core API
    content: Image and Presentation are the core APIs you can  install first. Choose to retrieve images with the Image API or the image’s metadata with the Presentation API.
    cards:
      -
  - label: 2. Integrate Viewers
    content: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    cards:
      -
  - label: 3. Enable Other Features
    content: It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    cards:
      -
end_user_cards:
  - label: Find IIIF resources
    description: Discover IIIF-enabled materials from institutions around the world.
    image: ''
    link: ''
  - label: Use IIIF resources
    description: Use preexisting IIIF-enabled materials for teaching and research across sites and tools.
    image: ''
    link: ''
  - label: Learn how it works
    description: Access our open training materials to learn the basics of how resources are made available via IIIF.
    image: ''
    link: ''
implementer_cards:
  - label: Learn about image viewers
    description: There are several popular viewers, each with different capabilities.
    image: ''
    link: ''
  - label: Learn about image servers
    description: See the most commonly used IIIF-compliant image servers.
    image: ''
    link: ''
  - label: Learn about IIIF tools
    description: Review the community-maintained “Awesome IIIF” list and see what’s available to you.
    image: ''
    link: ''
  - label: Test an implementation
    description: Try out the IIIF validators for the Image API or the Presentation API.
    image: ''
    link: ''
  - label: Find recipes
    description: Browse the Cookbook, a community initiative to string together commonly used functions into code “recipes” that can be easily reused.
    image: ''
    link: ''
  - label: Read guides
    description: Topics include pre-implementation requirements, interoperability best practices, UX best practices, and more.
    image: ''
    link: ''
more_resources_cards:
  - label: Talks
    description: Learn from other’s experience implementing IIIF by watching conference presentations.
    link_text: Learn more
    link: ''
  - label: Illustrated Case Studies
    description: See a breakdown of how major institutions are using IIIF to make their collections available.
    link_text: Learn more
    link: ''
  - label: Tools
    description: Check out a variety of tools created by the community.
    link_text: Learn more
    link: ''
---

{{ layout.block-start }}

## Implement A Custom Experience

{% include blocks/tabs.html tabs=page.implement_tabs %}
{% include misc/button.html button_label="View All Docs" button_link=theme.api_url %}

{{ layout.block-end }}



{{ layout.block-start }}

## End Users

{% include blocks/cards.html items=page.end_user_cards %}

{{ layout.block-end }}



{{ layout.block-start }}

## Implementers

{% include blocks/cards.html items=page.implementer_cards %}

{{ layout.block-end }}



{{ layout.block-start }}

## More Resources

{% include blocks/cards.html items=page.more_resources_cards %}

{{ layout.block-end }}
