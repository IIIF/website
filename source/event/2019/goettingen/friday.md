---
title: "Friday 28th, Alte Mensa, Göttingen"
layout: event
tags: [event ]
page: friday
---

This is the agenda for Friday the 28th of June, the last day of the conference. The conference finishes at lunch time on Friday. To register for the conference please see the [main registration page][registration].

<table class="api-table" style="width: 100%; margin: 0px 0px 0px 0px;">
  <thead>
    <tr>
      <th rowspan="2"></th>
      <th colspan="2">Track 1</th>
      <th colspan="2">Track 2</th>
      <th colspan="2">Track 3</th>
     </tr>
    <tr>
      <th colspan="2">Location: Hannah-Vogt-Saal</th>
      <th colspan="2">Location: Emmy-Noether-Saal</th>
      <th colspan="2">Location: Taberna</th>
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
        {% include conference_slot_row.html rowspan='3' time='9:00am - 10:30am' track1='42,,' track2='39,3,36' track3='46,74,22' track4=',,,' %}
        {% include conference_slot_row.html span='6' time='10:30am - 11:00am' title='<b>Break</b>' %}
  </tbody>
</table>
<table class="api-table" style="width: 100%; margin: 0px 0px 0px 0px;">
  <thead>
    <tr>
        <th colspan="3"><div style="text-align:center">Location: Emmy-Noether-Saal</div></th>
    </tr>
    <tr>
      <th>Time</th>
      <th>Title</th>
      <th>Authors</th>
    </tr>
  </thead>
  <tbody>
        {% include conference_slot_row.html time='11:00am - 12:00pm' rowspan='3' title='<b>IIIF, AI and Machine Learning panel session</b>' %}
        {% include conference_slot_row.html title='Chaired by Tom Cramer, Stanford University' %} 
        <tr>
            <td colspan="2">
                Panel members:
                <ul>
                    <li>Andrew Walsøe, National Library of Norway</li>
                    <li>Sonia Wronkowska, National Library of Poland</li>
                    <li><a href="{{ site.url }}{{ site.baseurl }}/event/2019/goettingen/program/63/">Jens Dobberthin - Museum für Naturkunde Berlin</a></li>
                    <li>Hannah Busch - Huygens ING</li>
               </ul>
           </td>
        </tr>   
        {% include conference_slot_row.html time='12:00pm - 12:30pm' title='Closing Plenary' %}
  </tbody>
</table>
<br/>

Following the event, We have prepared a listing of a few [social activity suggestions][social] for you that you can join after the end of the conference program.

Also check out the [#göttingen-social][slack-channel] on the IIIF Slack for real-time information about where people are what is happening on the social front.


[registration]: https://www.eventbrite.co.uk/e/2019-iiif-annual-conference-tickets-58796011453
[social]: {{ site.url }}{{ site.baseurl }}/event/2019/goettingen/goettingen-social/
[slack-channel]: https://iiif.slack.com/app_redirect?channel=göttingen-social
