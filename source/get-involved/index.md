---
layout: default
title: Get Involved
subtitle: >
  There are many ways to get involved in our large and growing international community. Find the way that works for you!
permalink: /get-involved/
hero:
  image: "assets/images/heroes/event@2x.webp"
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
more_resources_cards:
  - label: Explore community groups
    description: Our community groups include affinity and technical groups and meet regularly to discuss ways of using IIIF.
    link: '/community/groups/'
  - label: Sign up for our newsletter
    description: Sign up for our newsletter to receive monthly updates about the framework, community, training and events, and new projects.
    link: '/newsletter'
  - label: Share your news & events
    description: Send us your latest IIIF news and events listings for inclusion in our monthly newsletter.
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSetIpJYr9yq827QD7Bl0J31q4E2w0_O-8bUjoqX4XYKm7eU8A/viewform'
  - label: Watch a recording
    description: Catch up on presentations from recent calls and events.
    link: '/get-started/talks/'
  - label: Host an event
    description: Want to host a local in-person or online event? We have a guide for that.
    link: '/event/host-your-own-IIIF-event/'
  - label: Join us on Slack
    description: Join the IIIF Slack workspace to ask questions, take part in discussions, network, and more.
    link: 'http://bit.ly/iiif-slack'


---
{{ theme.block-center-start }}
## Join our community

Scholars, developers, researchers, librarians, and cultural workers at libraries, museums, archives, universities, and companies tend to gravitate to the IIIF community. All calls and events are guided by our code of conduct.

{% include blocks/cards.html items=page.more_resources_cards %}

{{ theme.block-end }}




{{ theme.block-center-start }}

## Upcoming events

{% include blocks/event-cards.html items=page.events %}


{{ theme.block-end }}



{{ theme.block-center-start }}

## Join the IIIF Consortium

{% capture capture_text %}
IIIF is supported by a global consortium which includes institutions like Stanford University, Europeana, Kansai University, the and many more.
<br><br>
Organizations and institutions can join the consortium as Full or Associate members with a range of benefits attached to their membership.
{% endcapture %}

{% include blocks/image-and-text.html image_align='left' image='assets/uploads/consortium_map.png' content=capture_text button_label="Learn more" button_link="/community/consortium/join" alt_text="The IIIF Consortium map" %}

{{ theme.block-end }}
