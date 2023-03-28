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
---

## 2023 IIIF Annual Conference Workshops

The outline schedule of the conference workshops is available below.

### **Register**

* Please register for the conference and for the optional workshops below using Conftool. Payment must be submitted following your registration via Paypal using a credit card number, or via check. You can register [here](https://www.conftool.org/iiif2023/index.php?page=index).


* Registration for the IIIF showcase is free.
* osts for the conference will be €480 for a general ticket, €230 for a [consortium members]({{ site.root_url | absolute_url }}/community/consortium) ticket.

### **Sponsors**

The IIIF Annual Conference is generously supported by the following Conference Sponsors:

{% include 2023_sponsors.html %} 


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




[showcase]: {{ site.root_url | absolute_url }}/event/2023/naples/showcase
