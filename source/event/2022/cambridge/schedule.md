---
title: "2022 IIIF Annual Conference Schedule"
layout: spec
page: overview
banner: true 
breadcrumbs:
  - label: All Events
    link: '{{ site.root_url }}/event/'
  - label: Cambridge 2022
    link: '{{ site.root_url }}/event/2022/cambridge/'
---

## 2022 IIIF Annual Conference Schedule

The outline schedules of the [showcase][showcase] and conference are available below, with specific conference presentations and abstracts listed further down. The exact timing of each day’s schedule is still subject to change.

<!-- ### **Register**

* Please register for both the showcase (free and open to all) and conference using Conftool. Payment must be submitted following your registration via Paypal using a credit card number, or via check. You can register [here](https://www.conftool.org/iiif2022/index.php?page=index).


* Registration for the IIIF showcase is free.
* Registration for the conference is $375 for a general ticket, $240 for a [consortium members]({{ site.root_url | absolute_url }}/community/consortium) ticket, and $100 for a student/discount ticket. -->

### **Sponsors**

We are offering sponsorship for the 2022 IIIF conference and the benefits and costs can be seen on the [sponsorship page]({{ site.root_url | absolute_url }}/event/2022/cambridge/sponsorship). If you are interested in becoming a sponsor please contact [admin@iiif.io](mailto:admin@iiif.io).

The IIIF Annual Conference is generously supported by the following Conference Sponsors:

{% include 2022_sponsors.html %}


## June 6 
### IIIF Showcase

The [IIIF showcase][showcase] is free and open to the public. Attend this event to learn more about IIIF, including an overview of what it does, use cases, how you can implement IIIF at your institution, and how you can contribute to the community.

#### Showcase Schedule 

See the [showcase][showcase] page for the detailed schedule of speakers.

* 12pm-1pm: Check-in opens for showcase and conference registrants
* 1pm-5pm: Showcase (including coffee break)
  

#### IIIF Consortium reception

* 6-8pm: Consortium reception (open to all attendees affiliated with a [IIIF Consortium member institution]({{ site.root_url | absolute_url }}/community/consortium/members), to be held in an outdoor, covered location)


## June 7

### Conference day 1

The IIIF conference is open to advanced registrants.

<table class="api-table">
    <thead>
        <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Speaker(s)</th>
        </tr>
    </thead>
    <tr>
        <td>8:00 - 9:00</td>
        <td colspan="2"><b>Check-in</b></td>
    </tr>    
    {% include conference_table_row.html block=1 %}
    <tr>
        <td>10:30 - 11:00</td>
        <td colspan="2"><b>Break</b></td>
    </tr>    
    {% include conference_table_row.html block=2 %}
    <tr>
        <td>12:00 - 1:30</td>
        <td colspan="2"><b>Lunch</b></td>
    </tr>    
    {% include conference_table_row.html block=3 %}
    <tr>
        <td>3:30 - 4:00</td>
        <td colspan="2"><b>Break</b></td>
    </tr>    
    {% include conference_table_row.html block=4 %}
    <tr>
        <td>6:00 - 8:00</td>
        <td colspan="2"><b>General conference reception, open to all registered participants (to be held outdoors on the Harvard quad, under a tent in case of rain)</b></td>
    </tr>
</table>

## June 8

### Conference day 2

The IIIF conference is open to advanced registrants.

<table class="api-table">
    <thead>
        <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Speaker(s)</th>
        </tr>
    </thead>
    {% include conference_table_row.html block=5 %}
    <tr>
        <td>10:30 - 11:00</td>
        <td colspan="2"><b>Break</b></td>
    </tr>    
    {% include conference_table_row.html block=6 %}
    <tr>
        <td>12:00 - 1:30</td>
        <td colspan="2"><b>Lunch</b></td>
    </tr>    
    {% include conference_table_row.html block=7 %}
    <tr>
        <td>3:30 - 5:00</td>
        <td colspan="2">
            <a name="tours"></a>
            There are four tours aviliable which can be signed up for through ConfTool:
            <ul>
                <li>3:30pm - 5:00pm: <a href="#Leventhal">Tour of the Leventhal Map and Education Center, Boston Public Library</a> (limited to 30 attendees.)</li>
                <li>3:30pm - 5:00pm: <a href="#art_museum">Harvard Art Museum tour</a> (Limited to 18 registrants)</li>
                <li>3:30pm - 4:30pm: <a href="#Widener">Harvard Widener Library</a> (2 tours, each limited to 15 registrants)</li>
                <li>3:30pm - 4:15pm or 4:15pm - 5:00pm: <a href="#Houghton">Harvard Houghton Library</a> (2 tours, each limited to 12 registrants)</li>
            </ul>    
        </td>
    </tr>    
</table>

---

<style>
  .paper_time_value {font-weight: bold;}
  .paper_abstract {
    /*display: none;*/
    padding: 0 0 0 10%;
  }
  .paper_title {
    font-weight: bold;
    font-size: 1.5rem !important;
   }
</style>

## Conference Presentations

<div class="topline_printonly left">
    {% for block in site.data.conference_2022 %}
        <div class='navbar_breadcrumb' style='float:none; width:auto; padding:8px 0 3px 0; border: 0; border-top: 1px solid #666666;'>
            {% assign blockNo = block[1].id %}

            <a id='session{{ blockNo }}' name='session{{ blockNo }}'></a><h3>Block {{ blockNo }}</h3>
            <h3>{{ block[1].session_time }}</h3>
        </div>

        {% for session in block[1].sessions %}
            <a name='{{session.id}}'></a>
            <div id='{{session.id}}'>
                <a href="#block-{{blockNo}}-{{session.id}}">Back to schedule</a>
                <div class="paper">
                    <span class="paper_time_value">{{session.start}} - {{session.end }}</span>
                    <br />
                    <p class="paper_title">{{session.title}}</p>
                    <p class="paper_author">
                        {% for author in session.authors %}
                            <u>{{author.name}}</u>, <i>{{author.org}}</i>{% if forloop.last == false %};{% endif %}
                        {% endfor %}
                    </p>
                    <p class="paper_organisation">{{sessions.authors }}</p>

                    <div class="paper">
                        <p class="paper_abstract">{{session.abstract }}</p>
                        <p class="paper_abstract"></p>
                    </div>
                </div>
            </div>
            {% if forloop.last == false %}
                <hr noshade width="100%" class="float_left">
                <br />
            {% endif %}
        {% endfor %}        
    {% endfor %}        
</div>

<div>
    <div class='navbar_breadcrumb' style='float:none; width:auto; padding:8px 0 3px 0; border: 0; border-top: 1px solid #666666;'>

        <h3>Tours</h3>
        <h3>Wednesday, June 8: 3:30pm - 5:00pm</h3>
    </div>

    <a name="Leventhal"></a>
    <a href="#tours">Back to schedule</a>
    <div class="paper">
        <span class="paper_time_value">3:30pm - 5:00pm</span>
        <br/>
        <p class="paper_title">Tour of the Leventhal Map and Education Center, Boston Public Library</p>
        <div class="paper">
            <p class="paper_abstract">This field trip will take conference participants to the historic Boston Public Library, the nation’s oldest major municipal public library, located in Copley Square in Boston’s Back Bay neighborhood. At the BPL, participants will have an opportunity to tour the Leventhal Map & Education Center, the library’s Digital Lab, and the art and architecture of the Central Library, including the historic 1895 McKim Building and the recently-renovated Boylston Street Building. At the Leventhal Center, participants will learn about initiatives leveraging IIIF-powered map collections, including georeferencing, digital exhibitions, and narrative tools with maps. In the Digital Lab, participants will get to see the BPL’s imaging studio, a major component of the Digital Commonwealth service hub that digitizes materials for cultural organizations across Massachusetts. After the tour, participants will find many restaurants in the Copley Square area and easy public transit to the airport and train stations.</p>
        </div>
    </div>
    <hr noshade width="100%" class="float_left">
    <br />

    <a name="art_museum"></a>
    <a href="#tours">Back to schedule</a>
    <div class="paper">
        <span class="paper_time_value">3:30pm - 5:00pm</span>
        <br/>
        <p class="paper_title">Harvard Art Museum tour</p>
        <div class="paper">
            <p class="paper_abstract">Join Jeff Steward, Director of Digital Infrastructure and Emerging Technology, for a nerd’s eye view of the Harvard Art Museums. We’ll tour the museum top to bottom making stops in the <a href="https://harvardartmuseums.org/article/in-focus-lightbox-gallery">Lightbox Gallery</a> for a sneak peak of the upcoming data visualization project Processing the Page: Computer Vision and <a href="https://en.wikipedia.org/wiki/Otto_Piene">Otto Piene’s</a> Sketchbooks; we’ll swing by one of our fine art photo studios to catch a glimpse of how we transform physical art to IIIFed resources; then we’ll visit a few galleries to marvel at art and play a game in which we’ll pit our sense of aesthetics, art appreciation and interpretation against an <a href="https://ai.harvardartmuseums.org/">AI’s</a>.</p>
        </div>
    </div>
    <hr noshade width="100%" class="float_left">
    <br />

    <a name="Widener"></a>
    <a href="#tours">Back to schedule</a>
    <div class="paper">
        <span class="paper_time_value">3:30pm - 4:30pm</span>
        <br/>
        <p class="paper_title">Harvard Widener Library</p>
        <div class="paper">
            <p class="paper_abstract">
                <b>Widener Library</b><br/>
                <a href="https://library.harvard.edu/libraries/widener">https://library.harvard.edu/libraries/widener</a><br/><br/>

                The Harry Elkins Widener Memorial Library is Harvard University's flagship library.<br/><br/>

                Built with a gift from Eleanor Elkins Widener, the library is a memorial to her son, Harry, Class of 1907. Harry was an enthusiastic young bibliophile who perished aboard the Titanic.<br/><br/>

                It had been Harry's plan to donate his personal collection to the University once it provided a suitable alternative to the outdated and inadequate library then located in Gore Hall. Mrs. Widener fulfilled her son's dream by building a facility of monumental proportions, with over 50 miles of shelves and the capacity to hold over three million volumes.<br/><br/>

                The library opened in 1915, but Harvard's collections continued to grow at an astounding rate. By the late 1930s, Widener's shelves were at capacity. Space was at a premium for staff and patrons as well as books, which led the administration to begin a lengthy decentralization process. Over time Harvard built several new libraries to house its increasingly specialized collections.<br/><br/>

                Widener Library ushered in the new millennium in the midst of its greatest change since opening in 1915. From 1999 to 2004, the building underwent extensive renovations to ensure the long-term preservation and security of collections, and to increase user space.</p>
        </div>
    </div>
    <hr noshade width="100%" class="float_left">
    <br />

    <a name="Houghton"></a>
    <a href="#tours">Back to schedule</a>
    <div class="paper">
        <span class="paper_time_value">3:30pm - 4:30pm</span>
        <br/>
        <p class="paper_title">Harvard Houghton Library</p>
        <div class="paper">
            <p class="paper_abstract">
                <b>Houghton Library</b><br/>
                <a href="https://library.harvard.edu/libraries/houghton">https://library.harvard.edu/libraries/houghton</a><br/><br/>

                Houghton Library opened in 1942 to provide a dedicated home for Harvard Library’s rapidly growing collections of rare books and manuscripts. Since then, it has become known as a research center and a setting for hands-on learning, exhibitions, and lectures and other public programs.<br/><br/>

                Houghton is not just a place that keeps books; it is a notable site of human activity that both reflects and contributes to the interconnectivity of Harvard Library as a whole.</p>
        </div>
    </div>

</div>
[showcase]: {{ site.root_url | absolute_url }}/event/2022/cambridge/showcase
