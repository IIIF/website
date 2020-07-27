---
title: "IIIF Technical Review Committee"
layout: default
tags: [trc]

---

As the IIIF community grows the process of developing and maintaining the specifications must take advantage of the wide range of community expertise and viewpoints. As highlighted in the IIIF code of conduct, the IIIF community is an inclusive, friendly and safe community, committed to openness and transparency in all interactions and activities.

The Technical Review Committee (TRC) will enable the timely review of technical proposals coming from the existing, open, [community-based process][groups-framework] while also supporting broad community input. Ratification of specification text will occur in a structured, ongoing way that allows remote and asynchronous participation to promote the widest diversity of review possible. The TRC will also review proposals to create new Technical Specification Groups (TSGs). The TRC will rely upon engaged consortium member representatives and community members to either attend regular calls, or provide input online, in order to make decisions. All issues slated for discussion will be openly announced ahead of TRC review, and all decisions will also be openly documented.

The TRC will be a stepping stone on the path to increased technical engagement -- from the general community to TSG to TRC to [Editorial Board][editors]. Representation from consortium members provides an additional incentive for consortium membership.

## Scope and Purpose

The Technical Review Committee (TRC) is representative of the consortium and the community with regards to technical matters. Its primary function is to review and ratify or reject proposals to solve technical issues, in an ongoing fashion. These decisions include:
  1. reviewing new specifications or updates to existing specifications, from either Technical Specification Groups (TSGs) or the Editorial Board;
  2. reviewing specification cookbook entries, technical registry entries, and implementation notes; and
  3. reviewing proposals for the formation and charters of new TSGs.

Once approved by the TRC, the next steps depend on other community processes not described in this document.

## Membership

The membership will consist of ex officio, consortium and community members:

* Ex Officio:
  * The IIIF Managing Director
  * The IIIF Technical Coordinator
  * The IIIF Editors
  * One (non-editor) chair of each current TSG (to be decided by the TSG, if needed, with a preference for increasing organizational and other diversity where possible)
* Consortium:
  * Each IIIF-C Full member institution may nominate one technical representative to serve on the TRC
  * Each IIIF-C Associate member institution may nominate a technical representative, a number up to half the total number of associate member institutions (rounding up) may be elected to serve on the TRC.
* Community:
  * Self-nominated technical participants from the community, to a maximum of 5 slots

The positions from the IIIF-C member institutions must be members of staff for that organization, and may serve in addition to any other members of the organization that are ex officio members of the TRC. The same person cannot fill two roles at once. TSGs should select the chair that serves as an ex officio member of the TRC to maximize the diversity of representation in the TRC at the time.

## Participation

To promote regular attendance and engaged discussion, the TRC will follow guidelines for participation based on [those that have been used by the W3C][w3c-good-standing].

The TRC will meet monthly by teleconference for one hour, and in person at the annual IIIF Working Group Meeting. TRC members will be able to actively participate in TRC activities even if they are unable to attend the calls or in person meetings. The TRC meetings will be open only to members. The agendas for these meetings will be set and published openly in advance by the ex officio members. The chairing of the meeting will rotate through the ex officio members per call, and per time section of in person meetings. The notes from these meetings will be published openly after the meetings.

TRC members participate by contributing to the discussion of issues and voting on items being reviewed, via the GitHub issue tracker, either synchronously during a meeting or asynchronously. If a consortium or community member of the TRC does not participate over the timeframe of three consecutive meetings (without prior apologies for a prolonged absence), then they are not in "good standing" and their vote will not count on issues until they have participated for three consecutive meetings. Standing will be tracked by analysis of participation on the GitHub issue tracker. This requirement is to ensure continued engagement, rather than dropping in for the occasional issue of interest without understanding the context in which the decision needs to be made.

## Process

The TRC process is designed to encourage input from all community members. Issues for TRC review will come from either TSGs and their [open communication channels][tsg-channels] or from the Editorial Board and its [community process][editors-process]. Pending review items will be publicly announced in advance of TRC meetings by the meeting chair, providing an additional opportunity for community input, and there may be further discussion on community calls or other open meetings.

TRC decisions are made by general consensus, and respectful, passionate, and informed debate is welcomed. Consensus is defined as: all participants in the discussion agree (+1) or decide to abstain (+0), plus no participants actively disagree (-1).  Disagreement should be accompanied by a rationale and, if possible, an alternative solution that both fulfills the use case under discussion and adheres to the design patterns at least as well as the proposed solution. All decisions are recorded and not final until 7 calendar days after their publication in the notes for the meeting, to give all members of the group an opportunity to register their opinion asynchronously.

If the group cannot reach consensus in good faith, then the decision will be made by super-majority vote (2/3rds majority of those voting). If there is no super-majority then the ex officio members will decide whether to delay the decision pending further research, or to accept the simple-majority opinion.

If any member very frequently disagrees (registers a -1 opinion) with the group such that the group does not reach consensus, and in the resulting vote there are less than 5 votes in their favor, they may be asked by the ex officio members to step down from the TRC to ensure that forward progress can be made.

## Membership Rotation

Community members and consortium members representing IIIF-C Associate members will rotate on and off every 18 months, with a call for self-nomination two months in advance. This ensures new voices and provides an on-ramp to technical engagement for newcomers. IIIF-C institutions will be invited to change their representative at this same time, but it will not be required.  If more community participants than the number of available slots (5) self-nominate, then the ex officio and consortium members representing IIIF-C Full members will make the selection with a view to maximizing the diversity of representation amongst those who have previously engaged with the specification process. Community participants may continue to participate in additional consecutive rotations so long as there are available slots to fill.

## Current Membership

### Ex Officio
<ul>
{% for i in site.data.trc_membership %}
    {% if i.role == 1 %}
  <li>
        {{ i.institution }}: {{ i.name }}
  </li>
    {% endif %}
{% endfor %}
</ul>

### Consortium Full Members
<ul>
{% for i in site.data.trc_membership %}
    {% if i.role == 2 %}
  <li>
        {{ i.institution }}: {{ i.name }}
  </li>
    {% endif %}
{% endfor %}
</ul>

### Consortium Associate Members
<ul>
{% for i in site.data.trc_membership %}
    {% if i.role == 3 %}
  <li>
        {{ i.institution }}: {{ i.name }}
  </li>
    {% endif %}
{% endfor %}
</ul>
### Community Representatives
<ul>
{% for i in site.data.trc_membership %}
    {% if i.role == 4 %}
  <li>
        {{ i.institution }}: {{ i.name }}
  </li>
    {% endif %}
{% endfor %}
</ul>



[groups-framework]: {{ site.url }}{{ site.baseurl }}/community/groups/framework/
[w3c-good-standing]: https://www.w3.org/2014/Process-20140801/#good-standing
[tsg-channels]: {{ site.url }}{{ site.baseurl }}/community/groups/framework/#communication-channels
[editors]: {{ site.url }}{{ site.baseurl }}/community/editors/
[editors-process]: {{ site.url }}{{ site.baseurl }}/community/policy/editorial/

{% include acronyms.md %}
