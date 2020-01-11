---
title: "IIIF Events"
id: events
layout: spec
tags: [events ]
cssversion: 2
---

All IIIF events are subject to the [Code of Conduct][conduct].

__Upcoming main IIIF Events__

* Spring 2020 IIIF Conference: [June 1-4 in Boston, MA][boston20]

__Other IIIF Events__

These are events that have a IIIF presence, presentation, workshop or other tie in. Please contact the [IIIF Outreach group][outreach] if you know of other meetings or conferences not listed below.

<table id="events-2019" class="api-table"></table>

__IIIF Event Guidance__

Information on hosting a IIIF Event.

 * [Hosting a IIIF Conference][conference]

__Previous IIIF Events__

* Fall 2019 IIIF Working Meeting: [November 4-7 in Ann Arbor, Michigan][ann_arbor19]
* Spring 2019 IIIF Conference: [June 24-28 in Göttingen, Germany][goettingen19]
* Fall 2018 IIIF Working Meeting: Dec. 3-6 in [Edinburgh][edinburgh18], Scotland, UK
* Spring 2018 IIIF Conference: May 21-25 in [Washington, DC][washington2018], USA
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

<script>
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
          addTable(document.getElementById("events-2019"), xmlDoc.getElementsByTagName("table")[0]);
          //addTable(document.getElementById("events-2019"), xmlDoc.getElementsByTagName("table")[1]);
      }
});
}
function addTable(destination, gtable) {
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

    destination.appendChild(header);
    for (var i = gtable.rows.length - 1; i > 0; i--) {
        var row = document.createElement('tr');
        for (var j = 0; j < gtable.rows[i].cells.length; j++) {
            var cell = document.createElement('td');
            cell.innerHTML = gtable.rows[i].cells[j].innerHTML.replace('href="https://www.google.com/url?q=','href="').replace(/\&amp;sa=.*ust=[0-9]*/g,'');
            row.appendChild(cell);
        }
        if (body.firstChild) {
            body.insertBefore(row, body.firstChild);
        } else {
            body.appendChild(row)
        }
    }
    destination.appendChild(body);
}
</script>

[conduct]: {{ site.url }}{{ site.baseurl }}/event/conduct/
[boston20]: {{ site.url }}{{ site.baseurl }}/event/2020/boston/
[ann_arbor19]: {{ site.url }}{{ site.baseurl }}/event/2019/ann_arbor/
[goettingen19]: {{ site.url }}{{ site.baseurl }}/event/2019/goettingen/
[edinburgh18]: {{ site.url }}{{ site.baseurl }}/event/2018/edinburgh/
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
[outreach]: {{ site.url }}{{ site.baseurl }}/community/groups/outreach/
[conference]: {{ site.url }}{{ site.baseurl }}/event/conference_guidelines/
