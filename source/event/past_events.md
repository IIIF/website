---
layout: default
title: Past Events
---


Past Events | <span style="text-decoration:underline;">Host Your Own</span>

<ul class="post-list">
  {%- for event in site.data.event_calendar -%}
  <li>
    <span class="post-meta">{{ event.date | escape }}</span>
    <h3>
      <a class="post-link" href="{{ event.url | relative_url }}">
        {{ event.title | escape }}
      </a>
    </h3>
    <ul>
        <li>Location: {{ event.location | escape }}</li>
        {%- if event.notes -%}
        <li>Notes: {{ event.notes | escape }}</li>
        {%- endif -%}
        {%- if event.iiif_presence -%}
        <li>IIIF Presence: {{ event.iiif_presence | escape }}</li>
        {%- endif -%}
        {%- if event.attending -%}
        <li>Attending: {{ event.attending | escape }}</li>
        {%- endif -%}
    </ul>
  </li>
  {%- endfor -%}
</ul>
