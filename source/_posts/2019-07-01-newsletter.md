---
title: IIIF Community Newsletter, Volume 3 Issue 2
author:  Julien A. Raemy
date: 2019-07-01
tags: [news, newsletters]
layout: post
excerpt: >
  Community Snapshot, Announcements and Actions, Community Events and Outreach, Technical Work, Community Groups, Implementations, Adoption, Innovations and Ongoing Work Across the IIIF Community, Recommended Reading
---

## Community Snapshot
* [IIIF Discuss][iiif-discuss] = 1,024 members
* IIIF Slack = 1,107 members ([Join Slack][slack])
* [IIIF on Twitter][iiif-twitter] = 1,703 followers
* [IIIF Consortium][iiif-c] = 52 founding members, 1 full member, 2 associate members.
    * Newest members: [Kakadu Software](https://kakadusoftware.com/), [Blavatnik Foundation Archive](http://www.blavatnikarchive.org/)

## Announcements and Actions

### IIIF Annual Conference in Göttingen, Germany

The [IIIF Annual Conference took place June 24-28 in Göttingen, Germany](https://iiif.io/event/2019/goettingen/). Despite record-breaking temperatures, some 240 attendees from 24 countries braved the heat to attend a full-day Showcase on Monday, half-day workshops on Tuesday, and 2.5 days of plenary and track sessions the rest of the week.

All the session [materials and slide decks are available on Google Drive](https://drive.google.com/drive/folders/1zpGUxsu_cvKPilxfyaMTq4Zrsyo3bada). Meanwhile, you can see some of the [highlights in the Twitter hashtag #IIIF](https://twitter.com/search?l=&q=%23iiif%20since%3A2019-06-22%20until%3A2019-06-30&src=typd), including many photos of the beautiful conference venue, and great moments from the conference activities.

Many thanks to the Program Committee, the Local Planning Committee, the Safety and Conduct Committee, all the staff at SUB Göttingen, and everyone else who came together to make the conference a huge success. And of course, stay tuned for news soon about the location of the 2020 IIIF Conference!

### IIIF Consortium Annual Conference Travel Scholarship Winner

Congratulations to Sarah Lorenzon Ferreira from the School of Communication and Arts of the University of São Paulo, the recipient of the IIIF Consortium's first ever Travel Scholarship! Sarah joined us at the Annual Conference in Göttingen, Germany, and [participated in the Conference Mentor program](https://twitter.com/LorenzonSarah/status/1143270471976325121) as well. In São Paulo, Sarah helped organize the IIIF event in May at the Congresso Internacional em Tecnologia e Organização da Informação, and has served remotely in previous years on the IIIF Code of Conduct Team. We were lucky to have Sarah join us at the conference.

Please see the [Annual Conference Travel Scholarship page](https://iiif.io/event/2019/goettingen/annual_conference_travel_scholarship/) for more information about the scholarship, and please get in touch via <admin@iiif.io> if your institution is interesting in potentially funding similar scholarships for future conferences!

### Organising a IIIF event

If you are organising a IIIF event or presenting a IIIF-related topic at a conference please let the [Outreach Community Group][groups-outreach] know via their channel (#outreach) on the IIIF Slack team and they will add it to the [event calendar][iiif-event].

### Newsletter Submissions

The IIIF Community Newsletter (the document you are reading right now) is published quarterly to provide an at-a-glance update on the current activities and trends in the IIIF community. Anyone may submit an item for publication as long as it relates to IIIF. Please use the [IIIF Community Newsletter submission form][submission-form] to submit an item to the newsletter.

## Community Events and Outreach

### Bern IIIF Showcase Event

On May 15th, a [IIIF Showcase event][bern-ticks] organised by Julien A. Raemy and René Schneider (HES-SO University of Applied Sciences and Arts, Haute école de gestion de Genève) was held at the Swiss National Library. Just over 70 people attended this day, which was divided into four sessions (IIIF 101, IIIF: uses cases from a global framework, IIIF in Switzerland, How to better implement and promote IIIF). Presentations and notes are available [in this Google Drive directory][bern-directory].

### IIIF Showcase Event at the University of São Paulo and Mirador 3 translation

On May 28th, the University of São Paulo’s School of Communication and Arts held a IIIF Showcase for the Brazilian library and archives community. After an online welcome session held by Josh Hadro, a group formed by Leonardo Germani (UFG/Tainacan), Sarah Lorenzoni (ECA-USP) and Bruno Buccalon (Instituto Moreira Salles) had the chance to present a gentle introduction to IIIF and share current projects in which they are involved. Attendance was about 40 people in the audience and 200 connections on streaming. Photographs are available here: <https://tainacan.org/blog/2019/06/05/iiif-no-brasil/>.   

The same group delivered a Brazilian Portuguese translation for Mirador 3 last week: <https://github.com/ProjectMirador/mirador/pull/2797>.

### The Future of Images at Yale, 4 June 2019

On June 4th, 2019, Yale hosted a daylong program entitled “The Future of Images at Yale: Introducing Yale’s new Image Standard” to demonstrate to nearly 200 faculty, staff and students the potential offered by the Yale Library and Museums’ shared commitment to implementing IIIF-enabled images across their collections.

The morning session included a set of presentations from IIIF experts from Yale, Harvard University, Stanford University, and North Carolina State University.  They provided a broad context for how IIIF has been integrated at peer institutions, as well as showcasing some of the most interesting issues and projects that they’ve seen.  They also spoke to future developments coming soon to IIIF and the IIIF viewer tools.

Presentations:
* [The Future of Images at Yale: An Introduction to IIIF][yale-1] - Michael Appleby, Director of Software Engineering, Yale University Library
* [An Institutional IIIF Roadmap for Scholarly Research and Collaboration][yale-2] - Rashmi Singhal, Director of Arts & Humanities Research Computing, Harvard University
* [IIIF at Stanford][yale-3] - Jack Reed, Geospatial Web Engineer,Stanford University
* [IIIF at NC State University][yale-4] - Jason Ronallo, Head of Digital Library Initiatives, North Carolina State University

The afternoon sessions began with a panel discussion featuring the morning speakers that was moderated by Edward Town and Emmanuelle Delmas-Glass from the Yale Center for British Art.  The audience had a lively set of questions that raised interesting conversations about implementation, adoption, use, features, and challenges.  The remainder of the afternoon’s programming consisted of scholarship Use Cases built with IIIF-enabled images.  These projects each demonstrated new aspects of scholarly inquiry that would not have been otherwise possible.

Professor Andrew Quintman from Wesleyan University shared his [Life of the Buddha project][life-buddha], in which he has digitally reproduced and analyzed a corpus of seventeenth-century Tibetan texts and images, including a historically unique mural of the Buddha’s life story approximately 300 feet in length. His project required an elegant solution to show complex relationships across a diverse set of materials, and he sought to allow users (scholars, students, and the general public) to read and explore the story without prioritizing text over image. By expanding the Mirador Viewer’s IIIF functionality, he was able to map irregular chapter and scene boundaries on a series of very large image files, and link them to a structured hierarchy of annotations in both English and unicode Tibetan. The Mirador Viewer allows users to better understand complex relationships between the visual logic of the murals and the textual logic of the literary narrative through multiple points of entry. In doing so the project addresses a challenge facing many in the Humanities today: how can we analyze and present literature, visual art, and their institutional contexts in a synthetic fashion.  Nicolas Frisch, Ph.D. candidate in East Asian Languages and Literature, spoke about the [Ten Thousand Rooms project][ten-thousand] at Yale, which is directed by Professor Tina Lu and Professor Mick Hunter.  This project uses crowdsourcing and IIIF images to translate, transcribe and annotate pre-modern chinese texts.  IIIF makes possible an endless array of annotations (marginalia) on top of image-based primary sources, an effort which is impossible to replicate on modern typeset print or original rare and fragile source material.  As an open platform, Ten Thousand rooms invites interactive collaboration between scholars, students, and enthusiastic amateurs and hobbyists whose wealth of time, storytelling expertise and language skills cannot be matched.  The project is addressing issues of access restrictions in China and the US, roles and permissions, and working with layers for other kinds of textual and data analysis.

This session wrapped up with an interesting Q & A about how projects like Life of the Buddha fit into the traditional scholarly monograph, peer reviewed publishing model.  The speakers also addressed issues related to device screen size limitations and long-term preservation solutions.

Presentations:
* [Digital Reflections of the Buddha: A Life in Text and Many Images][yale-5] - Andrew Quintman, Associate Professor of Religion, East Asian Studies, Wesleyan University
* [Ten Thousand Rooms Project][yale-6] - Nicholas Frisch, Project Coordinator and Ph.D. Candidate in East Asian Languages and Literature, Yale University

The afternoon continued with a second session devoted to IIIF-enabled scholarship.  Lisa Fagin Davis from The Medieval Academy in Boston discussed her work reconstructing dismembered manuscripts and other kinds of dispersed virtual reconstruction.  She also provided a live demonstration of how scholars can easily create a custom manifest to compare images for analysis and study.  Edward Town, Head of Collections Information and Access, and Assistant Curator for Early Modern Art at the Yale Center for British Art presented his ambitious project to collection 4000 images of Tudor and Jacobean paintings and conservation images for study and identification.  By using IIIF to draw together images from disparate collections around the world, the Yale Center for British Art was able to use advanced technologies such as infrared-reflectography, x-ray, macro x-ray fluorescence, dendrochronology and spectrometry, as well as deep zoom brushstroke analysis and primary source research to begin stitching together clues to identify painters and make attributions.   Nelson Rios, Head of Biodiversity Informatics and Data Science at the Peabody Museum closed out the afternoon sessions with a forward thinking case study of how IIIF might be integrated into the work of scholars in natural history.  Peabody has a large and growing collection of diverse digitized objects that is not yet IIIF enabled.  He present a wide set of potential uses that used IIIF’s broad feature set, including: pan, zoom, annotations, multi-image comparison, sequencing of data, potential for modelling and measurements, cross-collections comparison, and data sharing.  He further explored some possible future scenarios in which machine learning and training and 3d visualizations might bring new depth to IIIF-enabled image sets.

Presentations:
* Lisa Fagin Davis, Executive Director, Medieval Academy of America
  * [Beauvais Missal Reconstruction][yale-7]
  * [Reconstruction using Fragmentarium][yale-8]
* [Aims and Ambitions for collaborative IIIF-enabled research on Tudor and Jacobean paintings][yale-9] - Edward Town, Head of Collections Information and Access, and Assistant Curator for Early Modern Art at the Yale Center for British Art
* [Natural History Collections: A Case for IIIF][yale-10] - Nelson Rios, Head of Biodiversity Informatics and Data Science at the Yale Peabody Museum

The program wrapped up with a brief recap and observations from E.C. Schroeder, Director of the Beinecke Rare Book and Manuscript Library at Yale.  Yale is in the early stages of bringing IIIF technology to campus and he captured the delight expressed by many about the broad interest across campus, as well as the commitment at Yale for collaboration and breaking down the silos that currently isolate collections.  IIIF enables new kinds of research, teaching, learning, conservation and he recognized the challenges and opportunities offered by Yale’s cultural heritage IT collaboration across the museums and libraries for making Yale’s extensive collections widely and easily available to scholars, students and visitors on campus and around the world.

### Digital Humanities Summer Institute (DHSI) 2019, IIIF Training

Following a successful workshop last year, Glen Robson, Josh Hadro, Camille Villa, and Peter Broadwell this year taught a five day workshop titled ["Introduction to IIIF: Sharing, Consuming, and Annotating the World's Images"](http://www.dhsi.org/courses.php) at the Digital Humanities Summer Institute in Victoria, BC June 3-7. The workshop was a great success, and featured engaged students from four different countries. Students were guided through the basics of the Image and Presentation API, how to set up an image server, and IIIF text annotations, as well as some cutting edge demonstrations of [IIIF uses in AI/Machine Learning](https://iiif.github.io/training/iiif-5-day-workshop/day-four/iiif-and-ai.html).

[As with last year](https://iiif.io/news/2018/07/03/newsletter/#digital-humanities-summer-institute-dhsi-2018), the DHSI organizers have already extended an invitation for us to run a similar workshop at DHSI next year. The [training materials are available online](https://iiif.github.io/training/iiif-5-day-workshop/), and we intend to improve on them for next year, so suggestions are welcome!

## Technical Work

### Image and Presentation APIs 3.0 Beta

We are very excited to announce that since June 21, the 3.0 versions of the Image and Presentation APIs have been moved to Beta status.

Here are the links to the beta versions of each spec:

* Image API: <https://iiif.io/api/image/3.0/>
* Presentation API: <https://iiif.io/api/presentation/3.0/>

With extensive attention from the IIIF spec Editors and our [Technical Review Committee][iiif-trc] (TRC), this release is intended for implementation, and we anticipate very few if any changes for the final release (though of course we’ll fix any significant reported issues).

Many thanks to the Editors for shepherding the release to this stage, and additional thanks to all participants in the TRC review process that has solidified the contents of this release.

### Discovery TSG announcements

Below are the latest announcements from the [Discovery Technical Specification Group (TSG)][groups-discovery]:
* Change Discovery API 0.3 released: <https://iiif.io/api/discovery/0.3/>
* OCLC CONTENTdm implementation of 0.3 Change Discovery API for testing. Example collection:  <https://researchworks.oclc.org/digital/activity-stream/collection/16007_p267401coll32>
* OCLC Research releases IIIF-Explorer an experimental service for aggregating and discovering IIIF materials: <https://researchworks.oclc.org/iiif-explorer/>

## Community Groups

IIIF Community groups are designed to provide a forum for general discussion, brainstorming, sharing of use cases and demos, and working to produce tutorials and presentations based on existing IIIF APIs. The process for forming Community Groups can be found at <https://iiif.io/community/groups/framework/>. Please see the [IIIF Community Groups page][groups] for a calendar of group and community calls, as well as links to more information about each group.

### [3D Community Group][groups-3d]

The recent activities of the 3D Community Group can be summarized as follows:
* plans laid for viewer comparisons based on the same 3D data set to identify basic similarities / differences in presentation of a given file
* a growing interest in possibilities of 3D data interoperability with 3rd party platforms (e.g. Mozilla Hubs)
reaching for to wider 3D and online industry involvement input (e.g. Mozilla)
* after several community calls based on viewer demos, a move towards 'deeper dives’ into specific topics.
* continued work comparing approaches and implementation of annotations, which seem to be a core functionality requirement for many user stories
* a 3D breakout session during the 2019 IIIF conference

### [Archives Community Group][groups-archives]

Rebecca Hirsch wrote a short article about IIIF and the Archives Community Group for the May/June issue of Outlook, a bi-monthly newsletter published by the Society of American Archivists. The article can be found here: <https://bit.ly/2KEUHpl>.  

### [Manuscripts Community Group][groups-manuscripts]

The IIIF Manuscripts Community Group reports a successful ad hoc meeting at the recent IIIF 2019 Conference. In order to increase involvement from our European members, we will be shifting to earlier times for our quarterly calls. Our next call will be Aug. 14, 2019 and will be hosted by Rafael Schwemmer. Details and an agenda, focused on manuscript aggregation and discovery, to follow. We also saw a large number of manuscripts-focused presentations at the conference - congratulations to all who presented and participated. Additionally, outreach to the communities of manuscript users has continued with a successful workshop at the International Medieval Congress in Kalamazoo, MI, in May, and the upcoming ["Interoperability and Medieval Manuscripts"][medieval-interoperability] workshop hosted by the Beinecke Library at Yale University in July. If you are giving a workshop or doing other manuscripts-related outreach (or if you would like to host a workshop), please do let us know on the mailing list or the Slack channel.

### [Museums Community Group][groups-museums]

The next museum community call is scheduled for Tue, July 2, to discuss some of the topics brought up at the 2019 conference in Göttingen, and planned outreach at the MUTECH trade fair in Germany. Calls over the last few months have discussed CogApp's slow looking viewer, the V&A's manifest editor, and Mnemoscene's Nomad project. In addition a meetup at the Museums and the Web conference in Boston in April attracted a large number of participants, new and existing, and IIIF received a mention in many other sessions (including a discussion of how often the interoperable part of IIIF is being put into practice).

### [Newspapers Community Group][groups-newspapers]

The IIIF Newspaper Community finished a great 2018/2019 year at the 2019 IIIF Conference in Göttingen. Co-chairs Karen Estlund, Pennsylvania State University, and Glen Robson, IIIF, led a community group discussion and confirmed next steps for the coming year:

1. Update Newspaper Recipe in the IIIF Cookbook to Image and Presentation 3.0
2. Work with vendors and open source software producers to transition to 3.0 and to add support for Web Annotations for ALTO/XML
3. Work with the Text Granularity Technical Group to publish extension noting level of annotations
4. Submit example paths to IIIF with various software/scripts to the Awesome IIIF list
5. Work with AI and Machine Learning Researchers who are using newspaper resources through IIIF
6. Continue to share and demo implementations of newspapers and other periodicals

Karen also presented at the 2019 IIIF Showcase, “IIIF Newspapers: Cultural Connections,” on use cases.
We are excited to announce that Jeff Mixter, OCLC, has agreed to join as a new co-chair!

### [Outreach Community Group][groups-outreach]

The group continues to have its monthly calls (which have become working sessions instead). The two previous calls focused on the curation of the [Awesome IIIF list][awesome-iiif] and the help that can provide the IIIF Community at MUTEC 2020 that will take place in Leipzig, Germany.

During the 2019 IIIF Conference in Göttingen, Julien A. Raemy presented the [rationale and the perspectives of the Outreach Community Group][outreach-goettingen] during the [Building local and international communities around IIIF][cambridge-panel] panel organised by Andy Corrigan and Huw Jones (University of Cambridge).  

Our future call is on Tuesday, July 9 (11am Eastern, 5pm Central European Summer Time) and we will have a brainstorming and roadmap development session titled ‘What IIIF community is missing?’. We are always looking for new volunteers to help us achieve our goals and we remain open to ideas and suggestions to support the wider IIIF community as well as to ensure that it remains welcoming and continues to grow as a more inclusive and safe place.

### [Software Developers Community Group][groups-sw]

No update at the moment. Follow the Software Developers Community Group's developments on the IIIF Slack channel (#softwaredevs) and through their monthly calls.

## Implementations, Adoption, Innovations and Ongoing Work Across the IIIF Community

### Avalon 6.5 is now available

[Avalon][avalon] version 6.5 has been released.This version includes the Timeliner, an audio annotation tool based on IIIF Presentation 3 specifications and IIIF Auth with a probe. The tool is a rewrite of the now retired Variations Timeliner and was developed by [Indiana University][indiana] and [Digirati][digirati]. A short demo can be found here: <https://pawpaw.dlib.indiana.edu/playlists/63>

Avalon 6.5 also includes IIIF Presentation 3 manifest generation for all items; an application endpoint allows for retrieval of the manifest.

### Veridian Software has implemented IIIF for the Swiss National Library

[Veridian Software][veridian] has implemented IIIF for the [Swiss National Library][snl] (SNL) digital newspaper archive. The collection now supports both IIIF image and presentation APIs. As a result, over 280,000 pages of public domain Swiss newspapers are available to the IIIF community. Read the case study here: <https://veridiansoftware.com/news/veridian-implements-iiif-for-the-snl/>.  By enabling IIIF for this first Veridian collection, they hope to encourage more to come on board and help stimulate the development of IIIF for online newspapers.

### TICKS White paper - Suggested measures for deploying IIIF in Swiss cultural heritage institutions

The first version of the white paper, titled [“Suggested measures for deploying IIIF in Swiss cultural heritage institutions”][ticks-wp], carried out by Julien A. Raemy and René Schneider in the context of the Towards IIIF-Compliance Knowledge in Switzerland (TICKS) project is now available. As part of the white paper, a [IIIF step-by-step diagram][ticks-steps] giving a high perspective to support institutions in implementing IIIF, has also been created. Suggestions and comments via [the Google Doc version][ticks-wp-google] are always welcome to improve and update this white paper.

More information about the TICKS white paper and the perspectives of a possible follow-up project to continue raising awareness of IIIF in Switzerland can be found in [this blog post](https://julsraemy.github.io/posts/2019/07/01/ticks-white-paper-iiif/).

### Mirador 3

We were excited to present Mirador 3 to the community at the 2019 IIIF Conference. Mirador 3 is the third version of the IIIF viewer software aiming to provide viewing, comparison, and analysis tools for IIIF content. The initial foundation of the software was developed jointly in a collaboration between Stanford Libraries, Bayerische Staatsbibliothek, Universität Leipzig, Princeton University, and HarvardX.

This foundational work was built during a community sprint during the first four months of 2019. You will find that Mirador 3 is incredibly feature rich, and while it is not yet at full parity with Mirador 2, it has most of the core functionality and several new and exciting capabilities. Mirador 3 has already been translated into eight languages. The Stanford team has been testing and working towards putting Mirador 3 in production at Stanford. We have labeled the version Mirador 3 alpha (for now), which reflects the need for more testing and feedback from the community before it is ready to be put into production.

For more information about Mirador, please visit <http://projectmirador.org> or follow Mirador on Twitter [@miradorviewer][mirador-twitter].

### Cocktail - IIIF Manifest to PDF Generator

Angela Wolff (Victoria & Albert Museum) presented a IIIF manifest to pdf conversion tool at the 2019 IIIF Conference in Göttingen. The tool is a standalone command line utility written in Ruby. It works with Presentation 2 and 3 manifests, extracting images from the url to create a pdf. At the moment it performs an image only extract with options for whole document orientation and assorted other customisations.
The repo is available here: <https://github.com/vanda/cocktail>  

There is an example pdf along with the original manifest in UV shown on the V&A website: <https://www.vam.ac.uk/articles/piccolpassos-treatise-on-maiolica>

### OpenLayers 6 will support IIIF Image API

OpenLayers 6 will support IIIF Image API services OpenLayers (https://openlayers.org) is a JavaScript library for building feature rich map and geo data web applications. Upcoming version 6 will allow the usage of IIIF Image API services as map tile sources. An example from the OpenLayers master branch that utilizes both the IIIF image tile source and the built-in IIIF image information response parsing can be found at <https://openlayers.org/en/master/examples/iiif.html>.

### Parker Library On the Web resources added to the Biblissima Discovery Platform

Since its launch last December, several updates have been made to the [Biblissima "IIIF Collections of Manuscripts & Rare Books" Discovery Platform][biblissima-discovery]. A few datasets have since been added: Parker Library On the Web (manuscripts from the Parker Library at Corpus Christi College, Cambridge), manuscripts from Ghent University Library, Durham Cathedral and University Library, and Cambridge University. The data of the other datasets have been updated too. The reconciled data is feeding the Biblissima authorities' platform that is openly available at <https://data.biblissima.fr/>. The search engine has also been improved significantly.

### iipsrv 1.1 released (IIPImage)

Version 1.1 of iipsrv, the IIPImage image server, has been released featuring major performance enhancements, optimizations, numerous bug-fixes and stability enhancements. In particular, there is support for the new features and syntax found in the forthcoming version 3 of the IIIF image API version. Also, there is improved native handling of clean IIIF URLs. And there is support for fully open-source JPEG2000 decoding through OpenJPEG, which is now practical thanks to [the support for development from several IIIF institutions][openjpeg]. Further details and downloads (both source code and binaries) can be found here: <https://iipimage.sourceforge.io/2019/06/iipsrv-1-1-released/>.  

### New Java library to create and consume IIIF manifests released (Goobi)

We are pleased to announce the first public release of a new Java library to read and write IIIF manifests. It is used in various applications within the open source software suite Goobi and is licensed under the GPL2 or later. More information is available on Github: <https://github.com/intranda/iiif-api-model>.

### List of IIIF-enabled Goobi viewer installations

The Goobi community has recently put a lot of effort into implementing and supporting different IIIF APIs. There is a new list of Goobi viewer installations and their IIIF support. Please find it at the following URL: <https://goobi.io/viewer/installations/>.

### IIIF-Annotation Library - new features
The IIIF-Annotation Library, developed by the North Carolina State University (NCSU) Libraries, now allows [for layers to be viewable](https://ncsu-libraries.github.io/annona/storyboard/#manifests-with-layers) and [for multiple annotations to be displayed in the same viewer](https://ncsu-libraries.github.io/annona/multistoryboard/).

## Recommended reading

* Blog post by Sarah Griffin (University of Oxford): [Medieval Manuscripts, IIIF and the History of Medicine on Cabinet][cabinet]
* Blog posts by Kiyonori Nagasaki (International Institute for Digital Humanities, Tokyo) on [how to generate IIIF Manifests on Goobi (in Japanese)][goobi-jp]  
* Blog post by Richard Higgins (Durham University Library): [Using the features of IIIF][higgins-iiif]
* Blog post by Andy Cummins (Cogapp): [WTF-IIIF][wtf-iiif]
* Blog post by Gavin Mallory (Cogapp): [IIIF for museums, explained][museums-iiif]

Edited by:
* Julien A. Raemy (HES-SO University of Applied Sciences and Arts, Haute école de gestion de Genève)

With contributions from:
* Benjamin Albritton (Stanford University)
* Bruno Buccalon (Instituto Moreira Salles)
* Emmanuelle Delmas-Glass (Yale Center for British Art)
* Karen Estlund (Pennsylvania State University)
* Thomas Flynn (Sketchfab)
* Josh Hadro (IIIF Consortium)
* Lutz Helm (Leipzig University Library)
* Jeff Mixter (OCLC Research)
* Richard Palmer (Victoria & Albert Museum)
* Ruven Pillay (IIPImage)
* Julien A. Raemy (HES-SO University of Applied Sciences and Arts, Haute école de gestion de Genève)
* Jack Reed (Stanford University Libraries)
* Régis Robineau (Biblissima - Campus Condorcet - EPHE-PSL)
* Glen Robson (IIIF Consortium)
* Miriam Shaw (Veridian Software)
* Jan Vonde (intranda GmbH)
* Maria Whitaker (Indiana University)
* Angela Wolff (Victoria & Albert Museum)

[avalon]: https://www.avalonmediasystem.org/
[bern-directory]: https://drive.google.com/drive/folders/1yy0aeyZYSGa1ounirApofoBnHhWkIQUI
[bern-ticks]: https://campus.hesge.ch/id_bilingue/projekte/ticks/bern-iiif-showcase-event_fr.html
[biblissima-discovery]: https://iiif.biblissima.fr/collections
[cabinet]: https://www.oii.ox.ac.uk/blog/cabinetiiif/
[cambridge-panel]: https://iiif.io/event/2019/goettingen/program/42/  
[higgins-iiif]: https://www.durhampriory.ac.uk/using-the-features-of-iiif/
[digirati]: https://digirati.com/
[indiana]: https://www.indiana.edu/
[goobi-jp]: http://digitalnagasaki.hatenablog.com/archive/category/Goobi
[openjpeg]: http://www.openjpeg.org/2017/10/04/OpenJPEG-2.3.0-released
[museums-iiif]: https://blog.cogapp.com/iiif-for-museums-explained-49fd0560e1ba
[outreach-goettingen]: https://docs.google.com/presentation/d/152U91z75Aq36LIdsGmt5PkM5TgB_eWHt8wKrSfr0woc/edit?usp=sharing
[snl]: https://www.nb.admin.ch/snl/en/home.html
[mirador-twitter]: https://twitter.com/miradorviewer
[ticks-wp]: https://doi.org/10.5281/zenodo.2640416
[ticks-wp-google]: http://bit.ly/wpticks
[ticks-steps]: https://campus.hesge.ch/id_bilingue/projekte/ticks/assets/step_by_step.svg
[veridian]: https://veridiansoftware.com/
[life-buddha]: http://lifeofthebuddha.org
[ten-thousand]: https://tenthousandrooms.yale.edu/
[yale-1]: http://click.message.yale.edu/?qs=db838116e9911a50b51484c16492fbf073dbe697f9965abdde3d0278ae511cc85d0c841137880472781eeafc0b1b38f742e89f7cd0c7700d
[yale-2]: http://click.message.yale.edu/?qs=db838116e9911a507637d97fac9500b03ef5a7c9e819d8641ca046d2d560f147cb6f48f82f181a3371ff8fb78de413c77c8fa93d246d447f
[yale-3]: http://click.message.yale.edu/?qs=db838116e9911a50f11b19271fdfd65b6a40b59d7559124cc1e1249587eedaaa9faccfaab591997b05613783c7ba44c574e67de8161e974b
[yale-4]: http://click.message.yale.edu/?qs=db838116e9911a505b5adc97fa0b41b3dc6c4417ec328e7f07e07955d65ce4fa65c877013580d246efceb95b81aead1806ab102c8ec54205
[yale-5]: http://click.message.yale.edu/?qs=8d792628b393d7310b9394e6f2fbd9e898ad249fc478f1a3692db942f7ebc0d16eea28033c9683cb4f0449ce56908243df41a2004300d1e1
[yale-6]: http://click.message.yale.edu/?qs=8d792628b393d7312c02f6b262ae800b5316151fd9910c9f6a9f8c3b2821e4bca141b73eb1a7a7f41892600f4259e3b7a8eb30240d98204d
[yale-7]: http://click.message.yale.edu/?qs=8d792628b393d7316d7aac999728d9151a51542f2e4ecb360350e9039600b10027f740e21c81bd5193e873857439aa016b012ab3b763ce71
[yale-8]: http://click.message.yale.edu/?qs=8d792628b393d7316dd6af1f01139e134693fc75ad0561a39d88fcbfb923bd2432d040310a3d373222050e5f24d36a69b99e41d674bc5dab
[yale-9]: http://click.message.yale.edu/?qs=8d792628b393d7312f35769b180d7d0ad3304f1571cbdd878cbca1eacdf919e44ae5a0663b312eba74781d50deb7129baa0693345d66a0dd
[yale-10]: http://click.message.yale.edu/?qs=8d792628b393d731f4fbb87c59470ca1141552fad585c4f130981313b020df5866e3e157decf7e0c30f1f6f1ef4f490631025682a75b8aaf
[medieval-interoperability]: https://www.medievalacademy.org/page/interoperability
[wtf-iiif]: https://blog.cogapp.com/wtf-iiif-995ca796e654
[awesome-iiif]: https://github.com/IIIF/awesome-iiif
[groups]: https://iiif.io/community/groups/
[groups-3d]: https://iiif.io/community/groups/3d/
[groups-archives]: https://iiif.io/community/groups/archives/
[groups-av]: https://iiif.io/community/groups/av/
[groups-discovery]: https://iiif.io/community/groups/discovery/
[groups-manuscripts]: https://iiif.io/community/groups/manuscripts/
[groups-museums]: https://iiif.io/community/groups/museums/
[groups-newspapers]: https://iiif.io/community/groups/newspapers/
[groups-outreach]: https://iiif.io/community/groups/outreach/
[groups-sw]: https://iiif.io/community/groups/software/
[groups-text]:https://iiif.io/community/groups/text-granularity/
[iiif-c]: https://iiif.io/community/consortium/
[iiif-c-members]: https://iiif.io/community/consortium/#members
[iiif-discovery]: https://iiif.io/api/discovery/0.3/  
[iiif-discuss]: https://groups.google.com/forum/#!forum/iiif-discuss
[iiif-event]: https://iiif.io/event/
[iiif-twitter]: https://twitter.com/iiif_io
[iiif-faq]: https://iiif.io/community/faq/
[iiifc-faq]: https://iiif.io/community/consortium/faq/
[iiif-trc]: https://iiif.io/community/trc/
[slack]: http://bit.ly/iiif-slack
[submission-form]: https://goo.gl/forms/nw54cBpowzzTPRbp2  
