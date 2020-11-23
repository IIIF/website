---
title: "IIIF Fall Working Meeting, December 1-4, 2020"
layout: online_event
tags: [event ]
page: overview
---

<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.4/jstz.min.js"></script>
<!-- <script src="{{ site.url }}{{ site.baseurl }}/js/vendor/add-to-calendar.min.js"></script> -->
<script src="{{ site.url }}{{ site.baseurl }}/js/vendor/moment-with-locales.min.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/vendor/moment-timezone-with-data.js"></script>

The IIIF Fall Working Meeting is a series of **free** online events and working sessions held with the goal of collaboratively advancing the IIIF standards and community. We believe everyone has something to contribute and welcome both newcomers and experienced implementers to join--you are also welcome to join just to listen and learn!  

Thanks to the 2020 Fall Working Meeting Program Committee for their help organizing this event:  
Stefano Cossu (Software Architect, J. Paul Getty Trust), Andrija Sagic (Head of Digital Development, Library Milutin Bojic), ​Rachel Senese (Digital Projects Coordinator, Georgia State University Library), and Giada di Trinca (Post-graduate, La Sapienza/University of Rome).

## Logistics
* Sessions will be held using Zoom and require advanced registration via [Eventbrite](https://www.eventbrite.com/e/iiif-fall-working-meeting-tickets-127044945853)
* Sessions lasting more than 1 hour will include breaks
* All events will be in English unless otherwise indicated
* Recordings will be sent to registrants following the event, and later posted on the IIIF YouTube channel
* If you have any questions, please get in touch with us at [events@iiif.io](mailto:events@iiif.io)

Registration will be open until Sunday, November 29 at 10:00pm ET. Registration gives you access to all events during the week. All registrants will receive an email from events@iiif.io on Monday, November 30 with Zoom information for the event.  

Please note that separate registration is required for the Mirador 3 workshop on December 4th (available as an option at the link below).

<p class="register"><a href="https://www.eventbrite.com/e/iiif-2020-fall-working-meeting-tickets-127044945853">Register</a></p>

## Full Event Calendar
The times on this calendar should adjust to your current time zone.
{:.no_toc}

<div id="calendar-container"></div>

<script type="text/javascript">
  var timezone = jstz.determine();
  console.log('Name is ' + timezone.name());
  var pref = '<iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=MWhubTVoODZuOTRvcmUwdm5vbzE4OHRlcjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E67C73&amp;mode=WEEK&amp;tab=mc&amp;mode=week&dates=20201201/20201204&amp;title=Fall%20Working%20&amp;ctz=';
  var suff = '" style="border:solid 1px #777; width: 100%; height: 600px;"></iframe>';
  //var pref = '<iframe src="https://www.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=somecalendaridentifier%40group.calendar.google.com&amp;color=%23AB8B00&amp;ctz=';
  //var suff = '" style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe>';
  var iframe_html = pref + timezone.name() + suff;
  document.getElementById('calendar-container').innerHTML = iframe_html;
</script>
<br>

<div id="schedule"></div>

<p><strong>Mirador 3 workshop (requires separate registration on Eventbrite)</strong><br />
<strong>1:30-4:30pm ET</strong><br />
This working session will give attendees hands-on experience with customizing Mirador 3 and building a plugin. Be sure to come with your ideas for using Mirador 3 and what types of customizations you would like to make.</p>

<p>By the end of the workshop, attendees will have learned:</p>
<ul>
  <li>Getting started with Mirador 3</li>
  <li>Customizing and theming</li>
  <li>Building a plugin</li>
  <li>When and why to use different approaches to customization</li>
</ul>


---

<p>The IIIF community, events, and communications channels are guided by our <a href="https://iiif.io/event/conduct/#iiif-code-of-conduct">Code of Conduct</a>.</p>

---

<!-- Full Event Calendar -->
{:.no_toc}


<div id="calendar-container"></div>

<script type="text/javascript">
var timezone = jstz.determine();
var apiKey = 'AIzaSyBIB97V49ihYsXedQ0Ziw6s3SzcGf5G8z0';

function text2id(text) {
    return text.trim().toLowerCase().replace(/[:;,()]/g,'').replace(/[ ]/g,'-');
}

function loadEvents() {
    // Initializes the client with the API key and the Translate API.
    gapi.client.init({
        'apiKey': apiKey,
        // Discovery docs docs: https://developers.google.com/api-client-library/javascript/features/discovery
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    }).then(function () {
        // Use Google's "apis-explorer" for research: https://developers.google.com/apis-explorer/#s/calendar/v3/
        // Events: list API docs: https://developers.google.com/calendar/v3/reference/events/list
        return gapi.client.calendar.events.list({
            'calendarId': '1hnm5h86n94ore0vnoo188ter8@group.calendar.google.com',
            'timeMin': '2020-11-30T10:00:00-00:00',
            'timeMax': '2020-12-07T10:00:00-00:00',
            'showDeleted': false,
            'singleEvents': true,
            'timeZone': timezone.name(), // This doesn't convert the timezone
            'orderBy': 'startTime'
        });
    }).then(function (response) {
        if (response.result.items) {
            var days = {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: []
            };
            for (var i = 0; i < response.result.items.length; i++) {
                var day = moment(response.result.items[i].start.dateTime).day();
                if (response.result.items[i].summary.indexOf('- Fall Working Meeting') != -1) {
                    days[day].push(response.result.items[i]);
                }    
            }   
            var dayString = ['Monday, November 30', 'Tuesday, December 1st', 'Wednesday, December 2nd', 'Thursday, December 3rd', 'Friday, December 4th', 'Saturday, December 5th'];
            var content = '';
            for (var i = 1; i < (dayString.length + 1); i++) {
                if (days[i].length > 0) {
                    content += '<h2 id="' + text2id(dayString[i - 1].substring(0, dayString[i - 1].indexOf(','))) + '">' + dayString[i - 1] + '</h2><hr />';
                    for (var j = 0; j < days[i].length; j++) {
                        var event = days[i][j];
                        content += '<h3 id="' + text2id(event.summary) + '">' + event.summary + '</h3>';
                        content += '<b>' + moment(event.start.dateTime).format("LT") + ' - ' + moment(event.end.dateTime).format("LT") + ' ' + moment.tz.zone(moment.tz.guess()).abbr(new Date().getTime()) + '</b>';

                        if (event.hasOwnProperty('location') && event.location.length > 0 && event.location.indexOf('register') != -1) {
                            content += '<p class="register"><a href="' + event.location.trim() + '">Register</a></p>';
                        }    

                        if (event.hasOwnProperty('description') && event.description.length > 0) {
                            content += '<p>' + event.description + '</p>';
                        } else {
                            content += '<p>Description to be added...</p>';
                        }
                    }
                    content += '<br />';
                    content += '<br />';
                }
            }

            var div = document.getElementById('schedule');
            div.innerHTML = content;
            anchors.add("#schedule h2, #schedule h3");
        }
    }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
    });
}
function loadClient() {
    gapi.load('client', loadEvents);
}

</script>

<script async defer src="https://apis.google.com/js/api.js" onload="this.onload=function(){};loadClient()" onreadystatechange="if (this.readyState === 'complete') this.onload()"></script>




[iiif]: https://iiif.io/
[groups]: {{ site.url }}{{ site.baseurl }}/community/groups/
[consortium]: {{ site.url }}{{ site.baseurl }}/community/consortium/
[home-page]: http://iiif.io/
[iiif-discuss]: https://groups.google.com/forum/#!forum/iiif-discuss
[conduct]: {{ site.url }}{{ site.baseurl }}/event/conduct/
[hashtag]: https://twitter.com/search?q=%23iiif&src=typd
[twitter]: https://twitter.com/iiif_io
