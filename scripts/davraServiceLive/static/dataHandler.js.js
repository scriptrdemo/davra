/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"(function ($) { //an IIFE so safely alias jQuery to $\n\t$.DataHandler = function (args) { \n          this.args = args;\n    };\n  \n    $.DataHandler.prototype = {\n      //Build your maker points, based on the data you are receiving.\n      /**In this example data has this format:\n      [\n\t\t{\n\t\t\t\"latitude\": 32.7052777778,\n\t\t\t\"longitude\": -117.153055556,\n\t\t\t\"description\": \"FTX20108052 - 166.130.138.146\",\n\t\t\t\"statusString\": \"Receiving heartbeats\",\n\t\t\t\"deviceId\": 1161\n\t\t},\n        {\n\t\t\t\"latitude\": 33.7052777778,\n\t\t\t\"longitude\": -117.103055556,\n\t\t\t\"description\": \"FTX20108052 - 166.130.138.146\",\n\t\t\t\"statusString\": \"Receiving heartbeats\",\n\t\t\t\"deviceId\": 1171\n\t\t}\n\t]\n      *SCRIPTR_COMMENT\n      transformToMapData: function(entries, map) {\n         var config = this.args.config;\n         var markersData = {};\n         var pathsData = {};\n         if(!this.alreadyCrossed) this.alreadyCrossed = [];\n         if(!this.allPolylines) this.allPolylines = {};\n         if(!this.allMarkers) this.allMarkers = {};\n         for (var i = 0; i < entries.length; i++) {\n          \tvar entry = entries[i];\n             markersData[entry.deviceId] = {\n              position: {lat: entry.latitude, lng: entry.longitude}, \n              icon:  ((entry.statusString == \"Receiving heartbeats\") ? config.greenImage  : config.blueImage), \n              title: \"Description: \"+ entry.description + \". DeviceId: \" + entry.deviceId,\n              zIndex: 4\n            };\n            \n            if(config.mode.indexOf(\"polyline\") != -1) {\n              \tpathsData[entry.deviceId] = {lat: entry.latitude, lng: entry.longitude}\n            }\n           \n         }\n         var self = this;\n         $.each(markersData, function(key,markerData){\n            var marker = new google.maps.Marker(markerData);\n            if(self.allMarkers[key]) {\n                var deviceMarkers = self.allMarkers[key]; //Get existing device markers\n                for(var i = 0; i < deviceMarkers.length; i++) {\n                 \tdeviceMarkers[i].setMap(null);\n                }\n              self.allMarkers[key].push(marker)\n            } else {\n              self.allMarkers[key]  = [marker];\n            } \n            marker.setMap(map);\n        }); \n           \n        $.each(pathsData, function(key,value){\n          (self.allPolylines[key])? self.allPolylines[key].push(value) : (self.allPolylines[key]  = [value]);\n        });\n        $.each(self.allPolylines, function(key,value){\n          var routePath = new google.maps.Polyline({\n            path: value,\n            geodesic: true,\n            strokeColor:  window.config.map.strokeColor,\n            strokeOpacity: window.config.map.strokeOpacity,\n            strokeWeight: window.config.map.strokeWeight,\n            map: map\n          });\n        });\n        \n        return map;\n      }\n  };\n}(jQuery));"},"scriptrdata":[]}}*#*#*/
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
      transformToMapData: function(entries, map) {\n\
         var config = this.args.config;\n\
         var markersData = {};\n\
         var pathsData = {};\n\
         if(!this.alreadyCrossed) this.alreadyCrossed = [];\n\
         if(!this.allPolylines) this.allPolylines = {};\n\
         if(!this.allMarkers) this.allMarkers = {};\n\
         for (var i = 0; i < entries.length; i++) {\n\
          	var entry = entries[i];\n\
             markersData[entry.deviceId] = {\n\
              position: {lat: entry.latitude, lng: entry.longitude}, \n\
              icon:  ((entry.statusString == \"Receiving heartbeats\") ? config.greenImage  : config.blueImage), \n\
              title: \"Description: \"+ entry.description + \". DeviceId: \" + entry.deviceId,\n\
              zIndex: 4\n\
            };\n\
            \n\
            if(config.mode.indexOf(\"polyline\") != -1) {\n\
              	pathsData[entry.deviceId] = {lat: entry.latitude, lng: entry.longitude}\n\
            }\n\
           \n\
         }\n\
         var self = this;\n\
         $.each(markersData, function(key,markerData){\n\
            var marker = new google.maps.Marker(markerData);\n\
            if(self.allMarkers[key]) {\n\
                var deviceMarkers = self.allMarkers[key]; //Get existing device markers\n\
                for(var i = 0; i < deviceMarkers.length; i++) {\n\
                 	deviceMarkers[i].setMap(null);\n\
                }\n\
              self.allMarkers[key].push(marker)\n\
            } else {\n\
              self.allMarkers[key]  = [marker];\n\
            } \n\
            marker.setMap(map);\n\
        }); \n\
           \n\
        $.each(pathsData, function(key,value){\n\
          (self.allPolylines[key])? self.allPolylines[key].push(value) : (self.allPolylines[key]  = [value]);\n\
        });\n\
        $.each(self.allPolylines, function(key,value){\n\
          var routePath = new google.maps.Polyline({\n\
            path: value,\n\
            geodesic: true,\n\
            strokeColor:  window.config.map.strokeColor,\n\
            strokeOpacity: window.config.map.strokeOpacity,\n\
            strokeWeight: window.config.map.strokeWeight,\n\
            map: map\n\
          });\n\
        });\n\
        \n\
        return map;\n\
      }\n\
  };\n\
}(jQuery));';  response.write(content);response.close();			