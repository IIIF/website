---
title: "Social Locations for the 2019 IIIF Conference - Göttingen, Germany"
layout: gottingen
tags: [event ]
---

We have prepared a few social activities for you that you can join after the end of the conference program.

Also check out the [#göttingen-social channel](https://iiif.slack.com/messages/CJDMEB03X) on the IIIF Slack for real-time information about where people are what is happening on the social front.


Furthermore you can take part in our guided city and library tours. With the links below you can register for these events. 

## Guided city tours
Among other things you will visit the university’s old Assembly Hall and explore the historic city center around the market place with the Gänseliesel (goose girl) fountain. The tours start after the end of the IIIF conference program. The meeting point is at the Wilhelmsplatz, directly in front of the conference venue. Each tour takes approximately 1.5h.

* City tours: [Register here, first-come, first-served](https://forms.gle/4t82DtYDaFdzF4Hr7)
   * Monday at 5:00pm
   * Tuesday at 5:30pm
   * Thursday at 5:30pm

## Guided library tours
The meeting point is at the Wilhelmsplatz, directly in front of the conference venue. Each tour takes approximately 1h.

* Library tour: [Register here, first-come, first-served](https://forms.gle/Ue9vgBYKZYD8qcrx7)
   * Monday at 5:00pm - Historical Building and Pauliner Church (Papendiek 14)
   * Tuesday at 5:30pm - Central Library (Platz der Göttinger Sieben 1)

## Wednesday Run/Walk 

On Wednesday, June 26, at 7:00am, we invite all participants to join us for an intermediate run / walk on Göttingen`s most famous jogging course „Wall“ (German for “rampart”). The mostly flat course around the city center has sections with stairs and during our side trip to the „Schillerwiesen“ we will have around 50m altitute difference to run. To complete the 6.5k (4 mi)  runners will take 35 to 45 minutes. It is possible to omit the side trip and so reducing the distance to approx. 4.5k (2.8 mi). All running and walking paces are welcome.

Meeting point is 7:00am at the monument representing Wilhelm IV next to the conference venue at the Wilhelmsplatz.

Preview the course at [https://www.komoot.de/tour/70704222](https://www.komoot.de/tour/70704222) (where the GPS data is available as well).



## Bars and Restaurants 

Below we listed some bars and restaurants that are recommended by the local Göttingen staff.

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
    var goettingen = {lat: 51.5337306, lng: 9.9337075 };
    var zoomlevel = 16.44;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoomlevel,
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
{% for i in site.data.goettingen-social %} 

count = {{ forloop.index0 }}


{% if i.cat == 0 %}  
    
    //var count = 0;
    locations = count + 1;
    
    
    marker = new google.maps.Marker({
        position: {lat: {{ i.lat }}, lng: {{ i.lng}} },
        title: "{{ i.name }}",
        map: map,
        icon: pinImage,
        shadow: pinShadow
    });
    var content = "<p>{{i.name}}</p><p>Address: {{ i.address }}</p>";
    marker.addListener('click',wrapEventCallback(infoBoxFunction, count, content));
    markers.push(marker)
    
    count = count +1
    
{% endif %}
{% if i.cat == 1 %}
    locations = count + 1;
    
    //count = locations + {{ forloop.index0 }} 
    var pinColor = "5884FC";
    var pinImage = createIcon(pinColor);
    var pinShadow = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                        new google.maps.Size(40, 37),
                        new google.maps.Point(0, 0),
                        new google.maps.Point(12, 35));
    // var count = 0;
   
    marker = new google.maps.Marker({
        position: {lat: {{ i.lat }}, lng: {{ i.lng}} },
        title: "{{ i.name }}",
        map: map,
        icon: pinImage,
        shadow: pinShadow
    });
    var content = "<p>{{i.name}}</p><p>Address: {{ i.address }}</p>";
    marker.addListener('click',wrapEventCallback(infoBoxFunction, count, content));
    markers.push(marker)

    //count = count + 1;
{% endif %}

{% if i.cat == 2 %}
    locations = count + 1;
    
    //count = locations + {{ forloop.index0 }} 
    var pinColor = "FFF560";
    var pinImage = createIcon(pinColor);
    var pinShadow = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                        new google.maps.Size(40, 37),
                        new google.maps.Point(0, 0),
                        new google.maps.Point(12, 35));
    //var count = 0;

    marker = new google.maps.Marker({
        position: {lat: {{ i.lat }}, lng: {{ i.lng}} },
        title: "{{ i.name }}",
        map: map,
        icon: pinImage,
        shadow: pinShadow
    });
    var content = "<p>{{i.name}}</p><p>Address: {{ i.address }}</p>";
    marker.addListener('click',wrapEventCallback(infoBoxFunction, count, content));
    markers.push(marker)
    
     //count = count + 1;
{% endif %}
{% endfor %}}



</script>
<!-- <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1E41BkdgtTTLMvvApZAVITXWj-2fE7oTk" width="640" height="480"></iframe>-->


## Bars

{% for i in site.data.goettingen-social %}
{% if i.cat == 1 %}
## {{ i.name }}
**Note:** {{ i.note }}<br/>
**Address:** {{ i.address }}<br/>
{% endif %}
{% endfor %}

## Restaurants

{% for i in site.data.goettingen-social %}
{% if i.cat == 2 %}
## {{ i.name }}
**Note:** {{ i.note }}<br/>
**Address:** {{ i.address }}<br/>
{% endif %}
{% endfor %}


<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABBvwq6o-hTwwlEaLLK7SLLPC0emBOSjE&callback=initMap" ></script>
