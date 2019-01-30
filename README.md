# uqlibrary-fryer-search

[![Codeship Status for uqlibrary/uqlibrary-fryer-search](https://app.codeship.com/projects/52278e70-0673-0137-ccfc-16229ee91c5b/status?branch=polymer1.0)](https://codeship.com/projects/325638)
[![Dependency Status](https://david-dm.org/uqlibrary/uqlibrary-fryer-search.svg)](https://david-dm.org/uqlibrary/uqlibrary-fryer-search)
[![Dev Dependency Status](https://david-dm.org/uqlibrary/uqlibrary-fryer-search/dev-status.svg)](https://david-dm.org/uqlibrary/uqlibrary-fryer-search?type=dev)

uqlibrary-fryer-search is a search form for Fryer Library

For a demo and full property rundown see [GH Pages](http://uqlibrary.github.io/uqlibrary-fryer-search/uqlibrary-fryer-search/).

This component is only used in Drupal, called from [Search manuscript collections](https://web.library.uq.edu.au/locations-hours/fryer-library/search-manuscript-collections).

## Getting Started

Install Node.JS and run the following:

```sh
npm install -g bower web-component-tester polymer-cli
npm install
bower install
```

## Developing

- Please adhere to the Polymer code style guide provided at [Style Guide](http://polymerelements.github.io/style-guide/).
- Colors and common styles are imported (bower install) from [uqlibrary-styles](http://github.com/uqlibrary/uqlibrary-styles).
- A preview of the component can be viewed locally by running `npm start`. Use the second URL from the command output.
- GitHub pages should be updated after every commit to Master by running the "generate-gh-pages.sh" in the /bin/ directory

## Testing

Tests are run using the Web Component Tester.

```sh
npm test
```

## Deployment

Commit to GitHub, create a new release, then rebuild and deploy [Reusable Components](https://github.com/uqlibrary/uqlibrary-reusable-components).

ITS Drupal will automatically pick up a new version of prod Reusable Components.
