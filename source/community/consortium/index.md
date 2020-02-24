---
title: IIIF Consortium
id: consortium
layout: spec
---

## The IIIF Consortium

To join the IIIF Consortium, take a look at the [benefits of membership][join], and send an email to [admin@iiif.io][admin] expressing your interest.

The IIIF Consortium (IIIF-C) was formed in [June 2015][news] in Oxford, England, to provide steering and sustainability for the IIIF community. The IIIF-C now comprises more than 40 Founding Members across the globe who have signed the IIIF-C [Memorandum of Understanding][mou], committing to support the growth and adoption of IIIF. IIIF-C provides continued support for adoption, experimentation, outreach, and a thriving community of libraries, museums, software firms, scholars, and technologists working with IIIF. For more information on the benefits and process for joining, please visit the [IIIF-C FAQ][iiifc-faq].

In April of 2018, the IIIF Consortium ratified a document titled ["Next Steps for the International Image Interoperability Framework,"][next_steps] which lays out some future directions and opportunities for the community.


## Staff

 * IIIF-C Managing Director, Josh Hadro - <josh.hadro@iiif.io>
 * IIIF-C Technical Coordinator, Glen Robson - <glen.robson@iiif.io>
 * IIIF-C Community and Events Coordinator, Meg O'Hearn - <meg.ohearn@iiif.io>

## Full Founding Members

<ul>
{% for i in site.data.institutions %}
    {% if i.iiifc < 3 %}
  <li>
      {% if i.uri %}<a href="{{ i.uri }}">{% endif %}
        {{ i.name }}
      {% if i.uri %}</a>{% endif %}
  </li>
    {% endif %}
{% endfor %}
</ul>

## Additional Full Members

<ul>
{% for i in site.data.institutions %}
    {% if i.iiifc == 3 %}
  <li>
      {% if i.uri %}<a href="{{ i.uri }}">{% endif %}
        {{ i.name }}
      {% if i.uri %}</a>{% endif %}
  </li>
    {% endif %}
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

[join]: {{ site.url }}{{ site.baseurl }}/community/consortium/join/
[admin]: mailto:admin@iiif.io
[mou]: {{ site.url }}{{ site.baseurl }}/community/consortium/mou/
[news]: {{ site.url }}{{ site.baseurl }}/news/2015/06/17/iiif-consortium/
[iiifc-faq]: {{ site.url }}{{ site.baseurl }}/community/consortium/faq
[next_steps]: {{ site.url }}{{ site.baseurl }}/community/consortium/next_steps
