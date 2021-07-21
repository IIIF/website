---
layout: default
title: Get Started
subtitle: >
  Whether you're an end user or a software developer, start your IIIF journey with these resources. 
permalink: /get-started/
hero:
  image: "assets/images/heroes/hero-2@3x.webp"
intro_tabs: 
  - label: End User
    content: Whether you're a researcher, an educator, or just someone exploring the possibilities, IIIF makes your life easier when it comes to working with digital collections.
  - label: Developer
    content: As an implementer/developer, you can make digital resources available on the web using IIIF.
implement_tabs:
  - label: 1. Explore the Core APIs
    content: Image and Presentation are the core APIs most institutions start with. Choose to retrieve images with the Image API or the image’s metadata with the Presentation API.
    cards:
      - label: Learn about image viewers
        description: There are several popular viewers, each with different capabilities.
        image: 'assets/images/icons/image@2x.webp'
        link: '{{site.api_url}}/image'
      - label: Learn about image viewers
        description: There are several popular viewers, each with different capabilities.
        image: 'assets/images/icons/image@2x.webp'
        link: '{{site.api_url}}/image'
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
  - label: Learn the basics of IIIF
    description: Read our plain language description of IIIF technology.
    image: ''
    link: '/get-started/how-iiif-works'
    alt: 'test'
  - label: Learn the details of how it works
    description: Access our open training materials to go hands-on and learn how resources are made available via IIIF.
    image: ''
    link: 'https://training.iiif.io/iiif-online-workshop/'
implementer_cards:
  - label: Learn about IIIF viewers
    description: There are several popular viewers, each with different capabilities.
    image: ''
    link: '/get-started/iiif-viewers/'
  - label: Learn about image servers
    description: See the most commonly used IIIF-compliant image servers.
    image: ''
    link: '/get-started/image-servers/'
  - label: Learn about IIIF tools
    description: Review the community-maintained “Awesome IIIF” list and see what’s available to you. (External link)
    image: ''
    link: 'https://github.com/IIIF/awesome-iiif/'
  - label: Test an Image API implementation
    description: Try out the IIIF validator for the Image API.
    image: ''
    link: '{{site.api_url}}/image/validator/'
  - label: Test a Presentation API implementation
    description: Try out the IIIF validators for the Presentation API.
    image: ''
    link: '{{site.api_url}}/presentation/validator/service/'
  - label: Find recipes
    description: Browse the Cookbook, a community initiative to string together commonly used functions into code “recipes” that can be easily reused.
    image: ''
    link: "{{ site.cookbook_url }}"
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


## User or Developer? 


<div class="has-text-justified" markdown=1>

There are two main ways to get started with IIIF. As an [implementer/developer](#implementers), you can make digital resources available on the web using IIIF. As an [end user](#end-users), you may be working with materials already hosted on the Web by someone else. 


{% include blocks/tabs.html tabs=page.intro_tabs %}


{% assign users = page.url | append: "#end-users"  %}
{% include misc/button.html button_label="Go to User Resources" button_link= users %}

{% assign implementers = page.url | append: "#implementers"  %}
{% include misc/button.html button_label="Go to Developer Resources" button_link=implementers %}

</div>


{{ theme.block-end }}


{{ theme.block-center-start }}

<a name='end-users'></a>
## End Users: Explore the Rich World of IIIF Content

Whether you're a researcher, an educator, or just someone exploring the possibilities, IIIF makes your life easier when it comes to working with digital collections.

{% include blocks/cards.html items=page.end_user_cards %}

{{ theme.block-end }}


{{ theme.block-center-start }}

<a name='implementers'></a>
## Developers: Implement A Custom Experience

You don't have to be a sofware developer or coder to be curious about how IIIF tools work under the hood -- there's a variety of resources ready to solve your problems and show you how it all works.

{% include blocks/tabs.html tabs=page.implement_tabs %}


{% include misc/button.html button_label="View All Docs" button_link=site.api_url %}


{{ theme.block-end }}

{{ theme.block-center-start }}

## More for Implementers

{% include blocks/cards.html items=page.implementer_cards %}

{{ theme.block-end }}



{{ theme.block-center-start }}

## More Resources

{% include blocks/cards.html items=page.more_resources_cards %}

{{ theme.block-end }}