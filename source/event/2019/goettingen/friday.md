---
title: "Friday 28th, Alte Mensa, Göttingen"
layout: gottingen
tags: [event ]
page: friday
---

This is the agenda for Friday the 28th of June, the last day of the conference. The conference finishes at lunch time on Friday. To register for the conference please see the [main registration page][washington-registration].

<table class="api-table">
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
        {% include conference_slot_row.html rowspan='3' time='9:00am - 10:30am' track1='46,74,22' track2='3,36,70' track3='42,,'  track4=',,,' %}

        {% include conference_slot_row.html span='6' time='10:30am - 11:00pm' title='<b>Break</b>' %}

        {% include conference_slot_row.html fill='4' time='11:00am - 11:30am' rowspan='3' paper=77 %}
        {% include conference_slot_row.html fill='4' paper=21 %}
        {% include conference_slot_row.html fill='4' paper=12 %} <!-- need to stretch somehow -->

        {% include conference_slot_row.html span='6' time='11:30am - 12:30pm' title='Closing Plenary' %}

  </tbody>
</table>


[memorial]: https://en.wikipedia.org/wiki/Memorial_Day
[washington-registration]: https://www.eventbrite.com/e/2018-iiif-conference-in-washington-tickets-44377905510
