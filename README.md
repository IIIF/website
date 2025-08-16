[![Stories in Ready](https://badge.waffle.io/IIIF/website.png?label=ready&title=Ready)](https://waffle.io/IIIF/website)
[![Build Status](https://travis-ci.org/IIIF/website.svg?branch=master)](https://travis-ci.org/IIIF/website)

# Specifications

Markdown Source of iiif.io website. For the IIIF specification see: [IIIF/api](https://github.com/IIIF/api).

## To Debug the Site

 1. `bundle install`

 2. Run `bundle exec rake dev` to compile the site and run a dev server on [http://localhost:4000](http://localhost:4000).

## To Run the Tests

 1. `bundle install`
 2. Install grunt `npm install -g grunt-cli`
 3. Install grunt dependencies `npm install`
 4. Run ```bundle exec rake ci```

## To Publish the Site to iiif.io

Branches are available at http://preview.iiif.io/root/[branch_name]/index.html. The master branch is automatically loaded to the iiif.io website.

## Some Things to Note

 * Much of the site data is in the YAML files in `_data/` (e.g. member institutions, server impls, demos, etc.) make edits there.
 * The latest versions of the APIs are set in `_config.yml`. Change there will get pushed to `.htaccess`, `technical-details/`, and any other links.
 * The website is now split with the root website living here and the api website living in [IIIF/api](https://github.com/IIIF/api). Links internal and external should be in the following forms:
    * Internal relative link inside the root website `[hyperlink text]({{ site.root_url | absolute_url }}/end/point)`
    * link from the root website to the api website (not relative to this repo) `[hyperlink text]({{ site.api_url | absolute_url }}/end/point)`
    * External link `[anchor-text](http://example.com/end/point)`
    * Reference link `[text][link_name]` where link_name is expanded at the bottom of the page.


### Tips and Tricks:
 * Adding [newsitem images](docs/news_images.md)


## Maintenance

### Updating dependencies:

Updating Ruby dependencies:

```bundle update```

Updating node dependencies (`package.json`):

```
# install node update program
npm i -g npm-check-updates
# run update, this will update the package.json
ncu -u
# this will update the installed libraries
npm install
```
