/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"(function ($) { //an IIFE so safely alias jQuery to $\n\t$.DataHandler = function (args) { \n          this.args = args;\n    };\n  \n    $.DataHandler.prototype = {\n      //Build your maker points, based on the data you are receiving.\n      /**In this example data has this format:\n      [\n\t\t{\n\t\t\t\"latitude\": 32.7052777778,\n\t\t\t\"longitude\": -117.153055556,\n\t\t\t\"description\": \"FTX20108052 - 166.130.138.146\",\n\t\t\t\"statusString\": \"Receiving heartbeats\",\n\t\t\t\"deviceId\": 1161\n\t\t},\n        {\n\t\t\t\"latitude\": 33.7052777778,\n\t\t\t\"longitude\": -117.103055556,\n\t\t\t\"description\": \"FTX20108052 - 166.130.138.146\",\n\t\t\t\"statusString\": \"Receiving heartbeats\",\n\t\t\t\"deviceId\": 1171\n\t\t}\n\t]\n      *SCRIPTR_COMMENT\n      transformToMapData: function(entries) {\n         var config = this.args.config;\n         var markersData = {};\n         var pathsData = {};\n         for (var i = 0; i < entries.length; i++) {\n          \tvar entry = entries[i];\n             markersData[entry.deviceId] = {\n              position: {lat: entry.latitude, lng: entry.longitude}, //Longitute/Lattitude info of marker\n              icon:  ((entry.statusString == \"Receiving heartbeats\") ? config.greenImage  : config.blueImage), //Replace default Image\n              title: \"Description: \"+ entry.description + \". DeviceId: \" + entry.deviceId, //Tooltip on Marker\n              zIndex: 4\n            };\n            \n            if(config.mode.indexOf(\"polyline\") != -1) {\n              \tpathsData[entry.deviceId] = {lat: entry.latitude, lng: entry.longitude}\n            }\n           \n         }\n        return {markers: markersData, paths: pathsData};\n      }\n  };\n}(jQuery));"},"scriptrdata":[]}}*#*#*/
var content= '(function ($) { //an IIFE so safely alias jQuery to $\n\
	$.DataHandler = function (args) { \n\
          this.args = args;\n\
    };\n\
  \n\
    $.DataHandler.prototype = {\n\
      //Build your maker points, based on the data you are receiving.\n\
      /**In this example data has this format:\n\
      [\n\
		{\n\
			\"latitude\": 32.7052777778,\n\
			\"longitude\": -117.153055556,\n\
			\"description\": \"FTX20108052 - 166.130.138.146\",\n\
			\"statusString\": \"Receiving heartbeats\",\n\
			\"deviceId\": 1161\n\
		},\n\
        {\n\
			\"latitude\": 33.7052777778,\n\
			\"longitude\": -117.103055556,\n\
			\"description\": \"FTX20108052 - 166.130.138.146\",\n\
			\"statusString\": \"Receiving heartbeats\",\n\
			\"deviceId\": 1171\n\
		}\n\
	]\n\
      **/\n\
      transformToMapData: function(entries) {\n\
         var config = this.args.config;\n\
         var markersData = {};\n\
         var pathsData = {};\n\
         for (var i = 0; i < entries.length; i++) {\n\
          	var entry = entries[i];\n\
             markersData[entry.deviceId] = {\n\
              position: {lat: entry.latitude, lng: entry.longitude}, //Longitute/Lattitude info of marker\n\
              icon:  ((entry.statusString == \"Receiving heartbeats\") ? config.greenImage  : config.blueImage), //Replace default Image\n\
              title: \"Description: \"+ entry.description + \". DeviceId: \" + entry.deviceId, //Tooltip on Marker\n\
              zIndex: 4\n\
            };\n\
            \n\
            if(config.mode.indexOf(\"polyline\") != -1) {\n\
              	pathsData[entry.deviceId] = {lat: entry.latitude, lng: entry.longitude}\n\
            }\n\
           \n\
         }\n\
        return {markers: markersData, paths: pathsData};\n\
      }\n\
  };\n\
}(jQuery));';  response.write(content);response.close();			