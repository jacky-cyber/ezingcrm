'use strict';

/* Services */

var contactServices = angular.module('contactServices', ['ngResource']);

contactServices.factory('Contact', ['$resource',
  function($resource){
    return $resource('data/contact/:action.json', {}, {
      getTemplateNew: {method:'GET', params:{action:'contact-template-new'}, isArray:false},
      getContacts: {method:'GET', params:{action:'contacts'}, isArray:true},
    });
  }]);