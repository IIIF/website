---
layout: default
title: Past Events
---
# Past Events

<table>
{%- for event in site.data.event_calendar -%}
<tr>
<td>
  <span>{{ event.date | escape }}</span>
  </td>
  <td>
    <h3>
      <a class="post-link" href="{{ event.url | relative_url }}">
      {{ event.title | escape }}
      </a>
    </h3>
  </td>
  <td>
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
  </td>
</tr>
{%- endfor -%}
</table>
