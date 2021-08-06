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

Please join us for our next workshop to learn IIIF basics!

<div id="upcoming_training"></div>

## About this Event

No prior knowledge of IIIF is required and the core sessions should be easily accessible to those with confidence using the Web. Prior knowledge of HTML and JSON syntax is useful but not required. Tutoring and support opportunities are available via Slack and one-on-one Zoom meetings. By the end of the workshop, participants will have completed a small IIIF project, which they will demo for the group at the final meeting.

**Meeting structure:**

DAY 1: Introduction and course overview

DAY 2: Group check-in meeting

DAY 3: Group check-in meeting

DAY 4: Live presentation

DAY 5: Project demos and closing meeting

Please check the Eventbrite listing for a particular training course for exact times.

Note: Although recordings will be made available, participants should expect to attend the Monday and Friday meetings in real-time, and may schedule additional check-in meetings as needed to discuss ideas or issues they are having with the instructor and other participants. 

**Requirements:**

*   Participants will need to plan for 3-4 additional hours per day to complete assignments outside scheduled meeting times. 
*   Participants will also need a laptop on which they can install software, including Zoom, Slack, and various optional workshop-specific tools.

**Course details:**

This workshop covers:

*   Getting started with the Image API
*   Getting started with the Presentation API
*   Creating IIIF Manifests
*   Annotating IIIF resources
*   Setting up a basic annotation server
*   Introduction to various IIIF tools and techniques for scholarship

After completing this workshop, participants will be able to:

*   Run a local image server
*   Annotate IIIF images
*   Build a IIIF Presentation Manifest using the Bodleian Manifest Editor
*   Relate existing applications of IIIF to local user needs

View the [course syllabus](https://training.iiif.io/iiif-online-workshop/index.html) for more details on what is covered.

### Diversity fellowship seats

The IIIF Consortium is committed to being accessible, inclusive, and reducing barriers for people who want to learn about the Framework. That’s why we make seats available in every workshop at no cost to encourage participation from a more diverse body of community members and institutions. 

If your institution does not have funding for training opportunities and you count yourself among the groups listed below, then these fellowship seats are available to you:

*   People of color, ability/disability, non-binary gender identities, etc.
*   Participants from under-represented countries or geographic regions, such as (but not limited to) the Global South
*   Members of underrepresented and/or marginalized groups that don’t fit into the categories listed above

These tickets are first-come, first-served, and made available by the honor system; we do not require any documentation of any kind to claim these tickets. To claim a fellowship seat, register for the workshop and select the “fellowship ticket” option.

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
