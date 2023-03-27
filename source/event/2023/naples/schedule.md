---
title: "2023 IIIF Annual Conference Schedule"
layout: spec
page: overview
banner: true 
breadcrumbs:
  - label: All Events
    link: '{{ site.root_url }}/event/'
  - label: Naples 2023
    link: '{{ site.root_url }}/event/2023/naples/'
---

## 2023 IIIF Annual Conference Schedule

The outline schedules of the conference is available below. The exact timing of each day’s schedule is still subject to change.

### **Register**

* Please register for the conference using Conftool. Payment must be submitted following your registration via Paypal using a credit card number, or via check. You can register [here](https://www.conftool.org/iiif2023/index.php?page=index).


* Registration for the IIIF showcase is free.
* osts for the conference will be €480 for a general ticket, €230 for a [consortium members]({{ site.root_url | absolute_url }}/community/consortium) ticket.

### **Sponsors**

The IIIF Annual Conference is generously supported by the following Conference Sponsors:

{% include 2023_sponsors.html %} 


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


## Presentations
### Wednesday, 07 June 2023


<table width="90%" align="center" cellspacing=1 border=0 cellpadding=2 class="mediumbg">
<tbody id='session_8' >
<tr class="whitebg"><td class="brightbg topline_printonly" align=center valign="middle" width="20%"><span class="fontbold"><a name="5" id="5"></a>9:30am - 11:00am</span></td><td class="whitebg topline_printonly leftline_printonly left" valign=top><span class='font10 paper_title'>Introductions, local welcome, and State of the IIIF Universe</span></td></tr>
</tbody>
<tbody id='session_9' >
<tr class="whitebg"><td class="brightbg topline_printonly" align=center valign="middle" width="20%"><span class="fontbold"><a name="8" id="8"></a>11:30am - 12:30pm</span></td><td class="whitebg topline_printonly leftline_printonly left" valign=top><br /></td></tr>
<tr class="whitebg"><td align=center valign="top" width="20%">
<div style="font-size:4pt; clear:both;">&nbsp;</div>
</td>
<td class="whitebg leftline_printonly left" valign="top" width="80%"><a name='paperID114'></a><div id='paperID114'>
<div class="paper"><p class="paper_title">Integrating RTI and related techniques into IIIF</p>
<p class="paper_author"> <u>Richard Palmer</u><sup>1</sup>, Hendrik Hameeuw<sup>2</sup>, Serena Picarelli<sup>2,3</sup>, Vincent Vanweddingen<sup>2</sup>, Federico Ponchio<sup>4</sup>, Andy Iriving<sup>5</sup></p>

<p class="paper_organisation"><sup>1</sup>Victoria &amp; Albert Museum, London; <sup>2</sup>KU Leuven Libraries, Belgium; <sup>3</sup>Scuola Superiore Meridionale, Naples; <sup>4</sup>Visual Computing Lab,  CNR-ISTI, Italy; <sup>5</sup>Bodleian Libraries, Oxford</p>

<div ><div class="paper">

<p class="paper_abstract">Relightable imaging techniques such as RTI create an object’s image representation from a computational model, allowing for a user to (post-capture) dynamically vary image features such as the object’s light reflectance, simulating a changing lightsource. This gives the opportunity to researchers and a general audience to see object details and views that might not be immediately visible in a single fixed view photograph. This complements IIIF’s ability to provide a user with the ability to zoom into more detailed views of an object (Image API) and examine it via multiple images (Presentation API).</p>
<p class="paper_abstract">This complementarity leads those institutions implementing relightable images and IIIF to look into how the two services can be brought together, avoiding the need for separate image servers and image viewers by allowing relightable imaging techniques to be presented as part of IIIF. However, because of the extra information needed for the computational model used by RTI (which has itself not been fully standardised) and related techniques, this cannot be simply handled by the existing Image API, therefore extensions or standards development is needed for IIIF to be able to support them.</p>
<p class="paper_abstract">This panel discussion will look at this issue from the point of view of existing projects making use of relightable images for research (KU Leuven Libraries, Scuola Superiore Meridionale), developers implementing viewers for relightable images (Visual Computing Lab/CNR-ISTI, KU Leuven Libraries), and cultural heritage organisations experimenting with integrating such viewers into their existing IIIF architecture (Bodleian Libraries, Victoria &amp; Albert Museum). Panel members will talk through their current projects and the state of the art on these topics (and where relevant, related topics that relightable development would need to be cognisant of, such as IIIF 3D). Following on from these short presentations, a group discussion will follow on the approaches needed to integrate RTI and related techniques into IIIF and the next steps needed to achieve this.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>


<tbody id='session_10' >
<tr class="whitebg"><td class="brightbg topline_printonly" align=center valign="middle" width="20%"><span class="fontbold"><a name="6" id="6"></a>12:30pm - 1:00pm</span></td><td class="whitebg topline_printonly leftline_printonly left" valign=top><br /></td></tr>
<tr class="whitebg"><td align=center valign="top" width="20%">
<div style="font-size:4pt; clear:both;">&nbsp;</div>
</td>
<td class="whitebg leftline_printonly left" valign="top" width="80%"><a name='paperID137'></a><div id='paperID137'>
<div class="paper"><p class="paper_title">IIIF Maps Implementations</p>
<p class="paper_author"> <u>Bryan John Haberberger</u><sup>1</sup>, <u>Virginia Boyero</u><sup>3</sup>, Bert Spaan<sup>4</sup>, <u>Eliot Jordan</u><sup>2</sup>, Michael Appleby<sup>5</sup>, Stace Maples<sup>6</sup></p>

<p class="paper_organisation"><sup>1</sup>Research Computing Group at Saint Louis University; <sup>2</sup>Prince University; <sup>3</sup>Swedish National Heritage Board Incubator / Beyond the Map; <sup>4</sup>Independent; <sup>5</sup>Yale University; <sup>6</sup>Stanford University</p>

<div ><div class="paper">

<p class="paper_abstract">Viewing resources within the context of modern GIS coordinates is not a default behavior of IIIF viewers. Perhaps more challenging is the geographic information for the resource often exists on a different system with loose connection to the primary resource encoded with the IIIF Presentation API. The navPlace Extension for IIIF Presentation API 3 focuses on making geographic information as important as any other property. This enables ways to define, alter, and ultimately interact with the resources’ information within the context of a modern map. We will look at a small number of community driven geographic data displays from processing the navPlace property. We will also give a live time demo for previewing what any IIIF resource might look like in one of these viewers. As something for the audience to take home, we will share a web app where anyone can go in with any IIIF Presentation API 3 resource, add simple coordinates to it, then see a preview of it in an actual navPlace viewer.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID129'></a><div id='paperID129'>
<div class="paper"><p class="paper_title">Allmaps in Practice</p>
<p class="paper_author"> <u>Bert Spaan</u><sup>1</sup>, <u>Jules Schoonman</u><sup>2</sup></p>

<p class="paper_organisation"><sup>1</sup>Allmaps; <sup>2</sup>Delft University of Technology Library</p>

<div ><div class="paper">

<p class="paper_abstract">Allmaps is a set of open source tools for georeferencing, warping, viewing and exploring digitized maps that are available with IIIF. Geographic metadata is stored in a simple Web Annotation that can be embedded in the IIIF Presentation API. Together with the IIIF Community, a specification for such Georeference Annotations is in the making, with the aim to be published as an official IIIF Extension.</p>
<p class="paper_abstract">At the 2021 Annual Conference, we presented Allmaps for the first time and demonstrated the various components that were still in early development. Since then, we have had the pleasure to meet many curators, researchers, educators and developers around the world who are interested in using Allmaps and who would like to contribute to its further development.</p>
<p class="paper_abstract">This presentation highlights a selection of use cases that we have collected over the past two years, in combination with live demonstrations. In addition, we discuss how the project can evolve into a more robust network organization, and how the overall accessibility and usability for wider audiences can be improved.</p>
<p class="paper_abstract">The use cases follow the perspectives of institutions, researchers and students. For institutions that have previously engaged in georeferencing projects, Allmaps offers a way to simplify their infrastructure and serve geographic data as part of the IIIF Presentation API. Allmaps offers tools to convert data from other formats to Georeference Annotations, and plugins to turn IIIF images into map layers in popular map viewers. All of this can be hosted on premises.</p>
<p class="paper_abstract">For institutions that have not yet georeferenced their collection, the Allmaps Editor can be used to set up crowdsourcing projects. The resulting data can be retrieved from Allmaps and kept as part of the collection. We highlight the use cases of both Leiden University Libraries and the Leventhal Map &amp; Education Center at the Boston Public Library.</p>
<p class="paper_abstract">Researchers working with digital collections often struggle getting access to data and setting up complex infrastructures. Long term server maintenance is often a problem. IIIF in combination with Allmaps makes it possible to set up a static workflow that requires less server maintenance and improves sustainability. The Allmaps Tile Server increases the compatibility with traditional GIS applications. After finalizing projects, research results can be more easily shared with the providing institutions in the form of Web Annotations. We highlight the use cases of OpenHistoricalMap and the French interdisciplinary research project SODUCO.</p>
<p class="paper_abstract">For students, Allmaps improves the overall accessibility and usability of georeferenced map collections. It gives students more freedom to collect and compare material from different sources at their own initiative. WebGL color masking and colorization in the Allmaps Viewer helps to compare different overlays. Moreover, for design students, Allmaps makes it possible to georeference architectural and urban plans, in order to study designs in a larger context and compare different solutions. We highlight the use case of Delft University of Technology’s Faculty of Architecture and the Built Environment.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>


<tbody id='session_11' >
<tr class="whitebg"><td class="brightbg topline_printonly" align=center valign="middle" width="20%"><span class="fontbold"><a name="10" id="10"></a>2:30pm - 3:00pm</span></td><td class="whitebg topline_printonly leftline_printonly left" valign=top><br /></td></tr>
<tr class="whitebg"><td align=center valign="top" width="20%">
<div style="font-size:4pt; clear:both;">&nbsp;</div>
</td>
<td class="whitebg leftline_printonly left" valign="top" width="80%"><a name='paperID161'></a><div id='paperID161'>
<div class="paper"><p class="paper_title">IIIF 3D - Evolution, Technical Specification, Future Metaverse?</p>
<p class="paper_author"> <u>Ronald S. Haynes</u><sup>1</sup>, Edward Silverton<sup>2</sup>, Julie Winchester<sup>3</sup>, Mike Boyd<sup>4</sup></p>

<p class="paper_organisation"><sup>1</sup>University of Cambridge, United Kingdom; <sup>2</sup>Mnemoscene, Universal Viewer; <sup>3</sup>Duke University, MorphoSource; <sup>4</sup>University of Edinburgh, United Kingdom</p>

<div ><div class="paper">

<p class="paper_abstract">Increasing the global impact of IIIF use for 2D and Audio/Video (A/V) data, work has begun to draft similar standards for 3D content, with the developments of the 3D Technical Specification Group. The 3D Community Group shares significant projects and tools and is collaboratively considering common challenges and potential solutions, with major 3D developers and researchers, and complements the work of the 3D Technical Specification Group, engaging with specialists and representatives across user communities, international and standards bodies, as outlined in its road map. The complementary efforts of the CG and TSG is working to suitably extend IIIF into the 3rd dimension, exploring opportunities for better data sharing across collections and institutions, to help overcome barriers for sustainable sharing. The group continues to explore suitable options for incorporation of 2D and A/V with 3D data, to form digital dioramas, scene and soundscape reconstructions, and the potential to help build an inclusive metaverse. Please do join us!</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID120'></a><div id='paperID120'>
<div class="paper"><p class="paper_title">ArchiOx: Analysing and Recording Cultural Heritage in Oxford</p>
<p class="paper_author"> <u>Andy Irving</u><sup>1</sup>, <u>Richard Allen</u><sup>1</sup>, <u>Jorge Cano</u><sup>2</sup>, <u>Carlos Bayod</u><sup>2</sup>, John Barrett<sup>1</sup></p>

<p class="paper_organisation"><sup>1</sup>Bodleian Libraries, United Kingdom; <sup>2</sup>Factum Foundation</p>

<div ><div class="paper">

<p class="paper_abstract">This year, the Bodleian Libraries and the Factum Foundation have undertaken a pioneering project exploring the use of high-resolution 3D and color recording in the study of books and other items in library collections. Historically, the digitization of surface relief in books and manuscripts has been given little consideration. However, this project, known as ArchiOX, has demonstrated the great potential of high-resolution 3D scanning in this area of study.</p>
<p class="paper_abstract">Two complementary recording systems were used in the project: the Lucida 3D laser triangulation Scanner and the Selene Photometric Stereo Scanner. Both systems were designed and developed specifically for cultural heritage documentation. One of the key objectives of the project was to make the recorded data available seamlessly within the IIIF ecosystem, allowing for both depthmap and normal map 3D scan data to be recorded as image files, often referred to as 2.5D. Over a period of one year, a new methodology for processing these images for publication in IIIF viewers was developed, as well as a virtual relighting tool that allows researchers to observe objects as if they were physically in front of them, by moving a virtual torch around their surfaces. This tool reveals details of the objects&#39; surface that may not be visible at first glance (with or without the color information)</p>
<p class="paper_abstract">The implementation of a IIIF-compatible viewer for 3D scans opens up exciting new possibilities for library collections, enabling researchers and the general public to engage with their unique objects in innovative ways. The virtual relighting tool allows us to study objects in greater detail and has already proved to be a valuable tool in the analysis and interpretation of the collections. The results of this ongoing project have far-reaching implications for the study and preservation of cultural heritage.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>


<tbody id='session_12' >
<tr class="whitebg"><td class="brightbg topline_printonly" align=center valign="middle" width="20%"><span class="fontbold"><a name="11" id="11"></a>3:00pm - 4:00pm</span></td><td class="whitebg topline_printonly leftline_printonly left" valign=top><br /></td></tr>
<tr class="whitebg"><td align=center valign="top" width="20%">
<div style="font-size:4pt; clear:both;">&nbsp;</div>
</td>
<td class="whitebg leftline_printonly left" valign="top" width="80%"><a name='paperID113'></a><div id='paperID113'>
<div class="paper"><p class="paper_title">An analysis of IIIF manifests imported into FromThePage</p>
<p class="paper_author"> <u>Sara Brumfield</u></p>

<p class="paper_organisation">FromThePage, United States of America</p>

<div ><div class="paper">

<p class="paper_abstract">There are 99,000 documents imported into FromThePage, our crowdsourcing platform for transcription, indexing, and description, either through uploads or IIIF imports. I&#39;ll analyze and share where those documents come from. What percentage are IIIF manifests? Who is using IIIF to import material? (The answer will surprise you!) Are they imported by the same organization that runs the project? What asset management systems are represented? The answers -- surprising and interesting -- may influence how the community talks about IIIF and where we focus our outreach efforts.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID105'></a><div id='paperID105'>
<div class="paper"><p class="paper_title">Visualizing IIIF Collections</p>
<p class="paper_author"> <u>Christopher Pietsch</u>, <u>Florian Kräutli</u></p>

<p class="paper_organisation">University of Zurich, Switzerland</p>

<div ><div class="paper">

<p class="paper_abstract">The proposed lightning talk will showcase the capabilities of the VIKUS Viewer and its associated VIKUS IIIF Generator, as a web-based visualization system that enables the exploration of large cultural artifact collections. Relevant to the IIIF community, it demonstrates a practical application of IIIF standards in the form of a VIKUS Viewer that can be used to view entire IIIF Collections (Presentation 3.x API) using the IIIF Image API in a user-friendly and interactive way.</p>
<p class="paper_abstract">The presentation will begin by introducing the VIKUS Viewer and its unique capabilities, specifically, how it arranges thousands of cultural artifacts on a dynamic canvas and supports the exploration of thematic and temporal patterns of large collections, while providing rapid access to high-resolution imagery.</p>
<p class="paper_abstract">Next, the VIKUS IIIF Generator will be introduced, which can be used to view entire IIIF Collections (Presentation 3.x API) with the VIKUS Viewer. The Docker instance&#39;s ability to crawl all manifests in a IIIF Collection recursively, download images of each canvas using the IIIF Image API, create spritesheets, extract metadata, and generate image similarity layouts using dimension reduction techniques like UMAP will be demonstrated.</p>
<p class="paper_abstract">We will show real-world examples of IIIF Collections visualized using the VIKUS IIIF Generator to demonstrate the project&#39;s practical usage. Additionally, the REST API and websocket for real-time progress updates and the ability to download data ZIP archive for VIKUS Viewer will be discussed.</p>
<p class="paper_abstract">This presentation is directed towards both technical and general audiences. Technical audiences can gain a deeper understanding of the IIIF standards and how they can be implemented in a practical application, while general audiences can learn about the capabilities of IIIF and how it can be used to view and explore digital collections in a visually engaging way.</p>
<p class="paper_abstract">Overall, the presentation aims to showcase the capabilities of the VIKUS Viewer and its associated VIKUS IIIF Generator, as a powerful tool for exploring large cultural artifact collections. It also aims to contribute to the IIIF community by providing a practical application of IIIF standards that can be used and built upon by other institutions and organizations.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID130'></a><div id='paperID130'>
<div class="paper"><p class="paper_title">iiif-prezi3: Python library for working with the IIIF Presentation 3 API</p>
<p class="paper_author"> <u>Mike Bennett</u><sup>1</sup>, <u>Glen Robson</u><sup>2</sup>, iiif-prezi3 maintainers<sup>3</sup></p>

<p class="paper_organisation"><sup>1</sup>Non-affilliated; <sup>2</sup>IIIF-C; <sup>3</sup>Assorted</p>

<div ><div class="paper">

<p class="paper_abstract">This lightning talk will introduce the iiif-prezi3 Python library, a successor to the original iiif-prezi library.</p>
<p class="paper_abstract">Developed over the last two years by a group of volunteers in the IIIF community, the iiif-prezi3 library aims to provide a quick and easy way for developers of all skill levels and familiarity with the IIIF Presentation API 3.0 to generate valid JSON-LD for Presentation API resources.</p>
<p class="paper_abstract">During the lightning talk, we will cover a brief history of the development of the library, an introduction to the principles underlying it such as the use of the Pydantic modeling and validation library, and demonstrate some real world examples of the library in use, both inside workflows and standalone.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID117'></a><div id='paperID117'>
<div class="paper"><p class="paper_title">Messy medieval manuscripts: annotating scribes on IIIF images</p>
<p class="paper_author"> <u>Jo Tucker</u>, <u>Luca Guariento</u>, <u>Vivien Williams</u></p>

<p class="paper_organisation">University of Glasgow, United Kingdom</p>

<div ><div class="paper">

<p class="paper_abstract">This short presentation will showcase the work of an ongoing project (Jan 2023 – Jun 2024) led by three early career researchers at the University of Glasgow which explores the capability of annotating IIIF images in the context of an innovative digital edition. By presenting at the IIIF conference, we hope to share our aims and work-in-progress ideas with a wide range of experts and users.</p>
<p class="paper_abstract">The Chronicle of Melrose is one the most significant sources for Scotland’s history in the 12th and 13th centuries. It currently survives in two composite manuscripts in the British Library in London (Cotton Julius B. XIII ff. 2–47 and Cotton Faustina B. IX ff. 2–75). What makes the Chronicle so unique is the fact that so many individual scribes (over 50) contributed to its creation and subsequent (messy) growth over a century.</p>
<p class="paper_abstract">Traditional editions tend to be concerned primarily with textual content. Where images are used in editions, they are usually illustrative rather than the central point of access to the text. On the other hand, it has been recognised that a general problem with the plethora of digital images of manuscripts on the web is that they often lack sufficient contextualisation (e.g. Edwards 2018; Prescott &amp; Hughes 2018). The prospect of integrating IIIF images into editions has yet to be generally taken up by the editorial community. This project’s innovative image-based edition therefore represents a new direction for digital editing and the use of IIIF as part of a ‘materially engaged’, scribe-centric editorial methodology.</p>
<p class="paper_abstract">Annotations will be added to the images and stored using W3C Web Annotation specification, identifying the area where a specific scribal hand occurs. At the same time, the TEI-XML texts will be tagged to the relevant scribe ID, matching that in the manifest annotation.</p>
<p class="paper_abstract">Our edition therefore seeks to use the BL’s IIIF images to reunite the manuscript (originally divided in the 16th century) and draw attention to its messy, multi-scribe nature by annotating the scribes on each folio. This will allow for detailed investigations of each scribe’s contribution, with accessible referencing and therefore verification of research results. As an Open Access edition, it aims to make the Chronicle’s scribes and texts available to a wide range of learners, researchers and the wider public. The project hopes to demonstrate that by using widely supported and shared technologies like IIIF, it is possible to create sustainable, Open Access, intellectually ambitious editions which are relatively small in scale.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID167'></a><div id='paperID167'>
<div class="paper"><p class="paper_title">Re-using IIIF resources for digital storytelling: an assessment of the user needs in a cultural heritage context</p>
<p class="paper_author"> <u>Lise Foket</u></p>

<p class="paper_organisation">Ghent Centre for Digital Humanities, Belgium</p>

<div ><div class="paper">

<p class="paper_abstract">Digital Storytelling is one of the most used methods that GLAMs (Galleries, Libraries, Archives, Museums) use to display their collections to their audiences. Ever since the International Image Interoperability Framework (IIIF) was launched in 2011, digital collections have been made highly accessible in a unified standard, allowing interoperability between repositories and across applications (IIIF, 2012-2021a; Freire et al, 2018). However, whilst a lot of efforts are made into making data interoperable, we actually do not know how a lot about how IIIF material currently is being re-used for storytelling possibilities and/or digital public humanities work. Particularly, some key features of IIIF, such as the deep-zooming options, metadata, and annotations, can also be leveraged to create bespoke digital storytelling options. With the IIIF format now supporting audio and video material, these further possibilities for storytelling are even moreso enhanced (Roddis, 2018). Through free and IIIF-enabled software such as Exhibit.so and Storiiies, the possibility to create a digital story navigating through one or multiple images, which mostly leverages the deep zoom functionality of IIIF and mixes it with text. Additionally, IIIF has also found its way into commercial storytelling software, e.g. Micrio, which is implemented by institutions such as the Rijksmuseum and Van Gogh Museum to create online navigated and interactive ways to explore their museum collections. In recent years, IIIF has furthermore expanded its focus of merely sharing images, and has also incorporated audio, and video material. When viewing IIIF not only as a technical standard, but also as a cocktail of images, audio, video, metadata, annotations, interoperability across institutions, and high-quality and high-speed deep zooming, one can think of the possibilities this could leverage to tell stories digitally. Yet, when analyzing the ways museums and humanities research institutions have implemented IIIF within their storytelling and public digital humanities projects, not a lot of them have done so. In this lightning talk, I will discuss some of these research questions and potentially preliminary results regarding an assesment of the user needs for digital storytelling with IIIF. The current user groups that I will focus on are the following: (1) humanities scholars, (2) heritage and memory practitioners. The goal is to go beyond the deep zoom functionalities but analyze how IIIF can play a role in digital storytelling, particularly within the field of digital public humanities.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID139'></a><div id='paperID139'>
<div class="paper"><p class="paper_title">“Sharing the Cherry”: AIUCD for IIIF good practices in the Italian DH community.</p>
<p class="paper_author"> <u>Marina Buzzoni</u><sup>1,3</sup>, <u>Maurizio Lana</u><sup>1,4</sup>, Nicola Barbuti<sup>1,7</sup>, Andrea Bolioli<sup>1,8</sup>, Federico Boschetti<sup>1,2,3</sup>, Fabio Ciracì<sup>1,9</sup>, <u>Angelo Mario Del Grosso</u><sup>1,2</sup>, Greta Franzini<sup>1,6</sup>, <u>Paolo Monella</u><sup>1,10</sup>, Daria Spampinato<sup>1,5</sup>, Rachele Sprugnoli<sup>1,11</sup></p>

<p class="paper_organisation"><sup>1</sup>Direttivo 21-23 Associazione per l&#39;Informatica Umanistica e la Cultura Digitale AIUCD; <sup>2</sup>CNR-ILC, Italy; <sup>3</sup>Università Ca&#39; Foscari Venezia; <sup>4</sup>Università del Piemonte Orientale; <sup>5</sup>CNR-ISTC; <sup>6</sup>Eurac Research; <sup>7</sup>Università di Bari Aldo Moro; <sup>8</sup>CELI; <sup>9</sup>Università del Salento; <sup>10</sup>Sapienza Università di Roma; <sup>11</sup>Università degli studi di Parma</p>

<div ><div class="paper">

<p class="paper_abstract">This contribution aims at illustrating how the Association of the Italian community of Digital Humanities (AIUCD) is encouraging digital scholars to adopt the protocol, the framework, the APIs and the tools promoted by the IIIF consortium to better meet the requirements arising from the research projects over the past few years. Indeed, AIUCD has, among its ambitions, that of fostering best practices, common processes, open resources and innovative applications in the field of Digital Humanities. The IIIF ecosystem is particularly valuable for our community since AIUCD favors 1) data interoperability by adopting shared models and standard formats for data representation, 2) data availability by using open licenses and web publication following the FAIR principles, 3) long-term preservation of scholarly-curated resources by means of TRUSTed digital repositories, 4) sustainability of the digital research outcomes by strengthening institutional collaborations between different stakeholders (academic and non academic ones).</p>
<p class="paper_abstract">In light of the above, one of the most popular technologies adopted within the DH community is the encoding schema developed by the Text Encoding Initiative (TEI), which is mainly devoted to digitally represent any form of textual resources (epigraphs, papyri, manuscripts, books, etc.) at different levels of detail, including different research perspectives (e.g. paleographical, philological, linguistic, historical and others).</p>
<p class="paper_abstract">Digital textual studies often benefit from the integration of textual data with the images of documents bearing texts (including manuscripts, inscriptions, cultural heritage objects) and the related metadata. Of special interest, then, is to provide shared methods to integrate this kind of textual data representation with the image-related data handled by the IIIF APIs, within a Linked Open Usable Data context.</p>
<p class="paper_abstract">Key features of this complex text-document relationship that pose modeling and processing challenges include: 1. Producing, managing, exposing and retrieving different images about primary sources at different levels of granularity and with different image representation technologies (RGB, infrared, hyper-spectral, multi-spectral, etc.); 2. Aligning the textual content and its internal structure with the image, taking into account that different written surfaces and different running texts can coexist within the same document image (region of interest, image segmentation, layout analysis, text baseline, text masks); 3. Adopting the Web Annotation Data Model (WADM) to implement the integration between metadata, text and witness, thus ensuring a solid mechanism to generate persistent identifiers (promoting the pointing mechanisms of the XML technology and the adherence to RFCs regarding fragment identification methods of URI selectors); 4. Adding robust support to 3D images through an enhanced IIIF API to manipulate 3D historical documents such as epigraphs, papyri, gravestones, etc.</p>
<p class="paper_abstract">If accepted, the short talk will show some use cases beyond “deep zoom” requirements, providing technical solutions to embed IIIF URI within TEI documents by exploiting attributes defined by the teidata.pointer data type, the TEI XPointer Schemes, and the WADM specifications implemented within the standoff tagset of a TEI-compliant document.</p>
<p class="paper_abstract">Moreover, we will present some showcases for digital philology, developed by members of the AIUCD community, leveraging IIIF APIs: EVT, CophiEditor, Euporia, Biflow.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID116'></a><div id='paperID116'>
<div class="paper"><p class="paper_title">IIIF and TEI in the Native Bound Unbound Project</p>
<p class="paper_author"> <u>Nicholas Laiacona</u></p>

<p class="paper_organisation">Performant Software Solutions, United States of America</p>

<div ><div class="paper">

<p class="paper_abstract">Native Bound Unbound is an archive of indigenous enslaved people in the Americas. The project aims to tell the stories of the millions of indigenous people who were enslaved since the arrival of Columbus. The final website will both publish the primary sources online and create an interconnected matrix of these people, the events in their lives, and the places they lived and worked.</p>
<p class="paper_abstract">To accomplish this, the Native Bound Unbound project collects a wide variety of primary sources. There are over a dozen different types of digital assets, ranging from baptismal records, to census records, to court cases, tombstones, and oral histories. The project transcribes, translates, analyzes, and publishes these texts by linking together tools using International Image Interoperability Framework.</p>
<p class="paper_abstract">Primary sources begin their journey by being uploaded to our IIIF image server. This is a Cantaloupe image server fronted by a simple web based interface that creates a IIIF manifest link. This link is then used to create a new transcription project in From The Page. Here, transcribers and domain experts transcribe the texts in a public crowdsourcing environment. These transcriptions are then vetted and approved by one of the project’s editors. The editors can then export the completed transcriptions and associated page images to FairCopy via From The Page’s IIIF export option.</p>
<p class="paper_abstract">FairCopy is a specialized word processor for the study and transcription of primary sources in literature and history. It reads and writes texts marked up in XML according to the Text Encoding Initiative’s Guidelines (TEI). We are using FairCopy in the Native Bound Unbound project to structure and annotate transcriptions and translations in a variety of formats. For each primary source, the transcription and images flow in via IIIF. Users are able to select texts from the annotation lists in the manifest. These are then assembled into TEI in FairCopy.</p>
<p class="paper_abstract">The FairCopy interface can be customized for each project so that editors just have the elements and attributes they need for the job. Users can also markup up names of people and places, as well as identify events. Each asset type requires a specific markup strategy. Fortunately, TEI is quite flexible in this regard and FairCopy makes the process easier and more approachable to our non-technical collaborators.</p>
<p class="paper_abstract">FairCopy integrates with ArchivEngine, an open source server which provides version control and team collaboration. Using ArchivEngine, team members can check out texts to edit and check them in when they are done. ArchiveEngine publishes the texts as a IIIF Manifest via a public API.</p>
<p class="paper_abstract">ArchivEngine’s IIIF manifests are then used to display the texts on the public site. This display utilizes EditionCrafter, an open source React component that can display IIIF images alongside their TEI encoded transcriptions and translations. The translation texts are linked to a database of people, place, and event entries which are also derived from the TEI encoded texts.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID144'></a><div id='paperID144'>
<div class="paper"><p class="paper_title">Coming full circle: from single Sangaku to IIIF-based Archive</p>
<p class="paper_author"> <u>Antonia Karaisl</u><sup>1,2</sup>, <u>Gianmarco Spinaci</u><sup>2</sup></p>

<p class="paper_organisation"><sup>1</sup>Waseda University, Japan; <sup>2</sup>Villa I Tatti, The Harvard Center for Italian Renaissance Studies</p>

<div ><div class="paper">

<p class="paper_abstract">Throughout the Edo period, an idiosyncratic geometric discourse flourished in Japan, surviving in form of the so-called Sangaku: votive tablets presenting geometric riddles in word and image, dedicated by private individuals in Buddhist temples and Shinto shrines. Around 1000 Sangaku survive to date; spread out as they are throughout Japan&#39;s temples, however, their systematic exploration and a better understanding of their cultural function remains a challenge and the tradition as a whole practically unknown outside of Japan.</p>
<p class="paper_abstract">Our 3-year research project based at Waseda University, Tokyo, is an attempt to put Sangaku on the map of the global history of mathematics: the first and primary objective is to digitize all Sangaku surviving in wood and print and showcase them in a bilingual IIIF-based archive.</p>
<p class="paper_abstract">There is an inherent challenge to the project: unlike most digitization initiatives pursued by libraries and cultural institutions, the primary material itself is not available in-house but held in temples spread out across Japan. To date there is no comprehensive, searchable collection of high-resolution images complete with metadata that could form a base for a Sangaku archive. Collecting decentralized material in such quantity, however, will require a collaborative effort. The project will therefore necessitate a workflow that links a user-friendly interface for submitting images to a pipeline streamlining the conversion of the material into IIIF manifests.</p>
<p class="paper_abstract">In the lightning talk proposed, we would like to present a pilot for such a pipeline: from data collection to database management and the automated creation of IIIF manifests.</p>
<p class="paper_abstract">The requirements are as follows: the submission of data should be possible from anywhere and user-friendly; there should be a window for control between the submission of data and its conversion to a IIIF manifest; the single steps of the process should be automated wherever feasible in order to limit manual intervention to a minimum.</p>
<p class="paper_abstract">The pilot presented uses a Google Form for data submission and MySQL for database management; the orchestrator is written in Golang. With a view to the future, the final deliverable will be a docker container allowing the use of alternative interfaces or databases.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>


<tbody id='session_13' >
<tr class="whitebg"><td class="brightbg topline_printonly" align=center valign="middle" width="20%"><span class="fontbold"><a name="12" id="12"></a>4:30pm - 5:30pm</span></td><td class="whitebg topline_printonly leftline_printonly left" valign=top><br /></td></tr>
<tr class="whitebg"><td align=center valign="top" width="20%">
<div style="font-size:4pt; clear:both;">&nbsp;</div>
</td>
<td class="whitebg leftline_printonly left" valign="top" width="80%"><a name='paperID124'></a><div id='paperID124'>
<div class="paper"><p class="paper_title">A national IIIF dissemination project: the study case of French archives</p>
<p class="paper_author"> <u>Cécile Sajdak</u><sup>1,2</sup>, <u>Mathilde Daugas</u><sup>1,2,3</sup></p>

<p class="paper_organisation"><sup>1</sup>Biblissima+; <sup>2</sup>Campus Condorcet; <sup>3</sup>Service Interministériel des Archives de France</p>

<div ><div class="paper">

<p class="paper_abstract">How can we promote IIIF in fields where it is not currently widely used?</p>
<p class="paper_abstract">In France, even though IIIF is for example commonly used in libraries, very few archives have implemented the IIIF APIs. In 2022 a project, born from the reflexions of Biblissima+ and the Service Interministériel des Archives de France, came to light. The aim of this project is to promote the implementation of IIIF in the French archival network, for their own benefit, but also in order to aggregate archival content on the French national portal for archives, FranceArchives (managed by the Service Interministériel des Archives de France).</p>
<p class="paper_abstract">The purpose of this presentation is to introduce this project, as our approach could inspire others. In the first part, we will describe the different stages of the strategy developed to diffuse IIIF in archival institutions, in connection with archivists and software providers. This includes writing documentation and specifications, whose goal is to promote good and homogeneous practices on a national scale, for instance for the construction of ARKs. Training courses are also launched, which allows us to give feedback on how to acquaint a non technical audience with IIIF.</p>
<p class="paper_abstract">Secondly, we will present the other goal of this project: aggregating archival content in FranceArchives, in order to provide federated access and to enable better discoverability of these resources. It will be the opportunity to mention how manifests and digital contents are retrieved and integrated into the document&#39;s descriptive notes, thanks to the implementation of Mirador 3. Future projects, as in the implementation of valorization tools, will also be discussed.</p>
<p class="paper_abstract">FranceArchives, as the French national provider for Archives Portal Europe, the domain agregator for archives of Europeana, will therefore be part of an European network of IIIF. The portal will also aim to offer repositories in IIIF for thematic portals such as Biblissima.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID106'></a><div id='paperID106'>
<div class="paper"><p class="paper_title">Portale Antenati: IIIF implementation</p>
<p class="paper_author"> <u>Lina Antonietta Coppola</u><sup>1</sup>, <u>Costantino Landino</u><sup>2</sup></p>

<p class="paper_organisation"><sup>1</sup>Archivist &amp; Project Manager; <sup>2</sup>IT Manager freelance</p>

<div ><div class="paper">

<p class="paper_abstract">The Portale Antenati (https://antenati.cultura.gov.it/) provides online access to the enormous documentary heritage of the civil status documents preserved in the Italian State Archives-</p>
<p class="paper_abstract">Over 132 million images and over 1,600,000 IIIF manifests are accessible to date. Over 60,000 manifests, over one million pages and 3.5 million thumbnails are consulted every day.</p>
<p class="paper_abstract">To provide these services, a series of IIIF servers governed by a load balancing system was built and each register has its own persistent ARK identifier.</p>
<p class="paper_abstract">The intervention aims to show the design problems of a complex infrastructure such as that of the Portale Antenati, the methodology of performance analysis, the results of the performance benchmarks and the monitoring of the platform.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID131'></a><div id='paperID131'>
<div class="paper"><p class="paper_title">Using IIIF in cultural heritage software solutions</p>
<p class="paper_author"> <u>Marcin Heliński</u>, <u>Aleksandra Nowak</u></p>

<p class="paper_organisation">Poznań Supercomputing and Networking Center, Poland</p>

<div ><div class="paper">

<p class="paper_abstract">Poznań Supercomputing and Networking Center has been involved in development of software solutions for cultural heritage and digital humanities communities for over twenty years. Our most important product DInGO (&quot;Digitise and Go&quot;) has been used by hundreds of institutions in Poland and abroad. PSNC serves more than 140 deployments of digital GLAMs in total. Among them there are over a dozen of institutions using professional digitization pipelines and archiving solutions implemented in the DInGO toolset. Recent years at PSNC have been full of projects using IIIF technology, allowing end users to work with easily accessible high-quality images. Our production systems use IIP Image Server and Cantaloupe as well as OpenSeadragon and UniversalViewer. In order to provide images in IIIF compliant format we implemented various conversion routines. In our presentation we would like to show our approaches to use of IIIF technology in production systems:</p>
<p class="paper_abstract">- Data Exchange Infrastructure developed in EnrichEuropeana and EnrichEuropeana+ projects,</p>
<p class="paper_abstract">- Virtual Transcription Laboratory implemented in cooperation with variety of partners,</p>
<p class="paper_abstract">- dLibra system, our flagship software for digital collections management.</p>
<p class="paper_abstract">Moreover we would like to present our first approach for providing IIIF images in a large scale system developed within the DARIAH-PL project.</p>
<p class="paper_abstract">EnrichEuropeana and EnrichEuropeana+ aim to encourage various communities to improve digital objects quality by creating transcriptions and metadata enrichments. Cultural heritage digital objects often contain scans of handwritten documents or images with unstructured textual information. Transcribing such scans requires working with the images in high zoom which made the IIIF technology the best choice. The solution uses images at their original locations or prepared internally using conversion from other data formats and exposed via IIP Image Server. Images are shown to the users in the customized version of OpenSeadragon viewer embedded in the Transcribathon Platform. In addition to manual transcriptions, the Transcribathon Platform uses HTR technology mainly to create automatic transcriptions of manuscripts.</p>
<p class="paper_abstract">Virtual Transcription Laboratory supports digital repositories in enhancing their content with transcriptions, translations, transliterations and annotations. The tool works on IIIF-based image streams served by the internal IIIF server whenether conversion to IIIF compliant format is necessary. Built-in OCR engine together with its automatic training routines helps preparing good quality transcriptions of documents. Different types of text enhancements are stored in separate text layers which are searchable using IIIF Search API. VTL is integrated with the digital repository in the manner of providing the text enhancements as alternative representations of digital resources.</p>
<p class="paper_abstract">dLibra has also been enhanced with IIIF technology to help hundreds of institutions publish their digital resources online. Internally it uses Cantaloupe IIIF server and UniversalViewer which beside IIIF streams is able to work with legacy image galleries.</p>
<p class="paper_abstract">In the DARIAH-PL project we are increasing the scale of using IIIF technology. The data delivery service will not only allow serving the images but also converting other formats to IIIF compliant format. The most significant feature of the system will be its scale, both in terms of the number of servers and the size of storage.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>

</td></tr>
</tbody></td></tr></tbody></td></tr></tbody></td></tr></tbody></td></tr></tbody></table>


### Thursday 08 June 2023


<table width="90%" align="center" cellspacing=1 border=0 cellpadding=2 class="mediumbg"><tr><td colspan=2 valign=top class="listheader left">

</td></tr>
<tbody id='session_14' >
<tr class="whitebg"><td class="brightbg topline_printonly" align=center valign="middle" width="20%"><span class="fontbold"><a name="9" id="9"></a>9:30am - 10:30am</span></td><td class="whitebg topline_printonly leftline_printonly left" valign=top><br /></td></tr>
<tr class="whitebg"><td align=center valign="top" width="20%">
<div style="font-size:4pt; clear:both;">&nbsp;</div>
</td>
<td class="whitebg leftline_printonly left" valign="top" width="80%"><a name='paperID164'></a><div id='paperID164'>
<div class="paper"><p class="paper_title">Modeling Complexity in Early Manuscripts with IIIF</p>
<p class="paper_author"> <u>Dawn Childress</u>, William Potter</p>

<p class="paper_organisation">UCLA, United States of America</p>

<div ><div class="paper">

<p class="paper_abstract">This presentation will share how the Sinai Manuscripts Digital Library (SMDL) is using IIIF to represent the complexity of early manuscripts for online presentation and digital reinterpretation.</p>
<p class="paper_abstract">St. Catherine’s Monastery in the Sinai possesses an extensive collection of over 4000 manuscripts, including ~1024 Arabic and Syriac manuscripts which have been imaged and published online through the Sinai Manuscripts Digital Library (SMDL). SMDL provides access to high-resolution images of these manuscripts, along with descriptive metadata. However, like many early manuscripts, the majority of Sinai manuscripts contain complexity at multiple levels – they comprise multiple works and/or codicological units; they have been disassembled and rebound in new configurations; and there are hundreds of documented palimpsests and dispersed fragments within the collection. All too often, the environments where we publish manuscript collections at scale elide these complex structures, which are crucial to understanding the histories and contexts of manuscripts and manuscript collections. IIIF, having radically impacted our ability to reimagine early manuscripts through digital means, brings with it an opportunity to model and contextualize digital manuscripts and their data, allowing us to represent and untangle the inherent complexities of early manuscripts.</p>
<p class="paper_abstract">This presentation will share how the SMDL is using IIIF to model and represent the complexities of early manuscripts in digital environments at scale, including modeling the materiality and structure of manuscripts as well as content and context; representing uncertainty and lacunae; and supporting digital reconstruction of palimpsested texts and disbound and dispersed manuscripts and their fragments. While these are not necessarily unique uses of IIIF for modeling complex objects, the SMDL provides real-world examples for showcasing how IIIF can expose these complexities in large-scale manuscript repositories.</p>
<p class="paper_abstract">We will also discuss the work the SMDL is undertaking to develop a new modular manuscripts data model that is aligned with the IIIF Presentation API and Web Annotation to better support digital reconstruction, rebinding, experimental editions, and enhanced descriptions of manuscripts by the project team and scholars/end users. Our goal is to provide the tools and data needed to study manuscripts and their components both individually and in “parts to whole” relationships, and to reconfigure and re-contextualize these objects within digital spaces.</p>
<p class="paper_abstract">The presentation should be of interest to generalists and specialists alike, including implementers of IIIF who are interested in providing access to manuscripts and other complex objects beyond a simple paging view, and scholars or other users of IIIF-hosted manuscript resources that want to create digital editions or curate and assemble component parts of manuscripts for their own bespoke views. We anticipate leaving ample time for Q&amp;A and for feedback and discussion around SMDL practices as well as the potential for future enhancements to IIIF and compliant viewers.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID142'></a><div id='paperID142'>
<div class="paper"><p class="paper_title">Rara Magnetica and IIIF: Semantic Annotation and Interactive Exploration via ICAT</p>
<p class="paper_author"> <u>Christoph Sander</u><sup>1</sup>, <u>Mike Bennett</u><sup>2</sup></p>

<p class="paper_organisation"><sup>1</sup>Max Planck Institute for the History of Science, Berlin; <sup>2</sup>Non-affiliated</p>

<div ><div class="paper">

<p class="paper_abstract">This presentation demonstrates how novel IIIF-powered tools benefit the research on scientific imagery in a historical perspective. Our case study, the Rara Magnetica research project (www.raramagnetica.de), uses the IIIF Presentation API to drive a research workflow and assist in the generation of the final research outputs, thereby extending well beyond a “deep zoom on images”.</p>
<p class="paper_abstract">Rara Magnetica is both a repository and an interactive research platform. It publishes scans and transcriptions of sources, data visualizations, and databases, all related to the premodern study of magnetism. Moreover, it provides various tools to investigate each of these resources independently and in combination. A major aim in fact is to enhance multimodal analyses that transcend media barriers by allowing research of imagery along with full texts, material sources along with their conceptual content. This is achieved by various but interlinked tools, such as ICAT, providing different ways of looking at the same sources.</p>
<p class="paper_abstract">Researchers working with historical multi-page documents, such as books or manuscripts, often lack a tool to store, annotate, and explore these documents in complex ways, extending to the documents’ metadata, its full texts and its imagery or illustrations. ICAT is a Digital Humanities tool to serve this entire workflow, by employing IIIF APIs and linking to third-party tools, such as Zotero, Transkribus, and Vikus Viewer. Digitised copies of many of the historical documents making up the Rara Magnetica collection are available from their holding institutions via IIIF services. These resources can be transcribed and structured with Transkribus and image regions on the pages can be detected and marked with bounding boxes using computer vision tools such as Cordeep (https://cordeep.mpiwg-berlin.mpg.de/). ICAT coordinates this provision of data and also implements a workflow for annotating the content of those images. Powered by IIIF Presentation API objects (especially Annotations) and OpenSeadragon, multiple users can collaboratively tag these images using a controlled and hierarchical semantic vocabulary.</p>
<p class="paper_abstract">Tags can be exported as annotations against new IIIF manifests, as well as in JSON and CSV formats for integration with other tools, such as Vikus Viewer (https://github.com/cpietsch/vikus-viewer). While all ICAT data is stored in a PostgreSQL database, the ICAT UI and API also allows for complex searches across the documents and the image tags. The presentation of the search results is rendered both as IIIF Content Search API responses targeted at the original manifests, and also as on-the-fly dynamic IIIF manifests to provide an interface for researchers to discover and explore imagery in combination with semantic metadata.</p>
<p class="paper_abstract">Our joint conference presentation will demonstrate a use case and workflow for how IIIF manifests are imported into ICAT for tagging, how they subsequently become the subject to complex searches, and how search results can be displayed in the IIIF Presentation API. What ICAT thus offers is a platform for server-based storage, annotation, and exploration of imagery in multi-page documents, such as books or manuscripts.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID121'></a><div id='paperID121'>
<div class="paper"><p class="paper_title">Visualizing multi-layered annotations: the case of the Liber Floridus manuscript</p>
<p class="paper_author"> <u>Evelien Hauwaerts</u><sup>1</sup>, <u>Bauke van der Laan</u><sup>2</sup></p>

<p class="paper_organisation"><sup>1</sup>Bruges Public Library, Belgium; <sup>2</sup>Bauke van der Laan design &amp; development</p>

<div ><div class="paper">

<p class="paper_abstract">The Mmmonk project aims to contribute to the development of IIIF by providing input from a non-institutional end user’s perspective on various issues, among which IIIF annotations. The user survey conducted at the start of the project showed that users were ambiguous about IIIF annotations. On the one hand, they were highly enthusiastic about the concept in general and acknowledged that it meant an advancement in working with digital images. On the other hand, upon deeper reflection, they were put off by a set of practical obstacles. A recurring concern was tied to the nature of the material studied by our end users and highlighted by Mmmonk: medieval manuscripts. This type of object is complex and multidimensional. Its digital counterpart is not a single image but a set of images of the binding, spine, and - often numerous - pages. On top of this, manuscripts are studied from a wide variety of disciplines or perspectives, for instance for their material and chemical properties, text, script, decoration, binding and provenance marks. The targeted end users were concerned that it would be overwhelming and confusing to see such variety and volume of information gathered in the setting of a viewer.</p>
<p class="paper_abstract">We therefore designed a proof-of-concept for the visualization of various layers of information in a structured and user-friendly way, which can be applied to manuscripts but also to other types of objects.. For this demo we have annotated four bifolia of the 12th century Liber Floridus at Ghent University. Within the constraints of the project, we focused on finding the optimal information architecture and user experience. We appropriated the visual language of Mirador 3 using Material UI and simulated a basic Mirador viewer and built our custom interface on top.</p>
<p class="paper_abstract">The user survey also pointed out that individual end users have concerns about authorship attribution and peer-review in IIIF-annotations. Although this was not the focus of our proof-of-concept, we did include a solution to credit authors and sources within the boundaries of a curated editorial project with various authors. In our experiment, we imagined a group of researchers working in various fields, whom we invited to contribute content in compliance with editorial guidelines designed by Mmmonk. This setting could also apply to other situations, for instance students working on a group project under the supervision of a teacher.</p>
<p class="paper_abstract">Discover the proof-of-concept at https://www.mmmonk.be/en/about-iiif/iiif-demo-liber-floridus</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>


<tbody id='session_15' >
<tr class="whitebg"><td class="brightbg topline_printonly" align=center valign="middle" width="20%"><span class="fontbold"><a name="13" id="13"></a>11:00am - 12:00pm</span></td><td class="whitebg topline_printonly leftline_printonly left" valign=top><br /></td></tr>
<tr class="whitebg"><td align=center valign="top" width="20%">
<div style="font-size:4pt; clear:both;">&nbsp;</div>
</td>
<td class="whitebg leftline_printonly left" valign="top" width="80%"><a name='paperID126'></a><div id='paperID126'>
<div class="paper"><p class="paper_title">Italian voices on IIIF: current results and further developments</p>
<p class="paper_author"> <u>Gennaro Ferrante</u><sup>1</sup>, <u>Paola Manoni</u><sup>2</sup>, <u>Simonetta Buttò</u><sup>3</sup></p>

<p class="paper_organisation"><sup>1</sup>Università degli studi di Napoli Federico II, Italy; <sup>2</sup>Biblioteca Apostolica Vaticana; <sup>3</sup>Istituto Centrale per il Catalogo Unico</p>

<div ><div class="paper">

<p class="paper_abstract">Italy offers a long and solid tradition in manuscript studies. The access to this material has always been subject to limitations, both for the rarity and fragility of the document and for the scarcity and low quality of photographic reproductions. Only recently the country has begun more systematic digitization campaigns and online archiving of its enormous heritage (among the largest in the world). The panel brings together in three sessions the pioneers of IIIF in Italian-language bibliographic culture, namely the University of Federico II (F2), the Vatican Library (BAV) and the Central Institute for the Unique Catalogue (ICCU).</p>
<p class="paper_abstract">*</p>
<p class="paper_abstract">F2 highlights the usefulness of the IIIF framework for a thematic project such as Illuminated Dante Project, and explains the efforts in achieving a first descriptive model for illuminated manuscripts. It then presents Naples Dante Project (NDP), a web-based archive displaying the whole manuscript sources of Dante’s works, as well as illustrations of the Commedia from manuscripts to 20th-century books. NDP is working on: 1. a new F.A.I.R.-compliant model for manuscript description and iconography (partner Venice VePDH); 2. a IIIF annotation tool to support iconographic, paleographic and textual-criticism analysis; 3. a IIIF-compliant tool for creating thematic paths for dissemination and educational purposes; 4. visualizing RTI images within the IIIF (partners KU Leuven and CNR-ISTI); 5. HTR training on Dante manuscripts (partners ENC and CNR-ILC); 6. the image matching on Dante miniatures (partner BAV).</p>
<p class="paper_abstract">*</p>
<p class="paper_abstract">BAV has implemented its IIIF-compliant digital library (DVL) platform and the Thematic Pathways on the Web project (in conjunction with Stanford University Libraries), aimed to demonstrate, among the advantages of the IIIF for manuscripts, how the annotation level is a fundamental innovation for the study of contents: transcriptions, comments, comparative analysis of texts and images. As a current challenge, the BAV is conducting a case study in the field of machine learning and IIIF. This talk will focus on the experience of training of a neural network, based on segmented digital images, pertaining to a selection of illuminated manuscripts and the implementation of IIIF annotations of regions of pages, classified by the network, corresponding to the segmented portions of images.</p>
<p class="paper_abstract">*</p>
<p class="paper_abstract">This talk introduces Alphabetica, the gateway to the national bibliographic databases managed by the ICCU. This platform includes the OPAC SBN, the Census of Italian 16th-century Editions (EDIT 16), the Catalogue of Ancient and Modern Manuscripts (ManusOnline), and other thematic databases, along with a IIIF-compliant digital library service, capable of linking digital resources to the library holdings, for the benefit of over 7.000 Italian libraries. These are different types of libraries, with different administrative affiliations adhering to the SBN community, and of many other libraries contributing in the enrichment of our national specialized databases. The talk will also highlight the opportunities that Alphabetica provides, thanks to the IIIF protocol, for both research and educational purposes. Finally, the presentation illustrates the role of Alphabetica logical model and design within the forthcoming implementation of the National Digital Library including all the digital assets coming from the Italian cultural heritage.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>


<tbody id='session_16' >
<tr class="whitebg"><td class="brightbg topline_printonly" align=center valign="middle" width="20%"><span class="fontbold"><a name="14" id="14"></a>1:30pm - 2:30pm</span></td><td class="whitebg topline_printonly leftline_printonly left" valign=top><br /></td></tr>
<tr class="whitebg"><td align=center valign="top" width="20%">
<div style="font-size:4pt; clear:both;">&nbsp;</div>
</td>
<td class="whitebg leftline_printonly left" valign="top" width="80%"><a name='paperID103'></a><div id='paperID103'>
<div class="paper"><p class="paper_title">The LOUD Social Fabrics of IIIF</p>
<p class="paper_author"> <u>Julien Antoine Raemy</u><sup>1,2</sup></p>

<p class="paper_organisation"><sup>1</sup>Digital Humanities Lab, University of Basel, Switzerland; <sup>2</sup>DaSCH - Swiss National Data and Service Center for the Humanities</p>

<div ><div class="paper">

<p class="paper_abstract">In the context of my PhD in Digital Humanities at the University of Basel (2021-2025), I investigate the semantics and interoperability dimensions of standards that adhere to the Linked Open Usable Data (LOUD) design principles [1], such as the International Image Interoperability Framework (IIIF) specifications and more specifically the IIIF Presentation API 3.0, Linked Art and the Web Annotation Data Model [2].</p>
<p class="paper_abstract">This presentation is an opportunity to delve into one of my research questions which is related to the practices of IIIF and Linked Art by drawing attention to the social fabrics that constitute these communities notably from the standpoint of the Actor-Network Theory (ANT), a constructivist approach widely spread in Science and Technology Studies (STS) which should help me to better comprehend the roles and relationships of all actors in the implementation of LOUD standards within the cultural heritage domain and more broadly across the Digital Humanities.</p>
<p class="paper_abstract">While the presentation, structured around two parts, is aimed at a general audience and accessible to all, more technical aspects are also discussed, for example to illustrate how IIIF APIs are developed and maintained.</p>
<p class="paper_abstract">Firstly, I intend to identify the sociotechnical requirements for the establishment of community-driven initiatives, looking in particular at associations that are constituted around consensus-building and advocacy efforts. There are many good cases here, from the creation of community and technical specification groups, the relationship between the consortium and the community, the extent to which transparency plays a vital role, but also the relevance and impact of nonhuman actors such as data models, APIs, validators, as well as collaboratively developed software. This first part will also provide a means of testing the hypothesis that community-driven specifications, if they require significant commitment from all sides and are developed slowly, tend to be successful in the medium to long term.</p>
<p class="paper_abstract">Secondly, I will explore how the implementation of IIIF has progressed within cultural heritage institutions and the potential of the framework in relation to scientific movements and principles, such as Open Science, Citizen Science, FAIR [3] as well as CARE [4]. I will give an overview of the various surveys conducted within the IIIF community in recent years and present the results of my own investigation determining where IIIF stands both conceptually and technically. This second part offers a chance to report on the four key initiatives (Advocacy &amp; Leadership, Technical Development, Community Development, Membership &amp; Value) of the strategic framework presented at the IIIF online event held in December 2022 [5].</p>
<p class="paper_abstract">More generally, this will be a platform to revisit and discuss over ten years of IIIF practice, the intersection with Linked Art for semantically conveying knowledge in an event-based manner and for metadata aggregation, and the Web Annotation Data Model for driving multi-layered assertions from observations to rich narratives, and to consider how LOUD situates itself in relation to communities maintaining such specifications.</p>
<p class="paper_abstract">[1] https://phd.julsraemy.ch</p>
<p class="paper_abstract">[2] https://linked.art/loud</p>
<p class="paper_abstract">[3] https://www.go-fair.org/fair-principles/</p>
<p class="paper_abstract">[4] https://www.gida-global.org/care</p>
<p class="paper_abstract">[5] https://docs.google.com/presentation/d/1Gvvo_NOSebDJHN6Jo5V8ixzgDrvUMN24fHwpjVbaOvk/edit</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID152'></a><div id='paperID152'>
<div class="paper"><p class="paper_title">The implementation of IIIF at the Swiss Federal Archives</p>
<p class="paper_author"> <u>Elena Pilloud</u></p>

<p class="paper_organisation">Swiss Federal Archives, Switzerland</p>

<div ><div class="paper">

<p class="paper_abstract">The Swiss Federal Archives (SFA) are part of the administration of the federal state of Switzerland. They are responsible for the archiving of the business files of the federal authorities, in particular the government, the parliament and the civil service. The access to and the consultation of records by researchers and the public is a cornerstone of their legal mandate. In order to meet the current and future access requirements the SFA pursue a strategy of consequent digital transformation that aims at easing access to archival information for users.</p>
<p class="paper_abstract">Currently, the SFA use IIIF for the website Minutes of the Federal Council (1848-1963), which presents handwritten documents together with AI-powered text recognition. In February 2023, IIIF will also be implemented in the general Online access to the Federal Archives.</p>
<p class="paper_abstract">The SFA began to consider IIIF as an interesting option to provide access to the digital and digitized documents in their repositories in 2018. However, while there were many interesting examples of museums, galleries and libraries on the internet, specific archival use of IIIF was lacking. Considering risks and budgets, the SFA decided to start the journey with IIIF by small steps.</p>
<p class="paper_abstract">The proposed paper will provide a use case of implementation of IIIF in a governmental and administrative context. It will demonstrate the step by step approach taken and discuss the experiences made from the first limited pilot of generating and publishing files, using a working front- and backend infrastructure to the integration of IIIF into the general Online access.</p>
<p class="paper_abstract">On the one hand, the presentation will discuss the various challenges faced on the way. It will pay particular attention to aspects specific to the state and administrative context like the legal framework, administrative business processes, archival standards and the growing online demand for archival material by a multilingual clientele. Within this setting, the presentation will consider the current and future potential of IIIF in general and of Archival IIIF in particular (in which the SFA collaborated with the Swiss Social Archives).</p>
<p class="paper_abstract">On the other hand, the presentation will also assess the practical effects of IIIF for the SFA’s access processes and the user behaviour. What does it mean to enable easy and direct access to documents for researchers deploying IIIF technology? Issues to be discuss here are above all the interoperability with the existing IT infrastructure, the mass digitization of paper repositories, the various types of digital archival material and the interoperability within the OAIS framework.</p>
<p class="paper_abstract">The presentation will conclude with an outline of further development perspectives for IIIF within the SFA’s access setting and of future opportunities of collaboration with partners.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID149'></a><div id='paperID149'>
<div class="paper"><p class="paper_title">Crossing the borders: Multimodal Cross-Domain Approaches using IIIF</p>
<p class="paper_author"> <u>Emilia Di Bernardo</u><sup>1</sup>, <u>Rosemarie Leone</u><sup>2</sup></p>

<p class="paper_organisation"><sup>1</sup>DB SERET srl, Italy; <sup>2</sup>ESA (European Space Agency)</p>

<div ><div class="paper">

<p class="paper_abstract">The DB SERET Company has been an associate member of the IIIF consortium since 2020. The Company has adopted IIIF technology in its services and products, providing for LAM-institutions (Libraries, Archives, Museums). The main focus in its mission is to support digital humanities and bring an active contribution to the preservation and dissemination of cultural heritage.</p>
<p class="paper_abstract">This talk aims to showcase two different IIIF implementation experiences in cross-domain environments, including a variety of digital assets. Firstly, it will focus on the activities preformed for the Region of Sardinia, which has a rich digital collection, very divergent in typologies and provenances (archaeological, museum, archival and library holdings). In this use case, a IIIF-compliant DAM has been implemented. The IIIF pipeline is able to process the URIs and JSON-LD information in order to expose the image collections, with the integration of Mirador and Universal Viewer. It will be highlighted how the server is able to offer maximum effectiveness in terms of use and quality of the original images that are ingested into the DAM. The main interest is to demonstrate how this implementation will disseminate this local culture (which ranges from the material manifestations of Neolithic sites to contemporary works), rich in tradition and relevance for the cultural history of humankind expressed in its great variety of resources, for the benefit of the international community of scholars.</p>
<p class="paper_abstract">Another cross-domain approach using IIIF, very different from the previous one, is the platform implemented in the European Space Agency. Starting from the digitisation project of the ESA Archives, DB SERET has provided a platform capable of gathering annotations using Mirador. The platform has been launched last January 2023: json manifests and annotations of the photographic collection are now available, and the publication of additional resources is imminent.</p>
<p class="paper_abstract">In a sense, it is a work in progress aimed at studying a future intermediate archive, which will be able to preserve the documentary heritage of the Agency. In a nutshell, a great variety of assets can be accessed using the IIIF protocol. A challenging aspect in this scenario is the aggregation of archival materials in a hybrid context, associating other digital assets in the same discovery tool to be explored through the IIIF viewers.</p>
<p class="paper_abstract">The two different experiences will illustrate the use of two different tools: Fontus for the digital resources of the Region of Sardinia and Omnes for ESA, powered by DB SERET. As mentioned earlier, both software integrate IIIF compliant and open source components.</p>
<p class="paper_abstract">Finally, the talk will illustrate a common issue, in the two separate implementations, which is handling of hybrid metadata associated with different digital resources, and the crosswalk needed for the IIIF Presentation API Metadata section.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID172'></a><div id='paperID172'>
<div class="paper"><p class="paper_title">Memorekall-IIIF, a Mirador extension supporting video annotation and a network of IIIF manifests</p>
<p class="paper_author"> <u>Clarisse Bardiot</u><sup>1</sup>, Jacob Hart<sup>1</sup>, David Rouqet<sup>2</sup>, Anthony Geourjon<sup>2</sup></p>

<p class="paper_organisation"><sup>1</sup>Rennes 2 University; <sup>2</sup>Tetras Libre</p>

<div ><div class="paper">

<p class="paper_abstract">In active development since 2015, MemoRekall is a free and open source web app for the</p>
<p class="paper_abstract">documentation and preservation of time-based media. The app is an interface that allows for</p>
<p class="paper_abstract">the redocumenarisation of a primary video resource: the user provides a Youtube or Vimeo</p>
<p class="paper_abstract">video to which they can append intra- and inter-documentary, multi-modal annotations (links,</p>
<p class="paper_abstract">files, other MemoRekall projects etc.). The arrangement of these documents creates a</p>
<p class="paper_abstract">capsule which can be shared and embedded. MemoRekall is a powerful yet simple tool that</p>
<p class="paper_abstract">is already used by a wide range of users: researchers, artists, cultural institutions and</p>
<p class="paper_abstract">mediators, teachers and students.</p>
<p class="paper_abstract">MemoRekall is currently in a new phase of development with the primary goal of rendering it</p>
<p class="paper_abstract">compatible with IIIF. This new version is developed as plugins and patches for the</p>
<p class="paper_abstract">widely-used Mirador viewer and takes full advantage of the latest developments of IIIF’s</p>
<p class="paper_abstract">Presentation API. Our source code is available at https://gitlab.tetras-libre.fr/iiif/ and builds</p>
<p class="paper_abstract">upon a previous Mirador fork supporting video from Tokyo University</p>
<p class="paper_abstract">(https://github.com/2SC1815J/mirador), as well as an annotation plugin for images that we</p>
<p class="paper_abstract">extended to support video (https://github.com/ProjectMirador/mirador-annotations). Our</p>
<p class="paper_abstract">contributions include the update of those projects and their extension to support the</p>
<p class="paper_abstract">annotation of a manifest with another manifest.</p>
<p class="paper_abstract">We propose:</p>
<p class="paper_abstract">- A fully functional video player and annotator within Mirador built upon existing work</p>
<p class="paper_abstract">mentioned above.</p>
<p class="paper_abstract">- The creation of manifest networks: each annotation can refer to another manifest,</p>
<p class="paper_abstract">allowing the creation of complex networks of multi-modal content. Leaning on IIIF’s</p>
<p class="paper_abstract">interoperability capabilities, this also means that networks can be constituted from a</p>
<p class="paper_abstract">number of different sources.</p>
<p class="paper_abstract">- Dynamic network navigation in Mirador: annotations linked to other manifests can be</p>
<p class="paper_abstract">opened directly in the same instance of Mirador, allowing for a seamless navigation</p>
<p class="paper_abstract">experience.</p>
<p class="paper_abstract">We also aim to ensure full retrocompatibility with existing MemoRekall projects in order to</p>
<p class="paper_abstract">support our current user-base and encourage a dialogue between them and the IIIF</p>
<p class="paper_abstract">community.</p>
<p class="paper_abstract">This work has been driven by a concrete case study in the context of the Horizon 2020</p>
<p class="paper_abstract">COESO project. A pilot manifest network was constructed around this project and served as</p>
<p class="paper_abstract">the basis for our working prototype. It has allowed us to follow a practice-led design</p>
<p class="paper_abstract">approach, and has brought to light a number of issues that will be important going forth.</p>
<p class="paper_abstract">Notably, we intend to adopt a git-inspired version control model, allowing for different</p>
<p class="paper_abstract">versions of manifest networks and cumulative and comparative work between different</p>
<p class="paper_abstract">researchers. This addresses a fundamental issue in SHS analysis where each researcher</p>
<p class="paper_abstract">can propose radically different ideas on the same set of resources. Leaning on IIIF,</p>
<p class="paper_abstract">MemoRekall wishes to propose an environment where these perspectives co-exist in a</p>
<p class="paper_abstract">dynamic and intelligible way. This will also pave the way for the integration of AI- and ML-driven corpus analysis tools which shall be the subject of our next phase of</p>
<p class="paper_abstract">development.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>


<tbody id='session_17' >
<tr class="whitebg"><td class="brightbg topline_printonly" align=center valign="middle" width="20%"><span class="fontbold"><a name="15" id="15"></a>2:30pm - 3:30pm</span></td><td class="whitebg topline_printonly leftline_printonly left" valign=top><br /></td></tr>
<tr class="whitebg"><td align=center valign="top" width="20%">
<div style="font-size:4pt; clear:both;">&nbsp;</div>
</td>
<td class="whitebg leftline_printonly left" valign="top" width="80%"><a name='paperID140'></a><div id='paperID140'>
<div class="paper"><p class="paper_title">Adaptation of IIIF for Audio-Visual Resources of Endangered Languages in Japan for Language Preservation</p>
<p class="paper_author"> <u>So Miyagawa</u></p>

<p class="paper_organisation">National Institute for Japanese Language and Linguistics (NINJAL), Japan</p>

<div ><div class="paper">

<p class="paper_abstract">The use of digital technologies to preserve and promote endangered languages is becoming increasingly important in light of the rapid decline of many linguistic traditions. In Japan, where a rich tapestry of endangered languages face the risk of extinction, the adaptation of the International Image Interoperability Framework (IIIF) to include audio and video content offers a promising solution.</p>
<p class="paper_abstract">In Japan, a diverse array of endangered languages, such as the Ryukyuan and Ainu languages, face a similar risk of extinction due to declining numbers of speakers and a lack of preservation and documentation resources. To address this issue, the adaptation of the International Image Interoperability Framework (IIIF) to include audio and video content is seen as a promising solution.</p>
<p class="paper_abstract">The National Institute for Japanese Language and Linguistics (NINJAL) holds many unpublished resources on endangered languages in Japan. To make these resources accessible to the public, NINJAL created the NINJAL Digital Archive (NINDA), based on Omeka S, and equipped with a rich interface featuring three IIIF viewers and RDF metadata output functions. Users can play audio and video content using Universal Viewer and Mirador, with the latter allowing for the display of subtitles, including phonetic representation and translation.</p>
<p class="paper_abstract">The adaptation of IIIF for audio and video files in Japan will promote the sharing and reuse of digital collections. Standardizing the IIIF specifications for these files will provide a consistent way for institutions to represent and share their collections, enabling the development of new access and analysis tools. The use of IIIF will also allow researchers to cross-reference and compare resources from different institutions, increasing overall understanding and knowledge of these endangered languages.</p>
<p class="paper_abstract">However, the adaptation of IIIF for audio and video files will require the development of new technical specifications and tools to represent and interpret audio and video content. Issues such as file format compatibility, syncing of audio and video streams with subtitles, and access to alternate versions and derivatives of content must be addressed in the IIIF specifications for audio and video. Additionally, new metadata standards and controlled vocabularies are needed to describe resources and facilitate discovery and access, including language and dialect identification, speaker information, and cultural context.</p>
<p class="paper_abstract">To conclude, the adaptation of IIIF to audio and video files will require the development of updated technical specifications and tools to provide the representation and interpretation of the audio and video content. As part of the IIIF specifications for audio and video, a number of issues will need to be addressed, including file format compatibility, synchronizing audio and video streams with subtitles, and the ability to access alternate versions and derivatives of content. Additionally, new metadata standards and controlled vocabulary are needed to describe resources and facilitate discovery and access to these valuable resources for heritage learners and linguistic enthusiasts.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID157'></a><div id='paperID157'>
<div class="paper"><p class="paper_title">Introducing Canopy IIIF: A IIIF Sourced Site Generator for Digital Collections</p>
<p class="paper_author"> <u>Mat Jordan</u><sup>1</sup>, <u>Mark Baggett</u><sup>2</sup></p>

<p class="paper_organisation"><sup>1</sup>Northwestern University, United States of America; <sup>2</sup>University of Tennessee, United States of America</p>

<div ><div class="paper">

<p class="paper_abstract">Canopy IIIF (https://canopy-iiif.vercel.app/) is an open source site generator built with IIIF and Next.js. Using only a single IIIF Collection as a data source, Canopy IIIF generates a browseable and searchable digital collection and provides a straightforward solution to adding context to the resources that are referenced. The open source application offers solutions to many use cases including:</p>
<p class="paper_abstract">* Allowing researchers to curate and aggregate content from various providers and add their own context</p>
<p class="paper_abstract">* Providing libraries, museums, and archives a straightforward solution for creating digital exhibits from the works in their repositories</p>
<p class="paper_abstract">* Supplying a small-scale, headless infrastructure for institutions with limited resources to build their own digital collections application</p>
<p class="paper_abstract">Canopy IIIF extends the features of Next.js to produce a full-text search index using FlexSearch, provides support for both IIIF Presentation API 2.x and 3.0 specifications, and automatically generates facets based on the curated metadata labels and values found within Manifests. The platform’s API routes return IIIF collections and allow for users to reference IIIF resources internally and externally. In addition to these features, the product roadmap and planned features include expanding internationalization support, generating interactive maps and timelines based on the presence of navPlace and navDate properties, and leveraging IIIF Content State and Change Discovery APIs. In this presentation, we will demonstrate how Canopy IIIF can be used to host new online exhibits, describe challenges encountered from providing platforms, and discuss future plans for the framework.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID141'></a><div id='paperID141'>
<div class="paper"><p class="paper_title">From transcript to IIIF: fitting plaintext to image via &quot;reverse OCR&quot;</p>
<p class="paper_author"> <u>Matthew McGrattan</u></p>

<p class="paper_organisation">Digirati, United Kingdom</p>

<div ><div class="paper">

<p class="paper_abstract">Many scholars and institutions face a similar technical and sustainability / reuse problem. They have high quality images of manuscripts, early printed books, or other resources which are not easily OCR&#39;d using standard off-the-shelf OCR tools or services. They may also have good quality text for these documents, created through expert or crowd-sourced transcription, stored as plaintext, markdown, or TEI-XML.</p>
<p class="paper_abstract">In many cases these might have been created as part of a digital critical edition, or a one-off scholarly project which has no easy route to sustainable delivery via open IIIF APIs after the project ends. There are many legacy projects of this type.</p>
<p class="paper_abstract">At the moment, there is no easy way to bring these together via a IIIF viewer or IIIF-aware interface if the transcript text contains no spatial information that can be mapped to regions of a IIIF canvas.</p>
<p class="paper_abstract">I will demonstrate one approach in which we use line and word level segmentation information and low quality text from OCR and HTR tools, including Transformer based ML workflows, to retrofit existing transcripts to IIIF images, with bounding boxes suitable for use in IIIF Content Search and IIIF annotation use cases. In this way, existing scholarship can be reused, rather than discarded, and brought together with images via the IIIF Presentation API as part of a sustainable approach to collection delivery.</p>
<p class="paper_abstract">I will present an overview of the approach, including some comparisons of different open source and commodity approaches to generating text and segmentation data and some brief quantitative information summarising the algorithmic approach to matching transcript to image and then demo some real world examples.</p>
<p class="paper_abstract">I will also provide access to a demo where conference attendees can test the approach themselves.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID171'></a><div id='paperID171'>
<div class="paper"><p class="paper_title">IIIF4Research: understanding researchers use of IIIF for</p>
<p class="paper_author"> <u>Lorna Hughes</u><sup>1</sup>, Arlene Healy<sup>2</sup>, Glen Robson<sup>3</sup></p>

<p class="paper_organisation"><sup>1</sup>University of Glasgow, United Kingdom; <sup>2</sup>Trinity College, Dublin; <sup>3</sup>IIIF Consortium</p>

<div ><div class="paper">

<p class="paper_abstract">From 2020-2023, an UK-Ireland joint research networking project &#39;IIIF4Research&#39; brought together researchers and heritage practitioners at universities in the UK and Ireland to investigate the potential for innovative forms of scholarly discussion and interchange offered by the International Image Interoperability Framework (IIIF). The network explored examples of the ways that IIIF enables much easier sharing, annotation and manipulation of digital images from libraries, archives, galleries, and museums across institutional and national boundaries, and offers researchers exciting new possibilities for joint analysis, documentation and discussion of primary materials, situating IIIF in the broader context of digital humanities.</p>
<p class="paper_abstract">The network carried out two key activities: it carried out a survey of researchers&#39; use of iiif, which helped build our understanding of a the use and impact of iiif, and its place in the research life cycle. It also carried out a series of workshops, building dialogue between arts and humanities researchers, curators and information professionals intended to develop research-driven agendas for the deployment and development of IIIF to investigate a wide range of primary materials and archives relevant to humanities research domains. The workshops demonstrated the many different ways in which IIIF supports innovative analysis and commentary on the various types of source material used by arts and humanities researchers, and were the basis for a series of user cases showcasing how the facilities offered by IIIF are valuable in addressing particular research questions.</p>
<p class="paper_abstract">This presentation will discuss the findings of these activities, and how they might facilitate future development of IIIF and encourage scholarly engagement with the potential of IIIF.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID160'></a><div id='paperID160'>
<div class="paper"><p class="paper_title">Implementing Presentation 3.0 in Avalon Media System</p>
<p class="paper_author"> <u>Jon Cameron</u></p>

<p class="paper_organisation">Indiana University, United States of America</p>

<div ><div class="paper">

<p class="paper_abstract">This talk will be an overview of the Avalon Media System team’s recent work to implement Presentation 3 and other IIIF APIs in Avalon software. Work on Avalon Media System’s manifest generation, Avalon’s new general purpose IIIF-native media player, and support applications like the Structural Metadata Editor and Audio Timeliner will be discussed. Updates will also be provided on work towards increasing interoperability with other players, challenges with authentication, and approaches to novel implementation questions.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID112'></a><div id='paperID112'>
<div class="paper"><p class="paper_title">Interoperable Dollhouses: Toying with the Physical Dimension Service</p>
<p class="paper_author"> <u>David Newbury</u></p>

<p class="paper_organisation">Getty, United States of America</p>

<div ><div class="paper">

<p class="paper_abstract">One of the lesser-used features of the IIIF standard is the ability to extend the core capabilities through the use of external services. One of these services, present since early 2014, is thy Physical Dimension service, which allows a IIIF canvas or image to indicate the real-world size of the image or object depicted.</p>
<p class="paper_abstract">To demonstrate the capabilities of this service, I&#39;ve written a small application that lets people create print-ready IIIF images, appropriately scaled for various uses.</p>
<p class="paper_abstract">Do you want a Van Gogh for your Lego Minifigs? A Cassatt for your American Girl? Or do you just want to print out artwork at scale for exhibition planning?</p>
<p class="paper_abstract">This talk will provide visibility to this IIIF capability, showcase how interoperability makes tools like this useful across the field, and hopefully adds another entry to the &quot;Fun with IIIF&quot; list.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID138'></a><div id='paperID138'>
<div class="paper"><p class="paper_title">Manuscriptorium Annotation Module</p>
<p class="paper_author"> <u>Tomáš Klimek</u>, <u>Michael Lužný</u>, <u>Zdeněk Uhlíř</u></p>

<p class="paper_organisation">National Library of the Czech Republic, Czech Republic</p>

<div ><div class="paper">

<p class="paper_abstract">The proposed paper aims to present the use of IIIF in the Manuscriptorium Digital Library, with the main focus put on a brand-new IIIF-compatible tool for document and image annotations.</p>
<p class="paper_abstract">Manuscriptorium has already fully implemented IIIF Image API as well as IIIF Presentation API interfaces, enabling it to display documents directly from the repositories of its content partners. At the same time, Manuscriptorium provides IIIF functionality to those partners that do not have their own IIIF-compatible repositories at their disposal. As a result, all the content aggregated in Manuscriptorium is currently available in the form of IIIF manifests, which can be visualised in any IIIF viewer available. Moreover, the new Manuscriptorium reader along with the integrated Mirador viewer enables its users to view and further work with documents from any IIIF-compatible repository (i.e. even those that are not being aggregated by Manuscriptorium). That is a major milestone in the development of Manuscriptorium as one the biggest aggregators in the field of written cultural heritage, effectively making it possible to view as well as research immense digitised material available on the internet in one dedicated environment, with one prerequisite only: the IIIF compatibility.</p>
<p class="paper_abstract">The new Manuscriptorium Annotation Module allows its users to add notes and comments to the digitised documents which they wish to view or further work with. The development of the module follows on from previous efforts in Manuscriptorium to disseminate personal content as much as possible – Manuscriptorium has already given its users opportunity to create as well as publish their own collections and virtual documents in the IIIF format, which was enabled by a tool for generating IIIF manifests and collections.</p>
<p class="paper_abstract">The annotation module goes even further. Above all, it enables to create annotations that can then be visualised as a fully structured text. Such annotation may relate to a whole virtual document, selected page image or even to a chosen image segment. In addition to that, the module is interconnected with Manuscriptorium IIIF manifest provider, meaning that the system is able to load users&#39; annotations and enrich the original document manifest with them. Such enriched manifest then exists separately with its own URL and can be used both in Manuscriptorium and outside it, provided that the user marks the content as public. It is therefore possible to share the enriched manifest with other Manuscriptorium users as well as users of other systems. In practice, the users will be able to view the document – either in Manuscriptorium, or elsewhere – along with the added annotations.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID109'></a><div id='paperID109'>
<div class="paper"><p class="paper_title">IIIF infrastructure redesign and Mirador upgrade at Harvard Library</p>
<p class="paper_author"> <u>Katie Amaral</u>, <u>Phil Plencner</u>, Doug Simon</p>

<p class="paper_organisation">Harvard University, United States of America</p>

<div ><div class="paper">

<p class="paper_abstract">Part 1: IIIF infrastructure</p>
<p class="paper_abstract">The Library Technology Services (LTS) team at Harvard University has completed designing, building, and implementing the next-generation IIIF image delivery infrastructure for the Harvard Library, Media Presentation Services (MPS). LTS maintains the IIIF infrastructure for delivering images and metadata to Harvard Library platforms such as HOLLIS (the Harvard Library catalog) and Harvard Digital Collections (public access to more than 6 million objects). The IIIF environment is also used by the Harvard Art Museums, HUIT Academic Technology (with integration into Canvas) and Vice Provost for Advances in Learning (VPAL), and is considered critical university-wide infrastructure for teaching and research. The IIIF infrastructure currently supports images, page-turned-objects, file downloads, and annotation delivery. LTS is also working on extending the IIIF infrastructure to support multimedia content including Audio/Visual media.</p>
<p class="paper_abstract">Members of the Harvard team will host a series of presentations and demonstrations to showcase recent work on the IIIF implementation project. Our main focus will be on collaboration, user impact, and engagement with the community. We’ll describe how the system is designed as core generic infrastructure that serves a wide variety of departments across the university, while also supporting local specialized use cases. Engineers will also explain the architecture principles guiding the designs and show the technical plans and system architecture diagrams. A full walkthrough of the entire asset ingest and delivery workflow will be shown with recorded demos. This presentation will be both informative to a technical audience and interesting to a general audience.</p>
<p class="paper_abstract">Part 2: Mirador viewer</p>
<p class="paper_abstract">Harvard is also working on updating our Mirador viewer implementation and improving its underlying architecture. Updating Mirador to the current supported version allows us to leverage a host of features out-of-the-box that previously required heavy customization, including a refined user interface and increased IIIF manifest compatibility. The Viewer team is working closely with the MPS team to integrate the upgraded Mirador viewer with the new IIIF infrastructure. The next-generation IIIF infrastructure generates a v3-compliant manifest that combines a number of metadata fields previously gathered from disparate sources. The richness of the Harvard manifest will unlock support for features that are highly desired by Harvard faculty and students. Behind the scenes a custom oEmbed service is being built to provide an easy way to integrate the Mirador viewer into Harvard Library’s online catalog and digital collections platforms, including HOLLIS (Primo), Harvard Digital Collections (Blacklight) and CURIOSity (Spotlight).</p>
<p class="paper_abstract">The Viewer team also connects with the broader Mirador community to stay up-to-date with best practices and to share lessons learned through our experiences. Working in an open-source context allows us to share our work with the broader IIIF community. One such example of collaboration within the community is the upcoming upgrade of the dependencies of Mirador such as React. Members of the Mirador viewer team will showcase recent improvements to the Mirador viewer, the oEmbed service, and share plans on collaborating closely with the community.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>


<tbody id='session_18' >
<tr class="whitebg"><td class="brightbg topline_printonly" align=center valign="middle" width="20%"><span class="fontbold"><a name="16" id="16"></a>4:00pm - 5:30pm</span></td><td class="whitebg topline_printonly leftline_printonly left" valign=top><br /></td></tr>
<tr class="whitebg"><td align=center valign="top" width="20%">
<div style="font-size:4pt; clear:both;">&nbsp;</div>
</td>
<td class="whitebg leftline_printonly left" valign="top" width="80%"><a name='paperID170'></a><div id='paperID170'>
<div class="paper"><p class="paper_title">IIIF Auth 2.0 - Go with the flow</p>
<p class="paper_author"> <u>The IIIF Editors</u></p>

<p class="paper_organisation">The IIIF Editorial Committee</p>

<div ><div class="paper">

<p class="paper_abstract">IIIF Auth is now the IIIF Authorization Flow API 2.0!</p>
<p class="paper_abstract">This presentation introduces the IIIF Authorization Flow API, for newcomers and for previous implementers of IIIF Auth 1.0.</p>
<p class="paper_abstract">If you need access control for your images, image services, audio, video and other content resources, the IIIF Authorization Flow API provides a set of interaction patterns for IIIF viewers and other client tools to follow, and for publishers to implement as a bridge to existing access control systems (e.g., your institutional single-sign-on).</p>
<p class="paper_abstract">As well as aligning the specification with IIIF Presentation API 3.0, the new Auth 2.0 covers use cases beyond cookie-based access to image services. Any content resource can be protected using IIIF Auth, and the enforcement of access-control doesn’t have to be through cookies. We’ve also responded to changes in browser behaviour for third-party cookies.</p>
<p class="paper_abstract">We’ll look at the new supported use cases and give a brief overview of how to support IIIF Auth, for publishers and for client software developers.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID146'></a><div id='paperID146'>
<div class="paper"><p class="paper_title">Creating the best JPEG2000s for IIIF</p>
<p class="paper_author"> <u>Glen Robson</u><sup>1</sup>, <u>Michael Smith</u><sup>2</sup>, Ruven Pillay<sup>3</sup>, Stefano Cossu<sup>4</sup></p>

<p class="paper_organisation"><sup>1</sup>IIIF, United Kingdom; <sup>2</sup>Kakadu Consultant, USA; <sup>3</sup>C2RMF - Palais du Louvre &amp; IIPImage maintainer, France; <sup>4</sup>Harvard, USA</p>

<div ><div class="paper">

<p class="paper_abstract">JPEG2000 is one of the key image formats used with IIIF. It has the advantage of allowing quick access to regions and sizes and is supported by most IIIF Image Servers. JPEG2000 (jp2) is a flexible format which can be generated through a number of different parameters or recipes and this presentation will look at the impact of passing these to an encoder and show which results in the most performant image for IIIF. Similar parameter choices can be replicated in many of the different encoders including open source and commercial. The IIIF community has been working with Kakadu to evaluate a new extension to the JPEG2000 standards called High Throughput JPEG 2000 (htj2k). The latest results of this work testing different parameters will be presented and their effects on htj2k images and JPEG2000 Part 1 images.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID104'></a><div id='paperID104'>
<div class="paper"><p class="paper_title">Utilising IIIF and Knowledge Bases for Searching for People within Historical Newspaper and Journal Articles</p>
<p class="paper_author"> <u>Michael Jones</u></p>

<p class="paper_organisation">National Library of Wales, United Kingdom</p>

<div ><div class="paper">

<p class="paper_abstract">Historical newspapers and journals are an important source of information for researchers studying the past. However, searching for specific people within these newspapers and journals can be a difficult task due to the large volume of articles and the lack of structured data. Traditional search methods, such as keyword search, are often not sufficient for finding information about specific individuals, especially when the information is spread across multiple articles.</p>
<p class="paper_abstract">The proposed paper will cover the process and results of a research project to create an end-to-end Natural Language Processing (NLP) workflow which allows annotating of names, training of a machine learning model and inference of a corpus of historical data in order to disambiguate names found within a International Image Interoperability Framework (IIIF) document by linking each name to an entity within a knowledge base (Wikidata), through Named Entity Recognition (NER) and Named Entity Linking (NEL).</p>
<p class="paper_abstract">The workflow, which was able to identify over 226 million names, allows researchers to query a database for a specific person or group of people based on a linked-data query, which will generate a collection level IIIF manifest of all articles within the National Library of Wales online Newspaper and Journals which mention that person. The paper will also demonstrate how additional IIIF content can be linked through Linked open data.</p>
<p class="paper_abstract">This process allows researchers to easily collate articles that mentions a person or group of people and have the articles be viewable within a single interface (Universal Viewer or Mirador) and to annotate those articles.</p>
<p class="paper_abstract">The paper will discuss the process of collecting and annotating data, training a machine learning model and limitations of named entity linking. While exploring other research possibilities such as identifying new people and creating new Wikidata articles for those people.</p>
<p class="paper_abstract">Keywords: Linked Open Usable Data (LOUD), machine learning, Discovering IIIF resources</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID159'></a><div id='paperID159'>
<div class="paper"><p class="paper_title">The implementation of the Galleria Borghese VR using the IIIF annotation tool</p>
<p class="paper_author"> <u>Stefania De Vincentis</u>, <u>Martin Critelli</u></p>

<p class="paper_organisation">Ca&#39; Foscari University of Venice, Italy</p>

<div ><div class="paper">

<p class="paper_abstract">The scenario of the Italian IIIF museums is quite uneven due to a still initial phase in the process of digitizing the collections. Nonetheless, the emphasis on how to describe and interpret historical art collections, through the IIIF framework, attracts the attention of institutions whose environments and connotations are heavily decorated. A research project, involving researchers and students of the Venice Center for Digital and Public Humanities, aims to write the IIIF Manifests for the Galleria Borghese digital catalog in Rome.</p>
<p class="paper_abstract">The museum has a distinctive aspect characterized by a peculiar decorative apparatus through which the collection of sculptures, paintings, and furniture is displayed. It is a challenge when describing each object in digital form. In this context, the spatial component plays an important role in highlighting the decorations, stucco, marble, and tiles around the artwork. In order to render the complexity of its spaces, the museum undertook a photographic and photogrammetric digitization project to create navigable virtual models of the rooms.</p>
<p class="paper_abstract">The IIIF ecosystem has been adopted to fit into this model, describing each museum room that was taken with equirectangular photographs. The images were treated as if they were maps to investigate and comment on, guiding the user in an amplified modality of the virtual tour. The first results of this process of describing 360 images will present a comparison of two versions: one using a model that benefits from the last update of the API 3.0, and the other a variant that adopts the simple annotation server. In general, the IIIF Presentation API structure allows creators to build different relations among the resources. This operation is generally accomplished through the annotations element which allows linking the IIIF digital object with other resources.</p>
<p class="paper_abstract">In this case study, by examining the whole Galleria Borghese collection and its physical division, we aimed to integrate the multiple relations that here occur into the different IIIF Manifests. To provide users with a highly immersive experience, we designed the Manifest as a linked path structured in whole-part relations. This approach supports users in browsing between the rooms and the artworks contained there.</p>
<p class="paper_abstract">In accordance with the standard guidelines, we built these relations using the IIIF annotation system along the Mirador viewer. The combination of these frameworks enables to the provision of an end-to-end environment where resources could be described, referenced, and linked with other resources.</p>
<p class="paper_abstract">The contribution is addressed to both the general public and museum professionals. For the latter in particular, the adoption of this model could facilitate the curation of collections as well as collaboration in educational activities by integrating with the Storiiies editor tool.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>
<hr noshade width="100%" class="float_left"><br /><a name='paperID147'></a><div id='paperID147'>
<div class="paper"><p class="paper_title">Mapping an Engineer Through IIIF</p>
<p class="paper_author"> <u>Jenifer Monger</u><sup>2</sup>, <u>Allison Sherrick</u><sup>1</sup>, <u>Diego Alberto Pino Navarro</u><sup>1</sup>, <u>Brenden McCarthy</u><sup>2</sup></p>

<p class="paper_organisation"><sup>1</sup>Metropolitan New York Library Council, United States of America; <sup>2</sup>Rensselaer Polytechnic Institute, United States of America</p>

<div ><div class="paper">

<p class="paper_abstract">Since late 2022, Rensselaer Polytechnic Institute (RPI) has been collaborating with the Metropolitan New York Library Council (METRO) to implement Archipelago, a flexible, extensible, and deeply IIIF-integrated open source digital objects repository software. IIIF APIs and IIIF compliant viewer customizations, including IIIF tile source and W3C Web Annotations, are woven into the system’s architecture and functionality. Smaller shops and teams, regardless of parent institution capacity, require strategic consideration when selecting materials to digitize and exhibit in digital spaces. Library, archive and museums, independent of their size, budget, and mission, need to manage intersecting pragmatic and postulatory concerns regarding sustainability, not only in terms of efforts but also the underlying technologies they utilize. The successful, collaborative implementation of Archipelago in RPI’s repository and archives infrastructure has led to explorations and practicable applications of using IIIF-enabled exhibition and research capabilities to showcase collections in ways previously not possible, with alacrity and confidence in the longer term open accessibility of valuable resources.</p>
<p class="paper_abstract">RPI and METRO have combined their expertise to focus on a use case which highlights a civil engineer traveling and conducting field surveys throughout Peru in the 1860s. Through travelogs, correspondence and detailed journals this project maps and tracks the engineers movements and activities over a 4 year period of time. The importance of this project is immeasurable and can create historical ties between RPI’s early civil engineers who were intrepid travelers from North and South America and among the first engineers to work in and call home different regions of both continents. At present archivists and researchers are afforded only a small window into the world of engineering of the 19th century because the narratives and details of field work remain sparse, disparate and siloed. Empowering discovery and (re)use tools like the IIIF Presentation API and rich IIIF Viewers like Mirador let us emblazon these records into freely accessible digital spaces, wherein researchers can gain glimpses into the global exchange of practices, travels, and ideas that moved through the world and field of engineering.</p>
<p class="paper_abstract">During this presentation, participants will learn about the different ways the RPI and METRO teams incorporate Archipelago’s IIIF dynamic manifest generation, W3C Web Annotations, discovery, custom REST APIs and GeoJSON templates referencing IIIF’s navPlace Extension and extensive LoD to curate and craft a rich digital presentation of RPI’s 19th century engineering travel journals. Presenters will explain how the extensibility of IIIF and the many UI facing tools Archipelago provides, affords archivists the ability to restore a collection&#39;s lost contextualities and allows researchers innovative methods that can open doors to new ones. This presentation will highlight the different ways IIIF standards and implementations empower researchers to uncover and traverse new and established historical narratives, and is intended for both general and technical audiences.</p>
<p class="paper_abstract"></p>

</div>
</div>
</div>
</div>



</td></tr></tbody></td></tr></tbody></td></tr></tbody></td></tr></tbody></td></tr></tbody></table>



[showcase]: {{ site.root_url | absolute_url }}/event/2023/naples/showcase
