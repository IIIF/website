---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: International Image Interoperability Framework (IIIF)
---
<p class="lookatme">IIIF is an open-source software standard for delivering high quality, attributed digital objects (like image and audio/visual files) online at scale. It's _also_ the international community of people developing and implementing the IIIF APIs.</p>  

<p class="lookatme">IIIF is stewarded by a [consortium]({{ site.url }}{{ site.baseurl }}/community/consortium/).</p>


## Great for researchers

You need to **access** high-quality images, **examine** them closely, and **share** your work with collaborators. IIIF enables easy viewing of large images from multiple repositories, with comparison and annotation tools to aid research and presentation. Learn more.

## Efficient for developers

Publish once, use often! When you adopt the framework, you can easily serve digital objects to your own site, or to sites using IIIF anywhere in the world--all while giving users a high-quality viewing experience for multiple file types. Learn more.

## Powerful *and* practical for leaders

It's your goal to share knowledge and collections as widely as possible. IIIF is being adopted by global leading institutions as a cost-effective way to serve billions of digital objects online without vendor lock-in and with strong open-source, community-driven ethics. Learn more.

---

## Who is using IIIF?

 **Aggregators** such as JSTOR, CONTENTdm, DPLA, Europeana, the Internet Archive, and more.   

**Universities and research institutions** like Cambridge University, Kyoto University, Stanford University, University of Toronto, and Wellcome Trust.   

**National libraries** and **archives** like the Library of Congress, the Vatican, and the Egyptian National Library and Archives.   

**Museums** such as the British Museum, The J. Paul Getty Trust, and The Walters Art Museum.   

**Software companies** and **digital agencies** including Kakadu Software, Gallery Systems, Digirati, Cogapp, and more.   

Many institutions using IIIF's APIs become members of the <a href="{{ site.url }}{{ site.baseurl }}/community/consortium/">IIIF Consortium</a>, sustaining the framework’s growth and serving on advisory committees.

## See IIIF in action

<!-- [could show a big array of logos? Join this cool crowd?] \
[Caption - this wall of logos is also made using IIIF Viewer, link to the Orgs/Members] -->

### Compare images with **Mirador**
_IIIF can unite materials from one or many collections, allowing users to zoom, pan, and add additional images for comparison. Here, maps from the collections of Stanford University, Kyoto University, and the National Archives of Japan are shown in the Mirador viewer. Learn more at [Project Mirador](https://projectmirador.org/)._

{%- include mirador.html manifest_1="https://purl.stanford.edu/hs631zg4177/iiif/manifest" manifest_3="https://rmda.kulib.kyoto-u.ac.jp/iiif/metadata_manifest/RB00020027/manifest.json" manifest_2="https://api.cultural.jp/na/iiif/M1000000000000000475/manifest" -%}






### Integrate material types with **Universal Viewer**
_IIIF isn't just for images -- it supports audio/visual materials, too. Here, the Universal Viewer displays Acts 1 and 2 of the opera L'Elisir D'Amore with hierarchical tables of contents. This viewer also displays static images. Learn more at [Universal Viewer](https://universalviewer.io/)._

{%- include uv.html manifest="https://preview.iiif.io/cookbook/0026_0064_0065-opera-recipes/recipe/0026-toc-opera/manifest.json" -%}



---

> For more ways to use IIIF including image viewers and more, see the [Demos]({{ site.url }}{{ site.baseurl }}/demos/) section




---

{% include acronyms.md %}
