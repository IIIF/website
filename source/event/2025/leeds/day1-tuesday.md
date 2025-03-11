---
title: "Day 1 - Tuesday, June 3th"
layout: spec
page: overview
banner: true 
hero:
  image: "assets/images/heroes/Parkinson-Building-leeds.png"
breadcrumbs:
  - label: Leeds
    link: '{{ site.root_url }}/event/2025/leeds/'
  - label: Schedule
    link: '{{ site.root_url }}/event/2025/leeds/schedule/'
sections:
  - title: Conference day 1
    key: "1"   
  - title: Conference day 1
    key: "2"   
  - title: Conference day 1
    key: "3"   
  - title: Conference day 1
    key: "4"   
  - title: Conference day 1
    key: "5"   
  - title: Conference day 1
    key: "6"   
---

# Schedule

Conference:
 * [Day 1 - Tuesday, June 3th](#schedule)
   * Conference Reception
 * [Day 2 - Wednesday, June 4th](../day2-wednesday/)
 * [Birds of a feather sessions - Thursday, June 5th](../bof/)

Showcase:
 * Monday, June 2nd
   * Showcase Sessions, 1:00pm - 3:15pm
   * Hands-on with IIIF Workshop, 3:30pm - 5:00pm

The conference will take place in [Cloth Hall Court](https://maps.app.goo.gl/uikw5jUE3fDLTnmWA). 

<table class="api-table">
    <thead>
        <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Speaker(s)</th>
        </tr>
    </thead>
    <tr>
        <td>8:30 - 9:00</td>
        <td colspan="2"><b>Registration</b></td>
    </tr>    
    <tr>
        <td>9:00 - 9:45</td>
        <td>Welcome & Plenary</td>
        <td>Masud Khokar, IIIF Staff, 3D Group</td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2025 block="1"  %}
    <tr>
        <td>10:15 - 10:30</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
    <tr>
        <td>10:30 - 11:00</td>
        <td colspan="2"><b>Break with tea and coffee</b></td>
    </tr>   
    <thead>
        <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Speaker(s)</th>
        </tr>
    </thead> 
    {% include conference_table_row.html datafile=site.data.conference_2025 block="2"  %}
    <tr>
        <td>11:45 - 12:00</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
</table>
<p>To avoid long queues for lunch we are going to split the delegates into two groups which can eat separably.</p>
<table>    
    <thead>
        <tr>
            <th>Time</th>
            <th colspan="2">Track 1</th>
            <th colspan="2">Track 2</th>
        </tr>
        <tr>
            <th>&nbsp;</th>
            <th>Session</th>
            <th>Speaker(s)</th>
            <th>Session</th>
            <th>Speaker(s)</th>
        </tr>
    </thead>
    {% include conference_table_row.html datafile=site.data.conference_2025 block="3"  counterprogram="Lunch A" %}    
    <tr>
        <td>12:30 - 12:45</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
    {% include conference_table_row.html datafile=site.data.conference_2025 block="4"  counterprogram="Lunch B"%}    
    <tr>
        <td>1:30 - 1:45</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
</table>
<table>    
    <thead>
        <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Speaker(s)</th>
        </tr>
    </thead>    
    {% include conference_table_row.html datafile=site.data.conference_2025 block="5" %}
    <tr>
        <td>2:45 - 3:00</td>
        <td>Q & A</td>
        <td></td>
    </tr>
    <tr>
        <td>3:00 - 3:30</td>
        <td colspan="2"><b>Break with tea and coffee</b></td>
    </tr>    
    <thead>
        <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Speaker(s)</th>
        </tr>
    </thead> 
    {% include conference_table_row.html datafile=site.data.conference_2025 block="6" %}
    <tr>
        <td>4:30 - 4:45</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
    <tr>
        <td>4:45 - 5:00</td>
        <td>Wrap-up</td>
        <td>IIIF Consortium Staff</td>
    </tr>  
</table>

# **Sponsors**

The IIIF Annual Conference is generously supported by the following Conference Sponsors:

{% include 2025_sponsors.html %} 

# Abstracts

{% include conference-abstracts.html %}