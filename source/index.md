---
layout: default
title: Home
hero:
  image: "assets/uploads/doshisha_103500_.webp"
  title: Gain richer access to the world's image and audio/visual files
  subtitle: IIIF is an open standard for delivering high-quality, attributed digital objects online at scale. It’s also an international community developing and implementing the IIIF APIs, backed by a consortium of leading academic and cultural institutions.
  button:
    label: "Get started"
    link: "/get-started"
iiif_basics_carousel:
  - resource:
      url: 'assets/uploads/wellcome_zebrafish.webp'
      type: image
      alt_text: "Wellcome Collection screenshot"
      caption: 'The Wellcome Collection uses IIIF to make medical and scientific materials available via a Mirador viewer, and to offer multiple image download sizes to users.'
    link:
      url: "/demos"
      label: 'View demos'
  - resource:
      url: 'assets/uploads/micrio-night-watch.webp'
      type: image
      alt_text: "Micrio screenshot"
      caption: 'The Rijksmuseum features rich online exhibitions driven by IIIF annotations.'
    link:
      url: "/demos"
      label: 'View demos'
  - resource:
      url: 'assets/uploads/SAT Taishōzō Image DB.webp'
      type: image
      alt_text: "SAT Taishōzō Image DB screenshot"
      caption: 'The SAT Daizokyo Database Project includes individual mandalas with over 400 IIIF annotations, using Mirador.'
    link:
      url: "/demos"
      label: 'View demos'
  - resource:
      url: 'assets/uploads/ddmal_section.gif'
      type: image
      alt_text: "DDMAL screenshot"
      caption: "McGill University's Distributed Digital Music Archives & Libraries Lab uses the Presentation API to integrate audio and moving images."
    link:
      url: "/demos"
      label: 'View demos'
demos:
  - image: assets/uploads/biblissima_1.png
    alt_text: "Biblissima screenshot"
    link: /demos/
    label: Biblissima pulls images from separate IIIF-enabled collections to digitally reunite missing manuscript illuminations with their original pages.
  - image: assets/uploads/kurushiji_ai.png
    alt_text: "KuroNet screenshot"
    link: /demos/
    label: The KuroNet Cursive Script Recognition Viewer translates historical Japanese cursive using IIIF.
  - image: assets/uploads/exhibit_2.png
    alt_text: "Exhibit screenshot"
    link: /demos/
    label: Exhibit.so allows non-technical users to create guided viewing experiences for one or many IIIF resources using IIIF annotations.
features:
  - label: Great for researchers
    description: Examine, compare, annotate, and share. IIIF enables easy use across repositories, with tools to aid research and presentation.
    image: assets/images/icons/research@2x.webp
    alt_text: Magnifying glass icon
  - label: Efficient for developers
    description: Publish once, reuse often. IIIF serves high-quality digital objects to your own site and others in many formats, without vendor lock-in.
    image: assets/images/icons/developer@2x.webp
    alt_text: Code prompt icon
  - label: Practical for leaders
    description: Share your collections as widely as possible. IIIF is a cost-effective way to serve billions of digital objects with open-source, community-driven ethics.
    image: assets/images/icons/leader@2x.webp
    alt_text: Hand holding flag icon
community_banner:
  image: "assets/images/heroes/event@3x.webp"
  button:
    label: "Learn more"
    link: "/get-involved"
  title: "Join the community"
  subtitle: "IIIF community groups tackle a range of topics, from implementing IIIF for specific communities to crafting new technical specifications."
events:
  - date: 2021-04-04
    title: IIIF Museums group call
    location: Virtual (Zoom)
  - date: 2021-03-23
    title: IIIF Maps group call
    location: Virtual (Zoom)
  - date: 2021-02-12
    title: IIIF Archives group call
    location: Virtual (Zoom)
  - date: 2021-01-01
    title: IIIF Discovery group call
    location: Virtual (Zoom)
stay_connected_cards:
  - label: Attend an event
    description: The community hosts many virtual and in-person trainings, conferences, and other events.
    link_text: Learn more
    link:
  - label: Join a community group call
    description: Connect with peers and learn the latest through regular calls open to everyone.
    link_text: Learn more
    link: /community/groups/#calendar
  - label: Become a member
    description: Join global organizations large and small in supporting the IIIF community’s work.
    link_text: Learn more
    link: /community/consortium/join
---

{{ theme.block-center-start }}

## Break down silos with open APIs
Many of the images and audio/visual resources that are fundamental to research exist in silos, with access restricted to locally-built applications. IIIF gives you and your audience freedom to work across barriers.

{% include blocks/carousel.html items=page.iiif_basics_carousel %}

{{ theme.block-end }}




{{ theme.block-center-start }}

## Simplify and enhance your work
{% include blocks/features.html items=page.features %}
{% include misc/button.html button_label="Why IIIF" button_link="/get-started/why-iiif/" %}

{{ theme.block-end }}




{{ theme.block-center-start }}

## Start building with open APIs
The six IIIF APIs fit together to deliver endless possibilities.

{% include blocks/api-cards.html link_text="View Docs" items=site.data.apis %}

{{ theme.block-end }}



{% include blocks/hero.html hero=page.community_banner %}



{{ theme.block-center-start }}

## Funded by global technology leaders
IIIF is funded by a global consortium, and leveraged by aggregators, research institutions, national libraries, archives, museums, software companies, and digital agencies around the world.

{% assign new = site.data.institutions | where_exp: "org", 'org.new == true' %}
{% assign consortium = site.data.institutions | where_exp: "org", 'org.iiifc == 1 or org.iiifc == 2 or org.iiifc == 3' | where_exp: "org", 'org.logo and org.logo != nil and org.new != true' | sample: 7 %}
{% assign logos = new | concat: consortium %}

{% include blocks/logo-grid.html items=logos %}

{% include misc/button.html button_label="View All Consortium Members" button_link="/community/consortium/members" %}

{{ theme.block-end }}


{{ theme.block-center-start }}

## Featured events & news

{% include blocks/event-cards.html items=page.events %}
{% include misc/button.html button_label="View all" button_link="#" %}


{{ theme.block-end }}
