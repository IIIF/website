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
{{ theme.block-start }}

{% assign members = site.data.institutions | where_exp: "org", 'org.iiifc == 1 or org.iiifc == 2 or org.iiifc == 3 or org.iiifc == 4' %}

The IIIF-C now comprises [{{ members.size }} members]({{ site.root_url | absolute_url }}/community/consortium/members/) around the world who have signed a IIIF-C Memorandum of Understanding committing to support the growth and adoption of IIIF, including the members listed below.

{{ theme.block-end }}
{{ theme.block-center-start }}


## Join
Membership is open to universities, libraries, museums, archives, vendors, and others who have an interest in supporting the framework. Multiple levels of membership include a range of benefits.   
<br>
<div class="columns is-centered">{% include misc/button.html button_label="Learn more" button_link="/community/consortium/join" %}</div>

{{ theme.block-end }}

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

