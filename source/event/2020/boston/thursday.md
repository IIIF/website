---
title: "Thursday 4th of June, Harvard"
layout: boston
tags: [event ]
page: thursday
---

This is the agenda for Thursday the 4th of June, the final day of the conference. To register for the conference please see the [main registration page][registration].

# Location: 
<table class="api-table">
    <thead>
         <tr>
            <th colspan="7">Parallel Sessions</th>
        </tr>
        <tr>
            <th rowspan="2"></th>
            <th colspan="2">Track 1</th>
            <th colspan="2">Track 2</th>
            <th colspan="2">Track 3</th>
        </tr>
        <tr>
            <th colspan="2">Location: </th>
            <th colspan="2">Location: </th>
            <th colspan="2">Location: </th>
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
        {% include conference_slot_row.html rowspan='3' time='9:00am - 10:30am' track1='55,13,14' track2='60,50,6' track3='45,1,51' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %} 
        <tr>
            <td>10:30am - 11:00am</td>
            <td colspan="6"><b>Break (Tea/Coffee)</b></td>
        </tr>    

        {% include conference_slot_row.html rowspan='1' time='11:00am - 12:00pm' track1Single='41' track2Single='36' track3Single='20' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %} 

        <tr>
            <td>12:00pm - 2:00pm</td>
            <td colspan="6"><b>Lunch</b>(not provided)</td>
        </tr>    
    </tbody>
    <tbody>
        <tr>
            <th colspan="7">Conference</th>
        </tr>
        <tr>
            <th>Time</th>
            <th colspan="3">Title</th>
            <th colspan="3">Authors</th>
        </tr>

        {% include conference_slot_row.html time='2:00pm - 2:10pm' title='Welcome' authors='' span='3' %}
        {% include conference_slot_row.html time='2:10pm - 2:50pm' title='Spare time... Discovery?' authors='' span='3' %}
        {% include conference_slot_row.html time='2:50pm - 3:30pm' rowspan='4' paper='25' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' span='3' %} 
        {% include conference_slot_row.html paper='47' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' span='3' %}
        {% include conference_slot_row.html paper='18' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' span='3' %}
        {% include conference_slot_row.html paper='7' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' span='3' %}
        <tr>
            <td>3:30pm - 4:00pm</td>
            <td colspan="6"><b>Break (Tea/Coffee)</b></td>
        </tr>    
        {% include conference_slot_row.html time='4:00pm - 4:40pm' rowspan='4' paper='3' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' span='3' %} 
        {% include conference_slot_row.html paper='4' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' span='3' %}
        {% include conference_slot_row.html paper='23' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' span='3' %}
        {% include conference_slot_row.html paper='54' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' span='3' %}

        {% include conference_slot_row.html time='4:40pm - 5:00pm' title='Thank yous and good byes' authors='' span='3' %}
    </tbody>
</table>

[registration]: https://www.eventbrite.co.uk/e/2020-iiif-annual-conference-tickets-92771629441
