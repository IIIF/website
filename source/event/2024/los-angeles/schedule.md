---
title: "2024 IIIF Annual Conference Schedule"
layout: spec
page: overview
banner: true 
breadcrumbs:
  - label: All Events
    link: '{{ site.root_url }}/event/'
  - label: Los Angeles
    link: '{{ site.root_url }}/event/2024/los-angeles/'
sections:
  - title: Conference Day 1
    key: "1"
  - title: Conference Day 1
    key: "2"
  - title: Conference Day 1
    key: "3"
  - title: Conference Day 1
    key: "4"
  - title: Conference Day 1
    key: "5"
  - title: Conference Day 2
    key: "6"
  - title: Conference Day 2
    key: "7"
  - title: Conference Day 2
    key: "8"
  - title: Conference Day 2
    key: "9"
  - title: Conference Day 2
    key: "10"
---

## 2024 IIIF Annual Conference Schedule

The outline schedules of the conference is available below. The exact timing of each day’s schedule is still subject to change.

### **Register**

* Please register for the conference using Conftool. Payment must be submitted following your registration via Paypal using a credit card number, or via check. You can register [here](https://www.conftool.org/iiif2024/index.php?page=index).

* Registration for the IIIF showcase is free.
* Costs for the conference will be $495 for a general ticket, $255 for a [consortium members]({{ site.root_url | absolute_url }}/community/consortium) ticket and $125 for students. Registration closes May 14, 2024. 

## Schedule

Conference:
 * [Day 1 - Tuesday, June 4th](#day-1---tuesday-june-4th)
 * [Day 2 - Wednesday, June 5th](#day-2---wednesday-june-5th)
 * Birds of a feather sessions - Thursday, June 6th

Showcase:
 * Getty museum, Friday, June 7th

### **Sponsors**

The IIIF Annual Conference is generously supported by the following Conference Sponsors:

{% include 2024_sponsors.html %} 

## Conference

### Day 1 - Tuesday, June 4th

The conference will take place in x 

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
        <td colspan="3"><b>Check-in</b></td>
    </tr>    
    <tr>
        <td>9:00 - 9:45</td>
        <td>Welcome and State of the IIIF Universe</td>
        <td>IIIF Consortium Staff</td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2024 block="1"  %}
    <tr>
        <td>10:30 - 10:45</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
    <tr>
        <td>10:45 - 11:15</td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>   
    {% include conference_table_row.html datafile=site.data.conference_2024 block="2"  %}
    <tr>
        <td>12:30 - 1:30</td>
        <td colspan="3"><b>Lunch</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2024 block="3"  %}    
    {% include conference_table_row.html datafile=site.data.conference_2024 block="4"  %}    
    <tr>
        <td>3:15 - 3:30</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
    <tr>
        <td>3:30 - 4:00 </td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2024 block="5" %}
    <tr>
        <td>4:45 - 5:00</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
</table>


### Day 2 - Wednesday, June 5th

The conference will take place in x 

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
        <td colspan="3"><b>Registration and arrivals</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2024 block="6"  %}
    <tr>
        <td>10:15 - 10:30</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
    <tr>
        <td>10:30 - 11:00</td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>   
    {% include conference_table_row.html datafile=site.data.conference_2024 block="7"  %}
    <tr>
        <td>12:00 - 12:15</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
    <tr>
        <td>12:15 - 1:15</td>
        <td colspan="3"><b>Lunch</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2024 block="8"  %}    
    {% include conference_table_row.html datafile=site.data.conference_2024 block="9"  %}    
    <tr>
        <td>3:00 - 3:15</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
    <tr>
        <td>3:15 - 3:45 </td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2024 block="10" %}
    <tr>
        <td>4:30 - 4:45</td>
        <td>Q & A</td>
        <td></td>
    </tr> 
    <tr>
        <td>4:45 - 5:00</td>
        <td>Wrap-up and thank yous</td>
        <td>IIIF Consortium Staff</td>
    </tr>  
</table>

<div class="topline_printonly left">
    {% for section in page.sections %}
        <div class='navbar_breadcrumb' style='float:none; width:auto; padding:8px 0 3px 0; border: 0; border-top: 1px solid #666666;'>

            <a id='session-{{ section.key }}' name='session-{{ section.key }}'></a><h4>{{ section.title }}</h4>
            <h4>{{ site.data.conference_2024[section.key].session_time }}</h4>
        </div>

        {% for session in site.data.conference_2024[section.key].sessions %}
            <a name='{{session.id}}'></a>
            <div id='{{session.id}}'>
                <div class="paper">
                    <span class="paper_time_value">{{session.start}} - {{session.end }}</span>
                    <br/>
                    <p class="paper_title">{{session.title}}</p>
                    {% if session.youtube %}
                        <a href="{{ session.youtube }}">Recording on Youtube</a>
                    {% endif %}
                    <p class="paper_author">
                        {% for author in session.authors %}
                            <u>{{author.name}}</u>, <i>{{author.org}}</i>{% if forloop.last == false %};{% endif %}
                        {% endfor %}
                    </p>
                    <p class="paper_organisation">{{sessions.authors }}</p>
                    
                    <div class="paper">
                        <p class="paper_abstract">{{session.abstract }}</p>
                        <p class="paper_abstract"></p>
                    </div>
                </div>
                <a href="#block-{{section.key}}-{{session.id}}">Back to schedule</a>
            </div>
            {% if forloop.last == false %}
                <hr noshade width="100%" class="float_left">
                <br />
            {% endif %}
        {% endfor %}        
    {% endfor %}        
</div>

<!--
### IIIF Showcase

The [IIIF showcase][showcase] is free and open to the public. Attend this event if you are new to IIIF to get an overview of what it does, use cases, how you can implement IIIF at your institution, and how you can contribute to the community.

See the [showcase][showcase] page for the detailed schedule of speakers.
-->
