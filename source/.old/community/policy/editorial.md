---
title: "IIIF Editorial Process"
layout: default
tags: []

---

This document describes the process by which specifications are designed and written within the IIIF community. The first part describes the expected participation of the community throughout the process, including gathering real world use cases, discussing solutions, implementing products, and the role of the [Technical Review Committee (TRC)][trc]. The second section describes the processes that the [editorial committee][editors] and the editors of a given specification use to ensure that the work is of the highest quality possible. The processes are intended to be as transparent and inclusive as possible, while still making progress quickly and responsibly.

Updates to this document are tracked in the [change log][change-log] at the bottom of the page.

## 1. Community Process
{: #community-process}

### 1.1 Proposals and Feedback
{: #proposals-and-feedback}

Community members discuss features and ideas for the specifications via [IIIF-Discuss][iiif-discuss]. IIIF holds regular [community conference calls][comm-call] as well as various [Community Group and Technical Specification Group meetings][groups], the details and agendas for which are announced on IIIF-Discuss. There is also a [Slack][slack-signup] workspace for IIIF, with channels for both general and focused discussion.

The primary communication channel for technical discussion of the specifications is the [API issue list on Github][iiif-github-issues], and is especially useful for implementers who want to track the discussion around an issue of interest. [Technical Specification Groups][tsg-framework] will create issues for related public specifications in Github to ensure that they are available for review, and remain open until there is a decision.

Consensus for decision-making is sought via discussion and healthy debate. If disagreements arise, proponents of each approach should provide mock-ups, examples, and demonstrate practicality of implementation as well as conformance to accepted [design patterns][design-patterns], in order to justify their approaches. These suggestions will be reviewed and discussed by the appropriate Technical Specification Group, if one exists, and by the Editorial Committee, Technical Review Committee, and the community on technical calls and via other channels as appropriate.

### 1.2 Use Cases and Support
{: #use-cases-and-support}

New specifications and changes to existing specifications must have one or more [documented use cases][use-cases], supported by at least two institutions that either have IIIF-based technology in production or are clearly blocked from doing so, as demonstrated by the use case. In the case of breaking changes, where applicable, the documented use case must clearly demonstrate why the previous approach was flawed or insufficient.

### 1.3 Evaluation and Testing
{: #evaluation-and-testing}

In order to be considered ready for final review, new features must have two open-source server-side implementations, at least one of which should be in production. New features must also have at least one open-source client-side implementation, which may be a proof-of-concept.

### 1.4 Community Review
{: #community-review}

New versions of specifications at or above 1.0, and at least the first published [beta version][iiif-semver] of any specification, must be reviewed by the [Technical Review Committee (TRC)][trc] as representative of the consortium and the community with regards to technical matters. Both the agendas and the notes from TRC meetings will be openly available.

Proposed new specifications and changes must be frozen for at least two weeks prior to all TRC review meetings, and this review period will be announced on [IIIF-Discuss][iiif-discuss], [IIIF-Announce][iiif-announce] and other relevant community email lists. Objections should be registered in advance of the TRC review meeting.

Proposed new versions of specifications will reference a change log as a means to help the community review the changes. This change log should differentiate between backwards compatible changes and breaking changes, and provide a brief summary of each change. See the [Image API 3.0 Change Log][image-30-changelog] for an example.

The TRC shall ensure that there is a response to, and, where possible, resolution of any objections raised. The TRC is responsible for considering the severity and importance of any remaining objections, and, ultimately, whether to seek additional community input and continue revision, or to proceed with publication of the new version of a specification.

Once approved by the TRC, new specifications or updates to existing specifications shall then be released by the editors.

### 1.5 Frequency of Releases
{: #frequency-of-releases}

No specification is perfect. New use cases surface, and refinements and clarifications need to be made. As such, specifications are generally considered to be under continuous revision. The editors will decide when new releases are proposed for review based on input from the community, balanced against the need for a degree of stability and consideration of other IIIF priorities.

New IIIF specifications, and the Image and Presentation API specifications beyond their version 2.0.0 releases, follow semantic versioning as defined in the [IIIF Versioning Note][iiif-semver]. It is intended that minor, backwards compatible, releases will not be published more than once per year, and that major releases will not be published more than once every two years.

Specification versions prior to 1.0 should be considered experimental, are not subject to community review, and may be updated with breaking changes at the editors' discretion.

## 2. Editorial Committee Process
{: #editors-process}

### 2.1 Terminology
{: #terminology}

The key words _MUST_, _MUST NOT_, _SHOULD_, _SHOULD NOT_, _RECOMMENDED_, and _MAY_ in this document are to be interpreted as described in [RFC 2119][rfc-2119].

### 2.2 Editorial Participation

Editors _MUST_ identify which specifications they are working on, and are not expected to work on every specification. It _MUST_ be clear in the versions of the specifications which editors were actively participating. This is necessary in order to manage the acceptance criteria for merging changes, as described below.

### 2.3 Process for Suggesting Changes
{: #process-for-suggesting-changes}

Editorial collaboration takes place primarily in the [IIIF API repository on GitHub][iiif-github]. When editors submit changes for revision, they _MUST_ adhere to the following criteria:

 * There _MUST_ be a Github issue that explains the reason for the change and serves as a platform for discussion for any technical change. Discussion regarding smaller, primarily word level, editorial changes _MAY_ take place directly on a pull request in the comments or as line notes.
 * The changes _MUST_ be made in a branch.
 * The branch _MUST_ pass all integration tests before being accepted.
 * A link to the branch (i.e. _https://preview.iiif.io/api/BRANCHNAME/api/path/to/page_) _MUST_ be included in the pull request relevant to the change.
 * Changes on the branch _SHOULD_ be squashed into one commit, with a reasonable commit message, and one parent commit that is the latest revision. Multiple commits are allowed when they are logical, but this should generally be avoided as it usually indicates that there are too many changes happening on one branch.
 * When one or more editors feel that a branch is ready for final consideration, they _MUST_ label the issue as "Ready for Review" and submit a pull request that references the issue.

### 2.4 Acceptance Criteria for Merging Changes
{: #acceptance-criteria-for-merging-changes}

Final editorial voting _MUST_ take place on a pull request. Non-normative editorial discussion, e.g. to point out changes in language and typos, _MAY_ also transpire on the pull request, however, any discussion of substantive changes related to the issue _MUST_ continue on the issue.  Note that this is in addition to the [TRC approval process][trc-process].

In addition to adhering to the guidelines above, there _MUST_ be agreement about the change among the editors. _Agreement_ is defined as follows:

 * There _MUST NOT_ be any "-1"s (or similar Emoji) in the latest comment from any member of the editorial committee before a merge.
 * __A majority__ of the editors working on the specification, including the issuer of the pull request, _MUST_ actively agree ("+1") on any __non-normative__ change to a specification.
 * __All but one__ of the editors working on the specification _MUST_ actively agree on any __normative__ change to a specification.

The editor that submitted the pull request _MUST NOT_ be the editor that merges it.

In the event that an editor disagrees with a merge that has already happened, they should create a new issue that references the change in question, and explains the objection. This issue then serves as the discussion point for the objection which is subject to this same process. Reverts _SHOULD_ stay in the repository history, i.e., the process of reverting involve updating the HEAD version to reflect older content, and not erasing or re-writing history.

### 2.5 Meetings
{: #meetings}

All Editors _SHOULD_ attend one editorial committee meeting per year, either in person or online, lasting 2-3 days. Every effort will be made to ensure the timing and location of the meeting is convenient for as many of the committee as possible, and it is acknowledged that not every editorial committee member will be able to attend.

All Editors _SHOULD_ attend one virtual editorial committee meeting monthly to discuss the ongoing work of the community, lasting for 1 hour. 

All Editors _SHOULD_ attend as many TSG meetings for the specifications on which they are working as possible.

The editorial committee _MUST_ provide a summary of all meetings, and _SHOULD_ provide a summary of other interactions at which changes and new specifications are discussed.

## 3. Change Log
{: #change-log}

 | Date       | Description                                                          |
 | ---------- | -------------------------------------------------------------------- |
 | 2020-09-29 | Revise for new editors and reduced travel                            |
 | 2018-11-12 | Split off [membership][editors] and added [TRC][trc] role            |
 | 2017-03-17 | Updates to sections 1 and 2.1 (@srabun, @azaroth, @zimeon, @tcramer) |
 | 2015-12-22 | First release (@mikeapp, @tomcrane, @azaroth42, @jpstroop, @zimeon)  |

[change-log]: #change-log "Change Log"
[slack-signup]: https://docs.google.com/forms/d/e/1FAIpQLSdGV9QSFo8i2z1R5iIMP7B2JVhS9akHqcykWF5_y4mtWqVrBA/viewform "Slack Signup"
[trc]: {{ site.url }}{{ site.baseurl }}/community/trc/ "IIIF Technical Review Committee"
[editors]: {{ site.url }}{{ site.baseurl }}/community/editors/ "IIIF Editorial Committee"
[iiif-announce]: https://groups.google.com/forum/#!forum/iiif-announce "IIIF Email Announcement List"
[iiif-discuss]: https://groups.google.com/forum/#!forum/iiif-discuss "IIIF Email Discussion List"
[use-cases]: https://github.com/IIIF/iiif-stories/issues "IIIF user stories and use cases"
[iiif-github-issues]: https://github.com/IIIF/api/issues "IIIF issues"
[iiif-github]: https://github.com/IIIF/api "IIIF Specifications on Github"
[iiif-io]: {{ page.webprefix }} "iiif.io"
[iiif-semver]: {{ page.webprefix }}/api/annex/notes/semver/ "Versioning of APIs"
[rfc-2119]: https://www.ietf.org/rfc/rfc2119.txt "RFC 2119"
[mou]: {{ site.url }}{{ site.baseurl }}/community/consortium/mou/ "Memorandum of Understanding covering the establishment of the IIIF Consortium"
[comm-call]: {{ site.url }}{{ site.baseurl }}/community/call/
[groups]: {{ site.url }}{{ site.baseurl }}/community/groups/
[design-patterns]: {{ page.webprefix }}/api/annex/notes/design_patterns/
[image-30-changelog]: {{ page.webprefix }}/api/image/3.0/change-log/ "Changes for IIIF Image API Version 3.0"
[tsg-framework]: {{ site.url }}{{ site.baseurl }}/community/groups/framework/#iiif-technical-specification-groups
[trc-process]: {{ site.url }}{{ site.baseurl }}/community/consortium/trc/#process "TRC Process"
{% include acronyms.md %}
