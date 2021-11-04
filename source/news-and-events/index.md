---
layout: default
title: News & Events
subtitle: Stay up to date on events, upcoming community calls, and news.
permalink: /news-and-events/
hero:
  image: "assets/uploads/wellcome-telegraph.webp"
top_tabs:
  - label: Featured events
    content: "{%- include blocks/event-cards.html items=site.data.events limit=2 -%}{%- include misc/button.html button_label='View all' button_link='/events' -%}"
  - label: Group meetings
    content: "{%- include blocks/event-cards.html limit=4 type='community_call' -%}{%- include misc/button.html button_label='View all' button_link='/events' -%}"
  - label: Call calendar
    content: "{% include misc/community_calendar.html %}"
banner:
  title: "Get monthly updates"
  color: '#001927'
  button:
    label: "Sign up"
    link: "/newsletter/"
quote:
  text: "The technical stuff is hard. It’s dealing with a hard thing. It’s modelling something that’s complex. It’s going to be tricky to get to grips with. The thing that made the difference was attending my first IIIF conference."
  attribution: "2020 IIIF Conference Attendee"
cards:
  - label: Share your news & events
    description: Send us your latest IIIF news and events listings for inclusion in our monthly newsletter.
    link_text: Share
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSetIpJYr9yq827QD7Bl0J31q4E2w0_O-8bUjoqX4XYKm7eU8A/viewform'
  - label: Host an event
    description: Want to host a local in-person or online event? We have a guide for that.
    link: '/event/host-your-own-IIIF-event/'
    link_text: Learn more
  - label: Watch a recording
    description: Catch up on presentations from recent calls and events.
    link: '/get-started/talks/'
    link_text: Watch

---

{{ theme.block-center-start }}


{% include blocks/tabs.html  tabs=page.top_tabs %}

{{ theme.block-end }}



{{ theme.block-center-start }}

## Featured news

{% include blocks/news-cards.html limit=2 %}{% include misc/button.html button_label='View all' button_link='/news' %}

{{ theme.block-end }}


{% include blocks/hero.html hero=page.banner %}




{{ theme.block-center-start }}

## What people are saying

{% include blocks/pullquote.html quote=page.quote %}


{{ theme.block-end }}




{{ theme.block-center-start }}

## Contribute to the community

{% include blocks/cards.html items=page.cards %}

{{ theme.block-end }}
