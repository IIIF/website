---
title: Consortium Members
id: members
layout: default
tags: [members ]
---


<!-- Output copied to clipboard! -->

<!-----
NEW: Check the "Suppress top comment" option to remove this info from the output.

Conversion time: 1.229 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β29
* Thu Jul 23 2020 13:52:00 GMT-0700 (PDT)
* Source doc: Copy of Copywriting - iiif.io
* This is a partial selection. Check to make sure intra-doc links work.
----->


**About the IIIF Consortium** /

Consortium Members | <span style="text-decoration:underline;">Join the Consortium</span> | <span style="text-decoration:underline;">Meet the Staff</span> | <span style="text-decoration:underline;">Memorandum of Understanding</span>

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
