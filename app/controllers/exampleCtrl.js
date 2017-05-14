'use strict';

angular
  .module('app')
  .controller('ExampleCtrl', ['$scope',
    function ExampleCtrl($scope){

      var records = [
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37,  gender: 'Female', email: 'alice@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26,  gender: 'Male',   email: 'bob@fb.org',        joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 11,  gender: 'Male',   email: 'john@yahoo.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel',    age: 25,  gender: 'Male',   email: 'Dhaval@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',    surname: 'Reddy',    age: 40,  gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">April</a>',    surname: 'Chen',     age: 88,  gender: 'Male',   email: 'April@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Koala</a>',    surname: 'Lampoor',  age: 91,  gender: 'Female', email: 'Koala@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Andy</a>',     surname: 'Smith',    age: 47,  gender: 'Male',   email: 'Andy@example.org',  joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Richard</a>',  surname: 'Wang',     age: 69,  gender: 'Male',   email: 'Richard@fb.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Sundar</a>',   surname: 'Chandra',  age: 101, gender: 'Male',   email: 'Sundar@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Mary</a>',     surname: 'Pham',     age: 70,  gender: 'Male',   email: 'Mary@yahoo.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Krish</a>',    surname: 'Shah',     age: 108, gender: 'Male',   email: 'Krish@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Kiran</a>',    surname: 'Pai',      age: 56,  gender: 'Female', email: 'Kiran@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Jakie</a>',    surname: 'Chan',     age: 65,  gender: 'Male',   email: 'Jakie@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">David</a>',    surname: 'Walsh',    age: 45,  gender: 'Male',   email: 'David@fb.org',      joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Kavin</a>',    surname: 'Curd',     age: 88,  gender: 'Male',   email: 'Kavin@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Geoffrey</a>', surname: 'Smith',    age: 91,  gender: 'Male',   email: 'Geoffrey@yahoo.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Jose</a>',     surname: 'Singer',   age: 47,  gender: 'Male',   email: 'Jose@example.org',  joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Enrique</a>',  surname: 'Wang',     age: 69,  gender: 'Male',   email: 'Enrique@fb.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Pietro</a>',   surname: 'St',       age: 101, gender: 'Male',   email: 'Peitro@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37,  gender: 'Female', email: 'alice@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26,  gender: 'Male',   email: 'bob@fb.org',        joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 11,  gender: 'Male',   email: 'john@yahoo.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel',    age: 25,  gender: 'Male',   email: 'Dhaval@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',    surname: 'Reddy',    age: 40,  gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">April</a>',    surname: 'Chen',     age: 88,  gender: 'Male',   email: 'April@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Koala</a>',    surname: 'Lampoor',  age: 91,  gender: 'Female', email: 'Koala@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Andy</a>',     surname: 'Smith',    age: 47,  gender: 'Male',   email: 'Andy@example.org',  joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Richard</a>',  surname: 'Wang',     age: 69,  gender: 'Male',   email: 'Richard@fb.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Sundar</a>',   surname: 'Chandra',  age: 101, gender: 'Male',   email: 'Sundar@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Mary</a>',     surname: 'Pham',     age: 70,  gender: 'Male',   email: 'Mary@yahoo.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Krish</a>',    surname: 'Shah',     age: 108, gender: 'Male',   email: 'Krish@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Kiran</a>',    surname: 'Pai',      age: 56,  gender: 'Female', email: 'Kiran@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Jakie</a>',    surname: 'Chan',     age: 65,  gender: 'Male',   email: 'Jakie@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">David</a>',    surname: 'Walsh',    age: 45,  gender: 'Male',   email: 'David@fb.org',      joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Kavin</a>',    surname: 'Curd',     age: 88,  gender: 'Male',   email: 'Kavin@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Geoffrey</a>', surname: 'Smith',    age: 91,  gender: 'Male',   email: 'Geoffrey@yahoo.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Jose</a>',     surname: 'Singer',   age: 47,  gender: 'Male',   email: 'Jose@example.org',  joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Enrique</a>',  surname: 'Wang',     age: 69,  gender: 'Male',   email: 'Enrique@fb.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Pietro</a>',   surname: 'St',       age: 101, gender: 'Male',   email: 'Peitro@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37,  gender: 'Female', email: 'alice@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26,  gender: 'Male',   email: 'bob@fb.org',        joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 11,  gender: 'Male',   email: 'john@yahoo.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel',    age: 25,  gender: 'Male',   email: 'Dhaval@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',    surname: 'Reddy',    age: 40,  gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">April</a>',    surname: 'Chen',     age: 88,  gender: 'Male',   email: 'April@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Koala</a>',    surname: 'Lampoor',  age: 91,  gender: 'Female', email: 'Koala@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Andy</a>',     surname: 'Smith',    age: 47,  gender: 'Male',   email: 'Andy@example.org',  joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Richard</a>',  surname: 'Wang',     age: 69,  gender: 'Male',   email: 'Richard@fb.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Sundar</a>',   surname: 'Chandra',  age: 101, gender: 'Male',   email: 'Sundar@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Mary</a>',     surname: 'Pham',     age: 70,  gender: 'Male',   email: 'Mary@yahoo.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Krish</a>',    surname: 'Shah',     age: 108, gender: 'Male',   email: 'Krish@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Kiran</a>',    surname: 'Pai',      age: 56,  gender: 'Female', email: 'Kiran@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Jakie</a>',    surname: 'Chan',     age: 65,  gender: 'Male',   email: 'Jakie@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">David</a>',    surname: 'Walsh',    age: 45,  gender: 'Male',   email: 'David@fb.org',      joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Kavin</a>',    surname: 'Curd',     age: 88,  gender: 'Male',   email: 'Kavin@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Geoffrey</a>', surname: 'Smith',    age: 91,  gender: 'Male',   email: 'Geoffrey@yahoo.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Jose</a>',     surname: 'Singer',   age: 47,  gender: 'Male',   email: 'Jose@example.org',  joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Enrique</a>',  surname: 'Wang',     age: 69,  gender: 'Male',   email: 'Enrique@fb.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Pietro</a>',   surname: 'St',       age: 101, gender: 'Male',   email: 'Peitro@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37,  gender: 'Female', email: 'alice@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26,  gender: 'Male',   email: 'bob@fb.org',        joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 11,  gender: 'Male',   email: 'john@yahoo.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel',    age: 25,  gender: 'Male',   email: 'Dhaval@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',    surname: 'Reddy',    age: 40,  gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">April</a>',    surname: 'Chen',     age: 88,  gender: 'Male',   email: 'April@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Koala</a>',    surname: 'Lampoor',  age: 91,  gender: 'Female', email: 'Koala@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Andy</a>',     surname: 'Smith',    age: 47,  gender: 'Male',   email: 'Andy@example.org',  joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Richard</a>',  surname: 'Wang',     age: 69,  gender: 'Male',   email: 'Richard@fb.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Sundar</a>',   surname: 'Chandra',  age: 101, gender: 'Male',   email: 'Sundar@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Mary</a>',     surname: 'Pham',     age: 70,  gender: 'Male',   email: 'Mary@yahoo.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Krish</a>',    surname: 'Shah',     age: 108, gender: 'Male',   email: 'Krish@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Kiran</a>',    surname: 'Pai',      age: 56,  gender: 'Female', email: 'Kiran@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Jakie</a>',    surname: 'Chan',     age: 65,  gender: 'Male',   email: 'Jakie@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">David</a>',    surname: 'Walsh',    age: 45,  gender: 'Male',   email: 'David@fb.org',      joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Kavin</a>',    surname: 'Curd',     age: 88,  gender: 'Male',   email: 'Kavin@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Geoffrey</a>', surname: 'Smith',    age: 91,  gender: 'Male',   email: 'Geoffrey@yahoo.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Jose</a>',     surname: 'Singer',   age: 47,  gender: 'Male',   email: 'Jose@example.org',  joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Enrique</a>',  surname: 'Wang',     age: 69,  gender: 'Male',   email: 'Enrique@fb.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Pietro</a>',   surname: 'St',       age: 101, gender: 'Male',   email: 'Peitro@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Andy</a>',     surname: 'Smith',    age: 47,  gender: 'Male',   email: 'Andy@example.org',  joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Richard</a>',  surname: 'Wang',     age: 69,  gender: 'Male',   email: 'Richard@fb.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Sundar</a>',   surname: 'Chandra',  age: 101, gender: 'Male',   email: 'Sundar@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Mary</a>',     surname: 'Pham',     age: 70,  gender: 'Male',   email: 'Mary@yahoo.org',    joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Krish</a>',    surname: 'Shah',     age: 108, gender: 'Male',   email: 'Krish@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Kiran</a>',    surname: 'Pai',      age: 56,  gender: 'Female', email: 'Kiran@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Jakie</a>',    surname: 'Chan',     age: 65,  gender: 'Male',   email: 'Jakie@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">David</a>',    surname: 'Walsh',    age: 45,  gender: 'Male',   email: 'David@fb.org',      joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Kavin</a>',    surname: 'Curd',     age: 88,  gender: 'Male',   email: 'Kavin@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Geoffrey</a>', surname: 'Smith',    age: 91,  gender: 'Male',   email: 'Geoffrey@yahoo.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Jose</a>',     surname: 'Singer',   age: 47,  gender: 'Male',   email: 'Jose@example.org',  joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">Enrique</a>',  surname: 'Wang',     age: 69,  gender: 'Male',   email: 'Enrique@fb.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Pietro</a>',   surname: 'St',       age: 101, gender: 'Male',   email: 'Peitro@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Alice</a>',    surname: 'Cooper',   age: 37,  gender: 'Female', email: 'alice@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Bob</a>',      surname: 'Bar',      age: 26,  gender: 'Male',   email: 'bob@fb.org',        joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">John</a>',     surname: 'Smith',    age: 11,  gender: 'Male',   email: 'john@yahoo.org',    joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Dhaval</a>',   surname: 'Patel',    age: 25,  gender: 'Male',   email: 'Dhaval@example.org',joined: '2014-02-06T09:31:09.839Z' },
        { name: '<a href="">Hiren</a>',    surname: 'Reddy',    age: 40,  gender: 'Male',   email: 'Hiren@example.org', joined: '2002-06-20T19:21:00.839Z' },
        { name: '<a href="">April</a>',    surname: 'Chen',     age: 88,  gender: 'Male',   email: 'April@gmail.org',   joined: '2008-11-12T06:02:10.839Z' },
        { name: '<a href="">Koala</a>',    surname: 'Lampoor',  age: 91,  gender: 'Female', email: 'Koala@yahoo.org',   joined: '2014-02-06T09:31:09.839Z' }
      ];

      $scope.CurrentPage = 1;
      $scope.TotalPage = 0;
      $scope.PerPage = 10;
      $scope.recordData = [];

      $scope.examples = [{
        id: 'styling',
        heading: 'Sample Angular Data Grid',
        config: config(),
        columns: [
          { id: 'name',    text: 'Name',    sort: 'str' },
          { id: 'surname', text: 'Surname', sort: 'str', show: false },
          { id: 'age',     text: 'Age',     sort: 'num' },
          { id: 'gender',  text: 'Gender',  sort: 'str', show: false },
          { id: 'joined',  text: 'Joined',  sort: 'date', date: 'longDate' }
        ]
      }];

      $scope.GetRecordData = function(page) {
        $scope.TotalPage = Math.floor(records.length/$scope.PerPage);
        $scope.IsLoading = true;
        if(page === 1) {
          $scope.examples[0].records = records.slice(0,$scope.PerPage);
        } else if(page <= $scope.TotalPage) {
          var startIndex = (page-1) * $scope.PerPage;
          $scope.examples[0].records = $scope.examples[0].records.concat(records.slice(startIndex,startIndex+$scope.PerPage));
        }
        $scope.IsLoading = false;
      };

      $scope.addMoreOnScroll = function () {
       if ($scope.CurrentPage < $scope.TotalPage) {
           $scope.CurrentPage += 1;
           $scope.GetRecordData($scope.CurrentPage);
       }
      };

    $scope.GetRecordData($scope.CurrentPage);

    function extend() {
      for(var i=1; i<arguments.length; i++)
          for(var key in arguments[i])
              if(arguments[i].hasOwnProperty(key))
                  arguments[0][key] = arguments[i][key];
      return arguments[0];
    };

    function config(cfg) {
      var defaults = {
        viewConfig: {
          checkboxColumn: true,
          clickableRows: false,
          columnMenu: false,
          filtering: false,
          numberedColumn: true,
          sortable: false,
          striped: false,
          verticalLines: false
        }
      };
      return extend(angular.copy(defaults), cfg || {});
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
        viewConfig: [
          {key:"columnMenu",  label:"Column Menu (Click on + sign at column header on mouse hover)"},
          {key:"filtering",   label:"Enable Filtering (Search across all columns)"},
          {key:"sortable",    label:"Sort Columns"},
          {key:"striped",     label:"Stripped"}
        ]
      },
      /**
       * Apply/Remove styling to appearance example
       * @param {String}  option The viewConfig property to modify
       * @param {Boolean} value  The value to set in the viewConfig property
       */
      updateViewStyles: function(option, value) {
        $scope.examples[0].config = ($scope.examples[0].config.viewConfig[option.key] = (value = value));
      }
    });
    }
  ])

  .directive("whenScrolled", function() {
      return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
          // we get a list of elements of size 1 and need the first element
          var raw = elem[0];

          // we load more elements when scrolled past a limit
          elem.bind("scroll", function() {
            if(raw.scrollTop+raw.offsetHeight-1 >= raw.scrollHeight) {
              scope.loading = true;
              // we can give any function which loads more elements into the list
              scope.$apply(attrs.whenScrolled);
            }
          });
        }
      }
});
