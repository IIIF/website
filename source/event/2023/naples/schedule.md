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
        <td></td>
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
        <td>TBC - TBC</td>
        <td colspan="3"><b>Lunch</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=3 %}
  <tr>
        <td>TBC - TBC</td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=4 %}
  <tr>
        <td>TBC - TBC</td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=5 %}
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
        <td>TBC - TBC</td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=7 %}
    <tr>
        <td>TBC - TBC</td>
        <td colspan="3"><b>Lunch</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=8 %}
    <tr>
        <td>TBC - TBC</td>
        <td colspan="3"><b>Break with tea and coffee</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block=9 %}
    <tr>
        <td>TBC - TBC</td>
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

<!-- ## Conference Presentations

<div class="topline_printonly left">
    {% for block in site.data.conference_2023 %}
    {% if block[1].id != isNumber %}
        <div class='navbar_breadcrumb' style='float:none; width:auto; padding:8px 0 3px 0; border: 0; border-top: 1px solid #666666;'>
            {% assign blockNo = block[1].id %}

            <a id='session{{ blockNo }}' name='session{{ blockNo }}'></a><h3>Block {{ blockNo }}</h3>
            <h3>{{ block[1].session_time }}</h3>
        </div>

        {% for session in block[1].sessions %}
            <a name='{{session.id}}'></a>
            <div id='{{session.id}}'>
                <a href="#block-{{blockNo}}-{{session.id}}">Back to schedule</a>
                <div class="paper">
                    <span class="paper_time_value">{{session.start}} - {{session.end }}</span>
                    <br/>
                    <p class="paper_title">{{session.title}}</p>
                    <a href="{{ session.youtube }}">Recording on Youtube</a>
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
            </div>
            {% if forloop.last == false %}
                <hr noshade width="100%" class="float_left">
                <br />
            {% endif %}
        {% endfor %}   
       {% endif %}      
    {% endfor %}        
</div>

 -->

[showcase]: {{ site.root_url | absolute_url }}/event/2023/naples/showcase