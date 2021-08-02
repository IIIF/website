---
layout: page
title: All News
permalink: /news/
---
<ul>
{% for item in site.news %}
  <li>
    <a href="{{ item.url | absolute_url }}">{{ item.title}}</a>
  </li>
{% endfor %}
</ul>
