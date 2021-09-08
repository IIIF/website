---
title: Feedback Requested on Phase One of the OpenJPEG Improvement Project
author: Sheila Rabun and Antonin Descampe
date: 2017-10-06
tags: [news, announcements]
layout: post
excerpt: >
  The first phase of work to improve OpenJPEG, an open source JPEG2000 (JP2) codec, has drawn to a close, resulting in the latest release of OpenJPEG, version 2.3.0.
---
The first phase of improvements to [OpenJPEG][openjpeg], an open source [JPEG 2000][jpeg2000] codec, has drawn to a close, resulting in the latest release of [OpenJPEG version 2.3.0][latest]. This new release finalizes the work made by Even Rouault and funded by several academic institutions and archival organizations to make OpenJPEG significantly faster and safer.  In addition to what has been done in [version 2.2.0][v2] (multithreading at decoding, speed optimizations, memory consumption reduction, etc.), this release adds improvement to sub-tile decoding. Additional notes on the latest release can be found at <http://www.openjpeg.org/2017/10/04/OpenJPEG-2.3.0-released>.

With the goal of pursuing additional phases of OpenJPEG improvements, the IIIF community is [seeking feedback][survey] on the latest release as well as information about JP2 workflows. Institutions working with JP2s and/or OpenJPEG are encouraged to [download and try the new release][latest], and provide feedback by answering as many questions as possible in the feedback survey:

* [**JPEG2000 and OpenJPEG Survey**][survey]

The project team welcomes additional funding institutions to contribute to future phases and sustain the effort to bring OpenJPEG up to speed with proprietary implementations of the JPEG 2000 standard. To learn more and get involved, please contact Glen Robson, IIIF Technical Coordinator, at <glen.robson@iiif.io>.

The [OpenJPEG improvement project][improvement] has been made possible with funding from the Wellcome Library, Stanford University, the Nationale Bibliotheek van Nederland (KBNL), and the University of Michigan, in partnership with the International Image Interoperability Framework (IIIF) Consortium, the Council on Library and Information Resources (CLIR), intoPIX, and the Image and Signal Processing Group (ISPGroup) from University of Louvain (UCL, Belgium) hosting the OpenJPEG project. Many thanks also to developer Even Rouault, and to all contributors.

[openjpeg]: http://www.openjpeg.org/
[jpeg2000]: https://jpeg.org/jpeg2000/
[bsd]: https://github.com/uclouvain/openjpeg/blob/master/LICENSE
[github]: https://github.com/uclouvain/openjpeg/projects/1
[openjpeg-news]: http://www.openjpeg.org/2017/04/27/Faster-OpenJPEG-is-on-track
[intopix]: http://www.intopix.com/
[latest]: https://github.com/uclouvain/openjpeg/releases/latest
[survey]: https://goo.gl/forms/491bK2sv9Fj0Y0Cf2
[v2]: http://www.openjpeg.org/2017/08/10/OpenJPEG-2.2.0-released
[improvement]: {{ site.root_url | absolute_url }}/news/2017/04/27/openjpeg-improvement/
