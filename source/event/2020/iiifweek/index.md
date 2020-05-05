---
title: "IIIF Week -- Online Events - June 1-5, 2020"
layout: online_event
tags: [event ]
page: overview
---

<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.4/jstz.min.js"></script>
<!-- <script src="{{ site.url }}{{ site.baseurl }}/js/vendor/add-to-calendar.min.js"></script> -->
<script src="{{ site.url }}{{ site.baseurl }}/js/vendor/moment-with-locales.min.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/vendor/moment-timezone-with-data.js"></script>

IIIF Week Online is a series of **free** online events introducing IIIF’s capabilities and community, sharing demonstrations of IIIF implementations, and discussing the future of IIIF, digital strategy for cultural heritage, and digital research needs. 

While we are saddened by the need to postpone our annual conference, previously scheduled to take place the same week, we recognize this is an opportunity for many to attend who otherwise would not have been able due to budgets, travel restrictions, and other obligations. We look forward to bringing together a wider group of the IIIF community during this virtual event.

IIIF Week sessions are developed for both newcomers and experienced implementers, and include specially scheduled times to allow attendees to form regional community connections in the US, Europe, and Asia. **You may sign up for all events during the week, or just the ones that interest you.**

All event proceedings will be in English unless otherwise indicated, and all sessions will be recorded and made available following the conference.


Interested attendees may also sign up for a workshop on getting started with IIIF the week following the conference. X amount of experience required. Register here: &lt;link>


## Logistics

* Sessions will be held using Zoom and require advanced registration unless otherwise indicated
* Recordings will be sent to registrants following the event, and later posted on the [IIIF YouTube channel](https://www.youtube.com/channel/UClcQIkLdYra7ZnOmMJnC5OA)
* Attendees are expected to adhere to the [IIIF Code of Conduct](https://iiif.io/event/conduct/)
* Hashtags: [#IIIF](https://twitter.com/search?q=%23IIIF&src=typd) and #[IIIFWeek](https://twitter.com/search?q=%23IIIFWeek&src=typd)
* Join the IIIF-Week Slack channel for ongoing questions, comments, and discussion!

---

## Full Event Calendar

## Sessions

The sessions below are listed in chronological order.

---

<div id="schedule"></div>
_______________________________________________________________________

## IIIF Hands on workshop
**June 8th to June 12th**

The week following the online conference there will be a chance to get hands on experience with IIIF and learn the skills to get started. This will be an online course and places will be limited. It will involve daily zoom presentations from tutors, and drop-in help session following the online tutorial. The course will cover:

 * Getting started with the Image API 
 * Creating IIIF Manifests with the Bodleian manifest editor 
 * Annotating IIIF resources and setting up an annotation server
 * Introduction to various IIIF tools for scholarship 

Participants will need a laptop on which they can install software and should be able to commit a few per day for the week long course in order to get the most out of it.  


<script type="text/javascript">
var timezone = jstz.determine();
var apiKey = 'AIzaSyBIB97V49ihYsXedQ0Ziw6s3SzcGf5G8z0';

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
            'timeMin': '2020-06-01T10:00:00-00:00',
            'timeMax': '2020-06-07T10:00:00-00:00',
            'showDeleted': false,
            'singleEvents': true,
            'timeZone': timezone,
            'orderBy': 'startTime'
        });
    }).then(function (response) {
        if (response.result.items) {
            var days = {
                1: [],
                2: [],
                3: [],
                4: [],
                5: []
            };
            for (var i = 0; i < response.result.items.length; i++) {
                var day = moment(response.result.items[i].start.dateTime).day();
                if (response.result.items[i].summary.substring('IIIF Week') != -1) {
                    days[day].push(response.result.items[i]);
                }    
            }   
            var dayString = ['Monday, June 1st', 'Tuesday, June 2nd', 'Wednesday, June 3rd', 'Thursday, June 4th', 'Friday, June 5th'];
            var content = '';
            for (var i = 1; i < 6; i++) {
                content += '<h2>' + dayString[i - 1] + '</h2>';
                for (var j = 0; j < days[i].length; j++) {
                    var event = days[i][j];
                    content += '<h3>' + event.summary + '</h3>';
                    content += '<h4>' + moment(event.start.dateTime).format("hh:mm A") + ' - ' + moment(event.end.dateTime).format("hh:mm A") + '</h4>';

                    content += '<a href="' + event.location + '"><b>Register</b></a>'; 

                    content += '<p><b>Description: </b>' + event.description + '</p>';
                }
                content += '<hr/>';
            }

            var div = document.getElementById('schedule');
            div.innerHTML = content;
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






