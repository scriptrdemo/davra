/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var log = require("log");
var http = require("http");
var geo = require("./lib/geolib");
var geolib = new geo.Geolib();
var config = require("./config");
var dweet= require("./dweet");

log.setLevel("INFO");

//URL Provided by davra to retrieve geolocation
var davraService = "http://54.243.241.106:58000/eem/api/v1/gps";

//Invoke the healthService third party API
var callResult = http.request({"url":davraService});

//Parse the result of the call using regular JSON object
var davraInfo = JSON.parse(callResult.body).records;


var boundingBox = storage.global.devicesBoundingBox;
log.info("Bounding Box: "+boundingBox);
if(boundingBox == null)
  boundingBox = config.boundingBox.points;
else 
  boundingBox = JSON.parse(storage.global.devicesBoundingBox);

var devicesInsideBoxHistory =  storage.global.devicesInsideBoxHistory;
if(devicesInsideBoxHistory == null)
  devicesInsideBoxHistory = [];
else 
  devicesInsideBoxHistory = JSON.parse(devicesInsideBoxHistory);

var devicesInsideBox = storage.global.devicesInsideBox;
if(devicesInsideBox == null) {
  devicesInsideBox = []
} else  {
   devicesInsideBox = JSON.parse(devicesInsideBox);
}


var devicesNewLocation = [];
var devicesNotifications = [];
davraInfo.forEach(function(entry){
  	 if(parseInt(entry["statusCode"]) == 2) {
       var x = {
         latitude: entry.latitude, 
         longitude: entry.longitude, 
         description: entry.description,
         statusString: entry.statusString, 
         deviceId: entry.deviceId
       };
       //Check if point crossed bounding box
       var crossedInside = geolib.isPointInside({"latitude":entry.latitude,"longitude": entry.longitude}, boundingBox);
       //Keep track of crossing devices
       if(crossedInside && devicesInsideBox.indexOf(entry.deviceId) == -1) {
          //First time crosses inside
          devicesInsideBox.push(entry.deviceId);
          var data = {"msgId": "cross_bounds","deviceId": entry.deviceId, "title":  entry.description, "action": "crossed_inside", "date": new Date(), "boundingBox": boundingBox }
          //Dweet the crossing inside devices info
          dweet.create(data);
          //Store in scriptr the historical data of crossing in devices
          devicesInsideBoxHistory.push(data);
          devicesNotifications.push(data);
       } else if(!crossedInside && devicesInsideBox.indexOf(entry.deviceId) != -1) {
           //Crossed outside
           devicesInsideBox.splice(devicesInsideBox.indexOf(entry.deviceId), 1);
           log.info(JSON.stringify(devicesInsideBox));
           var data = {"msgId": "cross_bounds","deviceId": entry.deviceId, "title":  entry.description, "action": "crossed_outside", "date": new Date(), "boundingBox": boundingBox}
           //Dweet the crossing outside box devices info
           dweet.create(data);
           //Store in scriptr the historical data of crossing out devices
           devicesInsideBoxHistory.push(data);
           devicesNotifications.push(data);
       }
       devicesNewLocation.push(x);
     }
});

storage.global.devicesInsideBox = (devicesInsideBox.length > 0) ? JSON.stringify(devicesInsideBox) : JSON.stringify([]);
storage.global.devicesInsideBoxHistory = (devicesInsideBoxHistory.length > 0) ? JSON.stringify(devicesInsideBoxHistory) : JSON.stringify([]);

var pbData = { "points": devicesNewLocation, "boundingBox": boundingBox, "notifications": devicesNotifications}
publish('davraChannel', pbData, false);

return pbData;			