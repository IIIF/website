---
title: IIIF Community
subtitle: >
  The IIIF community has many facets, from Community and Technical Specification Groups to Editors, committees, and more. All our work is guided by our Code of Conduct.
id: community
layout: page
hero:
    image: "assets/uploads/2019-06-IIIF-Conference-0705.jpg"
---

## Community and Technical Specification Groups
IIIF Community Groups meet regularly to discuss various contexts of IIIF usage for a particular idea or initiative. View a full list of active and completed Groups along with their charters, chairs, and meeting times [here]({{ site.root_url | absolute_url }}/community/groups).

## Join a Group call
This calendar provides a bird's eye view of all the IIIF group calls, which take place regularly via Zoom. See something you're interested in here, or in the list of groups? Addit to your own calendar and join! To load this calendar into external applications like Outlook or Mac Calendar please download the calendar in this ical format. 

*calendar goes here*   
|   
|   
|   
|   
|   
|   
|   
|   
|   
|   
|   
|   
|   
|   
|   

### Editorial Committee

The IIIF Editorial Committee meets regularly and works in collaboration with Community and Technical Specification Groups to propose new technical specifications and to update existing ones. Learn about selection and current membership [here][editors].

### Ambassadors
IIIF Ambassadors are deputized to work with Consortium staff to take a formal role in championing IIIF adoption in their communities. Ambassadors focus their efforts around different domains, associations, tools, or regions. Learn more about the program and the current Ambassadors [here][ambassadors].

---

## Group communication channels

**IIIF-Discuss**
Subscribe to the [iiif-discuss mailing list](https://groups.google.com/forum/#!forum/iiif-discuss){:.external} for technical Q&A, project-related updates, and to receive notes and Zoom links for upcoming Community Group calls.

**IIIF Slack**
Join the [IIIF Slack](http://bit.ly/iiif-slack){:.external} team for group and topic-based conversations, questions, and more.

--- 

## Recent implementations from the community

{% for i in site.data.recent_implementations %}
- [{{i.name}}]({{i.url}}){%if i.creators%} by {{i.creators}}{% endif %} - {{i.description}} {%if i.example %}(<a href="{{i.example}}">Example</a>){% endif %} {%if i.github%}(<a href="{{i.github}}">Github</a>){% endif %}
{% endfor %}

[Let us know if you’ve made something to share](https://docs.google.com/forms/d/e/1FAIpQLSetIpJYr9yq827QD7Bl0J31q4E2w0_O-8bUjoqX4XYKm7eU8A/viewform), or check out the community-led [Awesome IIIF Index](https://github.com/IIIF/awesome-iiif){:.external}. (Awesome IIIF is hosted on Github.)

[editors]:({{site.root_url | absolute_url }}/community/editors/index.html)
[ambassadors]:({{site.root_url | absolute_url }}/community/ambassadors.html)
