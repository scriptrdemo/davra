/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 //Update bounding box as user drags
var log = require("log");
log.setLevel("INFO");
var params = JSON.parse(request.rawBody);
//Update only if receiving message to update
if(params["msgId"] && params["msgId"] == "bounds_changed") {
  storage.global.devicesBoundingBox = params["path"];
  log.info("Updating bounding box value: storage.global.devicesBoundingBox "+  storage.global.devicesBoundingBox);
  //Maybe we should clean up data in devicesInsideBox???
}			