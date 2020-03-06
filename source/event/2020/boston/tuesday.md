---
title: "Tuesday 2nd of June, Harvard"
layout: boston
tags: [event ]
page: tuesday
---

This is the agenda for Tuesday the 2nd of June, the first full day of the conference. To register for the conference please see the [main registration page][registration].

# Location: Adam-von-Trott room, Alte Mensa conference venue
<table class="api-table">
    <thead>
        <tr>
            <th colspan="3">Workshops</th>
        </tr>
        <tr>
            <th rowspan="2">Time</th>
            <th>Location: TBC</th>
            <th>Location: TBC</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>8:30am - 9:00am</td>
            <td colspan="2"><b>Break (Tea/Coffee)</b></td>
        </tr>    
        <tr>
            <td>9:00am - 11:30am</td>
            {% include conference-submission.html paper='8' mode='td-link' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
            {% include conference-submission.html paper='28' mode='td-link' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        </tr>
        <tr>
            <td>11:30am - 1:00pm</td>
            <td colspan="2"><b>Lunch</b> (not provided)</td>
        </tr>    
    </tbody>
    <thead>
        <tr>
            <th colspan="3">Conference</th>
        </tr>
        <tr>
            <th rowspan="1">Time</th>
            <th colspan="1">Title</th>
            <th colspan="1">Authors</th>
        </tr>
    </thead>
    <tbody>
        {% include conference_slot_row.html time='1:00pm - 1:10pm' title='Welcome' authors='' %}
        {% include conference_slot_row.html time='1:10pm - 1:30pm' title='State of the IIIF Universe' authors='Josh Hadro, IIIF Managing Director' %}

        {% include conference_slot_row.html time='1:30pm - 2:30pm' rowspan='6' paper='2' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %} <!-- 9 per slot -->
        {% include conference_slot_row.html paper='67' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='63' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='62' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='57' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='52' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}

        {% include conference_slot_row.html time='2:30pm - 3:00pm' title='<b>Break</b>' %}

        {% include conference_slot_row.html time='3:00pm - 4:40pm' rowspan='10' paper='2' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %} <!-- 9 per slot -->
        {% include conference_slot_row.html paper='67' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='67' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='67' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='67' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='67' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='67' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='67' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='67' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}
        {% include conference_slot_row.html paper='67' data='2020-conference-submissions' submissionlink='/event/2020/boston/program/' %}

        <tr>
            <td>6:00pm - 8:00pm</td>
            <td colspan="2">Join us for an evening reception with food and drinks at the MIT Museum.</td>
        </tr>
    </tbody>
</table>

[registration]: https://www.eventbrite.co.uk/e/2020-iiif-annual-conference-tickets-92771629441
