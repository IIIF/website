---
title: The Cookbook of IIIF Recipes
layout: page
hero:
    image: ""

---

## The Cookbook

IIIF “recipes” are different reusable code snippets to help create IIIF manifests for common use cases. They’ll help you understand how to build up your IIIF Manifest using patterns that have emerged from within the IIIF community over time.

Using recipes is a bit like using a code library. If the recipe does what you need, you can copy and paste from the library to get up and running more quickly. Recipes will also help you familiarise yourself with patterns and techniques that IIIF developers use a lot.

There’s a **#cookbook** channel on the IIIF Slack team too, if you’d like to know more or join a Cookbook community call.

### Quick links:

- [The Cookbook of IIIF Recipes]({{ site.cookbook_url | absolute_url }}) 
- [Cookbook Recipes Github repository](https://github.com/IIIF/cookbook-recipes/issues)
- [Cookbook Process]({{ site.cookbook_url | absolute_url }}/recipe/)


## Recipes

Here are a few examples, and more are being added each month for a wide variety of common use cases. 

*   [Simplest Manifest - Image]({{site.cookbook_url | absolute_url }}/recipe/0001-mvm-image/) \
_You’ll need: a text editor and an image_ \
If all you have for an object is one image on the web and a label, this pattern turns it into a IIIF Presentation resource.

*   [Support Deep Viewing with Basic Use of a IIIF Image Service]({{site.cookbook_url | absolute_url }}/recipe/0005-image-service/)  \
Paint a Canvas using an image with an associated IIIF Image API service.

* [Simplest Manifest - Video]({{site.cookbook_url | absolute_url }}/recipe/0003-mvm-video/)
The simplest viable manifest for video content. This pattern presents a single video file in a IIIF Presentation resource.

*    [Geographic coordinates]({{site.cookbook_url | absolute_url }}/recipe/0139-geolocate-canvas-fragment/)
Use Web Annotation to provide geocoordinates for a fragment of an IIIF Presentation API 3.0 Canvas.

## Creating Recipes

### Do you have an idea for a recipe?

Feel free to reuse any recipe that suits you, and if you’d like to **submit a recipe**, the first step is to [open a new issue](https://github.com/IIIF/cookbook-recipes/issues/new/choose) in the IIIF Cookbook repo for discussion. If you're not familiar with how to use Github, feel free to contact us and we can help you through the process. Thanks for helping in this effort, and also please be sure to check that there isn’t already a recipe that does what you want.

#### Requirements for new recipes 

To make sure your submission is not abandoned, please make sure to include the following detail: 

*   A short, clear name
*   A use case
*   References and links to help people understand how you expect the recipe to work
*   Notes on how you would implement it (and make that repeatable)
*   A full example, including a written description and a code sample (JSON-LD)
*   Any restrictions you predict on the use of the recipe
*   Any existing recipes you think are connected


### Writing a recipe

If you're interested in helping author a recipe, please see the [Cookbook Process document]({{ site.cookbook_url | absolute_url }}/recipe/) for full details on that front.

There’s [a big list of ideas in the IIIF Cookbook Github repo](https://github.com/IIIF/cookbook-recipes/issues), and you’re very welcome to grab one of them and build it! We're grateful for all the help we can get to build this important community resource. 


