---
title: "2019 IIIF Working meeting - Ann Arbor, Michigan"
layout: ann_arbor
tags: [event ]
page: workingmeeting
---

{: class="alert"}
[Registration open now!][eventbrite]

The 2019 IIIF working meeting is hosted by the [The University of Michigan Library][umich] and [ITHAKA][ithaka] in collaboration with the IIIF Community.

The working group meetings are intended for active IIIF community participants and [working groups][groups]. Space is limited to around 80 people. 

## Schedule

The schedule below will be updated as details of the program are confirmed. 

For the 2019 Working Meeting there will be an emphasis on creating IIIF recipes which are guides on creating IIIF artifacts that fulfill certain use cases. For a list of recipes that are under development please see the [Cookbook github repository][cookbook]. Participants will find these sessions useful to learn what is required to implement version 3.0 of the IIIF specifications. Once completed the recipes will provide a template for others to use to either create their own version 3.0 Manifests or to develop software to consume them.
 
<table class="api-table">
  <thead>
    <tr>
      <th>Date / Time</th>
      <th>Tuesday the 5th of November</th>
      <th>Wednesday the 6th of November</th>
      <th>Thursday the 7th of November</th>
     </tr>
  </thead>
  <tbody>
    <tr>
        <td>8:30am - 9:00am</td>
        <td>Registration</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>9:00am - 10:30am</td>
        <td>IIIF state of affairs and community updates</td>
        <td>Community development</td>
        <td>Roadmapping</td>
    </tr>
    <tr>    
        <td>10:30am - 11:00am</td>
        <td colspan="3" align="center"><b>Break</b> (refreshments provided)</td>
    </tr>
    <tr>
        <td>11:00am - 12:30pm</td>
        <td>Walkthrough on how to create a IIIF recipe</td>
        <td>Panel: 3.0 migration experiences</td>
        <td>Discovery Technical Specification Group meeting</td>
    </tr>
    <tr>
        <td>12:30pm - 2:00pm</td>
        <td colspan="3" align="center"><b>Lunch</b> (Not provided)</td>
    </tr>
    <tr>
        <td>2:00pm - 3:30pm</td>
        <td>Recipe workshops</td>
        <td>Unconference block</td>
        <td>Unconference block</td>
    </tr>
    <tr>    
        <td>3:30pm - 4:00pm</td>
        <td colspan="3" align="center"><b>Break</b> (refreshments provided)</td>
    </tr>
    <tr>
        <td>4:00pm to 5:00pm</td>
        <td>Lightning talks</td>
        <td>Lightning talks / Recipe work</td>
        <td>Wrapup</td>
    </tr>
  </tbody>
</table>

<!-- ## Location

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
-->

[eventbrite]: https://www.eventbrite.co.uk/e/2019-iiif-working-meeting-ann-arbor-tickets-70170260137
[umich]: https://www.lib.umich.edu
[ithaka]: https://www.ithaka.org/
[groups]: {{ site.url }}{{ site.baseurl }}/community/groups/
[cookbook]: https://github.com/IIIF/cookbook-recipes/issues
