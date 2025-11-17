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

**Champion membership - $16,000 annual sustaining contribution**

* Special recognition at Annual Conference & Online Meeting
* Included Bronze Sponsorship at Conference
* Recognition on IIIF Consortium website
* Support for initiatives and and developments of the Champion’s choosing
* All benefits of Full Membership

**Full membership - $8,000 annual sustaining contribution**

* One free Annual Conference registration
* Organization-wide discounts on conference fees
* Priority registration for regional and special events
* Training discounts for quarterly trainings
* Discounted hourly rate for custom training
* Guaranteed representation on the [Technical Review Committee](https://iiif.io/community/consortium/trc), which guides development of the IIIF specifications and approves all updates and additions to the APIs
* Eligibility to serve on the [Executive Committee and Operating Committee](https://iiif.io/community/consortium/consortium_committees/), which govern the consortium
* Voting rights in annual Executive Committee elections


**Associate membership - Low and Middle Income Countries- $1,000 annual sustaining contribution**

* Institutions in[ Low- and Middle-Income Countries](https://datatopics.worldbank.org/world-development-indicators/the-world-by-income-and-region.html) may join the Consortium as an Associate Member at a discount.


## Additional Add-ons - $2,000 annual contribution

**Allmaps**

Get access to [a host of new Allmaps features](https://allmaps.org/iiif-partnership) for IIIF members, including tracking institutional annotations, a geocoder for your collection’s maps, and a custom flow for your employees.

**Community Development Fund**

Support the Consortium’s ongoing work to extend and support community infrastructure such as Cantaloupe and to build open tools such as the Internet Archive’s IIIF service.

**Strategic Initiatives Fund**

Support the Consortium’s strategic initiatives, including increasing membership to Low- and Middle-Income countries, facilitating development of interoperable systems, and advocating for IIIF on a global scale.


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


