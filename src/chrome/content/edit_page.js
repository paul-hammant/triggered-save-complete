/* oncommand event */
function save_page_setup() {
	alert("Beginning to save current page");
	jQuery.noConflict();
	$ = function(selector,context) { 
	    return new jQuery.fn.init(selector,context||window._content.document); 
	};
	$.fn = $.prototype = jQuery.fn;

	//Calling only once. If timed loop wanted, use the commented code 
	performPersistence();
	/*function timerCallback() {
		
		var signal = $('body').attr('signal');
		
		if(signal != undefined) {
			//$('body').attr('signal', "true")
	         window.alert("Hello3!!!");
	         performPersistence();
	    }
	}*/
   // setInterval(timerCallback, 10000);
}

function performPersistence(){
	//Some Mozilla magic...
	var persist = Cc["@mozilla.org/embedding/browser/nsWebBrowserPersist;1"].
	createInstance(Ci.nsIWebBrowserPersist);
	var localPath = Cc["@mozilla.org/file/local;1"].
	createInstance(Ci.nsILocalFile);
	//Local directory where things will be stored
	localPath.initWithPath("/Users/Thoughtworks/git/testresult/"+$('title').text());
	var localFile = localPath.clone();
	//Saving file based on its title
	localFile.append("index.html");
	//Must be content.document
	persist.saveDocument(content.document, localFile, localPath, null, 0, 0);
	alert("Finished saving current page");
}
