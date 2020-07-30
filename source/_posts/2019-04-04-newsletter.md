---
title: IIIF Community Newsletter, Volume 3 Issue 1
author: Julien A. Raemy
date: 2019-04-04
tags: [news, newsletters]
layout: post
excerpt: >
  Community Snapshot, Announcements and Actions, Community Events and Outreach, Technical Work, Community Groups, Implementations, Adoption, Innovations and Ongoing Work Across the IIIF Community, Recommended Reading
---  

## Community Snapshot
* [IIIF Discuss][iiif-discuss] = 996 members
* IIIF Slack = 1,025 members ([Join Slack][slack])
* [IIIF on Twitter][iiif-twitter] = 1,485 followers
* [IIIF Consortium][iiif-c] = 52 founding members, 1 associate member.

## Announcements and Actions

### Registration for the 2019 IIIF Conference
Registration for the [Annual Conference][2019-conf], which will take place between June 24 and 28 in Göttingen, is now open: <https://www.eventbrite.co.uk/e/2019-iiif-annual-conference-tickets-58796011453>.

### The IIIF Newsletter
The IIIF community will attempt to publish its newsletter again on a quarterly basis, i.e. one per season! The newsletter will occasionally be short but published more often.

### Organising a IIIF event
If you are organising a IIIF event or presenting a IIIF-related topic at a conference please let the [Outreach Community Group][groups-outreach] know via their channel (#outreach) on the IIIF Slack team and they will add it to the [event calendar][iiif-event].

### Newsletter Submissions
The IIIF Community Newsletter (the document you are reading right now) is published quarterly to provide an at-a-glance update on the current activities and trends in the IIIF community. Anyone may submit an item for publication as long as it relates to IIIF. Please use the [IIIF Community Newsletter submission form][submission-form] to submit an item to the newsletter.

## Community Events and Outreach

### IIIF Presence at MW2019 in Boston (April 2-6)
*Wednesday, April 03, 9:00am - 12:00pm*
IIIF hands-on workshop, by [Tristan Roddis][roddis], Cogapp, UK, [Jeff Steward][jeff], Harvard Art Museums, USA. <https://mw19.mwconf.org/proposal/hands-on-iiif/>
* Registration: <https://mw19.mwconf.org/registration/>

*Thursday, April 04, 2019: 12:45pm - 1:45pm*
IIIF Meetup with [Rob Lancefield][rob], Davison Art Center, Wesleyan University, USA. <https://mw19.mwconf.org/session/iif/>

*Friday, April 05 11:00am - 12:30pm*
3 Things About IIIF That Will Rock Your World, lightning talk by [Deborah Howes][howes], Johns Hopkins University, USA. <https://mw19.mwconf.org/proposal/3-things-about-iiif-that-will-rock-your-world/>

### Bern IIIF Showcase Event
The [full programme of the Bern IIIF Showcase Event][bern-iiif], which will take place on May 15 at the Swiss National Library, is now available. Swiss and international speakers will make presentations in a day that will be divided into four sessions in the context of the [TICKS][ticks-rg] project carried out at the HES-SO University of Applied Sciences and Arts, Haute école de gestion de Genève. [Registration][bern-register] is open until April 26.

### Synthesys
1st February saw the start of [SYNTHESYS+][synthesys]. This is the fourth and final iteration of a European Commission funded programme that facilitates collaboration and network building between European natural history collections. It will run until 2023 and feed into the Distributed System of Scientific Collections (DiSSCO) which will carry the work forward on an even larger scale. SYNTHESYS+ is concerned with both physical and virtual access to the 390 million specimens housed in participating institutions. In this round there are specific tasks to encourage adoption of IIIF as a unified way to publish images of natural history specimens. Currently institutions use a hotchpotch of different technologies to serve images or do not serve images at all. By January 2021 we aim to have ten exemplar institutions publishing IIIF manifests for a few million specimens and, hopefully, some demo apps that make use of these end points. We also hope to infect the non-EU natural history community with the IIIF bug. Look out for participants from natural history collections turning up at IIIF events over the next few years. For more information contact [Roger Hyam][hyam-mail] at the Royal Botanic Garden Edinburgh.

## Technical Work

### Change Discovery API 0.3 and Content State 0.2
The [Discovery Technical Specification Group][groups-discovery] has made good progress with its core deliverables. The Change Discovery API has consolidated into a [reviewed and tested state](https://iiif.io/api/discovery/0.3/), and the Content State API has consensus around its direction and scope, with [draft content](https://preview.iiif.io/api/content-state-0.3/api/content-state/0.2/) available. The former allows IIIF publishers to provide a stream of change events about their resources, enabling crawlers to stay up to date by polling and consuming that data.  The latter allows clients to initialize their view of a resource at a particular state of the content, such as opening to a particular page, with various annotations highlighted.

## Community Groups
IIIF Community groups are designed to provide a forum for general discussion, brainstorming, sharing of use cases and demos, and working to produce tutorials and presentations based on existing IIIF APIs. The process for forming Community Groups can be found at <https://iiif.io/community/groups/framework/>. Please see the [IIIF Community Groups page][groups] for a calendar of group and community calls, as well as links to more information about each group.

### [3D Community Group][groups-3d]
There has been a great deal of activity in the IIIF 3D Community Group. Most recently Ronald Haynes (Cambridge University) gave a presentation introducing the [Veholder project][veholder], examined the long history of stereography, covered a recent  VR workshop held at Central St Martins, and detailed the future 3D aspirations of Cambridge University.
Chris Edwards (J. Paul Getty Trust), told the group about how they are testing CultArm3D from Fraunhofer and talked about the need to document practices around storytelling, display, and dissemination of 3D content.
Tassie Gniady (Indiana University) gave a presentation about the activities of CS3DP group, with a call to action to participate in an upcoming publication on 3D preservation best practices.
Tom Flynn (sketchfab) gave demos of mapping images to geometries (photos of plates to corresponding meshes) and gltf files loading in Mozilla Hubs.
Julie Winchester (Duke) demoed the next generation Morphosource.org platform built with Hyrax and UV (in development).
The Group is thinking about ways to transition to writing technical specifications around the presentation and annotation of 3D objects, including the possibility of holding a summit.

### [Archives Community Group][groups-archives]
The 19th March archives community group call was the best attended we’ve had, which looks to be in response to a promotional push on various archives email lists prior to the call, so that’s likely to be something we repeat when it seems appropriate. Eli Fure from the National Archives of Norway gave an excellent demo on “Old Norse Texts – A Pilot on Manuscript Comparison in Two Institutions” highlighting her experience and experiments with IIIF as a beginner. Other discussions this year have covered such topics as what a IIIF curriculum for archives may look like and whether the IIIF specification needs to be extended for archives. For our next presentation on April 16 Meredith McDonough (Alabama Department of Archives and History) and Ben Brumfield (Brumfield Labs) will be speaking on “Crowdsourcing the Alabama World War I Service Records” covering integration between ContentDM (DAMs) and FromThePage (crowdsourcing platform).

### [Manuscripts Community Group][groups-manuscripts]
The next Manuscript Community Group’s quarterly meeting is scheduled for Wednesday May 15th. We have adopted a pattern of demo-forward calls to highlight activities across the manuscript space and are eager to see what is happening with manuscripts in IIIF around the world. In addition to the quarterly meetings and events in Göttingen this summer, we are also pleased to highlight some upcoming IIIF-Manuscript activities including: a round-table and workshop on teaching with IIIF at the 54th International Medieval Congress in Kalamazoo, MI in May; and a workshop co-sponsored by the Medieval Academy of America and the Beinecke Library, Yale University, on “[Interoperability and Medieval Manuscripts][medieval]” in July.

### [Museums Community Group][groups-museums]
The museums Community Group’s monthly calls since Christmas have covered 3D & AR, custom viewers by the V&A and RKD, and an introduction to and from Josh Hadro. Discussions have covered implementation of IIIF in NetX DAMS software and implementation of stereographs via IIIF, and planning for talks at Museums and the Web conference in April.

### [Newspapers Community Group][groups-newspapers]
We held our last meeting in February and saw a great demo of the implementation of IIIF done by Veridian. We also heard updates from the Samvera and Europeana Newspaper projects. As a group we are looking to update the IIIF Newspaper guidance documents to implement version 3 of the IIIF specification.

### [Outreach Community Group][groups-outreach]
The Outreach Community Group's monthly calls will gradually turn into working sessions. For instance, the next call on April 30 is expected to be a dedicated [Awesome IIIF][awesome] session where people will be able to review some issues and do some pull requests.

### [Software Developers Community Group][groups-sw]
No update at the moment. Follow the Software Developers Community Group's developments on the IIIF Slack channel (#softwaredevs) and through their monthly calls.

## Implementations, Adoption, Innovations and Ongoing Work Across the IIIF Community

### Veridian Software has implemented the IIIF Image and Presentation APIs
[Veridian Software][veridian] implements IIIF Image and Presentation APIs Veridian is presentation software for online search and display of digital collections. It has a particular focus on newspaper collections, and is used extensively by large newspaper digitisation projects at National, State, University, and Public Libraries. Veridian has implemented both the IIIF Image and Presentation APIs, making it possible to access content in a Veridian collection using any IIIF compatible viewer. The new IIIF capability will be rolled out to existing Veridian-based collections over the coming months, eventually resulting in more than 30 million pages of digitised newspapers joining the IIIF eco-system.

### Goobi viewer implements IIIF Change Discovery API
The [Goobi community][goobi] was asked to deliver content from a library, a museum and an archive to a new cultural heritage portal for the state of Thuringia in Germany. At the project planning stage, community members asked which formats and methods offered the most effective solution. The decision to deliver IIIF Presentation manifests and images via the IIIF Image API was easy, but one problem remained: how to notify the portal that a new manifest is available or that an existing one has been changed. The first plan was to use OAI and deliver a simple XML (including a persistent identifier and URL) to the manifest for each record. After posting a quick question on the IIIF Slack channel and reviewing the answers submitted by various members, this option was discarded in favour of the IIIF Change Discovery API. The implementation was completed in January and is now part of the Goobi viewer. You can find the source code for all the components at [Github][gh-goobi].

### Wikidata Image Position
Wikidata has released a [tool which shows relative position within image qualifiers of depicts statements][image-position] on Wikidata items as areas on the item’s image (or other property).

## Recommended Reading

* Blog post by Martin L. Poulter: [Build your own Digital Bodleian with IIIF and SPARQL][poulter]
* Blog post by Antoine Isaac and Nuno Freire: [Europeana and the FAIR principles for research data][fair-iiif]

#### Edited by:
* Julien A. Raemy (HES-SO University of Applied Sciences and Arts, Haute école de gestion de Genève)

#### With contributions from:
* Benjamin Albritton (Stanford University)
* Stefan Boddie (Veridian)
* Roger Hyam (SYNTHESYS+ & Royal Botanic Garden Edinburgh)
* Richard Palmer (Victoria & Albert Museum)
* Julien A. Raemy (HES-SO University of Applied Sciences and Arts, Haute école de gestion de Genève)
* Glen Robson (IIIF Consortium)
* Rob Sanderson (J. Paul Getty Trust)
* Ed Silverton (Mnemoscene)
* Adrian Stevenson (Archives Hub, Jisc)
* Jan Vonde (intranda GmbH)
* Jeffrey Witt (Loyola University Maryland)

[veridian]: https://www.veridiansoftware.com/
[veholder]: http://veholder.org/
[2019-conf]: https://iiif.io/event/2019/goettingen/
[bern-register]: https://app.hesge.ch/enquetes/index.php/667387
[ticks-rg]: https://www.researchgate.net/project/Towards-IIIF-Compliance-Knowledge-in-Switzerland-TICKS
[howes]: https://www.museweb.net/member/debhowes/
[rob]: https://www.museweb.net/member/rlancefield/
[jeff]: https://www.museweb.net/member/jsteward/
[roddis]: https://www.museweb.net/member/tristanr/
[medieval]: http://www.themedievalacademyblog.org/interoperability-and-medieval-manuscripts-a-digital-humanities-workshop/
[gh-goobi]: https://github.com/intranda
[bern-iiif]: https://campus.hesge.ch/id_bilingue/projekte/ticks/assets/bern_iiif_showcase_programme.pdf
[fair-iiif]: https://pro.europeana.eu/post/europeana-and-the-fair-principles-for-research-data
[goobi]: https://community.goobi.io
[image-position]: https://tools.wmflabs.org/wd-image-positions/
[poulter]: http://blogs.bodleian.ox.ac.uk/digital/2019/03/13/build-your-own-digital-bodleian-with-iiif-and-sparql/
[synthesys]: http://www.synthesys.info/
[awesome]: https://github.com/IIIF/awesome-iiif
[hyam-mail]: mailto:r.hyam@rbge.org.uk
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
[groups-text]: https://iiif.io/community/groups/text-granularity/
[iiif-c]: https://iiif.io/community/consortium/
[iiif-c-members]: https://iiif.io/community/consortium/#members
[iiif-discovery]: https://iiif.io/api/discovery/0.2/
[iiif-discuss]: https://groups.google.com/forum/#!forum/iiif-discuss
[iiif-event]: https://iiif.io/event/
[iiif-twitter]: https://twitter.com/iiif_io
[iiif-faq]: https://iiif.io/community/faq/
[iiifc-faq]: https://iiif.io/community/consortium/faq/
[slack]: http://bit.ly/iiif-slack
[submission-form]: https://goo.gl/forms/nw54cBpowzzTPRbp2
