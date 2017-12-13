---
title: "IIIF Discovery Technical Specification Group - Registry"
layout: spec
tags: []
cssversion: 2
---

## About

This is a list of [Activity Stream][ActivityStream] end points for use in testing with the IIIF discovery group.

Users of these resources should note the activity streams may not be on production infrastructure and links may disappear after the discovery group has completed its work.

If institutions or organisations would like to be added to this list please contact the IIIF Technical Coordinator or one of the group chairs. Only public collections where you are happy for the content to be reused should be included.

## End Points

{% for i in site.data.discovery_registry %}
 * {{ i.name }} - [{{ i.uri}}]({{ i.uri }})
{% endfor %}

This list is also available in [collection json][RegistryJson] and [Activity Stream Json][ASJson].

[ActivityStream]: https://www.w3.org/TR/activitystreams-core/
[RegistryJson]: {{ site.url }}{{ site.baseurl }}/community/groups/discovery/collection.json
[ASJson]: {{ site.url }}{{ site.baseurl }}/community/groups/discovery/registry_as.json
