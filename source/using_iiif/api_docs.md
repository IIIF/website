---
title: "API docs"
id: api_docs
layout: default
tags: [api_docs ]

---

# API Docs

There are four IIIF APIs:

<a name="image"></a>
## [Image]({{ page.webprefix }}/api/image/{{ site.image_api.latest.major }}.{{ site.image_api.latest.minor }}/) API v{{ site.image_api.latest.major }}.{{ site.image_api.latest.minor }}




![IIIF Image API]({{ site.url }}{{ site.baseurl }}/img/image_api.png "Image API")


**The Image API is the foundation of IIIF.** Images are delivered to the web via standard HTTP request. Set parameters like crop or size in the URI or info.json response. Popular image servers can be easily tweaked for IIIF compatibility. You can also stop after this step, if you're delivering so others can view.

<a name="presentation"></a>
## [Presentation]({{ page.webprefix }}/api/presentation/{{ site.presentation_api.latest.major }}.{{ site.presentation_api.latest.minor }}) API v{{ site.presentation_api.latest.major }}.{{ site.presentation_api.latest.minor }}

![IIIF Presentation API]({{ site.url }}{{ site.baseurl }}/img/prezi_api.png "Presentation API")


**The Presentation API dictates how the delivered objects are viewed.** Designed for humans, this API helps unpack and describe any hierarchy, pagination, sequences or other structure, and contains each individual object's metadata so people understand what they're viewing. It's expressed in .json too, and called the **_Manifest_**.

<a name="authentication"></a>
## [Authentication]({{ page.webprefix }}/api/auth/{{ site.auth_api.latest.major }}.{{ site.auth_api.latest.minor }}) API v{{ site.auth_api.latest.major }}.{{ site.auth_api.latest.minor }}

![IIIF Authentication API]({{ site.url }}{{ site.baseurl }}/img/auth_api.png "Authentication API")

**The optional Authentication API can restrict view.** While open content resources are clearly The Way Forward, sometimes access must be restricted. This API makes a bridge between the viewer application and any server-level access controls via methods like an IP address match or a clickthrough agreement.

<a name="search"></a>
## [Search]({{ page.webprefix }}/api/search/{{ site.search_api.latest.major }}.{{ site.search_api.latest.minor }}) API v{{ site.search_api.latest.major }}.{{ site.search_api.latest.minor }}

![IIIF Search API]({{ site.url }}{{ site.baseurl }}/img/search_api.png "Search API")


**The optional Search API helps people do text searches within digital objects.** Anytime a Manifest or a Collection (which is a collection of Manifests) contains textual content like the OCR of a book or a whole newspaper or translations, you can use this API to search within it. These textual bits of content are called **_Annotations_**.


## Coming soon

We are working on two new APIs, which will be released when they reach v1.0:



*   The [Change Discovery]({{ page.webprefix }}/api/discovery/) API allows aggregators to harvest any changes published by organisations that deliver digital objects.
*   The [Content State]({{ page.webprefix }}/api/content-state/) API can generate a very specific link to a particular view of an object, like a specific area on a particular page rotated at a certain angle.


### How do these specifications get written?

The core specs are the <span style="text-decoration:underline;">Image API</span> and the <span style="text-decoration:underline;">Presentation API</span>. They came into the world in 2012 and 2014 respectively. Since then, their development and the discussion of newer APIs have largely come about as a result of broad use and ideas for improvements from the community. There’s a [Github repo called IIIF User Stories](https://github.com/IIIF/iiif-stories/) which we now use to gather ideas. You’re welcome to add one as a new issue.

There are two committees involved in the maintenance of the IIIF API specifications: The [Editorial Committee]({{ page.webprefix }}/community/editors/) takes feedback from community groups to propose as updates or new specs, and the [Technical Review Committee]({{ page.webprefix }}/community/trc/) reviews those proposals to figure out whether a new IIIF group is required to shepherd development of a new part of the specification.


### Get involved?

*   If you would like to get involved in this process, have a look at the [Community & Technical Groups]({{ page.webprefix }}/community/groups/) and jump in!
*   If you have suggestion or idea about the APIs you’d like to propose, head for the **#technical** channel in the [IIIF Slack team](http://iiif.slack.com), or open a new issue for discussion on the [IIIF Stories page on Github](https://github.com/IIIF/iiif-stories/).
