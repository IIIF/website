---
title: IIIF Community
id: community
layout: page
hero:
    image: "assets/uploads/2019-06-IIIF-Conference-0705.jpg"
---

Scholars, software people, researchers, and culture workers are the types who tend to gravitate around IIIF, and everything we do is guided by our **[code of conduct]({{ site.root_url | absolute_url }}/event/conduct/)**.

Overall, we think there are [hundreds of adopters]({{ site.root_url | absolute_url }}/community/map) of IIIF all around the world, at libraries, museums, archives, universities, and some companies, too.

There are four main ways to join the conversation:



1. Sign up for the **[newsletter](https://iiif.io/newsletter/#newsletter-signup)** - news about events, training, cool projects, and community updates
2. Jump on one of the **[community group calls]({{ site.root_url | absolute_url }}/community/groups/)** - friendly, regular calls with interested folk, from beginners to experts
3. Subscribe to the **[iiif-discuss mailing list](https://groups.google.com/forum/#!forum/iiif-discuss)**{:.external} - more technical, Q&A, project-related
4. Join the **[IIIF Slack](http://bit.ly/iiif-slack)**{:.external} team - lots of activity, specific channels for groups, and more!

There are **[groups]({{ site.root_url | absolute_url }}/community/groups/)** to discuss various elements or contexts of IIIF usage or to agree on direction (or not!) of a particular idea or initiative. Some things in IIIF require slightly more formal governance, which happens through five **[committees]({{ site.root_url | absolute_url }}/community/consortium/#committees)**. For example, the [Technical Review Committee]({{ site.root_url | absolute_url }}/community/consortium/trc) is the committee responsible for the IIIF APIs.

## About the IIIF Consortium

IIIF is supported by a membership **[consortium]({{ site.root_url | absolute_url }}/community/consortium)**, with members from all over the world including Stanford University, Europeana, Kansai University, and many more.

You can **[join the consortium]({{ site.root_url | absolute_url }}/community/consortium/join/)** as a _full_ or _associate member_. Consortium members can access customized training, and have voting rights on the overall direction of the framework via the [Technical Review Committee]({{ site.root_url | absolute_url }}/community/trc/) or <span style="text-decoration:underline;">Executive Committee</span>. The consortium has [staff]({{ site.root_url | absolute_url }}/community/consortium/staff), who are stewards looking after the community, organizing events and training, and helping things run smoothly.


### Recent Implementations

{% for i in site.data.recent_implementations %}
- [{{i.name}}]({{example.url}}){%if i.creators%} by {{i.creators}}{% endif %} - {{i.description}} {%if i.example %}(<a href="{{i.example}}">Example</a>){% endif %} {%if i.github%}(<a href="{{i.github}}">Github</a>){% endif %}
{% endfor %}



[Let us know if you’ve made something to share](https://docs.google.com/forms/d/e/1FAIpQLSetIpJYr9yq827QD7Bl0J31q4E2w0_O-8bUjoqX4XYKm7eU8A/viewform), or check out the community-led [Awesome IIIF Index](https://github.com/IIIF/awesome-iiif){:.external}. (Awesome IIIF is hosted on Github.)
