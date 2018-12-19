---
title: "2018 IIIF Working meeting - Edinburgh, Scotland, UK"
layout: edinburgh
tags: [event ]
---

## IIIF Working Groups Meeting and Showcase - Edinburgh - 3rd - 6th of December 2018

The International Image Interoperability Framework ([IIIF][home-page]) Showcase and working group meeting in Edinburgh is hosted jointly by the [The University of Edinburgh][edinburgh] and the [National Library of Scotland][nls].

### Showcase
The IIIF Edinburgh showcase will be on the 3rd of December and is open to partipants with all levels of IIIF knowledge from complete beginners to people who want to find out about the latest developments. For full details see the [Showcase event page][showcase].

### Working meeting
The working group meetings are intended for active IIIF community participants and [working groups][groups]. This will be limited to around 80 people and will be held from on Tuesday the 4th to Thursday the 6th of December. See the [Working meeting page][workingmeeting] for information on the schedule.

### Logistics

* Registration:
  * [Showcase registration][showcase-eventbrite] -- now closed.
  * [Working meeting registration][working-eventbrite] -- now closed.
* Dates: December 3rd to the 6th
  * 3rd December - [Showcase][showcase]
  * 4th to 6th - [Working meeting][workingmeeting]
* Location: [The University of Edinburgh][edinburgh] and the [National Library of Scotland][nls]
* Cost: All events are free
* Social Media: Tweets about the event should use #iiif and @iiif_io
* Code of Conduct: The IIIF [Code of Conduct][conduct] applies to these events to ensure they are inclusive, welcoming, and safe. The conference Conduct and Safety team can be contacted at [iiif-conduct@googlegroups.com][conduct-list]. Individual members of the Conduct and Safety team can be recognized by their orange badge lanyards and can be contacted individually:

| Name | Mobile number | E-mail address | IIIF Slack | Twitter |
| ---- | ------------- | -------------- | ---------- | ------- |
| Mark Matienzo (Conduct and Safety Team Coordinator)   | +1 650 683 5769  | [matienzo@stanford.edu][matienzo] | anarchivist | anarchivist |
| Josh Hadro (IIIF Consortium Staff) | +44 (0) 776 065 8344 |  [josh.hadro@iiif.io][hadro] | josh.hadro | Hadro |
| Claire Knowles   |   | [C.knowles1@leeds.ac.uk][knowles]  | cgknowles | cgknowles  |
| Stuart Lewis (Local Arrangements Committee) | +44 (0) 753 175 7575  | [stuart.lewis@nls.uk][lewis]  | stuartlewis  | stuartlewis  |
| Jack Reed |   | [pjreed@stanford.edu][reed] | mejackreed  | mejackreed  |
| Julien Raemy  |   |  [julien.raemy@hesge.ch][raemy] | julsraemy  | julsraemy  |
| Glen Robson (IIIF Consortium Staff) |   | [glen.robson@iiif.io][glen]  | glen.robson | glenrobson |
| Emma Stanford  |   | [emmastanfordx@gmail.com][estanford]  |  emmastanford |  e_stanf |

If you have any questions about the event please contact Glen Robson (glen.robson \[at\] iiif.io).

## Accommodation in Edinburgh
There are many places to stay in Edinburgh – we recommend using the search engines below for the best rates. We will be located to the south of the city centre, the location will often be described as ‘Old Town’ (the postcode for Tuesday-Thursday is EH1 1LZ). Princes Street is the main shopping street – it has a number of hotels but is likely to be quite noisy. Cowgate is also a noisy location near a number of bars.

General booking sites:
 * [https://www.booking.com](https://www.booking.com)
 * [https://www.trivago.co.uk](https://www.trivago.co.uk)
 * Hotel review site: [https://www.tripadvisor.co.uk/](https://www.tripadvisor.co.uk/)
 * University Accommodation: [https://www.edinburghfirst.co.uk/accommodation/](https://www.edinburghfirst.co.uk/accommodation/)

## Weather in Edinburgh in December
December in Edinburgh means long nights as it will be getting dark early, about 4:00pm, the average maximum and minimum temperatures in December are 7C and 1C, there is a possibility of rain. https://www.holiday-weather.com/edinburgh/averages/ . Pack layers and a raincoat, umbrellas are recommended although Edinburgh is a windy city, it is likely to be frosty in the mornings, but snow in December is rare. Hats, scarves and gloves can easily be purchased in Edinburgh if needed.

## Travel to Edinburgh

 * **Edinburgh Airport**. Flights to Edinburgh arrive into [Edinburgh Airport][ed-airport] (EDI). More information is available on [flights to Edinburgh][eds-flights]. To get from the airport to the city centre it is possible to take either a bus or a tram.
   * **Airport Bus**. The [Airlink 100][airlink] bus service runs between the airport and the city centre and takes approximately 30 minutes. Tickets cost £4.50 for an adult single, or £7.50 for an airport return, and can be bought at the airport information desk, at the bus stop, from the driver or online. [Airport Buses – Lothian Buses][lothian-airport] also offer connections to and from the airport on bus lines N22, 200, 300. For information on bus services in and around Edinburgh, please visit [Lothian Buses][lothian-bus].
   * **Airport Tram**. Trams run frequently from Edinburgh Airport to York place, running through the city centre en-route. For more information please [click here][tram].  
 * **Travel by Train**. If travelling from within the UK, Edinburgh is easily accessed by the [national rail service][nrs] arriving into either Haymarket Station or [Edinburgh Waverley Station][waverley], which is the closest to the University.
 * **Travel by Car**. Travel times by road are less than you might think. From the south: Birmingham is about 5 hours away; Manchester and York, 3 hours; Newcastle, 2 hours. From the north: Inverness is about 3 hours away; Aberdeen, 2 hours.

## Travel in Edinburgh
All venues are in walking distance of one another and time will be allowed for travel between locations. Black taxis can be hailed on the road, mini-cabs and Ubers need to be booked. If exploring Edinburgh, or staying further out of town, the bus network is excellent. Lothian Buses are operated by the Council and you can use the app to buy tickets. If you buy tickets on the bus you need the correct change.

The tram network does not go close to the conference venues but can be used to travel into town from the Airport [https://www.lothianbuses.com][lothian-bus].

## Locations in Edinburgh

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
    var edinburgh= {lat:55.9458036,lng:-3.1873687};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
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
    var count = 0;
{% for i in site.data.edinburgh-food %}    
    count = {{ forloop.index0 }}
    {% if i.type == 'food' %}
        var mapIcon = createIcon('https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_redF.png');
    {% elsif i.type == 'coffee' %}    
        var mapIcon = createIcon('https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blackC.png');
    {% elsif i.type == 'bar' %}    
        var mapIcon = createIcon('https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_greenB.png');
    {% endif %}    
    marker = new google.maps.Marker({
        position: {lat: {{ i.lat }}, lng: {{ i.lng}} },
        title: "{{ i.name }}",
        icon: mapIcon,
        map: map
    });
    var content = "<p>"
    {% if i.url != null %}
        content += "<a href='{{i.url}}'>{{i.name}}</a>";
    {% else %}
        content += "{{i.name}}";
    {% endif %}    
    content += "<ul><li><b>Address:</b> {{ i.address }}</li>";
    {% if i.tel != null %}
        content += "<li><b>Tel: </b>{{ i.tel }}</li>";
    {% endif %}    
    content += "</ul></p>"    
    marker.addListener('click',wrapEventCallback(infoBoxFunction, count, content));
    markers.push(marker)
{% endfor %}
   hotels = count + 1;
{% for i in site.data.edinburgh-locations%}    
    count = hotels + {{ forloop.index0 }}
    marker = new google.maps.Marker({
        position: {lat: {{ i.lat }}, lng: {{ i.lng}} },
        title: "{{ i.name }}",
        map: map,
        icon: pinImage
    //    shadow: pinShadow
    });
    var content = "<p><a href='{{i.url}}'>{{i.name}}</a><ul><li>{{ i.note}}</li><li><b>Address:</b> {{ i.address }}</li><li><b>Date: </b>{{i.dates}}</li></ul></p>";
    marker.addListener('click',wrapEventCallback(infoBoxFunction, count, content));
    markers.push(marker)
{% endfor %}

  }
</script>

## Places to eat in Edinburgh
There are lots of places to eat and local reviews can be found on the List https://food.list.co.uk

{% for i in site.data.edinburgh-food %}
    {% if i.type == 'food' %}
 * [{{i.name}}]({{i.url}})
    {% endif %}    
{% endfor %}

Ask the conference hosts for other suggestions, if you have something particular in mind!

### Independent Coffee Locations
{% for i in site.data.edinburgh-food %}
    {% if i.type == 'coffee' %}
 * [{{i.name}}]({{i.url}})
    {% endif %}    
{% endfor %}
 * Lots more...

### Bars
{% for i in site.data.edinburgh-food %}
    {% if i.type == 'bar' %}
 * [{{i.name}}]({{i.url}})
    {% endif %}    
{% endfor %}

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABBvwq6o-hTwwlEaLLK7SLLPC0emBOSjE&callback=initMap" ></script>

## Childcare
For details of childcare in the conference vicinity please see www.childcare.co.uk

{% include edinburgh-images.html %}

[home-page]: {{ site.url }}{{ site.baseurl }}/
[groups]: {{ site.url }}{{ site.baseurl }}/community/groups/
[conduct]: {{ site.url }}{{ site.baseurl }}/event/conduct/
[edinburgh]: https://www.ed.ac.uk/
[nls]: https://www.nls.uk/
[IIIF-Discuss]: https://groups.google.com/forum/#!forum/iiif-discuss
[showcase]: {{ site.url }}{{ site.baseurl }}/event/2018/edinburgh/showcase/
[workingmeeting]: {{ site.url }}{{ site.baseurl }}/event/2018/edinburgh/workingmeeting/
[showcase-eventbrite]: https://www.eventbrite.com/e/iiif-edinburgh-showcase-tickets-51020491664
[working-eventbrite]: https://www.eventbrite.com/e/2018-iiif-working-meeting-edinburgh-tickets-50777559046
[ed-airport]: http://www.edinburghairport.com/
[eds-flights]: http://edinburgh.org/travel/flights-to-edinburgh/
[airlink]: https://lothianbuses.co.uk/timetables-and-maps/timetables/100
[lothian-airport]: https://www.lothianbuses.com/our-services/airport-buses/
[lothian-bus]: https://lothianbuses.co.uk/
[tram]:https://edinburghtrams.com/
[nrs]: http://www.nationalrail.co.uk/stations/EDB/details.aspx
[waverley]: http://www.nationalrail.co.uk/stations/EDB/details.aspx
[talk]: https://goo.gl/forms/R7RzG54WFRZxRdtk1

[conduct-list]: mailto:iiif-conduct@googlegroups.com
[matienzo]: mailto:matienzo@stanford.edu
[glen]: mailto:glen.robson@iiif.io
[raemy]: mailto:julien.raemy@hesge.ch
[reed]: mailto:pjreed@stanford.edu
[estanford]: mailto:emmastanfordx@gmail.com
[hadro]: mailto:josh.hadro@iiif.io
[knowles]: mailto:C.knowles1@leeds.ac.uk
[lewis]: mailto:stuart.lewis@nls.uk
