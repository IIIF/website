---
title: "Hotels for the 2020 Annual Conference - Boston, MA, USA"
layout: boston
tags: [event ]
---

Below is a short list of nearby hotels with which we have been able to negotiate special rates and pre-arranged room bookings. In some cases, web-reservations do not reflect the special rates. Please then make your reservation by email/telephone.

## Hotels (red markers on map below)

{% for i in site.data.boston-hotels %}
## [{{ i.name }}]({{ i.url }})
**Note:** {{ i.note }}<br/>
**Dates:** {{ i.dates }}<br/>
**Address:** {{ i.address }}<br/>
**How to get to the conference locations:** {{ i.transportation }}<br/>
<!-- **Tel:** {{ i.tel }} -->

{% endfor %}

## Main conference location

{% for i in site.data.boston-locations %}
{% if i.cat == 1 %}
## [{{ i.name }}]({{ i.url }})
**Note:** {{ i.note }}<br/>
**Dates:** {{ i.dates }}<br/>
**Address:** {{ i.address }}<br/>
{% endif %}
{% endfor %}

## Other conference locations

{% for i in site.data.boston-locations %}
{% if i.cat == 2 %}
## [{{ i.name }}]({{ i.url }})
**Note:** {{ i.note }}<br/>
**Dates:** {{ i.dates }}<br/>
**Address:** {{ i.address }}<br/>
{% endif %}
{% endfor %}

In addition to the options above, there are many rooms available at a variety of price points through sites like Airbnb and others that offer listings for hotels, bed and breakfast inns, and more.

- [Airbnb][airbnb]
    + A variety of options available in Cambridge, MA and Boston, MA, including rooms for rent as well as entire apartments.
-  [Google Hotel search][google-hotels]
    +  Includes a variety of listings for large and small hotels as well as B&Bs, Inns, and more.

We have also contacted nearby schools to see about on-campus housing, and we'll update this page with details as soon as we have any to share.

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
    var boston = {lat: 42.36891589914244, lng: -71.10035582546993 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: boston,
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
{% for i in site.data.boston-hotels %}    
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

{% for i in site.data.boston-locations %}

count = count + 1

{% if i.cat == 1 %}

    var pinColor = "5884FC";
    var pinImage = createIcon(pinColor);
    var pinShadow = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                        new google.maps.Size(40, 37),
                        new google.maps.Point(0, 0),
                        new google.maps.Point(12, 35));

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

    var pinColor = "FFF560";
    var pinImage = createIcon(pinColor);
    var pinShadow = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                        new google.maps.Size(40, 37),
                        new google.maps.Point(0, 0),
                        new google.maps.Point(12, 35));

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


<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABBvwq6o-hTwwlEaLLK7SLLPC0emBOSjE&callback=initMap" ></script>

[airbnb]: https://www.airbnb.com/s/Boston--MA--United-States/homes?refinement_paths%5B%5D=%2Fhomes&current_tab_id=home_tab&selected_tab_id=home_tab&source=mc_search_bar&search_type=filter_change&screen_size=large&hide_dates_and_guests_filters=false&ne_lat=42.37622576787233&ne_lng=-71.04246584782044&sw_lat=42.32097473788351&sw_lng=-71.12623659977356&zoom=14&search_by_map=true&place_id=ChIJGzE9DS1l44kRoOhiASS_fHg&checkin=2020-06-01&checkout=2020-06-05
[google-hotels]: https://www.google.com/maps/search/Hotels/@42.3680755,-71.1063149,13.33z/data=!4m6!2m5!5m3!5m2!1s2020-06-01!2i4!6e3
[airbnb-guide]: https://www.nytimes.com/2018/06/06/technology/personaltech/booking-with-airbnb-heres-your-survival-guide.html
