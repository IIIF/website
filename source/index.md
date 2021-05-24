---
layout: default
title: Home
hero:
  image: "assets/images/possible_header_images/Under_the_Wave_off_Kanagawa.jpg"
  title: Gain richer access to the world's image and audio/visual files
  subtitle: IIIF is an open standard for delivering high-quality, attributed digital objects online at scale. It’s also an international community developing and implementing the IIIF APIs. IIIF is stewarded by a consortium.
  is_fullheight: true
  button:
    label: "Get Started"
    link: "/get-started"
community_banner:
  image: "assets/community.jpg"
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

{% include blocks/demos.html items=site.data.demos %}
{% include misc/button.html button_label="View Demos" button_link="/demos/" %}

{{ layout.block-end }}





{{ layout.block-start }}

## Upcoming community calls
Join a call (newcomers welcome!)
{% for call in site.data.calls %}
- **{{ call.name }}** ({{ call.date }} – {{ call.time }})
{% endfor %}

{% include misc/button.html button_label="View full calendar" button_link="/news-and-events/" %}

{{ layout.block-end }}




{{ layout.block-start }}

## Simplify and enhance your work
{% include blocks/features.html items=site.data.features %}
{% include misc/button.html button_label="Why IIIF" button_link="/get-started/" %}

{{ layout.block-end }}




{{ layout.block-start }}

## Start building with open APIs
The six IIIF APIs fit together to deliver endless possibilities.
{% include blocks/api-cards.html link_text="View Docs" items=site.data.apis %}

{{ layout.block-end }}



{% include heros/anywhere.html hero=page.community_banner %}



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
