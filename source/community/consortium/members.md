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
Membership is open to universities, libraries, museums, archives, vendors, and others who have an interest in supporting the framework, and includes a range of benefits based on level of membership.
<br>
<center>{% include misc/button.html button_label="Learn more" button_link="/community/consortium/join" %}</center>


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
