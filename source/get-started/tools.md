---
title: "Popular IIIF Tools"
layout: spec
breadcrumbs:
 - label: Get Started
   link: /get-started/
hero:
  image: "assets/images/heroes/hero-2@3x.webp"
---

These tools offer user interfaces for working with IIIF resources in various ways--such as creating exhibitions, annotating images, and more--and often only require a link to one or more IIIF Manifests to use (see our [Guide to Finding IIIF resources]({{ site.guides_url | absolute_url }}/finding_resources/) for details).

If you find these helpful, you may also want to explore the [IIIF Awesome list][awesome]{:.external} for even more links to tools, demos, tutorials, and other resources.

See also:
- [IIIF Image and A/V Viewers]({{ site.root_url | absolute_url }}/get-started/iiif-viewers/)


### Platforms 

- [Recogito](https://recogito.pelagios.org/) - A popular and award-winning Digital Humanities platform for collaborative document annotation, maintained by [Pelagios](https://pelagios.org/).
- [From the Page](https://fromthepage.com/) - FromThePage is software for transcribing documents and collaborating on transcriptions with others.
- [Digital Mappa](https://www.digitalmappa.org/) - An open-source digital humanities platform for open-access workspaces, projects and publications.
- [Allmaps](https://allmaps.org/) - Allmaps is a set of open source tools that make it easier and more fun to search, explore, georeference and work with collections of digitised maps.

### Exhibition and guided viewing

Tools and resources that provide functionality for presenting IIIF materials in an exhibition-like setting (and potentially other functionality).

- [Annona Range Storyboard](https://ncsu-libraries.github.io/annona/range/) - [Annona](https://ncsu-libraries.github.io/annona/) toolkit which allows for the guided viewing of segments of a manifest, in addition to the [Annona Multi Storyboard Viewer](https://ncsu-libraries.github.io/annona/multistoryboard/) for guided comparison of multiple manifests.
- [Adno](https://adno.app/en/) - Adno is a web application for viewing, editing and sharing narratives and journeys on online images, static images and IIIF images.
- [Curation Tools](http://codh.rois.ac.jp/software/) - Set of tools, including a Viewer, Curation Manager, Curation Board, and more from the Center for Open Data in the Humanities (all tool descriptions in Japanese, some also available in English).
- [Exhibit](https://exhibit.so/) - A free IIIF storytelling tool that allows for guided navigation of one or more IIIF Manifests using annotations.  
- [Micrio](https://micr.io/iiif) - High-performance client with WebAssembly/WebGL engine and additional storytelling elements. Also offering full server IIIF support.
- [MLOL Stories](https://iiif.medialibrary.it/stories/) - A tool to promote the use of digital collections through innovative online narratives (in Italian).
- [Omeka-S plugins](https://omeka.org/s/modules/IiifServer/)
- [Spotlight](http://spotlight.projectblacklight.org/){:data-proofer-ignore=''} - a self-service approach for creating exhibit websites to highlight digital collections; based on [Blacklight](http://projectblacklight.org/).
- [Storiiies Editor](https://storiiies-editor.cogapp.com/) – a free online storytelling platform for creating guided tours of a single IIIF manifest using annotations.
- [StrollView](https://seige.digital/en/strollview/) - StrollView is a cross-institutional storytelling application.
- [Wax](https://minicomp.github.io/wax/) - a minimal computing project for producing digital exhibitions focused on longevity, low costs, and flexibility.
- [Juncture Digital](https://juncture-digital.org/) - a free-to-use, open source framework for converting simple text files into an engaging visual essay incorporating IIIF materials and more.

### Manifest generation and templates

- [biiif](https://github.com/edsilv/biiif/) - A tool for organising your files according to a simple naming convention to generate IIIF v3 manifests. (See also: [biiif Template Tool](https://github.com/iiif-commons/biiif-template), which helps deploy tiled images and manifests to hosted services like Vercel and Netlify, no command line usage necessary)
- [Bodleian Manifest Editor](https://digital.bodleian.ox.ac.uk/manifest-editor/) - A Web application for importing, viewing, updating, and exporting manifests. [Note: currently only supports IIIF Presentation API 2.1]


<!-- ### Recent community tools

{% for example in site.data.recent_tools %}
- [{{example.name}}]({{example.url}}){%if example.creators%} by {{example.creators}}{% endif %} - {{example.description}} {%if example.demo%}(<a href="{{example.demo}}">Demo</a>){% endif %} {%if example.github%}(<a href="{{example.github}}">Github</a>){% endif %}
{% endfor %}
 -->

 [awesome]: https://github.com/IIIF/awesome-iiif
