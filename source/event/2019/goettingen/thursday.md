---
title: "Thursday 27th June, Alte Mensa, Göttingen"
layout: gottingen
tags: [event ]
page: thursday
---

This is the agenda for Thursday the 27th of June, the second full day of the conference and is split into three parallel sessions. To register for the conference please see the [main registration page][registration].

<table class="api-table">
  <thead>
    <tr>
      <th rowspan="2"></th>
      <th colspan="2">Track 1</th>
      <th colspan="2">Track 2</th>
      <th colspan="2">Track 3</th>
     </tr>
     <tr>
      <th colspan="2">Location: Adam-von-Trott-Saal</th>
      <th colspan="2">Location: Hannah-Vogt-Saal</th>
      <th colspan="2">Location: Emmy-Noether-Saal</th>
     </tr>
    <tr>
      <th>Time</th>
      <th>Title</th>
      <th>Authors</th>
      <th>Title</th>
      <th>Authors</th>
      <th>Title</th>
      <th>Authors</th>
    </tr>
  </thead>
  <tbody>
        {% include conference_slot_row.html time='9:00am - 10:30am' track1Single='30' track2Single='65' track3Single='32' %}

        {% include conference_slot_row.html span='6' time='10:30am - 11:00am' title='<b>Break</b>' %}

        {% include conference_slot_row.html rowspan='3' time='11:00am - 12:30pm' track1='6,64,26' track2='61,75,1' track3='72,25,17' %} 

        {% include conference_slot_row.html span='6' time='12:30pm - 1:30pm' title='<b>Lunch</b>' %}

        {% include conference_slot_row.html rowspan='3' time='1:30pm - 3:00pm' track1='59,57,69' track2='11,78,16'  track3='73,34,20' %}

        {% include conference_slot_row.html span='6' time='3:00pm - 3:30pm' title='<b>Break</b>' %}

        {% include conference_slot_row.html rowspan='3' time='3:30pm - 5:00pm' track1='71,8,79' track2='56,29,48' track3='60,68,80'  %}
    <tr>
        <td>5:30pm - 7:00pm</td>
        <td colspan="6">Optional guided city tour - <a href="https://forms.gle/4t82DtYDaFdzF4Hr7">register here</a> (first-come, first-served)</td>
    </tr>

  </tbody>
</table>

Following the event, We have prepared a listing of a few [social activity suggestions][social] for you that you can join after the end of the conference program.

Also check out the [#göttingen-social][slack-channel] on the IIIF Slack for real-time information about where people are what is happening on the social front.


<!-- Need to find space for:

56 archives
65 Museums


plus 50 mins of lightning talks... 

space for 3 panels on Friday... 


-->

[registration]: https://www.eventbrite.co.uk/e/2019-iiif-annual-conference-tickets-58796011453

[social]: {{ site.url }}{{ site.baseurl }}/event/2019/goettingen/goettingen-social/
[slack-channel]: https://iiif.slack.com/app_redirect?channel=göttingen-social
