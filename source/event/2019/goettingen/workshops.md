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
      <th>Time</th>
      <th>Location 1</th>
      <th>Location 2</th>
      <th>Location 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>9:45 - 11:00</td>
        {% include conference-submission.html paper=52 mode='td' %}
        {% include conference-submission.html paper=76 mode='td' %}
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>11:00 - 11:30</td>
        <td colspan="3" align="center"><b>Break (30 mins)</b> - coffee and tea provided.</td>
    </tr>
    <tr>
        <td>11:30 - 12:30</td>
        {% include conference-submission.html paper=52 mode='td' %}
        {% include conference-submission.html paper=76 mode='td' %}
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>12:30 to 2:00</td>
        <td colspan="3" align="center"><b>Lunch (1.5 hours)</b> - provided.</td>
    </tr>
    <tr>
        <td>2:00 - 3:30</td>
        {% include conference-submission.html paper=9 mode='td' %}
        {% include conference-submission.html paper=51 mode='td' %}
        {% include conference-submission.html paper=62 mode='td' %}
    </tr>
    <tr>
        <td>3:30 - 4:00</td>
        <td colspan="3" align="center"><b>Break (30 mins)</b> - coffee and tea provided.</td>
    </tr>
    <tr>
        <td>4:00 - 5:00</td>
        {% include conference-submission.html paper=9 mode='td' %}
        {% include conference-submission.html paper=51 mode='td' %}
        {% include conference-submission.html paper=62 mode='td' %}
    </tr>
    <tr>
        <td>7:00 - 9:00</td>
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
      position: {lat: 51.538463, lng: 9.938513},
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