---
title: Consortium Members
id: members
layout: page
hero:
  button:
    label: "Join the Consortium"
    link: "/community/consortium/join"
breadcrumbs:
 - label: Community
   link: /community/
 - label: Consortium
   link: /community/consortium
---

## Full Members

\* indicates Founding Member of the IIIF Consortium
<ul>
  {% for i in site.data.old.institutions %}
    {% if i.iiifc < 3 %}
   <li>
      {% if i.uri %}<a href="{{ i.uri }}">{% endif %}
        {{ i.name }}
      {% if i.uri %}</a>*{% endif %}
  </li>{% endif %}
    {% if i.iiifc == 3 %}
   <li>
      {% if i.uri %}<a href="{{ i.uri }}">{% endif %}
        {{ i.name }}
      {% if i.uri %}</a>{% endif %}
  </li>{% endif %}
  {% endfor %}
</ul>


## Associate Members

<ul>
{% for i in site.data.old.institutions %}
    {% if i.iiifc == 4 %}
  <li>
      {% if i.uri %}<a href="{{ i.uri }}">{% endif %}
        {{ i.name }}
      {% if i.uri %}</a>{% endif %}
  </li>
    {% endif %}
{% endfor %}
</ul>
