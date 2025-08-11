---
layout: default
title: Events
permalink: /events/
top_tabs:
  - label: Featured events
    content: "{%- include blocks/event-cards.html items=site.data.events limit=4 -%}"
  - label: Group meetings
    content: "{%- include blocks/event-cards.html limit=4 type='community_call' -%}"
  - label: Call calendar
    content: "{% include misc/community_calendar.html %}"
hero:
  image: "assets/uploads/nypl_5180606.webp"
---
{{ theme.block-center-start }}

{% include blocks/tabs.html  tabs=page.top_tabs %}

{{ theme.block-end }}

{{ theme.block-center-start }}

<h2>All upcoming events</h2>

{%- include blocks/event-cards.html -%}

{{ theme.block-end }}

{{ theme.block-center-start }}

<h2>Past events</h2>

<div class="block columns is-multiline">
  {% assign items = site.data.pastevents | sort: 'start_date' | reverse  %}
  {% for event in items  %}
  <div class="column is-full">
    <div class="event-card card box hover-box columns is-gapless is-mobile">
      <div class="event-info card-content">
        <h3 class="event-title has-text-left">
          {% if event.url %} 
            <a href="{{ event.url | absolute_url }}">{{ event.name }}</a>
          {% else %}  
            {{ event.name }}
          {% endif %}
        </h3>
        <p class="event-details has-text-left sans-serif" style="margin-bottom:0">
          <i class="far fa-calendar-alt"></i>&nbsp;
          <time datetime="{{ event.start_date | date: '%Y-%m-%d' }}">{{ event.start_date | date: "%B %e, %Y" }}</time> - <time datetime="{{ event.end_date | date: '%Y-%m-%d' }}">{{ event.end_date | date: "%B %e, %Y" }}</time>&nbsp;&nbsp;|&nbsp;&nbsp;<i class="fas fa-map-marked-alt"></i>&nbsp;{{ event.location }}
        </p>
        <p class="excerpt has-text-left">
          {{ event.description | strip_html | truncatewords: 40 }}
        </p>
        <p class="has-text-left margin-unset">
            
          {% if event.url %} 
              <b><a class="serif" href="{{ event.url | absolute_url }}">Read more</a></b>
          {% endif %}
        </p>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

{{ theme.block-end }}
