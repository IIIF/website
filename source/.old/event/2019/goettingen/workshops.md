---
title: "Workshops: 2019 IIIF Conference in Göttingen, Germany - Tuesday 25th of June"
layout: gottingen
tags: [event ]
page: tuesday
---

There are a series of optional Workshops on Tuesday before the full Göttingen Conference which starts on Wednesday. These are located in the Alte Mensa Conference and Event Center. Registration for these workshops will be taken through the main conference registration.

## Program

The program for the workshops is as follows:

<table class="api-table">
  <thead>
    <tr>
      <th rowspan="2">Time</th>
      <th colspan="1">Track 1</th>
      <th colspan="1">Track 2</th>
      <th colspan="1">Track 3</th>
     </tr>

    <tr>
      <th>Location: Adam-von-Trott-Saal</th>
      <th>Location: Emmy-Noether-Saal</th>
      <th>Location: Hannah-Vogt-Saal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>9:45am - 11:00am</td>
        {% include conference-submission.html paper=52 mode='td' %}
        {% include conference-submission.html paper=76 mode='td' %}
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>11:00am - 11:30am</td>
        <td colspan="3" align="center"><b>Break (30 mins)</b> - coffee and tea provided.</td>
    </tr>
    <tr>
        <td>11:30am - 12:30pm</td>
        {% include conference-submission.html paper=52 mode='td' %}
        {% include conference-submission.html paper=76 mode='td' %}
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>12:30pm to 2:00pm</td>
        <td colspan="3" align="center"><b>Lunch (1.5 hours)</b> - provided.</td>
    </tr>
    <tr>
        <td>2:00pm - 3:30pm</td>
        {% include conference-submission.html paper=9 mode='td' %}
        {% include conference-submission.html paper=51 mode='td' %}
        {% include conference-submission.html paper=62 mode='td' %}
    </tr>
    <tr>
        <td>3:30pm - 4:00pm</td>
        <td colspan="3" align="center"><b>Break (30 mins)</b> - coffee and tea provided.</td>
    </tr>
    <tr>
        <td>4:00pm - 5:00pm</td>
        {% include conference-submission.html paper=9 mode='td' %}
        {% include conference-submission.html paper=51 mode='td' %}
        {% include conference-submission.html paper=62 mode='td' %}
    </tr>
    <tr>
        <td>5:30pm - 7:00pm</td>
        <td colspan="3">Optional guided city tour - <a href="https://forms.gle/4t82DtYDaFdzF4Hr7">register here</a> (first-come, first-served)</td>
    </tr>
    <tr>
        <td>5:30pm - 6:30pm</td>
        <td colspan="3">Optional guided library tour - Central Library - <a href="https://forms.gle/Ue9vgBYKZYD8qcrx7">register here</a> (first-come, first-served)</td>
    </tr>
    <tr>
        <td>7:00pm - 9:00pm</td>
        <td colspan="3"><b>IIIF Consortium Members reception</b> at the <a href="https://www.uni-goettingen.de/en/125328.html">Orangery</a>. This is open to anyone who works at a IIIF consortium institution, please sign up during registration.</td>
    </tr>
  </tbody>
</table>

Tea, coffee and lunch will be be provided.

Following the event, We have prepared a listing of optional [few social activity suggestions][social] for you that you can join after the end of the conference program.

Also check out the [#göttingen-social][slack-channel] on the IIIF Slack for real-time information about where people are what is happening on the social front.


## Location of Alte Mensa and Consortium reception

Hover your mouse over the marker to see the name of the location.

<div id="map" style="width: 100%; height: 400px; background-color: grey;" ></div>
<script>
  function initMap() {
    var alte_mensa = {lat: 51.533486, lng: 9.937732};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: 51.535987, lng:9.937933}
    });
    var marker = new google.maps.Marker({
      position: alte_mensa,
      title: "Alte Mensa",
      map: map
    });
    var marker = new google.maps.Marker({
      position: {lat: 51.537709, lng: 9.937347},
      title: "Orangery in the Old Botanical Garden, Göttingen University",
      map: map
    });
  }
</script>

{% include conference-submission.html paper=52 mode='full' %}
{% include conference-submission.html paper=76 mode='full' %}
{% include conference-submission.html paper=9 mode='full' %}
{% include conference-submission.html paper=51 mode='full' %}
{% include conference-submission.html paper=62 mode='full' %}

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABBvwq6o-hTwwlEaLLK7SLLPC0emBOSjE&callback=initMap" ></script>

[social]: {{ site.url }}{{ site.baseurl }}/event/2019/goettingen/goettingen-social/
[slack-channel]: https://iiif.slack.com/app_redirect?channel=göttingen-social
