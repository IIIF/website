---
title: "2023 IIIF Annual Conference Schedule"
layout: spec
page: overview
banner: true 
breadcrumbs:
  - label: All Events
    link: '{{ site.root_url }}/event/'
  - label: Naples 2023
    link: '{{ site.root_url }}/event/2023/naples/'
sections:
  - title: Session 1
    key: 1
  - title: Session 2
    key: 2
  - title: Session 3
    key: 3
  - title: Session 4
    key: 4
  - title: Session 5
    key: 5
  - title: Session 6
    key: 6
  - title: Session 7
    key: 7
  - title: Session 8
    key: 8
  - title: Session 9
    key: 9
  - title: Session 10
    key: 10
---

## 2023 IIIF Annual Conference Schedule

The outline schedules of the conference is available below. The exact timing of each day’s schedule is still subject to change.

### **Register**

* Please register for the conference using Conftool. Payment must be submitted following your registration via Paypal using a credit card number, or via check. You can register [here](https://www.conftool.org/iiif2023/index.php?page=index).


* Registration for the IIIF showcase is free.
* osts for the conference will be €480 for a general ticket, €230 for a [consortium members]({{ site.root_url | absolute_url }}/community/consortium) ticket.

### **Sponsors**

The IIIF Annual Conference is generously supported by the following Conference Sponsors:

{% include 2023_sponsors.html %} 

## June 5
### IIIF Showcase

The [IIIF showcase][showcase] is free and open to the public. Attend this event if you are new to IIIF to get an overview of what it does, use cases, how you can implement IIIF at your institution, and how you can contribute to the community.

See the [showcase][showcase] page for the detailed schedule of speakers.

## June 6
### Conference Workshops

See the [workshops page]({{ site.root_url | absolute_url }}/event/2023/naples/workshops) for the schedule of optional pre-conference workshops. To register for a workshop spot (free with conference registration), you can select an option through your [Conftool profile](https://www.conftool.org/iiif2023/index.php?page=index).


## June 7
### Conference 

The conference program on June 7 and 8 will take place at the University of Naples Apple Developer Academy auditorium (see [location](#locations) below for the full address).

<table class="api-table">
    <thead>
        <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Speaker(s)</th>
        </tr>
    </thead>
    <tr>
        <td>8:00 - 9:00</td>
        <td colspan="3"><b>Check-in</b></td>
    </tr>    
    <tr>
        <td>9:15 - 10:15</td>
        <td>Welcome and opening remarks</td>
        <td>Antonella Negri & Tiziana Mancinelli, Ministry of Culture, Institute for the Digitization of Cultural Heritage, and Emiliano Degl’Innocenti, European Research Infrastructures, National Hub</td>
    </tr>    
    <tr>
        <td>10:30 - 11:00</td>
        <td>State of the IIIF Universe</td>
        <td> IIIF Consortium Staff</td>
    </tr>
      <tr>
        <td>11:00 - 11:30</td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>   
    {% include conference_table_row.html datafile=site.data.conference_2023 block=1 %}
    {% include conference_table_row.html datafile=site.data.conference_2023 block=2 %}
    <tr>
        <td>1:00 - 2:30 </td>
        <td colspan="3"><b>Lunch</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=3 %}    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=4 %}
  <tr>
        <td>4:00 - 4:30 </td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=5 %}
    <tr>
        <td>6:00 - 6:15 </td>
        <td colspan="3"><b>Buses arrive for transport to conference reception at Villa Ferretti. Pick-up point:</b> Università degli Studi di Napoli Federico II - <a href="https://goo.gl/maps/ZTRz3thWkwFcuCyU6">Scuola Politecnica e delle Scienze di Base</a></td>
    </tr>
        <tr>
        <td>7:00 - 9:00 </td>
        <td colspan="3"><b>Reception at Villa Ferretti</b></td>
    </tr>  
</table>

## June 8
### Conference 

<table class="api-table">
    <thead>
        <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Speaker(s)</th>
        </tr>
    </thead>
    <tr>
        <td>8:00 - 9:00</td>
        <td colspan="3"><b>Check-in</b></td>
    </tr>  
    {% include conference_table_row.html datafile=site.data.conference_2023 block=6 %}
    <tr>
        <td>10:30 - 11:00 </td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=7 %}
    <tr>
        <td>12:00 - 1:30 </td>
        <td colspan="3"><b>Lunch</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=8 %}  
    {% include conference_table_row.html datafile=site.data.conference_2023 block=9 %}
    <tr>
        <td>3:30 - 4:00 </td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=10 %}
</table>


### Locations

{% include 2023_locations.html %} 

### **Questions?**

Reach out to us at staff@iiif.io.



<style>
  .paper_time_value {font-weight: bold;}
  .paper_abstract {
    /*display: none;*/
    padding: 0 0 0 10%;
  }
  .paper_title {
    font-weight: bold;
    font-size: 1.5rem !important;
   }
</style>

## Abstracts 

<div class="topline_printonly left">
    {% for section in page.sections %}
        <div class='navbar_breadcrumb' style='float:none; width:auto; padding:8px 0 3px 0; border: 0; border-top: 1px solid #666666;'>

            <a id='session-{{ section.key }}' name='session-{{ section.key }}'></a><h4>{{ section.title }}</h4>
            <h4>{{ site.data.conference_2023[section.key].session_time }}</h4>
        </div>

        {% for session in site.data.conference_2023[section.key].sessions %}
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

[showcase]: {{ site.root_url | absolute_url }}/event/2023/naples/showcase
