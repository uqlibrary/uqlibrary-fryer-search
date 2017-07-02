(function () {
  Polymer({
    is: 'uqlibrary-fryer-search',

    properties: {
      /**
       * Application name for google analytics records.
       */
      gaAppName: {
        type: String,
        value: 'FryerSearch'
      },

      /*
       * Search type specified in user call of template.
       */
      searchType: {
        type: String,
        observer: '_searchTypeChanged'
      },

      /*
       * Values for selected search type.
       * This will be set to one of the values of _sources.
       */
      _selectedSource: {
        type: Object
      },

      /**
       * Values for each possible search type.
       */
      _sources: {
        type: Object,
        value: {
          primo: {
            urlRoot: 'https://search.library.uq.edu.au/primo-explore/search?query=any,contains,',
            urlAppend: '&tab=61uq_all&search_scope=61UQ_All&sortby=rank&vid=61UQ&facet=library,include,61UQ_FRY&facet=rtype,include,Manuscripts&offset=0',
            searchLabel: 'Search for manuscript material'
          },

          espace: {
            urlRoot: 'http://espace.library.uq.edu.au/list/?search_keys[0]=',
            urlAppend: '&sort_by=searchKey0&cat=quick_filter&search_keys[core_8]=UQ:278419',
            searchLabel: 'Search for digitised material'
          },

          google: {
           urlRoot: 'https://www.google.com.au/#q=',
           urlAppend: '+site:www.library.uq.edu.au/fryer-library/ms',
           searchLabel: 'Search all manuscript finding aids'
         }

        }
      },

      /*
       * Makes the Return Key fire search.
       */
      _inputKeywordTarget: {
        type: Object,
        value: function () {
          return this.$.searchKeywordInput;
        }
      }

    },

    
    /*
     * Builds the url and opens it.
     */
    _searchActivated: function(e) {

      var searchText = this.$.searchKeywordInput.value;

      var searchUrl = this._selectedSource.urlRoot + searchText;
      if (this._selectedSource.urlAppend) {
        searchUrl += this._selectedSource.urlAppend;
      }
      searchUrl = encodeURI(searchUrl);

      this.async(function () {
        window.open(searchUrl, '_blank');
      }, 100);

      this.$.ga.addEvent(this.searchType, searchText);
    },

    /*
     * Chooses the correct search details by parameter.
     */
    _setSelectedSearchType: function(aSearchType) {
      this._selectedSource = this._sources[aSearchType];
    },


    /*
     * Sets the selected source according to the search type.
     */
    _searchTypeChanged: function() {
      if (typeof(this._sources) !== undefined && this._sources.hasOwnProperty(this.searchType)) {
        this._setSelectedSearchType(this.searchType);
      }

    },
    

    ready: function() {
      // When a valid search type is not provided, defaults to google.
      if (typeof(this.searchType) !== undefined && this._selectedSource === undefined) {
        this.searchType = 'google';
        this._setSelectedSearchType(this.searchType);
      }

    }

  });
})();