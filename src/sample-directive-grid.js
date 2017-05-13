'use strict';

angular.module('dhaval.directive.grid', [])
/**
 * Returns a true or false value based on the passed argument
 * @param  {Mixed}   value The string or boolean to test
 * @return {Boolean}       The resut of the truthy/falsey test
 */
.filter('isTrue', function(){
  return function isTrue(value){
    if(value == undefined)
      value = true;

    if(typeof value == 'string'){
      return value.toLowerCase() == 'true';
    }

    return !!value;
  };
})
/**
 * Return the value of specified key
 * @param  {String} object   The object to recursively scan
 * @param  {Object} property The object key in dot notation (e.g. `company.parent.id` or `company.id` or `id`)
 * @return {String}          The object key value
 */
.filter('pluck', function(){
  return function pluck(object, property){
    if(!angular.isObject(object) || !angular.isString(property))
      return object;

    var levels = property.split('.'),
        result = object;

    angular.forEach(levels, function(level){
      if((angular.isArray(result) || angular.isObject(result)) && angular.isDefined(result[level]))
        result = result[level];
      else
        result = undefined;
    });

    return result;
  };
})
/**
 * Scores an array of elements based on a given config
 * Used to filter arrays by search terms
 *
 * @param  {Object} obj       Object/Array to score
 * @param  {Object} config    Params to set up the scoring
 *                            config.term {String}: (Mandatory) Term to filter by
 *                            config.min  {Number}: (Optional) Minimum length to start to filter
 *                            config.keys {Array} : (Optional) Keys to consider to score
 *
 * @param  {Number} fuzziness Allows mismatched info to still score the string (default: 0, range: 0 to 1)
 *
 *                            Low fuzziness like 0.01 means a mismatch will drop the score more then a
 *                            fuzziness of something like 0.9.
 *
 *                            No fuzziness:
 *                              "Hello World".score("hello"); -> 0.7172727272727272
 *
 *                            With fuzziness:
 *                              "Hello World".score("Hallo"); -> 0.31799999999999995
 *
 * @return {Array}            Array of records that matched search criteria
 */
.filter('score', ['$filter',
  function($filter){
    return function score(obj, config, fuzziness){

      if(!config)
        return obj;

      if(!config.term || config.min > 0 && config.term.length < config.min)
        return obj;

      var scores = [];

      angular.forEach(obj, function(item, index){
        var values = $filter('map')(config.keys, function(key){
          return item[key];
        });

        if(values && values.length){
          var score = values.join('').score(config.term, fuzziness);

          if(score > 0 && scores.indexOf(config.term) == -1)
            scores.push(item);
        }
      });

      return scores;
    };
  }
])
/**
 * Creates a new array from the results of executing the callback function on
 * each element of the passed array
 * @param  {Array}    elements The array to map
 * @param  {Function} fn       The function to execute on each item
 * @return {Array}    returns  The flattened array
 */
.filter('map', function(){
  return function map(elements, fn){
    var total = elements.length,
        value,
        values = [];

    if(angular.isNumber(total)){
      for(var i = 0, k = total; i < k; i++){
        value = fn(elements[i], i);

        if(value != null){
          values.push(value);
        }
      }
    }else{
      for(var key in elements){
        value = fn(elements[key], key);

        if(value != null){
          values.push(value);
        }
      }
    }

    return values.length > 0 ? [].concat.apply([], values) : values;
  }
})

.directive('angularComponentsGrid', ['$window', '$location', '$filter', '$sce',
  function($window, $location, $filter, $sce){
    return {
      restrict: 'A',
      scope: {
        records: '=',
        columns: '=',
        config: '='
      },
      templateUrl: '/__templates__/sample-directive-grid.html',
      link: function(scope, element, attrs){

        var cfg,
            defaultConfig = {
              labels: {
                empty: 'no records found.',
                loading: 'Loading...'
              },
              filtering: {
                keys: [],
                min: 2
              },
              sorting: {
                highlightColumn: true,
                defaultColumn: null,
                direction: null,
                type: 'str'
              },
              url: null,
              viewConfig: {
                checkboxColumn: false,
                clickableRows: false,
                columnMenu: false,
                filtering: false,
                numberedColumn: false,
                sortable: false,
                striped: false,
                verticalLines: false
              }
            };

        cfg = scope.config = extend(defaultConfig, scope.config);

        angular.extend(scope, {
          /**
           * @type {Boolean}
           */
          ajax: cfg.url,
          /**
           * Determines whether or not to render a checkbox column
           * @type {Boolean}
           */
          checkboxColumn: !!cfg.viewConfig.checkboxColumn,
          /**
           * Determines whether or not an entire row is clickable or not
           * @type {Boolean}
           */
          clickableRows: !!cfg.viewConfig.clickableRows,
          /**
           * Determines whether or not to render a chevron for column show/hide menu
           * @type {Boolean}
           */
          columnMenu: !!cfg.viewConfig.columnMenu,
          /**
           * Helper method to set column width
           * @return {String} The width (percentage) of each column
           */
          columnWidth: function(){
            return (100 / scope.columns.length) + '%';
          }(),
          /**
           * Returns a modified version of the column data used for column menus
           * @return {Array} The collection of column data
           */
          columnsCollection: function(){
            var collection = [],
                filtering = [];

            scope.visible = [];

            angular.forEach(scope.columns, function(column, index){
              var show = $filter('isTrue')(column.show),
                  uid = index;

              collection.push({
                id: column.id,
                uid: uid,
                menu: false,
                show: show,
                text: column.text || ''
              });

              if(show)
                scope.visible.push(column.id);

              filtering.push(column.id);
            });

            if(!cfg.filtering.keys.length)
              cfg.filtering.keys = filtering;

            return collection;
          }(),
          /**
           * Process row click event and dispatch the event
           * @param {Object} event The event object
           */
          dispatch: function(event){
            var element = event.target,
                target = config.target,
                url = config.url;

            if(element.tagName !== 'A'){
              event.preventDefault();
              event.stopPropagation();

              if(url[0] === '#')
                return $location.path(url.slice(1));

              if(target == '_blank')
                return $window.open(url);

              $window.location.href = url;
            }
          },

          /**
           * Determines if the table will contain input filter
           * @type {Boolean}
           */
          filtering: !!cfg.viewConfig.filtering,

          /**
           * Fires the column format helper method from the parent scope
           * @param  {Function} filter The defined filter function
           * @param  {Mixed}    data   The column data
           * @return {Mixed}           The formatted data
           */
          format: function(helper, record, key){
            if(!helper)
              return;

            var data = $filter('pluck')(record, key),
                formatted = scope.$parent[''+helper](data, record, key);

            return scope.process(formatted);
          },
          /**
           * Labels
           * @type {Object}
           */
          labels: cfg.labels,
          /**
           * Determines whether or not to render a line number column
           * @type {Boolean}
           */
          numberedColumn: !!cfg.viewConfig.numberedColumn,

          /**
           * Permit HTML strings to be injected into table cells
           * @param  {String} html The HTML content string
           * @return {String}      The original supplied HTML string
           */
          process: function(html){
            if(!angular.isString(html))
              html = ''+html;

            return $sce.trustAsHtml(html);
          },
          /**
           * Pluck helper for directive view
           * @param  {String} obj  The object key in dot notation (e.g. `company.id` or `id`)
           * @param  {Object} prop The object to recursively scan
           * @return {String}      The object key value
           */
          pluck: function(record, key){
            return $filter('pluck')(record, key);
          },
          /**
           * Manage selected items
           * @type {Array}
           */
          selected: [],
          /**
           * Show/Hide column menus
           * @param  {Object} column The column to render the menu to
           * @return {Boolean}       The true or false value
           */
          showColumnMenu: function(column){
            angular.forEach(scope.columnsCollection, function(col){
              col.menu = column.id !== col.id ? false : (col.menu = !col.menu);
            });

            return column.menu;
          },
          /**
           * Determines if the table will render striped rows
           * @type {Boolean}
           */
          striped: !!cfg.viewConfig.striped,
          verticalLines: !!cfg.viewConfig.verticalLines
        });



        /*--------------------------
          Column sorting
         --------------------------*/

        angular.extend(scope, {
          /**
           * Determines whether or not to apply highlighting to sorted columns
           * @type {Boolean}
           */
          highlightColumn: !!cfg.sorting.highlightColumn,
          /**
           * Sort placeholders
           * @type {Object}
           */
          sort: {
            /**
             * Current sort direction
             * @type {String}
             */
            direction: cfg.sorting && cfg.sorting.direction || 'asc',
            /**
             * The column id of the default sort column
             * @type {String}
             */
            key: cfg.sorting && cfg.sorting.defaultColumn || null,
            /**
             * Current sort type
             * @type {String}
             */
            type: cfg.sorting && cfg.sorting.type || ''
          },
          /**
           * Sorts a specific
           * @param  {String} key         The key name to sort inside the ng-repeat
           * @param  {String} type        The sort type (e.g. `str`, `num`, `date`)
           * @param  {String} direction   The direction to sort (e.g. `asc` or `desc`)
           * @param  {Bool}   doNotChange OPTIONAL. does not revert the direction of sorting when calling to method
           * @return {Object}             The record collection
           */
          sortColumn: function(key, type, direction, doNotChange){
            scope.sort.key       = key       || scope.sort.key;
            scope.sort.type      = type      || scope.sort.type;
            scope.sort.direction = direction || scope.sort.direction;

            if(!scope.sort.type)
              return;

            var fn = this.sortFunc(scope.sort.type),
                direction = (scope.sort.direction == 'asc') ? -1 : 1;

            angular.forEach(scope.records, function(record){
              record.sortKey = fn(record[scope.sort.key]);
            });

            scope.records.sort(function(a, b){
              if(a.sortKey < b.sortKey)
                return -direction;

              if(a.sortKey > b.sortKey)
                return direction;

              return 0;
            });

            if(!doNotChange)
              scope.sort.direction = (scope.sort.direction === 'asc') ? 'desc' : 'asc';

            return scope.records;
          },
          /**
           * Returns the sort function of the sort type
           * @param  {String}   type The type of sort function to return
           * @return {Function}      The sort function
           */
          sortFunc: function(type){
            var key;

            if(type == 'date'){
              key = function(value){
                return new Date(value);
              };
            }
            else if(type == 'int'){
              key = function(value){
                return parseInt(value, 10);
              };
            }
            else if(type == 'num'){
              key = function(value){
                return parseFloat(value);
              };
            }
            else{
              key = function(value){
                value = angular.isArray(value) ? value.join('') : '' + value;
                return value && value.replace(/^\s+|\s+$/g, '').toUpperCase() || '';
              };
            }

            return key;
          },
          /**
           * Sort helper function for managing our click target
           * @param  {Object} event The event object
           * @param  {String} id    The columns unique id property (e.g. column.id -> id: 'name' )
           * @param  {String} sort  The columns defined sort type (e.g. column.sort -> sort: 'str')
           * @return {Mixed}        The sort function or false if intended to open the show/hide column menu
           */
          sortHelper: function(event, id, sort){
            if(!sort || !cfg.viewConfig.sortable)
              return;

            var target = event.target;

            if(target.classList.contains('.ui-table-columns-menu') || target.classList.contains('.icon-add'))
              return false;

            if(document.querySelector(event.target.className)) {
              if(document.querySelector(event.target.className).parents('.ui-table-columns-menu').length) {
                return false;
              }
            }

            return scope.sortColumn(id, sort);
          }
        });


          var sorting = cfg.sorting;

          function extend(){
              for(var i=1; i<arguments.length; i++)
                  for(var key in arguments[i])
                      if(arguments[i].hasOwnProperty(key))
                          arguments[0][key] = arguments[i][key];
              return arguments[0];
          }

          scope.sortColumn(sorting.defaultColumn, sorting.type, sorting.direction);

        scope.$watch(function(scope){
          return scope.records && scope.records.length
        }, function(newVal, oldVal){
          if(newVal != oldVal && newVal > 0)
            scope.sortColumn(null, null, null, true);
        });

        scope.$watch('config', function(n, o){
          cfg = scope.config = extend(defaultConfig, n);

          var viewCfg = cfg.viewConfig,
              sortCfg = cfg.sorting;

          angular.extend(scope, {
            columnMenu: !!viewCfg.columnMenu,
            checkboxColumn: !!viewCfg.checkbosxColumn,
            filtering: !!viewCfg.filtering,
            highlightColumn: !!sortCfg.highlightColumn,
            numberedColumn: !!viewCfg.numberedColumn,
            sortable: !!viewCfg.sortable,
            striped: !!viewCfg.striped,
            ajax: !!cfg.url,
            url: cfg.url,
            verticalLines: !!viewCfg.verticalLines
          });

          if(scope.ajax && !scope.updating){
            scope.updating = true;
            scope.fetchPage();
          }
        });
      }
    }
  }
]);

String.prototype.score = function(e,t){ if(this==e){return 1}if(e==""){return 0}var n=0,r=e.length,i=this,s=i.length,o,u,a=1,f;for(var l=0,c,h,p,d,v,m;l<r;++l){p=e.charAt(l);d=i.indexOf(p.toLowerCase());v=i.indexOf(p.toUpperCase());m=Math.min(d,v);h=m>-1?m:Math.max(d,v);if(h===-1){return 0}else{c=.1}if(i[h]===p){c+=.1}if(h===0){c+=.6;if(l===0){o=1}}else{if(i.charAt(h-1)===" "){c+=.8}}i=i.substring(h+1,s);n+=c}u=n/r;f=(u*(r/s)+u)/2;f=f/a;if(o&&f+.15<1){f+=.15}return f };
