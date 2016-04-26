angular
    .module('homer')
    .controller('loginCtrl', loginCtrl)

function loginCtrl($scope, $resource, $http, $httpParamSerializer, $cookies) {

    

	  // Set default values for our form fields.
	  $scope.city = 'Madrid';
	  $scope.units = 'metric';
	 
	  // Define a function to process form submission.
	  $scope.change = function() {
	    // Fetch the data from the public API through JSONP.
	    // See http://openweathermap.org/API#weather.
	    var url = 'http://api.openweathermap.org/data/2.5/weather';
	    $http.jsonp(url, { params : {
	        q : $scope.city,
	        units : $scope.units,
	        callback: 'JSON_CALLBACK'
	      }}).
	      success(function(data, status, headers, config) {
	        $scope.main = data.main;
	        $scope.wind = data.wind;
	        $scope.description = data.weather[0].description;
	      }).
	      error(function(data, status, headers, config) {
	        // Log an error in the browser's console.
	        $log.error('Could not retrieve data from ' + url);
	      });
	  };
	 
	  // Trigger form submission for first load.
	  $scope.change();
    
    $scope.login1 = function() { 

    	//alert('login');
    	var req = {
 			method: 'GET',
 			url: 'http://apis.baidu.com/apistore/iplookupservice/iplookup?ip=117.89.35.58',
 			headers: {
                "apikey": "f404e0f7a78681b7779a73cbff80e442",
                "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
            }

		}

		$http(req).then(function(response){
            //$http.defaults.headers.common.Authorization= 'Bearer ' + data.data.access_token;
            //$cookies.put("access_token", data.data.access_token);
            //window.location.href="index";
            console.log(response.data);
            //alert(response.data.name);
            //alert(response.data.main.temp);

            window.location.href="#/dashboard";
        }); 
	}

	$scope.login = function() { 

		$scope.data = {grant_type:"password", username: $scope.username, password: $scope.password};
    

    	//alert('login');
    	var req = {
 			method: 'POST',
 			url: 'https://localhost:8244/token',
 			headers: {
                "Authorization": "Basic M0lPTHJtcFBlMmR3MGRUcXdkTWJVSjNvQ2VBYTpqdVUzSzZiSHVhQUtIakZ3aDUyZ09QRHJmemNh",
                "Content-type": "application/x-www-form-urlencoded",
                
            },
            data: $httpParamSerializer($scope.data)
		}

		$http(req).then(function(response){
            console.log(response.data);
            $http.defaults.headers.common.Authorization= 'Bearer ' + response.data.access_token;
            $cookies.put("access_token", response.data.access_token);
            //window.location.href="index";
            //alert(response.data.name);
            //alert(response.data.main.temp);

            window.location.href="#/dashboard";
        })
        .catch(function(response) {
		  console.log(response);
		})
		.finally(function() {
		  console.log("finally finished");
		});
	}

	$scope.gettoken = function() { 

		$scope.data = {grant_type:"password", username: $scope.username, password: $scope.password};
    

    	//alert('login');
    	var req = {
 			method: 'POST',
 			url: 'https://localhost:8244/token',
 			headers: {
                "Authorization": "Basic M0lPTHJtcFBlMmR3MGRUcXdkTWJVSjNvQ2VBYTpqdVUzSzZiSHVhQUtIakZ3aDUyZ09QRHJmemNh",
                "Content-type": "application/x-www-form-urlencoded",
                
            },
            data: $httpParamSerializer($scope.data)
		}

		$http(req).then(function(response){
            console.log(response.data);
            $http.defaults.headers.common.Authorization= 'Bearer ' + response.data.access_token;
            $cookies.put("access_token", response.data.access_token);
            $cookies.put("refresh_token", response.data.refresh_token);
            $cookies.put("expires_in", response.data.expires_in);
            //window.location.href="index";
            alert("access_token:"+response.data.access_token 
            	+"\nrefresh_token:"+response.data.refresh_token
            	+"\nexpires_in:"+response.data.expires_in);
            //alert(response.data.main.temp);
        })
        .catch(function(response) {
		  console.log(response);
		})
		.finally(function() {
		  console.log("finally finished");
		});
	}

	$scope.test = function() { 

		/*var isLoginPage = window.location.href.indexOf("login") != -1;
		if(isLoginPage){
		    if($cookies.get("access_token")){
		        window.location.href = "index";
		    }
		}else{
		    if($cookies.get("access_token")){
		        $http.defaults.headers.common.Authorization= 'Bearer ' + $cookies.get("access_token");
		    }else{
		        window.location.href = "login";
		    }
		}*/

		if($cookies.get("access_token")){
	        $http.defaults.headers.common.Authorization= 'Bearer ' + $cookies.get("access_token");
	    }else{
	        alert("需要先获取access_token");
	    }
		$scope.data = {PhoneNumber:"18006785432", LicenseKey: "0"};
    

    	//alert('login');
    	var req = {
 			method: 'GET',
 			url: 'https://localhost:8244/phoneverify/1.0.0/CheckPhoneNumber?PhoneNumber=18006785432&LicenseKey=0',
 			headers: {
                "Accept": "application/json",
            }
		}

		$http(req).then(function(response){
            console.log(response.data);
            //window.location.href="index";
            alert(response.data);
            //alert(response.data.main.temp);
        })
        .catch(function(response) {
		  console.log(response);
		})
		.finally(function() {
		  console.log("finally finished");
		});
	}

}