---
layout: default
title: Get Involved
subtitle: >
  IIIF encompasses a large and growing community of individuals and organizations.
permalink: /get-involved/
hero:
  image: "assets/images/heroes/event@2x.webp"
events:
  - date: 2021-04-04
    title: IIIF Museums Call
    location: Virtual (Zoom)
  - date: 2021-03-23
    title: IIIF Maps Call
    location: Virtual (Zoom)
  - date: 2021-02-12
    title: IIIF Archives Call
    location: Virtual (Zoom)
  - date: 2021-01-01
    title: IIIF Discovery Group
    location: Virtual (Zoom)
more_resources_cards:
  - label: Explore community groups
    description: Our community groups are affinity and technical groups that meet regularly to discuss ways of using IIIF.
    link: '/community/groups/'
  - label: Newsletter sign up
    description: Sign up for the newsletter to receive monthly updates about the framework, community, training and events, and new projects.
    link: '/newsletter'
  - label: Share your news & events
    description: Send us your latest IIIF news and events listings for inclusion in our monthly newsletter.
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSetIpJYr9yq827QD7Bl0J31q4E2w0_O-8bUjoqX4XYKm7eU8A/viewform'
  - label: Watch a recording
    description: Catch up on presentations from recent events.
    link: '/get-started/talks/'
  - label: Host an event
    description: You can host a local in-person or online event, and we have a guide for that.
    link: '/event/host-your-own-IIIF-event/'
  - label: Join the IIIF Slack
    description: Join the IIIF Slack team to ask questions and join discussions, network, learn about new initiatives, and more.
    link: 'http://bit.ly/iiif-slack'


---
{{ theme.block-center-start }}
## Join our community

Scholars, developers, researchers, librarians, and cultural workers at libraries, museums, archives, universities, and companies tend to gravitate to the IIIF community. All calls and events (virtual and in person) are guided by our code of conduct.

{% include blocks/cards.html items=page.more_resources_cards %}

{{ theme.block-end }}




{{ theme.block-center-start }}

## Upcoming Events

{% include blocks/event-cards.html items=page.events %}


{{ theme.block-end }}



{{ theme.block-center-start }}

## IIIF Consortium

{% capture capture_text %}
IIIF is supported by a global consortium which includes institutions like Stanford University, Europeana, Kansai University, the and many more.
<br><br>
Organizations and institutions can join the consortium as Full or Associate members with a range of benefits attached to membership. The consortium has staff, who support the community by organizing events and training, and ensuring things run smoothly.
{% endcapture %}

{% include blocks/image-and-text.html image_align='left' image='assets/uploads/consortium_map.png' content=capture_text button_label="Join the Consortium" button_link="/community/consortium/join" alt_text="The IIIF Consortium map" %}

{{ theme.block-end }}
