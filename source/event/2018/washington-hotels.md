---
title: "2018 Hotels for the IIIF Conference - Washington, DC"
layout: washington
tags: [event ]
---
This is a short list of nearby hotels. There are no special rates and no room bookings have been held.

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1E41BkdgtTTLMvvApZAVITXWj-2fE7oTk" width="640" height="480"></iframe>

{% for i in site.data.washington-hotels %}
## [{{ i.name }}]({{ i.url }})
**Address:** {{ i.address }}
**Tel:** {{ i.tel }}

{% endfor %}
