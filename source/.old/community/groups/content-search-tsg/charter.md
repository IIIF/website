---
title: "IIIF Content Search TSG Charter"
tags: [content-search, tsg]

---

## Introduction

The IIIF Content Search API ([https://iiif.io/api/search/1.0/](https://iiif.io/api/search/1.0/)) was published in 2016 and has seen successful implementation in a number of institutions. The Content Search API allows IIIF compatible viewers to ‘search within’ a IIIF resource and returns annotations that can be presented by a client. Version 3.0 of the IIIF Presentation and Image APIs have introduced incompatibilities with version 1.0 of the Content Search API. These incompatibilities include:

*   Presentation 3.0 uses W3C Web Annotations whereas Content Search 1.0 uses the deprecated Open Annotation specification.
*   Presentation 3.0 uses JSON-LD 1.1, and related best practices, whereas Content Search 1.0 is based on JSON-LD 1.0. 
*   Presentation 3.0 allows the use of time-based media whereas Content Search 1.0 does not specify how to search such resources.

There is concurrent work happening to bring the Authentication specification up to date with the Image API version 3.0. The Content Search TSG will coordinate with that group to ensure that any authentication solution required for search is consistent with any new approach taken by the [Authentication TSG]({{ site.url }}{{ site.baseurl }}/community/groups/auth-tsg).

Use cases for a new version of the Content Search API are implicit and extensive in the following issues raised on the IIIF API Github repository, and will be further documented by the TSG:

*  [https://github.com/IIIF/api/issues?q=is%3Aissue+is%3Aopen+label%3Asearch](https://github.com/IIIF/api/issues?q=is%3Aissue+is%3Aopen+label%3Asearch) 


## Scope

The primary focus of the Content Search TSG will be bringing the Content Search API in line with version 3.0 of the Presentation API, supporting time-based annotation searching, and addressing issues that have come up since the publication of the current version. The group will also evaluate user stories and issues for the inclusion of new features and integrations.

The number of successful implementations of Content Search 1.0 suggests that extensions to the existing model, rather than a new approach, is the likely direction for the TSG. Further, the work can be prioritized such that syntax level alignment with Presentation 3.0 occurs first, and on a relatively short timeline.


## Deliverables

The expected deliverable will be a version 2.0 of the Content Search API. Alignment with JSON-LD 1.1 and Web Annotations will inevitably bring breaking changes. Given the uncertainty of the Authentication TSG's timeline and its potential to delay an implementable version of the Content Search API with authentication functionality, it may be necessary to release 2.0 without authentication and later add authentication in a subsequent minor release, such as 2.1.


## Roadmap

*   Group formation: January 2021
*   Delivery of search use cases: May 2021 
*   Delivery of syntax alignment update draft: May 2021
*   Delivery of implementable Beta Content Search API: May 2022
*   Delivery of Proposed Recommendation Content Search API: October 2022


**Communication channels:**

* Github: TBD
* Calls: Calls every other week on Fridays at 11:00am Eastern - see [IIIF Community Calendar][iiif-calendar] for details
* Email: [iiif-discuss][iiif-discuss] with subject line: \[Search-TSG\]
* General discussion on the [Search Slack channel][search-slack]

**Call notes and group documents:**
  * [IIIF Content Search TSG folder][search-tsg-folder]

[events]: {{ site.url }}{{ site.baseurl }}/event "IIIF Events"
[iiif-discuss]: https://groups.google.com/forum/#!forum/iiif-discuss "IIIF-Discuss Forum"
[search-slack]: https://iiif.slack.com/archives/C01Q2G09U7N
[search-tsg-folder]: https://drive.google.com/drive/u/1/folders/15Zpng8lwANB5BsBt9wwTswfkjoxcB9oJ
[slack]: http://bit.ly/iiif-slack
[iiif-calendar]: {{ site.url }}{{ site.baseurl }}/community/groups/
[international-zoom]: https://zoom.us/zoomconference


{% include acronyms.md %}
