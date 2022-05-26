---
title: "2022 IIIF Annual Conference Schedule"
layout: spec
page: overview
banner: true 
breadcrumbs:
  - label: All Events
    link: '{{ site.root_url }}/event/'
  - label: Cambridge 2022
    link: '{{ site.root_url }}/event/2022/cambridge/'
---

## 2022 IIIF Annual Conference Schedule

The outline schedules of the [showcase][showcase] and conference are available below, with specific conference presentations and abstracts listed further down. The exact timing of each day’s schedule is still subject to change.

<!-- ### **Register**

* Please register for both the showcase (free and open to all) and conference using Conftool. Payment must be submitted following your registration via Paypal using a credit card number, or via check. You can register [here](https://www.conftool.org/iiif2022/index.php?page=index).


* Registration for the IIIF showcase is free.
* Registration for the conference is $375 for a general ticket, $240 for a [consortium members]({{ site.root_url | absolute_url }}/community/consortium) ticket, and $100 for a student/discount ticket. -->

### **Sponsors**

We are offering sponsorship for the 2022 IIIF conference and the benefits and costs can be seen on the [sponsorship page]({{ site.root_url | absolute_url }}/event/2022/cambridge/sponsorship). If you are interested in becoming a sponsor please contact [admin@iiif.io](mailto:admin@iiif.io).

The IIIF Annual Conference is generously supported by the following Conference Sponsors:

{% include 2022_sponsors.html %}


## June 6 
### IIIF Showcase

The [IIIF showcase][showcase] is free and open to the public. Attend this event to learn more about IIIF, including an overview of what it does, use cases, how you can implement IIIF at your institution, and how you can contribute to the community.

#### Showcase Schedule 

See the [showcase][showcase] page for the detailed schedule of speakers.

* 12pm-1pm: Check-in opens for showcase and conference registrants
* 1pm-5pm: Showcase (including coffee break)
  

#### IIIF Consortium reception

* 6-8pm: Consortium reception (open to all attendees affiliated with a [IIIF Consortium member institution]({{ site.root_url | absolute_url }}/community/consortium/members), to be held in an outdoor, covered location)


## June 7

### Conference day 1

The IIIF conference is open to advanced registrants.

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
        <td colspan="2"><b>Check-in</b></td>
    </tr>    
    {% include conference_table_row.html block=1 %}
    <tr>
        <td>10:30 - 11:00</td>
        <td colspan="2"><b>Break</b></td>
    </tr>    
    {% include conference_table_row.html block=2 %}
    <tr>
        <td>12:00 - 1:30</td>
        <td colspan="2"><b>Lunch</b></td>
    </tr>    
    {% include conference_table_row.html block=3 %}
    <tr>
        <td>3:30 - 4:00</td>
        <td colspan="2"><b>Break</b></td>
    </tr>    
    {% include conference_table_row.html block=4 %}
    <tr>
        <td>6:00 - 8:00</td>
        <td colspan="2"><b>General conference reception, open to all registered participants (to be held outdoors on the Harvard quad, under a tent in case of rain)</b></td>
    </tr>
</table>

## June 8

### Conference day 2

The IIIF conference is open to advanced registrants.

<table class="api-table">
    <thead>
        <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Speaker(s)</th>
        </tr>
    </thead>
    {% include conference_table_row.html block=5 %}
    <tr>
        <td>10:30 - 11:00</td>
        <td colspan="2"><b>Break</b></td>
    </tr>    
    {% include conference_table_row.html block=6 %}
    <tr>
        <td>12:00 - 1:30</td>
        <td colspan="2"><b>Lunch</b></td>
    </tr>    
    {% include conference_table_row.html block=7 %}
    <tr>
        <td>3:30 - 4:00</td>
        <td colspan="2"><b>Tour of the Leventhal Map and Education Center, Boston Public Library (limited to 30 attendees.)</b></td>
    </tr>    
</table>

---

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

## Conference Presentations

<div class="topline_printonly left">
    {% for block in site.data.conference_2022 %}
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
                    <br />
                    <p class="paper_title">{{session.title}}</p>
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
    {% endfor %}        
</div>

[showcase]: {{ site.root_url | absolute_url }}/event/2022/cambridge/showcase
