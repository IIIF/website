---
title: "2018 Hotels for the IIIF Conference - Washington, DC"
layout: event
tags: [event ]
---
This is a short list of nearby hotels. There are no special rates and no room bookings have been held.

<div id="map" style="width: 100%; height: 400px; background-color: grey;"></div>
<script>
  function initMap() {
    var CurrentInfoBox = null;
    var washington = {lat: 38.889964,lng:-77.009096};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: washington,
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
    var pinColor = "cccc00";
    var pinImage = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                        new google.maps.Size(21, 34),
                        new google.maps.Point(0,0),
                        new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                        new google.maps.Size(40, 37),
                        new google.maps.Point(0, 0),
                        new google.maps.Point(12, 35));
    var count = 0;
{% for i in site.data.washington-hotels %}    
    count = {{ forloop.index0 }}
    marker = new google.maps.Marker({
        position: {lat: {{ i.lat }}, lng: {{ i.lng}} },
        title: "{{ i.name }}",
        map: map
    });
    var content = "<p><a href='{{i.url}}'>{{i.name}}</a><ul><li><b>Address:</b> {{ i.address }}</li><li><b>Tel: </b>{{ i.tel }}</li></ul></p>";
    marker.addListener('click',wrapEventCallback(infoBoxFunction, count, content));
    markers.push(marker)
{% endfor %}
   hotels = count + 1;
{% for i in site.data.washington-locations%}    
    count = hotels + {{ forloop.index0 }}
    marker = new google.maps.Marker({
        position: {lat: {{ i.lat }}, lng: {{ i.lng}} },
        title: "{{ i.name }}",
        map: map,
        icon: pinImage,
        shadow: pinShadow
    });
    var content = "<p><a href='{{i.url}}'>{{i.name}}</a><ul><li><b>Address:</b> {{ i.address }}</li><li>{{ i.note}}</li></ul></p>";
    marker.addListener('click',wrapEventCallback(infoBoxFunction, count, content));
    markers.push(marker)
{% endfor %}

  }
</script>
<!-- <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1E41BkdgtTTLMvvApZAVITXWj-2fE7oTk" width="640" height="480"></iframe>-->

{% for i in site.data.washington-hotels %}
## [{{ i.name }}]({{ i.url }})
**Address:** {{ i.address }}<br/>
**Tel:** {{ i.tel }}

{% endfor %}

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABBvwq6o-hTwwlEaLLK7SLLPC0emBOSjE&callback=initMap" ></script>
