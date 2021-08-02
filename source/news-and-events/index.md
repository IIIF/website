---
layout: default
title: News & Events
subtitle: Stay up to date on the latest events, community calls, and news.
permalink: /news-and-events/
hero:
  image: ''
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
top_tabs:
  - label: Events
    content: "{%- include blocks/event-cards.html items=page.events -%}{%- include misc/button.html button_label='View All' button_link='/events' -%}"
  - label: Community Meetings
    content: "{% include community_calendar.html %}"
  - label: News
    content: "{% include recent_news.html limit=10 %}{% include misc/button.html button_label='View All' button_link='/news' %}"
banner:
  title: "Get monthly updates on IIIF"
  color: '#001927'
  button:
    label: "Sign Up for Newsletter"
    link: "/newsletter/"
quote:
  text: "The technical stuff is hard. It’s dealing with a hard thing. It’s modelling something that’s complex. It’s going to be tricky to get to grips with. The thing that made the difference was attending my first IIIF conference."
  attribution: "2020 IIIF Conference Attendee"
cards:
  - label: Share your news & events
    description: Send us your latest IIIF news and events listings for inclusion in our monthly newsletter.
    link_text: Share
    link: ''
  - label: Host event
    description: Want to host a local in-person or online event? We have a guide for that.
    link_text: Read
    link: ''
  - label: Watch a recording
    description: Catch up on presentations from recent events.
    link_text: Watch
    link: ''

---

{{ theme.block-center-start }}

{% include blocks/tabs.html  tabs=page.top_tabs %}

{{ theme.block-end }}


{% include blocks/hero.html hero=page.banner %}




{{ theme.block-center-start }}

## What People Are Saying

{% include blocks/pullquote.html quote=page.quote %}


{{ theme.block-end }}




{{ theme.block-center-start }}

## Contribute To Our Community

{% include blocks/cards.html items=page.cards %}

{{ theme.block-end }}
