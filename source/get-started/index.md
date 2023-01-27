---
layout: default
title: Get Started
subtitle: >
  Whether you're a developer, researcher, librarian, collection manager, or someone else, your work with digital collections can benefit from IIIF technology and tools.
permalink: /get-started/
redirect_from:
  - /explainers/using_iiif_resources/
  - /comingsoon/
hero:
  image: "assets/images/heroes/hero-2@3x.webp"
intro_tabs:
  - label: End User
    content: Whether you're a researcher, an educator, or just someone exploring the possibilities, IIIF makes your life easier when it comes to working with digital collections.
  - label: Developer
    content: As an implementer/developer, you can make digital resources available on the web using IIIF.
implementer_text_cols:
  - content: "If you’re a researcher, educator, or in a similar role, you are likely an end user, and you can use IIIF resources already hosted on the Web by someone else--all without having to learn to code."
    button_label: View end user resources
    button_link: '/get-started/#end-users'
  - content: "As an implementer, you can make digital resources available on the Web via IIIF using a variety of products, tools, and resources. Coding skills may or may not be required."
    button_label: 'View implementer resources'
    button_link: '/get-started/#implementers'
end_user_cards:
  - label: How IIIF works
    description: Get a simple overview of how IIIF works.
    link: '/get-started/how-iiif-works'
  - label: Find IIIF resources
    description: Discover IIIF-enabled materials from institutions around the world.
    link: '{{ site.guides_url | absolute_url }}/finding_resources/'
  - label: Use IIIF resources
    description: Learn how to use existing IIIF resources for teaching and research.
    link: '{{ site.guides_url | absolute_url }}/using_iiif_resources/'
  - label: Learn to do it yourself
    description: Take your knowledge a step further and use our open training materials to learn hands-on how resources are made available via IIIF.
    link: 'https://training.iiif.io/iiif-online-workshop/'
  - label: Find non-English resources
    description: Take a look and see what materials have been created by the IIIF Community in a variety of languages.
    link: '/get-started/non-english/'
  - label: Popular IIIF tools
    description: Try making an exhibit with IIIF materials, or setting up a crowd-sourcing project.
    link: '/get-started/tools'
implementer_cards:
  - label: IIIF APIs
    description: Go straight to the documentation describing the current and draft specifications.
    link: '{{ site.api_url | absolute_url }}'
  - label: Get recipes
    description: Browse the Cookbook, a community initiative to string together commonly used functions into code “recipes” that can be easily reused.
    link: "{{ site.cookbook_url | absolute_url }}"
  - label: Guide for IIIF Implementers
    description: This brief guide will lead you through some of the decision points to help get you going with IIIF.
    link: "{{ site.guides_url | absolute_url }}/guide_for_implementers/"
  - label: IIIF-compliant vendors
    description: View a list of vendors that allow you to serve your resources via IIIF without building your own ecosystem.
    link: '/get-started/vendors/'
  - label: IIIF viewers
    description: There are several popular viewers, each with different capabilities.
    link: '/get-started/iiif-viewers/'
  - label: IIIF image servers
    description: See the most commonly used IIIF-compliant image servers.
    link: '/get-started/image-servers/'
  - label: Community tools list
    description: From tools for annotation to tools for building exhibits, see the best of what’s available to you and benefit from the work of others on the IIIF-Awesome list. (External link)
    link: 'https://github.com/IIIF/awesome-iiif/'
  - label: Test an API implementation
    description: Try out the IIIF validators for the Image and Presentation APIs.
    link: '{{ site.api_url | absolute_url}}/#validators'
more_resources_cards:
  - label: Talks
    description: Learn from other’s experience implementing IIIF by watching conference presentations.
    link_text: Learn more
    link: '/get-started/talks/'
  - label: Outreach materials
    description: Anyone can reach out to their community and share information about IIIF. We’ve created some materials to make that easier.
    link_text: Learn more
    link: '/get-started/training/outreach-materials/'
  - label: Tools
    description: Check out a variety of tools created by the community.
    link_text: Learn more
    link: '/get-started/tools/'
---

{{ theme.block-center-start }}


## End user or implementer?

There are two main ways to get started with IIIF.

{% include blocks/text-and-text.html   
    content_1=page.implementer_text_cols.first.content
    button_label_1=page.implementer_text_cols.first.button_label
    button_link_1=page.implementer_text_cols.first.button_link
    content_2=page.implementer_text_cols.last.content
    button_label_2=page.implementer_text_cols.last.button_label
    button_link_2=page.implementer_text_cols.last.button_link %}

{{ theme.block-end }}


{{ theme.block-center-start }}

## Resources for end users
{: #end-users}

Take the first step to exploring the rich world of IIIF-enabled materials.

{% include blocks/cards.html items=page.end_user_cards %}

{{ theme.block-end }}


{{ theme.block-center-start }}

<span id="implementers"></span>
## Implement IIIF for your materials
{: #implementers}

Make your digital collections available via IIIF so you and your users can benefit from interoperability.

{% include blocks/cards.html items=page.implementer_cards %}

{{ theme.block-end }}

{{ theme.block-center-start }}

## More resources

{% include blocks/cards.html items=page.more_resources_cards %}

{{ theme.block-end }}
