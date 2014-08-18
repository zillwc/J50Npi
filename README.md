# J50Nπ

Basic JSONP helper (pure JS)

## Quick Sample

```javascript
var request_url = "http://domain/something.jsonp";
var data_params = {};
var callback_function = function(data){ alert(data.attribute_name)};

J50Npi.getJSON({
	url: url, 
	data: data_params, 
	callback: callback_function
});
```

Note that the given url does not need a callback parameter. It will be set automatically to **J50Npi.success** that will be the one executing the given callback function.

## Parameters

- `url` - The request url (String - Required)
- `data` - Data parameters (Array - Optional)
- `callback` - Callbak function to handle the response (Function - Optional)
- `callbackParamName` - Name of the callback parameter (String - Optional - Default: "callback")
    
## Step by Step Beginner's Sample

1. Open your Browser

2. Open a non javascript intensive page; e.g. http://zillwc.com/

3. Open the console by pressing F12 or whatever key your browser use. You may need to select tab 'Console' (tested on Chrome and Internet Explorer 10)

4. Paste the below code (within the console)

```javascript
// This line taken from J50Npi.min.js (within this repo)
var J50Npi={currentScript:null,getJSON:function(e){var t=typeof e.url!=="undefined"?e.url:false;var n=typeof e.data!=="undefined"?e.data:{};var r=typeof e.callback!=="undefined"?e.callback:function(){console.log("No callback function passed as parameter")};var i=typeof e.debugMode==="boolean"?e.debugMode:false;var s=typeof e.callbackParamName!=="undefined"?e.callbackParamName:"callback";if(!t){console.error("J50Npi: Please pass in valid URL");return false}if(!r&&i)console.warn("J50Npi: No callback set. ");if(i){console.info("J50Npi URL: ");console.log(t);console.info("J50Npi Data: ");console.log(n);console.info("J50Npi Callback Parameter Name: ");console.log(s);console.info("J50Npi Callback Function: ");console.log(r.toString())}var o=t+(t.indexOf("?")+1?"&":"?");var u=document.getElementsByTagName("head")[0];var a=document.createElement("script");var f=[];var l="";this.success=r;n[s]="J50Npi.success";for(l in n){f.push(l+"="+encodeURIComponent(n[l]))}o+=f.join("&");a.type="text/javascript";a.src=o;if(this.currentScript)u.removeChild(currentScript);u.appendChild(a)},success:null}

// This is a WorldIP free geo-location database.
var url = "http://api.wipmania.com/jsonp";

// No specific data need to be sent there
var data = {};

// We need a function callback to be executed after the response is received
var callback = function(geodata){ alert(geodata.address.country); };

// And here is the magic:
J50Npi.getJSON({
	url: url, 
	data: data, 
	callback: callback
});
```

You should see an alert saying your current (ip based location) country name after half a second or so.


## Credit

Original source credit: 
Roberto Decurnex (nex.development@gmail.com)
https://github.com/robertodecurnex/J50Npi
