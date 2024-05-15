---
title: "AV Annotations TSG"
layout: page
group: av-motivations
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
Members from the [IIIF A/V Community Group][av-group] would like to propose a mechanism to more explicitly identify the nature of annotations in the IIIF Presentation API. The current [IIIF Presentation API 3.0][iiif-3] and [Web Annotation][w3c-anno] motivations do not provide clear, reliable mechanisms to inform IIIF clients how to distinguish between and present to the user annotations that represent transcripts, captions, and subtitles.

The scope of the work to be performed by the AV Annotations TSG will be limited to addressing the use cases related to transcriptions, captions, and subtitles, and translations of those items. 

The group [charter][charter] specifies the deliverables and aims of the group in more detail.

## Organization

**Chairs:**
{% for chair in group.chairs %}
* {{chair}}
{% endfor %}

**Communication channels:**
* Calls: {{ group.meeting_frequency }} - see [IIIF Community Calendar][iiif-calendar] for details
* Email: [iiif-discuss][iiif-discuss] with subject line: \[Motivation-TSG\]
* General discussion on the [AV Slack channel][av-slack]

**Call notes and group documents:**
  * [Group notes]({{ group.notes }})

**Call connection information:**
* Online: [Zoom](https://stanford.zoom.us/j/98998220214?pwd=RmV5ZGNpbVhnZldzc2JyN3dnZFgrdz09)

[events]: {{ site.root_url | absolute_url }}/event "IIIF Events"
[av-group]: {{ site.root_url | absolute_url }}/community/groups/av/
[iiif-3]: {{ site.root_url | absolute_url }}/api/registry/motivations/
[w3c-anno]: https://www.w3.org/TR/annotation-model/#motivation-and-purpose
[iiif-discuss]: https://groups.google.com/forum/#!forum/iiif-discuss "IIIF-Discuss Forum"
[av-slack]: https://iiif.slack.com/messages/av/details/
[slack]: http://bit.ly/iiif-slack
[iiif-calendar]: {{ site.root_url | absolute_url }}/community/groups/
[charter]: {{ site.root_url | absolute_url }}/community/groups/av-motivations/charter/
