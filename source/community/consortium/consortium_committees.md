---
title: IIIF Consortium Committees
id: consortium
layout: page
breadcrumbs:
 - label: Community
   link: /community/
 - label: Consortium
   link: /community/consortium/
---

## Executive Committee

Steering strategic direction and budget approval, this committee meets twice annually. Initially it was composed of staff from the first eleven founding members of the Consortium, plus two additional elected members. Starting in 2021, institutional seats on this committee are elected annually by the Consortium membership to staggered terms.

Appointments are on an institutional basis, and staff at each organization may select one or more person to represent the institution at Executive Committee meetings. 

The Executive Committee is currently working on developing a [new iterative strategic framework](https://docs.google.com/presentation/d/1JMCLToTlijx3ztiPoKigEdmS2je_fYjU0kj-pxhgaM8/edit#slide=id.g2542c596307_0_77) to help focus the efforts of the Consortium in supporting the broader IIIF community.

Current Executive Committee institutions are:

{% assign items = site.data.exec_terms  %}
{% assign year =  site.time | date: '%Y' | plus: 0 %}
{% for batch in items  %}
  {% assign end_year = batch.start | plus: batch.term %}
  {% if year > batch.start and year <= end_year %}
    {% for member in batch.members %}
- {{ member }} - ({{batch.start}} - {{ end_year }})  
    {% endfor %}
  {% endif %}  
{% endfor %}

Committee Chair: Tom Cramer, Stanford University Libraries  
Vice-chair: Regine Stein, Göttingen State and University Library (SUB Göttingen)  
Treasurer: Neil Fitzgerald, The British Library  

--- 
Terms ending in {{ year }}:
{% for batch in items  %}
  {% assign end_year = batch.start | plus: batch.term %}
  {% if year == end_year %}
    {% for member in batch.members %}
- {{ member }}
    {% endfor %}
  {% endif %}  
{% endfor %}


Table of elections and seats for members of the IIIF Consortium Executive Committee
{% assign start = 2024 %}
{% assign end = items.last.start %}
{% assign years = "Year, 2020, 2021, 2022, 2023" |split: "," %}
{% assign seats = "Total seats, 13, 13, 13, 13" | split: "," %}
{% assign ballots = "Seats up for election, 2, 11, 4, 5" | split: "," %}
{% for year in (start..end) %}
  {% assign years = years | push: year %}
  {% assign seat_count = 0 %}
  {% assign ballot_count = 0 %}
  {% for batch in items  %}
    {% assign end_year = batch.start | plus: batch.term %}
    {% if year == end_year %}
      {% assign ballot_count = ballot_count | plus: batch.members.size %}
    {% endif %}  
    {% if year > batch.start and year <= end_year %}
      {% assign seat_count = seat_count | plus: batch.members.size %}
    {% endif %}  
  {% endfor %}
  {% assign seats = seats | push: seat_count %}
  {% assign ballots = ballots | push: ballot_count %}
{% endfor %}

{% for item in years %}{%if item == years.first %}|{% endif%} <b>{{ item }}</b> | {% endfor %}
{% for item in seats %}{%if item == years.first %}|{% endif%} {{ item }} | {% endfor %}
{% for item in ballots %}{%if item == years.first %}|{% endif%} {{ item }} | {% endfor %}
| Notes: | |11 founding members|| 2 serving 4 year terms| 1 serving 4 year term|  
{: .api-table}

## Operating Committee

This sub-group of the Executive Committee meets monthly and watches that strategic direction set by Exec is being achieved as well as providing ongoing oversight of and mentorship to IIIF Consortium staff.

Current members:

- Tom Cramer, Stanford University Libraries
- Regine Stein, Göttingen State and University Library (SUB Göttingen)
- Neil Fitzgerald, The British Library
- Simeon Warner, Cornell University
- Rashmi Singhal, Harvard University
- David Newbury, J. Paul Getty Trust
