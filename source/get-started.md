---
layout: default
title: Get Started
subtitle: >
  There are two main ways to get started with IIIF. As an implementer or developer, you can make digital resources available on the web using IIIF. As an end user, you may be working with materials already hosted on the Web by someone else.
permalink: /get-started/
hero:
  image: "assets/images/possible_header_images/download-1.png"
developer_resources_cards:
  - label: Image Viewers
    description: There are several popular viewers, each with different capabilities.
    image: 'assets/images/just-a-square.png'
    link_text: Learn more
    link: ''
  - label: Image Servers
    description: See the most commonly used IIIF-compliant image servers.
    image: 'assets/images/just-a-square.png'
    link_text: Learn more
    link: ''
  - label: IIIF Tools
    description: Review the community-maintained Awesome IIIF list.
    image: 'assets/images/just-a-square.png'
    link_text: Learn more
    link: ''
  - label: IIIF Validators
    description: Try out the IIIF Validators for the Image API or the Presentation API.
    image: 'assets/images/just-a-square.png'
    link_text: Learn more
    link: ''
  - label: Find Recipes
    description: Browse the Cookbook, a community initiative to string together commonly used functions into “recipes” that can be reused easily.
    image: 'assets/images/just-a-square.png'
    link_text: Learn more
    link: ''
  - label: More Resources
    description: Read guides to pre-implementation requirements, interoperability best practices, UX best practices, and more.
    image: 'assets/images/just-a-square.png'
    link_text: Learn more
    link: ''
end_users_cards:
  - label: Finding IIIF Resources
    description: How to find IIIF materials from dozens of institutions around the world.
    image: 'assets/images/just-a-square.png'
    link_text: Learn more
    link: ''
  - label: Using IIIF Resources
    description: How to use preexisting IIIF materials for teaching and research.
    image: 'assets/images/just-a-square.png'
    link_text: Learn more
    link: ''
  - label: Implementation Basics
    description: Access our open training materials to learn the basics of implementing IIIF.
    image: 'assets/images/just-a-square.png'
    link_text: Learn more
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

### 1. Integrate a Core API

Image and Presentation are the core APIs you can  install first. Choose to retrieve images with the Image API or the image’s metadata with the Presentation API.

### 2. Integrate Viewers

### 3. Enable Other Features


{% include misc/button.html button_label="View All Docs" button_link="/api/" %}

{{ layout.block-end }}



{{ layout.block-start }}

## Developer Resources

{% include blocks/cards.html items=page.developer_resources_cards %}

{{ layout.block-end }}



{{ layout.block-start }}

## End Users

There are two main ways to get started with IIIF. As an implementer or developer, you can make digital resources available on the web using IIIF. As an end user, you may be working with materials already hosted on the Web by someone else.

{% include blocks/cards.html items=page.end_users_cards %}

{{ layout.block-end }}



{{ layout.block-start }}

## More Resources

{% include blocks/cards.html items=page.more_resources_cards %}

{{ layout.block-end }}