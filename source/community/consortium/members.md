---
title: Consortium Members
id: members
layout: page
breadcrumbs:
 - label: Community
   link: /community/
 - label: Consortium
   link: /community/consortium
---

## Join the Consortium
Membership is open to universities, libraries, museums, archives, vendors, and others who have an interest in supporting the framework. Multiple levels of membership are available.
<br>
{% include misc/button.html button_label="Join the Consortium" button_link="/community/consortium/join" %}


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
