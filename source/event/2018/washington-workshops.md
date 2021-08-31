---
title: "Workshops: 2018 IIIF Conference in Washington - Monday May 21st"
layout: event
tags: [event ]
page: monday
---
### hosted by the Smithsonian Institution

There are a series of optional Workshops on Monday before the full [Washington Conference][washington] which starts on Wednesday. These are hosted by the Smithsonian Institution and located in the [S. Dillon Ripley Center][ripley-building]. Registration for these workshops will be taken through the [main conference registration][washington-registration].

## Program

The program for the workshops is as follows:

<table class="api-table">
  <thead>
    <tr>
      <th>Time</th>
      <th>Ripley Lecture Hall</th>
      <th>Room 3035</th>
      <th>Room 3037 (A/B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>9:45 - 11:00</td>
        <td>&nbsp;</td>
        <td><a href="#iiif-and-scientific-images">IIIF and Scientific Images</a></td>
        <td><a href="#train-the-trainer-and-iiif-awesome">Train the trainer and IIIF Awesome</a></td>
    </tr>
    <tr>
        <td>11:00 - 11:30</td>
        <td colspan="3" align="center"><b>Break (30 mins)</b> - coffee and tea provided.</td>
    </tr>
    <tr>
        <td>11:30 - 12:30</td>
        <td><a href="#mirador-showcase-and-demos">Mirador showcase and demos</a></td>
        <td>Mirador Breakout</td>
        <td><a href="#train-the-trainer-and-iiif-awesome">Train the trainer and IIIF Awesome</a></td>
    </tr>
    <tr>
        <td>12:30 to 2:00</td>
        <td colspan="3" align="center"><b>Lunch (1.5 hours)</b> - on your own.</td>
    </tr>
    <tr>
        <td>2:00 - 3:30</td>
        <td><a href="#universal-viewer-showcase-and-discussions">Universal Viewer showcase and discussions</a></td>
        <td><a href="#iiif-and-annotations">IIIF and Annotations</a></td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>3:30 - 4:00</td>
        <td colspan="3" align="center"><b>Break (30 mins)</b> - coffee and tea provided.</td>
    </tr>
    <tr>
        <td>4:00 - 5:00</td>
        <td><a href="#universal-viewer-showcase-and-discussions">Universal Viewer showcase and discussions</a></td>
        <td><a href="#iiif-and-annotations">IIIF and Annotations</a></td>
        <td>UV Breakout</td>
    </tr>
  </tbody>
</table>

Tea and coffee will be provided but lunch will not be.

## Location of the [S. Dillon Ripley Center][ripley-building]

<div id="map" style="width: 100%; height: 400px; background-color: grey;" ></div>
<script>
  function initMap() {
    var ripley = {lat: 38.888564, lng:-77.026868};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: ripley
    });
    var marker = new google.maps.Marker({
      position: ripley,
      title: "S. Dillon Ripley Center",
      map: map
    });
  }
</script>

# **IIIF and Scientific Images**
## **Heritage Scientific Data Layers in IIIF Workshop**
This would be a workshop to be held on the Monday the 21st of May to introduce the potential of including additional imaging, and scientific analytical data layers and annotations into IIIF images in Mirado. This would be for people who are new to IIIF and interested in both humanities and scientific data as it pertains to cultural heritage documents and objects. It would be a showcase of the Mirador functionality for this application, the challenges and the potential developments for other scientific data applications.

 * Lead: Fenella France and Meghan Wilson
 * Others:
 * Duration: 9:45 - 11:00
 * Location: Room 3035
 * Intended Audience: People who are new to Mirador and IIIF and the potential of integrated heritage scientific data to expand the static object color image, and who are interested in learning more.

An introduction to the types of scientific data that can be included as layers and annotations in IIIF compliant images

Topics include:

 * Spectral Imaging and data as layers
 * Data as annotations
 * Challenges, lessons learned, future developments

# **Train the trainer and IIIF Awesome**

The community has been making a more concerted effort to grow adoption of IIIF and encourage use of IIIF resources. Part of the strategy has been to offer more workshops and trainings. Now is a good time to reflect on those efforts and consider what helps people better understand IIIF and make better use of IIIF resources. This includes a discussion of IIIF Awesome which is a list of useful resources for people to find IIIF related resources.

* Lead: Jason Ronallo
* Others:
* Duration: 9:45 - 12:30 with 30 minute break.
* Location: Room 3037 (A/B)
* Intended Audience:

This session will begin with short presentations by those who have experience teaching different aspects of IIIF to various audiences. Following will be a facilitated discussion with all those in attendance with the aim of improving our understanding of how to best teach IIIF and advance our instructional goals. We will explore what still needs to be done to better promote IIIF through workshop events and training materials.

Possible questions for discussion can include:
* What approaches work best for teaching different aspects of IIIF to different audiences?
* What kinds of examples and exercises resonate with different sub-communities?
* What can we learn from the feedback we’ve received from different trainings?
* What gaps still exist in our training materials?
* How do you organize a good workshop?
* How can we include considerations of how we will teach the specifications into decisions about changes to the specs and related documentation?
* What kinds of tools, platforms, or resources do we need to allow non-technical audiences to meaningfully engage with IIIF?
* How can we promote continued learning and engagement after a workshop?
* Is there central infrastructure that could be provided by IIIF-C that would aid teaching?

Awesome:
The purpose of this working meeting would be to introduce new folks to curation of the list and invite them to join in contributing to the list’s maintenance. We will work through some open issues or pull requests to give examples of the workflow and how decisions are made for inclusion on the list. The rest of the session will be devoted to working together on other maintenance tasks like filing new issues and pull requests for new resources, adding to the lists of readings and implementations, and weeding out dead links. By the end we hope to expand the group of those who feel empowered to help maintain this important community resource.

# **Mirador showcase and demos**

This is a workshop to introduce Mirador to people who are new to IIIF and new to the available viewers. It will be a showcase of the Mirador functionality and community.

* Lead: Ben Albritton
* Others:
* Duration:  11:30 - 12:30
* Location: Ripley Lecture Hall
* Intended Audience: People who are new to Mirador and/or IIIF who are interested in learning more.

Topics include:

**Introduction to Mirador**
 * A introduction to Mirador showing off its features. Similar to introductions that Ben has done before. Topics include:
 * Bringing content into Mirador
 * Comparing material from different repositories
 * Annotation
 * Advanced features
   * Layers
   * Reconstruction of disparate materials
   * Etc.
 * Getting started:
   * Download Mirador Desktop and install locally
   * Edit the list of objects
   * Add your own images

**Mirador showcase**

 * Short presentations showing Mirador in action. Presenters to be confirmed.

**Mirador 3 - Use Cases**

 * A discussion about the Mirador 3 development and identification of Use cases.

# **Universal Viewer showcase and discussions**

The Universal Viewer has a growing community of adopters, from national libraries and museums to one-person projects. It is made for simple, consistent presentation and sharing of digitised books, artworks, archives, audio, video and 3D objects.

The Universal Viewer is also built from parts that can be assembled to produce different user experiences for other audiences.

This workshop will give a showcase of how people are using the UV and then go on to more unconference style where discussion can be driven by participants.

* Lead: Tom Crane and Ed Silverton
* Others:
* Duration:  2:00 - 5:00
* Location: Ripley Lecture Hall
* Intended Audience: People who are new to the Universal Viewer and/or IIIF who are interested in learning more.

**Showcase**
 * Presentations showing the UV in action and demonstrations of the latest developments.

**Discussions**
 * Unconference style sessions lead by the interests of participants.

# **IIIF and Annotations**

Annotations are an exciting part of IIIF and allow things like transcriptions, OCR and crowdsourcing data to be displayed along side images. This workshop will demonstrate how to get started with an annotation store and look at different ways to generate and use annotations. Participants are encouraged to bring examples of annotations or existing work if they have them to demonstrate to the group.

* Lead: Matt McGrattan
* Others:
* Duration:  2:00 - 5:00
* Location: Room 3035
* Intended Audience: People who are interested in learning more about how to create annotations and in particular how to setup an annotation store.

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABBvwq6o-hTwwlEaLLK7SLLPC0emBOSjE&callback=initMap" ></script>
<!-- Link not working: https://www.si.edu/museums/ripley-center -->

[washington]: {{ site.url }}{{ site.baseurl }}/event/2018/washington/
[ripley-building]: https://en.wikipedia.org/wiki/S._Dillon_Ripley_Center
[washington-registration]: https://www.eventbrite.com/e/2018-iiif-conference-in-washington-tickets-44377905510
