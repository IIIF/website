---
layout: default
title: Get Started
subtitle: >
  Whether you're a developer, researcher, librarian, collection manager, or someone else, your work with digital collections can benefit from IIIF technology and tools.
permalink: /get-started/
hero:
  image: "assets/images/heroes/hero-2@3x.webp"
intro_tabs:
  - label: End User
    content: Whether you're a researcher, an educator, or just someone exploring the possibilities, IIIF makes your life easier when it comes to working with digital collections.
  - label: Developer
    content: As an implementer/developer, you can make digital resources available on the web using IIIF.
implement_tabs:
  - label: 1. Explore the core APIs
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
  - label: 2. Integrate viewers
    content: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    cards:
      -
  - label: 3. Enable other features
    content: It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    cards:
      -
end_user_cards:
  - label: How IIIF works
    description: Get a simple overview of how IIIF works.
    image: ''
    link: '/get-started/how-iiif-works'
    alt: 'test'
  - label: Find IIIF resources
    description: Discover IIIF-enabled materials from institutions around the world.
    image: ''
    link: '{{ site.guides_url | absolute_url }}/finding_resources/'
    alt: 'test'
  - label: Use IIIF resources
    description: Learn how to use existing IIIF resources for teaching and research.
    image: ''
    link: '{{ site.guides_url | absolute_url }}/using_iiif_resources/'
  - label: Learn to do it yourself
    description: Take your knowledge a step further and use our open training materials to learn hands-on how resources are made available via IIIF.
    image: ''
    link: 'https://training.iiif.io/iiif-online-workshop/'
  - label: Find non-English resources
    description: Take a look and see what materials have been created by the IIIF Community in a variety of languages.
    image: ''
    link: '/get-started/non-english/'
  - label: Popular IIIF tools
    description: Try making an exhibit with IIIF materials, or setting up a crowd-sourcing project.
    link: '/get-started/tools'
    image: ''
implementer_cards:
  - label: IIIF APIs
    description: Go straight to the documentation describing the current and draft specifications.
    image: ''
    link: '{{ site.api_url | absolute_url }}'
  - label: IIIF-compliant vendors
    description: View a list of vendors that allow you to serve your resources via IIIF without building your own ecosystem.
    image: ''
    link: '/get-started/vendors/'
  - label: IIIF viewers
    description: There are several popular viewers, each with different capabilities.
    image: ''
    link: '/get-started/iiif-viewers/'
  - label: IIIF image servers
    description: See the most commonly used IIIF-compliant image servers.
    image: ''
    link: '/get-started/image-servers/'
  - label: Community tools list
    description: From tools for annotation to tools for building exhibits, see the best of what’s available to you and benefit from the work of others on the IIIF-Awesome list. (External link)
    image: ''
    link: 'https://github.com/IIIF/awesome-iiif/'
  - label: Test an API implementation
    description: Try out the IIIF validators for the Image and Presentation APIs.
    image: ''
    link: 'https://github.com/IIIF/awesome-iiif/#official-resources'
  - label: Get recipes
    description: Browse the Cookbook, a community initiative to string together commonly used functions into code “recipes” that can be easily reused.
    image: ''
    link: "/get-started/cookbook"
  - label: Read guides
    description: Topics include pre-implementation requirements, interoperability best practices, UX best practices, and more.
    image: ''
    link: ''
more_resources_cards:
  - label: Talks
    description: Learn from other’s experience implementing IIIF by watching conference presentations.
    link_text: Learn more
    link: '/get-started/talks/'
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


## End user or implementer?

There are two main ways to get started with IIIF.

|If you’re a researcher, educator, or in a similar role, you are likely an end user, and you can use IIIF resources already hosted on the Web by someone else--all without having to learn to code. | As an implementer, you can make digital resources available on the Web via IIIF using a variety of products, tools, and resources. Coding skills may or may not be required.|
|[View end user resources](#end-users)|[View implementer resources](#implementers)|
{: .api-table}


{{ theme.block-end }}


{{ theme.block-center-start }}

## Resources for end users
{: #end-users}

Take the first step to exploring the rich world of IIIF-enabled materials.

{% include blocks/cards.html items=page.end_user_cards %}

{{ theme.block-end }}


{{ theme.block-center-start }}

<a name='implementers'></a>
## Implement IIIF for your materials
{: #implementers}

Make your digital collections available via IIIF so you and your users can benefit from interoperability.

{% include blocks/cards.html items=page.implementer_cards %}

{{ theme.block-end }}

{{ theme.block-center-start }}

## More resources

{% include blocks/cards.html items=page.more_resources_cards %}

{{ theme.block-end }}
