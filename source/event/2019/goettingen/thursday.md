---
title: "Thursday 27th June, Alte Mensa, Göttingen"
layout: gottingen
tags: [event ]
page: thursday
---

This is the agenda for Thursday the 27th of June, the second full day of the conference and is split into three parallel sessions. To register for the conference please see the [main registration page][washington-registration].

<table class="api-table">
  <thead>
    <tr>
      <th></th>
      <th colspan="2">Track 1</th>
      <th colspan="2">Track 2</th>
      <th colspan="2">Track 3</th>
      <th colspan="2">Track 4</th>
     </tr>
    <tr>
      <th>Time</th>
      <th>Title</th>
      <th>Authors</th>
      <th>Title</th>
      <th>Authors</th>
      <th>Title</th>
      <th>Authors</th>
      <th>Title</th>
      <th>Authors</th>
    </tr>
  </thead>
  <tbody>
        {% include conference_slot_row.html rowspan='3' time='9:00am - 10:30am' track1='1,3,6' track2='8,11,17' track3='20,22,25' track4='42,,'%}

        {% include conference_slot_row.html span='8' time='10:30am - 11:00pm' title='<b>Break</b>' %}

        {% include conference_slot_row.html rowspan='3' time='11:00am - 12:30pm' track1='29,34,36' track2='39,46,48' track3='59,64,66' track4='32,,'%}

        {% include conference_slot_row.html span='8' time='12:30pm - 1:30pm' title='<b>Lunch</b>' %}
  </tbody>
</table>
<table class="api-table">
  <thead>
    <tr>
      <th>time</th>
      <th>Title</th>
      <th>Authors</th>
    </tr>
  </thead>
  <tbody>
        {% include conference_slot_row.html time='1:30pm - 2:00pm' rowspan='3' paper=63 %}
        {% include conference_slot_row.html paper=18 %}
        {% include conference_slot_row.html title='Room shuffle or Paper 77' authors='' %} <!-- need to stretch somehow -->
  </tbody>
</table>


<table class="api-table">
  <thead>
    <tr>
      <th></th>
      <th colspan="2">Track 1</th>
      <th colspan="2">Track 2</th>
      <th colspan="2">Track 3</th>
      <th colspan="2">Track 4</th>
     </tr>
    <tr>
      <th>Time</th>
      <th>Title</th>
      <th>Authors</th>
      <th>Title</th>
      <th>Authors</th>
      <th>Title</th>
      <th>Authors</th>
      <th>Title</th>
      <th>Authors</th>
    </tr>
  </thead>
  <tbody>
        {% include conference_slot_row.html rowspan='2' time='2:00pm - 3:00pm' track1='68,69' track2='72,73' track3='57,60' track4='-1,-1' %} <!-- need to handle not 3 rows -->

        {% include conference_slot_row.html span='8' time='3:00pm - 3:30pm' title='<b>Break</b>' %}

        {% include conference_slot_row.html rowspan='3' time='3:30pm - 5:00pm' track1='56,,' track2='74,10,16' track3='75,67,70' track4='30,,' %}

  </tbody>
</table>

<!-- Need to find space for:

56 archives
65 Museums


plus 50 mins of lightning talks... 

space for 3 panels on Friday... 


-->

[washington-registration]: https://www.eventbrite.com/e/2018-iiif-conference-in-washington-tickets-44377905510
