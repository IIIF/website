---
layout: default
title: Events
permalink: /events/
---
{{ theme.block-center-start }}

<h2>All Featured Events</h2>

{%- include blocks/event-cards.html items=site.data.events sticky='true' -%}

{{ theme.block-end }}



{{ theme.block-center-start }}

<h2>All Upcoming Community Calls</h2>
{%- include blocks/event-cards.html items=site.data.events type='community_call' -%}

{{ theme.block-end }}



{{ theme.block-center-start }}

<h2>Past Featured Events</h2>
- [Test Event Title 1](#)
- [Test Event Title 2](#)
- [Test Event Title 3](#)

{{ theme.block-end }}
