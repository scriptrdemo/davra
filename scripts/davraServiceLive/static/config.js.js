/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//Configuration file used by client side\nvar config = {\n  http: {\n    baseUrl: \"https://demo2016.scriptrapps.io\", //Scriptr api url\n  \tdataScript:\"davraServiceLive/scripts/streamDevicesLocation\" //Script responsible to fetch data from davra service\n  },\n  websocket: {\n    url: \"wss://api.scriptrapps.io/TDA1QUMwQUI3Qw==\",\n    receive_channel: \"davraChannel\",\n    send_channel: \"davraChannel\"\n  },\n  map: {\n  \tkey: \"AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I\", //GOOGLE API KEY (Browser key)\n    output: 'embed',\n\ttype: \"google.maps.MapTypeId.ROADMAP\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n    mode: [\"marker\",\"polyline\"],//[\"marker\", \"polyline\"],\n    strokeColor: '#FF0000',\n    strokeOpacity: 1.0,\n    strokeWeight: 1.5,\n    fetchCenter: false,\n    zoom: 15,\n    defaultCenter: {lat: 32.716173\t, lng:  -117.1645189},\n\tblueImage: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Azure-icon.png',\n  \tgreenImage: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Chartreuse-icon.png',\n  },\n  dataHandler: {\n    transformFnc: \"transformToMapData\", //\"transformToMarkerData\", \"addMarkerPoints\" //Define the transformation function you will use\n  }\n}\n\n"},"scriptrdata":[]}}*#*#*/
var content= '//Configuration file used by client side\n\
var config = {\n\
  http: {\n\
    baseUrl: \"https://demo2016.scriptrapps.io\", //Scriptr api url\n\
  	dataScript:\"davraServiceLive/scripts/streamDevicesLocation\" //Script responsible to fetch data from davra service\n\
  },\n\
  websocket: {\n\
    url: \"wss://api.scriptrapps.io/TDA1QUMwQUI3Qw==\",\n\
    receive_channel: \"davraChannel\",\n\
    send_channel: \"davraChannel\"\n\
  },\n\
  map: {\n\
  	key: \"AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I\", //GOOGLE API KEY (Browser key)\n\
    output: \'embed\',\n\
	type: \"google.maps.MapTypeId.ROADMAP\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n\
    mode: [\"marker\",\"polyline\"],//[\"marker\", \"polyline\"],\n\
    strokeColor: \'#FF0000\',\n\
    strokeOpacity: 1.0,\n\
    strokeWeight: 1.5,\n\
    fetchCenter: false,\n\
    zoom: 15,\n\
    defaultCenter: {lat: 32.716173	, lng:  -117.1645189},\n\
	blueImage: \'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Azure-icon.png\',\n\
  	greenImage: \'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Chartreuse-icon.png\',\n\
  },\n\
  dataHandler: {\n\
    transformFnc: \"transformToMapData\", //\"transformToMarkerData\", \"addMarkerPoints\" //Define the transformation function you will use\n\
  }\n\
}\n\
\n\
';  response.write(content);response.close();			