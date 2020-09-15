
/*
 * start = 20200601
 * end = 20200605
 * config e.g. mode=WEEK&amp;tab=mc&amp;mode=week&dates=20200601/20200605&amp;title=IIIF%20Week
 */
function insertGoogleCalendar(div_id, config) {
    var timezone = jstz.determine();
    var pref = '<iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=MWhubTVoODZuOTRvcmUwdm5vbzE4OHRlcjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E67C73&amp;' + config  + '&amp;ctz=';
    var suff = '" style="border:solid 1px #777; width: 100%; height: 600px;"></iframe>';
    var iframe_html = pref + timezone.name() + suff;
    document.getElementById(div_id).innerHTML = iframe_html;
}

var timezone = jstz.determine();
var apiKey = 'AIzaSyBIB97V49ihYsXedQ0Ziw6s3SzcGf5G8z0';
function initClient() {
    gapi.load('client', onLoadCallback);
}

function text2id(text) {
    return text.trim().toLowerCase().replace(/[:;,()]/g,'').replace(/[ ]/g,'-');
}

function loadCalendar(start, end, onCompletion) {
    console.log("init google client" + new Date());
    gapi.client.init({
        'apiKey': apiKey,
        // Discovery docs docs: https://developers.google.com/api-client-library/javascript/features/discovery
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    }).then(function () {
        console.log("Calling gcal " + new Date());
        // Use Google's "apis-explorer" for research: https://developers.google.com/apis-explorer/#s/calendar/v3/
        // Events: list API docs: https://developers.google.com/calendar/v3/reference/events/list
        return gapi.client.calendar.events.list({
            'calendarId': '1hnm5h86n94ore0vnoo188ter8@group.calendar.google.com',
            'timeMin': moment(start).format(),
            'timeMax': moment(end).format(),
            'showDeleted': false,
            'singleEvents': true,
            'timeZone': timezone.name(), // This doesn't convert the timezone
            'orderBy': 'startTime'
        });
    }).then(function (response) {
        onCompletion(response);
    });
}

function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

function next_call(group, div_id) {
    var addCalls = function (status, events) {
        var p = document.getElementById(div_id);
        eventDetails = getEventDetails(events, group);
                
        if (eventDetails != null && 'next_call' in eventDetails) {        
            var time = moment(eventDetails['next_call'])
            p.innerHTML =  "Next call on the " + time.tz(jstz.determine().name()).format('Do [of] MMMM') + " at " + time.format("LT") + " " + moment.tz.zone(moment.tz.guess()).abbr(new Date().getTime());
        }
    }

    getJSON('https://iiif.io/calendar.json', addCalls);
}

function getEventDetails(events, name) {
    for (var groupName in events.meetings) {
        if (groupName.indexOf(name) != -1 || events.meetings[groupName].name.indexOf(name) != -1) {
            return events.meetings[groupName];
        }
    }
    return null;
}

function getLink(events, name) {
    return getEventDetails(events, name).link;
}

function upcomingCalls(div_id, max) {
    var addCalls = function (status, events) {
        console.log("AddCalls" + new Date());
        var ul = document.getElementById(div_id);
        if (events["week"].length > 0) {
            var tMaxcalls = max;
            if (events["week"].length < tMaxcalls) {
                tMaxcalls = events["week"].length;
            }
            console.log("Reading events" + new Date());
            for (var i = 0; i < tMaxcalls; i++) {
                var tEvent = events["week"][i];
                var li = document.createElement("li");
                li.innerHTML = "<a href='" + getLink(events, tEvent.summary) + "'>" + tEvent.summary + "</a> (" + moment(tEvent.start.dateTime).format('ddd') + " - " + moment(tEvent.start.dateTime).format("LT") + " " + moment.tz.zone(moment.tz.guess()).abbr(new Date().getTime()) + ")";
                ul.appendChild(li);
            } 
            console.log("finished " + new Date());
        }
    }

    getJSON('https://iiif.io/calendar.json', addCalls);
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
            'timeMin': '2020-06-01T10:00:00-00:00',
            'timeMax': '2020-06-07T10:00:00-00:00',
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
                if (response.result.items[i].summary.substring('IIIF Week') != -1) {
                    days[day].push(response.result.items[i]);
                }    
            }   
            var dayString = ['Monday, June 1st', 'Tuesday, June 2nd', 'Wednesday, June 3rd', 'Thursday, June 4th', 'Friday, June 5th', 'Saturday, June 6th'];
            var content = '';
            for (var i = 1; i < (dayString.length + 1); i++) {
                if (days[i].length > 0) {
                    content += '<h2 id="' + text2id(dayString[i - 1].substring(0, dayString[i - 1].indexOf(','))) + '">' + dayString[i - 1] + '</h2>';
                    for (var j = 0; j < days[i].length; j++) {
                        var event = days[i][j];
                        content += '<h3 id="' + text2id(event.summary) + '">' + event.summary + '</h3>';
                        content += '<b>' + moment(event.start.dateTime).format("LT") + ' - ' + moment(event.end.dateTime).format("LT") + ' ' + moment.tz.zone(moment.tz.guess()).abbr(new Date().getTime()) + '</b>';

                        if (event.hasOwnProperty('location') && event.location.length > 0 && event.location.indexOf('register') != -1) {
                            content += '<p class="register"><a href="' + event.location.trim() + '">Register</a></p>'; 
                        }    

                        content += '<p>' + event.description + '</p>';
                    }
                    content += '<br/>';
                    content += '<hr/>';
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


