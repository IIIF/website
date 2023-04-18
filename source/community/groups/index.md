---
title: IIIF Community and Technical Specification Groups
layout: page
hero:
    image: "assets/uploads/2019-06-IIIF-Conference-0705.jpg"
breadcrumbs:
 - label: "Get Involved"
   link: /get-involved/
 - label: "Community"
   link: /community/

---

Community Groups provide an opportunity for discussing and advancing IIIF-related issues with peers. They meet regularly and **are open to all**.

If you'd like to propose a technical or community topic that would benefit the community, please review the [Groups framework]({{ site.root_url | absolute_url }}/community/groups/framework).

## Current Groups

All of the meetings for the groups listed below are open to the public and can be joined at any time -- newcomers welcome!

### Community Groups

Community Groups meet to discuss issues related to current themes and topics, and also often feature demos of relevant work and recent implementations.
{% assign community = site.data.groups | where_exp: "group","group.type == 'community'" %}
{% for group in community %}
 * [{{group.label}}]({{ site.root_url | absolute_url }}{{group.link}}) - {{group.meeting_frequency }}
{% endfor%}

### Technical Specification Groups (TSGs)

Technical Specification Groups are specifically chartered to update existing specifications or create new ones (to see how take a look at the [Groups framework]({{ site.root_url | absolute_url }}/community/groups/framework)). Like Community Groups, all of the meetings for the groups listed below are open to the public and can be joined at any time.

{% assign tsgs = site.data.groups | where_exp: "group","group.type == 'tsg'" %}
{% for group in tsgs %}
 * [{{group.label}}]({{ site.root_url | absolute_url }}{{group.link}}) - {{group.meeting_frequency }}
{% endfor%}

## Completed Groups and TSGs

* Discovery TSG -- This group completed its work in 2023, see [wind-down message](https://groups.google.com/g/iiif-discuss/c/g55CIIIg_nU/m/9N0rdIv1AAAJ) for review of publications and accomplishments.
* Text Granularity TSG -- This group completed its work in 2019 with the publication of the [Text Granularity Extension]({{ site.api_url | absolute_url }}/extension/text-granularity/).
* A/V TSG -- with the publication of the [Presentation API 3.0]({{ site.api_url | absolute_url }}/presentation/3.0/) in June 2020, this TSG completed its work and evolved in the A/V community group listed above. 
* Software Developers Community Group

<h2><a name="calendar"></a>Community call calendar</h2>

To load this calendar into external applications like Outlook or Mac Calendar please download the calendar in this [ical format](https://calendar.google.com/calendar/ical/1hnm5h86n94ore0vnoo188ter8%40group.calendar.google.com/public/basic.ics).

{% include community_calendar.html %}

[maps-tsg]: {{ site.root_url | absolute_url }}/community/groups/maps-tsg/
[auth-tsg]: {{ site.root_url | absolute_url }}/community/groups/auth-tsg "IIIF Authentication Technical Specification Group"
[content-search-tsg]: {{ site.root_url | absolute_url }}/community/groups/content-search-tsg "IIIF Content Search Technical Specification Group"
[discovery]: {{ site.root_url | absolute_url }}/community/groups/discovery
