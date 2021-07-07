---
layout: default
title: Get Started
subtitle: >
  There are two main ways to get started with IIIF. As an implementer or developer, you can make digital resources available on the web using IIIF. As an end user, you may be working with materials already hosted on the Web by someone else.
permalink: /get-started/
hero:
  image: "assets/images/heroes/hero-2@3x.webp"
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
    link: 'https://guides.iiif.io/'
    alt: 'test'
  - label: Use IIIF resources
    description: Use preexisting IIIF-enabled materials for teaching and research across sites and tools.
    image: ''
    link: 'https://iiif.io/explainers/using_iiif_resources/'
  - label: Learn how it works
    description: Access our open training materials to learn the basics of how resources are made available via IIIF.
    image: ''
    link: 'https://training.iiif.io/iiif-online-workshop/'
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
    link: "{{ site.api_url }}/cookbook/"
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

{{ theme.block-center-start }}

## Implement A Custom Experience

{% include blocks/tabs.html tabs=page.implement_tabs %}
{% include misc/button.html button_label="View All Docs" button_link=theme.api_url %}

{{ theme.block-end }}



{{ theme.block-center-start }}

## End Users

{% include blocks/cards.html items=page.end_user_cards %}

{{ theme.block-end }}



{{ theme.block-center-start }}

## Implementers

{% include blocks/cards.html items=page.implementer_cards %}

{{ theme.block-end }}



{{ theme.block-center-start }}

## More Resources

{% include blocks/cards.html items=page.more_resources_cards %}

{{ theme.block-end }}
