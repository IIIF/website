---
title: "Online Training Workshops"
id: online_training
layout: page
tags: [training ]
redirect_from:
  - /training+outreach/online_training  
  - /training/online_training
breadcrumbs:
 - label: Get Started
   link: /get-started/
 - label: Training
   link: /get-started/training
---

## Join one of our online workshops to learn IIIF basics

Our monthly five-day workshops meet online for one hour per day, and are held at different times each month to accommodate attendees in different time zones.

As a workshop attendee, you'll learn the basics of implemeting IIIF. No prior knowledge is required and the core sessions should be easily accessible to those with confidence using the Web. Prior knowledge of HTML and JSON syntax is helpful but not required. Tutoring and support opportunities are available via Slack and one-on-one Zoom meetings. By the end of the workshop, participants will have completed a small IIIF project, which they will demonstrate for the group at the final meeting.

View the [course syllabus](https://training.iiif.io/iiif-online-workshop/index.html) for more details.

## Diversity fellowship tickets

We are committed to inclusivity and reducing barriers to learning about the Framework. If you do not have funding to attend a workshop and count yourself among an under-represented gruop (racial, ethnic, national origin, sexual orientation, gender identity, mental or physical disability, or others) you may register for a free fellowship seat.

Diversity fellowship tickets are available via the honor system; we do not require documentation to claim these tickets. To register for a fellowship ticket, select the “fellowship ticket” option on Eventbrite.

## Register for an upcoming workshop

<div id="upcoming_training"></div>














---

*The header image used for this event is a IIIF Image from the Smithsonian American Art Museum titled ["Criccieth, N. Wales"](https://americanart.si.edu/artwork/criccieth-n-wales-3202).*



<script>
    function addEvent(parentDiv, event) {
        let li = document.createElement('li');
        parentDiv.appendChild(li);
        li.style = "display: flex; box-shadow: 0 1px 2px 1px #ddd;padding: 15px; margin: 10px 3px;";

       /* let logo = document.createElement('img');
        logo.src = event.logo.url;
        logo.style = "flex: none";
        logo.alt = 'Event Logo';
        logo.height = 100;
        li.appendChild(logo);*/

        let div = document.createElement('div');
        div.style = "flex: auto; padding-left: 20px;";
        li.appendChild(div);

        let eventName = document.createElement('h3');
        eventName.innerHTML = event.name.text;
        eventName.style = 'margin-top: 10px; margin-bottom: 10px;'
        div.appendChild(eventName);

        let eventSummary = document.createElement('p');
        eventSummary.innerHTML = strip(event.modules[0].data.body.text);
        div.appendChild(eventSummary);

        let button = document.createElement('button')
        button.style = '-webkit-transform: translateZ(0); transform: translateZ(0); position: relative; height: 44px; padding: 0 30px 1px; -webkit-box-sizing: border-box; box-sizing: border-box; text-align: center; text-decoration: none; line-height: 24px; font-weight: 600; letter-spacing: .2px; color: #39364f; color: var(--eds-ui-800,#39364f); fill: #39364f; fill: var(--eds-ui-800,#39364f); background: transparent; background-color: transparent; border: 2px solid #a9a8b3; border: 2px solid var(--eds-ui-500,#a9a8b3); border-radius: 4px; cursor: pointer; -webkit-transition: all .4s cubic-bezier(.4,0,.3,1); transition: all .4s cubic-bezier(.4,0,.3,1); border-color: var(--eds-primary-brand--hover,#f05537);background-color: var(--eds-primary-brand--hover,#f05537);color: var(--eds-inverse-primary-brand,#fff);';
        button.innerHTML = 'Register'
        button.onclick = function () {
            window.open(
              event.url,
              '_blank' // <- This is what makes it open in a new window.
            );}
        div.appendChild(button);
    }

    function strip(html){
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    let div = document.getElementById('upcoming_training');
    let ul = document.createElement('ul');
    ul.style = "padding-left: 0px;"
    div.appendChild(ul);
    fetch('https://iiif.io/eventbrite.json')
      .then(resp => {
         if (resp.ok) {
           return resp.json();
         } else {
           throw new Error(`Got back ${resp.status}`);
         }
      }).then(data => {
        if (data.hasOwnProperty('events')) {
            let p = document.createElement('p');
            p.innerHTML = 'The following training sessions are available:';
            div.insertBefore(p, ul);
            data.events.forEach(event => addEvent(ul, event));
        }
        console.log(data);
      }).catch(err => {
        console.log('Failed due to ' + err);
      });

</script>
