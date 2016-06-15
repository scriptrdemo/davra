/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var http = require("http");
var davraService = ""; //URL Provided by davra to retrieve geolocation, not to be committed
// invoke the healthService third party API
var callResult = http.request({"url":davraService});
// parse the result of the call using regular JSON object
var davraInfo = JSON.parse(callResult.body).records;

var myArray = [];

davraInfo.forEach(function(entry){
  	 if(parseInt(entry["statusCode"]) == 2) {
       var x = {
         latitude: entry.latitude, 
         longitude: entry.longitude, 
         description: entry.description,
         statusString: entry.statusString, 
         deviceId: entry.deviceId
       };
       myArray.push(x);
     }
});
publish('pushDavraData',myArray, false);
return myArray;			