---
title: "Popular IIIF Tools"
layout: page
breadcrumbs:
 - label: Get Started
   link: /get-started/
---

These tools offer a user interface for working with IIIF, so all that's needed to get started is a link to one or more IIIF manifests (see our [Guide to Finding IIIF resources]({{ site.guides_url | absolute_url }}/finding_resources/) for instructions).

- [From the Page](https://fromthepage.com/) - FromThePage is software for transcribing documents and collaborating on transcriptions with others.
- [Recogito](https://recogito.pelagios.org/) - A popular and award-winning Digital Humanities platform for collaborative document annotation, maintained by [Pelagios](https://pelagios.org/).
- [Allmaps](https://allmaps.org/) - Allmaps is a set of open source tools that make it easier and more fun to search, explore, georeference and work with collections of digitised maps. 
- [Digital Mappa](https://www.digitalmappa.org/) - An open-source digital humanities platform for open-access workspaces, projects and publications.

### Exhibition and Guided Viewing Tools

Tools and resources that provide functionality for presenting IIIF materials in an exhibition-like setting (and potentially other functionality).

- [Annona Range Storyboard](https://ncsu-libraries.github.io/annona/range/) - [Annona](https://ncsu-libraries.github.io/annona/) toolkit which allows for the guided viewing of segments of a manifest, in addition to the [Annona Multi Storyboard Viewer](https://ncsu-libraries.github.io/annona/multistoryboard/) for guided comparison of multiple manifests.
- [Curation Tools](http://codh.rois.ac.jp/software/) - Set of tools, including a Viewer, Curation Manager, Curation Board, and more from the Center for Open Data in the Humanities (all tool descriptions in Japanese, some also available in English).
- [Exhibit](https://exhibit.so/) - A free IIIF storytelling tool that allows for guided navigation of one or more IIIF Manifests using annotations.  
- [Micrio](https://micr.io/iiif) - High-performance client with WebAssembly/WebGL engine and additional storytelling elements. Also offering full server IIIF support.
- [Omeka-S plugins](https://omeka.org/s/modules/IiifServer/)
- [Spotlight](http://spotlight.projectblacklight.org/) - a self-service approach for creating exhibit websites to highlight digital collections; based on [Blacklight](http://projectblacklight.org/).
- [Storiiies Editor](https://storiiies-editor.cogapp.com/) – a free online storytelling platform for creating guided tours of a single IIIF manifest using annotations.
- [StrollView](https://seige.digital/en/strollview/) - StrollView is a cross-institutional storytelling application.
- [Wax](https://minicomp.github.io/wax/) - a minimal computing project for producing digital exhibitions focused on longevity, low costs, and flexibility.

### Recent Community Tools

{% for example in site.data.recent_tools %}
- [{{example.name}}]({{example.url}}){%if example.creators%} by {{example.creators}}{% endif %} - {{example.description}} {%if example.demo%}(<a href="{{example.demo}}">Demo</a>){% endif %} {%if example.github%}(<a href="{{example.github}}">Github</a>){% endif %}
{% endfor %}
