'use strict';


var contactControllers = angular.module('contactControllers', []);

contactControllers.controller('ContactNewCtrl', ['$scope', 'Contact',
  	function($scope, Contact) {
	  		Contact.getTemplateNew(function(template){ 
	    	$scope.schema = template.schema;
	    	$scope.form = template.form;
	   	},function(err){ 
	    	//处理错误 //TODO
	    	alert(err);
   	});

	$scope.model = {"firstname":""};

}]);


contactControllers.controller('ContactListCtrl', ['$scope', 'Contact',
	function($scope, Contact) {
    	$scope.contancts = Contact.getContacts();

    	//For AngularJS ng-class style function  ng-class="styleFunction($index)"
    	$scope.styleFunction = function(index){
		    console.log("styleFunction "+index);
		    var x = index % 5;
		    if (x == 0){
		    	return "hgreen"; 
		    }else if (x == 1){
		    	return "hyellow";
		    }else if (x == 2){
		    	return "hviolet";
		    }else if (x == 3){
		    	return "hblue";
		    }else if (x == 4){
		    	return "hred";
		    }
		   
		 }  
}]);

/////////////ONLY FOR TEST///////////
angular
    .module('contactControllers')
    .controller('newContactCtrl', newContactCtrl)

function newContactCtrl($scope, $resource, $http, $httpParamSerializer, $cookies) {
	$scope.schema = {
	  "type": "object",
	  "title": "Comment",
	  "properties": {
	    "firstname": {
	      "title": "姓",
	      "type": "string",
	      "maxLength": 20,
	      "validationMessage": "请输入姓氏"	
	    },
	    "lastname": {
	      "title": "名",
	      "type": "string",
	      //"pattern": "^\\S+@\\S+$",
	      "description": "真实姓名.",
	      "validationMessage": "请输入名字"	
	    },
	    "comment": {
	      "title": "备注",
	      "type": "string"
	    }
	  },
	  "required": [
	    "firstname",
	    "lastname"
	  ]
	};

  $scope.form = [
	  {
	    "type": "help",
	    "helpvalue": "<div class=\"alert alert-info\">新建联系人</div>"
	  },
	  {
	    "type": "section",
	    "htmlClass": "row",
	    "items": [
	      {
	        "type": "section",
	        "htmlClass": "col-xs-6",
	        "items": [
	          "firstname"
	        ]
	      },
	      {
	        "type": "section",
	        "htmlClass": "col-xs-6",
	        "items": [
	          "lastname"
	        ]
	      }
	    ]
	  },
	  {
	    "key": "comment",
	    "type": "textarea",
	    "placeholder": "备注信息"
	  },
	  {
	    "type": "submit",
	    "style": "btn-info",
	    "title": "保存"
	  }
	];

  $scope.model = {"firstname":"李"};

}