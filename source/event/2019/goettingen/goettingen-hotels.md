---
title: "2019 Hotels for the 2019 IIIF Conference - Göttingen, Germany"
layout: spec
tags: [event ]
---

This is a short list of nearby hotels with which we have been able to negotiate special rates and pre-arranged room bookings under the keyword "IIIF2019". In some cases, web-reservations do not reflect the special rates. Please then make your reservation by email/telephone.

<div id="map" style="width: 100%; height: 400px; background-color: grey;"></div>
<script>
  function createIcon(pinColor) {
      return {
        url: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        size: new google.maps.Size(54, 68),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(10, 34)
        };
        // 
  }
  function initMap() {
    var CurrentInfoBox = null;
    var goettingen = {lat: 51.540448, lng: 9.930207 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13.2,
      center: goettingen,
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
    var pinColor = "FF6A62";
    var pinImage = createIcon(pinColor);
    var pinShadow = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                        new google.maps.Size(40, 37),
                        new google.maps.Point(0, 0),
                        new google.maps.Point(12, 35));
    var count = 0;
{% for i in site.data.goettingen-hotels %}    
    count = {{ forloop.index0 }}
    marker = new google.maps.Marker({
        position: {lat: {{ i.lat }}, lng: {{ i.lng}} },
        title: "{{ i.name }}",
        map: map,
        icon: pinImage,
        shadow: pinShadow
    });
    var content = "<p><a href='{{i.url}}'>{{i.name}}</a><ul><li><b>Address:</b> {{ i.address }}</li><li><b>URL: </b>{{ i.url }}</li></ul></p>";
    marker.addListener('click',wrapEventCallback(infoBoxFunction, count, content));
    markers.push(marker)
{% endfor %}
{% for i in site.data.goettingen-locations %}
{% if i.cat == 1 %} 
    locations = count + 1;

    var pinColor = "5884FC";
    var pinImage = createIcon(pinColor);
    var pinShadow = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                        new google.maps.Size(40, 37),
                        new google.maps.Point(0, 0),
                        new google.maps.Point(12, 35));
    var count = 0;
   
    count = locations + {{ forloop.index0 }}
    marker = new google.maps.Marker({
        position: {lat: {{ i.lat }}, lng: {{ i.lng}} },
        title: "{{ i.name }}",
        map: map,
        icon: pinImage,
        shadow: pinShadow
    });
    var content = "<p><a href='{{i.url}}'>{{i.name}}</a><ul><li><b>Address:</b> {{ i.address }}</li><li><b>URL: </b>{{ i.url }}</li></ul></p><p>{{ i.note }}</p><p>{{i.dates}}</p>";
    marker.addListener('click',wrapEventCallback(infoBoxFunction, count, content));
    markers.push(marker)
{% endif %}

{% if i.cat == 2 %}
    // locations = count + 1;

    var pinColor = "FFF560";
    var pinImage = createIcon(pinColor);
    var pinShadow = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                        new google.maps.Size(40, 37),
                        new google.maps.Point(0, 0),
                        new google.maps.Point(12, 35));
    var count = 0;

    count = locations + {{ forloop.index0 }}
    marker = new google.maps.Marker({
        position: {lat: {{ i.lat }}, lng: {{ i.lng}} },
        title: "{{ i.name }}",
        map: map,
        icon: pinImage,
        shadow: pinShadow
    });
    var content = "<p><a href='{{i.url}}'>{{i.name}}</a><ul><li><b>Address:</b> {{ i.address }}</li><li><b>URL: </b>{{ i.url }}</li></ul></p><p>{{ i.note }}</p><p>{{i.dates}}</p>";
    marker.addListener('click',wrapEventCallback(infoBoxFunction, count, content));
    markers.push(marker)
{% endif %}
{% endfor %}}



</script>
<!-- <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1E41BkdgtTTLMvvApZAVITXWj-2fE7oTk" width="640" height="480"></iframe>-->

## Main conference location

{% for i in site.data.goettingen-locations %}
{% if i.cat == 1 %}
## [{{ i.name }}]({{ i.url }})
**Note:** {{ i.note }}<br/>
**Dates:** {{ i.dates }}<br/>
**Address:** {{ i.address }}<br/>
{% endif %}
{% endfor %}

## Other conference locations

{% for i in site.data.goettingen-locations %}
{% if i.cat == 2 %}
## [{{ i.name }}]({{ i.url }})
**Note:** {{ i.note }}<br/>
**Dates:** {{ i.dates }}<br/>
**Address:** {{ i.address }}<br/>
{% endif %}
{% endfor %}


## Hotels

{% for i in site.data.goettingen-hotels %}
## [{{ i.name }}]({{ i.url }})
**Note:** {{ i.note }}<br/>
**Dates:** {{ i.dates }}<br/>
**Address:** {{ i.address }}<br/>
<!-- **Tel:** {{ i.tel }} -->

{% endfor %}

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABBvwq6o-hTwwlEaLLK7SLLPC0emBOSjE&callback=initMap" ></script>
