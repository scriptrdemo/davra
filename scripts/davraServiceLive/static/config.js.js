/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//Configuration file used by client side\nvar config = {\n  http: {\n    baseUrl: \"\", //Scriptr api url\n  \tdataScript:\"davraServiceLive/scripts/generateDataLive\" //Script responsible to fetch data from davra service\n  },\n  websocket: {\n    url: \"wss://api.scriptrapps.io/YOUR_ANONYMOUS_TOKEN\",\n    receive_channel: \"pushDavraData\" //The Channel name to which the live GPS data will be pushed, and to which the client websocket will subscribe\n  },\n  map: {\n  \tkey: \"\", //GOOGLE API KEY (Browser key)\n    output: 'embed',\n\ttype: \"google.maps.MapTypeId.ROADMAP\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n    mode: [\"marker\",\"polyline\"],//[\"marker\", \"polyline\"],\n    strokeColor: '#FF0000',\n    strokeOpacity: 1.0,\n    strokeWeight: 1.5,\n    zoom: 16,\n    defaultCenter: {lat: 32.7153300\t, lng: -117.1572600},\n\tblueImage: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Azure-icon.png',\n    pinkImage: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Pink-icon.png',\n  \tgreenImage: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Chartreuse-icon.png',\n    trainIcon1: 'http://icons.iconarchive.com/icons/martz90/circle-addon2/32/public-transport-icon.png',\n    trainIcon2: 'http://icons.iconarchive.com/icons/aha-soft/transport/32/Train-icon.png'\n  },\n  dataHandler: {\n    transformFnc: \"transformToMapData\", //\"transformToMarkerData\", \"addMarkerPoints\" //Define the transformation function you will use\n  }\n}\n\n"},"scriptrdata":[]}}*#*#*/
var content= '//Configuration file used by client side\n\
var config = {\n\
  http: {\n\
    baseUrl: \"\", //Scriptr api url\n\
  	dataScript:\"davraServiceLive/scripts/generateDataLive\" //Script responsible to fetch data from davra service\n\
  },\n\
  websocket: {\n\
    url: \"wss://api.scriptrapps.io/YOUR_ANONYMOUS_TOKEN\",\n\
    receive_channel: \"pushDavraData\" //The Channel name to which the live GPS data will be pushed, and to which the client websocket will subscribe\n\
  },\n\
  map: {\n\
  	key: \"\", //GOOGLE API KEY (Browser key)\n\
    output: \'embed\',\n\
	type: \"google.maps.MapTypeId.ROADMAP\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n\
    mode: [\"marker\",\"polyline\"],//[\"marker\", \"polyline\"],\n\
    strokeColor: \'#FF0000\',\n\
    strokeOpacity: 1.0,\n\
    strokeWeight: 1.5,\n\
    zoom: 16,\n\
    defaultCenter: {lat: 32.7153300	, lng: -117.1572600},\n\
	blueImage: \'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Azure-icon.png\',\n\
    pinkImage: \'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Pink-icon.png\',\n\
  	greenImage: \'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Chartreuse-icon.png\',\n\
    trainIcon1: \'http://icons.iconarchive.com/icons/martz90/circle-addon2/32/public-transport-icon.png\',\n\
    trainIcon2: \'http://icons.iconarchive.com/icons/aha-soft/transport/32/Train-icon.png\'\n\
  },\n\
  dataHandler: {\n\
    transformFnc: \"transformToMapData\", //\"transformToMarkerData\", \"addMarkerPoints\" //Define the transformation function you will use\n\
  }\n\
}\n\
\n\
';  response.write(content);response.close();			