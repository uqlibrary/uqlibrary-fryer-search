uqlibrary-ga
============
Web component for Google Analytics
Full documentation can be found at [GitHub Pages](http://uqlibrary.github.io/uqlibrary-ga).

### Usage

```
    <uqlibrary-ga tracking-id='UA-1234-5' website-url='http://www.test.com/app' app-name='TestApp' cookie-domain='test.com'></uqlibrary-ga>
```

Tracking id, website-url, app-name are set to be replaced at build time or as attributes to a required value.
At build time use following tokens to replace: 
- <GA-TRACKING-ID>
- <GA-WEBSITE-URL>
- <GA-COOKIE-DOMAIN>

### Getting Started
Please, note .bowerrc installs dependencies to ../ directory. It's recommended to develop this component in a sub directory, eg  .development/uqlibrary-ga-dev/uqlibrary-ga/ not to pollute your development directory with all bower dependencies.
 
Install Node.JS and run the following oneliner in the project directory:
```sh
npm install -g bower && bower install
```

### Developing
- Please adhere to the Polymer code style guide provided at [Style Guide](http://polymerelements.github.io/style-guide/). 
- Colors and common styles are imported (bower install) from [uqlibrary-styles](http://github.com/uqlibrary/uqlibrary-hours).
- GitHub pages should be updated after every commit to Master by running the "generate-gh-pages.sh" in the /bin/ directory

### Testing
Tests are run using the Web Component Tester. Either navigate to /tests/index.html in a browser or using the command line:
```sh
wct --local all
```