(function(){

    var stripe = require('@stripe/react-stripe-js');
    var amplitude = require('amplitude-js');
    var ga = require('@analytics/google-analytics');

    
    var app = angular.module('Bella'); //references to Bella module

    var rates = angular.module('store-rate', [ ]); //create the home page module

    app.requires.push('store-rate'); //then push a new requirement to Bella modules

    app.filter('dateToISO', function() {
        return function(input) {
            input = new Date(input).toISOString();
            return input;
        };
    });

})();

