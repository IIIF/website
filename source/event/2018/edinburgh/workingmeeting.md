---
title: "2018 IIIF Working meeting - Edinburgh, Scotland, UK"
layout: edinburgh
tags: [event ]
---

{: class="alert"}
[Registration available][working-eventbrite]

The 2018 IIIF working meeting is being hosted by the University of Edinburgh and the National Library of Scotland in collaboration with the IIIF Community.

The International Image Interoperability Framework (IIIF) Working Meeting in Edinburgh is intended for active IIIF community participants, to make progress on advancing specific aspects of IIIF such as specifications, software, and community development (as opposed to the annual IIIF conference, which is more geared toward sharing knowledge).

Attendance is free, but capacity is limited, so registration is required in order to ensure that we do not exceed the capacity of the venue. Please For this event please [register here][working-eventbrite].

## Draft Schedule

<table class="api-table">
  <thead>
    <tr>
      <th>Date / Time</th>
      <th>Tuesday the 4th of December</th>
      <th>Wednesday the 5th of December</th>
      <th>Thursday the 6th of December</th>
     </tr>
  </thead>
  <tbody>
    <tr>
            <td>Morning</td>
            <td>Broad updates on what's happening across IIIF
                <ul>
                    <li>Update from the community</li>
                    <li>Tech update</li>
                    <li>Lightning Talks</li>
                </ul>
            </td>
            <td>Specifications discussions
                    <ul>
                        <li>Specification changes</li>
                        <li>Search, Auth cross compatibility issues</li>
                        <li>Other specification issues</li>
                    </ul>   
                </td>
                <td><b>Roadmap</b>
                    <ul>
                        <li>Input from the community groups</li>
                        <li>New specifications</li>
                    </ul>   
                </td>
    </tr>
    <tr>
            <td>12:00pm to 1:00pm</td>
            <td colspan="3">Lunch - on your own, see <a href="{{ site.url }}{{ site.baseurl }}/event/2018/edinburgh/#locations-in-edinburgh">lunch options</a>.</td>
    </tr>
    <tr>
            <td>Afternoon</td>
            <td>Group discussion on:
                <ul>
                    <li>Discover</li>
                    <li>Migration Strategy</li>
                </ul>
            </td>
            <td>User group discussions
                <ul>
                    <li>Software Developers - TBC</li>
                    <li>A/V - TBC</li>
                </ul>
                Outreach discussion, and 2nd round of lightning talks.     
            </td>
            <td>
                <b>Small group working sessions</b>
                <ul>
                    <li>Cookbooks</li>
                    <li>Manuscripts</li>
                    <li>Mirador 3 - TBC</li>
                </ul>    
            </td>
    </tr>
  </tbody>
</table>

## Location

<div id="map" style="width: 100%; height: 400px; background-color: grey;"></div>
<script>
  function createIcon(url) {
      return new google.maps.MarkerImage(url,
                          new google.maps.Size(21, 34),
                          new google.maps.Point(0,0),
                          new google.maps.Point(10, 34));
  }
  function initMap() {
    var CurrentInfoBox = null;
    var edinburgh= {lat:{{site.data.edinburgh-locations[0].lat}},lng: {{site.data.edinburgh-locations[0].lng}}};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: edinburgh,
      clickableIcons: false,
      gestureHandling: "greedy"
    });
    // Hide box if there is a click in the map
    map.addListener('click', function() {
                            if (CurrentInfoBox != null) {
                                CurrentInfoBox.close();
                            }
                            CurrentInfoBox = null;
                    });
    markers = [];
    var marker = null;

    function wrapEventCallback(callback){
        var args = Array.prototype.slice.call(arguments, 1);
        return function(e){
            callback.apply(this, args)
        }
    }
    infoBoxFunction = function(index, text) {
        if (CurrentInfoBox != null) {
            CurrentInfoBox.close();
        }
        CurrentInfoBox = new google.maps.InfoWindow({ content: text});
        CurrentInfoBox.open(map, markers[index]);
    };
    // different colour pins for conference locations
    var pinImage = createIcon("https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_yellow+.png");
    var pinShadow = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                        new google.maps.Size(40, 37),
                        new google.maps.Point(0, 0),
                        new google.maps.Point(12, 35));
    marker = new google.maps.Marker({
        position: {lat: {{ site.data.edinburgh-locations[0].lat }}, lng: {{ site.data.edinburgh-locations[0].lng}} },
        title: "{{ site.data.edinburgh-locations[0].name }}",
        icon: pinImage,
        map: map
    });
    var content = "<p>"
    {% if i.url != null %}
        content += "<a href='{{site.data.edinburgh-locations[0].url}}'>{{site.data.edinburgh-locations[0].name}}</a>";
    {% else %}
        content += "{{site.data.edinburgh-locations[0].name}}";
    {% endif %}    
    content += "<ul><li><b>Address:</b> {{ site.data.edinburgh-locations[0].address }}</li>";
    {% if site.data.edinburgh-locations[0].tel != null %}
        content += "<li><b>Tel: </b>{{ site.data.edinburgh-locations[0].tel }}</li>";
    {% endif %}    
    content += "</ul></p>"    
    marker.addListener('click',wrapEventCallback(infoBoxFunction, 0, content));
    markers.push(marker)

  }
</script>


<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABBvwq6o-hTwwlEaLLK7SLLPC0emBOSjE&callback=initMap" ></script>


[working-eventbrite]: https://www.eventbrite.com/e/2018-iiif-working-meeting-edinburgh-tickets-50777559046
[lunch]: {{ site.url }}{{ site.baseurl }}/event/2018/edinburgh/#locations-in-edinburgh
