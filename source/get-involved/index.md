---
layout: default
title: Get Involved
subtitle: >
  The International Image Interoperability Framework (IIIF) encompasses a large and growing community of interested individuals, organizations, a Consortium.
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
  - label: Explore our groups
    description: Our groups discuss elements or contexts of IIIF usage or to agree on direction of an idea or initiative.
    link: '/community/groups/'
  - label: Newsletter Sign up
    description: Sign up for the newsletter - news about events, training, cool projects, and community updates
    link: '/newsletter'
  - label: Share your news & events
    description: Send us your latest IIIF news and events listings for inclusion in our monthly newsletter.
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSetIpJYr9yq827QD7Bl0J31q4E2w0_O-8bUjoqX4XYKm7eU8A/viewform'
  - label: Watch a recording
    description: Catch up on presentations from recent events.
    link: '/get-started/talks/'
  - label: Host an event
    description: Want to host a local in-person or online event? We have a guide for that.
    link: '/event/host-your-own-IIIF-event/'
  - label: Join IIIF Slack
    description: Join the IIIF Slack team - lots of activity, specific channels for groups, and more!
    link: 'http://bit.ly/iiif-slack'


---
{{ layout.block-start }}
## Join our Community

Scholars, software people, researchers, and culture workers are the types who tend to gravitate around IIIF, and everything we do is guided by our code of conduct. Overall, we think there are hundreds of adopters of IIIF all around the world, at libraries, museums, archives, universities, and some companies, too.

{% include blocks/cards.html items=page.more_resources_cards %}

{{ layout.block-end }}




{{ layout.block-start }}

## Upcoming Events

{% include blocks/event-cards.html items=page.events %}


{{ layout.block-end }}



{{ layout.block-start }}

## IIIF Consortium

{% capture capture_text %}
IIIF is supported by a membership consortium, with members from all over the world including Stanford University, Europeana, Kansai University, and many more.
<br><br>
You can join the consortium as a full or associate member. Consortium members can access customized training, and have voting rights on the overall direction of the framework via the Technical Review Committee or Executive Committee. The consortium has staff, who are stewards looking after the community, organizing events and training, and helping things run smoothly.
{% endcapture %}

{% include blocks/image-and-text.html image_align='left' image='assets/images/defaults/blank-image.png' content=capture_text button_label="Join the Consortium" button_link="/community/consortium/join" alt_text="The IIIF Consortium" %}

{{ layout.block-end }}
