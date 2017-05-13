'use strict';

angular
  .module('app')
  .controller('ExampleCtrl', ['$scope',
    function ExampleCtrl($scope){
      var records = [
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37, gender: 'Female', email: 'alice@example.org',  joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26, gender: 'Male',   email: 'bob@example.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 52, gender: 'Male',   email: 'john@example.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel', age: 25, gender: 'Male',   email: 'Dhaval@example.org', joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',   surname: 'Reddy',    age: 30, gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Deng-Kai</a>', surname: 'Chen',     age: 18, gender: 'Male',   email: 'kai@example.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37, gender: 'Female', email: 'alice@example.org',  joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26, gender: 'Male',   email: 'bob@example.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 52, gender: 'Male',   email: 'john@example.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel', age: 25, gender: 'Male',   email: 'Dhaval@example.org', joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',   surname: 'Reddy',    age: 30, gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Deng-Kai</a>', surname: 'Chen',     age: 18, gender: 'Male',   email: 'kai@example.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37, gender: 'Female', email: 'alice@example.org',  joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26, gender: 'Male',   email: 'bob@example.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 52, gender: 'Male',   email: 'john@example.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel', age: 25, gender: 'Male',   email: 'Dhaval@example.org', joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',   surname: 'Reddy',    age: 30, gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Deng-Kai</a>', surname: 'Chen',     age: 18, gender: 'Male',   email: 'kai@example.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37, gender: 'Female', email: 'alice@example.org',  joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26, gender: 'Male',   email: 'bob@example.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 52, gender: 'Male',   email: 'john@example.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel', age: 25, gender: 'Male',   email: 'Dhaval@example.org', joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',   surname: 'Reddy',    age: 30, gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Deng-Kai</a>', surname: 'Chen',     age: 18, gender: 'Male',   email: 'kai@example.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37, gender: 'Female', email: 'alice@example.org',  joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26, gender: 'Male',   email: 'bob@example.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 52, gender: 'Male',   email: 'john@example.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel', age: 25, gender: 'Male',   email: 'Dhaval@example.org', joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',   surname: 'Reddy',    age: 30, gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Deng-Kai</a>', surname: 'Chen',     age: 18, gender: 'Male',   email: 'kai@example.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37, gender: 'Female', email: 'alice@example.org',  joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26, gender: 'Male',   email: 'bob@example.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 52, gender: 'Male',   email: 'john@example.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel', age: 25, gender: 'Male',   email: 'Dhaval@example.org', joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',   surname: 'Reddy',    age: 30, gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Deng-Kai</a>', surname: 'Chen',     age: 18, gender: 'Male',   email: 'kai@example.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37, gender: 'Female', email: 'alice@example.org',  joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26, gender: 'Male',   email: 'bob@example.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 52, gender: 'Male',   email: 'john@example.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel', age: 25, gender: 'Male',   email: 'Dhaval@example.org', joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',   surname: 'Reddy',    age: 30, gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Deng-Kai</a>', surname: 'Chen',     age: 18, gender: 'Male',   email: 'kai@example.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37, gender: 'Female', email: 'alice@example.org',  joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26, gender: 'Male',   email: 'bob@example.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 52, gender: 'Male',   email: 'john@example.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel', age: 25, gender: 'Male',   email: 'Dhaval@example.org', joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',   surname: 'Reddy',    age: 30, gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' }        
      ],

      config = function(cfg){
        var defaults = {
          viewConfig: {
            checkboxColumn: true,
            clickableRows: false,
            columnMenu: false,
            filtering: false,
            numberedColumn: false,
            sortable: false,
            striped: false,
            verticalLines: false
          }
        };

        return $.extend(true, angular.copy(defaults), cfg || {});
      };
      angular.extend($scope, {
        helpers: {
          sortingCfg: {
            sorting: {
              defaultColumn: 'name',
              direction: 'asc',
              highlightColumn: false
            },
            viewConfig: {
              sortable: true
            }
          },
          viewCfg: {
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
          },
          /**
           * Configurable view options
           * @type {Array}
           */
          viewConfig: ['checkboxColumn', 'columnMenu', 'filtering', 'numberedColumn', 'sortable', 'striped', 'verticalLines']
        },
        /**
         * Apply/Remove styling to appearance example
         * @param {String}  option The viewConfig property to modify
         * @param {Boolean} value  The value to set in the viewConfig property
         */
        updateViewStyles: function(option, value){
          $scope.examples[0].config = ($scope.examples[0].config.viewConfig[option] = (value = !value));
        }
      });

      /**
       * Collection of table examples
       * @type {Array}
       */
      $scope.examples = [
        {
          // #stying
          id: 'styling',
          heading: 'Sample Angular Data Grid',
          config: config(),
          columns: [
            { id: 'name',    text: 'Name',    sort: 'str' },
            { id: 'surname', text: 'Surname', sort: 'str', show: false },
            { id: 'age',     text: 'Age',     sort: 'num' },
            { id: 'gender',  text: 'Gender',  sort: 'str', show: false },
            { id: 'joined',  text: 'Joined',  sort: 'date', date: 'longDate' }
          ],
          records: angular.copy(records.slice())
        }
    ];
    }
  ]);
