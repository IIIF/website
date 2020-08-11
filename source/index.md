---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: International Image Interoperability Framework (IIIF)
---
<p class="lookatme">IIIF is an open-source software system delivering high quality, attributed digital objects (like image and audio/visual files) online at scale. It's _also_ the international community of people developing and implementing the IIIF APIs.</p>  

<p class="lookatme">IIIF is stewarded by a [consortium]({{ site.url }}{{ site.baseurl }}/community/consortium/).</p>


## Great for researchers

Researchers need to be able to **access** high quality images, **examine** them closely, and **share** their work with collaborators. IIIF helps this work by providing easy access to large images from multiple repositories, with viewing and annotation tools to aid research and presentation.

## Efficient for developers

Publish once, use often! When you adopt the framework, you can easily serve your digital objects to your own site, or to sites using IIIF anywhere in the world--all while giving users a high-quality viewing experience for multiple file types.

## Powerful *and* practical for leaders

We’re all in this game because we want to share knowledge and collections as widely as possible. If we can do it cost-effectively, we’re doing good work. IIIF is being adopted the world over by world-leading institutions, and serving billions of digital objects online without vendor lock-in and with strong open-source and community-driven ethics. [Join the IIIF Consortium today]({{ site.url }}{{ site.baseurl }}/community/consortium/join/) as publishers of your collection objects, code contributors, or voting members.

---

## See IIIF in action

<!-- [could show a big array of logos? Join this cool crowd?] \
[Caption - this wall of logos is also made using IIIF Viewer, link to the Orgs/Members] -->

### Easy comparison options: **Mirador**
_IIIF unites resources across collections for display and study. Here, maps from the collections of Stanford University, Kyoto University, and the National Archives of Japan are brought together in the Mirador viewer. Users may zoom and pan around each map, and can add additional images from other collections for comparison. For more, see [Project Mirador](https://projectmirador.org/)._

{%- include mirador.html manifest_1="https://purl.stanford.edu/hs631zg4177/iiif/manifest" manifest_3="https://rmda.kulib.kyoto-u.ac.jp/iiif/metadata_manifest/RB00020027/manifest.json" manifest_2="https://api.cultural.jp/na/iiif/M1000000000000000475/manifest" -%}






### Simple integration of many material types: **Universal Viewer**
_IIIF isn't just for images -- it supports audio/visual materials with hierarchical tables of contents, too. Here, the Universal Viewer plays Acts 1 and 2 of the opera L'Elisir D'Amore. This viewer also displays static images, allowing easy viewing of multiple resource types. Learn more at [Universal Viewer](https://universalviewer.io/)._

{%- include uv.html manifest="https://preview.iiif.io/cookbook/0026_0064_0065-opera-recipes/recipe/0026-toc-opera/manifest.json" -%}



---

> For more ways to use IIIF including image viewers and more, see the [Demos]({{ site.url }}{{ site.baseurl }}/demos/) section




---

{% include acronyms.md %}
