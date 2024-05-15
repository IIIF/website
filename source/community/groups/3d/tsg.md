---
title: "IIIF 3D Technical Specification Group"
layout: page
group: 3d-tsg
breadcrumbs:
 - label: "Get Involved"
   link: /get-involved/
 - label: "Community"
   link: /community/
 - label: "Groups"
   link: /community/groups/
---
{% assign group = site.data.groups[page.group] %}

## About

As IIIF has evolved from an initial focus on 2D images, encompassing new media modalities such as audiovisual content with time-based data, we see a plethora of unmet use cases throughout the cultural heritage field relating to the display of 3D media and related metadata.  We recognise these requirements and the need for further developing a conceptual framework, which can complement and extend existing IIIF specifications.

The IIIF 3D Technical Specification Group will collaboratively clarify and specify common interoperable frameworks pertaining to the 3D data domain. This will include ways to:
- annotate 3D media of various types into a shared canvas space
- annotate 3D media with commentary
- combine 3D media with images and AV content within a shared space
- specify the presentation (placement, orientation, and contextualization) of 3D media

The group will work with other standards bodies and 3D image viewer developers, and will collaboratively address challenges around this dynamic area, which shows great potential for a IIIF resolution, as practical options for media sharing and interchange, for which there is substantial demand and no demonstrably sustainable alternatives.  Guided by widespread expertise from the 3D Community, committed to this purpose, the IIIF 3D TSG will outline sustainable options for the interworking of existing open standards, to provide recommendations for expansions to and modifications of IIIF APIs to better interoperate with the evolving digital ecosystem of online 3D content.

For more, the full charter can be found [here][3d-tsg-charter].

We welcome participation in the 3D TSG by anyone interested in exploring the prospects and promise of 3D data interoperability on the web.

Please add examples and use cases at <https://github.com/IIIF/iiif-3d-stories/issues>

## Goals

The expected initial deliverables are IIIF API extensions and a specification change to define interoperable methods to enable:

- three-dimensionality via a third physical axis extending orthogonally from the traditional canvas model, with accommodation for the scene concept, and  consideration for use cases and backward compatibility
- viewing of 3D media, including combined media (multiple 3D assets and/or 3D and non-3D [2D or A/V] assets combined)
- asset positioning, orientation and scaling
- initial view, and shareable customised views
- adding associated annotations and linked metadata

## Organization

**Chairs:**

  * Ed Silverton ([Mnemoscene][mnemoscene])
  * Ronald Haynes ([Cambridge University][ronald])
  * Julie Winchester ([Duke University][julie])
  * Dawn Childress ([UCLA][dawn])
  * Tom Crane ([Digirati][tom])

**Communication channels:**

- Github Repository: <https://github.com/IIIF/3d>
- Slack: #3d
- Email: iiif-discuss; subject line: [3D-TSG]
- Calls: {{ group.meeting_frequency }} (see [Community Calendar][iiif-calendar])

**Call notes and group documents:**

[IIIF 3D Community Group Folder](https://drive.google.com/drive/u/0/folders/1KZ0qU65MSomk2YIh-VF8DDn5rwkDUY9a)

**Call connection information:**

 * Online: see [Community Calendar][iiif-calendar]

[3d-user-stories]: https://github.com/IIIF/iiif-3d-stories "3D User Stories"
[events]: {{ site.root_url | absolute_url }}/event "IIIF Events"
[iiif-discuss]: https://groups.google.com/forum/#!forum/iiif-discuss "IIIF-Discuss Forum"
[3d-slack]: https://iiif.slack.com/messages/3d/details/
[slack]: http://bit.ly/iiif-slack
[zoom-link]: https://stanford.zoom.us/j/99234876885?pwd=ai9Kb3BldmhGYzZpWVJFSTJrVEwvQT09
[iiif-calendar]: {{ site.root_url | absolute_url }}/community/groups/
[international-zoom]: https://zoom.us/zoomconference
[3d-charter]: {{ site.root_url | absolute_url }}/community/groups/3d/charter
[3d-tsg-charter]: {{ site.root_url | absolute_url }}/community/groups/3d/tsg-charter
[mnemoscene]: https://mnemoscene.io/
[sketchfab]: https://sketchfab.com/nebulousflynn
[ronald]: https://www.uis.cam.ac.uk/about-us/rm/ronald-haynes
[julie]: https://scholars.duke.edu/person/julie.winchester
[dawn]: https://www.library.ucla.edu/staff/dawn-childress
[tom]: https://orcid.org/0000-0003-1881-243X

{% include acronyms.md %}
