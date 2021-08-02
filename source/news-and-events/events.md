---
layout: page
title: All Events
permalink: /events/
---
<ul>
{% for event in site.events %}
  <li>
    <a href="{{ event.url | absolute_url }}">{{ event.title}}</a>
  </li>
{% endfor %}
</ul>
