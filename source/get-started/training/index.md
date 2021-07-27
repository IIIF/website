---
title: "Training"
layout: page
redirect_from:
  - /training+outreach/
hero:
  image: ""
---

## Online workshops
We regularly offer [online workshops]({{ site.root_url | absolute_url }}/get-started/training/online-training) led by expert instructors. These are one week long and cover working with the Image and Presentation APIs, and annotating images, through asynchronous learning, Zoom meetings, and a dedicated Slack channel.

<div id="upcoming_training"></div>


## Self-directed learning
You can use our [workshop training site](https://training.iiif.io/iiif-online-workshop/) to learn about IIIF on your own.

To learn how to use existing IIIF materials for research or teaching, visit our [explainer]({{ site.guides_url | absolute_url }}//using_iiif_resources/) on using IIIF resources and viewers.

## Teach others about IIIF
If you are already familiar with IIIF and want to help others learn, you can use our [outreach materials]({{ site.root_url | absolute_url }}/get-started/training/outreach-materials) to get started on presentations and information sharing. (If you find yourself doing this often, consider joining our [IIIF Ambassador Program]({{ site.root_url | absolute_url }}/community/ambassadors)!)

## LYRASIS partnership

IIIF and [LYRASIS](https://www.lyrasis.org/Leadership/Pages/LYRASIS-Learning.aspx) are working together to create online training on IIIF. One upcoming session is currently scheduled:

- [Introduction to IIIF](https://www.lyrasis.org/Content/Pages/Event-Details.aspx?Eid=F26BCB02-CACA-EA11-80EB-00155DE5EC03) (October 8th, 11:00 am ET)

New classes will be added to the [LYRASIS online class schedule](https://www.lyrasis.org/Leadership/Pages/LYRASIS-Learning.aspx) in the coming months.


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
