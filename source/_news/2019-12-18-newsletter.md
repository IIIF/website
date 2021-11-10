---
title: IIIF Community Newsletter, Volume 3 Issue 4
author:  Julien A. Raemy
date: 2019-12-18
tags: [news, newsletters]
layout: post
excerpt: >
  Community Snapshot, Announcements and Actions, Community Events and Outreach, Technical Work, Community Groups, Implementations, Adoption, Innovations and Ongoing Work Across the IIIF Community
---

## Community Snapshot
* [IIIF Discuss][iiif-discuss] = 1,082 members
* IIIF Slack = 1,259 members ([Join Slack][slack])
* [IIIF on Twitter][iiif-twitter] = 1,911 followers
* [IIIF Consortium][iiif-c] = 52 founding members, 1 full member, 2 associate members.

## Announcements and Actions

### 2020 IIIF Conference in Boston, MA, USA - Call for proposals

[The 2020 IIIF conference][2020-boston] will be held in Boston, MA June 1-4. The conference will be co-hosted by Harvard University and the Massachusetts Institute of Technology (MIT).

The IIIF Conference Program Committee are looking for proposals for talks in the following forms:

- Up to a ½ day workshop (4 hours)
- 7 to 10 minute lightning talks
- 15-20 minute presentations (plus 5-10 mins questions)
- 90 minute open block (Could be panel session or grouped presentations)

Please [submit an abstract of no longer than 500 words for your presentation or discussion by February 3][boston-cfp].
### Videos from the 2019 IIIF Conference

All of the recorded sessions from the Göttingen Conference from Monday 24 June (Showcase) and Wednesday 26 June (plenary session) have been uploaded to the [IIIF YouTube channel][iiif-youtube]. One [playlist features the Showcase talks][yt-showcase], while the other features [the plenary lightning talks][yt-plenary]. We would like to thank our local partners at the Göttingen State and University Library who helped arrange some great A/V recording and editing services.

### 2019 IIIF Working Meeting in Ann Arbor, MI, USA

The IIIF Consortium recently hosted a productive IIIF Working Meeting in Ann Arbor Michigan, with a number of useful planning sessions as well as unconference breakouts. We are pleased to be able to share [a document with summaries of the sessions there and links to more specific notes][aa-notes] taken during those sessions.

### IIIF + Maps

Stanford will be hosting a IIIF + Maps event in February 2020. IIIF + Maps aims to move forward IIIF and Maps integration and start to work on collaboration for common goals. This event will be held February 6 - 7, 2020 and will be hosted in conjunction with the annual Geo4LibCamp. For more information please see: <https://geo4libcamp.org/iiif+maps_2020/>

### Organising a IIIF event

If you are organising a IIIF event or presenting a IIIF-related topic at a conference please let the [Outreach Community Group][groups-outreach] know via their channel (#outreach) on the IIIF Slack team and they will add it to the [event calendar][iiif-event].

### Newsletter Submissions

The IIIF Community Newsletter (the document you are reading right now) is published quarterly to provide an at-a-glance update on the current activities and trends in the IIIF community. Anyone may submit an item for publication as long as it relates to IIIF. Please use the [IIIF Community Newsletter submission form][submission-form] to submit an item to the newsletter.

## Community Events and Outreach

### Alexandria Library Network Information Day

Julien A. Raemy gave an [introduction to IIIF](https://doi.org/10.5281/zenodo.3463087) (slides in German) on October 30 in Bern, Switzerland, during the Alexandria Library Network Information Day. [Alexandria](https://www.alexandria.ch/primo-explore/search?vid=ALEX&lang=en_US) is a library network that comprises of 19 libraries or documentation centres affiliated to the Swiss Confederation.

### Rijsmuseum ShareCare X Event

IIIF Consortium Managing Director Josh Hadro spoke at the recent [Sharing is Caring – Amsterdam Extension event][sharecare], which was titled “Expand the Source” and featured a theme of showcasing FAIR data principles at work in the museum space. The event was held Friday, November 22 at the Rijksmuseum, and recordings of the presentations should be made available soon. IIIF was highlighted a number of times throughout the day, including a 30-minute presentation during the “Accessible” portion of the FAIR Data acronym.

### Semantic Web in Libraries 2019 (SWIB19)

On November 25, Leander Seige (University of Leipzig) gave an [hands-on workshop on how to install, configure and prepare simple IIIF services](https://swib.org/swib19/slides/seige_hands-on-iiif.pdf) during the SWIB Conference in Hamburg.

### Europeana Lisbon IIIF Event

There was a IIIF event held before the Europeana AGM in Lisbon on November 27. We had a number of presentations from institutions across Europe on their different uses of IIIF. It was a well attended event and was followed by useful discussions within the wider Europeana Network. The presentations and notes from the Unconference sessions are available in the [Google Drive](https://drive.google.com/drive/folders/1C3x3Ajfv2GX5FHCZ3F7hsTZxKHveHM5D).

### No Time To Wait 4 (NTTW4)

[No Time To Wait](https://mediaarea.net/NoTimeToWait4), a conference on open audiovisual projects and standards, took place on 5-6 December in Budapest, Hungary at the Vera and Donald Blinken Open Society Archives. This year, the conference featured not one but two talks about using IIIF for audiovisual archives.

Andy Irving (British Library) presented on [the challenges of delivering audiovisual content online via the IIIF Presentation API](https://www.youtube.com/watch?v=cjJZ0cjtaz8&feature=youtu.be&t=5930).

Fabian Würtz and Stefan Länzlinger presented [a lightning talk on "Archival IIIF" at the International Institute of Social History (IISH) and the Swiss Social Archives](https://www.youtube.com/watch?time_continue=2480&v=EWMNs38Wmc4).

## Technical Work

The state of the specification work on version 3 is coming to a close and work is now focusing on encouraging implementation of the new specifications. Each new feature of the specification requires two implementations to ensure its is implementatable and useful. To encourage implementation work has been undertaken on the image and presentation validators and these now support IIIF version 3.0.

The [Image Validator](https://iiif.io/api/image/validator/) can now validator 3.0 images by selecting the version in the drop down. Currently version 2.0 is set as the default but this will change in future.

The [Presentation Validator](https://iiif.io/api/presentation/validator/service/) also now supports 3.0 and this was implemented using JSON Schema which should make it easier to embed into different manifest generation procedures.

Issues and pull request for both validators are welcome.

### Road mapping session

In Ann Arbor there was a [discussion on where to head next in the specification process](https://docs.google.com/document/d/1jxnaE4jNXMmmKSj4raWmFThPZLGvqrP14ERnRjclrr8/edit?usp=sharing). The main discussions were on:
Status of 3.0. Version 3 of the Image and Presentation API are now in Beta release. This means we don’t expect large changes but are waiting for implementation of the features before it can be pushed to final version.  
Whether to do Search as a small release without a TSG to bring it line with 3.0. It was decided to not do this as it would mean implementors might have two small upgrades to perform rather than a single upgrade which might take longer.
Should Auth be done before Search or in the same TSG? This didn’t reach a conclusion, there were positive arguments for and against combining into a single TSG and it was noted auth in search would also be useful.   
The Auth work looks hard both to developments in browser security rules and also to allow authentication of non IIIF resources e.g. annotations and audio/video.

Progress on the Discovery API is going well and this is nearing completion. There are various implementations of this specification and it is nearing version 1.0. There was discussion on whether to hold this back until notifications were ready to be included but it was decided to push 1.0 for discovery out before moving on to notifications.

### Cookbook recipes

[Recipes](https://github.com/IIIF/cookbook-recipes) are another method of encouraging implementation of version 3.0 of the specification. They are intended as working demonstrations of IIIF features both to act as documentation and guides but also to allow clients to be tested with the different ways of implementing IIIF.

There was a lot of useful discussion on Cookbook recipes in Ann Arbor and this has lead to two recipes which are now making their way through the TRC process. These two recipes are:

* [Recipe #0068](https://github.com/IIIF/cookbook-recipes/issues/68) - A Basic Newspaper
* [Recipe #103](https://github.com/IIIF/cookbook-recipes/issues/103) - Annotating a Poetry Reading

With these first two recipes we are learning from the process and once they are complete we can help others to submit recipes for review.

## Community Groups

IIIF Community groups are designed to provide a forum for general discussion, brainstorming, sharing of use cases and demos, and working to produce tutorials and presentations based on existing IIIF APIs. The process for forming Community Groups can be found at <https://iiif.io/community/groups/framework/>. Please see the [IIIF Community Groups page][groups] for a calendar of group and community calls, as well as links to more information about each group.

### Call for interest: IIIF Discovery for Humans

Discovery of interoperable resources remains one of the great opportunities for IIIF. To complement the work of the Discovery Technical Specifications group, several IIIF member institutions are working to initiate a IIIF Discovery for Humans community group.

A [draft charter for this group is online][groups-discovery], based on IIIF Discovery discussions held since the 2018 discovery meeting at Stanford. The first call for interest for this group will be on Thursday, 19 December at 8 AM California / 11 AM Eastern / 4 PM UK / 5 PM Rome.

Please join us if you can to review the proposed objectives and approach for the group. If you cannot join the call but are interested in participating, please indicate your interest in the [Interested Participants section of the notes doc][discovery-interest].

### [Outreach Community Group][groups-outreach]
The IIIF Outreach Community Group continue to meet monthly to support outreach activities by the community and regional events. In the New Year we will be reviewing the [Awesome IIIF list][awesome-iiif] and getting an up to date view of IIIF adoption. Please join the Slack channel and our monthly calls.

## Implementations, Adoption, Innovations and Ongoing Work Across the IIIF Community

### The New Digital Library of the Veneranda Biblioteca Ambrosiana

On November 7th, 2019 the Veneranda Biblioteca Ambrosiana launched its new Digital Library through which will progressively make available online (free of charge) some of its precious handwritten collections. For more information, please see the following news: <https://www.ambrosiana.it/en/partecipa/mostre-e-iniziative/la-nuova-biblioteca-digitale-della-veneranda-biblioteca-ambrosiana/>

The new Digital Library - based on IIIF & Mirador - is made possible thanks to the cultural, scientific and technical cooperation between the Veneranda Biblioteca Ambrosiana, the University of Notre Dame (IN, USA) and the Catholic University of the Sacred Heart in Milan.

### Experiments in AV at the University of Edinburgh

A Python script programmatically using a CMS API to loop round all associated audio, video and images can allow the full media relating to an object to be shown in a manifest. This customisation of the Digirati-BL AV Player does that (hit "Load URL JSON" and press play!):

<https://librarylabs.ed.ac.uk/iiif/av-player/?manifest=https://librarylabs.ed.ac.uk/iiif/manifest/mimed_context/2695.json>

Alternatively, with a csv of annotations and a Python script to turn them into a manifest, interesting stories can be told. This customisation shows the plight of the Scottish national football team's attempts to qualify for the quarter-finals of the 1978 World Cup (complete with Rod Stewart soundtrack - hit "Load URL JSON" and press play!):

<https://librarylabs.ed.ac.uk/iiif/av-player/?manifest=https://librarylabs.ed.ac.uk/iiif/manifest/arg_78.json>

### muzz.app

[muzz.app](https://muzz.app/) is a user-friendly data aggregation platform that enables cultural institutions to seamlessly convert and publish their collections with IIIF and Linked Data standards, while their content gets enriched with extra metadata thanks to computer vision. The platform beta version has recently launched and is offering to 10 institutions the opportunity to benefit from a free team account with 30GB of image storage for 6 months.

### IIIF Implementation at the Fudan University Library

On November 15, the Fudan University Library (Shanghai, China) launched its first IIIF digital collection [‘Seal Stamping Catalogs Virtual Library’(印谱文献虚拟图书馆)](http://yin.fudan.edu.cn/). Among over 8000 existing Chinese seal stamping catalogs(印谱), this virtual library now presents 501 of them (about 150,000 images) and uploading. The seal stamping catalogs are a special and rare category of ancient Chinese books. There are two sorts of seal stamping catalogs, one made by printing, the other by stamping with actual seals. The stamping type of catalogs is extremely rare. Usually, the engraver or a collector (of seals) makes only 10-30 copies for friends.

Mr. Lam Cheung Chung is a famous collector in the seal stamping catalogs field who owns a collection of over 3000 catalogs. Mr. Lam has always been very generous about sharing his collection, which he has been digitizing on his own for decades. This year, Mr. Lam donated his digital catalogs to Fudan University Library for better accessibility. The Fudan University Library combined Mr. Lam’s collection and Fudan seal stamping catalogs collection into this virtual library, wishing to attract more collectors and institutions like Mr. Lam and expand the virtual library into a one-stop research database for seals catalogs.

### UCLA’s new digital collections web application

On December 10, UCLA Library launched their new digital collections web application, which uses IIIF for all included collections. The collections are available at <http://digital.library.ucla.edu>. UCLA Library will be adding more collections every month as they migrate content from their older system and begin adding new collections. Technical and product details available by email or slack inquiry.

### Thematic Pathways on the Web : IIIF annotations of manuscripts from the Vatican collections

The Vatican Library and Stanford Libraries are pleased to announce the release of ["Thematic Pathways on the Web: IIIF annotations of manuscripts from the Vatican collections"](https://spotlight.vatlib.it). This project brings together approximately 300 manuscripts from the Vatican, served via IIIF, along with 26,000 discoverable web annotations, as a means of welcoming viewers to what will eventually be a collection of 80,000 digitized manuscripts, of which 20,000 are currently available.

The site combines two powerful IIIF-friendly pieces of software, Mirador and Spotlight, to provide curated narratives that combine IIIF images, annotations for describing and transcribing those images, and a robust discovery and exhibit framework. Among the narratives, there are two paleography courses (for Latin and Greek paleography), an introduction to studying palimpsests, an overview of the legacy of Classical literature in the middle ages, and an exploration of a 15th-century Humanist library.

An Overview exhibit helps to provide context and welcome new users to the site. We expect the number of narratives to expand in the coming years, allowing the Vatican to leverage IIIF to share its remarkable holdings with the world.

### Goobi viewer implements the IIIF Search API

The Goobi Community is proud to announce that the Goobi viewer has implemented the IIIF Content Search API 1.0. With an update to version 4.2.0 the support is added automatically. This is beside the Image, Presentation and Change Discovery, the fourth IIIF API supported by the open source software.
​
The Content Search API specification focuses on full texts currently but the Goobi viewer allows searching within metadata and web annotations from the crowdsourcing campaigns, too.

### New Goobi to go targets available

The Goobi community provides Goobi to go targets from time to time. They allow testing, playing and evaluating Goobi workflow and the Goobi viewer with a single click on your own computer. No need to install it on a dedicated server.

There are new targets with the latest releases from December 2019 for Windows, Mac and Linux at the following URL: <https://goobi.io/goobi-to-go/>.

### New developments of the Biblissima IIIF Discovery Platform

One year after its launch, the Biblissima ["IIIF Collections of Manuscripts & Rare Books" discovery platform](https://iiif.biblissima.fr/collections) has been significantly improved and enriched (more than 65,000 digitized manuscripts and rare books accessible).

Users now have the ability to create custom selections of items and export data for another usage: as a spreadsheet (CSV), or as a IIIF collection that can be loaded into a viewer or another compatible tool. Furthermore, several updates have been made and new datasets added, like the Sorbonne University library. The metadata aggregated and reconciled into this application is now systematically linked to the Biblissima authorities' platform available at <https://data.biblissima.fr>.

### Arabian Gulf Digital Archive

The  Arabian Gulf Digital Archive (AGDA) is a website launched earlier this year that includes hundreds of thousands of digitised pages of historical documents from the collections of the National Archives of the UK, and the National Archives of the United Arab Emirates.

All the high-resolution documents are available via the IIIF Image API, and all the catalogue records are provided as Presentation API manifests. Finally, the site features a side-by-side transcript-and-image viewer with integrated search that is powered by the Content Search API.

See it in action at <https://www.agda.ae/en>.

Edited by:
* Julien A. Raemy (HES-SO University of Applied Sciences and Arts, Haute école de gestion de Genève)

With contributions from:
* Benjamin Albritton (Stanford Libraries)
* Pierre-Edouard Barrault (MUZZ)
* Ashley Blewer (Artefactual / No Time To Wait)
* Fabio Cusimano (Veneranda Biblioteca Ambrosiana)
* Claire Knowles (University of Leeds)
* Josh Hadro (IIIF-C)
* Paola Manoni (Vatican Library)
* Elizabeth McAulay (UCLA Library)
* Julien A. Raemy (HES-SO University of Applied Sciences and Arts, Haute école de gestion de Genève)
* Jack Reed (Stanford University)
* Scott Renton (University of Edinburgh)
* Régis Robineau (Biblissima (Campus Condorcet, EPHE-PSL))
* Glen Robson (IIIF-C)
* Tristan Roddis (Cogapp)
* Jan Vonde (intranda GmbH)
* LI Yanlin (Fudan University Library)

[2019-ann]: https://iiif.io/event/2019/ann_arbor/
[2020-boston]: https://iiif.io/event/2020/boston/
[awesome-iiif]: https://github.com/IIIF/awesome-iiif
[albert]: https://albert.rct.uk
[royal]: https://www.rct.uk/collection
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
[iiif-youtube]: https://www.youtube.com/channel/UClcQIkLdYra7ZnOmMJnC5OA
[yt-showcase]: https://www.youtube.com/watch?v=l8kc8nH5f8I&list=PLYPP1-8uH9c534aTUrsPX1xX86KGVWmAu
[yt-plenary]: https://www.youtube.com/watch?v=KKK10ESzZ84&list=PLYPP1-8uH9c6rqC0KbHUPyfmHkfvCQYCk
[aa-notes]: https://docs.google.com/document/d/1H5Oareex3Oefhf4iPY6f6BOUBAoYJ9Llj5jRdxjTxIc/edit?usp=sharing
[sharecare]: http://sharecare.nu/amsterdam-x-2019/
[discovery-charter]: https://docs.google.com/document/d/14cE_amET6EuXaGf2mKXN72o8Hcw-Yxnc26P62ZKdohk/edit
[discovery-interest]: https://docs.google.com/document/d/1MLPLZ_a3v_CoOYyiBQLgGtZNaT61Y3vVvkuIS6QUB7A/edit#bookmark=id.mdunsrn5s7ur
[boston-cfp]: https://docs.google.com/forms/d/e/1FAIpQLSd2Fts7cA9dmLzuIytA0awCzpUrtzPzneTR7o47KiOb5mgueg/viewform
