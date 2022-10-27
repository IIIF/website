---
title: "2022 Online Meeting, December 6-8, 2022"
layout: event
breadcrumbs:
  - label: All Events
    link: '{{ site.root_url }}/events/'
  - label: 2022 Online Meeting
    link: '{{ site.root_url }}/event/2022/online-meeting/'
hero:
  image: ""
  subtitle: Join us to learn the latest about IIIF and help shape the future of the community.
  button:
    label: "Register"
    link: "https://stanford.zoom.us/meeting/register/tJcvceuuqTItG90yow4P0cusIHCBDp27UYiS"
---

<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.4/jstz.min.js"></script>
<!-- <script src="{{ site.root_url | absolute_url }}/js/vendor/add-to-calendar.min.js"></script> -->
<script src="{{ site.root_url | absolute_url }}/js/vendor/moment-with-locales.min.js"></script>
<script src="{{ site.root_url | absolute_url }}/js/vendor/moment-timezone-with-data.js"></script>

<script>
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
            'timeMin': '2022-12-06T01:00:00-00:00',
            'timeMax': '2022-12-08T23:00:00-00:00',
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
                if (response.result.items[i].summary.indexOf('- IIIF Online Meeting') != -1) {
                    days[day].push(response.result.items[i]);
                }    
            }   
            var dayString = ['Monday, December 05', 'Tuesday, December 06', 'Wednesday, December 07', 'Thursday, December 08', 'Friday, December 09', 'Saturday, December 10'];
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

<script async defer src="https://apis.google.com/js/api.js" onload="this.onload=function(){};loadClient()" ></script>



**The 2022 Online Meeting will take place online December 6-8 and is free to attend.**

The Online Meeting is intended for a wide range of participants and interested parties, including digital image repository managers, content curators, software developers, scholars, and administrators at libraries, museums, cultural heritage institutions, software firms, and other organizations working with digital images and audio/visual materials.

As a counterpart to the IIIF in-person Annual Conference, this event is meant  both to introduce newcomers to IIIF and to provide a forum for discussion and dissemination for those with experience implementing and working with IIIF in a variety of contexts.

This event is guided by the [IIIF Code of Conduct][conduct].


## Logistics
* This event is free and open to all attendees.
* This event will be held using a single Zoom meeting for the sessions.  
* Presentations will be recorded. 
* All sessions will be in English unless otherwise noted.

## Registration
Registration is free! [Sign up once via Zoom](https://stanford.zoom.us/meeting/register/tJcvceuuqTItG90yow4P0cusIHCBDp27UYiS) and you'll have access to the Zoom meeting used for all sessions of the event. 

<div class="columns is-centered">{% include misc/button.html button_label="Register" button_link="https://stanford.zoom.us/meeting/register/tJcvceuuqTItG90yow4P0cusIHCBDp27UYiS" %}</div>

<h2>Schedule</h2>

### Full Event Calendar

The times on this calendar should adjust to your current time zone.
{:.no_toc}

<div id="calendar-container"></div>

<script>
  var timezone = jstz.determine();
  console.log('Name is ' + timezone.name());
  var pref = '<iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=MWhubTVoODZuOTRvcmUwdm5vbzE4OHRlcjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E67C73&amp;mode=WEEK&amp;tab=mc&amp;mode=week&dates=20221206/20221208&amp;title=IIIF%20Online%20Meeting&amp;ctz=';
  var suff = '" style="border:solid 1px #777; width: 100%; height: 600px;"></iframe>';
  //var pref = '<iframe src="https://www.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=somecalendaridentifier%40group.calendar.google.com&amp;color=%23AB8B00&amp;ctz=';
  //var suff = '" style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe>';
  var iframe_html = pref + timezone.name() + suff;
  document.getElementById('calendar-container').innerHTML = iframe_html;
</script>
<br>

<div id="schedule"></div>


Questions? Email us at <events@iiif.io>.

[iiif]: https://iiif.io/
[groups]: {{ site.url }}{{ site.baseurl }}/community/groups/
[consortium]: {{ site.url }}{{ site.baseurl }}/community/consortium/
[home-page]: http://iiif.io/
[iiif-discuss]: https://groups.google.com/forum/#!forum/iiif-discuss
[conduct]: {{ site.url }}{{ site.baseurl }}/event/conduct/
[hashtag]: https://twitter.com/search?q=%23iiif&src=typd
[twitter]: https://twitter.com/iiif_io