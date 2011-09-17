//Here we add the event loader
window.addEventListener("load", function() { myExtension.init(); }, false);  
  
var myExtension = {  
  init: function() {  
    var appcontent = document.getElementById("appcontent");
    if(appcontent)  
      appcontent.addEventListener("DOMContentLoaded", myExtension.onPageLoad, true);  
  },  
  
  onPageLoad: function(aEvent) {  
    var doc = aEvent.originalTarget; // doc is document that triggered "onload" event  
    doSaveDetails();
    // add event listener for page unload   
    aEvent.originalTarget.defaultView.addEventListener("unload", function(event){ myExtension.onPageUnload(event); }, true);  
  },  
  
  onPageUnload: function(aEvent) {  
    // do something  
  }  
}  

function doSaveDetails(){
	//window.alert('start saving');
	var persist = Cc["@mozilla.org/embedding/browser/nsWebBrowserPersist;1"].
	createInstance(Ci.nsIWebBrowserPersist);
	var localPath = Cc["@mozilla.org/file/local;1"].
	createInstance(Ci.nsILocalFile);
	//Local directory where things will be stored
	localPath.initWithPath("/Users/Thoughtworks/git/testresult/"+document.title);
	var localFile = localPath.clone();
	//alert("/Users/Thoughtworks/git/testresult/"+document.title);
	//Saving file based on its title
	localFile.append("index.html");
	//Must be content.document
	persist.saveDocument(content.document, localFile, localPath, null, 0, 0);
	//window.alert('Finished saving current page');
 };