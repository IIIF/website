---
title: "IIIF Events"
id: events
layout: spec
tags: [events ]
cssversion: 2
---

## IIIF Events

All IIIF events are subject to the [Code of Conduct][conduct].

__Upcoming IIIF Events__

* Spring 2018 IIIF Conference: May 21-25 in [Washington, DC][washington2018], USA

__IIIF Representation at events__

These are events that have a IIIF presence, presentation, workshop or other tie in. It is meant to help attendees coordinate IIIF-related activities at any given event, and also to help recruit IIIF ambassadors to go to promising events and represent the community.

<table id="events" class="api-table"></table>

__Previous IIIF Events__

* Fall 2017 Showcase and Technical Workshop: Nov. 2 in [London][london-va], England
* Fall 2017 IIIF Working Meeting: Oct. 11-13 in [Toronto][toronto], Canada
* Fall 2017 IIIF Showcase: Oct. 10 in [Toronto][toronto-showcase], Canada
* Spring 2017: [The Vatican][vatican]
* Winter 2017: [Edinburgh][edinburgh], Scotland
* Fall 2016: [The Hague][hague], Netherlands
* Spring 2016: [New York City][nyc], USA
* Winter 2015: [Ghent][ghent], Belgium
* Spring 2015: [Washington D.C.][dc], USA
* Fall 2014: [London][london], England
* Winter 2013: Copenhagen, Denmark
* Summer 2013: Paris, France
* Summer 2012: Edinburgh, Scotland
* Spring 2012: The Hague, Netherlands
* Fall 2011: Cambridge, England

<script type="text/javascript">
window.onload = function(){
$.ajax({
      type: 'GET',
      url: 'https://docs.google.com/document/d/e/2PACX-1vTRJwJCj5r_CnJSuOPgS11gDD-L2ar2Wg5_SwyUqItUPer2obrvRgivbZUP5rYXCyOY-sOn52haRaBS/pub',
      dataType: 'html',
      success: function(data) {

        //cross platform xml object creation from w3schools
        try //Internet Explorer
          {
          xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
          xmlDoc.async="false";
          xmlDoc.loadXML(data);
          }
        catch(e)
          {
          try // Firefox, Mozilla, Opera, etc.
            {
            parser=new DOMParser();
            xmlDoc=parser.parseFromString(data,"text/html");
            }
          catch(e)
            {
            alert(e.message);
            return;
            }
          }

        var table = document.getElementById("events");
        var gtable = xmlDoc.getElementsByTagName("table")[0];
        var body = document.createElement('tbody');
        var header = document.createElement('thead');
        headerRow = document.createElement('tr');
        for (var i = gtable.rows[0].cells.length - 1; i >= 0; i--) {
            var th = document.createElement('th');
            th.innerHTML = gtable.rows[0].cells[i].innerHTML;
            if (headerRow.firstChild) {
                headerRow.insertBefore(th, headerRow.firstChild);
            } else {
                headerRow.appendChild(th);
            }    
        }

        header.appendChild(headerRow); // need to convert td's into th

        table.appendChild(header);
        for (var i = gtable.rows.length - 1; i > 0; i--) {
            if (body.firstChild) {
                body.insertBefore(gtable.rows[i], body.firstChild);
            } else {
                body.appendChild(gtable.rows[i])
            }
        }
        table.appendChild(body);
      }
});
}
</script>

[conduct]: {{ site.url }}{{ site.baseurl }}/event/conduct/
[washington2018]: {{ site.url }}{{ site.baseurl }}/event/2018/washington/
[toronto-showcase]: {{ site.url }}{{ site.baseurl }}/event/2017/toronto-showcase
[london-va]: {{ site.url }}{{ site.baseurl }}/event/2017/london/
[toronto]: {{ site.url }}{{ site.baseurl }}/event/2017/toronto/
[edinburgh]: {{ site.url }}{{ site.baseurl }}/event/2017/edinburgh
[vatican]: {{ site.url }}{{ site.baseurl }}/event/2017/vatican
[hague]: {{ site.url }}{{ site.baseurl }}/event/2016/thehague/
[nyc]: {{ site.url }}{{ site.baseurl }}/event/2016/newyork/
[ghent]: {{ site.url }}{{ site.baseurl }}/event/2015/ghent/
[dc]: {{ site.url }}{{ site.baseurl }}/event/2015/washington/
[london]: {{ site.url }}{{ site.baseurl }}/event/2014/london/
