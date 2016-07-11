/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Davra Live Map</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta charset=\"utf-8\">\n\t<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\t<link rel=\"stylesheet\" href=\"https://demo2016.scriptrapps.io/davraServiceLive/css/style.css\" />\n    <script src=\"https://demo2016.scriptrapps.io/davraServiceLive/static/config.js\"></script>\n    <script src=\"https://demo2016.scriptrapps.io/davraServiceLive/static/wsClient.js\"></script>\n     <script src=\"https://demo2016.scriptrapps.io/davraServiceLive/static/httpClient.js\"></script>\n     <script src=\"https://demo2016.scriptrapps.io/davraServiceLive/static/dataHandler.js\"></script>\n    <script src=\"https://demo2016.scriptrapps.io/davraServiceLive/static/utils.js\"></script>\n  </head>\n  <body>\n    <div id=\"map\"></div>\n    <div id=\"tracker\"></div>\n    <script>\n      var wsClient; \n      var httpClient; //for first load\n      var dataHandler;\n      var map;\n      var zoom;\n      var lat;\n      var lng;\n      var boundingBox;\n      $(window).load(function() { \n          wsClient = new $.WSClient({config: window.config.websocket});\n          httpClient = new $.HTTPClient({config: window.config.http});\n          dataHandler = new $.DataHandler({config: window.config.map});\n        \n          zoom = $.urlParam('zoom');\n          lat = $.urlParam('lat');\n          lng =$.urlParam('lng');\n        \n          //Load google Maps API\n          var scr = document.createElement(\"script\");\n          scr.setAttribute(\"src\",'https://maps.googleapis.com/maps/api/js?key='+config.map.key+'&libraries=geometry&callback=initMap&output='+config.map.output);\n          document.head.appendChild(scr);\n      });\n      \n      function addMapPoints(entries, firstLoad) {\n        if(entries && entries.points) {\n           map = eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries.points,map)\");\n        }\n      \tif(entries && entries.boundingBox) {\n       \t \trenderBoundingBox(entries.boundingBox, firstLoad);\n        } \n        \n        if(entries && entries[\"msgId\"] ==  \"bounds_changed\" && entries[\"path\"]) {\n          \trenderBoundingBox(JSON.parse(entries[\"path\"]), firstLoad);\n        }\n        \n        if(entries && entries.notifications) {\n       \t \tlogInfo(entries.notifications);\n        }\n        \n      }\n      function logInfo (notifications) {\n          $.each(notifications, function(index, value){\n          \t$(\"#tracker\").append(value.title +\" with device id \"+ JSON.stringify(value.deviceId) + \" \" + value.action + \" bounding box \"+ JSON.stringify(value.boundingBox) + \" @\"+value.date+\".<br><br>\");\n         })\n      }\n      \n      function renderBoundingBox(polygon, firstLoad) {\n         var path = [];\n         $.each(polygon, function(index, value){\n             path.push({\"lat\": value.latitude, \"lng\": value.longitude})\n         })\n         if(boundingBox && boundingBox.setMap instanceof Function) {\n            boundingBox.setMap(null);\n         }\n\n         boundingBox = new google.maps.Polygon({\n          path: path,\n          strokeColor: '#FF0000',\n          strokeOpacity: 1.0,\n          strokeWeight: 2,\n          editable: false,\n          draggable: true\n        });\n       \n        boundingBox.setMap(map);\n        \n        if(firstLoad) {\n          map.setCenter(path[0]);\n        }\n        \n        boundingBox.addListener('dragend', function(event) {\n           var p = this.getPath();\n           var path = [];\n           p.forEach(function(xy, i) {\n               path.push({\"latitude\": xy.lat(), \"longitude\": xy.lng()});\n           });\n           wsClient.sendMessage({\"msgId\": \"bounds_changed\", \"path\": JSON.stringify(path)});\n        });\n      }\n\n      function showFailMessage(message) {\n        $(\"#map\").html(message);\n      }\n      \n      function initMap() {\n         map = new google.maps.Map(document.getElementById('map'), {\n        \tzoom: (zoom !=null) ? parseInt(zoom) : window.config.map.zoom,\n          \tcenter: (lat !=null && lng != null)? {lat: parseFloat(lat), lng: parseFloat(lng) }  : window.config.map.defaultCenter,\n          \tmapTypeId: eval(window.config.map.type)\n      \t});\n        //INITIATE INITIAL CALL TO START STREAMING DATA TO MAP\n        httpClient.callApi(httpClient.buildRequest(), openSocketConnection, showFailMessage);\n      }\n      \n      function openSocketConnection(initialLoad) {\n         addMapPoints(initialLoad, true);\n         wsClient.openConnection(addMapPoints, showFailMessage);\n      }\n      \n    </script>\n  </body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <title>Davra Live Map</title>\n\
    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n\
    <meta charset=\"utf-8\">\n\
	<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\
	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\
	<link rel=\"stylesheet\" href=\"https://demo2016.scriptrapps.io/davraServiceLive/css/style.css\" />\n\
    <script src=\"https://demo2016.scriptrapps.io/davraServiceLive/static/config.js\"></script>\n\
    <script src=\"https://demo2016.scriptrapps.io/davraServiceLive/static/wsClient.js\"></script>\n\
     <script src=\"https://demo2016.scriptrapps.io/davraServiceLive/static/httpClient.js\"></script>\n\
     <script src=\"https://demo2016.scriptrapps.io/davraServiceLive/static/dataHandler.js\"></script>\n\
    <script src=\"https://demo2016.scriptrapps.io/davraServiceLive/static/utils.js\"></script>\n\
  </head>\n\
  <body>\n\
    <div id=\"map\"></div>\n\
    <div id=\"tracker\"></div>\n\
    <script>\n\
      var wsClient; \n\
      var httpClient; //for first load\n\
      var dataHandler;\n\
      var map;\n\
      var zoom;\n\
      var lat;\n\
      var lng;\n\
      var boundingBox;\n\
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
          scr.setAttribute(\"src\",\'https://maps.googleapis.com/maps/api/js?key=\'+config.map.key+\'&libraries=geometry&callback=initMap&output=\'+config.map.output);\n\
          document.head.appendChild(scr);\n\
      });\n\
      \n\
      function addMapPoints(entries, firstLoad) {\n\
        if(entries && entries.points) {\n\
           map = eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries.points,map)\");\n\
        }\n\
      	if(entries && entries.boundingBox) {\n\
       	 	renderBoundingBox(entries.boundingBox, firstLoad);\n\
        } \n\
        \n\
        if(entries && entries[\"msgId\"] ==  \"bounds_changed\" && entries[\"path\"]) {\n\
          	renderBoundingBox(JSON.parse(entries[\"path\"]), firstLoad);\n\
        }\n\
        \n\
        if(entries && entries.notifications) {\n\
       	 	logInfo(entries.notifications);\n\
        }\n\
        \n\
      }\n\
      function logInfo (notifications) {\n\
          $.each(notifications, function(index, value){\n\
          	$(\"#tracker\").append(value.title +\" with device id \"+ JSON.stringify(value.deviceId) + \" \" + value.action + \" bounding box \"+ JSON.stringify(value.boundingBox) + \" @\"+value.date+\".<br><br>\");\n\
         })\n\
      }\n\
      \n\
      function renderBoundingBox(polygon, firstLoad) {\n\
         var path = [];\n\
         $.each(polygon, function(index, value){\n\
             path.push({\"lat\": value.latitude, \"lng\": value.longitude})\n\
         })\n\
         if(boundingBox && boundingBox.setMap instanceof Function) {\n\
            boundingBox.setMap(null);\n\
         }\n\
\n\
         boundingBox = new google.maps.Polygon({\n\
          path: path,\n\
          strokeColor: \'#FF0000\',\n\
          strokeOpacity: 1.0,\n\
          strokeWeight: 2,\n\
          editable: false,\n\
          draggable: true\n\
        });\n\
       \n\
        boundingBox.setMap(map);\n\
        \n\
        if(firstLoad) {\n\
          map.setCenter(path[0]);\n\
        }\n\
        \n\
        boundingBox.addListener(\'dragend\', function(event) {\n\
           var p = this.getPath();\n\
           var path = [];\n\
           p.forEach(function(xy, i) {\n\
               path.push({\"latitude\": xy.lat(), \"longitude\": xy.lng()});\n\
           });\n\
           wsClient.sendMessage({\"msgId\": \"bounds_changed\", \"path\": JSON.stringify(path)});\n\
        });\n\
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
        //INITIATE INITIAL CALL TO START STREAMING DATA TO MAP\n\
        httpClient.callApi(httpClient.buildRequest(), openSocketConnection, showFailMessage);\n\
      }\n\
      \n\
      function openSocketConnection(initialLoad) {\n\
         addMapPoints(initialLoad, true);\n\
         wsClient.openConnection(addMapPoints, showFailMessage);\n\
      }\n\
      \n\
    </script>\n\
  </body>\n\
</html>';  response.write(content);response.close();			