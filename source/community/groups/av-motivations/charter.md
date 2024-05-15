---
title: "AV Annotations TSG Charter"
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

# AV Annotations TSG Charter 

## Introduction
Members from the [IIIF A/V Community Group][av-group] would like to propose a mechanism to more explicitly identify the nature of annotations in the IIIF Presentation API. The current [IIIF Presentation API 3.0][iiif-3] and [Web Annotation][w3c-anno] motivations do not provide clear, reliable mechanisms to inform IIIF clients how to distinguish between and present to the user annotations that represent transcripts, captions, and subtitles.

For A/V, the following potential use cases have been identified:

1. Modern media players have specialized tools to allow users to select and display captions and subtitles. A media player must be able to reliably identify which annotations in a manifest are captions or subtitles so they can be made available to users and properly displayed on top of video. 
2. For a single media item there may be a set of captions with added text for the hearing impaired (indicating, for instance, that music is playing or that the doorbell is ringing) in addition to the file captioning only the spoken dialogue. In this scenario, the media player may want to automatically identify and utilize the annotation(s) that represent the accessible caption in specific situations, such as when the user mutes the volume. 
3. Audio description is used to provide description of visual information for blind or visually impaired users. It generally takes the form of a secondary audio track. The IIIF viewer should be able to identify annotations that represent tracks with audio description so they can be made available to turn on via a gadget in the viewer.
4. Many media players provide the user the ability to access a transcript for an audio or video item. Annotation(s) that represent this transcript should not be displayed on top of video and should be made available to users as a distinct set (and are often available to download). The media player needs to be able to identify which annotation(s) should be presented to the user as a transcript and should be indexed for search purposes. 
5. A video may carry subtitles in both the original language (ex: English) and a translation (ex: French). The media player needs to be able to identify these annotations to render on top of the video and may want to indicate to the user which is the original language of the video.

For Images, the use case currently not addressed by the existing motivations is:

1. Images of digitized newspapers, letters, manuscripts, etc. may be accompanied with transcribed text in both the original and translated language. How do you inform the IIIF viewer that these annotations refer to a transcription, or translation of a transcription, of the text present in the images, so that they can be displayed appropriately to users (ex: identified as a transcription, rather than a comment)?

## Scope
The scope of the work to be performed by the AV Annotations TSG will be limited to addressing the use cases related to transcriptions, captions, and subtitles, and translations of those items. 

## Deliverables
Appropriate deliverables will depend on the recommendations produced by this group. 

## References
The document [Extending Motivations Proposal: captioning, subtitling, transcribing, translating](https://docs.google.com/document/d/1G6DFWuwX9VcpCzM8kaC0E8b_-Pj5Owrzb_BzDQWZ27s/edit?usp=sharing) contains initial recommendations for new motivations and their use cases. It was developed by the IIIF A/V Community Group. 

Some recipes in the cookbook are helpful to understand the difference between these motivations, especially [Transcripts, Captions, and Subtitles - General Considerations](https://iiif.io/api/cookbook/recipe/0231-transcript-meta-recipe/).

## Roadmap
 * Group formation: December 2023
 * Delivery of extension: 
   * Initial Draft: April 2024
   * Final Draft: June 2024

## Communication channels:
* Calls: {{ group.meeting_frequency }} - see [IIIF Community Calendar][iiif-calendar] for details
* Email: [iiif-discuss][iiif-discuss] with subject line: \[Motivation-TSG\]
* General discussion on the [AV Slack channel][av-slack]

[w3c-anno]: https://www.w3.org/TR/annotation-model/#motivation-and-purpose
[iiif-3]: {{ site.root_url | absolute_url }}/api/registry/motivations/
[iiif-discuss]: https://groups.google.com/forum/#!forum/iiif-discuss "IIIF-Discuss Forum"
[av-slack]: https://iiif.slack.com/messages/av/details/
[iiif-calendar]: {{ site.root_url | absolute_url }}/community/groups/