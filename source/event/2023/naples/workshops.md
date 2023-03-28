---
title: "2023 IIIF Annual Conference Workshops"
layout: spec
page: overview
banner: true 
breadcrumbs:
  - label: All Events
    link: '{{ site.root_url }}/event/'
  - label: Naples 2023
    link: '{{ site.root_url }}/event/2023/naples/'

sections:    
  - title: Morning
    key: Workshop - Morning
  - title: Afternoon
    key: Workshops -  Afternoon
---

## 2023 IIIF Annual Conference Workshops

The outline schedule of the conference workshops is available below.

### **Register**

* Please register for the conference and for the optional workshops below using Conftool. Payment must be submitted following your registration via Paypal using a credit card number, or via check. You can register [here](https://www.conftool.org/iiif2023/index.php?page=index).


* Registration for the IIIF showcase is free.
* Costs for the conference will be €480 for a general ticket, €230 for a [consortium members]({{ site.root_url | absolute_url }}/community/consortium) ticket.

### **Sponsors**

The IIIF Annual Conference is generously supported by the following Conference Sponsors:

{% include 2023_sponsors.html %} 

## Workshops

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
    {% include conference_table_row.html datafile=site.data.conference_2023 block="Workshop - Morning" %}
    <tr>
        <td>12:00 - 13:30</td>
        <td colspan="3"><b>Lunch break</b></td>
    </tr>    
    {% include conference_table_row.html datafile=site.data.conference_2023 block="Workshops -  Afternoon" %}
</table>


### Locations

{% include 2023_locations.html %} 

### **Questions?**

Reach out to us at staff@iiif.io.

## Abstracts 

<div class="topline_printonly left">
    {% for section in page.sections %}
        <div class='navbar_breadcrumb' style='float:none; width:auto; padding:8px 0 3px 0; border: 0; border-top: 1px solid #666666;'>

            <a id='session-{{ section.key }}' name='session-{{ section.key }}'></a><h3>{{ section.title }}</h3>
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
