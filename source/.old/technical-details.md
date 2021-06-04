---
title: Using IIIF
title_override: For Implementers - International Image Interoperability Framework™
id: technical-details
layout: sub-page
redirect_from:
  - /technical-details.html
---
{% include apis.html %}

{% capture content %}
So you've been [convinced of the benefits of IIIF][benefits], and you're ready to pursue implementing IIIF for your own resources. This brief guide will lead you through some of the decision points to help get you going.
{% endcapture %}

{% include section.html class="" content=content %}

{% capture content %}
## Community

The IIIF community has developed various options for implementing the standards based on different technical and user needs. For your own institution it is likely that solutions already exist or someone else has needed to do similar.

While this short guide and other documentation can help you move your implementation forward, our first recommendation is to [connect with the community][community]. The IIIF community is available to help point you in the right direction for your particular context and use cases.

The [iiif-discuss list][iiif-discuss] can be used to search for past answers and to ask new questions. The community also has a [Slack team][slack] with many channels for asking questions. There may already be a [community group][community groups] that is interested in the same domain as you.

The community also maintains the [Awesome IIIF][awesome-iiif] list with links to software and resources.
{% endcapture %}
{% include section.html class="step community-driven" content=content %}

{% capture content %}
## Information Gathering

IIIF often requires pulling together people in different roles and data from different systems. We have created a [questionnaire] that can help you gather the kind of information needed to implement IIIF and self-assess.

One thing to consider is reaching out to the vendors of your current systems. They may already have a IIIF implementation as part of a recent version of their product, have an implementation in progress, or be considering developing one. Updating a product you already use may be easier than trying to implement new applications or developing something from scratch.

You may also want to gain a greater familiarity with all of the terminology around IIIF. You can go through a [self-guided IIIF workshop][workshop] to gain a better understanding.
{% endcapture %}

{% include section.html class="step quick-start" content=content %}
{% capture content %}
## Core APIs

The work of implementing the IIIF APIs can be broken down into the core APIs ([Image][image api] and [Presentation][presentation api]) and additional APIs ([Authentication][auth api] and [Content Search][search api]). The recommendation is to implement the core APIs first, and then the others can be added later depending on your needs. Note that it is possible to iteratively improve your image and presentation implementations over time. You can get started with the Image and Presentation APIs at a simpler level and then return to add more features.
{% endcapture %}

{% include section.html class="step step-1" content=content %}
{% capture content %}
### Image API

The [Image API][image api] allows for interoperable delivery of digital images. Simply, the API allows for constructing parameterized URIs for getting a particular region and/or size of an image. This ability to get regions and sizes of the image is what supports delivering thumbnails as well as deep zoom viewing. The image API also specifies a way to get information (info.json) about the image and what image derivatives and image manipulation features are supported for that image. What you need to implement is the server-side piece; later in this guide you can read about viewers for browsers.

The image API can be implemented with only a web server or with a purpose built application called an image server. These different ways of implementing the API map to the different [compliance levels] for the API.

Implementing the Image API with only a web server would be a level 0 implementation. Through creating lots of static image sizes and tiles a level 0 implementation is simple and can still power deep zoom viewers, though it can take up lots of storage space.

The other option is to implement an image server (level 1 or 2). There are [many options for image servers][image servers] developed by the community. If you are just learning about image servers and would like to give one a try, our recommendation is to begin with [Cantaloupe] which is easy to get running, includes lots of features, and has a GUI interface for configuration. If you already have an image server that isn't compliant with IIIF, then you may be able to use a [shim] to support IIIF. Vendors implementing the Image API should aim for a compliance level of at least level 1.
{% endcapture %}

{% include section.html class="image-viewers" content=content %}
{% capture content %}
### Presentation API

While the Image API will allow you to deliver and share images, the Image API alone does not carry any descriptive metadata with it. In order to share your resources and have descriptive metadata travel with the image you will want to implement the [Presentation API][presentation api]. If you have a group of images that together form a single resource, you'll use the Presentation API to sequence those images.

What you create when you implement the Presentation API is a JSON document called a presentation manifest. It includes any information needed to present the whole resource to the user. Manifests can either be statically or dynamically created. The presentation API gets its name from the decision to focus on presentation of information to a user rather than on trying to agree on a new semantic metadata standard, so as you read documentation and look at examples keep this intentional decision to focus on presentation in mind.

The data you'll need to create a presentation manifest for each resource may come from various systems within your environment. One element will be information about your Image API service. As there are so many different kinds of systems across so many different institutions there is no one way to implement other parts of presentation manifests. It often takes custom development to integrate data from different systems. There are some [presentation API libraries] which might help. Again, check to see if any vended products you use support IIIF, as that may be the quickest path. Consider asking the IIIF community if anyone else is using the same or similar set of applications and how they were able to implement presentation manifests.

Manifests are highly nested JSON documents and can seem complicated, but once you learn the terminology you can learn to easily read manifests. Go through the IIIF workshop to [learn how to create a simple manifest][create manifest] and you'll be on your way to understanding the main pieces of that make up manifests.

Once you have a basic manifest working in a presentation viewer, you can come back later and implement other presentation features like [linking properties]. These include ways to link out to semantic descriptive metadata and renderings like PDFs.

{% endcapture %}

{% include section.html class="impl-demos" content=content %}
{% capture content %}
## Viewers and Site Integration

One choice you'll need to make is what viewer you want to use for your IIIF resources on your own site. The choice breaks down into viewers that support only the Image API and deep zoom and viewers that support the Presentation API for displaying metadata and more than one image. When [looking for a viewer] to use consider whether it is an image viewer or a presentation manifest viewer.

Viewers made to deep zoom an image include [OpenSeadragon][osd] and [Leaflet-IIIF][leaflet]. Only the Image API needs to be implemented for a viewer of this kind to work. This kind of viewer is limited as it can only be used to view a single image and cannot display metadata about your resources. This may be all that you need for your own site, though.

To present a manifest consider viewers like [Mirador][mirador] and [UniversalViewer][uv]. These viewers require both the Image and Presentation APIs be implemented. They can show metadata for the resource as a whole as well as have labels for individual page images and other features like download options. These rich client viewers can also be embedded on other sites. Mirador additionally allows for viewing and creating annotations on top of images in a manifest.

Whichever kind of viewer you implement for your own site you'll want to implement presentation manifests that work in presentation manifest viewers. This will allow your users to make their own choice of viewers and tools. They may have their own instance of an application like Mirador set up to allow them to save their annotations.

To allow users to view your resources in another viewer you may also want to advertise that the resource has a presentation manifest available. You could link out from a resource page on your site to different viewers you host as well as include a special [drag & drop link][drag and drop] allowing a user to select their own tool.
{% endcapture %}

{% include section.html class="step step-2" content=content %}
{% capture content %}
## Additional APIs

There are two additional IIIF APIs you may want to consider implementing once you have implemented the core APIs.

The Authentication API helps to manage a workflow for granting authenticated access for IIIF resources while allowing a user to still use the viewer of their choice. If you need to restrict access to your resources or provide degraded versions of your resources in some cases take a look at this API.

The Content Search API allows for searching within a resource. (Note that it does not help to find the resource in the first place, but only helps to search within a resource once a user has discovered it.) Consider implementing the search inside API if you have full text for multi-page resources. The full text could either be from transcription or OCR. Rich client-side viewers like Universal Viewer and Mirador support the content search API.
{% endcapture %}

{% include section.html class="step step-3" content=content %}
{% capture content %}
## Other Considerations

The goal of IIIF is to be interoperable allowing sharing and user choice. To enable this sharing and make your image resources available to web applications hosted on other domains, you will also need to consider some technical details. Since most of the image viewers use JavaScript, your image server will need to support [cross-origin resource sharing (CORS)][cors]. Additionally more websites are using HTTPS, and in order for your images and presentation manifest to be requested without [mixed content] issues they should also be delivered with HTTPS.
{% endcapture %}
{% include section.html class="tips-n-tricks" content=content %}

[image api]: {{ page.webprefix }}/api/image
[presentation api]: {{ page.webprefix }}/api/presentation/
[auth api]: {{ page.webprefix }}/api/auth/
[search api]: {{ page.webprefix }}/api/search/
[iiif-api]: {{ page.webprefix }}/api/

[benefits]: {{ site.url }}{{ site.baseurl }}/community/faq/#what-are-the-benefits-of-iiif
[community]: {{ site.url }}{{ site.baseurl }}/community/
[workshop]: http://ronallo.com/iiif-workshop/
[iiif-discuss]: https://groups.google.com/forum/#!forum/iiif-discuss
[slack]: http://bit.ly/iiif-slack
[community groups]: {{ site.url }}{{ site.baseurl }}/community/groups/
[awesome-iiif]: https://github.com/IIIF/awesome-iiif
[questionnaire]: {{ site.url }}{{ site.baseurl }}/assets/acc_implementation_questionnaire_011017.pdf
[compliance levels]: {{ page.webprefix }}/api/image/2.1/compliance/
[image servers]: https://github.com/IIIF/awesome-iiif#image-servers
[Cantaloupe]: https://cantaloupe-project.github.io/
[shim]: https://github.com/IIIF/awesome-iiif#image-server-shims
[presentation API libraries]: https://github.com/IIIF/awesome-iiif#presentation-api-libraries
[create manifest]: http://ronallo.com/iiif-workshop/presentation/manifest.html
[linking properties]: {{ page.webprefix }}/api/presentation/2.1/#linking-properties
[looking for a viewer]: https://github.com/IIIF/awesome-iiif#image-viewers
[drag and drop]: https://zimeon.github.io/iiif-dragndrop/
[osd]: https://openseadragon.github.io/examples/tilesource-iiif/
[leaflet]: https://github.com/mejackreed/Leaflet-IIIF
[mirador]: http://projectmirador.org/
[uv]: http://universalviewer.io/
[cors]: http://enable-cors.org/
[mixed content]: https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content
