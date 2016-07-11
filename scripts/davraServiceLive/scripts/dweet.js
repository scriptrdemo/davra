/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var http = require("http");
var config = require("./config");
var log = require("log");
log.setLevel("INFO");

//Creates a unique id for identification purposes.
var generateUid = function (separator) {
    var delim = separator || "-";
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + delim + S4() + delim + S4() + delim + S4() + delim + S4() + S4() + S4());
};

function create(data) {
	var time = new Date();
	var davraGUID = storage.global.davraDweetId;
  	if(davraGUID == null) {
       davraGUID = storage.global.davraDweetId = generateUid();
       
       //Send email once on davra dweet id generation
       var mailBody = "Hello,<br><br>";
       mailBody += "<a href='https://dweet.io/get/dweets/for/" + davraGUID + "'>Click here to list your davra dweets alert</a>";
	   mailBody += "<br><br>";
       mailBody += "<a href='https://dweet.io/get/latest/dweet/for/" + davraGUID + "'>Click here to list your latest davra dweet 		</a>";
     
    var emailConfig = {
		"to": config.email.to,
		"fromName": config.email.fromName,
		"subject": "Dweet URL for Bounds Crossed",
        "body": mailBody
    };
	sendMail(emailConfig.to, emailConfig.fromName, emailConfig.subject, emailConfig.body);
    }
    
    log.info("POST to dweet with GUID: "+davraGUID);
  	var params = { 
      "method": "POST",
      "url": "https://dweet.io/dweet/for/"+davraGUID,
      "headers": {
            "Content-Type": "application/json"
       },
       bodyString: JSON.stringify(data)
    };
    http.request(params);
}			