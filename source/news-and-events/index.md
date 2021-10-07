---
layout: default
title: News & Events
subtitle: Stay up to date on the latest events, community calls, and news.
permalink: /news-and-events/
hero:
  image: ''
top_tabs:
  - label: Featured IIIF events
    content: "{%- include blocks/event-cards.html items=site.data.events limit=2 sticky='true' -%}{%- include misc/button.html button_label='View All' button_link='/events' -%}"
  - label: Community group meetings
    content: "{%- include blocks/event-cards.html items=site.data.events limit=4 type='community_call' -%}{%- include misc/button.html button_label='View All' button_link='/events' -%}"
  - label: Call calendar
    content: "{% include misc/community_calendar.html %}"
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


{% comment %}
<h2>Featured Events & Meetings</h2>

<h3>Upcoming IIIF events</h3>

{%- include blocks/event-cards.html items=page.events limit=2 -%}
{%- include misc/button.html button_label='View All' button_link='/events' -%}

<h3>Community group meetings</h3>

{%- include blocks/event-cards.html items=page.events limit=4 -%}
{%- include misc/button.html button_label='View All' button_link='/events' -%}
{% endcomment %}

{{ theme.block-end }}



{{ theme.block-center-start }}

## Featured News

{% include blocks/news-cards.html limit=2 %}{% include misc/button.html button_label='View All' button_link='/news' %}

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
