var J50Npi = {  
    currentScript: null,  
    getJSON: function(options) {
      var url = (typeof options.url !== 'undefined') ? options.url : false;
      var data = (typeof options.data !== 'undefined') ? options.data : {};
      var callback = (typeof options.callback !== 'undefined') ? options.callback : function(){ console.log("No callback function passed as parameter"); };
      var debugMode = (typeof options.debugMode === 'boolean') ? options.debugMode : false;
      var callbackParamName = (typeof options.callbackParamName !== 'undefined') ? options.callbackParamName : "callback";

      if (!url) {
        console.error("J50Npi: Please pass in valid URL");
        return false;
      }

      if (!callback && debugMode)
        console.warn('J50Npi: No callback set. ');

      if (debugMode) {
        console.info("J50Npi URL: ");
          console.log(url);
        console.info("J50Npi Data: ");
          console.log(data);
        console.info("J50Npi Callback Parameter Name: ");
          console.log(callbackParamName);
        console.info("J50Npi Callback Function: ");
          console.log(callback.toString());
      }

      var src = url + (url.indexOf("?")+1 ? "&" : "?");
      var head = document.getElementsByTagName("head")[0];
      var newScript = document.createElement("script");
      var params = [];
      var param_name = ""

      this.success = callback;

      data[callbackParamName] = "J50Npi.success";
      for(param_name in data){  
          params.push(param_name + "=" + encodeURIComponent(data[param_name]));  
      }
      src += params.join("&")

      newScript.type = "text/javascript";  
      newScript.src = src;

      if(this.currentScript) head.removeChild(currentScript);
      head.appendChild(newScript);
    },
    success: null
}; 
