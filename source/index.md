---
layout: default
title: Home
hero:
  image: "assets/images/heroes/hero-1.webp"
  title: Gain richer access to the world's image and audio/visual files
  subtitle: IIIF is an open standard for delivering high-quality, attributed digital objects online at scale. It’s also an international community developing and implementing the IIIF APIs. IIIF is stewarded by a consortium.
  button:
    label: "Get Started"
    link: "/get-started"
demos:
  - image: assets/uploads/silos-1.webp
    alt_text: This is my alt text
    link: /demos/
    label: This Amazing Organization annotates artwork.
  - image: assets/uploads/silos-2.webp
    link: /demos/
    label: This Amazing Organization enables viewing.
  - image: assets/uploads/silos-3.webp
    link: /demos/
    label: This Amazing Organization enables research.
features:
  - label: Great for researchers
    description: Access, examine, compare, and annotate high-quality resources, then share your work with others. IIIF enables easy use across repositories, with tools to aid research and presentation.
    image: assets/images/icons/research@2x.webp
  - label: Efficient for developers
    description: Publish once, use often! IIIF lets you serve digital objects to your own site, or to sites using IIIF anywhere in the world–all while giving users a high-quality viewing experience for multiple file types.
    image: assets/images/icons/developer@2x.webp
  - label: Practical for leaders
    description: Share your collections as widely as possible. IIIF is being adopted by global leading institutions as a cost-effective way to serve billions of digital objects online without vendor lock-in and with strong open-source, community-driven ethics.
    image: assets/images/icons/leader@2x.webp
community_banner:
  image: "assets/images/heroes/event@3x.webp"
  button:
    label: "Learn More"
    link: "/get-involved"
  title: "Join the community"
  subtitle: "Over 10 community groups (and counting) tackle a diverse range of topics relating to the Framework—from crafting new technical specifications and implementing IIIF in specific communities, to conducting outreach."
stay_connected_cards:
  - label: Attend an event
    description: The IIIF community hosts many virtual and in-person trainings, conferences, and other events each year.
    link_text: Learn more
    link: /get-involved
  - label: Join a community group call
    description: Connect with and learn from your peers by joining a community group, or by proposing a new one! Calls are open to everyone.
    link_text: Learn more
    link: /get-involved
  - label: Become a member
    description: Join leading global organizations large and small in supporting the IIIF community’s work by becoming a member of the Consortium.
    link_text: Learn more
    link: /get-involved
---

{{ layout.block-start }}

## Break down silos with free APIs
Much of the internet’s digitized image, audio, and visual resources are locked up in restricted silos. IIIF enables users to view zoom, pan, and add additional images for comparison--on one site, or across many times. It also allows annotations and multi-layer viewing, among many other options.

{% include blocks/demos.html items=page.demos %}
{% include misc/button.html button_label="View Demos" button_link="/demos/" %}

{{ layout.block-end }}



{{ layout.block-start }}

## Upcoming community calls
Join a call (newcomers welcome!)
{% for call in site.data.calls %}
- **{{ call.name }}** ({{ call.date }} – {{ call.time }})
{% endfor %}

{% include misc/button.html button_label="View full calendar" button_link="#" %}

{{ layout.block-end }}




{{ layout.block-start }}

## Simplify and enhance your work
{% include blocks/features.html items=page.features %}
{% include misc/button.html button_label="Why IIIF" button_link="/get-started/" %}

{{ layout.block-end }}




{{ layout.block-start }}

## Start building with open APIs
The six IIIF APIs fit together to deliver endless possibilities.

{% include blocks/api-cards.html link_text="View Docs" items=site.data.apis %}

{{ layout.block-end }}



{% include blocks/hero.html hero=page.community_banner %}



{{ layout.block-start }}

## Trusted by global technology leaders
IIIF is used by aggregators, universities and research institutions, national libraries, archives, museums, software companies, and digital agencies around the world.
{% include blocks/logo-grid.html items=site.data.institutions %}

{{ layout.block-end }}





{{ layout.block-start }}

## Get involved and stay connected
Anyone can participate in the IIIF community. Find the way that’s right for you!
{% include blocks/cards.html items=page.stay_connected_cards %}

{{ layout.block-end }}
