---
layout: default
title: Demos
subtitle: >
  Get inspired by demos ranging from basic image viewers to IIIF-based machine learning character recognition built by the community.
permalink: /demos/
get_started_cards:
  - label: Explore API Documentation
    description: Sed ac turpis ut nisi convallis accumsan a eu sem. Vestibulum suscipit nisi nunc, in bibendum enim tempus sed.
    link_text: Learn more
    link: ''
    alt_text: "TKTK"
  - label: How It Works
    description: Sed ac turpis ut nisi convallis accumsan a eu sem. Vestibulum suscipit nisi nunc, in bibendum enim tempus sed.
    link_text: Learn more
    link: ''
    alt_text: "TKTK"
  - label: Join community group calls
    description: Connect with and learn from your peers by joining a community group, or by proposing a new one! Calls are open to everyone.
    link_text: Learn more
    link: ''
    alt_text: "TKTK"
iiif_basics_carousel:
  - resource:
      url: 'assets/uploads/nationalmuseum.webp'
      type: image
      alt_text: 'Nationalmuseum screenshot'
      caption: 'Nationalmuseum has implemented the IIIF Image API and the OpenSeadragon viewer, which allows smooth, deep zoom on images as well as the ability to easily switch out front end tools and back end systems.'
    link:
      url: 'http://collection.nationalmuseum.se/eMP/eMuseumPlus?service=direct/1/ResultDetailView/result.inline.lightbox.t1.collection_lightbox.$TspTitleImageLink.link&sp=13&sp=Sexhibition&sp=SfilterDefinition&sp=0&sp=2&sp=3&sp=SdetailView&sp=11&sp=Sdetail&sp=1&sp=T&sp=0&sp=Slightbox_3x4&sp=0&sp=T&sp=1#exhibitionReferences'
      label: 'Open Demo'
  - resource:
      url: 'assets/uploads/stanford_newspaper.webp'
      type: image
      alt_text: 'Stanford screenshot'
      caption: "Stanford University has implemented the IIIF Image and Presentation APIs, which allow smooth, deep zoom on images and the ability to easily switch front end tools and back end systems, plus the ability to display multi-image objects such as the newspaper shown here, and work with them across sites and tools."
    link:
      url: 'https://searchworks.stanford.edu/view/10384606'
      label: 'Open Demo'
  - resource:
      url: 'assets/uploads/wellcome_zebrafish.webp'
      type: image
      alt_text: "Wellcome Collection screenshot"
      caption: 'The Wellcome Collection uses IIIF to make medical and scientific materials available via a Mirador viewer, and to offer multiple image download sizes to users.'
    link:
      url: "/demos"
      label: 'Open demo'
enhance_collections_carousel:
  - resource:
      url: 'assets/uploads/biblissima_1.png'
      type: image
      alt_text: 'Biblissima screenshot'
      caption: "Manuscript 5 of the Municipal Library of Châteauroux (c. 1460) is a copy of the Grandes chroniques de France. At some point in history several illustrations were sadly cut from its pages and sold. Today, the manuscript is held in the digital collections of the Bibliothèque virtuelle des manuscrits médiévaux and the missing illustrations are held in the collection of the Bibliothèque nationale de France. Both institutions make their collections openly available via IIIF, allowing Biblissima, a portal for manuscript research, to digitally reunite the missing illustrations with their pages so researchers can view them as intended."
    link:
      url: 'https://demos.biblissima.fr/chateauroux/osd-demo/'
      label: 'Open Demo'
  - resource:
      url: 'assets/uploads/science_stories_1.png'
      type: image
      alt_text: 'Scientstories.io screenshot'
      caption: "Science Stories assembles digitized resources from diverse collections to highlight the research and experiences of historical and contemporary scientists. In this example, IIIF-enabled photographs from the Smithsonian Institute Archives and National Portrait Gallery (US) show physicist Chien-Shiung Wu at work, alongside videos about her work and a timeline of her career. Each resource links back to its source repository, providing opportunities for further exploration."
    link:
      url: 'http://www.sciencestories.io/Q450317?moment=0'
      label: 'Open Demo'

---

{{ theme.block-center-start }}

## Create possibilities with IIIF basics

Implementing IIIF provides flexibility in a wide variety of use cases.


{% include blocks/carousel.html items=page.iiif_basics_carousel %}

{{ theme.block-end }}



{{ theme.block-center-start }}

## Unite objects to enhance collections


{% include blocks/carousel.html items=page.enhance_collections_carousel %}


{{ theme.block-end }}

{{ theme.block-center-start }}

## Contextualize with annotations

EdX Cell Biology course

Harvard University is using IIIF to enhance their EdX course offerings. Here, the Mirador viewer displays an image of a cell with IIIF annotations to show its parts, allowing students to zoom in and out to see the relative size of each of the parts compared to the whole of the cell. Each session focuses on different cell parts, and the viewer brings students to the corresponding area of the image when students view the course pages for different sessions.

KuroNet Cursive Script Recognition Viewer

Many historical Japanese materials are written in kuzushiji, a form of cursive writing that most Japanese people can’t read today. Using this tool, a researcher can highlight characters in a IIIF-enabled kuzushiji document and AI-driven cursive Optical Character Recognition (OCR) suggests the characters likely to be depicted, allowing easy reading.

Exhibit.so


Exhibit is an educational tool developed by the University of St Andrews and Mnemoscene in response to the sudden switch to remote teaching at the start of the 2020 global pandemic. It allows users to easily develop guided annotation experiences for individual or grouped IIIF resources. In this example, annotations guide the viewer through images illustrating Edweard Muybridge’s accidental creation of the first motion picture in the 1880’s. While the tool was developed for faculty at the University to use in teaching, they have made the tool openly available, and it works with any IIIF-enabled resource.


{{ theme.block-end }}



{{ theme.block-center-start }}


## Choose Your Own Image Viewers

There is a whole universe of IIIF-compliant viewers and other tools, each with different features and benefits. Take a look at some of the most popular.

`// TO-DO: ADD CAROUSEL`

{{ theme.block-end }}


{{ theme.block-center-start }}

## Take Advantage of Open Image Servers

There is a whole universe of IIIF-compliant viewers and other tools, each with different features and benefits. Take a look at some of the most popular.

`// TO-DO: ADD CAROUSEL`

{{ theme.block-end }}

{{ theme.block-center-start }}

## Explore Experiments & Fun

There is a whole universe of IIIF-compliant viewers and other tools, each with different features and benefits. Take a look at some of the most popular.

`// TO-DO: ADD CAROUSEL`

{{ theme.block-end }}


{{ theme.block-center-start }}

## Get Started
Anyone can participate in the IIIF community. Find what’s right for you!

{% include blocks/cards.html items=page.get_started_cards %}

{{ theme.block-end }}
