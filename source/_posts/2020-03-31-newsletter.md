---
title: IIIF Community Newsletter, Volume 4, Issue 1
author:  Meg O’Hearn, Julien A. Raemy
date: 2020-03-31
tags: [news, newsletters]
layout: post
excerpt: >
  Virtual event in June, IIIF resources document, new implementations and adoptions, and recommended reading.
---

## Community Snapshot
* [IIIF Discuss][iiif-discuss] = 1,109 members
* IIIF Slack = 1,352 members ([Join Slack][slack])
* [IIIF on Twitter][iiif-twitter] = 2,021 followers
* [IIIF Consortium][iiif-c] = 52 founding members, 2 full members, 3 associate members.

## Announcements and Actions

### IIIF Virtual Event in June
As many of you have heard, the IIIF annual conference scheduled for June 2020 in Boston has been postponed due to COVID-19. In the interim, we will be holding a virtual event to showcase the work of the IIIF community. Fill out our poll to share what you would like to get out of this event [here](https://docs.google.com/forms/d/e/1FAIpQLSfOkDudgqnT0l_cVSPxWYPGI1ZWSz1rhwkYPbW6gj86qQBIkQ/viewform?usp=sf_link).

### IIIF Community Shares Remote Resource Project Ideas and Tools During COVID-19
The IIIF-C staff have started an [open document](https://docs.google.com/document/d/1RYHEj1siVuTo355eIoj1aXoiFBztB_rKQYbAGP53qOc/) for sharing tools and ideas for anyone from teachers to developers finding themself working increasingly with digital collections while working remotely during these challenging times. Please feel free to make additions to the document, and share with anyone who may find these resources useful.

## Newsletter Submissions
The IIIF Community Newsletter is published quarterly to provide an at-a-glance update on recent activities and trends in the community. Anyone may submit an item for publication as long as it relates to IIIF. Please use the [IIIF Community Newsletter submission form][submission-form] to submit an item to the next newsletter.

## Implementations, Adoption, Innovations and Ongoing Work Across the IIIF Community

### The University of St. Andrews Photographic Collection Now Uses IIIF
The University of St. Andrews is proud to announce the release of their [new online photographic collection](https://collections.st-andrews.ac.uk/search). The photographic collection comprises over 200,000 catalogued records (from a physical collection of over 1 million items), with over 100,000 digitised photographs available online for the first time in high-resolution via IIIF using [Cantaloupe](https://cantaloupe-project.github.io/) and [Universal Viewer](https://universalviewer.io/). Manifests are open to be re-used around the web to enable widening access to the collection.

This is the first phase of a year-long project to transform digital collections at St. Andrews, consolidating the user experience for photographic, museums, archives, digitised rare books, and audio/video, into one single interface. Stay tuned for the next part!

### Using IIIF for Crowdsourcing at the Utah State Archives
The Utah State Archives is responsible for providing access to historical government records in the State of Utah (U.S.). As part of that mission they have embarked on a new crowdsourcing transcription project using the online platform [From the Page](https://fromthepage.com/). In setting up transcription for online users, we have been able to use the IIIF features now part of CONTENTdm and integrated with From the Page to import documents with their metadata directly from our digital archives. The first project (available at <https://fromthepage.com/utaharchives/johndlee>) is for 19th century court records regarding John D. Lee, who was executed for his part in the Mountain Meadows Massacre that occurred in the southern part of Utah Territory in 1857. Anyone may join this crowdsourcing effort.

### Slow Looking and Image Tours with Storiiies
Given that so many institutions have physically closed due to the coronavirus, [Cogapp](https://www.cogapp.com/) has shared two free-to-use tools that can help people experience collection items virtually.

The first is [Slow Looking](https://slowlooking.cogapp.com), which allows you to see IIIF images in full-screen panning mode. You can create a link directly using the 'image' URL parameter, e.g. <https://slowlooking.cogapp.com/?image=https://ids.si.edu/ids/iiif/CHSDM-59F451DECA462-000001/info.json>. There is also an open-source Chrome extension that you can adapt for your own institution available at <https://github.com/CogappLabs/slowlooking-chrome-ext>.

The second is the [Storiiies Editor](http://storiiies-editor.cogapp.com/), which allows you to create a guided tour of a IIIF image. You can create a link directly by using the 'resource' parameter, and optional 'rights' parameter, e.g. <http://storiiies-editor.cogapp.com/?resource=https://ids.si.edu/ids/iiif/CHSDM-59F451DECA462-000001/info.json&rights=CC0,%20Cooper%20Hewitt,%20Smithsonian%20Design%20Museum%20Collection>.

### Goobi Viewer Receives Support for Individual IIIF Collections
For many years, the [Goobi](https://www.intranda.com/en/digiverso/goobi/goobi-overview/) viewer has been supporting a functionality for putting together individual collections of records and objects. Logged-in users can save these as reading lists persistently. Unregistered users can curate a session reading list and send it by email at the end.

At the end of January, these reading lists were extended by different areas. Since then, for example, not only entire records or objects, but also individual images can be saved on such a reading list. Furthermore, it is now possible to share or publicly release even private lists via a cryptic link.
In this course, support for IIIF collections was implemented. Users can now create individual IIIF collections, save them persistently, share them and continue working with the materials.
The development is just another step in the consistent support and expansion of the IIIF APIs within Goobi.

## Recommended Reading

* The New York Academy of Medicine Library [announced](https://nycdh.org/groups/nycdh-announcements-71439400/forum/topic/announcing-the-newly-digitized-dr-robert-matz-hospital-postcard-collection/) the launch of the Dr. Robert Matz Hospital Postcard Collection, IIIF-enabled via [Islandora](https://islandora.github.io/documentation/user-documentation/iiif/)
* Journal article by Yinlin Chen, Soumik Ghosh, Tingting Jiang, and James Tuttle published in the latest issue of code4lib: [Scaling IIIF Image Tiling in the Cloud](https://journal.code4lib.org/articles/14933)
* ScienceStories.io uses Linked Open Data, IIIF, Wikidata, and semantic web technologies to share information about under-represented scientists. Watch a video about the project [here](https://www.youtube.com/watch?v=_xMjPB0b0IQ&feature=youtu.be).
* ALLEA has just released a report titled ["Sustainable and FAIR Data Sharing in the Humanities"](https://repository.dri.ie/catalog/tq582c863). Read their announcement about the report [here](https://allea.org/portfolio-item/sustainable-and-fair-data-sharing-in-the-humanities/).
* Rainer Simon (@aboutgeo) [tweets](https://twitter.com/aboutgeo/status/1230838029876592641): “Today's #FridayPreview: a small enhancements to the #Recogito JSON-LD export that includes geo-references in a way that's #IIIF #geo compliant. Or, at least, supposed to be :-) Let us know what you think, @iiif_io
! CC @PelagiosNetwork”
* Huygens ING announced they will create eCodicesNL, a new website to access and study medieval manuscripts in Dutch collections. The project is funded by a grant from the Dutch Royal Academy of Arts and Sciences (KNAW). Read the announcement [here](https://en.huygens.knaw.nl/new-online-portal-for-dutch-medieval-manuscript-collections/?noredirect=en_GB).
* [Credit where credit is due](https://buttondown.email/dancohen/archive/humane-ingenuity-19-credit-where-credit-is-due/): Dan Cohen on the Smithsonian’s recent Open Access launch.

Edited by:
* Meg O’Hearn (IIIF-C)
* Julien A. Raemy (HES-SO University of Applied Sciences and Arts, Haute école de gestion de Genève)

With contributions from:
* Josh Hadro, IIIF-C
* Glen Robson, IIIF-C
* Tristan Roddis, Cogapp
* Gina Strack, Utah State Archives and Records Service
* Jan Vonde, intranda GmbH
* Andrew Wilson, University of St. Andrews

[awesome-iiif]: https://github.com/IIIF/awesome-iiif
[groups]: https://iiif.io/community/groups/
[groups-3d]: https://iiif.io/community/groups/3d/
[groups-D4H]: https://iiif.io/community/groups/D4H/
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
