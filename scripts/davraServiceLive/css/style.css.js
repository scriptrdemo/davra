/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"html, body {\n\theight: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n#map {\n   height: 100%;\n   width: 70%;\n   float: left;\n}\n\n#tracker {\n    width: 30%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    overflow-y: scroll;\n    background: #fafafa;\n    font-size: 14px;\n    color: #333;\n    padding-left: 10px;\n    line-height: 1.6;\n}"},"scriptrdata":[]}}*#*#*/
var content= 'html, body {\n\
	height: 100%;\n\
    margin: 0;\n\
    padding: 0;\n\
}\n\
\n\
#map {\n\
   height: 100%;\n\
   width: 70%;\n\
   float: left;\n\
}\n\
\n\
#tracker {\n\
    width: 30%;\n\
    position: absolute;\n\
    right: 0;\n\
    top: 0;\n\
    bottom: 0;\n\
    overflow-y: scroll;\n\
    background: #fafafa;\n\
    font-size: 14px;\n\
    color: #333;\n\
    padding-left: 10px;\n\
    line-height: 1.6;\n\
}';  response.write(content);response.close();			