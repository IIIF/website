---
title: Consortium Members
id: members
layout: default
tags: [members ]
---

# Consortium Members

## Full Members

\* indicates Founding Member of the IIIF Consortium
<ul>
  {% for i in site.data.institutions %}
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
{% for i in site.data.institutions %}
    {% if i.iiifc == 4 %}
  <li>
      {% if i.uri %}<a href="{{ i.uri }}">{% endif %}
        {{ i.name }}
      {% if i.uri %}</a>{% endif %}
  </li>
    {% endif %}
{% endfor %}
</ul>
