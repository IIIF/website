---
title: The Cookbook
id: cookbook
layout: default
tags: [cookbook ]

---

# The Cookbook

<span style="text-decoration:underline;">Recipes</span> | <span style="text-decoration:underline;">Submit an idea</span>

IIIF “recipes” are different reusable code snippets to help create IIIF manifests for common use cases. They’ll help you understand how to build up your IIIF Manifest using patterns that have emerged using IIIF over time.

Using recipes is a bit like using a code library. If the recipe does what you need, you can copy and paste from the library to get up and running more quickly. Recipes will also help you familiarise yourself with patterns and techniques that IIIF developers use a lot.

There’s a **#cookbook** channel on the IIIF Slack team too, if you’d like to know more or join a Cookbook community call.


## Recipes



*   [Simplest Manifest - Image](https://iiif.io/api/cookbook/mvm-image/) \
_You’ll need: a text editor and an image_ \
If all you have for an object is one image on the web and a label, this pattern turns it into a IIIF Presentation resource.

*   [Annotating part of an image to a Canvas](https://iiif.io/api/cookbook/segment-image-part/)  \
Extract parts, or segments, of resources from a canvas
*   [Anyone can deep zoom, auth reqd for hi-res download](https://digirati-co-uk.github.io/iiif-auth-client/?image=https://iiifauth.digtest.co.uk/img/11_kitty_joyner.jpg/info.json) \
Set up a login step for your image viewer

Would you like to build a recipe? There’s <span style="text-decoration:underline;">a big list of ideas in the IIIF Cookbook Github repo</span>, and you’re very welcome to grab one of them and build it!

**Do you have an idea for a recipe?**

Feel free to reuse any recipe that suits you, and if you’d like to **submit a recipe**, the first step is to <span style="text-decoration:underline;">open a new issue</span> in the IIIF Cookbook repo for discussion. Good luck, and please be sure to check that there isn’t already a recipe that does what you want.

**Requirements for new recipes** \
To make sure your submission is not abandoned, please make sure to include the following detail: 

*   A short, clear name
*   A use case
*   References and links to help people understand how you expect the recipe to work
*   Notes on how you would implement it (and make that repeatable)
*   A full example, including a written description and a code sample (JSON-LD)
*   Any restrictions you predict on the use of the recipe
*   Any existing recipes you think are connected
