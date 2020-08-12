
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
    gapi.client.init({
        'apiKey': apiKey,
        // Discovery docs docs: https://developers.google.com/api-client-library/javascript/features/discovery
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    }).then(function () {
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

function next_call(group, div_id) {
    var today = new Date();
    var week = new Date();
    week.setDate(today.getDate() + 30);
                    
    var addCalls = function (events) {
        var p = document.getElementById(div_id);
        if (events.result.items) {
            for (var i = 0; i < events.result.items.length; i++) {
                var tEvent = events.result.items[i];
                if (tEvent.summary === group) {
                    var time = moment(tEvent.start.dateTime)
                    p.innerHTML =  "Next call on the " + time.tz(jstz.determine().name()).format('Do [of] MMMM') + " at " + time.format("LT") + " " + moment.tz.zone(moment.tz.guess()).abbr(new Date().getTime());
                    break;
                }
            } 
        }
    }

    loadCalendar(today, week, addCalls);
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


