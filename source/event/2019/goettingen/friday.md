---
title: "Friday 28th, Alte Mensa, Göttingen"
layout: gottingen
tags: [event ]
page: friday
---

This is the agenda for Friday the 28th of June, the last day of the conference. The conference finishes at lunch time on Friday. To register for the conference please see the [main registration page][registration].

<table class="api-table" style="width: 100%; margin: 0px 0px 0px 0px;">
  <thead>
    <tr>
      <th></th>
      <th colspan="2">Track 1</th>
      <th colspan="2">Track 2</th>
      <th colspan="2">Track 3</th>
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
        {% include conference_slot_row.html rowspan='3' time='9:00am - 10:30am' track1='46,74,22' track2='39,3,36' track3='42,,'  track4=',,,' %}
        {% include conference_slot_row.html span='6' time='10:30am - 11:00pm' title='<b>Break</b>' %}
  </tbody>
</table>
<table class="api-table" style="width: 100%; margin: 0px 0px 0px 0px;">
  <thead>
    <tr>
      <th>Time</th>
      <th>Title</th>
      <th>Authors</th>
    </tr>
  </thead>
  <tbody>
        {% include conference_slot_row.html time='11:00am - 12:00am' rowspan='3' title='<b>IIIF, AI and Machine Learning Plenary Session</b>' %}
        {% include conference_slot_row.html paper=63 %} 
        {% include conference_slot_row.html title='Panel Discussion' %} <!-- need to stretch somehow -->

        {% include conference_slot_row.html time='12:00am - 12:30pm' title='Closing Plenary' %}

  </tbody>
</table>
<br/>

[registration]: https://www.eventbrite.co.uk/e/2019-iiif-annual-conference-tickets-58796011453
