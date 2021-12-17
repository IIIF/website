---
title: "How to Join the IIIF Consortium, and Membership Benefits"
id: join-consortium
layout: page
tags: [join ]
hero:
  image: ""
  title: Join the Consortium
  subtitle: Support the development of community-driven APIs and shared technologies providing rich access to digitized image, audio, and video resources.
  button:
    label: "Request to join"
    link: "/community/consortium/join#form"
breadcrumbs:
 - label: Community
   link: /community/
 - label: Consortium
   link: /community/consortium
---


{% assign members = site.data.institutions | where_exp: "org", 'org.iiifc == 1 or org.iiifc == 2 or org.iiifc == 3 or org.iiifc == 4' %}

The IIIF Consortium now comprises [{{ members.size }} leading institutions]({{ site.root_url | absolute_url }}/community/consortium/members/) from around the world, all committing to support the growth and adoption of IIIF.

<div class="columns is-centered">{% include misc/button.html button_label="View all members" button_link="/community/consortium/members" %}</div>

## Membership benefits

Becoming a member of the Consortium allows you to shape the IIIF agenda and drive the development roadmap for an open, international standard alongside a community of forward-thinking global technology leaders. Additionally, membership funds IIIF’s supporting staff, who steward strategy, training, communications, infrastructure, outreach, growth, community-building, and adoption. Membership includes a number of other benefits dependent on the the level of contribution you choose. Question about membership? Email us at staff@iiif.io.

## Membership levels

**Full membership - $10,000 annual sustaining contribution**

Benefits for full members include:

*   Dedicated basic assistance and discounted consulting rates for more extensive needs
*   Discounted custom training opportunities for staff professional development
*   Insitution-wide discounts on [general training and workshops](https://iiif.io/get-started/training/)
*   Institution-wide discounts for Annual Conference registration
*   Guaranteed representation on the [Technical Review Committee]({{ site.root_url | absolute_url }}/community/consortium/trc ), which guides development of the IIIF specifications and approves all updates and additions to the APIs
*   Eligibility to serve on the [Executive Committee and Operating Committee]({{ site.root_url | absolute_url }}/community/consortium/consortium_committees/), which govern the consortium
*   Voting rights in annual Executive Committee elections
*   Priority attendance at conferences, meetings and other events
*   Priority technical advice 


**Associate membership - $2,500 annual sustaining contribution**

Benefits for associate members include:

*   Institution-wide discounts on training and workshops
*   Institution-wide discounts for Annual Conference registration
*   Eligibility to serve on the [Technical Review Committee]({{ site.root_url | absolute_url }}/community/consortium/trc ), which guides development of the IIIF specifications and approves all updates and additions to the APIs
*   Priority attendance at conferences, meetings and other events

**Conditions of membership:**
*   Only full members are eligible for voting rights on the Executive Committee
*   A limit of three seats on the Executive Committee may be held by commercial organizations. Non-commercial organizations include libraries, museums, and archives - individuals who work for commercial organizations are welcome and encouraged to serve in community groups and committees

## Join
<a name="form"></a>
To join the consortium, please email staff@iiif.io with your intent to join or fill out the form below, and we will begin the membership process.

<form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/meqnqvzr" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name" class="label">Name</label>
    <input type="text" name="name" id="full-name" placeholder="Please tell us your name" required="" class="required input is-danger">
    <label for="email-address" class="label">Contact Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" class="required email input is-danger">
    <label for="message" class="label">Message (including name of institution seeking to join)</label>
    <textarea rows="5" name="message" id="message" placeholder="Get in touch about joining the IIIF Consortium, or let us know if you have any questions." required="" class="required textarea input is-danger"></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>
  <br>
  <input type="submit" value="Submit" class="button">
</form>


