/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /** 
 * Start from scratch
 * Clean boundingBox info, i.e system will default to whatever is inside scripts/config bounding box points
 * Clean up davraDweetId, i.e on next run generate a new dweet id and mail it to info in scripts/config email
 * Clean up devicesInsideBox, i.e start tracking devices inside current bounding box
 * Clean up devicesInsideBoxHistory, i.e cleanup all historical info
**/
storage.global.devicesBoundingBox = null;
storage.global.davraDweetId = null;
storage.global.devicesInsideBox = null;
storage.global.devicesInsideBoxHistory = null;

return "devicesInsideBoxHistory, devicesInsideBox, davraDweetId, devicesBoundingBox values has been set to default";			