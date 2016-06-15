/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Live Map</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta charset=\"utf-8\">\n\t<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\t<link rel=\"stylesheet\" href=\"https://marv.scriptrapps.io/davraServiceLive/css/style.css\" />\n    <script src=\"https://marv.scriptrapps.io/davraServiceLive/static/config.js\"></script>\n    <script src=\"https://marv.scriptrapps.io/davraServiceLive/static/wsClient.js\"></script>\n     <script src=\"https://marv.scriptrapps.io/davraServiceLive/static/httpClient.js\"></script>\n     <script src=\"https://marv.scriptrapps.io/davraServiceLive/static/dataHandler.js\"></script>\n    <script src=\"https://marv.scriptrapps.io/davraServiceLive/static/utils.js\"></script>\n  </head>\n  <body>\n    <div id=\"map\"></div>\n    <script>\n      var wsClient; \n      var httpClient; //for first load\n      var dataHandler;\n      var zoom;\n      var lat;\n      var lng;\n      $(window).load(function() { \n          wsClient = new $.WSClient({config: window.config.websocket});\n          httpClient = new $.HTTPClient({config: window.config.http});\n          dataHandler = new $.DataHandler({config: window.config.map});\n        \n          zoom = $.urlParam('zoom');\n          lat = $.urlParam('lat');\n          lng =$.urlParam('lng');\n        \n          //Load google Maps API\n          var scr = document.createElement(\"script\");\n          scr.setAttribute(\"src\",'https://maps.googleapis.com/maps/api/js?key='+config.map.key+'&callback=initMap&output='+config.map.output);\n          document.head.appendChild(scr);\n      });\n      \n      var map;\n      \n      var allPolylines = {};\n      var allMarkers = {};\n      \n      var isCenterFetched = window.config.fetchCenter;\n      function addMapPoints(entries) {\n        var data = eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries)\");\n        var markersData  = data.markers;\n        var pathsData = data.paths;\n        \n         $.each(markersData, function(key,marker){\n            var marker = new google.maps.Marker(marker);\n            if(allMarkers[key]) {\n                var deviceMarkers = allMarkers[key]; //Get existing device markers\n                for(var i = 0; i < deviceMarkers.length; i++) {\n                 \tdeviceMarkers[i].setMap(null);\n                }\n              allMarkers[key].push(marker)\n            } else {\n              allMarkers[key]  = [marker];\n            } \n            marker.setMap(map);\n        });\n           \n        $.each(pathsData, function(key,value){\n          (allPolylines[key])? allPolylines[key].push(value) : (allPolylines[key]  = [value]);\n        });\n        $.each(allPolylines, function(key,value){\n          var routePath = new google.maps.Polyline({\n            path: value,\n            geodesic: true,\n            strokeColor:  window.config.map.strokeColor,\n            strokeOpacity: window.config.map.strokeOpacity,\n            strokeWeight: window.config.map.strokeWeight,\n            map: map\n          });\n        })\n\n      }\n\n      function showFailMessage(message) {\n        $(\"#map\").html(message);\n      }\n\n      function initMap() {\n         map = new google.maps.Map(document.getElementById('map'), {\n        \tzoom: (zoom !=null) ? parseInt(zoom) : window.config.map.zoom,\n          \tcenter: (lat !=null && lng != null)? {lat: parseFloat(lat), lng: parseFloat(lng) }  : window.config.map.defaultCenter,\n          \tmapTypeId: eval(window.config.map.type)\n      \t});\n        \n        httpClient.callApi(httpClient.buildRequest(), openSocketConnection, showFailMessage);\n      }\n      \n      function openSocketConnection(initialLoad) {\n         addMapPoints(initialLoad);\n         wsClient.openConnection(addMapPoints, showFailMessage);\n      }\n    </script>\n  </body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <title>Live Map</title>\n\
    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n\
    <meta charset=\"utf-8\">\n\
	<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\
	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\
	<link rel=\"stylesheet\" href=\"https://marv.scriptrapps.io/davraServiceLive/css/style.css\" />\n\
    <script src=\"https://marv.scriptrapps.io/davraServiceLive/static/config.js\"></script>\n\
    <script src=\"https://marv.scriptrapps.io/davraServiceLive/static/wsClient.js\"></script>\n\
     <script src=\"https://marv.scriptrapps.io/davraServiceLive/static/httpClient.js\"></script>\n\
     <script src=\"https://marv.scriptrapps.io/davraServiceLive/static/dataHandler.js\"></script>\n\
    <script src=\"https://marv.scriptrapps.io/davraServiceLive/static/utils.js\"></script>\n\
  </head>\n\
  <body>\n\
    <div id=\"map\"></div>\n\
    <script>\n\
      var wsClient; \n\
      var httpClient; //for first load\n\
      var dataHandler;\n\
      var zoom;\n\
      var lat;\n\
      var lng;\n\
      $(window).load(function() { \n\
          wsClient = new $.WSClient({config: window.config.websocket});\n\
          httpClient = new $.HTTPClient({config: window.config.http});\n\
          dataHandler = new $.DataHandler({config: window.config.map});\n\
        \n\
          zoom = $.urlParam(\'zoom\');\n\
          lat = $.urlParam(\'lat\');\n\
          lng =$.urlParam(\'lng\');\n\
        \n\
          //Load google Maps API\n\
          var scr = document.createElement(\"script\");\n\
          scr.setAttribute(\"src\",\'https://maps.googleapis.com/maps/api/js?key=\'+config.map.key+\'&callback=initMap&output=\'+config.map.output);\n\
          document.head.appendChild(scr);\n\
      });\n\
      \n\
      var map;\n\
      \n\
      var allPolylines = {};\n\
      var allMarkers = {};\n\
      \n\
      var isCenterFetched = window.config.fetchCenter;\n\
      function addMapPoints(entries) {\n\
        var data = eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries)\");\n\
        var markersData  = data.markers;\n\
        var pathsData = data.paths;\n\
        \n\
         $.each(markersData, function(key,marker){\n\
            var marker = new google.maps.Marker(marker);\n\
            if(allMarkers[key]) {\n\
                var deviceMarkers = allMarkers[key]; //Get existing device markers\n\
                for(var i = 0; i < deviceMarkers.length; i++) {\n\
                 	deviceMarkers[i].setMap(null);\n\
                }\n\
              allMarkers[key].push(marker)\n\
            } else {\n\
              allMarkers[key]  = [marker];\n\
            } \n\
            marker.setMap(map);\n\
        });\n\
           \n\
        $.each(pathsData, function(key,value){\n\
          (allPolylines[key])? allPolylines[key].push(value) : (allPolylines[key]  = [value]);\n\
        });\n\
        $.each(allPolylines, function(key,value){\n\
          var routePath = new google.maps.Polyline({\n\
            path: value,\n\
            geodesic: true,\n\
            strokeColor:  window.config.map.strokeColor,\n\
            strokeOpacity: window.config.map.strokeOpacity,\n\
            strokeWeight: window.config.map.strokeWeight,\n\
            map: map\n\
          });\n\
        })\n\
\n\
      }\n\
\n\
      function showFailMessage(message) {\n\
        $(\"#map\").html(message);\n\
      }\n\
\n\
      function initMap() {\n\
         map = new google.maps.Map(document.getElementById(\'map\'), {\n\
        	zoom: (zoom !=null) ? parseInt(zoom) : window.config.map.zoom,\n\
          	center: (lat !=null && lng != null)? {lat: parseFloat(lat), lng: parseFloat(lng) }  : window.config.map.defaultCenter,\n\
          	mapTypeId: eval(window.config.map.type)\n\
      	});\n\
        \n\
        httpClient.callApi(httpClient.buildRequest(), openSocketConnection, showFailMessage);\n\
      }\n\
      \n\
      function openSocketConnection(initialLoad) {\n\
         addMapPoints(initialLoad);\n\
         wsClient.openConnection(addMapPoints, showFailMessage);\n\
      }\n\
    </script>\n\
  </body>\n\
</html>';  response.write(content);response.close();			